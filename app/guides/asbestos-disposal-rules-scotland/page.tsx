import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import {
  HERO_CREDENTIALS,
  DIY_REMOVAL_SCOTLAND_POSITION,
  DIY_REMOVAL_SCOTLAND_WORK,
  FAQ_DIY_REMOVAL_SCOTLAND_ANSWER,
} from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Asbestos Disposal Rules in Scotland",
  description:
    "Is it illegal to remove asbestos yourself in Scotland? The law explained — special waste status, wrapping, consignment notes and how to avoid rogue collectors.",
  path: "/guides/asbestos-disposal-rules-scotland",
});

const schema = articleSchema({
  headline: "Asbestos Disposal Rules in Scotland",
  description:
    "What the law requires when asbestos waste leaves a Scottish property: whether you may remove it yourself, special waste status, double-wrapping, SEPA registered carriers and the paperwork that protects you.",
  path: "/guides/asbestos-disposal-rules-scotland",
  datePublished: "2026-07-18",
  dateModified: "2026-07-21",
});

const FAQS: FAQ[] = [
  {
    question: "Is it illegal to remove asbestos yourself in Scotland?",
    answer: FAQ_DIY_REMOVAL_SCOTLAND_ANSWER,
  },
  {
    question: "Can I put asbestos in a skip?",
    answer:
      "No. Every skip hire agreement excludes it, and it isn't small print for show — one broken sheet buried in rubble contaminates the whole load, and the skip firm will charge you for specialist disposal of everything in it. If asbestos is part of a bigger clear-out, deal with it separately, before the skip arrives.",
  },
  {
    question: "Is it illegal to keep asbestos in my home?",
    answer:
      "No. There's no law against living with asbestos that's intact and undisturbed, and for material in good condition, leaving it managed and unbothered is often the right call. The law concerns itself with what happens when asbestos is worked on, moved or thrown away. Commercial buildings are different — dutyholders must identify and actively manage it under Regulation 4 of the Control of Asbestos Regulations 2012.",
  },
  {
    question: "How much does asbestos disposal cost?",
    answer:
      "Collection of pre-wrapped bonded waste typically runs £150–£350 depending on quantity and distance, and disposal charges at licensed facilities commonly work out around £200–£400 a tonne. When removal and disposal are quoted together, the disposal leg is baked into the price — our cost guide breaks down the full picture job by job.",
  },
  {
    question: "What paperwork should I receive?",
    answer:
      "Two things matter: a special waste consignment note recording what the waste is, who carried it and where it went, and evidence of the receiving site's licence. Keep the consignment note — the recommended period is at least three years. A collector who can't produce a consignment note isn't offering disposal; they're offering to make your asbestos disappear, which is a very different service with your name attached to it.",
  },
  {
    question: "Can I transport asbestos in my own car?",
    answer:
      "A householder moving their own bonded household waste sits outside the carrier-registration rules that apply to businesses — but the practical bar is high. The waste must be double-wrapped and sealed, your destination must be one of the few facilities that accepts asbestos from the public, booked ahead, and one split bag turns your car into a contaminated space no valet can fix. For anything beyond a couple of intact, well-wrapped sheets, collection is cheaper than the risk.",
  },
];

export default function AsbestosDisposalRulesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Guides & Advice"
        title="Asbestos Disposal Rules in Scotland"
        intro="In Scotland asbestos is 'special waste'. It can't go in a bin, a skip or most council tips — it must be double-wrapped, moved by a registered carrier and consigned to a licensed facility, with paperwork at every step. Here's what the law expects of you."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          {
            label: "Asbestos Disposal Rules",
            href: "/guides/asbestos-disposal-rules-scotland",
          },
        ]}
      >
        <p className="font-mono text-xs uppercase tracking-wider text-white/60">
          Last updated July 2026 · {HERO_CREDENTIALS}
        </p>
      </PageHero>

      {/* Legal position */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Law"
            title="Special waste, not just 'rubbish that needs care'"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Scotland classifies asbestos under the Special Waste Regulations
              1996 — the Scottish counterpart to what England calls hazardous
              waste — and that classification is what triggers everything
              else on this page. Special waste can only move with a
              consignment note, can only be carried by a registered carrier
              when a business is doing the carrying, and can only be received
              by a facility licensed to take it. SEPA polices the chain from
              your property to the landfill cell.
            </p>
            <p>
              Underneath sits the duty of care in the Environmental
              Protection Act 1990: whoever produces waste is responsible for
              it reaching an authorised destination. That duty reaches
              householders too — hand your asbestos to someone unauthorised
              and, when it surfaces in a lay-by, the trail runs back to you,
              not just to them. It&rsquo;s the single best reason to ask
              boring questions about registrations before anything leaves
              your property.
            </p>
          </div>
        </Container>
      </section>

      {/* DIY removal legality */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Question We Get Most"
            title="Is it illegal to remove asbestos yourself in Scotland?"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>{DIY_REMOVAL_SCOTLAND_POSITION}</p>
            <p>{DIY_REMOVAL_SCOTLAND_WORK}</p>
            <p>
              Disposal is where DIY most often turns into an offence, and it
              catches people who did the removal carefully. Special waste
              can&rsquo;t go in a skip, a brown bin or the back of a van
              belonging to someone who answered an advert. It has to be
              double-wrapped, consigned and delivered to a facility licensed
              to receive it — and the duty of care under the Environmental
              Protection Act 1990 stays with you, the person who produced the
              waste, until it gets there. Wrap it and hand it to the wrong
              collector and you are still in the chain when SEPA follows it
              back.
            </p>
            <p>
              So the practical answer isn&rsquo;t &ldquo;you can&rsquo;t&rdquo;
              — it&rsquo;s that the sums rarely work. Between wetting agents,
              1000-gauge polythene, disposable coveralls, a proper mask that
              actually fits, and a collection at the end of it, a homeowner
              doing a small garage roof properly spends most of what a trained
              crew charges to do the whole thing, insured, in a morning. The
              corner people cut to avoid that is nearly always the wrapping or
              the paperwork, which are the two parts that protect them. If
              you&rsquo;re set on doing the removal yourself, at least let us
              handle the waste — that&rsquo;s a{" "}
              <a
                href="/services/asbestos-disposal"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                collection-only job
              </a>{" "}
              and it ends with a consignment note in your name.
            </p>
          </div>
        </Container>
      </section>

      {/* The tip question */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Obvious Question"
            title="Can't I just take it to the tip?"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Usually not, and never on spec. Most household recycling
              centres in the west of Scotland don&rsquo;t accept asbestos in
              any form. The minority of Scottish councils that do take it
              want it from their own residents only, double-wrapped, in small
              quantities, and booked in advance — turn up unannounced with
              loose sheets in a trailer and you&rsquo;ll be turned away with
              a contaminated trailer for your trouble. Check your own
              council&rsquo;s website before loading anything.
            </p>
            <p>
              What that leaves, for most people, is a collection service:
              the waste is wrapped (or checked, if you&rsquo;ve wrapped it),
              consigned and carried to a licensed facility with the
              paperwork handled. That&rsquo;s the service our{" "}
              <a
                href="/services/asbestos-disposal"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                disposal page
              </a>{" "}
              covers, and it&rsquo;s the route that ends with your name on a
              consignment note instead of a fly-tipping investigation.
            </p>
          </div>
        </Container>
      </section>

      {/* Wrapping */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Doing It Right"
            title="How asbestos waste is packaged"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              The standard is double containment: an inner layer — typically
              a red, asbestos-marked bag or 1000-gauge polythene — sealed and
              then over-wrapped or over-bagged in a second clear layer, so
              handlers can see what they&rsquo;re lifting and any breach of
              the outer layer still leaves the waste contained. Sheets stay
              whole; breaking them &ldquo;to fit&rdquo; is precisely the
              fibre-releasing act the whole system exists to prevent, and it
              turns tidy bonded waste into a messier, more expensive
              category.
            </p>
            <p>
              Everything gets sealed with tape rather than tied, labelled as
              asbestos waste, and stored somewhere weatherproof and out of
              reach until collection — a garage corner beats a garden, and
              anywhere beats the pavement.
            </p>
          </div>
        </Container>
      </section>

      {/* Paperwork */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Your Protection"
            title="The paperwork that protects you"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              A legitimate disposal produces a short paper trail, and every
              document in it protects the customer more than the contractor.
              The consignment note is raised before the waste moves and
              records the waste type — asbestos carries European Waste
              Catalogue codes such as 17 06 05 for cement products — the
              carrier, and the licensed destination. You keep a copy. If SEPA
              or a house buyer&rsquo;s solicitor ever asks what happened to
              the garage roof, that piece of paper is the whole answer.
            </p>
            <p>
              So before any collector lifts a bag, ask for two numbers: their
              waste carrier registration, which you can verify on
              SEPA&rsquo;s public register in about two minutes, and the name
              of the facility receiving the waste. Legitimate operators
              answer instantly — ours is on the bottom of every page of this
              site. The rogue end of this trade survives on customers who
              never ask, and the price of never asking occasionally arrives
              years later, attached to a fly-tipping enforcement letter.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Disposal FAQs"
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
            title="Related reading"
            links={[
              {
                label: "Asbestos Disposal",
                href: "/services/asbestos-disposal",
                description:
                  "Certified collection and disposal with the consignment note handled.",
              },
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description:
                  "Still attached to the building? Removal and disposal in one job.",
              },
              {
                label: "Asbestos Removal Costs",
                href: "/guides/asbestos-removal-cost",
                description:
                  "What collection, removal and disposal typically cost in 2026.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
