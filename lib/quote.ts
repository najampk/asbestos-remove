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

/** Basic per-IP rate limit for the API route. */
export const RATE_LIMIT = { max: 5, windowMs: 60 * 60 * 1000 }; // 5 / hour
export const MAX_REQUEST_BYTES = 64 * 1024;

export const FIELD_LIMITS = {
  name: 100,
  phone: 40,
  email: 254,
  postcode: 16,
  propertyType: 40,
  service: 40,
  message: 5_000,
  material: 100,
} as const satisfies Record<keyof QuoteFields, number>;

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
  for (const key of Object.keys(FIELD_LIMITS) as (keyof QuoteFields)[]) {
    if (fields[key] && fields[key]!.length > FIELD_LIMITS[key]) {
      errors[key] = `Please keep this field under ${FIELD_LIMITS[key]} characters.`;
    }
  }
  if (fields.propertyType && !PROPERTY_TYPES.some((o) => o.value === fields.propertyType))
    errors.propertyType = "Please select a valid property type.";
  if (fields.service && !SERVICE_OPTIONS.some((o) => o.value === fields.service))
    errors.service = "Please select a valid service.";
  return errors;
}

export function labelFor(options: SelectOption[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value;
}
