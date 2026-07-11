// emails/QuoteNotificationEmail.tsx
// Internal notification sent to info@ when a quote enquiry arrives (reply-to is the
// customer, so a reply goes straight back to them).
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

export interface QuoteNotificationProps {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  propertyType: string;
  service: string;
  message: string;
  materialLabel?: string;
  photoCount: number;
}

const navy = "#071B47";
const muted = "#475569";
const line = "#E2E8F0";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <Section style={{ marginBottom: 12 }}>
      <Text
        style={{
          margin: 0,
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: 0.5,
          color: muted,
        }}
      >
        {label}
      </Text>
      <Text style={{ margin: "2px 0 0", fontSize: 15, color: navy, fontWeight: 600 }}>
        {value || "—"}
      </Text>
    </Section>
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
  photoCount,
}: QuoteNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>{`New quote enquiry from ${name} (${postcode})`}</Preview>
      <Body style={{ backgroundColor: "#F8FAFC", fontFamily: "Arial, sans-serif", margin: 0, padding: "24px 0" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: 12, border: `1px solid ${line}`, maxWidth: 560, margin: "0 auto", padding: 32 }}>
          <Heading style={{ margin: 0, fontSize: 20, color: navy }}>
            New quote enquiry
          </Heading>
          <Text style={{ margin: "6px 0 0", fontSize: 14, color: muted }}>
            Submitted via asbestosremove.co.uk
          </Text>

          {materialLabel && (
            <Section style={{ marginTop: 16, borderRadius: 8, backgroundColor: "#EFF6FF", padding: "10px 14px" }}>
              <Text style={{ margin: 0, fontSize: 13, color: "#1D4ED8", fontWeight: 600 }}>
                Via property explorer: {materialLabel}
              </Text>
            </Section>
          )}

          <Hr style={{ borderColor: line, margin: "20px 0" }} />

          <Field label="Name" value={name} />
          <Field label="Phone" value={phone} />
          <Field label="Email" value={email} />
          <Field label="Postcode" value={postcode} />
          <Field label="Property type" value={propertyType} />
          <Field label="Service needed" value={service} />
          <Field label="Message" value={message} />
          <Field
            label="Photos attached"
            value={photoCount > 0 ? `${photoCount} attached` : "None"}
          />

          <Hr style={{ borderColor: line, margin: "20px 0" }} />
          <Text style={{ margin: 0, fontSize: 13, color: muted }}>
            Reply to this email to respond directly to{" "}
            <Link href={`mailto:${email}`} style={{ color: "#1D4ED8" }}>
              {name}
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
