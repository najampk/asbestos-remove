import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import {
  LICENSABLE_REFERRAL,
  SURVEY_FAQ_ARTEX_ANSWER,
  SAME_DAY_SURVEY_COMMITMENT,
} from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Asbestos Survey Glasgow | HSG264 Surveyors",
  description:
    "Asbestos surveys in Glasgow to HSG264 — management, refurbishment and demolition surveys with UKAS-accredited analysis. Same-day attendance available. Book today.",
  path: "/services/asbestos-surveys",
});

const schema = serviceSchema({
  name: "Asbestos Survey",
  description:
    "Management and refurbishment/demolition asbestos surveys to HSG264, with sampling and UKAS-accredited analysis, carried out by asbestos surveyors across Glasgow.",
  path: "/services/asbestos-surveys",
  serviceType: "Asbestos survey",
});

const SURVEY_TYPES: {
  name: string;
  body: string;
  href?: string;
  linkLabel?: string;
}[] = [
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
    body: "Targeted sampling of individual suspect materials — a ceiling, a floor tile, a garage roof — with UKAS-accredited laboratory analysis and fast turnaround. For a single material this is usually all you need instead of a survey.",
    href: "/services/asbestos-testing",
    linkLabel: "See asbestos testing",
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
    question: "Do I need a survey before removing Artex?",
    answer: SURVEY_FAQ_ARTEX_ANSWER,
  },
  {
    question: "What happens if asbestos is found?",
    answer: `Your report sets out the material type, condition and a clear recommendation — manage, encapsulate or remove. ${LICENSABLE_REFERRAL}`,
  },
  {
    question: "How do I choose an asbestos surveyor in Glasgow?",
    answer:
      "Ask three questions before you commission anyone. Who is actually attending and what asbestos training do they hold for this type of survey? Which laboratory analyses the samples, and is it UKAS accredited? Does the quoted fee include the analysis, or does that appear on a second invoice? 'Asbestos surveyor' is not a protected title, so those answers — not the wording on the van — are what tell you whether the report will stand up to a solicitor, an insurer or an enforcing authority.",
  },
  {
    question: "What's the difference between an asbestos survey and a test?",
    answer:
      "A test analyses one sample of one material and tells you whether it contains asbestos. A survey inspects the building, records every asbestos-containing material with its location and condition, assesses the risk and gives you a report you can act on and hand to contractors. One suspect ceiling means a test; a pre-2000 property going back to brick, a purchase, or a duty to manage a non-domestic building means a survey.",
  },
  {
    question: "Can I get a same-day asbestos survey in Glasgow?",
    answer:
      "Yes. We offer same-day surveys and sampling across Glasgow — call early enough in the day and we'll get someone out before it ends. Same-day refers to attendance and sample collection; laboratory analysis takes a few days after that, because the certainty comes from a UKAS-accredited lab rather than an opinion on site. If a contractor has stopped work over something they've uncovered, say so when you ring and it goes to the front of the queue.",
  },
  {
    question: "Do I need an asbestos survey before renovating my Glasgow home?",
    answer:
      "If the property is pre-2000 and the work breaks into the fabric — kitchens and bathrooms out, walls through, ceilings down, a loft conversion, re-roofing — then yes, a refurbishment and demolition survey before anyone starts. It isn't box-ticking: builders must stop the moment suspect material appears, so a mid-project discovery costs you the survey anyway plus standing time and rescheduled trades. For a single suspect material, one sample may be all you need instead.",
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
        title="Asbestos Surveys in Glasgow"
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
                {type.href && (
                  <Link
                    href={type.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-950"
                  >
                    {type.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
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

      {/* Before renovation */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Before The Builders"
            title="Asbestos surveys before renovation in Glasgow"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Renovation is where asbestos stops being theoretical. A property
              can sit for forty years with a textured ceiling and a cement flue
              doing nobody any harm, and then someone knocks a wall through and
              it becomes everyone&rsquo;s problem in an afternoon. If your
              building predates 2000 and the work is going to break into the
              fabric, a refurbishment and demolition survey is the step that
              comes first — before the skip is booked, not after the first
              ceiling comes down.
            </p>
            <p>
              The Glasgow jobs that most often turn something up are the
              predictable ones: tenement kitchen and bathroom refits, where the
              old vinyl tiles and the bitumen under them appear as soon as the
              units come out; loft conversions, where cement tanks, flues and
              soffits live; knocking through between rooms in a 60s or 70s
              property; re-roofing anything with a cement outbuilding attached;
              and stripping ceilings that were skimmed in textured coating some
              time after the war. None of it is exotic. All of it is cheaper to
              find in a survey than in a stopped job.
            </p>
            <p>
              Which is the real argument, frankly. Any competent builder will
              down tools the moment suspect material appears — they&rsquo;re
              legally obliged to and their own insurance depends on it. That
              means a discovery mid-project costs you the survey anyway, plus
              the standing time, plus the rescheduled trades, plus whatever the
              removal turns out to be, with everybody stood in your hallway
              waiting. Surveying first converts an unknown into a line on the
              budget. For work needing a building warrant from the council,
              having it done up front keeps the programme honest too.
            </p>
            <p>
              {SAME_DAY_SURVEY_COMMITMENT}
            </p>
          </div>
        </Container>
      </section>

      {/* Surveyors */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Who Attends"
            title="Your asbestos surveyors in Glasgow"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              &ldquo;Asbestos surveyor&rdquo; is not a protected title, which is
              worth knowing before you hire one. Anybody can print it on a van.
              What separates a survey you can rely on from a piece of paper is
              the work behind it: whether the surveyor holds asbestos training
              appropriate to the survey type, whether the inspection actually
              follows HSG264 rather than a walk round with a clipboard, and
              whether the samples go to a UKAS-accredited laboratory instead of
              being judged by eye on site.
            </p>
            <p>
              Our surveys are carried out by our own trained people, not
              subcontracted to whoever is free that week, and the samples go to
              an accredited lab every time. The founder has more than thirty
              years in the industry behind the assessment side of it, and the
              team includes a certified plumber and joiner — both asbestos
              trained — which matters more than it sounds when a surveyor needs
              to work out what is behind a bath panel, inside a boiler cupboard
              or under a floor without wrecking the place to find out.
            </p>
            <p>
              The other half of a good surveyor is what they tell you
              afterwards. A report that lists materials and stops is only half
              the job. Ours says what the material is, what condition it is in,
              whether it needs to move at all, and what the realistic options
              are — including the frequent answer that sound bonded material is
              safest left where it is and managed. We would rather write that
              than sell you a removal you do not need, and if a survey turns up
              licensable material we say so and help you arrange the right
              contractor.
            </p>
            <p>
              Before you commission anyone, in Glasgow or elsewhere, ask three
              questions: who is attending and what training do they hold, which
              laboratory analyses the samples and is it UKAS accredited, and
              does the fee include the analysis or is that added later. Any
              honest firm answers all three without being chased.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/trust-centre" variant="outline">
              Check our credentials
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
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
                label: "Asbestos Testing",
                href: "/services/asbestos-testing",
                description:
                  "One suspect material? A single sample is cheaper than a survey.",
              },
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description:
                  "Confirmed asbestos? See our controlled, non-licensed removal process.",
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
