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
    "Domestic asbestos removal across Glasgow — garage roofs, Artex ceilings, floor tiles & more. Tidy, discreet, UKATA-trained. Free fixed quotes for homeowners.",
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
      "It depends on the roof size, access and condition, but garage roofs are core non-licensed work and are usually a straightforward, fixed-price job. Send a photo and we'll give you a quote quickly.",
  },
  {
    question: "Do landlords have asbestos duties?",
    answer:
      "Landlords are responsible for the common parts of residential buildings under the duty to manage, and have a general duty to keep tenants safe. We help landlords survey, manage and, where needed, remove asbestos across their portfolio.",
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
          { label: "Sectors", href: "/sectors/domestic" },
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

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
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
      <section className="py-16 sm:py-20">
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
