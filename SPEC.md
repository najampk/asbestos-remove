# asbestosremove.co.uk — Complete Website Structure & SEO Content Specification

**Client:** Quinton Davidson — ASBESTOS REMOVAL ENVIRONMENTAL LTD (SC889602)
**Trading name:** Asbestos Remove
**Version:** 1.0 · Prepared for Next.js (App Router) + Tailwind v4 build
**Target market:** Glasgow (launch) → Scotland-wide (phase 2)

---

## 0. Confirm-Before-Launch Flags

These placeholders MUST be replaced with verified values before deployment. Do not ship with claims unverified.

| Flag | Where used | Required value |
|---|---|---|
| `[ISO_STANDARDS]` | TrustBar, About, footer badges | Confirm which: ISO 9001 / 14001 / 45001 |
| `[WASTE_CARRIER_NO]` | Disposal page, footer | SEPA waste carrier registration number |
| `[INSURANCE_COVER]` | About, footer | Public/employers liability cover amount (e.g. £10m) |
| `[FOUNDER_QUOTE]` | About | 2–3 sentence founder statement from Quinton |

> **Copy rule (legal — LICENSING):** The company is **not HSE licensed**. It carries out **non-licensed and notifiable non-licensed (NNLW) asbestos work only**. The words "licensed contractor", "HSE licensed" or any equivalent claim must NOT appear anywhere on the site in reference to the company. Where a survey identifies licensable materials (sprayed coatings, pipe/boiler lagging, most AIB), the site says so honestly and offers to help the customer arrange an HSE licensed contractor. Experience claims reference the **founder's 30+ years in the industry** (confirmed), never company age (incorporated 13 May 2026).
>
> **Licensing roadmap:** an HSE licence application is planned ~6 months post-launch. All licensing-status copy must be driven from a single `lib/claims.ts` constants file (statements, TrustBar items, FAQ answer) so the upgrade is a one-file change plus a documented page-copy revision list — never scattered string edits.

---

## 1. Brand & Design System

### 1.1 Design Concept — "Containment Grid"

The visual identity is grounded in the physical reality of the work: negative-pressure enclosures, polythene sheeting on scaffold grids, air monitoring, certification. The site should feel like the digital equivalent of a well-run enclosure — precise, sealed, nothing improvised.

**Signature element:** a fine 1px "containment grid" background motif (subtle grid lines echoing enclosure scaffolding, ~6% opacity) used in the hero and section dividers, with certification/licence numbers set in mono type as a persistent "compliance strip". This is the one memorable device; everything else stays quiet and corporate.

### 1.2 Color Tokens (derived from logo)

```css
@theme {
  /* Primary — shield blue */
  --color-brand-950: #071B47;   /* deep navy — headings, footer bg */
  --color-brand-900: #0B2A6B;
  --color-brand-700: #1D4ED8;   /* primary blue — logo shield */
  --color-brand-500: #2563EB;   /* interactive/hover */

  /* Secondary — leaf green */
  --color-eco-700: #15803D;
  --color-eco-500: #16A34A;     /* logo leaf green */
  --color-eco-400: #4ADE80;     /* gradient end, accents */

  /* Neutrals */
  --color-ink: #0F172A;
  --color-slate-600: #475569;
  --color-surface: #F8FAFC;
  --color-line: #E2E8F0;

  /* Semantic */
  --color-danger: #DC2626;      /* hazard notices only — used sparingly */
}
```

**Gradient system (matches logo's blue→green circular flow):**
- `gradient-hero`: `linear-gradient(135deg, #071B47 0%, #0B2A6B 45%, #15803D 100%)` — hero backgrounds
- `gradient-cta`: `linear-gradient(90deg, #1D4ED8, #16A34A)` — primary buttons, active states
- `gradient-text`: blue→green clipped text for stat numbers and section eyebrows only

### 1.3 Typography

| Role | Face | Usage |
|---|---|---|
| Display | **Archivo** (SemiBold/Bold, slightly tightened tracking) | H1–H2, hero |
| Body | **Inter** | paragraphs, UI |
| Compliance/Data | **IBM Plex Mono** | licence numbers, cert badges, stats, survey refs |

Type scale: 12 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 64. H1 clamp: `clamp(2.25rem, 5vw, 4rem)`.

### 1.4 Components (shared)

- `Header` — sticky, white/blur, logo left, nav centre, phone + "Get a Free Quote" gradient CTA right. Mobile: sheet menu.
- `TrustBar` — mono-type strip under hero: `UKATA-TRAINED OPERATIVES · [ISO_STANDARDS] · SEPA REGISTERED CARRIER [WASTE_CARRIER_NO] · FULLY INSURED [INSURANCE_COVER]`
- `ServiceCard` — icon (Lucide), title, 2-line summary, arrow link; hover lifts with gradient border.
- `SectorCard` — image-led card for Domestic/Commercial/Industrial.
- `ProcessTimeline` — numbered vertical steps (real sequence: enquiry → survey → plan → removal → air test → certificate). Numbering is justified here — it IS a sequence.
- `StatStrip` — gradient-text numbers in Plex Mono.
- `FAQAccordion` — semantic `<details>`, wired to FAQPage schema.
- `QuoteForm` — name, phone, email, postcode, property type (select), service needed (select), message, file upload (optional photos). Resend → `info@asbestosremove.co.uk`, auto-reply to customer. Honeypot + rate limit.
- `CTABand` — full-width gradient band before footer on every page: "Think you've found asbestos? Don't touch it. Call us." + phone + quote button.
- `Footer` — navy, 4 columns (Services / Sectors / Company / Contact), compliance strip, legal disclaimer line.

### 1.5 Motion (Framer Motion)

- Hero: single orchestrated load sequence (headline mask-up, trust bar fade, grid motif slow parallax). One moment, not scattered effects.
- Scroll: `whileInView` fade-up on section headers only (12px, 0.4s, once).
- Respect `prefers-reduced-motion` globally.

---

## 2. Tech Stack & Repo Structure

- Next.js (latest, App Router, RSC-first — client components only for menu, accordion, form, motion)
- Tailwind CSS v4 (`@theme` tokens above)
- Framer Motion (`motion/react`)
- Resend (quote form + auto-reply, React Email templates)
- Lucide React icons only
- Vercel (deploy), next/image with AVIF/WebP, next/font (self-hosted Archivo, Inter, IBM Plex Mono)

```
app/
  layout.tsx                      # fonts, Header, Footer, Organization JSON-LD
  page.tsx                        # Homepage
  services/
    page.tsx                      # Services hub
    asbestos-surveys/page.tsx
    asbestos-removal/page.tsx
    asbestos-disposal/page.tsx
    asbestos-management/page.tsx
  sectors/
    domestic/page.tsx
    commercial/page.tsx
    industrial/page.tsx
  about/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  terms/page.tsx
  api/quote/route.ts              # Resend handler
  sitemap.ts
  robots.ts
components/ · lib/ (schema.ts, seo.ts, constants.ts) · emails/
```

### 2.1 Site Architecture (IA)

```
Home
├── Services (hub)
│   ├── Asbestos Surveys              /services/asbestos-surveys
│   ├── Asbestos Removal              /services/asbestos-removal
│   ├── Asbestos Disposal             /services/asbestos-disposal
│   └── Asbestos Management           /services/asbestos-management
├── Sectors
│   ├── Domestic                      /sectors/domestic
│   ├── Commercial                    /sectors/commercial
│   └── Industrial                    /sectors/industrial
├── About Us                          /about
├── Contact                           /contact
└── (Phase 2) Locations               /asbestos-removal-{city}  ← Edinburgh, Paisley, Stirling, etc.
```

**Internal linking rules:** every service page links to all 3 sector pages and 2 sibling services in-copy; sector pages link back to relevant services; homepage links to every level-2 page. Breadcrumbs (with BreadcrumbList schema) on all non-home pages.

**Phase 2 note:** location pages sit at root level (`/asbestos-removal-edinburgh`) — flat URLs rank better for "asbestos removal {city}" queries and require zero IA changes.

---
## 3. Global SEO Framework

### 3.1 Keyword Map (Glasgow launch)

| Page | Primary keyword | Secondary |
|---|---|---|
| Home | asbestos removal Glasgow | asbestos removal company Glasgow, asbestos removal near me |
| Services hub | asbestos services Glasgow | asbestos contractors Glasgow |
| Surveys | asbestos survey Glasgow | asbestos testing Glasgow, management survey, refurbishment demolition survey |
| Removal | asbestos removal contractors Glasgow | garage roof/Artex/floor tile asbestos removal Glasgow |
| Disposal | asbestos disposal Glasgow | asbestos collection Glasgow, certified asbestos waste disposal |
| Management | asbestos management plan Glasgow | asbestos register, duty to manage, CAR 2012 compliance |
| Domestic | asbestos removal for homes Glasgow | garage roof, artex, floor tiles |
| Commercial | commercial asbestos removal Glasgow | asbestos surveys for landlords, duty holder |
| Industrial | industrial asbestos removal Scotland | factory, warehouse, plant asbestos removal |
| About | asbestos removal company Glasgow | asbestos specialists Glasgow |
| Contact | asbestos removal quote Glasgow | free asbestos survey quote |

### 3.2 Technical SEO (applies to every page)

- Unique `metadata` export per page (title ≤60 chars, description 140–160), canonical, OpenGraph + Twitter cards with branded OG image
- Semantic HTML: one `<h1>` per page, logical h2→h3, `<main>` landmark, `<nav aria-label>`, `<address>` in footer
- `sitemap.ts` + `robots.ts`; `metadataBase` set to `https://www.asbestosremove.co.uk`
- Core Web Vitals: hero image `priority` + explicit dimensions (LCP), zero CLS via reserved space, RSC-first (minimal JS), self-hosted fonts with `display: swap`
- All images: descriptive `alt` with service+location where natural

### 3.3 AI SEO / GEO (Generative Engine Optimisation)

- Every service page ends with an FAQ section (real questions people ask AI assistants: "Is it illegal to remove asbestos myself in Scotland?") wired to `FAQPage` schema
- Direct-answer paragraph pattern: each page's first section answers the query in ≤50 words (extractable by LLMs/featured snippets)
- Entity consistency: exact NAP (name, address, phone) identical across site, schema, and Google Business Profile
- Clear statements of work categories (non-licensed / NNLW), regulation (CAR 2012), and geographic service area in plain prose — AI engines cite verifiable, specific claims; honest scope statements outrank vague ones

### 3.4 JSON-LD (lib/schema.ts)

- **Sitewide (layout):** `LocalBusiness` (subtype `ProfessionalService`) — legal name ASBESTOS REMOVAL ENVIRONMENTAL LTD, trading name, SC889602, NAP, geo, `areaServed: Glasgow`, opening hours, `hasCredential: UKATA training` (do NOT emit any HSE licence credential)
- **Per service page:** `Service` (provider → LocalBusiness, areaServed, serviceType)
- **All FAQ sections:** `FAQPage`
- **All inner pages:** `BreadcrumbList`

---

## 4. Global Elements — Copy

### 4.1 Header nav
`Home · Services ▾ · Sectors ▾ · About · Contact` + `☎ 07960 881102` + button **Get a Free Quote** → /contact

### 4.2 CTA Band (every page, pre-footer)
> **Think you've found asbestos? Don't disturb it.**
> Leave the area, avoid touching the material, and call our Glasgow team for fast, professional advice.
> [Call 07960 881102] [Request a Free Quote]

### 4.3 Footer legal strip
> Asbestos Remove is a trading name of ASBESTOS REMOVAL ENVIRONMENTAL LTD. Registered in Scotland, company number SC889602. Registered office: Unit 4, 95 Morrison Street, SMK Business Centre, The Piazza, Glasgow, G5 8BE.
> UKATA-Trained Operatives · [ISO_STANDARDS] · SEPA Registered Waste Carrier [WASTE_CARRIER_NO] · Fully Insured [INSURANCE_COVER]

---

## 5. Page Content

# 5.1 HOMEPAGE — `/`

**Meta title:** Asbestos Removal Glasgow | Surveys, Removal & Disposal — Asbestos Remove
**Meta description:** Safe, compliant asbestos removal, surveys, disposal & management across Glasgow. UKATA-trained team, 30+ years' experience, free quotes. Call 07960 881102.

### Hero
- **Eyebrow (mono):** UKATA-TRAINED SPECIALISTS · GLASGOW & SURROUNDING AREAS
- **H1:** Safe, Compliant, Efficient Asbestos Removal in Glasgow
- **Sub:** Asbestos Removal Environmental Ltd delivers safe, compliant asbestos removal, surveying, disposal and management for homes, businesses and industrial sites across Glasgow and beyond. Protecting your property. Safeguarding your health.
- **CTAs:** [Get a Free Quote] (gradient) · [View Our Services] (outline)
- **Visual:** full-bleed enclosure photo (02.png style) behind gradient-hero overlay + containment grid motif
- **TrustBar** beneath

### Section — Direct answer (GEO block)
**H2:** Glasgow's Asbestos Safety Specialists
> Asbestos Remove is a Glasgow-based asbestos contractor specialising in non-licensed and notifiable non-licensed asbestos work — the categories covering the majority of asbestos found in Scottish homes and commercial buildings. We survey, remove, dispose of and manage asbestos-containing materials in full compliance with the Control of Asbestos Regulations 2012. Where a material legally requires an HSE licensed contractor, we tell you straight and help you arrange it.

### Section — Services (4 ServiceCards → sub-pages)
**H2:** Our Comprehensive Asbestos Services

1. **Asbestos Surveys** *(Lucide: Search / FileSearch)* — Management and refurbishment/demolition surveys with sampling and risk assessment, identifying asbestos-containing materials before they become a hazard. → /services/asbestos-surveys
2. **Asbestos Removal** *(ShieldCheck)* — Controlled removal of non-licensed asbestos materials within protected work areas, carried out to the highest safety standards and documented on completion. → /services/asbestos-removal
3. **Certified Disposal** *(Recycle)* — Fully documented asbestos waste disposal at licensed facilities, with consignment notes for your records — no risk left behind. → /services/asbestos-disposal
4. **Asbestos Management** *(ClipboardCheck)* — Management plans, registers and consultancy that keep duty holders compliant with CAR 2012 long-term. → /services/asbestos-management

### Section — Sectors (3 SectorCards)
**H2:** Who We Work With
- **Homeowners & Landlords** — Artex ceilings, garage roofs, floor tiles, pipe lagging. Discreet, tidy, family-safe working. → /sectors/domestic
- **Commercial & Public Buildings** — Offices, retail, schools and healthcare. Out-of-hours working to keep you trading. → /sectors/commercial
- **Industrial & Construction** — Factories, warehouses and plant. Large-scale enclosures, negative pressure units and CDM coordination. → /sectors/industrial

### Section — Process (ProcessTimeline)
**H2:** How It Works — From Enquiry to Clearance Certificate
1. **Contact & Advice** — Call or send photos. We assess urgency and advise on the safest next step, free of charge.
2. **Survey & Quote** — A qualified surveyor identifies and samples suspect materials. You receive a clear report and fixed quote.
3. **Plan of Work** — We prepare risk assessments, method statements and, for notifiable work, notification to the enforcing authority.
4. **Controlled Removal** — Protected, sheeted work areas, wet suppression and Class H vacuums. UKATA-trained operatives throughout.
5. **Inspection & Reassurance** — Thorough visual inspection and clean handover, with independent reassurance air testing available on request.
6. **Certified Disposal** — Waste double-bagged, consigned and transported to a licensed facility. Full paper trail supplied.

### Section — StatStrip
`100% · CAR 2012 Compliant` · `24hr · Quote Turnaround` · `30+ yrs · Founder Industry Experience` · `£[INSURANCE_COVER] · Insurance Cover`

### Section — Why Choose Us (H2, 2-col checklist)
30+ years of hands-on industry experience · UKATA-trained, vetted operatives · Fixed, transparent quotes — no surprises · Honest advice on what we can and can't remove · Full waste documentation supplied · Glasgow-based, fast local response

### Section — FAQ (FAQPage schema)
1. **How much does asbestos removal cost in Glasgow?** — Depends on material type, condition, location and quantity. A garage roof differs greatly from pipe lagging in a boiler room. Every job is quoted individually after a survey or photo assessment — quotes are free and fixed.
2. **Is it illegal to remove asbestos myself?** — Homeowners may legally handle some lower-risk materials, but it is strongly discouraged and, for licensable materials (sprayed coatings, lagging, most insulation board), removal must by law be carried out by an HSE licensed contractor. Disposal is also strictly regulated. We'll tell you honestly which category your material falls into.
3. **How do I know if my property contains asbestos?** — Any building constructed or refurbished before 2000 may contain asbestos. The only reliable confirmation is sampling and laboratory analysis as part of an asbestos survey.
4. **Do you cover areas outside Glasgow?** — Yes — we're Glasgow-based and cover the surrounding areas, with Scotland-wide coverage for commercial and industrial projects.
5. **Are you licensed by the HSE?** — We carry out non-licensed and notifiable non-licensed asbestos work — the categories that cover the majority of asbestos in Scottish homes and businesses, including cement roofs, Artex, floor tiles and more. Licensable materials legally require an HSE licensed contractor; if a survey identifies these, we say so straight away and help you arrange compliant removal.

### CTA Band → Footer

---

# 5.2 SERVICES HUB — `/services`

**Meta title:** Asbestos Services Glasgow | Surveys, Removal, Disposal & Management
**Meta description:** Complete asbestos services in Glasgow: surveys & testing, compliant removal, certified disposal and ongoing management plans. Free fixed quotes — 07960 881102.

- **H1:** Asbestos Services in Glasgow
- **Intro (GEO block):** From first suspicion to final documentation, Asbestos Remove provides every asbestos service under one roof — surveying, compliant removal, certified disposal and long-term management — across Glasgow and surrounding areas.
- 4 large ServiceCards (expanded 3–4 line descriptions from homepage)
- **H2: Not sure what you need?** Decision helper block: "Found suspect material → Survey. Confirmed asbestos → Removal. Asbestos already removed or bagged → Disposal. Asbestos staying in place → Management." Each links to the sub-page.
- Mini process strip + CTA Band

---

# 5.3 ASBESTOS SURVEYS — `/services/asbestos-surveys`

**Meta title:** Asbestos Surveys & Testing Glasgow | Management & R&D Surveys
**Meta description:** HSG264-compliant asbestos surveys in Glasgow. Management surveys, refurbishment & demolition surveys, sampling and testing with clear reports. Book today.

- **H1:** Asbestos Surveys & Testing in Glasgow
- **GEO block:** An asbestos survey identifies the location, type and condition of asbestos-containing materials in your property. If your building was built before 2000, a survey is the first — and legally safest — step before any refurbishment, demolition or property purchase.

**H2: Survey Types We Provide**
- **Management Survey** — For buildings in normal use. Locates ACMs that could be disturbed during occupation and maintenance, assesses condition, and forms the basis of your asbestos register. Required to meet the duty to manage under CAR 2012 Regulation 4.
- **Refurbishment & Demolition Survey** — Fully intrusive survey required before any refurbishment or demolition work. Locates all ACMs within the works area, including those hidden in the building fabric.
- **Sampling & Testing** — Targeted sampling of individual suspect materials (a ceiling, a floor tile, a garage roof) with UKAS-accredited laboratory analysis and fast turnaround.

**H2: What You Receive** — Photographic register of every ACM · Material and priority risk assessments · Clear site plans and locations · Laboratory certificates · Practical recommendations (manage, encapsulate or remove)

**H2: When Is a Survey Legally Required?** — Prose section covering: duty to manage (commercial/common areas), before refurbishment/demolition (CDM 2015), landlord obligations, property transactions.

**FAQ:** How long does a survey take? · Do I need a survey before selling my house? · What happens if asbestos is found? · How much does an asbestos survey cost in Glasgow?

Cross-links: Removal, Management, all sectors. CTA Band.

---

# 5.4 ASBESTOS REMOVAL — `/services/asbestos-removal`

**Meta title:** Asbestos Removal Glasgow | Garage Roofs, Artex, Floor Tiles & More
**Meta description:** Safe, compliant asbestos removal in Glasgow — cement garage roofs, Artex, floor tiles and more. Controlled methods, UKATA-trained operatives, certified disposal.

- **H1:** Safe, Compliant Asbestos Removal in Glasgow
- **GEO block:** Asbestos Remove carries out non-licensed and notifiable non-licensed (NNLW) asbestos removal — the categories covering the majority of asbestos found in homes and commercial buildings, from cement garage roofs to Artex and floor tiles. Every job runs under controlled conditions: protected work areas, wet suppression, Class H vacuums, full decontamination and certified disposal. If your material is licensable, we tell you straight and help you arrange the right contractor.

**H2: Licensed, Notifiable & Non-Licensed Work — Explained**
Three-tier explainer (this is high-value GEO content almost no competitor explains clearly — and our transparency here is the trust asset):
- **Licensed work** — sprayed coatings, pipe/boiler lagging, most asbestos insulating board (AIB). Legally requires an HSE licensed contractor, 14-day notification and medical surveillance. *We do not carry out licensed work — if a survey identifies these materials, we say so and help you arrange an HSE licensed contractor.*
- **Notifiable non-licensed work (NNLW)** — lower-risk work still requiring notification to the enforcing authority, records and health surveillance. *This is our core work.*
- **Non-licensed work** — e.g. asbestos cement in good condition — still demands trained operatives, controlled methods and correct disposal. *This too.*

**H2: Materials We Remove** — Asbestos cement sheets & garage roofs · Textured coatings (Artex) · Vinyl floor tiles & adhesives · Asbestos cement flues, gutters & downpipes · Cold water tanks · Rope seals & gaskets · Bitumen products
*(Deliberately excludes licensable materials — lagging, sprayed coatings, most AIB. Those route to Surveys + referral guidance.)*

**H2: Our Removal Process** — Reuse ProcessTimeline steps 3–6 in detail: plan of work & NNLW notification where required → protected, sheeted work area with controlled access → removal with wet methods & Class H vacuums → operative decontamination → visual inspection with reassurance air testing available on request → certified disposal & full documentation.

**H2: Site Gallery** — the 4 uploaded work-area/equipment photos with descriptive alts ("Controlled asbestos work area with air filtration units, Glasgow project").

**FAQ:** Are you HSE licensed? (honest scope answer — reuse homepage FAQ 5) · Do I have to move out during removal? · How long does removal take? · Can you remove my garage roof?

Cross-links: Surveys (before), Disposal (after), Industrial sector. CTA Band.

---

# 5.5 ASBESTOS DISPOSAL — `/services/asbestos-disposal`

**Meta title:** Certified Asbestos Disposal & Collection Glasgow | Asbestos Remove
**Meta description:** Fully certified asbestos disposal in Glasgow. SEPA-compliant collection, consignment notes and licensed facility disposal. No risk left behind. Call 07960 881102.

- **H1:** Certified Asbestos Disposal in Glasgow
- **GEO block:** Asbestos waste is classified as special (hazardous) waste in Scotland and must be transported by a registered carrier and disposed of at a licensed facility. We handle the entire chain — double-bagging, sealed transport, consignment notes and disposal certificates — so your legal duty of care is fully discharged.

**H2: What's Included** — UN-approved double bagging & sealed containment · Registered waste carrier transport [WASTE_CARRIER_NO] · SEPA consignment notes · Disposal at licensed transfer/landfill facilities · Certificates retained & copied to you

**H2: Collection Service** — For pre-bagged cement products or removal arisings; scheduled or same-week collection across Glasgow.

**H2: Why Certified Disposal Matters** — Duty of care under the Environmental Protection Act 1990; fly-tipped asbestos liability stays with the producer; paperwork protects you in property sales and audits.

**FAQ:** Can I take asbestos to the tip myself? · What paperwork do I get? · Do you collect from domestic properties? · How is asbestos waste packaged?

Cross-links: Removal, Domestic sector. CTA Band.

---

# 5.6 ASBESTOS MANAGEMENT — `/services/asbestos-management`

**Meta title:** Asbestos Management Plans Glasgow | Duty to Manage Compliance
**Meta description:** Asbestos management plans, registers and consultancy in Glasgow. Meet your CAR 2012 duty to manage with practical, audit-ready compliance. Free consultation.

- **H1:** Asbestos Management & Compliance in Glasgow
- **GEO block:** If you own, manage or are responsible for a non-domestic building, Regulation 4 of the Control of Asbestos Regulations 2012 makes you a duty holder — legally required to identify, record and manage asbestos in your premises. We build and maintain that compliance for you.

**H2: Management Services** — Asbestos management plans · Asbestos registers (creation & annual review) · Re-inspection surveys · Condition monitoring & encapsulation advice · Staff asbestos awareness guidance · Contractor induction packs

**H2: Who Is a Duty Holder?** — Landlords of commercial property, employers occupying premises, managing agents, housing associations (common areas), schools & healthcare estates.

**H2: What Compliance Looks Like** — Short prose: survey → register → plan → communicate → re-inspect annually → keep records audit-ready.

**FAQ:** What is an asbestos register? · How often must the register be reviewed? · Does the duty to manage apply to flats? · What are the penalties for non-compliance?

Cross-links: Surveys, Commercial sector. CTA Band.

---

# 5.7 SECTOR — DOMESTIC — `/sectors/domestic`

**Meta title:** Asbestos Removal for Homes Glasgow | Garage Roofs, Artex & More
**Meta description:** Domestic asbestos removal across Glasgow — garage roofs, Artex ceilings, floor tiles & more. Tidy, discreet, UKATA-trained. Free fixed quotes for homeowners.

- **H1:** Asbestos Removal for Glasgow Homes
- **GEO block:** Most Glasgow homes built before 2000 contain some asbestos — usually safe until disturbed by DIY, renovation or damage. We help homeowners and landlords identify, remove or safely manage it with minimal disruption and a fixed written quote.

**H2: Common Asbestos in Glasgow Homes** — Garage & shed roofs (asbestos cement) · Textured/Artex ceilings · Vinyl floor tiles & bitumen adhesive · Pipe lagging & boiler flues · Soffits, fascias & guttering · Water tanks · Airing cupboard panels (AIB)
*(Glasgow-specific credibility: tenement closes, pre-war villas and 1950s–70s estates each have typical ACM patterns — mention naturally.)*

**H2: How We Work in Occupied Homes** — Clean, sealed work areas · Dust-free methods · Respect for your home (protection, tidy handover) · Clear timings, out-of-hours where needed · Family and pet safety guidance

**H2: Renovating or Buying?** — Pre-purchase sampling; pre-renovation surveys before builders start (builders will down-tools if suspect material appears — a survey first avoids costly delays).

**FAQ:** Is Artex dangerous? · Can I stay in my house during work? · How much to remove a garage roof in Glasgow? · Do landlords have asbestos duties?

Cross-links: Surveys, Removal, Disposal. CTA Band.

---

# 5.8 SECTOR — COMMERCIAL — `/sectors/commercial`

**Meta title:** Commercial Asbestos Removal & Surveys Glasgow | Duty Holder Support
**Meta description:** Commercial asbestos services in Glasgow — surveys, removal, registers & management plans for offices, retail, schools & healthcare. Out-of-hours working available.

- **H1:** Commercial Asbestos Services in Glasgow
- **GEO block:** Every non-domestic building owner or occupier in Scotland has a legal duty to manage asbestos. We keep Glasgow businesses compliant and trading — surveys, removal and management delivered around your hours, with audit-ready documentation.

**H2: Buildings We Cover** — Offices & serviced buildings · Retail & hospitality · Schools, colleges & nurseries · Healthcare & care homes · Housing association stock & common closes · Places of worship & community buildings

**H2: Built Around Your Business** — Night/weekend enclosures · Phased works to keep floors open · Single point of contact & programme reporting · CDM 2015 coordination with your principal contractor · Insurance-grade documentation

**H2: Duty Holder Package** — Bundled offer: management survey + register + management plan + annual re-inspection. Strong conversion block with its own CTA.

**FAQ:** Who is the duty holder in a leased building? · Can work happen while we stay open? · What documents will my insurer/auditor ask for? · Do schools need a specific approach?

Cross-links: Management, Surveys, Removal. CTA Band.

---

# 5.9 SECTOR — INDUSTRIAL — `/sectors/industrial`

**Meta title:** Industrial Asbestos Removal Scotland | Factories, Plant & Warehouses
**Meta description:** Large-scale industrial asbestos removal across Glasgow & Scotland — cement roofs, cladding & more. Controlled methods, CDM coordination, certified disposal.

- **H1:** Industrial Asbestos Removal Across Glasgow & Scotland
- **GEO block:** Industrial asbestos work demands scale and discipline: protected work zones, controlled access, air filtration and tight programme control. Our UKATA-trained teams deliver large-scale non-licensed and notifiable asbestos removal — cement roofs, cladding, gutters and flues — on factories, warehouses and demolition-phase projects Scotland-wide.
*(This is the page where Scotland-wide targeting begins — larger contracts justify wider travel.)*

**H2: Capabilities** — Asbestos cement roof & cladding strip at height · Protected work zones with controlled access & air filtration · Live-environment working alongside site operations · Cement gutters, flues & downpipe removal · Demolition-phase strip-outs (R&D survey led, non-licensed scope) · Plant & machinery decontamination

**H2: Compliance & Programme Control** — NNLW notifications handled · RAMS & plans of work per phase · Daily records & air monitoring logs · Visual inspections with reassurance air testing available · Consignment-noted waste streams
*(Gallery: use uploaded photos 03/04 — NPU banks & enclosure interiors — this page's imagery is its proof.)*

**H2: Sectors Served** — Manufacturing · Distribution & logistics · Energy & utilities · Marine & rail · Demolition contractors (subcontract removal packages)

**FAQ:** Can production continue during removal? · Which materials fall within non-licensed scope? · Do you work as a subcontractor to principal contractors? · When is notification required?

Cross-links: Removal, Disposal, Management. CTA Band.

---

# 5.10 ABOUT US — `/about`

**Meta title:** About Asbestos Remove | Glasgow Asbestos Specialists
**Meta description:** Meet Asbestos Removal Environmental Ltd — Glasgow asbestos specialists led by 30+ years of industry experience. UKATA-trained team and a safety-first culture.

- **H1:** Glasgow's Safety-First Asbestos Specialists
- **Intro:** Asbestos Remove is the trading name of Asbestos Removal Environmental Ltd, a Glasgow asbestos contractor headquartered at the SMK Business Centre. The company is led by founder Quinton Davidson, who brings over 30 years of hands-on industry experience across domestic, commercial and industrial asbestos work.

**H2: Our Standards** — Compliance strip rendered large (mono type): UKATA-trained operatives · [ISO_STANDARDS] · SEPA registered carrier [WASTE_CARRIER_NO] · £[INSURANCE_COVER] insurance. One short paragraph per credential explaining what it means *for the client*. Plus an honest scope paragraph: the work categories we cover (non-licensed/NNLW) and how we handle licensable finds.

**H2: Our Values** — Three value cards (no numbering — not a sequence): **Safety without shortcuts** · **Honest, fixed pricing** · **Paperwork you can rely on**

**H2: Why We Exist** — Short founder-voice paragraph (Quinton Davidson): 30 years in the industry, and the gap in the market for a responsive, transparent, properly trained local contractor. *(Get 2–3 sentences from client, or draft for approval — flag as `[FOUNDER_QUOTE]`.)*

**H2: Where We Work** — Glasgow city + surrounding areas list (Paisley, Hamilton, Motherwell, East Kilbride, Clydebank, Cumbernauld…) with note: industrial projects undertaken Scotland-wide. *(This paragraph is the Phase-2 hook — becomes links to location pages later.)*

CTA Band.

---

# 5.11 CONTACT — `/contact`

**Meta title:** Contact Asbestos Remove Glasgow | Free Quotes — 07960 881102
**Meta description:** Get a free asbestos survey or removal quote in Glasgow. Call 07960 881102, email info@asbestosremove.co.uk or send photos through our quick quote form.

- **H1:** Get Your Free Asbestos Quote
- **Layout:** 2-col — QuoteForm left, contact details + map right.
- **Contact block (semantic `<address>`):**
  - ☎ 07960 881102 (tel: link)
  - ✉ info@asbestosremove.co.uk (general) · qd@asbestosremove.co.uk (direct)
  - 📍 Unit 4, 95 Morrison Street, SMK Business Centre, The Piazza, Glasgow, G5 8BE
  - Hours: [CONFIRM — e.g. Mon–Fri 8:00–18:00, 24/7 emergency line?]
- **Form fields:** Name* · Phone* · Email* · Postcode* · Property type (Home / Commercial / Industrial) · Service needed (Survey / Removal / Disposal / Management / Not sure) · Message · Photo upload (optional, ≤3 files)
- **Resend flow:** notification → info@ (reply-to = customer) + branded auto-reply React Email ("We've received your enquiry — here's what happens next" + the do-not-disturb safety note)
- **Reassurance strip:** "Free, fixed quotes · No-obligation advice · Response within 24 hours"
- **Tip block:** "Not sure if it's asbestos? Don't touch it — photograph it from a safe distance and attach it to the form."

**FAQ (short):** How fast will you respond? · Do you charge for quotes? · Which areas do you cover?

---

## 6. Legal Pages (structural only)

- `/privacy-policy` — GDPR/UK DPA: form data via Resend, retention, rights, ICO contact. `[LEGAL REVIEW]`
- `/terms` — quotation validity, site access requirements, cancellation, liability. `[LEGAL REVIEW]`
- Both `noindex: false`, linked in footer only.

---

## 7. Phase 2 — Scotland Expansion (pre-planned, do not build yet)

1. **Location pages** at `/asbestos-removal-{city}` — Edinburgh, Paisley, Stirling, Ayr, Dundee, Aberdeen. Template: unique intro (local building stock detail), services summary, local FAQs, LocalBusiness `areaServed` extension. **Rule: no thin/doorway duplication — each page needs ≥40% unique copy.**
2. **Blog/Guides** at `/guides` — "Asbestos in Glasgow tenements", "Duty to manage checklist", "Artex: test or remove?" — GEO/AI-citation engine.
3. Google Business Profile + local citations (NAP-exact) at launch — feeds the Map Pack, which dominates local intent for this niche.

---

## 8. Build Order (your standard UI-first workflow)

1. **M1** — Repo, Tailwind v4 tokens, fonts, layout shell (Header/Footer/CTA Band), routing for all pages
2. **M2** — Full static UI on this spec's copy: Home → Services hub → 4 service pages → 3 sector pages → About → Contact
3. **M3** — Quote form + Resend + React Email templates + API route (honeypot, rate limit)
4. **M4** — SEO layer: metadata exports, JSON-LD lib, sitemap/robots, OG images
5. **M5** — Motion pass, CWV audit (Lighthouse ≥95 across the board), accessibility pass, launch checklist incl. §0 flag replacement
6. **M6** — SEO landing pages Phase 1 (§11): `/guides` hub + 4 guide pages, claims/schema/nav/sitemap wiring

---

*End of specification — v1.0*

---

## 9. Signature Feature — "Where Asbestos Hides" Interactive Property Explorer

**Purpose:** Flagship differentiator. An interactive SVG cutaway of a typical pre-2000 Glasgow property with tappable hotspots for common asbestos-containing materials. Each hotspot opens a detail panel and funnels into a pre-qualified quote enquiry.

**Placement:**
- Homepage — dedicated section between Sectors and Process (`H2: Where Asbestos Hides in Glasgow Homes`)
- `/sectors/domestic` — embedded as the primary content feature (replaces static "Common Asbestos" list; the list remains beneath as semantic HTML for SEO/no-JS fallback)

### 9.1 Component Architecture

```
components/explorer/
  PropertyExplorer.tsx        # client component — state, keyboard nav, reduced-motion
  PropertySvg.tsx             # inline SVG cutaway (house cross-section)
  Hotspot.tsx                 # pulsing marker (Framer Motion), button semantics
  MaterialPanel.tsx           # slide-in detail panel (mobile: bottom sheet)
  explorer-data.ts            # typed hotspot content (single source of truth)
```

```ts
// explorer-data.ts contract
export type RiskLevel = 'lower' | 'moderate' | 'higher';

export interface AsbestosHotspot {
  id: string;                 // 'artex-ceiling' — also used as quote-form prefill key
  label: string;              // 'Textured (Artex) Ceiling'
  location: string;           // 'Living room & hallway ceilings'
  era: string;                // 'Common in homes decorated 1960s–1990s'
  risk: RiskLevel;            // drives badge colour (eco-500 / amber / danger — only place danger red is used)
  summary: string;            // 2–3 sentences, plain English
  disturbedBy: string[];      // ['Drilling', 'Sanding', 'Removing coving']
  advice: string;             // one-line safe-behaviour instruction
  serviceLink: '/services/asbestos-surveys' | '/services/asbestos-removal';
  x: number; y: number;       // SVG coordinate (viewBox 0 0 1200 800)
}
```

**Interaction rules:**
- Hotspots are `<button>` elements inside SVG `<foreignObject>`/overlay layer — full keyboard navigation (Tab, Enter/Space, Esc closes panel), `aria-expanded`, panel as `role="dialog"` on mobile sheet
- Framer Motion: 2s soft pulse on idle markers, spring slide-in for panel; all animation gated behind `useReducedMotion()`
- Only one panel open at a time; deep-linkable via `?spot=artex-ceiling` for sharing/campaigns
- No-JS / crawler fallback: the full hotspot content also renders as a semantic `<ul>` below the component (visually collapsed under a "View as list" toggle) — SEO never depends on interaction

### 9.2 Hotspot Content (8 hotspots — final copy)

1. **Textured (Artex) Ceiling** — `moderate` — Living room & hallway ceilings — *Decorated 1960s–1990s*
   Textured coatings applied before the mid-1980s often contain white asbestos. Safe if undisturbed and in good condition — the risk comes from sanding, drilling or scraping. *Disturbed by:* sanding, drilling, removing coving, fitting downlights. *Advice:* Never sand or scrape a textured ceiling before it has been tested. → Surveys

2. **Garage & Shed Roof** — `moderate` — Detached garage / outbuilding — *Built 1950s–1980s*
   Corrugated asbestos cement was the standard garage roofing material for decades. Weathering and moss growth degrade the surface over time; broken or drilled sheets release fibres. *Disturbed by:* breakage, drilling, pressure-washing, demolition. *Advice:* Never pressure-wash or break up a cement roof — quote removal instead. → Removal

3. **Vinyl Floor Tiles & Adhesive** — `lower` — Kitchen, hallway, under carpets — *Laid 1950s–1980s*
   Older thermoplastic tiles and the black bitumen adhesive beneath them frequently contain asbestos. Low risk while intact and covered. *Disturbed by:* lifting, grinding, floor levelling. *Advice:* If tiles crack or lift during renovation, stop and test before continuing. → Surveys

4. **Pipe & Boiler Lagging** — `higher` — Airing cupboard, cellar, behind boiler — *Installed pre-1980s*
   Thermal lagging is among the most hazardous asbestos materials and is licensable — removal legally requires an HSE licensed contractor. Often hidden under later insulation. *Disturbed by:* plumbing work, boiler replacement, any contact. *Advice:* Do not touch suspect lagging under any circumstances — we'll test it and help you arrange licensed removal. → Surveys

5. **Airing Cupboard / Ceiling Panels (AIB)** — `higher` — Airing cupboards, ceiling hatches, partition walls — *Built 1945–1985*
   Asbestos insulating board looks like ordinary board but releases fibres readily when cut or broken. Most AIB work is licensable and requires an HSE licensed contractor. *Disturbed by:* drilling, screwing, removing panels, loft hatch use. *Advice:* Treat any unidentified board in a pre-1985 home as suspect until tested — we'll identify it and advise on the compliant route. → Surveys

6. **Soffits, Fascias & Guttering** — `lower` — Roofline exterior — *Fitted 1950s–1980s*
   Asbestos cement roofline products are common and low risk while weather-sealed and intact. Usually addressed during window/roofline replacement. *Disturbed by:* roofline replacement, drilling for fixtures. *Advice:* Tell your roofline installer the age of the property — test before replacement. → Surveys

7. **Cold Water Tank** — `lower` — Loft — *Installed pre-1980s*
   Older loft water tanks were commonly made from asbestos cement. Stable, but must be disposed of correctly when plumbing is upgraded. *Disturbed by:* tank replacement, loft conversion. *Advice:* Never cut up an old tank to get it through the hatch — we remove and consign it whole. → Removal

8. **Boiler Flue & Rope Seals** — `moderate` — Kitchen / utility, behind appliances — *Installed pre-1990s*
   Asbestos cement flue pipes and rope door seals appear in older heating systems. Usually encountered during boiler replacement. *Disturbed by:* heating engineers, appliance removal. *Advice:* Ask your gas engineer to stop work if a suspect flue is found — testing is fast. → Surveys

### 9.3 Quote-Form Integration

- Panel CTA: **"Get this checked"** → `/contact?material=artex-ceiling`
- QuoteForm reads `material` search param → pre-selects service, injects hidden field + message prefix: *"Enquiry via property explorer: Textured (Artex) Ceiling"*
- Result: enquiries arrive pre-qualified with material type — Quinton can provisionally price before calling back
- Track hotspot opens + CTA clicks as Vercel Analytics custom events (`explorer_open`, `explorer_quote`) — gives Quinton a "most-worried-about materials" report

### 9.4 SEO / GEO Value

- Each hotspot's summary targets a long-tail query ("is Artex dangerous", "asbestos garage roof removal", "asbestos pipe lagging") on the highest-authority pages of the site
- Semantic fallback list ensures full crawlability; hotspot Q&A pairs added to the domestic page's `FAQPage` schema
- Deep-link URLs (`?spot=`) usable in Google Business Profile posts and social content

### 9.5 SVG Asset Plan

- Single inline SVG, hand-authored (no external illustration dependency): flat-style cross-section of a two-storey semi with detached garage — roofline, loft with tank, airing cupboard, kitchen floor, living room ceiling, boiler, garage
- Line style matches "Containment Grid" identity: 1.5px brand-navy strokes, surface fills at 4–8% brand tints, hotspot markers in gradient-cta
- ViewBox `0 0 1200 800`; scales from 360px mobile (panel becomes bottom sheet) to full desktop width

### 9.6 Build Order Impact

Slots into **M2** as its own sub-milestone: **M2.5 — Property Explorer** (SVG asset → data file → components → domestic page embed → homepage embed). Form param handling lands in **M3** with the QuoteForm; analytics events in **M5**.

---

## 10. Signature Feature — "Anatomy of a Safe Removal" Scroll Story

**Purpose:** Scroll-driven visual narrative on `/services/asbestos-removal` that builds a controlled removal work area stage-by-stage as the user scrolls. Converts the most intimidating part of the purchase — *"what actually happens on my property?"* — into a transparent, calm, professional sequence. Front-end only; no backend, no new dependencies.

**Placement:** Replaces the static "Our Removal Process" section on the Removal page (§5.4). The existing prose process content remains rendered beneath each scene as the narration text — the story *is* the section, not an addition to it.

### 10.1 Concept & Layout

- **Desktop (≥1024px):** two-column pinned layout. Left: sticky illustrated stage (SVG scene, ~55% width, pinned for the section's full scroll length of ~400vh). Right: five narration blocks that scroll past, each driving a scene transition.
- **Mobile:** no pinning. Each scene renders as a static SVG frame above its narration block (frames are cheap — same SVG, different layer visibility). Scroll-linked animation on mobile is a jank risk and adds nothing.
- Scene rendered in the Containment Grid line style: brand-navy 1.5px strokes, tint fills, gradient-cta accents. One illustration, five layer-states — not five illustrations.

### 10.2 Scene Breakdown & Scroll Ranges

Section scroll progress `p` (0→1) via `useScroll({ target, offset: ['start start', 'end end'] })`. Each scene owns a range; transitions overlap 5% for crossfade.

| # | Scene (p range) | Visual state | Narration heading + text |
|---|---|---|---|
| 1 | **Survey & Plan** (0.00–0.18) | Bare room outline; suspect material highlighted with pulsing marker; clipboard/plan icon draws in | **It starts on paper.** Every removal begins with a plan of work and risk assessments — and, for notifiable work, notification to the enforcing authority. Nothing is touched until the method is set. |
| 2 | **The Work Area Seals** (0.18–0.40) | Polythene sheeting panels slide across the frame one by one; barrier tape and warning signage draw in; access point marked | **Your property is protected.** We isolate the work area with polythene sheeting, seal what stays in place, and set up signed, controlled access before any material is touched. |
| 3 | **Dust Never Escapes** (0.40–0.62) | Water-mist droplets settle over the material; a Class H vacuum unit docks beside it; animated airflow arrows curve into the filter; gauge needle settles in the green zone | **Fibres are captured at source.** Wet suppression keeps fibres bound to the material; Class H filtered vacuums capture anything released. Air passes through filters — not through your home. |
| 4 | **Controlled Removal & Decontamination** (0.62–0.82) | Suited operative figure appears at the material; material sections fade out into a sealed red-tagged waste sack; operative passes through the decontamination stage | **The work happens under control.** UKATA-trained operatives remove the material whole where possible, double-bag every piece in UN-approved sacks, and decontaminate fully before stepping outside the work area. |
| 5 | **Inspected, Documented, Done** (0.82–1.00) | Sheeting fades away; room renders clean; inspection checklist ticks through; waste consignment document stamps in with gradient seal | **Checked and proven on paper.** The area is thoroughly inspected and handed back clean — with independent reassurance air testing available on request. Every bag of waste is tracked to a licensed facility, and the paperwork is yours to keep. |

Closing beat (p ≈ 1.0, below the pinned section): full-width strip — *"That's what doing it properly looks like."* + [Get a Free Quote] — the section's conversion moment.

### 10.3 Component Architecture

```
components/removal-story/
  RemovalStory.tsx        # client — section scroll container, useScroll, scene index
  StoryStage.tsx          # sticky SVG stage; receives progress MotionValue
  StoryScene.tsx          # one narration block; IntersectionObserver reports active scene
  EnclosureSvg.tsx        # single inline SVG, layer groups g#scene-1 … g#scene-5
  story-data.ts           # typed scene copy (headings, narration, aria labels)
```

```ts
// story-data.ts contract
export interface StoryScene {
  id: string;              // 'enclosure-seals'
  range: [number, number]; // scroll progress window
  heading: string;
  narration: string;
  ariaLabel: string;       // describes the visual state for screen readers
}
```

**Motion implementation:**
- One `useScroll` on the section; per-layer `useTransform(p, range, [0,1])` mapped to opacity/pathLength/x/y — all GPU-composited properties, no layout thrash
- Airflow arrows (scene 3): SVG `stroke-dashoffset` loop, started only while scene 3 is active (`AnimatePresence` on layer mount)
- `will-change` only on the active layer; layers outside ±1 scene render `display:none`

### 10.4 Accessibility & Fallbacks

- `useReducedMotion()` → pinning and scroll-linking disabled; renders the mobile static-frames layout at all breakpoints
- Narration blocks are ordinary semantic HTML (`h3` + `p`) in document order — the full process reads correctly with zero JS/CSS, which also preserves the section's SEO value (this copy targets "asbestos removal process" queries)
- Stage carries `role="img"` with a live `aria-label` from the active scene's `ariaLabel`; decorative layers `aria-hidden`
- No scroll hijacking — native scroll only; pinned element via `position: sticky`, never JS-driven scroll position

### 10.5 Performance Budget

- Entire feature = one client component tree + one inline SVG (~25–35KB gzipped target, no raster assets in the stage)
- Real site photography stays in the separate Site Gallery section (§5.4) — the story stage remains vector-only so the pinned element never triggers LCP/CLS issues
- Lighthouse guardrail: Removal page must still hit ≥95 performance with the story mounted; verify in M5 CWV audit

### 10.6 Build Order Impact

- **M2.6 — Removal Story** (after M2.5 Explorer): SVG layer asset → story-data copy → components → Removal page integration, mobile frames, reduced-motion path
- M5 adds the scroll-performance profile pass (Chrome tracing on mid-tier Android) alongside the CWV audit

### 10.7 Relationship to the Property Explorer (§9)

The two features split the funnel: the **Explorer** owns discovery ("do I have a problem?") on the homepage and domestic page; the **Story** owns trust ("can I let these people into my property?") on the removal page. Explorer hotspots with `serviceLink: /services/asbestos-removal` land the visitor directly above the story — the intended one-two sequence.

---

## 11. SEO Landing Pages — `/guides` (M6; starts the §7.2 Guides plan)

Keyword-driven landing pages targeting low-difficulty, high-intent search clusters (source: Semrush/Ahrefs, July 2026). One page per **search intent**, never per keyword variant — the four "how much…" question keywords all resolve to the single cost guide.

### 11.1 Page map (Phase 1 — informational guides)

| Route | Target cluster (UK vol / KD) | Notes |
|---|---|---|
| `/guides` | — (hub) | Card grid linking the guides; links from Resources nav + footer |
| `/guides/asbestos-removal-cost` | asbestos removal cost (1.9K/14), how much does it cost to remove asbestos (590/5) + 3 more "how much" variants (~1.4K/5–6) | Price table with indicative UK market ranges — clearly labelled as market context, NOT company quotes. VAT + variables section |
| `/guides/licensed-vs-non-licensed-asbestos-removal` | licensed asbestos removal companies uk (1.6K/35) | The three-tier explainer as education. ALL licensing-status sentences imported from `lib/claims.ts` (§0 rule). Ranks honestly without any licence claim |
| `/guides/how-to-identify-asbestos` | how to tell if you have asbestos, what does asbestos look like | Funnels to surveys + Clarity Check explorer |
| `/guides/asbestos-disposal-rules-scotland` | asbestos disposal, getting rid of asbestos, how to remove asbestos | Scotland-specific: special waste (not "hazardous waste"), SEPA, consignment notes. Funnels to disposal service |

### 11.2 Standing rules for guide pages

- **Voice**: written UK-English trade prose — first-person plural, concrete specifics (regulations by name, real price ranges, materials, dates), varied sentence rhythm. No listicle filler, no "it's important to note", no invented company facts
- **Prices** are indicative UK market ranges, stated as such, with a "your quote is the real answer" CTA. Never presented as this company's tariff. §0 placeholder rule still applies to company numbers (insurance, ISO)
- Every guide: PageHero with ≤50-word direct-answer intro (GEO), `Article` + `BreadcrumbList` JSON-LD, FAQ section (FAQAccordion → auto `FAQPage`), RelatedLinks to services + sibling guides, unique metadata + canonical
- A visible "Last updated <Month Year>" line (freshness signal); update when copy materially changes
- Licensing-status statements ONLY via `lib/claims.ts` exports — new guide-specific statements are added there first, then imported

### 11.3 Later phases (do not build in M6)

- **Phase 2 — material pages** under `/services/asbestos-removal/…`: garage roofs, artex, floor tiles, cement sheets, soffits & fascias, sheds, water tanks. Target "[material] asbestos removal (+ cost)". Licensable materials (lagging, sprayed coatings, AIB) get NO service page — educational coverage only
- **Phase 3 — location pages** per §7.1 (unchanged: ≥40% unique copy, no doorway pages)
