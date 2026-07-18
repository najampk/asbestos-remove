import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { COST_GUIDE_LICENSED_NOTE, FAQ_SELF_REMOVAL_ANSWER } from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Asbestos Removal Cost UK: 2026 Price Guide",
  description:
    "How much does asbestos removal cost in the UK? Real 2026 price ranges for garage roofs, Artex, floor tiles, testing and disposal — and what drives the price up.",
  path: "/guides/asbestos-removal-cost",
});

const schema = articleSchema({
  headline: "How Much Does Asbestos Removal Cost in the UK?",
  description:
    "Indicative 2026 UK price ranges for non-licensed asbestos removal — garage roofs, Artex, floor tiles, testing and collection — with the factors that move a real quote.",
  path: "/guides/asbestos-removal-cost",
  datePublished: "2026-07-18",
});

// Indicative UK market ranges, July 2026 (SPEC.md §11.2) — market context,
// never this company's tariff.
const PRICE_ROWS: { job: string; range: string; note: string }[] = [
  {
    job: "Asbestos sample test (per sample)",
    range: "£25 – £60",
    note: "Lab analysis of one material — the cheapest certainty you can buy",
  },
  {
    job: "Management survey (3-bed house)",
    range: "£200 – £400",
    note: "Whole-property inspection with sampling; needed less often than sold",
  },
  {
    job: "Refurbishment / demolition survey",
    range: "from £300",
    note: "Intrusive survey — required before building work disturbs the fabric",
  },
  {
    job: "Single garage roof removal",
    range: "£400 – £800",
    note: "Corrugated cement sheets, including disposal and paperwork",
  },
  {
    job: "Double garage or larger roof",
    range: "£700 – £1,200",
    note: "More sheets, more waste weight, sometimes edge protection",
  },
  {
    job: "Full garage demolition",
    range: "£800 – £1,500",
    note: "Roof plus cement panel walls, slab left clean",
  },
  {
    job: "Artex / textured coating removal",
    range: "£25 – £50 per m²",
    note: "A typical ceiling lands between £600 and £1,500",
  },
  {
    job: "Vinyl floor tiles & adhesive",
    range: "£30 – £60 per m²",
    note: "The bitumen adhesive under the tiles is usually the slow part",
  },
  {
    job: "Cold water tank removal",
    range: "£200 – £450",
    note: "Loft access and tank size set the price",
  },
  {
    job: "Collection only (pre-wrapped waste)",
    range: "£150 – £350",
    note: "Already double-wrapped sheets, collected with consignment note",
  },
];

const FAQS: FAQ[] = [
  {
    question: "Why do asbestos removal quotes vary so much?",
    answer:
      "Because two garage roofs are rarely the same job. Condition is the big one — sheets that lift whole are quick, sheets that have been patched, painted or broken need slower handling and more wrapping. Then access, waste weight, distance to a licensed transfer station and whether the work is notifiable. Be wary at both ends: a quote far below the pack usually means the disposal paperwork is where the corner gets cut.",
  },
  {
    question: "Is it cheaper to remove asbestos myself?",
    answer: FAQ_SELF_REMOVAL_ANSWER,
  },
  {
    question: "Does home insurance cover asbestos removal?",
    answer:
      "Usually not. Most buildings policies treat asbestos as a maintenance issue and exclude it, the same way they exclude a tired roof. The exception is when an insured event — fire, storm damage, an escape of water — disturbs asbestos that was otherwise sitting quietly; the making-good can then include safe removal. Check your policy wording before assuming either way.",
  },
  {
    question: "How much does asbestos testing cost?",
    answer:
      "A single lab-analysed sample typically costs £25–£60, and for one suspect material — an Artex ceiling, a floor tile, a garage roof — that's often all you need before deciding anything. A full management survey of a three-bed house generally runs £200–£400 and earns its keep when you're buying, renovating or dealing with several suspect materials at once.",
  },
  {
    question: "Do you charge for quotes?",
    answer:
      "No. Quotes are free, and once we've agreed one it's fixed — the figure we shake on is the figure on the invoice. If we find something on site that genuinely changes the job, we stop and talk to you before any extra work happens.",
  },
];

export default function AsbestosRemovalCostPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Guides & Advice"
        title="How Much Does Asbestos Removal Cost?"
        intro="Most non-licensed domestic asbestos jobs in the UK land between £200 and £1,500 — a single garage roof typically £400–£800 including disposal. Testing starts around £30 a sample. Licensed work is a different bracket entirely. Here's what sits behind those numbers."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Asbestos Removal Costs", href: "/guides/asbestos-removal-cost" },
        ]}
      >
        <p className="font-mono text-xs uppercase tracking-wider text-white/60">
          Last updated July 2026 · UK market ranges, not a price list
        </p>
      </PageHero>

      {/* Price table */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The Numbers"
            title="Typical UK prices in 2026"
            intro="These are the ranges we see across the Scottish and wider UK market for non-licensed and notifiable non-licensed work. They're context for judging quotes — including ours — not a tariff."
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white shadow-card">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th className="px-6 py-4 font-display text-sm font-bold text-brand-950">
                    Job
                  </th>
                  <th className="px-6 py-4 font-display text-sm font-bold text-brand-950">
                    Typical range
                  </th>
                  <th className="px-6 py-4 font-display text-sm font-bold text-brand-950">
                    Worth knowing
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {PRICE_ROWS.map((row) => (
                  <tr key={row.job} className="transition-colors hover:bg-surface/60">
                    <td className="px-6 py-4 font-medium text-brand-950">
                      {row.job}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-eco-700">
                      {row.range}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600">
            A proper written quote states whether VAT and disposal are included
            — if it doesn&rsquo;t say, ask before you compare it with anything
            else. Reinstatement (a new roof on the garage, a re-skimmed
            ceiling) is separate trade work and never hides inside a removal
            price.
          </p>
        </Container>
      </section>

      {/* Cost factors */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Behind the Quote"
            title="What actually moves the price"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              <strong className="text-brand-950">Condition beats size.</strong>{" "}
              A weathered but intact cement roof comes off sheet by sheet,
              wrapped whole in 1000-gauge polythene. Once sheets are cracked,
              patched or brittle, everything slows down — more supervision,
              more wrapping, more waste volume for the same roof.
            </p>
            <p>
              <strong className="text-brand-950">Access is money.</strong> A
              garage you can park a van beside is the easy version. A rear-lane
              lock-up, a tenement close, a roof needing edge protection or
              scaffold — each adds hours or hire costs that an honest quote has
              to carry.
            </p>
            <p>
              <strong className="text-brand-950">
                The paperwork is part of the job.
              </strong>{" "}
              Notifiable non-licensed work (NNLW) means notifying the enforcing
              authority before starting, keeping exposure records and running
              health surveillance for the operatives. Waste travels on a
              consignment note to a licensed facility, and the gate fee for
              asbestos waste — commonly £200–£400 a tonne — is baked into every
              legitimate price. This is exactly the overhead the too-cheap
              quote has quietly dropped.
            </p>
            <p>
              <strong className="text-brand-950">
                Small jobs carry fixed costs.
              </strong>{" "}
              Ten minutes of actual removal still needs the same set-up,
              decontamination, transport and disposal run as a half-day job.
              That&rsquo;s why nothing serious gets done for £80, and why
              combining jobs — the garage roof and the old loft tank in one
              visit — is the genuine saving.
            </p>
          </div>
        </Container>
      </section>

      {/* Licensed work — claims-sourced */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Other Bracket"
            title="Licensed work costs — and why they're different"
          />
          <p className="mt-6 leading-relaxed text-slate-600">
            {COST_GUIDE_LICENSED_NOTE}
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            If you&rsquo;re not sure which side of that line your material
            falls on, don&rsquo;t guess with your budget — a £30 sample test
            answers it, and our guide to{" "}
            <a
              href="/guides/licensed-vs-non-licensed-asbestos-removal"
              className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
            >
              licensed vs non-licensed work
            </a>{" "}
            explains the three categories in plain English.
          </p>
        </Container>
      </section>

      {/* Keeping the bill down */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Honest Economies"
            title="How to keep the cost down without cutting corners"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Test before you survey. If one material is in question, a single
              sample settles it for the price of a takeaway — you don&rsquo;t
              need a full survey to find out whether one ceiling is a problem.
            </p>
            <p>
              Batch the work. Call-out, set-up and the disposal run are the
              fixed costs; a second material handled on the same visit is
              priced on its own merits, not on another full set-up.
            </p>
            <p>
              Leave it alone until the professionals arrive. Stacking broken
              sheets &ldquo;to help&rdquo; turns a tidy sheet-by-sheet lift
              into a contaminated-area clean-up. The untouched job is the
              cheaper job, every single time.
            </p>
            <p>
              And get every quote in writing, with disposal named. The
              paperwork trail — consignment note, licensed facility, waste
              carrier registration — is the difference between a price and a
              liability. Our{" "}
              <a
                href="/guides/asbestos-disposal-rules-scotland"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                disposal rules guide
              </a>{" "}
              covers what that trail should look like.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Asbestos removal cost FAQs"
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
            title="Put the numbers to work"
            links={[
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description:
                  "What a controlled, properly-priced removal actually involves.",
              },
              {
                label: "How to Identify Asbestos",
                href: "/guides/how-to-identify-asbestos",
                description:
                  "Not sure you even have it? Narrow it down before spending anything.",
              },
              {
                label: "Licensed vs Non-Licensed",
                href: "/guides/licensed-vs-non-licensed-asbestos-removal",
                description:
                  "The three legal categories — and which bracket your job sits in.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
