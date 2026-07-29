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
  HSE_NEAR_ME_DIRECT_ANSWER,
  HSE_NEAR_ME_HOW_TO_FIND,
  HSE_NEAR_ME_WRONG_SEARCH,
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
    "The three legal categories of asbestos work under the Control of Asbestos Regulations 2012 — what each covers, the split between notifiable and non-notifiable non-licensed work, when a licence is required by law, and how to vet a contractor.",
  path: "/guides/licensed-vs-non-licensed-asbestos-removal",
  datePublished: "2026-07-18",
  dateModified: "2026-07-29",
});

const FAQS: FAQ[] = [
  {
    question: "Do I need a licensed contractor to remove a garage roof?",
    answer: LICENSING_FAQ_GARAGE_ROOF_ANSWER,
  },
  {
    question: "How do I find an HSE licensed asbestos contractor near me?",
    answer:
      "Use HSE's own list rather than a search engine — look up 'HSE asbestos licence holders list', find the firms covering your area and check the licensed entity's name matches the company actually quoting you. Before you do any of that, though, find out whether you need one: if your material is asbestos cement, a textured coating, floor tiles or a flue, no licence is required to remove it and searching for a licence holder narrows you to a smaller and dearer pool. Asbestos Remove is not an HSE licensed contractor — we do non-licensed and NNLW work, and where a job is licensable we help you arrange a firm that is.",
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
  {
    question: "What is the difference between notifiable and non-notifiable asbestos work?",
    answer:
      "Both sit inside non-licensed work, so neither requires an HSE licence holder. Notifiable non-licensed work (NNLW) covers jobs where the material is damaged or degraded, or where the task will disturb it enough to raise exposure above the trivial — cracked cement sheeting, or textured coating stripped by anything other than careful wet methods. It adds three duties: notification to the enforcing authority before work starts, an exposure record kept for each worker for 40 years, and health surveillance. Non-notifiable non-licensed work needs none of those, but still requires trained operatives, controlled methods, a written plan of work and correct disposal. Condition and task decide which applies, not the material alone — which is why no honest firm can tell you over the phone.",
  },
  {
    question: "Is unlicensed asbestos removal legal?",
    answer:
      "Yes, for the materials the law places outside the licensing regime — asbestos cement, textured coatings, floor tiles, cement flues, rope seals and similar bonded products. 'Unlicensed' is an unfortunate word for it, because it sounds like a cowboy operation when it actually describes a legally defined category of work that makes up the bulk of what is found in UK buildings. What is never legal is a firm without a licence removing licensable material — sprayed coatings, pipe and boiler lagging, most asbestos insulating board. That is a criminal offence for the firm, and potentially for a commercial client who commissioned it.",
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

      {/* Notifiable vs non-notifiable — the split inside non-licensed work.
          Uses the muted band rather than white so the surrounding sections keep
          their existing light/white alternation. */}
      <section className="section-muted py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Line Inside Non-Licensed Work"
            title="Notifiable or non-notifiable? What decides it"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Most people meet this distinction halfway through a quote, and it
              catches them out because it sounds like a fourth category. It
              isn&rsquo;t. Non-licensed work splits in two: some of it must be
              notified to the enforcing authority before it starts, and some of
              it needn&rsquo;t be. Both are non-licensed. Neither needs an HSE
              licence holder.
            </p>
            <p>
              What decides it is not the material on its own — it is the
              material, its condition, and what you are about to do to it.
              Notifiable non-licensed work (NNLW) is the higher end: work where
              the material is already damaged or degraded, or where the task
              itself will disturb it enough that exposure rises above the
              trivial. Taking down asbestos cement sheeting that has already
              cracked, or stripping textured coating by anything other than
              careful wet methods, will usually land in NNLW. The same cement
              sheeting in sound condition, unbolted and lifted off whole,
              usually will not.
            </p>
            <p>
              The practical difference is duties and paperwork rather than
              standards on site — the controls are much the same either way.
              NNLW adds three things: notification to the enforcing authority
              (HSE, or the local authority depending on the premises) before
              work begins, an exposure record kept for each worker for 40
              years, and health surveillance for the operatives carrying it
              out. Non-notifiable non-licensed work needs none of those three,
              though it still demands trained people, controlled methods, a
              written plan of work and correct disposal.
            </p>
            <p>
              Two things follow that are worth holding on to. First, nobody can
              honestly tell you which side you are on from a description down
              the phone — it needs the material looked at, which is one reason
              a price given sight-unseen is worth very little. Second, a firm
              that never seems to encounter NNLW is a firm worth asking about,
              because the notification, the records and the health surveillance
              are exactly the overhead a corner-cutting operation quietly
              drops.
            </p>
            <p>
              Both categories are our core work. When we quote, we tell you
              which one your job falls into and why, before you agree to
              anything.
            </p>
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

      {/* "HSE licensed contractor near me" — honest capture */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Searching For One?"
            title="Looking for an HSE licensed asbestos contractor near you"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>{HSE_NEAR_ME_DIRECT_ANSWER}</p>
            <p>{HSE_NEAR_ME_HOW_TO_FIND}</p>
            <p>{HSE_NEAR_ME_WRONG_SEARCH}</p>
            <p>
              So the order that saves people money is: identify the material,
              then choose the contractor. If it comes back licensable, use the
              HSE list and hire properly — we&rsquo;ll happily point you at
              firms who cover the west of Scotland. If it comes back as cement,
              coating or tile, you&rsquo;re looking for trained operatives,
              controlled methods and a waste carrier registration instead, and
              the{" "}
              <a
                href="#vetting-checklist"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                checklist below
              </a>{" "}
              is how you judge that.
            </p>
          </div>
        </Container>
      </section>

      {/* Vetting checklist */}
      <section id="vetting-checklist" className="scroll-mt-24 py-16 sm:py-20">
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
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Our Position" title="Where we stand" />
          <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
            <p>{SCOPE_STATEMENT}</p>
            <p>{LICENSABLE_REFERRAL}</p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
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
      <section className="bg-white py-16 sm:py-20">
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
