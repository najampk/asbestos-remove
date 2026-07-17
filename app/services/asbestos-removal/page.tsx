import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
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
      "Yes. Corrugated asbestos cement garage and shed roofs are core non-licensed work for us — removed whole where possible, wrapped in 1000 gauge polythene and taken to a licensed waste facility with full documentation.",
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
        </Container>
      </section>

      {/* Removal process — the "Anatomy of a Safe Removal" scroll story (M2.6).
          The id anchors the homepage process section's cross-link. */}
      <section id="removal-story" className="py-16 sm:py-20">
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
      <section className="bg-white py-16 sm:py-20">
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
      <section className="py-16 sm:py-20">
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
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <RelatedLinks
            title="Before and after removal"
            links={[
              {
                label: "Asbestos Surveys",
                href: "/services/asbestos-surveys",
                description:
                  "Not yet confirmed? Identify and sample suspect materials first.",
              },
              {
                label: "Certified Disposal",
                href: "/services/asbestos-disposal",
                description:
                  "Every removal ends with tracked, certified waste disposal.",
              },
              {
                label: "Industrial Sector",
                href: "/sectors/industrial",
                description:
                  "Large-scale removal for factories, warehouses and plant.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
