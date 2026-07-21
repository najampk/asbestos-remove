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
    "Asbestos management plans and registers in Glasgow. What CAR 2012 Regulation 4 requires in Scotland, and the audit-ready compliance cycle we run for you.",
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
    question: "Is there a separate asbestos law in Scotland?",
    answer:
      "No. The Control of Asbestos Regulations 2012 apply across Great Britain, so the duty to manage under Regulation 4 reads identically in Glasgow and in Birmingham. Two things are genuinely Scottish: asbestos waste is 'special waste' regulated by SEPA rather than 'hazardous waste' under the English regime, so the consignment paperwork differs, and enforcement is split between HSE and your local council's environmental health team depending on the type of premises.",
  },
  {
    question: "What must an asbestos management plan contain?",
    answer:
      "Enough to show you've done what Regulation 4 asks and to be usable by someone standing in the building. In practice that means: who the duty holder is and who runs it day to day; the asbestos register with locations marked on plans; the type, condition and priority assessment of each material; what's being managed in place versus removed, and by when; the re-inspection date; and the two procedures that get used in anger — how contractors are given the information before starting work, and what happens if a material is damaged. Length is not the measure. Findability is.",
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

      {/* The plan itself */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Document"
            title="What an asbestos management plan must contain under CAR 2012"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Start with the point that catches people out: there is no separate
              Scottish asbestos law. The Control of Asbestos Regulations 2012
              apply across Great Britain, so a duty holder in Glasgow works to
              exactly the same Regulation 4 as one in Manchester. What differs
              north of the border is the waste side — asbestos is{" "}
              <em>special waste</em> here, regulated by SEPA, not
              &ldquo;hazardous waste&rdquo; under the English system — and the
              enforcement route, which is HSE for most workplaces and your local
              council&rsquo;s environmental health team for offices, shops,
              warehouses and leisure premises.
            </p>
            <p>
              Regulation 4 doesn&rsquo;t ask for a tidy folder, it asks for a
              sequence, and the plan is what records it. You take reasonable
              steps to find out whether asbestos is present and in what
              condition — or presume it is, if you can&rsquo;t establish
              otherwise. You record what you find. You assess the risk of anyone
              disturbing it. You write down how that risk will be managed, put
              those measures into effect, and review the whole thing regularly
              and whenever something changes. Then, crucially, you make the
              information available to every person liable to disturb the
              material.
            </p>
            <p>
              In practice the document that satisfies all of that is short and
              usable rather than long and impressive. It names the duty holder
              and whoever handles the day-to-day, carries the asbestos register
              and the plans showing each location, states the condition and
              priority assessment for every material, sets out what is being
              managed in place versus removed and on what timescale, records the
              re-inspection date, and explains the two procedures that actually
              get used: how contractors are told before they start work, and
              what everyone does if a material is damaged. A plan nobody can
              find at eight on a Monday morning is not a plan.
            </p>
            <p>
              The most common failure we see isn&rsquo;t a missing plan — it&rsquo;s
              a good plan sitting in a drawer while a contractor drills into a
              ceiling nobody warned them about. Getting the register in front of
              trades before they lift a tool is the single cheapest piece of
              compliance available to any duty holder, and it prevents the exact
              incident that turns a managed building into an emergency call-out.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
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
      <section className="py-16 sm:py-20">
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
