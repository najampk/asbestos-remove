import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/constants";
import {
  validateQuote,
  labelFor,
  PROPERTY_TYPES,
  SERVICE_OPTIONS,
  MAX_PHOTOS,
  MAX_PHOTO_BYTES,
  RATE_LIMIT,
  type QuoteFields,
} from "@/lib/quote";
import { HOTSPOTS } from "@/components/explorer/explorer-data";
import QuoteNotificationEmail from "@/emails/QuoteNotificationEmail";
import QuoteAutoReplyEmail from "@/emails/QuoteAutoReplyEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM = `Asbestos Remove <${BUSINESS.emailGeneral}>`;

// Simple in-memory per-IP rate limit. Adequate as a basic guard; swap for a shared
// store (KV/Upstash) if horizontal scaling makes per-instance memory insufficient.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently succeed so bots get no signal.
  if ((form.get("company") as string)?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const fields: QuoteFields = {
    name: ((form.get("name") as string) ?? "").trim(),
    phone: ((form.get("phone") as string) ?? "").trim(),
    email: ((form.get("email") as string) ?? "").trim(),
    postcode: ((form.get("postcode") as string) ?? "").trim(),
    propertyType: ((form.get("propertyType") as string) ?? "").trim(),
    service: ((form.get("service") as string) ?? "").trim(),
    message: ((form.get("message") as string) ?? "").trim(),
    material: ((form.get("material") as string) ?? "").trim() || undefined,
  };

  const errors = validateQuote(fields);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // Photo attachments (optional, ≤ MAX_PHOTOS, images only, size-capped).
  const files = form
    .getAll("photos")
    .filter((f): f is File => f instanceof File && f.size > 0);
  const attachments: { filename: string; content: string }[] = [];
  for (const file of files.slice(0, MAX_PHOTOS)) {
    if (!file.type.startsWith("image/") || file.size > MAX_PHOTO_BYTES) continue;
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name, content: buffer.toString("base64") });
  }

  const materialLabel = fields.material
    ? HOTSPOTS.find((h) => h.id === fields.material)?.label
    : undefined;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send quote email.");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const propertyTypeLabel = labelFor(PROPERTY_TYPES, fields.propertyType);
  const serviceLabel = labelFor(SERVICE_OPTIONS, fields.service);

  try {
    // Notification to the business (reply-to = customer).
    const notify = await resend.emails.send({
      from: FROM,
      to: BUSINESS.emailGeneral,
      replyTo: fields.email,
      subject: `New quote enquiry — ${fields.name} (${fields.postcode})`,
      react: QuoteNotificationEmail({
        name: fields.name,
        phone: fields.phone,
        email: fields.email,
        postcode: fields.postcode,
        propertyType: propertyTypeLabel,
        service: serviceLabel,
        message: fields.message,
        materialLabel,
        photoCount: attachments.length,
      }),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (notify.error) {
      console.error("Resend notification error:", notify.error);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your enquiry. Please call us instead." },
        { status: 502 },
      );
    }

    // Branded auto-reply to the customer (best-effort — don't fail the request).
    try {
      await resend.emails.send({
        from: FROM,
        to: fields.email,
        subject: "We've received your enquiry — Asbestos Remove",
        react: QuoteAutoReplyEmail({
          name: fields.name,
          phoneDisplay: BUSINESS.phoneDisplay,
          phoneHref: BUSINESS.phoneHref,
        }),
      });
    } catch (err) {
      console.error("Auto-reply failed (non-fatal):", err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote submission failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call us instead." },
      { status: 500 },
    );
  }
}
