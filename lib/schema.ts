// lib/schema.ts
// JSON-LD builders (SPEC.md §3.4). LocalBusiness (ProfessionalService) sitewide,
// Service per service page, FAQPage for every FAQ section, BreadcrumbList on inner
// pages. NEVER emit an HSE licence credential — UKATA training only.
import { SITE_URL, BUSINESS, SERVICE_AREAS } from "./constants";
import { SCHEMA_CREDENTIALS, SCOPE_STATEMENT } from "./claims";

export const BUSINESS_ID = `${SITE_URL}/#business`;

// Council areas served (from constants) plus Scotland-wide coverage — mirrors
// the ServiceArea section and homepage copy.
const AREA_SERVED = [
  ...SERVICE_AREAS.map((name) => ({
    "@type": "AdministrativeArea" as const,
    name,
  })),
  { "@type": "AdministrativeArea" as const, name: "Scotland" },
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.tradingName,
    description: SCOPE_STATEMENT,
    slogan: "Breathe Easy",
    url: SITE_URL,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    email: BUSINESS.emailGeneral,
    image: `${SITE_URL}/og-img.jpg`,
    logo: `${SITE_URL}/images/asbestos-remove-logo.webp`,
    // Incorporation date of ASBESTOS REMOVAL ENVIRONMENTAL LTD (lib/claims.ts §0).
    foundingDate: "2026-05-13",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate — SMK Business Centre, Tradeston, Glasgow G5. Refine at launch.
      latitude: 55.8541,
      longitude: -4.2649,
    },
    areaServed: AREA_SERVED,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "UK Company Number",
      value: BUSINESS.companyNumber,
    },
    hasCredential: SCHEMA_CREDENTIALS.map((name) => ({
      "@type": "EducationalOccupationalCredential",
      name,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  /**
   * Overrides the default Glasgow + Scotland coverage. Location pages
   * (SPEC.md §7.1) pass their own town and council so each page describes the
   * area it is actually about.
   */
  areaServed?: { type: "City" | "AdministrativeArea"; name: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: (
      areaServed ?? [
        { type: "City" as const, name: "Glasgow" },
        { type: "AdministrativeArea" as const, name: "Scotland" },
      ]
    ).map((a) => ({ "@type": a.type, name: a.name })),
  };
}

/**
 * Guide pages (SPEC.md §11). Author/publisher resolve to the sitewide
 * LocalBusiness node — the business itself is the author, which is the
 * E-E-A-T signal that matters for a trade contractor.
 */
export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  /** ISO date, e.g. "2026-07-18". */
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    image: `${SITE_URL}/og-img.jpg`,
    inLanguage: "en-GB",
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    datePublished,
    dateModified: dateModified ?? datePublished,
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href}`,
    })),
  };
}
