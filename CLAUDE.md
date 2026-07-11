# CLAUDE.md — asbestos-remove (asbestosremove.co.uk)

## Project
Marketing site for ASBESTOS REMOVAL ENVIRONMENTAL LTD (trading as "Asbestos Remove"), Glasgow.
The complete build specification is in `SPEC.md` at the repo root. It is the single source of truth for pages, copy, design tokens, components and build order (§8). Read the relevant SPEC.md sections before every milestone.

## ⚠️ LEGAL COPY RULE — NON-NEGOTIABLE
The company is **NOT HSE licensed**. It performs **non-licensed and notifiable non-licensed (NNLW) asbestos work only**.
- NEVER write "HSE licensed", "licensed contractor", "licensed removal" or any equivalent claim about this company — in page copy, meta titles, meta descriptions, alt text, JSON-LD, email templates, code comments rendered to users, or anywhere else.
- "HSE licensed contractor" may ONLY appear when describing the legal requirement for licensable materials handled by third parties (see SPEC.md §5.4 three-tier explainer).
- All licensing-status statements (TrustBar items, FAQ answer, scope paragraphs) must be exported from `lib/claims.ts` — never hardcoded in components or pages.
- SPEC.md §0 lists placeholder flags (`[WASTE_CARRIER_NO]`, `[INSURANCE_COVER]`, `[ISO_STANDARDS]`, `[FOUNDER_QUOTE]`). Render placeholders from `lib/claims.ts` as clearly-marked TODO values; never invent numbers.

## Stack (locked)
- Next.js latest, App Router, RSC-first — client components only where interaction requires (menu, accordion, forms, Framer Motion features)
- Tailwind CSS v4 — design tokens via `@theme` exactly as SPEC.md §1.2
- Framer Motion (`motion/react`), Resend (quote form), Vercel deploy
- Lucide React icons ONLY. No other icon or UI libraries. No unnecessary dependencies.
- TypeScript strict. next/font self-hosted: Archivo, Inter, IBM Plex Mono.

## Standing engineering rules
- Semantic HTML: one `<h1>` per page, logical heading order, `<main>`, `<address>` in footer
- Every page exports unique `metadata` (title ≤60 chars, description 140–160) + canonical; JSON-LD per SPEC.md §3.4
- Accessibility: keyboard operability, visible focus, `prefers-reduced-motion` gated animation, WCAG AA contrast
- Mobile-first responsive; Core Web Vitals budget: Lighthouse ≥95 performance on every page
- Preserve existing functionality and structure in all edits; forward-only changes

## Assets
- `public/images/` is pre-populated (logo, hero, gallery photos). NEVER move, rename or delete files in this directory. Reference them as-is; ask if a needed image is missing.

## Build workflow
- Follow SPEC.md §8 milestones (M1–M5, plus M2.5 Explorer §9 and M2.6 Removal Story §10) — one milestone per session, in order
- UI-first: layout shell → full static UI with real spec copy → feature wiring
- Do not start a milestone's work in the same session as the previous milestone
- At the end of each milestone: `npm run build` must pass with zero type errors before the milestone is considered complete
