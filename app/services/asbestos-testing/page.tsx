import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { BUSINESS } from "@/lib/constants";
import { SAME_DAY_SURVEY_COMMITMENT } from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Asbestos Testing Glasgow | Samples From £25",
  description:
    "Asbestos testing in Glasgow — a sample collected safely at your property and analysed by a UKAS-accredited laboratory. Same-day attendance available. From £25.",
  path: "/services/asbestos-testing",
});

const schema = serviceSchema({
  name: "Asbestos Testing & Sampling",
  description:
    "Collection of suspect material samples at properties across Glasgow, with analysis by a UKAS-accredited laboratory and a written result.",
  path: "/services/asbestos-testing",
  serviceType: "Asbestos testing",
});

const STEPS: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Tell us what you're looking at",
    body: "A phone call, a couple of photographs and the age of the property. That is usually enough for us to say whether a test is the sensible route or whether you need something else entirely — and the call costs nothing either way.",
  },
  {
    step: "02",
    title: "We collect the sample",
    body: "A trained operative attends, dampens the material, takes a small representative piece with hand tools, seals the sampling point and bags the sample. It takes minutes and leaves a mark you would struggle to find afterwards.",
  },
  {
    step: "03",
    title: "A UKAS-accredited lab analyses it",
    body: "The sample goes to an accredited laboratory for analysis under polarised light microscopy — the recognised method for identifying asbestos type. Accreditation is the point: it is what makes the result stand up to a solicitor, an insurer or an enforcing authority.",
  },
  {
    step: "04",
    title: "You get a written result",
    body: "Not a phone call and a shrug. A certificate stating whether asbestos is present and which type, plus a plain-English explanation of what that means for what you were planning to do — including when the answer is that you need do nothing at all.",
  },
];

const COMMONLY_TESTED = [
  "Textured ceiling and wall coatings (Artex)",
  "Corrugated garage, shed and outbuilding roofing",
  "Vinyl floor tiles and the black adhesive beneath them",
  "Cement flues, soffits, gutters and downpipes",
  "Cold water tanks in lofts",
  "Bath panels, airing-cupboard panels and heater boards",
  "Rope seals and gaskets around old boilers",
  "Debris left behind after a contractor has already cut into something",
];

const FAQS: FAQ[] = [
  {
    question: "How much does asbestos testing cost in Glasgow?",
    answer:
      "A single lab-analysed sample typically costs £25–£60, and for one suspect material — a ceiling, a floor tile, a garage roof — that is often all you need before deciding anything. Additional samples taken on the same visit cost less each, because the attendance is already paid for. A full management survey of a three-bed house is a different product at £200–£400, and it earns its keep when you are buying, renovating or dealing with several materials at once.",
  },
  {
    question: "How long do asbestos test results take?",
    answer:
      "Standard turnaround is a few working days from the lab receiving the sample, and urgent analysis can be arranged where a job is stopped and trades are standing about. Be wary of anyone promising an instant result on site: identifying asbestos needs a microscope and an accredited laboratory, not an opinion on a driveway.",
  },
  {
    question: "Can I take an asbestos sample myself?",
    answer:
      "You can post a sample to a lab yourself, and for a homeowner testing one material in their own house it is not illegal. Our honest view is that the taking is the risky part, not the posting — breaking a piece off dry, with no suppression and no idea how friable the material is, disturbs exactly what you were trying to avoid. If you are set on it, damp the material first, use hand tools rather than anything powered, take a small piece from a damaged edge, seal it in a double bag and seal the spot you took it from. For textured coatings, insulating board or anything already broken, do not.",
  },
  {
    question: "Do DIY asbestos test kits work?",
    answer:
      "The lab half is usually fine — most kits are a bag, a form and a prepaid envelope to a real laboratory. What the kit cannot do is take the sample for you, and that is the step with the actual risk in it. The other weakness is coverage: a kit tests the one piece you send, so if you sample the wrong layer, the wrong ceiling or miss the adhesive under the tiles, you get a clean certificate for a property that still has asbestos in it.",
  },
  {
    question: "Do I need a test or a full survey?",
    answer:
      "One suspect material and no building work planned means a test. Several materials, a pre-2000 property going back to brick, a purchase, or a duty to manage a non-domestic building means a survey. The test answers what this is; the survey answers what is in the building and what to do about it. If you are unsure which you need, describe the job on the phone and we will tell you — including when the cheaper option is the right one.",
  },
  {
    question: "Can you test asbestos in Glasgow the same day?",
    answer: SAME_DAY_SURVEY_COMMITMENT,
  },
  {
    question: "Where can I get asbestos testing near me?",
    answer:
      "We collect samples across Glasgow and the surrounding areas — Paisley, Hamilton, Motherwell, East Kilbride, Clydebank, Cumbernauld and the wider city region — with projects taken on Scotland-wide. There is no travel premium inside the normal working patch. Tell us the postcode and the material and we will confirm coverage before anyone arranges a visit.",
  },
  {
    question: "What happens if the test comes back positive?",
    answer:
      "Nothing dramatic, and usually nothing urgent. Most positive results are bonded materials in good condition, which are safest left alone and managed rather than ripped out — a fact that costs us work to say and is true anyway. Where the material is damaged, or your plans mean disturbing it, the result tells us which category the removal falls into and we quote from there. If it identifies licensable material, we say so straight away and help you arrange the right contractor.",
  },
];

export default function AsbestosTestingPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Services"
        title="Asbestos Testing in Glasgow"
        intro="Asbestos testing means taking a small sample of a suspect material and having a UKAS-accredited laboratory analyse it. It is the only way to know for certain — no visual check, app or experienced eye can confirm asbestos. Samples from £25, collected at your property, often the same day."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Asbestos Testing", href: "/services/asbestos-testing" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/contact#quote-form">
            Arrange a test
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <a
            href={BUSINESS.phoneHref}
            className="font-mono text-sm text-white/80 transition-colors hover:text-white"
          >
            Or call {BUSINESS.phoneDisplay} — 24/7
          </a>
        </div>
      </PageHero>

      {/* Why testing is the only answer */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Honest Version"
            title="Nobody can identify asbestos by looking at it"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              This is the part most people are surprised by, and it is worth
              saying plainly: asbestos fibres are microscopic. A tradesman with
              thirty years behind him can tell you a ceiling looks like 1970s
              textured coating and that a fair proportion of those contained
              chrysotile. What he cannot tell you is whether yours does.
              Asbestos and asbestos-free Artex are indistinguishable by eye.
              So are asbestos cement and the fibre-cement sheeting that replaced
              it. So are half the floor tiles in Glasgow.
            </p>
            <p>
              Which makes a test the cheapest decision on the whole job. Until
              the result is in, nobody can plan the work, price it honestly or
              tell you whether it needs doing at all — and plenty of the samples
              we send off come back negative, at which point you have spent
              thirty pounds to stop worrying and your builder carries on.
              When it comes back positive, you know which material you have,
              which category of work it falls into and roughly what removal
              should cost, before anybody quotes you.
            </p>
            <p>
              The order that never works is the reverse one: sanding, scraping,
              drilling or jet-washing first and testing afterwards. By then the
              question has changed from what is it to what has just gone into
              the air, and that is a considerably more expensive conversation.
            </p>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="From phone call to certificate"
            intro="Four steps, and the first one is free."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="font-mono text-xs font-semibold tracking-wider text-eco-700">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-950">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Test or survey */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Which Do You Need?"
            title="A test, or a full survey?"
            intro="They solve different problems, and the wrong one costs you either money or certainty. Here is the honest split."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-eco-700">
                A test is enough when
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-brand-950">
                One material, one question
              </h3>
              <div className="mt-5">
                <FeatureList
                  items={[
                    "You have a single suspect material in your own home",
                    "A garage or shed roof you want removed or replaced",
                    "One textured ceiling coming down",
                    "Floor tiles found under a carpet during a refit",
                    "A contractor has cut into something and stopped work",
                    "You just want to know before you worry any further",
                  ]}
                  columns={1}
                />
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-700">
                You need a survey when
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-brand-950">
                A whole building, or a legal duty
              </h3>
              <div className="mt-5">
                <FeatureList
                  items={[
                    "Refurbishment or demolition will break into the fabric",
                    "You are buying, selling or letting a pre-2000 property",
                    "You manage a non-domestic building or common areas",
                    "Several suspect materials are in play at once",
                    "You need an asbestos register under CAR 2012 Regulation 4",
                    "Contractors need to know what is in the building before they start",
                  ]}
                  columns={1}
                />
              </div>
              <Link
                href="/services/asbestos-surveys"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-950"
              >
                See asbestos surveys
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* What we sample */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="Scope"
                title="What we commonly test"
              />
              <p className="mt-6 leading-relaxed text-slate-600">
                Anything in a building put up or refurbished before 2000 is fair
                game, but the same handful of materials account for most of what
                we sample across Glasgow.
              </p>
              <div className="mt-8">
                <FeatureList items={COMMONLY_TESTED} columns={1} />
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-7 shadow-card">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-950">
                    If it is already damaged, stop
                  </h3>
                  <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
                    <p>
                      Testing is for material that is intact and undisturbed.
                      Where a ceiling has come down, a sheet has cracked, or a
                      contractor has already put a saw through something, the
                      priority is not the certificate — it is keeping people out
                      of the area and not spreading it further.
                    </p>
                    <p>
                      Do not sweep it, do not hoover it, do not hose it down.
                      Close the door, keep everyone out and ring{" "}
                      <a
                        href={BUSINESS.phoneHref}
                        className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
                      >
                        {BUSINESS.phoneDisplay}
                      </a>
                      . The line is answered around the clock and the advice
                      costs nothing.
                    </p>
                  </div>
                  <Link
                    href="/services/emergency-asbestos-removal"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-950"
                  >
                    24-hour emergency response
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Asbestos testing FAQs"
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
            title="Where to next?"
            links={[
              {
                label: "How to Identify Asbestos",
                href: "/guides/how-to-identify-asbestos",
                description:
                  "Narrow it down by property age and material before you sample anything.",
              },
              {
                label: "Asbestos Surveys",
                href: "/services/asbestos-surveys",
                description:
                  "Whole-building identification, registers and HSG264 reports.",
              },
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description:
                  "Result came back positive? See how controlled removal works.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
