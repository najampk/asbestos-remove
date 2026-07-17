// emails/QuoteAutoReplyEmail.tsx
// Branded auto-reply to the customer confirming receipt, with the do-not-disturb
// safety note (SPEC.md §5.11). Rendered inside the shared branded EmailShell
// (logo header + compliance footer with disclaimer).
import { Section, Heading, Text, Hr, Button } from "@react-email/components";
import EmailShell, { palette, monoStack } from "@/emails/EmailShell";

export interface QuoteAutoReplyProps {
  name: string;
  phoneDisplay: string;
  phoneHref: string;
}

const STEPS: { title: string; body: string }[] = [
  {
    title: "We review your details",
    body: "A member of the Glasgow team reads every enquiry personally.",
  },
  {
    title: "We come back with honest advice",
    body: "Usually within 24 hours — with a free, fixed quote or, where one is needed first, a survey recommendation.",
  },
  {
    title: "If it sounds urgent, we call you",
    body: "Damaged or disturbed material is always prioritised.",
  },
];

export default function QuoteAutoReplyEmail({
  name,
  phoneDisplay,
  phoneHref,
}: QuoteAutoReplyProps) {
  return (
    <EmailShell preview="We've received your enquiry — here's what happens next">
      <Text
        style={{
          display: "inline-block",
          margin: "0 0 12px",
          borderRadius: 999,
          backgroundColor: palette.greenChip,
          color: palette.greenDark,
          fontSize: 11,
          fontWeight: 700,
          fontFamily: monoStack,
          letterSpacing: 0.8,
          padding: "6px 12px",
          textTransform: "uppercase" as const,
        }}
      >
        Enquiry received
      </Text>
      <Heading as="h1" style={{ margin: 0, fontSize: 22, color: palette.navy }}>
        Thanks, {name} — we&rsquo;ve got your enquiry
      </Heading>

      <Text
        style={{
          margin: "14px 0 0",
          fontSize: 15,
          color: palette.muted,
          lineHeight: 1.65,
        }}
      >
        Thanks for getting in touch with Asbestos Remove. Your enquiry has
        reached our Glasgow team and we&rsquo;ll come back to you with clear,
        honest advice — free of charge and with no obligation.
      </Text>

      <Heading
        as="h2"
        style={{ margin: "26px 0 4px", fontSize: 16, color: palette.navy }}
      >
        What happens next
      </Heading>
      {STEPS.map((step, i) => (
        <Text
          key={step.title}
          style={{
            margin: "10px 0 0",
            fontSize: 14,
            color: palette.muted,
            lineHeight: 1.6,
          }}
        >
          <span
            style={{
              fontFamily: monoStack,
              fontWeight: 700,
              color: palette.blue,
            }}
          >
            {i + 1}.
          </span>{" "}
          <span style={{ fontWeight: 700, color: palette.navy }}>
            {step.title}.
          </span>{" "}
          {step.body}
        </Text>
      ))}

      {/* Safety notice — the one message that must land */}
      <Section
        style={{
          marginTop: 26,
          borderRadius: 10,
          border: "1px solid #FECACA",
          backgroundColor: "#FEF2F2",
          padding: "14px 16px",
        }}
      >
        <Text
          style={{
            margin: 0,
            fontSize: 14,
            color: "#991B1B",
            fontWeight: 700,
          }}
        >
          If you think you&rsquo;ve found asbestos — don&rsquo;t disturb it.
        </Text>
        <Text
          style={{
            margin: "6px 0 0",
            fontSize: 14,
            color: "#991B1B",
            lineHeight: 1.6,
          }}
        >
          Leave the area, avoid touching the material, and don&rsquo;t sand,
          drill, break or sweep it. A photo from a safe distance helps us guide
          you. If in doubt, call us before doing anything.
        </Text>
      </Section>

      <Hr style={{ borderColor: palette.line, margin: "26px 0" }} />

      <Text style={{ margin: "0 0 14px", fontSize: 14, color: palette.muted }}>
        Need us sooner? The line is open 24 hours a day.
      </Text>
      <Button
        href={phoneHref}
        style={{
          backgroundColor: palette.green,
          borderRadius: 999,
          color: "#FFFFFF",
          fontSize: 14,
          fontWeight: 700,
          padding: "12px 24px",
          textDecoration: "none",
        }}
      >
        Call {phoneDisplay}
      </Button>

      <Text
        style={{
          margin: "24px 0 0",
          fontSize: 14,
          color: palette.muted,
          lineHeight: 1.6,
        }}
      >
        Speak soon,
        <br />
        <span style={{ fontWeight: 700, color: palette.navy }}>
          The Asbestos Remove team
        </span>
      </Text>
    </EmailShell>
  );
}
