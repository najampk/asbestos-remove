// app/llms.txt/route.ts
// llms.txt — AI-search / GEO discovery file (llmstxt.org convention), served at
// /llms.txt. Implemented as a route handler rather than a static public/ file so
// every licensing-status statement is assembled from lib/claims.ts (LEGAL COPY
// RULE) and business facts from lib/constants.ts — never duplicated here.
import { SITE_URL, BUSINESS, ADDRESS_ONE_LINE } from "@/lib/constants";
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

  const body = `# ${BUSINESS.tradingName}

> ${SCOPE_STATEMENT} ${LICENSABLE_REFERRAL}

${BUSINESS.tradingName} is the trading name of ${BUSINESS.legalName} (Company No. ${BUSINESS.companyNumber}), a Glasgow asbestos contractor led by a founder with ${FOUNDER_EXPERIENCE}. Operatives are UKATA-trained, and the company is a SEPA registered waste carrier (${PLACEHOLDERS.wasteCarrierNo}) authorised to transport waste in Scotland. Based at ${ADDRESS_ONE_LINE}. Phone ${BUSINESS.phoneDisplay}, email ${BUSINESS.emailGeneral}. Serving Glasgow and the surrounding areas (Paisley, Hamilton, Motherwell, East Kilbride, Clydebank, Cumbernauld), with industrial projects undertaken Scotland-wide.

Licensing status: ${LICENSING_FAQ_ANSWER}

## Services

${services}

## Sectors

${sectors}

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
