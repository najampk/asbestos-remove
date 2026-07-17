// emails/QuoteNotificationEmail.tsx
// Internal notification sent to the quotes inbox when an enquiry arrives
// (reply-to is the customer, so a reply goes straight back to them).
// Rendered inside the shared branded EmailShell (logo header + compliance footer).
import {
  Section,
  Row,
  Column,
  Heading,
  Text,
  Hr,
  Link,
  Button,
} from "@react-email/components";
import EmailShell, { palette, monoStack } from "@/emails/EmailShell";

export interface QuoteNotificationProps {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  propertyType: string;
  service: string;
  message: string;
  materialLabel?: string;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <Row style={{ marginBottom: 10 }}>
      <Column
        style={{
          width: 140,
          verticalAlign: "top",
        }}
      >
        <Text
          style={{
            margin: 0,
            fontSize: 11,
            fontFamily: monoStack,
            textTransform: "uppercase" as const,
            letterSpacing: 0.8,
            color: palette.muted,
            lineHeight: "20px",
          }}
        >
          {label}
        </Text>
      </Column>
      <Column style={{ verticalAlign: "top" }}>
        <Text
          style={{
            margin: 0,
            fontSize: 14,
            color: palette.navy,
            fontWeight: 600,
            lineHeight: "20px",
          }}
        >
          {value || "—"}
        </Text>
      </Column>
    </Row>
  );
}

export default function QuoteNotificationEmail({
  name,
  phone,
  email,
  postcode,
  propertyType,
  service,
  message,
  materialLabel,
}: QuoteNotificationProps) {
  return (
    <EmailShell preview={`New quote enquiry from ${name} (${postcode})`}>
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
        New website lead
      </Text>
      <Heading as="h1" style={{ margin: 0, fontSize: 22, color: palette.navy }}>
        New quote enquiry
      </Heading>
      <Text style={{ margin: "6px 0 0", fontSize: 13, color: palette.muted }}>
        Submitted via the asbestosremove.co.uk quote form
      </Text>

      {materialLabel && (
        <Section
          style={{
            marginTop: 16,
            borderRadius: 8,
            backgroundColor: "#EFF6FF",
            border: "1px solid #BFDBFE",
            padding: "10px 14px",
          }}
        >
          <Text
            style={{
              margin: 0,
              fontSize: 13,
              color: palette.blue,
              fontWeight: 600,
            }}
          >
            Via property explorer: {materialLabel}
          </Text>
        </Section>
      )}

      <Hr style={{ borderColor: palette.line, margin: "20px 0" }} />

      <Field label="Name" value={name} />
      <Field label="Phone" value={phone} />
      <Field label="Email" value={email} />
      <Field label="Postcode" value={postcode} />
      <Field label="Property type" value={propertyType} />
      <Field label="Service needed" value={service} />

      <Text
        style={{
          margin: "14px 0 0",
          fontSize: 11,
          fontFamily: monoStack,
          textTransform: "uppercase" as const,
          letterSpacing: 0.8,
          color: palette.muted,
        }}
      >
        Message
      </Text>
      <Section
        style={{
          marginTop: 6,
          borderRadius: 8,
          backgroundColor: palette.surface,
          border: `1px solid ${palette.line}`,
          padding: "12px 14px",
        }}
      >
        <Text
          style={{
            margin: 0,
            fontSize: 14,
            color: palette.ink,
            lineHeight: 1.6,
            whiteSpace: "pre-wrap" as const,
          }}
        >
          {message || "—"}
        </Text>
      </Section>

      <Hr style={{ borderColor: palette.line, margin: "22px 0" }} />

      <Button
        href={`mailto:${email}`}
        style={{
          backgroundColor: palette.blue,
          borderRadius: 999,
          color: "#FFFFFF",
          fontSize: 14,
          fontWeight: 700,
          padding: "12px 22px",
          textDecoration: "none",
        }}
      >
        Reply to {name}
      </Button>
      <Link
        href={`tel:${phone.replace(/\s/g, "")}`}
        style={{
          marginLeft: 16,
          color: palette.greenDark,
          fontSize: 14,
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Call {phone}
      </Link>
    </EmailShell>
  );
}
