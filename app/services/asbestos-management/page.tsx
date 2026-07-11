import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Asbestos Management Plans Glasgow",
  description:
    "Asbestos management plans, registers and consultancy in Glasgow. Meet your CAR 2012 duty to manage with practical, audit-ready compliance. Free consultation.",
  path: "/services/asbestos-management",
});

const schema = serviceSchema({
  name: "Asbestos Management",
  description:
    "Asbestos management plans, registers and re-inspection surveys that keep Glasgow duty holders compliant with CAR 2012.",
  path: "/services/asbestos-management",
  serviceType: "Asbestos management",
});

const MANAGEMENT_SERVICES = [
  "Asbestos management plans",
  "Asbestos registers (creation & annual review)",
  "Re-inspection surveys",
  "Condition monitoring & encapsulation advice",
  "Staff asbestos awareness guidance",
  "Contractor induction packs",
];

const DUTY_HOLDERS = [
  "Landlords of commercial property",
  "Employers occupying premises",
  "Managing agents",
  "Housing associations (common areas)",
  "Schools & healthcare estates",
];

const FAQS: FAQ[] = [
  {
    question: "What is an asbestos register?",
    answer:
      "A living record of the asbestos-containing materials in your building — where they are, what type and condition they're in, and how they're being managed. It's the backbone of your duty to manage and the first thing an auditor or contractor will ask for.",
  },
  {
    question: "How often must the register be reviewed?",
    answer:
      "At least annually, and whenever the building changes or a material is disturbed. We carry out re-inspections and keep your register and management plan current so compliance never lapses.",
  },
  {
    question: "Does the duty to manage apply to flats?",
    answer:
      "It applies to the common parts of residential blocks — closes, stairwells, plant rooms and shared services — even though individual flats are domestic. Factors and housing associations are typically the duty holders for those common areas.",
  },
  {
    question: "What are the penalties for non-compliance?",
    answer:
      "Breaching CAR 2012 can lead to enforcement notices, fines and, in serious cases, prosecution. Beyond the legal risk, an unmanaged ACM that's disturbed puts people in harm's way — which is exactly what a management plan prevents.",
  },
];

export default function AsbestosManagementPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Services"
        title="Asbestos Management & Compliance in Glasgow"
        intro="If you own, manage or are responsible for a non-domestic building, Regulation 4 of the Control of Asbestos Regulations 2012 makes you a duty holder — legally required to identify, record and manage asbestos in your premises. We build and maintain that compliance for you."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Asbestos Management", href: "/services/asbestos-management" },
        ]}
      />

      {/* Management services */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="What We Provide" title="Management Services" />
          <div className="mt-10 rounded-2xl border border-line bg-white p-8 shadow-card">
            <FeatureList items={MANAGEMENT_SERVICES} columns={2} />
          </div>
        </Container>
      </section>

      {/* Who is a duty holder */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Responsibility"
              title="Who Is a Duty Holder?"
              as="h2"
            />
            <p className="mt-6 text-slate-600">
              If you have responsibility for a non-domestic building — through
              ownership, occupation or a tenancy agreement — the duty to manage
              likely falls to you. That includes:
            </p>
            <div className="mt-6">
              <FeatureList items={DUTY_HOLDERS} />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="In Practice"
              title="What Compliance Looks Like"
              as="h2"
            />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Compliance is a cycle, not a one-off: survey the building, record
              findings in a register, put a management plan in place, communicate
              it to anyone who might disturb ACMs, re-inspect annually, and keep
              records audit-ready. We run that cycle with you so nothing slips.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Asbestos management FAQs"
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      {/* Cross-links */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <RelatedLinks
            title="Related pages"
            links={[
              {
                label: "Asbestos Surveys",
                href: "/services/asbestos-surveys",
                description:
                  "A management survey is where every compliant register begins.",
              },
              {
                label: "Commercial Sector",
                href: "/sectors/commercial",
                description:
                  "Duty-holder support for offices, retail, schools and healthcare.",
              },
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description:
                  "When management identifies material for removal, we handle it.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
