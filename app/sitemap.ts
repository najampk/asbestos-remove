import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// SPEC.md §3.2 / §2. Flat list of all indexable routes.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/asbestos-surveys", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/asbestos-removal", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/asbestos-disposal", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/asbestos-management", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sectors", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sectors/domestic", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sectors/commercial", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sectors/industrial", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guides", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guides/asbestos-removal-cost", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guides/licensed-vs-non-licensed-asbestos-removal", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guides/how-to-identify-asbestos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/guides/asbestos-disposal-rules-scotland", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/clarity-check", priority: 0.9, changeFrequency: "monthly" },
    { path: "/project-library", priority: 0.7, changeFrequency: "monthly" },
    { path: "/trust-centre", priority: 0.7, changeFrequency: "monthly" },
    { path: "/customer-portal", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return entries.map((e) => ({
    url: `${SITE_URL}${e.path}`,
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
