import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import { FAQ_NON_LICENSED_SCOPE_ANSWER } from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industrial Asbestos Removal Scotland",
  description:
    "Large-scale industrial asbestos removal across Glasgow & Scotland — cement roofs, cladding & more. Controlled methods, CDM coordination, certified disposal.",
  path: "/sectors/industrial",
});

const CAPABILITIES = [
  "Asbestos cement roof & cladding strip at height",
  "Protected work zones with controlled access & air filtration",
  "Live-environment working alongside site operations",
  "Cement gutters, flues & downpipe removal",
  "Demolition-phase strip-outs (R&D survey led, non-licensed scope)",
  "Plant & machinery decontamination",
];

const COMPLIANCE = [
  "NNLW notifications handled",
  "RAMS & plans of work per phase",
  "Daily records & air monitoring logs",
  "Visual inspections with reassurance air testing available",
  "Consignment-noted waste streams",
];

const SECTORS_SERVED = [
  "Manufacturing",
  "Distribution & logistics",
  "Energy & utilities",
  "Marine & rail",
  "Demolition contractors (subcontract removal packages)",
];

const GALLERY = [
  {
    src: "/images/thumb-3.avif",
    alt: "Bank of negative pressure units serving a large industrial asbestos enclosure",
  },
  {
    src: "/images/thumb-5.avif",
    alt: "Interior of a sheeted industrial enclosure with controlled access during asbestos removal",
  },
];

const FAQS: FAQ[] = [
  {
    question: "Can production continue during removal?",
    answer:
      "Often yes. We build protected work zones with controlled access and air filtration so removal runs alongside your operations, phasing the works and agreeing exclusion areas so production keeps moving.",
  },
  {
    question: "Which materials fall within non-licensed scope?",
    answer: FAQ_NON_LICENSED_SCOPE_ANSWER,
  },
  {
    question: "Do you work as a subcontractor to principal contractors?",
    answer:
      "Yes. We regularly deliver subcontract removal packages on demolition and refurbishment projects, coordinating under CDM 2015 with your principal contractor and fitting our programme to yours.",
  },
  {
    question: "When is notification required?",
    answer:
      "Notifiable non-licensed work (NNLW) requires notification to the enforcing authority before work starts, along with record-keeping and health surveillance. We identify what's notifiable from the survey and handle the notifications for you.",
  },
];

export default function IndustrialSectorPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Industrial Asbestos Removal Across Glasgow & Scotland"
        intro="Industrial asbestos work demands scale and discipline: protected work zones, controlled access, air filtration and tight programme control. Our UKATA-trained teams deliver large-scale non-licensed and notifiable asbestos removal — cement roofs, cladding, gutters and flues — on factories, warehouses and demolition-phase projects Scotland-wide."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors/domestic" },
          { label: "Industrial", href: "/sectors/industrial" },
        ]}
      />

      {/* Capabilities */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Scale & Discipline" title="Capabilities" />
          <div className="mt-10 rounded-2xl border border-line bg-white p-8 shadow-card">
            <FeatureList items={CAPABILITIES} columns={2} />
          </div>
        </Container>
      </section>

      {/* Compliance + gallery */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Programme Control"
              title="Compliance & Programme Control"
            />
            <div className="mt-8">
              <FeatureList items={COMPLIANCE} />
            </div>
          </div>
          <div className="grid gap-4">
            {GALLERY.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-line shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
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

      {/* Sectors served */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Industries" title="Sectors Served" />
          <div className="mt-10 rounded-2xl border border-line bg-surface p-8">
            <FeatureList items={SECTORS_SERVED} columns={2} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Industrial asbestos FAQs"
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
            title="Related services"
            links={[
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description: "Our controlled, non-licensed removal methods in detail.",
              },
              {
                label: "Certified Disposal",
                href: "/services/asbestos-disposal",
                description: "Consignment-noted waste streams to licensed facilities.",
              },
              {
                label: "Asbestos Management",
                href: "/services/asbestos-management",
                description: "Ongoing registers and compliance for industrial estates.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
