// emails/EmailShell.tsx
// Shared branded wrapper for ALL outbound email: navy header with logo and
// wordmark, blue→green hairline, white content area, and a navy compliance
// footer with contact details, address and disclaimer text.
//
// LEGAL COPY RULE: every licensing-status line in the footer is imported from
// lib/claims.ts — never hardcoded here (CLAUDE.md / SPEC.md §0).
//
// Email-client notes: table-based layout via @react-email components; system
// font stacks (webfonts are unreliable in email); PNG logo (Outlook has no
// webp support); the gradient hairline falls back to solid green where
// CSS gradients are unsupported.
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Link,
  Img,
  Hr,
} from "@react-email/components";
import { BUSINESS, SITE_URL, ADDRESS_ONE_LINE } from "@/lib/constants";
import { FOOTER_COMPLIANCE_ITEMS, SCOPE_STATEMENT } from "@/lib/claims";

export const palette = {
  navy: "#071B47",
  blue: "#1D4ED8",
  green: "#16A34A",
  greenDark: "#15803D",
  greenChip: "#DCFCE7",
  ecoLight: "#86EFAC",
  ink: "#0F172A",
  muted: "#475569",
  faintOnNavy: "#94A3B8",
  lightOnNavy: "#CBD5E1",
  line: "#E2E8F0",
  surface: "#F8FAFC",
} as const;

export const fontStack = "'Helvetica Neue', Helvetica, Arial, sans-serif";
export const monoStack = "'IBM Plex Mono', 'Courier New', monospace";

const DISCLAIMER =
  "This email and any attachments are confidential and intended solely for the " +
  "addressee. If you have received it in error, please notify us and delete it. " +
  "Advice given by email cannot confirm whether a material contains asbestos — " +
  "sampling and laboratory analysis are the only reliable confirmation. Nothing " +
  "in this email constitutes a formal quotation unless expressly stated.";

export default function EmailShell({
  preview,
  children,
}: {
  preview: string;
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();
  return (
    <Html lang="en-GB">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: palette.surface,
          margin: 0,
          padding: "28px 12px",
          fontFamily: fontStack,
        }}
      >
        <Container style={{ maxWidth: 620, margin: "0 auto" }}>
          {/* ── Header ─────────────────────────────────────────────────── */}
          <Section
            style={{
              backgroundColor: palette.navy,
              borderRadius: "16px 16px 0 0",
              padding: "22px 32px",
            }}
          >
            <Row>
              <Column style={{ width: 62 }}>
                <Link href={SITE_URL}>
                  {/* White tile: the logo is near-black on transparency and
                      would vanish against the navy header without it. */}
                  <Img
                    src={`${SITE_URL}/apple-icon-180x180.png`}
                    width="48"
                    height="48"
                    alt={`${BUSINESS.tradingName} logo`}
                    style={{
                      display: "block",
                      borderRadius: 10,
                      backgroundColor: "#FFFFFF",
                    }}
                  />
                </Link>
              </Column>
              <Column>
                <Text
                  style={{
                    margin: 0,
                    color: "#FFFFFF",
                    fontSize: 19,
                    fontWeight: 700,
                    lineHeight: "24px",
                  }}
                >
                  Asbestos Removal
                </Text>
                <Text
                  style={{
                    margin: "3px 0 0",
                    color: palette.ecoLight,
                    fontSize: 10,
                    fontFamily: monoStack,
                    letterSpacing: 2,
                    textTransform: "uppercase" as const,
                    lineHeight: "14px",
                  }}
                >
                  Environmental Ltd · Glasgow
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Blue→green hairline (solid green fallback) */}
          <Section
            style={{
              backgroundColor: palette.green,
              backgroundImage: `linear-gradient(90deg, ${palette.blue}, ${palette.green})`,
              height: 4,
              fontSize: 1,
              lineHeight: "4px",
            }}
          >
            {" "}
          </Section>

          {/* ── Content ────────────────────────────────────────────────── */}
          <Section
            style={{
              backgroundColor: "#FFFFFF",
              borderLeft: `1px solid ${palette.line}`,
              borderRight: `1px solid ${palette.line}`,
              padding: "32px",
            }}
          >
            {children}
          </Section>

          {/* ── Footer ─────────────────────────────────────────────────── */}
          <Section
            style={{
              backgroundColor: palette.navy,
              borderRadius: "0 0 16px 16px",
              padding: "26px 32px",
            }}
          >
            {/* Compliance strip — items sourced from lib/claims.ts */}
            <Text
              style={{
                margin: 0,
                color: palette.ecoLight,
                fontSize: 10,
                fontFamily: monoStack,
                letterSpacing: 1,
                textTransform: "uppercase" as const,
                lineHeight: "18px",
              }}
            >
              {FOOTER_COMPLIANCE_ITEMS.join("  ·  ")}
            </Text>

            <Text
              style={{
                margin: "14px 0 0",
                color: "#FFFFFF",
                fontSize: 13,
                fontWeight: 700,
                lineHeight: "20px",
              }}
            >
              <Link
                href={BUSINESS.phoneHref}
                style={{ color: "#FFFFFF", textDecoration: "none" }}
              >
                {BUSINESS.phoneDisplay}
              </Link>
              {"   ·   "}
              <Link
                href={`mailto:${BUSINESS.emailGeneral}`}
                style={{ color: "#FFFFFF", textDecoration: "none" }}
              >
                {BUSINESS.emailGeneral}
              </Link>
              {"   ·   "}
              <Link
                href={SITE_URL}
                style={{ color: palette.ecoLight, textDecoration: "none" }}
              >
                asbestosremove.co.uk
              </Link>
            </Text>
            <Text
              style={{
                margin: "6px 0 0",
                color: palette.lightOnNavy,
                fontSize: 12,
                lineHeight: "18px",
              }}
            >
              {ADDRESS_ONE_LINE}
            </Text>

            <Hr style={{ borderColor: "#1E3A6E", margin: "18px 0" }} />

            <Text
              style={{
                margin: 0,
                color: palette.faintOnNavy,
                fontSize: 11,
                lineHeight: "17px",
              }}
            >
              {BUSINESS.tradingName} is a trading name of {BUSINESS.legalName},
              registered in Scotland, company number {BUSINESS.companyNumber}.
            </Text>
            <Text
              style={{
                margin: "10px 0 0",
                color: palette.faintOnNavy,
                fontSize: 11,
                lineHeight: "17px",
              }}
            >
              {SCOPE_STATEMENT}
            </Text>
            <Text
              style={{
                margin: "10px 0 0",
                color: palette.faintOnNavy,
                fontSize: 10,
                lineHeight: "16px",
              }}
            >
              {DISCLAIMER}
            </Text>
          </Section>

          <Text
            style={{
              margin: "16px 0 0",
              textAlign: "center" as const,
              color: palette.muted,
              fontSize: 11,
            }}
          >
            © {year} {BUSINESS.legalName}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
