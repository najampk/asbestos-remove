import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import {
  COST_GUIDE_LICENSED_NOTE,
  FAQ_SELF_REMOVAL_ANSWER,
  PLACEHOLDERS,
} from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Asbestos Removal Cost 2026: UK & Glasgow Guide",
  description:
    "How much does asbestos removal cost in Glasgow and the UK? Real 2026 prices for garage roofs, Artex, floor tiles, encapsulation, testing and per-tonne disposal.",
  path: "/guides/asbestos-removal-cost",
});

const schema = articleSchema({
  headline: "How Much Does Asbestos Removal Cost in the UK?",
  description:
    "Indicative 2026 UK and Glasgow price ranges for non-licensed asbestos removal — garage roofs, Artex, floor tiles, flues and pipework, encapsulation, per-square-metre and per-square-foot rates, testing, skips and per-tonne disposal — with the factors that move a real quote.",
  path: "/guides/asbestos-removal-cost",
  datePublished: "2026-07-18",
  dateModified: "2026-07-29",
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
    job: "Cement flue, soil pipe or boiler flue",
    range: "£150 – £400",
    note: "Priced as an item; awkward runs through a roof cost more",
  },
  {
    job: "Rope seals, gaskets and tape",
    range: "£150 – £350",
    note: "Around old boilers and pipework — small job, same fixed costs",
  },
  {
    job: "Cement cladding or wall panels",
    range: "£20 – £40 per m²",
    note: "Same material as roofing; height and edge protection move it",
  },
  {
    job: "Encapsulation instead of removal",
    range: "£15 – £30 per m²",
    note: "Sealing sound material in place — cheaper, but it stays your duty",
  },
  {
    job: "Collection only (pre-wrapped waste)",
    range: "£150 – £350",
    note: "Already double-wrapped sheets, collected with consignment note",
  },
  {
    job: "Disposal gate fee (trade rate)",
    range: "£200 – £400 per tonne",
    note: "What the licensed facility charges — inside every legitimate quote",
  },
];

// Sheet-material rates, the only jobs where a per-m² figure means anything
// (SPEC.md §11.2 — indicative UK market ranges, not a company tariff).
const PER_M2_RATES: { material: string; rate: string; note: string }[] = [
  {
    material: "Asbestos cement sheeting",
    rate: "£20 – £40 per m²",
    note: "Garage and outbuilding roofs, wall cladding, farm roofing. The rate drops as the area grows — big, clean, accessible runs are the cheapest asbestos there is to remove.",
  },
  {
    material: "Textured coatings (Artex)",
    rate: "£25 – £50 per m²",
    note: "Ceilings and occasionally walls. Overboarding may be cheaper than removal if the surface is sound and you can live with losing the height.",
  },
  {
    material: "Vinyl floor tiles & bitumen adhesive",
    rate: "£30 – £60 per m²",
    note: "The tiles lift quickly; the black adhesive welded to the screed underneath is what fills the day and pushes the rate to the top of the range.",
  },
];

const FAQS: FAQ[] = [
  {
    question: "How much does asbestos removal cost in Glasgow in 2026?",
    answer:
      "The same as most of urban Britain, give or take. A single garage roof removed and disposed of runs £400–£800, a double or larger roof £700–£1,200, a full garage demolition £800–£1,500, and Artex ceilings £25–£50 per m². Glasgow's variables are access rather than geography — tenement stairs, factored back courts and rear-lane lock-ups add labour that a suburban driveway doesn't. The city's advantage is short runs to licensed transfer stations in the west of Scotland, so the disposal leg costs less here than on a rural Highland job.",
  },
  {
    question: "What does asbestos removal cost per square metre in the UK?",
    answer:
      "Broadly £20–£40 per m² for asbestos cement sheeting, £25–£50 per m² for textured coatings such as Artex, and £30–£60 per m² for vinyl floor tiles with bitumen adhesive underneath. Treat those rates as a sense-check on a quote for a decent-sized area, not a calculator. Below roughly 20 m² the fixed costs — call-out, set-up, decontamination, the disposal run — dominate, and any honest firm prices the job rather than the square metres.",
  },
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
    question: "How much does it cost to remove asbestos floor tiles?",
    answer:
      "Budget £30–£60 per m², which puts a typical kitchen or hallway somewhere between £400 and £1,200. The tiles themselves are the quick part — they lift in whole pieces once warmed or eased up. What fills the day is the black bitumen adhesive welded to the screed underneath, which is usually asbestos-containing too and cannot simply be sanded off. If you only need the tiles gone and the floor is being covered anyway, leaving sound adhesive in place and sealing it is often the cheaper and equally legitimate answer.",
  },
  {
    question: "How much does Artex or textured ceiling removal cost?",
    answer:
      "£25–£50 per m², so a typical room ceiling lands between £600 and £1,500. Two things move it: whether the coating comes off wet with hand tools or has been painted and re-skimmed over the years, and how much of the plasterboard behind it survives. Overboarding — fixing new board straight over the sound textured surface — is frequently cheaper than removal and perfectly legal, provided nobody drills or sands into it later and the material is recorded. Americans call this a popcorn ceiling; it is the same material and the same job.",
  },
  {
    question: "How much does asbestos encapsulation cost?",
    answer:
      "Roughly £15–£30 per m², which is usually half or less what removing the same material would cost. Encapsulation seals sound, undamaged material in place behind a coating or boarding rather than taking it out, and for a cement roof in fair condition or a textured ceiling nobody is about to disturb it is often the sensible choice. The trade-off is that the asbestos is still there: it stays on the register, it needs periodic checks, and it has to be declared when you sell or bring contractors in. You are deferring the cost, not deleting it.",
  },
  {
    question: "How much does it cost to dispose of asbestos per tonne?",
    answer:
      "Licensed facilities charge roughly £200–£400 per tonne to accept asbestos waste, and that gate fee sits inside every legitimate removal quote rather than beside it. Weight is what matters, not area — cement sheeting is dense, and a double garage roof is a genuine tonne of material. It is also why you cannot use an ordinary skip: asbestos is special waste in Scotland, hire firms charge to decontaminate a skip that comes back with it in, and the duty of care follows the waste back to whoever produced it.",
  },
  {
    question: "Is asbestos abatement the same as asbestos removal?",
    answer:
      "Broadly yes — 'abatement' and 'remediation' are American terms for the same work, and they cover encapsulation and management as well as physical removal. UK firms, ourselves included, say removal. If you have arrived here from a US price guide, treat the figures with care: American quotes are usually per square foot, in dollars, and reflect a different regulatory regime with different notification and clearance requirements. The UK ranges on this page are the ones that will match a quote you actually receive here.",
  },
  {
    question: "How much does it cost to remove asbestos from a boiler or pipework?",
    answer:
      "Cement flues, soil pipes and boiler flues are priced as items rather than by area, typically £150–£400 depending on the run and whether it passes through a roof. Rope seals, gaskets and tape around old boilers land around £150–£350. The important distinction is thermal pipe lagging — the thick plaster-like insulation wrapped around old pipes and boilers. That is licensable material in a different cost bracket entirely, and it legally requires an HSE licensed contractor. A sample tells you which of the two you are looking at before anybody quotes.",
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
        intro="Most non-licensed domestic asbestos jobs in the UK land between £200 and £1,500 — a single garage roof typically £400–£800 including disposal. Sheet materials run £20–£60 per m², and testing starts around £30 a sample. Licensed work is a different bracket. Here's what sits behind those numbers, in Glasgow and beyond."
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

      {/* Per square metre */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Per Square Metre"
            title="What removal costs per m²"
            intro="Square-metre rates only apply to sheet materials measured by area — roofing, ceilings and flooring. Everything else, from a loft tank to a boiler flue, is priced as an item."
          />
          <div className="mt-10 grid gap-x-10 gap-y-7 md:grid-cols-3">
            {PER_M2_RATES.map((item) => (
              <div key={item.material}>
                <h3 className="font-display text-lg font-bold text-brand-950">
                  {item.material}
                </h3>
                <p className="mt-2 font-mono text-sm text-eco-700">
                  {item.rate}
                </p>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl space-y-5 leading-relaxed text-slate-600">
            <p>
              The rate is a sense-check, not a calculator. It only behaves
              itself above roughly 20 m² — below that, the fixed costs swallow
              it. A 15 m² garage roof at £500 works out at £33 per m², while
              200 m² of the same sheeting on a farm building comes in nearer
              £20, because the set-up, the decontamination and the run to the
              transfer station happen once either way.
            </p>
            <p>
              It also assumes material in reasonable condition, coming off in
              whole sheets. Once something is broken, painted over or fixed
              with rusted-in bolts, the area stops predicting the hours and the
              quote has to be built from the job in front of us instead.
            </p>
          </div>
        </Container>
      </section>

      {/* Per square foot */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Different Units"
            title="What does asbestos removal cost per square foot?"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              UK contractors quote in square metres, so a per-square-foot
              figure is a conversion rather than a rate anyone actually works
              to. If you want it anyway: there are 10.76 square feet in a
              square metre, so the £20–£40 per m² for cement sheeting is
              roughly <strong className="text-brand-950">£2–£4 per square
              foot</strong>, textured coatings at £25–£50 per m² are about
              £2.30–£4.65, and floor tiles at £30–£60 per m² work out near
              £2.80–£5.60.
            </p>
            <p>
              If a quote arrives priced per square foot, it is worth asking
              why. It is usually one of two things — an American price guide
              being repeated back to you, or a small area being made to sound
              larger. Neither is a scandal, but the useful comparison is total
              price for the whole job including disposal, because that is the
              only number the invoice will actually show.
            </p>
          </div>
        </Container>
      </section>

      {/* Fibre type */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Blue, Brown and White"
            title="Does the type of asbestos change the cost?"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Indirectly, and less than people expect. Price follows the{" "}
              <em>product</em> and its condition, not the fibre colour — but
              the two correlate, which is why the question keeps coming up.
            </p>
            <p>
              <strong className="text-brand-950">
                White asbestos (chrysotile)
              </strong>{" "}
              is what is bonded into cement sheeting, textured coatings and
              floor tiles. It accounts for the overwhelming majority of what is
              found in UK homes, and it sits at the ordinary end of the price
              list above.
            </p>
            <p>
              <strong className="text-brand-950">
                Brown asbestos (amosite)
              </strong>{" "}
              turns up in insulating board, ceiling tiles and thermal panels.
              Most insulating board is licensable work, which puts it in a
              different bracket entirely — enclosures, air monitoring and a
              four-stage clearance, from £2,500 and often well beyond.
            </p>
            <p>
              <strong className="text-brand-950">
                Blue asbestos (crocidolite)
              </strong>{" "}
              was used in sprayed coatings and some lagging and is the highest
              risk of the three. It is licensable work in practically every
              case it appears, and priced accordingly.
            </p>
            <p>
              So &ldquo;blue asbestos removal cost&rdquo; and &ldquo;brown
              asbestos removal cost&rdquo; are usually really asking about
              licensed work. The honest answer is that a lab result naming the
              fibre type also tells you which side of the licensing line you
              are on, and that line moves the budget far more than the colour
              does. A single sample settles both questions at once.
            </p>
          </div>
        </Container>
      </section>

      {/* Skips and per-tonne */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="The Waste Leg"
            title="Skip hire, tip fees and what disposal costs per tonne"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              There is no such thing as an asbestos skip in the ordinary sense.
              Asbestos is special waste in Scotland and hazardous waste in the
              rest of the UK, so it cannot travel in a general skip, and hire
              companies charge for decontaminating one that comes back
              contaminated — commonly several hundred pounds, on top of the
              disposal you still have to arrange. People searching for
              &ldquo;asbestos skip cost&rdquo; are nearly always better served
              by a wrapped collection, which is the £150–£350 line in the table
              above.
            </p>
            <p>
              Some operators do offer a sealed, lockable asbestos-only skip or
              a bagged uplift arrangement, typically £250–£500 depending on
              volume and how far you are from a licensed facility. What matters
              is not the container but the paperwork: whoever takes it away
              must be a registered waste carrier and must give you a
              consignment note naming the receiving site.
            </p>
            <p>
              Underneath all of it is the gate fee. Licensed facilities charge
              roughly <strong className="text-brand-950">£200–£400 per
              tonne</strong> to accept asbestos waste, which is why weight
              rather than area drives the disposal half of a quote — cement
              sheeting is dense, and a double garage roof is a genuine tonne of
              material. That fee is inside every legitimate price. When a quote
              lands far below everyone else&rsquo;s, this is the line that has
              quietly gone missing, and{" "}
              <a
                href="/guides/asbestos-disposal-rules-scotland"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                Scotland&rsquo;s disposal rules
              </a>{" "}
              explain who carries the liability when it does.
            </p>
          </div>
        </Container>
      </section>

      {/* Reinstatement */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="After The Removal"
            title="What replacing an asbestos roof costs"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Removal and replacement are two separate trades, and a quote that
              blurs them is a quote you cannot compare with anyone
              else&rsquo;s. Taking a single garage roof off runs £400–£800
              including disposal. Putting a new one on is ordinary roofing
              work: box-profile steel sheeting typically £1,000–£2,000 on a
              standard single garage, bitumen or felt systems a little less,
              and a full rebuild in modern materials more again.
            </p>
            <p>
              This is where a lot of people decide the garage was not worth
              keeping. Once the asbestos is gone you are left with a slab and a
              choice, and demolishing the whole structure at £800–£1,500
              sometimes makes more sense than re-roofing a fifty-year-old frame
              — particularly if the side panels are cement too and will need
              the same treatment in a few years.
            </p>
            <p>
              We take the asbestos off and leave the structure sound. We do not
              quote reinstatement inside a removal price, because bundling the
              two is how an honest comparison stops being possible.{" "}
              <a
                href="/services/asbestos-garage-roof-removal"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                Our garage roof page
              </a>{" "}
              covers the removal half in detail.
            </p>
          </div>
        </Container>
      </section>

      {/* Cost factors */}
      <section className="py-16 sm:py-20">
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

      {/* Glasgow */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Local Detail"
            title="How much does asbestos removal cost in Glasgow?"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Close to the national ranges above — Glasgow is not a cheap city
              or an expensive one for this work. What changes here is access,
              and access is the variable that quietly rewrites a quote. A
              garage on a driveway in Newton Mearns and an identical roof on a
              rear-lane lock-up in Dennistoun are the same square metres and
              not the same day&rsquo;s work. Tenement jobs bring stairs, a
              shared close, a factor to notify and often no parking within
              carrying distance of the front door — all of it billable hours
              that a suburban job simply doesn&rsquo;t have.
            </p>
            <p>
              The city pays that back on disposal. The west of Scotland has
              well-established licensed transfer and landfill routes, so the
              waste leg of a Glasgow job is a short run rather than a day out —
              one of the reasons rural and island quotes sit noticeably higher
              for identical material. SEPA&rsquo;s special waste consignment
              system adds paperwork to every load, but paperwork done properly
              costs minutes, not hundreds of pounds.
            </p>
            <p>
              The genuine local risk is at the bottom of the market. Glasgow
              has no shortage of van-and-a-mobile-number quotes for garage
              roofs at a couple of hundred pounds, and the sums only work if
              the sheets are going somewhere they shouldn&rsquo;t. Ask for the
              waste carrier registration and the name of the receiving site
              before you compare prices — ours is{" "}
              {PLACEHOLDERS.wasteCarrierNo}, and{" "}
              <a
                href="/guides/asbestos-disposal-rules-scotland"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                Scotland&rsquo;s disposal rules
              </a>{" "}
              explain what the rest of that trail should look like.
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
