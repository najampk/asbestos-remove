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
  { label: "Asbestos Removal", href: "/services/asbestos-removal" },
  { label: "Asbestos Disposal", href: "/services/asbestos-disposal" },
  { label: "Asbestos Management", href: "/services/asbestos-management" },
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
      "What removal actually costs in 2026 — real price ranges for garage roofs, Artex, floor tiles and testing, and what moves the number.",
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
      "Asbestos is special waste in Scotland. The wrapping, paperwork and carrier rules — and why the cheapest collection quote can cost you most.",
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
