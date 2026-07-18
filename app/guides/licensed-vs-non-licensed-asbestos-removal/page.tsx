import { Check, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import {
  LICENSING_GUIDE_INTRO,
  LICENSING_GUIDE_WHEN_IT_MATTERS,
  LICENSING_FAQ_ANSWER,
  LICENSING_FAQ_GARAGE_ROOF_ANSWER,
  LICENSING_FAQ_WRONG_TIER_ANSWER,
  LICENSING_FAQ_CHECK_REGISTER_ANSWER,
  THREE_TIER_EXPLAINER,
  SCOPE_STATEMENT,
  LICENSABLE_REFERRAL,
} from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Licensed vs Non-Licensed Asbestos Work",
  description:
    "Licensed, notifiable and non-licensed asbestos work explained in plain English — which category your material falls into, and how to check any contractor.",
  path: "/guides/licensed-vs-non-licensed-asbestos-removal",
});

const schema = articleSchema({
  headline: "Licensed vs Non-Licensed Asbestos Removal, Explained",
  description:
    "The three legal categories of asbestos work under the Control of Asbestos Regulations 2012 — what each covers, when a licence is required by law, and how to vet a contractor.",
  path: "/guides/licensed-vs-non-licensed-asbestos-removal",
  datePublished: "2026-07-18",
});

const FAQS: FAQ[] = [
  {
    question: "Do I need a licensed contractor to remove a garage roof?",
    answer: LICENSING_FAQ_GARAGE_ROOF_ANSWER,
  },
  {
    question: "How do I check whether a company holds an asbestos licence?",
    answer: LICENSING_FAQ_CHECK_REGISTER_ANSWER,
  },
  {
    question: "What happens if the wrong firm does licensable work?",
    answer: LICENSING_FAQ_WRONG_TIER_ANSWER,
  },
  {
    question: "Are you HSE licensed?",
    answer: LICENSING_FAQ_ANSWER,
  },
];

export default function LicensedVsNonLicensedPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Guides & Advice"
        title="Licensed vs Non-Licensed Asbestos Removal, Explained"
        intro={LICENSING_GUIDE_INTRO}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          {
            label: "Licensed vs Non-Licensed Work",
            href: "/guides/licensed-vs-non-licensed-asbestos-removal",
          },
        ]}
      >
        <p className="font-mono text-xs uppercase tracking-wider text-white/60">
          Last updated July 2026 · Control of Asbestos Regulations 2012
        </p>
      </PageHero>

      {/* The three tiers */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The Legal Framework"
            title="Three categories, three sets of rules"
            intro="The law doesn't grade asbestos work by how big the job is — it grades it by how easily the material releases fibres when disturbed. That single idea drives everything below."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {THREE_TIER_EXPLAINER.map((tier) => (
              <div
                key={tier.tier}
                className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <h3 className="font-display text-lg font-bold text-brand-950">
                  {tier.tier}
                </h3>
                <p className="mt-3 flex-1 text-slate-600">{tier.body}</p>
                <div
                  className={`mt-5 flex items-start gap-2 rounded-lg p-3 text-sm ${
                    tier.weDo
                      ? "bg-eco-500/10 text-eco-700"
                      : "bg-brand-950/5 text-brand-950"
                  }`}
                >
                  {tier.weDo ? (
                    <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <ArrowUpRight
                      className="mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-medium">{tier.note}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What the licence is */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Behind the Word"
            title="What an asbestos licence actually is"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              The licence is granted by the Health and Safety Executive under
              the Control of Asbestos Regulations 2012, and it exists for one
              reason: some materials — sprayed coatings, thermal lagging, most
              insulating board — shed dangerous quantities of fibre at the
              lightest touch. Working on them safely needs full enclosures
              under negative pressure, decontamination units, medical
              surveillance for every operative, a 14-day notification to HSE
              before work starts and independent four-stage air clearance
              before anyone gets the room back.
            </p>
            <p>
              That machinery is genuinely necessary for those materials, and
              it&rsquo;s why licensed jobs cost what they cost. What the
              licence is <em>not</em> is a general quality mark for every
              asbestos job in the country — the regulations themselves say
              most asbestos work doesn&rsquo;t need it. Asbestos cement, in
              particular, holds its fibres in a hard matrix; the law treats a
              corrugated garage roof very differently from crumbling pipe
              lagging, and so should your budget.
            </p>
          </div>
        </Container>
      </section>

      {/* When it matters */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Honest Version"
            title="When the licence matters — and when it isn't the test"
          />
          <p className="mt-6 leading-relaxed text-slate-600">
            {LICENSING_GUIDE_WHEN_IT_MATTERS}
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            The practical consequence: before you search for any kind of
            contractor, find out what your material actually is. A £30 lab
            sample settles the category, and the category decides who you
            should be phoning. Our{" "}
            <a
              href="/guides/how-to-identify-asbestos"
              className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
            >
              identification guide
            </a>{" "}
            shows how to narrow it down without disturbing anything.
          </p>
        </Container>
      </section>

      {/* Vetting checklist */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Due Diligence"
            title="How to vet any asbestos contractor"
            intro="Whoever you hire — including us — should pass every check on this list without flinching."
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              <strong className="text-brand-950">Training you can see.</strong>{" "}
              Ask for current UKATA or equivalent certificates for the people
              who&rsquo;ll actually be on your property — not a framed
              something in an office. Asbestos awareness training is the legal
              minimum for trades who might disturb it; the people removing it
              need more.
            </p>
            <p>
              <strong className="text-brand-950">
                A waste carrier registration number.
              </strong>{" "}
              In Scotland that&rsquo;s a SEPA registration, in England and
              Wales the Environment Agency. It&rsquo;s public, checkable and
              takes two minutes to verify. A firm that hesitates over this
              question has answered it.
            </p>
            <p>
              <strong className="text-brand-950">
                Paperwork promised before the job, not after.
              </strong>{" "}
              A written quote naming disposal, a plan of work for the day, and
              a consignment note plus disposal documentation when the waste
              leaves. If any of that is met with &ldquo;don&rsquo;t worry
              about it&rdquo; — worry about it.
            </p>
            <p>
              <strong className="text-brand-950">
                Straight answers about scope.
              </strong>{" "}
              Ask directly: is my material licensed, notifiable or
              non-licensed work, and are you allowed to do it? A good firm
              answers in one sentence and can show you why. Evasion on this
              question is the biggest red flag in the industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Where we stand */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Our Position" title="Where we stand" />
          <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
            <p>{SCOPE_STATEMENT}</p>
            <p>{LICENSABLE_REFERRAL}</p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Licensing FAQs"
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
            title="Keep reading"
            links={[
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description:
                  "What controlled non-licensed and NNLW removal looks like on site.",
              },
              {
                label: "Asbestos Removal Costs",
                href: "/guides/asbestos-removal-cost",
                description:
                  "Real 2026 price ranges for each category of work.",
              },
              {
                label: "Trust Centre",
                href: "/trust-centre",
                description:
                  "Our own credentials, laid out for exactly this kind of checking.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
