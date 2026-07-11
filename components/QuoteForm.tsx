"use client";

import { useEffect, useRef, useState } from "react";
import { Paperclip, Check, X } from "lucide-react";
import {
  PROPERTY_TYPES,
  SERVICE_OPTIONS,
  MAX_PHOTOS,
  MAX_PHOTO_BYTES,
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
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  // Prefill from the property explorer (?material=<id>). Runs after hydration —
  // the statically-prerendered HTML has no query param.
  useEffect(() => {
    const material = new URLSearchParams(window.location.search).get("material");
    if (!material) return;
    const hotspot = HOTSPOTS.find((h) => h.id === material);
    if (!hotspot) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional post-hydration prefill
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

  function onFiles(list: FileList | null) {
    setPhotoError(null);
    if (!list) return;
    const picked = Array.from(list);
    if (picked.length > MAX_PHOTOS) {
      setPhotoError(`Please attach no more than ${MAX_PHOTOS} photos.`);
      return;
    }
    if (picked.some((f) => f.size > MAX_PHOTO_BYTES)) {
      setPhotoError("Each photo must be 5 MB or smaller.");
      return;
    }
    setPhotos(picked);
  }

  function removePhotos() {
    setPhotos([]);
    setPhotoError(null);
    if (fileRef.current) fileRef.current.value = "";
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
    photos.forEach((p) => fd.append("photos", p));

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
      <div className="relative overflow-hidden rounded-2xl border border-eco-500/30 bg-white p-8 text-center shadow-card">
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

      <div className="mt-5">
        <span className={labelClass}>Photos (optional)</span>
        <label
          htmlFor="photos"
          className="mt-1.5 flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-line bg-surface px-3.5 py-3 text-sm text-slate-600 transition duration-200 hover:border-brand-500 hover:bg-brand-500/5 hover:text-brand-700"
        >
          <Paperclip className="h-4 w-4" aria-hidden="true" />
          Attach up to 3 photos — a safe-distance photo helps us price faster
          <input
            ref={fileRef}
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(e) => onFiles(e.target.files)}
          />
        </label>
        {photos.length > 0 && (
          <div className="mt-2 flex items-center justify-between rounded-lg bg-surface px-3 py-2 text-sm text-slate-600">
            <span>
              {photos.length} photo{photos.length > 1 ? "s" : ""} attached
            </span>
            <button
              type="button"
              onClick={removePhotos}
              className="inline-flex items-center gap-1 text-xs font-medium text-brand-700 hover:text-brand-500"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" /> Clear
            </button>
          </div>
        )}
        {photoError && (
          <p className="mt-1.5 text-sm text-danger">{photoError}</p>
        )}
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
      <p className="mt-3 text-center text-xs text-slate-600" aria-live="polite">
        Free, fixed quotes · No-obligation advice · Response within 24 hours
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
