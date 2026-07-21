import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import PropertyExplorer from "@/components/explorer/PropertyExplorer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Asbestos Removal for Homes Glasgow",
  description:
    "Domestic asbestos removal across Glasgow — garage roofs, Artex, floor tiles & more, plus landlord duties explained. Free fixed quotes for owners and landlords.",
  path: "/sectors/domestic",
});

// NOTE: In M2.5 the "Where Asbestos Hides" Property Explorer embeds directly
// above this list; the list remains as the semantic / no-JS fallback (SPEC.md §9).
const COMMON_ACMS = [
  "Garage & shed roofs (asbestos cement)",
  "Textured/Artex ceilings",
  "Vinyl floor tiles & bitumen adhesive",
  "Pipe lagging & boiler flues",
  "Soffits, fascias & guttering",
  "Water tanks",
  "Airing cupboard panels (AIB)",
];

const HOW_WE_WORK = [
  "Clean, sealed work areas",
  "Dust-free methods",
  "Respect for your home — protection and a tidy handover",
  "Clear timings, out-of-hours where needed",
  "Family and pet safety guidance",
];

const FAQS: FAQ[] = [
  {
    question: "Is Artex dangerous?",
    answer:
      "Textured coatings applied before the mid-1980s often contain a small amount of white asbestos. They're safe while intact and undisturbed — the risk comes from sanding, drilling or scraping. Never disturb a textured ceiling before it's been tested.",
  },
  {
    question: "Can I stay in my house during work?",
    answer:
      "In most cases yes. We seal off the work area with controlled access so the rest of your home stays usable, and we agree timings and any temporary no-go areas with you beforehand.",
  },
  {
    question: "How much to remove a garage roof in Glasgow?",
    answer:
      "It depends on the roof size, access and condition, but garage roofs are core non-licensed work and are usually a straightforward, fixed-price job. Send an enquiry and we'll advise on the next step quickly.",
  },
  {
    question: "Do landlords have asbestos duties?",
    answer:
      "Landlords are responsible for the common parts of residential buildings under the duty to manage, and have a general duty to keep tenants safe. We help landlords survey, manage and, where needed, remove asbestos across their portfolio.",
  },
  {
    question: "Do I need an asbestos survey before letting a property in Glasgow?",
    answer:
      "There's no blanket legal requirement to survey the inside of a single let flat before handing over the keys, so anyone telling you it's compulsory is overselling. What is worth doing on any pre-2000 property is knowing what's there before a contractor works on it, because that's where landlords come unstuck. If your building has common parts you're responsible for, the duty to manage applies to those and a survey is how you meet it. For a portfolio, surveying during void periods is the cheapest and least disruptive route.",
  },
  {
    question: "Who is responsible for asbestos in a tenement close?",
    answer:
      "The common parts are shared, so the responsibility is shared — usually the owners collectively, acting through a factor, with the split set by your title deeds. Under Regulation 4 of the Control of Asbestos Regulations 2012 whoever is the dutyholder for those areas must identify asbestos there, assess its condition and keep a register. If you own or let a flat in the close, you're entitled to ask to see it, and you should before any work touching shared walls, stairs, risers or the roof space.",
  },
];

export default function DomesticSectorPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Asbestos Removal for Glasgow Homes"
        intro="Most Glasgow homes built before 2000 contain some asbestos — usually safe until disturbed by DIY, renovation or damage. We help homeowners and landlords identify, remove or safely manage it with minimal disruption and a fixed written quote."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: "Domestic", href: "/sectors/domestic" },
        ]}
      />

      {/* Common ACMs */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Know Your Home"
            title="Common Asbestos in Glasgow Homes"
            intro="Glasgow's housing stock tells a story — tenement closes, pre-war villas and 1950s–70s estates each have their own typical asbestos patterns. Tap the markers to explore where asbestos hides, then see the full list beneath."
          />
          <div className="mt-12">
            <PropertyExplorer />
          </div>

          {/* Semantic / no-JS fallback list (§9) */}
          <h3 className="mt-16 font-display text-xl font-bold text-brand-950">
            The materials we see most often
          </h3>
          <div className="mt-6 rounded-2xl border border-line bg-white p-8 shadow-card">
            <FeatureList items={COMMON_ACMS} columns={2} />
          </div>
        </Container>
      </section>

      {/* How we work in occupied homes */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Considerate Working"
            title="How We Work in Occupied Homes"
          />
          <div className="mt-10 rounded-2xl border border-line bg-surface p-8">
            <FeatureList items={HOW_WE_WORK} columns={2} />
          </div>
        </Container>
      </section>

      {/* Renovating or buying */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Before You Start" title="Renovating or Buying?" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Buying a pre-2000 property? Pre-purchase sampling tells you what
              you&rsquo;re taking on before you commit.
            </p>
            <p>
              Planning renovations? A survey before builders start avoids costly
              surprises — builders will down-tools the moment suspect material
              appears, so testing first keeps your project on schedule.
            </p>
          </div>
        </Container>
      </section>

      {/* Landlords */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="For Landlords"
            title="Asbestos duties if you let property in Glasgow"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              Landlords sit in an awkward gap, and a lot of them don&rsquo;t
              realise it. The duty to manage under Regulation 4 of the Control
              of Asbestos Regulations 2012 covers the{" "}
              <em>common parts</em> of residential buildings — closes,
              stairwells, shared roof spaces, bin stores, drying areas, communal
              boiler rooms — but not the inside of the flat you let, which is
              domestic premises and falls outside that particular regulation.
              What doesn&rsquo;t fall outside anything is your obligation to
              keep the property safe for the people living in it.
            </p>
            <p>
              In Scotland that obligation has a name: the Repairing Standard
              under the Housing (Scotland) Act 2006, which requires a let
              property to be wind and watertight, in reasonable repair and safe
              to live in. Damaged asbestos — a broken cement roof over a back
              door, a scraped textured ceiling, a cracked flue — engages that
              standard, and a tenant who thinks it isn&rsquo;t being dealt with
              can take the matter to the First-tier Tribunal. Every private
              landlord in Glasgow is on the council&rsquo;s landlord register
              already; HMOs get more scrutiny again.
            </p>
            <p>
              The failure we&rsquo;re called out to most, though, has nothing to
              do with paperwork. It&rsquo;s a handyman sent to do a small job in
              a pre-2000 flat, drilling or cutting into something nobody
              identified first — a ceiling, an airing cupboard panel, a soffit.
              At that point you own a contaminated let property, a displaced
              tenant and a bill several times what a survey would have cost. If
              you take one thing from this page: brief every contractor on what
              is and isn&rsquo;t known about the building before they lift a
              tool.
            </p>
            <p>
              The practical answer for a portfolio is boring and cheap. Survey
              once, keep a register, hand the relevant part of it to anyone
              doing work, and re-check it when the condition of a building
              changes. Void periods between tenancies are the natural window for
              both surveying and any removal — nobody&rsquo;s displaced and
              nobody&rsquo;s rent is disrupted. We work with landlords, letting
              agents and factors across Glasgow on exactly that cycle.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Home asbestos FAQs"
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
            title="How we can help at home"
            links={[
              {
                label: "Asbestos Surveys",
                href: "/services/asbestos-surveys",
                description: "Identify and sample suspect materials before work.",
              },
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description: "Controlled removal of garage roofs, Artex and more.",
              },
              {
                label: "Certified Disposal",
                href: "/services/asbestos-disposal",
                description: "Safe collection and documented disposal for homes.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
