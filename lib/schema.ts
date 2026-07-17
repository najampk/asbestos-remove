// lib/schema.ts
// JSON-LD builders (SPEC.md §3.4). LocalBusiness (ProfessionalService) sitewide,
// Service per service page, FAQPage for every FAQ section, BreadcrumbList on inner
// pages. NEVER emit an HSE licence credential — UKATA training only.
import { SITE_URL, BUSINESS } from "./constants";
import { SCHEMA_CREDENTIALS } from "./claims";

export const BUSINESS_ID = `${SITE_URL}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.tradingName,
    url: SITE_URL,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    email: BUSINESS.emailGeneral,
    image: `${SITE_URL}/og-img.jpg`,
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
    areaServed: { "@type": "City", name: "Glasgow" },
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
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: "Glasgow" },
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
