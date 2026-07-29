import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight, MapPin } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import RemovalStory from "@/components/removal-story/RemovalStory";
import JsonLd from "@/components/JsonLd";
import {
  REMOVAL_SCOPE_PARAGRAPH,
  THREE_TIER_EXPLAINER,
  LICENSING_FAQ_ANSWER,
  LICENSABLE_REFERRAL,
} from "@/lib/claims";
import { LOCATION_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Asbestos Removal Glasgow",
  description:
    "Safe, compliant asbestos removal in Glasgow — cement garage roofs, Artex, floor tiles and more. Controlled methods, UKATA-trained operatives, certified disposal.",
  path: "/services/asbestos-removal",
});

const schema = serviceSchema({
  name: "Asbestos Removal",
  description:
    "Controlled removal of non-licensed and notifiable non-licensed (NNLW) asbestos across Glasgow, with certified disposal.",
  path: "/services/asbestos-removal",
  serviceType: "Asbestos removal",
});

const MATERIALS = [
  "Asbestos cement sheets & garage roofs",
  "Textured coatings (Artex)",
  "Vinyl floor tiles & adhesives",
  "Asbestos cement flues, gutters & downpipes",
  "Cold water tanks",
  "Rope seals & gaskets",
  "Bitumen products",
];

const GALLERY = [
  {
    src: "/images/thumb-1.avif",
    alt: "Controlled asbestos work area with air filtration units, Glasgow project",
  },
  {
    src: "/images/thumb-2.avif",
    alt: "Sheeted enclosure and controlled access point during asbestos removal",
  },
  {
    src: "/images/thumb-3.avif",
    alt: "UKATA-trained operative removing asbestos cement under controlled conditions",
  },
  {
    src: "/images/thumb-4.avif",
    alt: "Double-bagged asbestos waste prepared for certified disposal",
  },
];

const FAQS: FAQ[] = [
  {
    question: "Are you HSE licensed?",
    answer: LICENSING_FAQ_ANSWER,
  },
  {
    question: "Do I have to move out during removal?",
    answer:
      "Usually not. We isolate the work area with sheeting and controlled access so the rest of your property stays usable. For larger jobs we'll agree timings and any temporary no-go areas with you in advance.",
  },
  {
    question: "How long does removal take?",
    answer:
      "Many domestic jobs — a garage roof or an Artex ceiling — are completed in a day. Larger or phased works are scheduled around access and disposal, and we give you a clear timeline with your fixed quote.",
  },
  {
    question: "Can you remove my garage roof?",
    answer:
      "Yes — corrugated asbestos cement garage and shed roofs are core non-licensed work for us, and the job we're called out to most across Glasgow. Sheets come off whole where possible, wrapped in 1000-gauge polythene and taken to a licensed waste facility with full documentation. A single garage roof typically runs £400–£800 including disposal and is usually finished in a day. Our garage roof removal page covers the method, the prices and what to do if a sheet has already broken.",
  },
];

export default function AsbestosRemovalPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Services"
        title="Safe, Compliant Asbestos Removal in Glasgow"
        intro={REMOVAL_SCOPE_PARAGRAPH}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Asbestos Removal", href: "/services/asbestos-removal" },
        ]}
      />

      {/* Three-tier explainer */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Know Where You Stand"
            title="Licensed, Notifiable & Non-Licensed Work — Explained"
            intro="Almost no contractor explains this clearly. We do — because knowing which category your material falls into is the difference between a safe, legal job and a serious risk."
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

      {/* Materials we remove */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Scope" title="Materials We Remove" />
          <div className="mt-10 rounded-2xl border border-line bg-surface p-8">
            <FeatureList items={MATERIALS} columns={2} />
          </div>
          <p className="mt-6 max-w-3xl text-slate-600">
            We deliberately don&rsquo;t remove licensable materials — thermal
            lagging, sprayed coatings and most asbestos insulating board.{" "}
            {LICENSABLE_REFERRAL}
          </p>
          <p className="mt-4 max-w-3xl text-slate-600">
            The single most common job we&rsquo;re called out to in Glasgow has
            its own page:{" "}
            <Link
              href="/services/asbestos-garage-roof-removal"
              className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
            >
              asbestos garage roof removal
            </Link>
            , with typical prices, the method and what to do if a sheet has
            already cracked.
          </p>
        </Container>
      </section>

      {/* Glasgow districts */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Across The City"
            title="Asbestos removal across Glasgow"
            intro="One city, four or five completely different sets of building stock. What we find — and what a job costs — depends more on which part of Glasgow you're in than most people expect."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-5 leading-relaxed text-slate-600">
              <p>
                In the <strong className="font-semibold text-brand-950">West End</strong>{" "}
                — Hillhead, Partick, Hyndland, Dowanhill — the sandstone went up
                long before asbestos reached a building site, so the material
                always arrives with later work. Textured coatings on ceilings
                from a 70s refit, thermoplastic tiles under the kitchen lino,
                cement flues out the back of a decommissioned boiler, and cement
                sheeting on the back-court bin stores and wash houses. The work
                is rarely complicated; the access is, because everything has to
                come down a shared close and out past a resident&rsquo;s parking
                bay.
              </p>
              <p>
                The <strong className="font-semibold text-brand-950">Southside</strong>{" "}
                splits in two. Shawlands, Battlefield and Strathbungo repeat the
                tenement pattern, while Newlands, Cathcart, Muirend and out
                towards Giffnock are interwar and post-war semis and bungalows
                with the thing we get called about most: a detached asbestos
                cement garage on a driveway, often with matching side panels and
                a coal store to match.
              </p>
              <p>
                The <strong className="font-semibold text-brand-950">East End</strong>{" "}
                — Dennistoun, Bridgeton, Parkhead, Shettleston, Baillieston —
                mixes surviving tenements with post-war redevelopment and a
                great deal of small light-industrial property. Rear-lane
                lock-ups are the local speciality, and they are the fiddliest
                garage roofs in the city to get a vehicle near.
              </p>
            </div>
            <div className="space-y-5 leading-relaxed text-slate-600">
              <p>
                The post-war schemes are the most predictable work of all.
                Drumchapel, Castlemilk, Easterhouse, Pollok, Knightswood,
                Cardonald, Springburn, Possilpark and Maryhill were built
                through the 1950s and 60s, when asbestos cement was simply what
                you used for anything that lived outdoors. That means outhouse
                and drying-area roofs, coal bunkers, bin shelters, whole garage
                courts, soffits under the eaves and flat cladding panels on
                gable ends — usually bonded material in fair condition, which
                is the straightforward end of what we do.
              </p>
              <p>
                In the{" "}
                <strong className="font-semibold text-brand-950">
                  city centre and Merchant City
                </strong>
                , it is commercial property and conversions: offices, licensed
                premises, retail units and upper floors turned into flats. Here
                the duty to manage under CAR 2012 Regulation 4 bites, and the
                first question is usually not what to remove but whether an
                asbestos register exists at all.
              </p>
              <p>
                Wherever the property sits inside the city boundary, the rate is
                the same — nobody pays a premium for a postcode.{" "}
                <Link
                  href="/contact#quote-form"
                  className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
                >
                  Tell us the postcode and the material
                </Link>{" "}
                and we will confirm coverage and the sensible next step before
                anybody arranges a visit. Outside the city, the surrounding
                towns each have their own page.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-eco-700">
              Beyond the city boundary
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {LOCATION_LINKS.map((town) => (
                <Link
                  key={town.href}
                  href={town.href}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-5 py-3 font-medium text-brand-950 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-700/25 hover:text-brand-700"
                >
                  <MapPin className="h-4 w-4 text-eco-700" aria-hidden="true" />
                  {town.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Removal process — the "Anatomy of a Safe Removal" scroll story (M2.6).
          The id anchors the homepage process section's cross-link. */}
      <section id="removal-story" className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="On Your Property"
            title="Anatomy of a Safe Removal"
            intro="From plan of work to certified disposal, here's exactly what happens on your property — stage by stage."
          />
          <div className="mt-12">
            <RemovalStory />
          </div>
        </Container>
      </section>

      {/* Site gallery */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Proof, Not Promises" title="Site Gallery" />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {GALLERY.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-line shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Asbestos removal FAQs"
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
            title="Before and after removal"
            links={[
              {
                label: "Garage Roof Removal",
                href: "/services/asbestos-garage-roof-removal",
                description:
                  "Glasgow's most common asbestos job — prices, method and timings.",
              },
              {
                label: "Asbestos Testing",
                href: "/services/asbestos-testing",
                description:
                  "Not yet confirmed? One sample settles it before anyone quotes.",
              },
              {
                label: "Asbestos Removal Costs",
                href: "/guides/asbestos-removal-cost",
                description:
                  "What removal typically costs in 2026, and what moves the price.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
