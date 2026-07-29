import Link from "next/link";
import Image from "next/image";
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
import { LICENSING_FAQ_GARAGE_ROOF_ANSWER } from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Asbestos Garage Roof Removal Glasgow",
  description:
    "Asbestos garage roof removal in Glasgow from £400. Corrugated cement sheets taken off whole, wrapped and disposed of with full paperwork. Free fixed quotes.",
  path: "/services/asbestos-garage-roof-removal",
});

const schema = serviceSchema({
  name: "Asbestos Garage Roof Removal",
  description:
    "Removal of corrugated asbestos cement garage, shed and outbuilding roofs across Glasgow — non-licensed work, sheets removed whole where possible, with certified disposal and consignment notes.",
  path: "/services/asbestos-garage-roof-removal",
  serviceType: "Asbestos garage roof removal",
});

// Indicative Glasgow ranges. These MUST stay consistent with the figures in
// /guides/asbestos-removal-cost — change both together or neither.
const PRICE_ROWS: { job: string; range: string; note: string }[] = [
  {
    job: "Single garage roof",
    range: "£400 – £800",
    note: "Around 15–20 m² of corrugated sheet, including disposal and paperwork",
  },
  {
    job: "Double garage or larger roof",
    range: "£700 – £1,200",
    note: "More sheets, more waste weight, sometimes edge protection",
  },
  {
    job: "Full garage demolition",
    range: "£800 – £1,500",
    note: "Roof plus cement panel walls, slab swept and left clean",
  },
  {
    job: "Shed, coal store or bin shelter roof",
    range: "£300 – £600",
    note: "Small runs — the call-out and disposal leg set the floor price",
  },
  {
    job: "Collection of sheets already down",
    range: "£150 – £350",
    note: "Wrapped on site, uplifted and consigned to a licensed facility",
  },
];

const SIGNS = [
  "Corrugated grey sheeting with a wavy profile, roughly 3 mm thick",
  "A dull, fibrous, slightly chalky surface rather than smooth metal or plastic",
  "Fixed with hook bolts through the crown of the corrugation, not nailed",
  "Weathered, mossy and hairline-cracked along the edges after decades outside",
  "Built any time between the 1950s and the mid-1990s",
  "Matching panels on the side walls, coal store or bin shelter nearby",
];

const INCLUDED = [
  "Free site visit and a fixed written quote",
  "Work area cordoned off and neighbouring property protected",
  "Sheets wetted, unbolted and lifted down whole",
  "Double wrapping in 1000-gauge polythene, labelled and sealed",
  "Transport by a SEPA registered carrier",
  "Disposal at a licensed facility with your consignment note",
];

const FAQS: FAQ[] = [
  {
    question: "How much does asbestos garage roof removal cost in Glasgow?",
    answer:
      "A single garage roof typically runs £400–£800 including disposal and paperwork, a double or larger roof £700–£1,200, and a full garage demolition £800–£1,500. Condition moves the figure more than size does — sheets that lift whole are a morning's work, while sheets already cracked, patched or painted need slower handling and more wrapping. Access matters too: a garage on a driveway is straightforward, a rear-lane lock-up behind a tenement is not. The quote is free and fixed, and the figure we agree is the figure on the invoice.",
  },
  {
    question: "Do I need a licensed contractor for an asbestos garage roof?",
    answer: LICENSING_FAQ_GARAGE_ROOF_ANSWER,
  },
  {
    question: "Is my garage roof actually asbestos?",
    answer:
      "If it is grey corrugated sheeting on a garage built before 2000, it very probably is asbestos cement — it was the standard roofing material for garages, sheds and coal stores across the west of Scotland for forty years. What it is not, in almost every case, is high-risk material. But nobody can confirm it by eye, us included, and the honest answer is a sample: one piece analysed at a UKAS-accredited laboratory costs around £25–£60 and settles the question before anyone prices anything.",
  },
  {
    question: "How long does a garage roof take to remove?",
    answer:
      "Most single garage roofs are done inside a day, and often in half of one. We arrive, cordon the area, take the sheets down whole, wrap and load them, and leave with the waste. Larger roofs, farm buildings and full demolitions are scheduled over more days, and you get the timeline in writing with the quote rather than finding out on the morning.",
  },
  {
    question: "Can I take an asbestos garage roof to the tip myself?",
    answer:
      "Almost certainly not, and never turn up on spec. Asbestos is special waste in Scotland — it cannot go in a skip, a general bin or the back of a van without the right paperwork. Most household waste recycling centres in the west of Scotland refuse it outright, and the few that accept it want small, double-wrapped amounts, from their own residents, booked in advance. The duty of care under the Environmental Protection Act 1990 traces the waste back to whoever produced it, which is you.",
  },
  {
    question: "Can you replace the roof after you take the old one off?",
    answer:
      "We take the asbestos off and leave the structure sound and ready. Re-roofing in box profile steel or bitumen sheet is ordinary trade work and we can point you to people who do it well, but it is quoted separately — a removal price that quietly includes reinstatement is a price you cannot compare with anyone else's. Plenty of customers use the gap to decide whether the garage is worth keeping at all.",
  },
  {
    question: "Do you remove the whole garage, not just the roof?",
    answer:
      "Yes. A lot of Glasgow garages are asbestos cement all the way round — roof, side panels and sometimes the up-and-over door surround — and it is usually cheaper to take the lot in one visit than to come back later for the walls. We demolish the structure, remove the sheeting under controlled conditions and leave the slab swept, so it is ready for a new build, a driveway or nothing at all.",
  },
  {
    question: "My garage roof is broken or has come down in a storm — what now?",
    answer: `Keep people and pets away from it, do not sweep up debris, and do not hose it down. Broken asbestos cement releases fibres in a way that intact sheeting does not, so the priority is stopping anyone walking through it. Call ${BUSINESS.phoneDisplay} — the line is answered around the clock and the advice costs nothing. Storm damage is prioritised over planned work and we will tell you honestly when we can be there.`,
  },
  {
    question: "Do you cover garages outside Glasgow?",
    answer:
      "Yes — Paisley, Hamilton, Motherwell, East Kilbride, Clydebank, Cumbernauld and the surrounding council areas are all inside our normal working patch, priced the same as a Glasgow job. Nobody pays a travel premium for living the far side of the M8. Farm and estate roofing further out is quoted on the run, and long, clean, accessible sheeting is among the cheapest asbestos there is to remove per square metre.",
  },
];

export default function AsbestosGarageRoofRemovalPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Services"
        title="Asbestos Garage Roof Removal in Glasgow"
        intro="Corrugated asbestos cement garage roofs are non-licensed work and the single most common asbestos job in Glasgow. We take the sheets off whole, wrap and consign them to a licensed facility, and hand you the paperwork. Most single garages are cleared in a day, from £400."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          {
            label: "Garage Roof Removal",
            href: "/services/asbestos-garage-roof-removal",
          },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/contact#quote-form">
            Get a free fixed quote
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

      {/* Identification */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="First Question"
                title="Is your garage roof asbestos?"
              />
              <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
                <p>
                  If the garage went up before 2000 and the roof is grey
                  corrugated sheeting, the odds are high. Asbestos cement was
                  cheap, light, fireproof and rot-proof, which made it the
                  default for anything that had to sit outside and be forgotten
                  about — garages, sheds, coal bunkers, bin shelters, drying-area
                  roofs and the long garage courts behind the post-war schemes.
                  Whole streets in Knightswood, Cardonald, Castlemilk and
                  Drumchapel were roofed in it.
                </p>
                <p>
                  The reassuring part is what kind of asbestos it is. Cement
                  sheeting is bonded material: the fibres are locked into the
                  cement matrix rather than sitting loose, so an intact roof
                  sitting quietly above your car is not releasing anything.
                  That is why it counts as non-licensed work. The risk arrives
                  when somebody breaks it — a hammer, an angle grinder, a
                  jet wash, or a foot through a sheet while retrieving a
                  football.
                </p>
                <p>
                  What you cannot do is confirm it by looking, and any firm that
                  tells you otherwise on the doorstep is guessing. Asbestos
                  cement and the fibre-cement sheeting that replaced it in the
                  mid-90s look identical from a ladder.{" "}
                  <Link
                    href="/services/asbestos-testing"
                    className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
                  >
                    One sample analysed at a UKAS-accredited lab
                  </Link>{" "}
                  costs around £25–£60 and ends the argument.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
              <h3 className="font-display text-lg font-bold text-brand-950">
                What asbestos cement roofing looks like
              </h3>
              <div className="mt-5">
                <FeatureList items={SIGNS} columns={1} />
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-sm ring-1 ring-inset ring-amber-200">
                <AlertTriangle
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-700"
                  aria-hidden="true"
                />
                <p className="leading-relaxed text-amber-900">
                  These are indicators, not a diagnosis. Never drill, cut, sand
                  or pressure-wash a suspect roof to find out what it is.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Cost */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The Numbers"
            title="What asbestos garage roof removal costs"
            intro="Indicative Glasgow ranges for 2026, including disposal and the waste documentation. They exist so you can judge a quote — ours included — rather than guess at one."
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-surface shadow-card">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-line bg-white">
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
                  <tr
                    key={row.job}
                    className="transition-colors hover:bg-white/70"
                  >
                    <td className="px-6 py-4 font-medium text-brand-950">
                      {row.job}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-eco-700">
                      {row.range}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <p className="leading-relaxed text-slate-600">
              Condition drives the price harder than area does. A roof whose
              sheets unbolt and lift whole is a straightforward morning. A roof
              that has been patched with bitumen, painted, walked on, or left to
              crack for fifty winters has to come down piece by careful piece,
              wetted as it goes, and every extra fragment is more wrapping and
              more waste weight.
            </p>
            <p className="leading-relaxed text-slate-600">
              After that it is access. A garage on a driveway in Newton Mearns
              you can reverse a van up to; a rear-lane lock-up behind a
              Dennistoun tenement, reached through a factored back court with a
              locked gate, is the same roof and a longer day.{" "}
              <Link
                href="/guides/asbestos-removal-cost"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                Our full cost guide
              </Link>{" "}
              breaks down every factor that moves a quote.
            </p>
          </div>
        </Container>
      </section>

      {/* Method */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="On The Day"
                title="How we take a garage roof off"
              />
              <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
                <p>
                  The whole method is built around one principle: do not break
                  the sheets. Intact asbestos cement is stable, so a removal
                  that keeps it intact barely disturbs anything. That means no
                  grinders, no smashing sheets into a skip, and no working on a
                  dry, dusty roof in the sun.
                </p>
                <p>
                  We cordon the working area and cover the ground beneath it,
                  then damp the sheets down with a light water spray to suppress
                  anything the handling releases. The hook bolts are cut or
                  unwound rather than snapped, and each sheet is lifted down by
                  hand — never dropped — onto polythene laid out below. Sheets
                  go straight into 1000-gauge wrapping, sealed and labelled,
                  without being cut down to fit.
                </p>
                <p>
                  The area is then cleaned with Class H vacuum equipment, the
                  ground sheeting is bagged as waste in its own right, and the
                  load leaves site with us. Nothing sits in your driveway
                  overnight waiting for a second van. You get the consignment
                  note showing where the waste went and who took it, which is
                  the document that discharges your duty of care — keep it with
                  the house papers, because buyers and solicitors ask for it.
                </p>
                <p>
                  Where the job is notifiable non-licensed work, the
                  notification, the records and the health surveillance
                  requirements are handled as part of it rather than treated as
                  optional extras.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/services/asbestos-removal#removal-story" variant="outline">
                  See a controlled removal, stage by stage
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-card">
                <Image
                  src="/images/thumb-3.avif"
                  alt="UKATA-trained operative removing asbestos cement sheeting under controlled conditions in Glasgow"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
                <h3 className="font-display text-lg font-bold text-brand-950">
                  What the price includes
                </h3>
                <div className="mt-5">
                  <FeatureList items={INCLUDED} columns={1} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Whole garage */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Roof, Or The Whole Thing?"
            title="Asbestos garage demolition"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Plenty of the garages we look at are asbestos cement from the
              ground up — roof, side panels, gable ends and sometimes the
              surround to the up-and-over door — sitting on a concrete slab
              with a timber or steel frame holding it together. If that is what
              you have, taking only the roof off solves half a problem and
              leaves you paying a second call-out later for the walls.
            </p>
            <p>
              A full demolition is usually the better value: same set-up, same
              cordon, same disposal run, one visit. We strip the sheeting under
              controlled conditions, break down the frame, remove the lot and
              sweep the slab clean, so you are left with a flat, usable base
              for a new garage, a driveway extension, a garden room or grass.
            </p>
            <p>
              It is worth checking two things before you commit. If the garage
              is in a factored block or a shared garage court, the structure may
              not be yours alone to remove — the factor or the owners&rsquo;
              association decides, and{" "}
              <Link
                href="/services/asbestos-management"
                className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
              >
                the dutyholder for common areas
              </Link>{" "}
              should already hold an asbestos register. And if the garage is
              attached to the house or sits on a boundary, demolition may need
              a word with the council&rsquo;s building standards team. We will
              flag both when we quote rather than after we arrive.
            </p>
          </div>
        </Container>
      </section>

      {/* Warning */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-card-hover sm:p-10">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-eco-700">
              Before you get the ladder out
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand-950 sm:text-3xl">
              Why the skip is the expensive option
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
              <p>
                No Scottish law stops a homeowner taking a cement sheet off
                their own garage. What stops most people is what happens next.
                Asbestos is special waste in Scotland: it cannot go in a skip,
                a general bin, or the back of a car to the recycling centre. Hire
                companies refuse contaminated skips and charge for
                decontaminating them, and the duty of care under the
                Environmental Protection Act 1990 follows the waste back to
                whoever produced it — with your address on it.
              </p>
              <p>
                The other half is the method. The common DIY mistake is smashing
                sheets to fit a bag, which converts a stable bonded material
                into airborne fibres in the one place you cannot ventilate — a
                closed garage. The moment anyone else is involved, a tenant, a
                factored close, a neighbour&rsquo;s garage, a mate you are
                paying, it stops being DIY altogether and the duties in CAR 2012
                land on whoever is directing the work.
              </p>
              <p>
                If sheets are already down and wrapped, we will collect and
                consign them —{" "}
                <Link
                  href="/services/asbestos-disposal"
                  className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
                >
                  see certified disposal
                </Link>
                . If they are down and broken, ring before you touch anything
                else.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Asbestos garage roof FAQs"
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
                  "Confirm the sheeting first — one sample, UKAS lab, £25–£60.",
              },
              {
                label: "Asbestos Removal Costs",
                href: "/guides/asbestos-removal-cost",
                description:
                  "Full 2026 price ranges and every factor that moves a quote.",
              },
              {
                label: "Certified Disposal",
                href: "/services/asbestos-disposal",
                description:
                  "Sheets already down? Wrapped collection with consignment notes.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
