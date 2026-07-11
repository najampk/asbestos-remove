// emails/QuoteAutoReplyEmail.tsx
// Branded auto-reply to the customer confirming receipt, with the do-not-disturb
// safety note (SPEC.md §5.11).
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Link,
} from "@react-email/components";

export interface QuoteAutoReplyProps {
  name: string;
  phoneDisplay: string;
  phoneHref: string;
}

const navy = "#071B47";
const muted = "#475569";
const line = "#E2E8F0";

export default function QuoteAutoReplyEmail({
  name,
  phoneDisplay,
  phoneHref,
}: QuoteAutoReplyProps) {
  return (
    <Html>
      <Head />
      <Preview>We&rsquo;ve received your enquiry — here&rsquo;s what happens next</Preview>
      <Body style={{ backgroundColor: "#F8FAFC", fontFamily: "Arial, sans-serif", margin: 0, padding: "24px 0" }}>
        <Container style={{ maxWidth: 560, margin: "0 auto" }}>
          {/* Gradient header band */}
          <Section
            style={{
              background: "linear-gradient(90deg, #1D4ED8, #16A34A)",
              borderRadius: "12px 12px 0 0",
              padding: "28px 32px",
            }}
          >
            <Text style={{ margin: 0, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>
              Asbestos Remove · Glasgow
            </Text>
            <Heading style={{ margin: "8px 0 0", fontSize: 22, color: "#ffffff" }}>
              Thanks — we&rsquo;ve got your enquiry
            </Heading>
          </Section>

          <Section style={{ backgroundColor: "#ffffff", border: `1px solid ${line}`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: 32 }}>
            <Text style={{ margin: 0, fontSize: 15, color: navy }}>
              Hi {name},
            </Text>
            <Text style={{ margin: "12px 0 0", fontSize: 15, color: muted, lineHeight: 1.6 }}>
              Thanks for getting in touch with Asbestos Remove. We&rsquo;ve
              received your enquiry and a member of our Glasgow team will review it
              and get back to you — usually within 24 hours — with free, fixed-price
              advice.
            </Text>

            <Heading style={{ margin: "24px 0 8px", fontSize: 15, color: navy }}>
              What happens next
            </Heading>
            <Text style={{ margin: 0, fontSize: 14, color: muted, lineHeight: 1.7 }}>
              1. We review your details and any photos you sent.
              <br />
              2. We come back with advice and a fixed quote, or arrange a survey if
              one is needed.
              <br />
              3. If anything looks urgent, we&rsquo;ll call you.
            </Text>

            <Section style={{ marginTop: 24, borderRadius: 8, border: "1px solid #FECACA", backgroundColor: "#FEF2F2", padding: "14px 16px" }}>
              <Text style={{ margin: 0, fontSize: 14, color: "#991B1B", fontWeight: 700 }}>
                If you think you&rsquo;ve found asbestos — don&rsquo;t disturb it.
              </Text>
              <Text style={{ margin: "6px 0 0", fontSize: 14, color: "#991B1B", lineHeight: 1.6 }}>
                Leave the area, avoid touching the material, and don&rsquo;t sand,
                drill, break or sweep it. If in doubt, call us before doing anything.
              </Text>
            </Section>

            <Hr style={{ borderColor: line, margin: "24px 0" }} />
            <Text style={{ margin: 0, fontSize: 14, color: muted }}>
              Need us sooner? Call{" "}
              <Link href={phoneHref} style={{ color: "#1D4ED8", fontWeight: 600 }}>
                {phoneDisplay}
              </Link>
              .
            </Text>
            <Text style={{ margin: "16px 0 0", fontSize: 12, color: muted }}>
              Asbestos Remove is a trading name of Asbestos Removal Environmental
              Ltd, Glasgow (SC889602).
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
