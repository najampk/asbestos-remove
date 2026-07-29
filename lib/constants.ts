// lib/constants.ts
// Non-licensing site constants: exact NAP (name, address, phone) used identically
// across the site, schema and Google Business Profile (SPEC.md §3.3 entity
// consistency), plus the shared navigation model for Header and Footer.
// Licensing-status copy lives in lib/claims.ts — never here.

export const SITE_URL = "https://www.asbestosremove.co.uk";

export const BUSINESS = {
  legalName: "ASBESTOS REMOVAL ENVIRONMENTAL LTD",
  tradingName: "Asbestos Remove",
  companyNumber: "SC889602",
  phoneDisplay: "07960 881102",
  phoneHref: "tel:+447960881102",
  emailGeneral: "info@asbestosremove.co.uk",
  emailDirect: "qd@asbestosremove.co.uk",
  founder: "Quinton Davidson",
  address: {
    line1: "Unit 4, 95 Morrison Street",
    line2: "SMK Business Centre, The Piazza",
    city: "Glasgow",
    postcode: "G5 8BE",
    region: "Scotland",
    country: "GB",
  },
} as const;

export const ADDRESS_ONE_LINE =
  "Unit 4, 95 Morrison Street, SMK Business Centre, The Piazza, Glasgow, G5 8BE";

/**
 * Verified premises coordinates, taken from the Google Business Profile listing
 * (place 0x4888471ab46983e5:0x9c61c274622e8c07). These must match the GBP pin —
 * a site whose JSON-LD geo disagrees with its Maps listing weakens the entity
 * match that brand searches depend on.
 */
export const GEO = { latitude: 55.8538594, longitude: -4.269405 } as const;

/**
 * Canonical URL of the Google Business Profile listing, built from the place's
 * CID. Used for `hasMap`, `sameAs` and the contact-page directions link.
 */
export const GOOGLE_MAPS_URL =
  "https://maps.google.com/?cid=11268501547776904199";

/**
 * Embed URL for the contact-page map. Loaded only after the visitor asks for it
 * (see components/MapEmbed.tsx) so the Maps payload never touches first load.
 */
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.5075822360404!2d-4.269405!3d55.853859400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888471ab46983e5%3A0x9c61c274622e8c07!2sAsbestos%20Removal%20Environmental!5e0!3m2!1sen!2s!4v1785322718624!5m2!1sen!2s";

/**
 * Authoritative third-party profiles for the company, emitted as schema.org
 * `sameAs`. This is the main lever we control for getting Google to treat
 * "Asbestos Removal Environmental" as an entity rather than a generic phrase —
 * each entry corroborates the same name, address and company number.
 * Add verified profiles only (Companies House, GBP, trade bodies) — never a
 * social account that doesn't exist yet.
 */
export const SAME_AS: string[] = [
  GOOGLE_MAPS_URL,
  "https://find-and-update.company-information.service.gov.uk/company/SC889602",
];

/**
 * Internal inbox that receives quote-form notifications (app/api/quote).
 * Not public NAP — customer-facing contact details live in BUSINESS above.
 */
export const QUOTE_NOTIFICATIONS_EMAIL = "qd@asbestosremovalenvironmental.com";

/**
 * Core council areas served from the Glasgow base. Single source for the
 * ServiceArea section UI and the areaServed property in LocalBusiness JSON-LD.
 */
export const SERVICE_AREAS = [
  "Glasgow City",
  "East Renfrewshire",
  "Renfrewshire",
  "South Lanarkshire",
  "North Lanarkshire",
  "East Dunbartonshire",
  "West Dunbartonshire",
] as const;

/** The team and phone line operate around the clock; update here if the schedule changes. */
export const OPENING_HOURS = [
  { days: "Monday–Sunday", hours: "Open 24 hours" },
] as const;

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  children?: NavLink[];
}

export const SERVICE_LINKS: NavLink[] = [
  { label: "Asbestos Surveys", href: "/services/asbestos-surveys" },
  { label: "Asbestos Testing", href: "/services/asbestos-testing" },
  { label: "Asbestos Removal", href: "/services/asbestos-removal" },
  {
    label: "Garage Roof Removal",
    href: "/services/asbestos-garage-roof-removal",
  },
  { label: "Asbestos Disposal", href: "/services/asbestos-disposal" },
  { label: "Asbestos Management", href: "/services/asbestos-management" },
  {
    label: "Emergency Removal",
    href: "/services/emergency-asbestos-removal",
  },
];

/**
 * Location pages (SPEC.md §7.1). Town + route only — the page copy lives in
 * lib/locations.ts. Used by the ServiceArea section and the sitemap.
 */
export const LOCATION_LINKS: NavLink[] = [
  { label: "Paisley", href: "/asbestos-removal-paisley" },
  { label: "Hamilton", href: "/asbestos-removal-hamilton" },
  { label: "East Kilbride", href: "/asbestos-removal-east-kilbride" },
  { label: "Motherwell", href: "/asbestos-removal-motherwell" },
  { label: "Clydebank", href: "/asbestos-removal-clydebank" },
  { label: "Cumbernauld", href: "/asbestos-removal-cumbernauld" },
];

export const SECTOR_LINKS: NavLink[] = [
  { label: "Domestic", href: "/sectors/domestic" },
  { label: "Commercial", href: "/sectors/commercial" },
  { label: "Industrial", href: "/sectors/industrial" },
];

/** M6 guide pages (SPEC.md §11) — shared by nav, footer and the /guides hub. */
export const GUIDE_LINKS: NavLink[] = [
  {
    label: "Asbestos Removal Costs",
    href: "/guides/asbestos-removal-cost",
    description:
      "What removal actually costs in 2026 — price ranges for garage roofs, Artex and testing, rates per square metre, and what Glasgow adds to the bill.",
  },
  {
    label: "Licensed vs Non-Licensed Work",
    href: "/guides/licensed-vs-non-licensed-asbestos-removal",
    description:
      "The three legal categories of asbestos work, which one your material falls into, and how to vet any contractor before you pay a deposit.",
  },
  {
    label: "How to Identify Asbestos",
    href: "/guides/how-to-identify-asbestos",
    description:
      "Narrow it down by property age and material, see what the common culprits look like — and why a lab test beats every visual check.",
  },
  {
    label: "Asbestos Disposal Rules",
    href: "/guides/asbestos-disposal-rules-scotland",
    description:
      "Whether you can legally remove it yourself, plus the wrapping, paperwork and carrier rules that apply to special waste in Scotland.",
  },
];

export const MAIN_NAV: NavGroup[] = [
  { label: "Home", href: "/" },
  { label: "Clarity Check", href: "/clarity-check" },
  { label: "Services", href: "/services", children: SERVICE_LINKS },
  { label: "Sectors", href: "/sectors", children: SECTOR_LINKS },
  {
    label: "Resources",
    href: "/guides",
    children: [
      { label: "Guides & Advice", href: "/guides" },
      { label: "Project Library", href: "/project-library" },
      { label: "Trust Centre", href: "/trust-centre" },
      { label: "Customer Portal", href: "/customer-portal" },
    ],
  },
  { label: "About", href: "/about" },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Guides & Advice", href: "/guides" },
  { label: "Clarity Check", href: "/clarity-check" },
  { label: "Trust Centre", href: "/trust-centre" },
  { label: "Customer Portal", href: "/customer-portal" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
