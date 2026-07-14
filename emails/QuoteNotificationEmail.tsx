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
  Img,
  Button,
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
}: QuoteNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>{`New quote enquiry from ${name} (${postcode})`}</Preview>
      <Body style={{ backgroundColor: "#F8FAFC", fontFamily: "Arial, sans-serif", margin: 0, padding: "24px 0" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: 16, border: `1px solid ${line}`, maxWidth: 600, margin: "0 auto", overflow: "hidden", boxShadow: "0 12px 32px rgba(7,27,71,.12)" }}>
          <Section style={{ backgroundColor: navy, padding: "20px 32px", borderBottom: "4px solid #16A34A" }}>
            <Img src="https://www.asbestosremove.co.uk/images/logo.webp" width="52" height="52" alt="Asbestos Remove" style={{ display: "inline-block", verticalAlign: "middle", borderRadius: 12 }} />
            <Text style={{ display: "inline-block", verticalAlign: "middle", margin: "0 0 0 14px", color: "#ffffff", fontSize: 18, fontWeight: 700 }}>Asbestos Remove</Text>
          </Section>
          <Section style={{ padding: 32 }}>
          <Text style={{ display: "inline-block", margin: "0 0 10px", borderRadius: 999, backgroundColor: "#DCFCE7", color: "#15803D", fontSize: 11, fontWeight: 700, letterSpacing: 0.8, padding: "6px 10px", textTransform: "uppercase" }}>New website lead</Text>
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
          <Hr style={{ borderColor: line, margin: "20px 0" }} />
          <Button href={`mailto:${email}`} style={{ backgroundColor: "#1D4ED8", borderRadius: 999, color: "#ffffff", fontSize: 14, fontWeight: 700, padding: "12px 20px", textDecoration: "none" }}>Reply to {name}</Button>
          <Link href={`tel:${phone.replace(/\s/g, "")}`} style={{ marginLeft: 16, color: "#15803D", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Call {phone}</Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
