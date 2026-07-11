// lib/sectors.ts
// Shared sector catalogue used by the homepage "Who We Work With" section,
// sector pages and cross-links (SPEC.md §5.1 / §5.7–5.9).

export interface Sector {
  slug: string;
  href: string;
  /** Card title (homepage) */
  cardTitle: string;
  /** Nav / short label */
  label: string;
  summary: string;
  image: string;
  imageAlt: string;
}

export const SECTORS: Sector[] = [
  {
    slug: "domestic",
    href: "/sectors/domestic",
    label: "Domestic",
    cardTitle: "Homeowners & Landlords",
    summary:
      "Artex ceilings, garage roofs, floor tiles, pipe lagging. Discreet, tidy, family-safe working.",
    image: "/images/hero-2.avif",
    imageAlt:
      "Residential property exterior during domestic asbestos work in Glasgow",
  },
  {
    slug: "commercial",
    href: "/sectors/commercial",
    label: "Commercial",
    cardTitle: "Commercial & Public Buildings",
    summary:
      "Offices, retail, schools and healthcare. Out-of-hours working to keep you trading.",
    image: "/images/hero-3.avif",
    imageAlt:
      "Commercial building interior prepared for asbestos survey and removal in Glasgow",
  },
  {
    slug: "industrial",
    href: "/sectors/industrial",
    label: "Industrial",
    cardTitle: "Industrial & Construction",
    summary:
      "Factories, warehouses and plant. Large-scale enclosures, negative pressure units and CDM coordination.",
    image: "/images/hero-4.avif",
    imageAlt:
      "Industrial site with controlled asbestos work zone and air filtration units",
  },
];

export function getSector(slug: string): Sector | undefined {
  return SECTORS.find((s) => s.slug === slug);
}
