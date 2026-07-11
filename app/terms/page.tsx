import PageStub from "@/components/PageStub";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "Website terms and conditions for Asbestos Remove (Asbestos Removal Environmental Ltd), Glasgow.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageStub
      eyebrow="Legal"
      title="Terms & Conditions"
      note="Full terms content lands in a later milestone (pending legal review)."
    />
  );
}
