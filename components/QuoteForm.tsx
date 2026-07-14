"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import {
  PROPERTY_TYPES,
  SERVICE_OPTIONS,
  validateQuote,
  type QuoteErrors,
  type QuoteFields,
} from "@/lib/quote";
import { HOTSPOTS } from "@/components/explorer/explorer-data";

const fieldClass =
  "mt-1.5 block w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition duration-200 placeholder:text-slate-600/50 hover:border-brand-500/50 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/20";

const labelClass = "block text-sm font-medium text-brand-950";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: QuoteFields = {
  name: "",
  phone: "",
  email: "",
  postcode: "",
  propertyType: "",
  service: "",
  message: "",
};

function serviceFromLink(link: string): string {
  return link.includes("removal") ? "removal" : "survey";
}

export default function QuoteForm() {
  const [values, setValues] = useState<QuoteFields>(EMPTY);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const errorSummaryRef = useRef<HTMLDivElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  const errorEntries = Object.entries(errors).filter(
    (entry): entry is [keyof QuoteFields, string] => Boolean(entry[1]),
  );
  const errorCount = errorEntries.length;

  useEffect(() => {
    if (errorCount > 0) errorSummaryRef.current?.focus();
  }, [errorCount]);

  // Move focus to the success confirmation so keyboard and screen-reader users
  // are told the enquiry went through (the submit button they used is now gone).
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  // Prefill from the property explorer (?material=<id>). Runs after hydration —
  // the statically-prerendered HTML has no query param.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const clarity = params.get("clarity");
    if (clarity) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional query-string prefill after hydration
      setValues((v) => ({ ...v, message: clarity }));
      return;
    }
    const material = params.get("material");
    if (!material) return;
    const hotspot = HOTSPOTS.find((h) => h.id === material);
    if (!hotspot) return;
    setValues((v) => ({
      ...v,
      material,
      service: serviceFromLink(hotspot.serviceLink),
      message: `Enquiry via property explorer: ${hotspot.label}\n\n${v.message}`,
    }));
  }, []);

  function update<K extends keyof QuoteFields>(key: K, value: QuoteFields[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateQuote(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    setStatus("submitting");
    setServerError(null);

    const fd = new FormData();
    for (const [k, v] of Object.entries(values)) {
      if (v) fd.append(k, v);
    }
    fd.append("company", ""); // honeypot (empty for real users)

    try {
      const res = await fetch("/api/quote", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: QuoteErrors;
      };
      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }
      if (data.errors) setErrors(data.errors);
      setServerError(
        data.error ?? "Something went wrong. Please try again or call us.",
      );
      setStatus("error");
    } catch {
      setServerError("Network error. Please try again or call us.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="relative overflow-hidden rounded-2xl border border-eco-500/30 bg-white p-8 text-center shadow-card outline-none"
      >
        <span
          className="gradient-hairline absolute inset-x-0 top-0"
          aria-hidden="true"
        />
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-eco-500/12 text-eco-700 ring-1 ring-inset ring-eco-500/25">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-brand-950">
          Enquiry received — thank you
        </h3>
        <p className="mt-2 text-slate-600">
          We&rsquo;ve emailed you a confirmation and our Glasgow team will be in
          touch, usually within 24 hours. If it&rsquo;s urgent, please call us.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
    >
      {/* Signature top seam */}
      <span
        className="gradient-hairline absolute inset-x-0 top-0"
        aria-hidden="true"
      />
      {/* Honeypot — hidden from users, checked server-side */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {values.material && (
        <p className="mb-5 rounded-lg bg-brand-950/5 px-3.5 py-2.5 text-sm text-brand-950">
          Enquiring about:{" "}
          <span className="font-semibold">
            {HOTSPOTS.find((h) => h.id === values.material)?.label}
          </span>
        </p>
      )}

      {errorEntries.length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-5 rounded-lg border border-danger/25 bg-danger/10 px-4 py-3 text-sm text-danger"
        >
          <p className="font-semibold">
            Please correct {errorEntries.length}{" "}
            {errorEntries.length === 1 ? "error" : "errors"} before sending.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <a className="underline underline-offset-2" href={`#${field}`}>
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Text
          id="name"
          label="Name"
          required
          value={values.name}
          error={errors.name}
          autoComplete="name"
          onChange={(v) => update("name", v)}
        />
        <Text
          id="phone"
          label="Phone"
          type="tel"
          required
          value={values.phone}
          error={errors.phone}
          autoComplete="tel"
          onChange={(v) => update("phone", v)}
        />
        <Text
          id="email"
          label="Email"
          type="email"
          required
          value={values.email}
          error={errors.email}
          autoComplete="email"
          onChange={(v) => update("email", v)}
        />
        <Text
          id="postcode"
          label="Postcode"
          required
          value={values.postcode}
          error={errors.postcode}
          autoComplete="postal-code"
          onChange={(v) => update("postcode", v)}
        />
        <div>
          <label htmlFor="propertyType" className={labelClass}>
            Property type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={values.propertyType}
            onChange={(e) => update("propertyType", e.target.value)}
            className={fieldClass}
          >
            <option value="">Select…</option>
            {PROPERTY_TYPES.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Service needed
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className={fieldClass}
          >
            <option value="">Select…</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={fieldClass}
        />
      </div>

      {serverError && (
        <p className="mt-5 rounded-lg bg-danger/10 px-3.5 py-2.5 text-sm text-danger" role="alert">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="gradient-cta mt-6 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cta active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-sm"
      >
        {status === "submitting" ? "Sending…" : "Request My Free Quote"}
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-slate-600">
        By sending this form, you agree that we may use your details to respond to your enquiry. Read our <Link href="/privacy-policy" className="font-medium text-brand-700 underline underline-offset-2">Privacy Policy</Link>.
      </p>
    </form>
  );
}

function Text({
  id,
  label,
  value,
  onChange,
  error,
  required = false,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
