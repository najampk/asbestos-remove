import PageStub from "@/components/PageStub";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Asbestos Remove (Asbestos Removal Environmental Ltd), Glasgow, handles the personal data you submit through our website and quote form.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <PageStub
      eyebrow="Legal"
      title="Privacy Policy"
      note="Full privacy policy content lands in a later milestone (pending legal review)."
    />
  );
}
