// lib/services.ts
// Shared service catalogue used by the homepage, services hub and cross-links.
// Icons are Lucide components referenced directly (SPEC.md §5.1).
import { Search, ShieldCheck, Recycle, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  href: string;
  title: string;
  /** Icon per SPEC.md §5.1 */
  icon: LucideIcon;
  /** 2-line card summary (homepage) */
  summary: string;
  /** Expanded 3–4 line description (services hub) */
  blurb: string;
}

export const SERVICES: Service[] = [
  {
    slug: "asbestos-surveys",
    href: "/services/asbestos-surveys",
    title: "Asbestos Surveys",
    icon: Search,
    summary:
      "Management and refurbishment/demolition surveys with sampling and risk assessment, identifying asbestos-containing materials before they become a hazard.",
    blurb:
      "Management and refurbishment/demolition surveys carried out to HSG264, with targeted sampling and UKAS-accredited laboratory analysis. We identify the location, type and condition of asbestos-containing materials and give you a clear report with practical recommendations — the first, legally safest step before any works or property purchase.",
  },
  {
    slug: "asbestos-removal",
    href: "/services/asbestos-removal",
    title: "Asbestos Removal",
    icon: ShieldCheck,
    summary:
      "Controlled removal of non-licensed asbestos materials within protected work areas, carried out to the highest safety standards and documented on completion.",
    blurb:
      "Controlled removal of non-licensed and notifiable non-licensed (NNLW) asbestos — cement garage roofs, Artex, floor tiles and more. Every job runs under protected, sheeted conditions with wet suppression, Class H vacuums, full decontamination and certified disposal. If your material is licensable, we tell you straight and help you arrange the right contractor.",
  },
  {
    slug: "asbestos-disposal",
    href: "/services/asbestos-disposal",
    title: "Certified Disposal",
    icon: Recycle,
    summary:
      "Fully documented asbestos waste disposal at licensed facilities, with consignment notes for your records — no risk left behind.",
    blurb:
      "Asbestos waste is special (hazardous) waste in Scotland. We handle the entire chain — UN-approved double bagging, sealed transport by a registered carrier, SEPA consignment notes and disposal at licensed facilities — so your legal duty of care is fully discharged and the paperwork is yours to keep.",
  },
  {
    slug: "asbestos-management",
    href: "/services/asbestos-management",
    title: "Asbestos Management",
    icon: ClipboardCheck,
    summary:
      "Management plans, registers and consultancy that keep duty holders compliant with CAR 2012 long-term.",
    blurb:
      "Asbestos management plans, registers and re-inspection surveys that keep duty holders compliant with Regulation 4 of the Control of Asbestos Regulations 2012. We build and maintain the compliance for you — survey to register to plan to annual review — with audit-ready documentation throughout.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Sibling services (all except the given slug) — used for in-copy cross-links. */
export function siblingServices(slug: string): Service[] {
  return SERVICES.filter((s) => s.slug !== slug);
}
