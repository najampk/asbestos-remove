// lib/claims.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for every licensing-status statement, compliance claim,
// TrustBar / footer compliance strip, and the §0 confirm-before-launch placeholder
// flags. Import from here — never hardcode a licensing claim in a component or page.
//
// LEGAL COPY RULE (CLAUDE.md · SPEC.md §0):
//   ASBESTOS REMOVAL ENVIRONMENTAL LTD is NOT HSE licensed. It performs
//   non-licensed and notifiable non-licensed (NNLW) asbestos work ONLY.
//   Never state or imply the company is "HSE licensed", a "licensed contractor",
//   or that it performs "licensed removal" — anywhere.
//   The phrase "HSE licensed contractor" may appear ONLY when describing the
//   third-party legal requirement for licensable materials (the three-tier
//   explainer, SPEC.md §5.4).
//
//   Experience claims reference the FOUNDER's 30+ years in the industry — never
//   the company's age (incorporated 13 May 2026).
//
// LICENSING ROADMAP: an HSE licence application is planned ~6 months post-launch.
//   Upgrading the site's licensing posture must be a change to THIS FILE plus the
//   documented page-copy revision list — never scattered string edits elsewhere.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * §0 Confirm-Before-Launch flags. These render as clearly-marked, greppable TODO
 * tokens until verified values are supplied. NEVER invent numbers — replace the
 * token strings here (one place) once the real values are confirmed.
 *
 * Removed pending confirmation from Quinton — re-add HERE, in this object, once
 * real values are supplied (never scatter the re-add across other files):
 *   - isoStandards (which of ISO 9001 / 14001 / 45001)
 *   - insuranceCover (public/employers liability cover amount)
 *   - founderQuote (a real 2–3 sentence statement from Quinton Davidson —
 *     never invent a quote in his voice)
 */
export const PLACEHOLDERS = {
  /**
   * SEPA waste carrier registration — The Environmental Authorisations
   * (Scotland) Regulations 2018; authorised activity: transporting waste,
   * Scotland (standard conditions EASR-SC-035).
   * END DATE: 10 July 2029 — registration must be renewed before then.
   */
  wasteCarrierNo: "EAS/R/6101484",
} as const;

/**
 * Founder experience claim. Always the founder's industry tenure — never company age.
 */
export const FOUNDER_EXPERIENCE = "30+ years' hands-on industry experience";

/**
 * Plain-prose statement of the work categories the company performs. Safe to use
 * in body copy, meta descriptions and JSON-LD. Contains no licensed-status claim.
 */
export const SCOPE_STATEMENT =
  "Asbestos Remove specialises in non-licensed and notifiable non-licensed (NNLW) asbestos work — the categories covering the majority of asbestos found in Scottish homes and commercial buildings.";

/**
 * Honest-referral statement for licensable materials. This is the ONLY context in
 * which "HSE licensed contractor" is permitted — it describes the third-party legal
 * requirement, not this company.
 */
export const LICENSABLE_REFERRAL =
  "Where a survey identifies licensable materials (sprayed coatings, pipe or boiler lagging, most asbestos insulating board), we tell you straight and help you arrange an HSE licensed contractor.";

/**
 * Homepage FAQ 5 / Removal page "Are you HSE licensed?" answer (SPEC.md §5.1, §5.4).
 * Reuse verbatim wherever the honest scope answer is needed.
 */
export const LICENSING_FAQ_ANSWER =
  "We carry out non-licensed and notifiable non-licensed asbestos work — the categories that cover the majority of asbestos in Scottish homes and businesses, including cement roofs, Artex, floor tiles and more. Licensable materials legally require an HSE licensed contractor; if a survey identifies these, we say so straight away and help you arrange compliant removal.";

/**
 * Hero credentials line — rendered bold at the top of the homepage hero.
 * The insurance policy number joins this string once confirmed (§0 rule:
 * never invent it; add it HERE, not in the page).
 */
export const HERO_CREDENTIALS = `SEPA Registered Waste Carrier ${PLACEHOLDERS.wasteCarrierNo}`;

/**
 * TrustBar items (SPEC.md §1.4 / §4). Rendered in mono type beneath the hero.
 * ISO / insurance items join this list once those §0 values are confirmed.
 */
export const TRUST_BAR_ITEMS: readonly string[] = [
  "UKATA-TRAINED OPERATIVES",
  `SEPA REGISTERED CARRIER ${PLACEHOLDERS.wasteCarrierNo}`,
  "ASBESTOS-TRAINED PLUMBER & JOINER",
  "NON-LICENSED & NNLW SCOPE",
  "CONTROLLED WORK METHODS",
  "GLASGOW-BASED TEAM",
  "AVAILABLE 24/7",
];

/**
 * Footer compliance strip (SPEC.md §4.3). Title-case variant of the TrustBar.
 */
export const FOOTER_COMPLIANCE_ITEMS: readonly string[] = [
  "UKATA-Trained Operatives",
  `SEPA Registered Waste Carrier ${PLACEHOLDERS.wasteCarrierNo}`,
  "Asbestos-Trained Plumber & Joiner",
  "Non-Licensed & NNLW Scope",
  "Controlled Work Methods",
  "Glasgow-Based Team",
  "Available 24/7",
];

/**
 * Credentials safe to emit in JSON-LD `hasCredential`. UKATA training only —
 * NEVER emit any HSE licence credential (see SPEC.md §3.4).
 */
export const SCHEMA_CREDENTIALS: readonly string[] = ["UKATA asbestos training"];

// ─────────────────────────────────────────────────────────────────────────────
// Page scope paragraphs (GEO direct-answer blocks that assert licensing status).
// These are licensing-status statements and therefore live here, not in pages.
// ─────────────────────────────────────────────────────────────────────────────

/** Homepage direct-answer GEO block (SPEC.md §5.1). */
export const HOMEPAGE_SCOPE_PARAGRAPH =
  "Asbestos Remove is a Glasgow-based asbestos contractor specialising in non-licensed and notifiable non-licensed asbestos work — the categories covering the majority of asbestos found in Scottish homes and commercial buildings. We survey, remove, dispose of and manage asbestos-containing materials in full compliance with the Control of Asbestos Regulations 2012. Where a material legally requires an HSE licensed contractor, we tell you straight and help you arrange it.";

/** Removal page direct-answer GEO block (SPEC.md §5.4). */
export const REMOVAL_SCOPE_PARAGRAPH =
  "Asbestos Remove carries out non-licensed and notifiable non-licensed (NNLW) asbestos removal — the categories covering the majority of asbestos found in homes and commercial buildings, from cement garage roofs to Artex and floor tiles. Every job runs under controlled conditions: protected work areas, wet suppression, Class H vacuums, full decontamination and certified disposal. If your material is licensable, we tell you straight and help you arrange the right contractor.";

/**
 * Three-tier explainer (SPEC.md §5.4). The ONLY place the phrase
 * "HSE licensed contractor" is permitted — it describes the third-party legal
 * requirement for licensable materials, never this company.
 */
export interface WorkTier {
  tier: string;
  body: string;
  note: string;
  /** Whether this tier is work the company performs. */
  weDo: boolean;
}

export const THREE_TIER_EXPLAINER: readonly WorkTier[] = [
  {
    tier: "Licensed work",
    body: "Sprayed coatings, pipe and boiler lagging, and most asbestos insulating board (AIB). Legally requires an HSE licensed contractor, 14-day notification and medical surveillance.",
    note: "We do not carry out licensed work — if a survey identifies these materials, we say so and help you arrange an HSE licensed contractor.",
    weDo: false,
  },
  {
    tier: "Notifiable non-licensed work (NNLW)",
    body: "Lower-risk work that still requires notification to the enforcing authority, record-keeping and health surveillance.",
    note: "This is our core work.",
    weDo: true,
  },
  {
    tier: "Non-licensed work",
    body: "For example asbestos cement in good condition — still demanding trained operatives, controlled methods and correct disposal.",
    note: "This too.",
    weDo: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQ answers that make a licensing-status claim (company or third-party legal
// requirement). Non-licensing FAQ answers may live in page files.
// ─────────────────────────────────────────────────────────────────────────────

/** Homepage FAQ 2 — "Is it illegal to remove asbestos myself?" (SPEC.md §5.1). */
export const FAQ_SELF_REMOVAL_ANSWER =
  "Homeowners may legally handle some lower-risk materials, but it is strongly discouraged and, for licensable materials (sprayed coatings, lagging, most insulation board), removal must by law be carried out by an HSE licensed contractor. Disposal is also strictly regulated. We'll tell you honestly which category your material falls into.";

/** Industrial FAQ — "Which materials fall within non-licensed scope?" (SPEC.md §5.9). */
export const FAQ_NON_LICENSED_SCOPE_ANSWER =
  "Non-licensed and notifiable non-licensed work covers materials such as asbestos cement roofs, cladding, gutters and flues, and textured coatings. Higher-risk licensable materials — sprayed coatings, thermal lagging and most insulating board — legally require an HSE licensed contractor, and we help you arrange that where a survey identifies them.";
