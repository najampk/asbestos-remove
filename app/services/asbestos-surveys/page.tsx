import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { LICENSABLE_REFERRAL } from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Asbestos Surveys & Testing Glasgow",
  description:
    "HSG264-compliant asbestos surveys in Glasgow. Management surveys, refurbishment & demolition surveys, sampling and testing with clear reports. Book today.",
  path: "/services/asbestos-surveys",
});

const schema = serviceSchema({
  name: "Asbestos Surveys & Testing",
  description:
    "Management and refurbishment/demolition asbestos surveys with sampling and UKAS-accredited analysis across Glasgow.",
  path: "/services/asbestos-surveys",
  serviceType: "Asbestos survey",
});

const SURVEY_TYPES = [
  {
    name: "Management Survey",
    body: "For buildings in normal use. Locates ACMs that could be disturbed during occupation and maintenance, assesses condition, and forms the basis of your asbestos register. Required to meet the duty to manage under CAR 2012 Regulation 4.",
  },
  {
    name: "Refurbishment & Demolition Survey",
    body: "Fully intrusive survey required before any refurbishment or demolition work. Locates all ACMs within the works area, including those hidden in the building fabric.",
  },
  {
    name: "Sampling & Testing",
    body: "Targeted sampling of individual suspect materials — a ceiling, a floor tile, a garage roof — with UKAS-accredited laboratory analysis and fast turnaround.",
  },
];

const WHAT_YOU_RECEIVE = [
  "Photographic register of every ACM",
  "Material and priority risk assessments",
  "Clear site plans and locations",
  "Laboratory certificates",
  "Practical recommendations (manage, encapsulate or remove)",
];

const FAQS: FAQ[] = [
  {
    question: "How long does a survey take?",
    answer:
      "Most domestic management surveys take a few hours; larger commercial or refurbishment/demolition surveys are scheduled to the size and complexity of the building. Laboratory analysis follows, with fast turnaround on results.",
  },
  {
    question: "Do I need a survey before selling my house?",
    answer:
      "It isn't always a legal requirement for a private sale, but a survey gives buyers and solicitors certainty and avoids renovation surprises. For any building work before 2000, testing first is the safest and often cheapest route.",
  },
  {
    question: "What happens if asbestos is found?",
    answer: `Your report sets out the material type, condition and a clear recommendation — manage, encapsulate or remove. ${LICENSABLE_REFERRAL}`,
  },
  {
    question: "Where can I get asbestos testing near me?",
    answer:
      "If you're searching from Glasgow or the surrounding areas — Paisley, Hamilton, Motherwell, East Kilbride, Clydebank, Cumbernauld, Livingston, Edinburgh or further afield — we're your local option: targeted sampling collected at your property and analysed by a UKAS-accredited laboratory, with fast turnaround on results.",
  },
  {
    question: "How much does an asbestos survey cost in Glasgow?",
    answer:
      "Cost depends on the survey type, property size and number of samples. We give a fixed, no-obligation quote up front after a short conversation about your property.",
  },
];

export default function AsbestosSurveysPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Services"
        title="Asbestos Surveys & Testing in Glasgow"
        intro="An asbestos survey identifies the location, type and condition of asbestos-containing materials in your property. If your building was built before 2000, a survey is the first — and legally safest — step before any refurbishment, demolition or property purchase."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Asbestos Surveys", href: "/services/asbestos-surveys" },
        ]}
      />

      {/* Survey types */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Survey Types" title="Survey Types We Provide" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {SURVEY_TYPES.map((type) => (
              <div
                key={type.name}
                className="rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <h3 className="font-display text-lg font-bold text-brand-950">
                  {type.name}
                </h3>
                <p className="mt-3 text-slate-600">{type.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What you receive */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Your Report" title="What You Receive" />
          <div className="mt-10 rounded-2xl border border-line bg-surface p-8">
            <FeatureList items={WHAT_YOU_RECEIVE} columns={2} />
          </div>
        </Container>
      </section>

      {/* Legal requirement prose */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="The Law"
            title="When Is a Survey Legally Required?"
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              If you own, occupy or manage a non-domestic building, the duty to
              manage under CAR 2012 Regulation 4 means asbestos must be
              identified and recorded — including in common areas of residential
              blocks. A management survey is how that duty is met.
            </p>
            <p>
              Before any refurbishment or demolition, a refurbishment &amp;
              demolition survey is required under CDM 2015 so that work can be
              planned safely and contractors are not exposed to hidden ACMs.
            </p>
            <p>
              Landlords have obligations for common parts, and buyers
              increasingly commission pre-purchase sampling to understand a
              property before committing. In every case, testing first avoids
              costly delays later.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Asbestos survey FAQs"
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
            title="Where to next?"
            links={[
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description:
                  "Confirmed asbestos? See our controlled, non-licensed removal process.",
              },
              {
                label: "Asbestos Management",
                href: "/services/asbestos-management",
                description:
                  "Keeping material in place? Stay compliant with a management plan.",
              },
              {
                label: "How to Identify Asbestos",
                href: "/guides/how-to-identify-asbestos",
                description:
                  "Read the clues by property age and material before booking anything.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
