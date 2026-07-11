// lib/quote.ts
// Shared contract for the quote form (SPEC.md §1.4 / §5.11). Field options, the
// request payload type, pure validation and limits are used by BOTH the client
// form and the server API route, so they can never drift apart.

export interface SelectOption {
  value: string;
  label: string;
}

export const PROPERTY_TYPES: SelectOption[] = [
  { value: "home", label: "Home" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
];

export const SERVICE_OPTIONS: SelectOption[] = [
  { value: "survey", label: "Survey" },
  { value: "removal", label: "Removal" },
  { value: "disposal", label: "Disposal" },
  { value: "management", label: "Management" },
  { value: "not-sure", label: "Not sure" },
];

export const MAX_PHOTOS = 3;
export const MAX_PHOTO_BYTES = 5 * 1024 * 1024; // 5 MB per file

/** Basic per-IP rate limit for the API route. */
export const RATE_LIMIT = { max: 5, windowMs: 60 * 60 * 1000 }; // 5 / hour

export interface QuoteFields {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  propertyType: string;
  service: string;
  message: string;
  /** Property-explorer material id, if the enquiry came via a hotspot. */
  material?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type QuoteErrors = Partial<Record<keyof QuoteFields, string>>;

/** Pure validation shared by client and server. */
export function validateQuote(fields: Partial<QuoteFields>): QuoteErrors {
  const errors: QuoteErrors = {};
  if (!fields.name?.trim()) errors.name = "Please enter your name.";
  if (!fields.phone?.trim()) errors.phone = "Please enter a phone number.";
  if (!fields.email?.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(fields.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!fields.postcode?.trim()) errors.postcode = "Please enter your postcode.";
  return errors;
}

export function labelFor(options: SelectOption[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value;
}
