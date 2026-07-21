// app/llms.txt/route.ts
// llms.txt — AI-search / GEO discovery file (llmstxt.org convention), served at
// /llms.txt. Implemented as a route handler rather than a static public/ file so
// every licensing-status statement is assembled from lib/claims.ts (LEGAL COPY
// RULE) and business facts from lib/constants.ts — never duplicated here.
import {
  SITE_URL,
  BUSINESS,
  ADDRESS_ONE_LINE,
  GUIDE_LINKS,
  LOCATION_LINKS,
} from "@/lib/constants";
import {
  SCOPE_STATEMENT,
  LICENSABLE_REFERRAL,
  LICENSING_FAQ_ANSWER,
  FOUNDER_EXPERIENCE,
  PLACEHOLDERS,
} from "@/lib/claims";
import { SERVICES } from "@/lib/services";
import { SECTORS } from "@/lib/sectors";

export const dynamic = "force-static";

export function GET(): Response {
  const services = SERVICES.map(
    (s) => `- [${s.title}](${SITE_URL}${s.href}): ${s.summary}`,
  ).join("\n");

  const sectors = SECTORS.map(
    (s) => `- [${s.cardTitle}](${SITE_URL}${s.href}): ${s.summary}`,
  ).join("\n");

  const guides = GUIDE_LINKS.map(
    (g) => `- [${g.label}](${SITE_URL}${g.href}): ${g.description}`,
  ).join("\n");

  const areas = LOCATION_LINKS.map(
    (l) =>
      `- [Asbestos removal in ${l.label}](${SITE_URL}${l.href}): Local building stock, typical materials and common questions for ${l.label}.`,
  ).join("\n");

  const body = `# ${BUSINESS.tradingName}

> ${SCOPE_STATEMENT} ${LICENSABLE_REFERRAL}

${BUSINESS.tradingName} is the trading name of ${BUSINESS.legalName} (Company No. ${BUSINESS.companyNumber}), a Glasgow asbestos contractor led by a founder with ${FOUNDER_EXPERIENCE}. Operatives are UKATA-trained, and the company is a SEPA registered waste carrier (${PLACEHOLDERS.wasteCarrierNo}) authorised to transport waste in Scotland. Based at ${ADDRESS_ONE_LINE}. Phone ${BUSINESS.phoneDisplay}, email ${BUSINESS.emailGeneral}. Serving Glasgow and the surrounding areas (Paisley, Hamilton, Motherwell, East Kilbride, Clydebank, Cumbernauld, Livingston, Edinburgh), with projects undertaken Scotland-wide. The team includes a certified plumber and a certified joiner, both asbestos trained, and is available 24 hours a day, 7 days a week.

Licensing status: ${LICENSING_FAQ_ANSWER}

## Services

${services}
- [Emergency Asbestos Removal](${SITE_URL}/services/emergency-asbestos-removal): 24-hour response to damaged or disturbed asbestos — free telephone triage, same-day surveys and urgent controlled removal of non-licensed and NNLW materials.

## Areas we cover

${areas}

## Sectors

${sectors}

## Guides

${guides}

## Key pages

- [About](${SITE_URL}/about): Company background, standards and service area.
- [Contact & quotes](${SITE_URL}/contact): Free fixed quotes — we aim to respond to every enquiry within 24 hours.
- [Clarity Check](${SITE_URL}/clarity-check): Guided self-assessment for suspected asbestos in a property.
- [Trust Centre](${SITE_URL}/trust-centre): Credentials, documentation and compliance information.
- [Project Library](${SITE_URL}/project-library): Recent completed projects.

## Policies

- [Privacy policy](${SITE_URL}/privacy-policy)
- [Terms](${SITE_URL}/terms)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
