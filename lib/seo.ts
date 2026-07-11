// lib/seo.ts
// DRY per-page metadata builder (SPEC.md §3.2). Produces a canonical URL,
// OpenGraph and Twitter cards for every page. The branded OG/Twitter image comes
// from the app/opengraph-image + app/twitter-image file conventions.
import type { Metadata } from "next";
import { BUSINESS } from "./constants";

// Branded social share image (public/og-img.jpg, 1731×909 — ~1.9:1).
const OG_IMAGE = {
  url: "/og-img.jpg",
  width: 1731,
  height: 909,
  alt: "Asbestos Remove — safe, compliant asbestos removal in Glasgow",
};

interface PageSeo {
  /** Page title. Kept ≤60 chars; the layout template appends the brand unless absolute. */
  title: string;
  /** Meta description, 140–160 chars. */
  description: string;
  /** Route path, e.g. "/services/asbestos-removal" (or "/" for home). */
  path: string;
  /** Use the title verbatim (no "| Asbestos Remove" suffix). */
  titleAbsolute?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  titleAbsolute = false,
}: PageSeo): Metadata {
  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: BUSINESS.tradingName,
      locale: "en_GB",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
