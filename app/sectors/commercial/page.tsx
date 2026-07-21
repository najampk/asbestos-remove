import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import Button from "@/components/Button";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import { LICENSABLE_REFERRAL } from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Commercial Asbestos Removal Glasgow",
  description:
    "Commercial asbestos services in Glasgow — surveys, removal, registers & management plans for offices, retail, schools & healthcare. Out-of-hours working available.",
  path: "/sectors/commercial",
});

const BUILDINGS = [
  "Offices & serviced buildings",
  "Retail & hospitality",
  "Schools, colleges & nurseries",
  "Healthcare & care homes",
  "Housing association stock & common closes",
  "Places of worship & community buildings",
];

const AROUND_BUSINESS = [
  "Night/weekend enclosures",
  "Phased works to keep floors open",
  "Single point of contact & programme reporting",
  "CDM 2015 coordination with your principal contractor",
  "Insurance-grade documentation",
];

const FAQS: FAQ[] = [
  {
    question: "Who is the duty holder in a leased building?",
    answer:
      "It depends on the lease. Repairing and maintenance obligations usually determine who holds the duty to manage — often the landlord for the structure and common parts, and the tenant for their demise. We help you read your responsibilities correctly and cover them.",
  },
  {
    question: "Can work happen while we stay open?",
    answer:
      "Yes. We plan phased, sealed works and out-of-hours enclosures so you keep trading, with controlled access and clear signage keeping staff and customers away from the work area.",
  },
  {
    question: "What documents will my insurer or auditor ask for?",
    answer:
      "Typically your asbestos register, management plan, survey reports, and — for any works — risk assessments, method statements, air monitoring and waste consignment notes. We supply all of it in an audit-ready format.",
  },
  {
    question: "Do schools need a specific approach?",
    answer:
      "Schools and nurseries need work scheduled around term times and safeguarding, with tight controls and clear communication to staff. We're experienced in education settings and plan works to keep pupils and staff well away from any activity.",
  },
  {
    question: "When can asbestos work be done in a Glasgow school?",
    answer:
      "In the holidays, for anything of size. The Scottish summer break from late June to mid-August is the window for larger programmes, with the October week, February break, Easter and Christmas holidays absorbing smaller jobs. Working in an empty building is safer, quicker and cheaper than enclosing part of an occupied one, so the scheduling conversation should come before the pricing conversation. Where something genuinely can't wait for a holiday, it's planned as a sealed, out-of-hours enclosure well away from pupil routes.",
  },
  {
    question: "Who is the duty holder for asbestos in a school?",
    answer:
      "For a local authority school it's normally the council as the body responsible for the premises; for an independent school it's the board or trustees; and in a PPP or leased building it follows the contract and the repairing obligations. Whoever it is must identify asbestos under Regulation 4 of the Control of Asbestos Regulations 2012, record it in a register, assess its condition and make that information available to anyone doing work in the building — including the janitor putting up a shelf.",
  },
];

export default function CommercialSectorPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Commercial Asbestos Services in Glasgow"
        intro="Every non-domestic building owner or occupier in Scotland has a legal duty to manage asbestos. We keep Glasgow businesses compliant and trading — surveys, removal and management delivered around your hours, with audit-ready documentation."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: "Commercial", href: "/sectors/commercial" },
        ]}
      />

      {/* Buildings we cover */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Where We Work" title="Buildings We Cover" />
          <div className="mt-10 rounded-2xl border border-line bg-white p-8 shadow-card">
            <FeatureList items={BUILDINGS} columns={2} />
          </div>
        </Container>
      </section>

      {/* Built around your business */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Minimal Disruption"
            title="Built Around Your Business"
          />
          <div className="mt-10 rounded-2xl border border-line bg-surface p-8">
            <FeatureList items={AROUND_BUSINESS} columns={2} />
          </div>
        </Container>
      </section>

      {/* Schools & education */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Education Estate"
            title="Asbestos removal in Glasgow schools and nurseries"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              A large share of Scotland&rsquo;s school estate was built or
              extended between the 1950s and the 1970s, which puts it squarely
              in the decades when asbestos was standard specification. It shows
              up in the same places building after building: cement roofing and
              cladding on annexes, gyms and dining blocks, textured coatings on
              ceilings, thermoplastic tiles in corridors, cement flues and
              soffits, and insulating board around service ducts, risers and
              plant rooms.
            </p>
            <p>
              Be clear-eyed about that last one, because it drives everything.
              A lot of what sits in school buildings of that vintage is
              insulating board, and AIB is licensable work — a different tier
              with different contractors, notification and clearance
              requirements. {LICENSABLE_REFERRAL} What we handle in education
              settings is the bonded material: the cement roofs and cladding,
              the coatings, the floor tiles and the flues, which is a
              substantial share of the estate and the part most often disturbed
              by ordinary maintenance.
            </p>
            <p>
              The scheduling is the other half of the job, and Scottish term
              dates make it its own discipline. The summer break from late June
              to the middle of August is the window for anything substantial;
              the October week, the February break, Easter and the Christmas
              holidays take the smaller pieces. Programme it properly and the
              building is empty, the work is unhurried and nobody&rsquo;s
              timetable moves. Programme it badly and you&rsquo;re trying to
              enclose a corridor during a school day, which is the wrong answer
              every time.
            </p>
            <p>
              Where any work does need to happen while a school is occupied,
              expect — and insist on — the full set of controls: sealed
              enclosures well away from pupil routes, agreed access and signage,
              a named contact on the school&rsquo;s side, and clear
              communication to staff before anything starts. Schools will also
              ask any contractor about PVG membership, escorting and site
              induction before they come through the gate, and they are right
              to. Every job ends with the document pack the local authority,
              the board or the insurer will want: method, air monitoring where
              applicable, and the waste consignment notes.
            </p>
          </div>
        </Container>
      </section>

      {/* Duty holder package — conversion block */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="gradient-hero relative overflow-hidden rounded-3xl px-6 py-12 shadow-card-hover sm:px-12 sm:py-14">
            <div
              className="containment-grid-dark absolute inset-0"
              aria-hidden="true"
            />
            <div className="hero-glow absolute inset-0" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-eco-400">
                Duty Holder Package
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Compliance, bundled and handled
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Management survey + asbestos register + management plan + annual
                re-inspection — one package that discharges your duty to manage
                and keeps it discharged, year after year.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="white">
                  Get the Duty Holder Package
                </Button>
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
            title="Commercial asbestos FAQs"
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
            title="Related services"
            links={[
              {
                label: "Asbestos Management",
                href: "/services/asbestos-management",
                description: "Registers, plans and re-inspection for duty holders.",
              },
              {
                label: "Asbestos Surveys",
                href: "/services/asbestos-surveys",
                description: "Management and refurbishment/demolition surveys.",
              },
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description: "Phased, out-of-hours removal that keeps you trading.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
