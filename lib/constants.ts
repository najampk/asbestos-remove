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

export const MAIN_NAV: NavGroup[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: SERVICE_LINKS },
  { label: "Sectors", href: "/sectors/domestic", children: SECTOR_LINKS },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
