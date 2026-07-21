import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { PLACEHOLDERS } from "@/lib/claims";

export const metadata = buildMetadata({
  title: "Certified Asbestos Disposal Glasgow",
  description:
    "Fully certified asbestos disposal in Glasgow. SEPA-compliant collection, consignment notes and licensed facility disposal. No risk left behind. Call 07960 881102.",
  path: "/services/asbestos-disposal",
});

const schema = serviceSchema({
  name: "Certified Asbestos Disposal",
  description:
    "Fully documented asbestos waste disposal across Glasgow — registered carrier transport, SEPA consignment notes and licensed-facility disposal.",
  path: "/services/asbestos-disposal",
  serviceType: "Asbestos disposal",
});

const WHATS_INCLUDED = [
  "UN-approved double bagging & sealed containment",
  `SEPA registered waste carrier transport (${PLACEHOLDERS.wasteCarrierNo})`,
  "SEPA consignment notes",
  "Disposal at licensed transfer/landfill facilities",
  "Certificates retained & copied to you",
];

const FAQS: FAQ[] = [
  {
    question: "Can I take asbestos to the tip myself?",
    answer:
      "Most household waste and recycling centres do not accept asbestos, and those that do require it correctly double-bagged and pre-booked. Because asbestos is special (hazardous) waste, using a registered carrier keeps you on the right side of your duty of care.",
  },
  {
    question: "Do you provide an asbestos disposal certificate in Glasgow?",
    answer:
      "Yes — though the document you actually want is the special waste consignment note, which is the one with legal standing in Scotland. It records the waste type and EWC code, the producer, the carrier and the licensed facility that received it, and you keep a copy. Along with our waste carrier registration and, where relevant, the removal records, that's the complete evidence trail. Anyone offering a 'certificate' without a consignment note behind it is offering you a piece of paper, not proof.",
  },
  {
    question: "What paperwork do I get?",
    answer:
      "You receive SEPA consignment notes and a disposal certificate confirming the waste reached a licensed facility. We keep copies too, so the paper trail is there for property sales, audits or insurers.",
  },
  {
    question: "Do you collect from domestic properties?",
    answer:
      "Yes. For pre-bagged cement products or removal arisings we offer scheduled or same-week collection across Glasgow — handled safely and documented end to end.",
  },
  {
    question: "How is asbestos waste packaged?",
    answer:
      "Waste is wetted, wrapped and double-bagged in UN-approved packaging — an inner red asbestos bag and an outer clear bag — then sealed and labelled before sealed transport to a licensed facility.",
  },
];

export default function AsbestosDisposalPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Services"
        title="Certified Asbestos Disposal in Glasgow"
        intro="Asbestos waste is classified as special (hazardous) waste in Scotland and must be transported by a registered carrier and disposed of at a licensed facility. We handle the entire chain — double-bagging, sealed transport, consignment notes and disposal certificates — so your legal duty of care is fully discharged."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Asbestos Disposal", href: "/services/asbestos-disposal" },
        ]}
      />

      {/* What's included */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="End To End" title="What's Included" />
          <div className="mt-10 rounded-2xl border border-line bg-white p-8 shadow-card">
            <FeatureList items={WHATS_INCLUDED} columns={2} />
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              Our SEPA registration ({PLACEHOLDERS.wasteCarrierNo}) authorises
              us to transport waste in Scotland under The Environmental
              Authorisations (Scotland) Regulations 2018 — final disposal is
              carried out at separately licensed facilities.
            </p>
          </div>
        </Container>
      </section>

      {/* Collection + why it matters */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Convenient" title="Collection Service" as="h2" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              For pre-bagged cement products or removal arisings, we offer
              scheduled or same-week collection across Glasgow. Tell us what you
              have and where it is, and we&rsquo;ll arrange safe, documented
              uplift and disposal.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Duty Of Care"
              title="Why Certified Disposal Matters"
              as="h2"
            />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Under the Environmental Protection Act 1990 you have a duty of care
              for waste you produce. Fly-tipped asbestos liability stays with the
              producer — and correct paperwork protects you in property sales and
              audits. Certified disposal means no risk is left behind.
            </p>
          </div>
        </Container>
      </section>

      {/* The certificate question */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Your Paperwork"
            title="Asbestos disposal certificates, explained"
          />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            <p>
              People ring us asking for a &ldquo;disposal certificate&rdquo;,
              and it&rsquo;s worth being precise about what that is, because
              the wrong document proves nothing. There is no single certificate
              issued by a government body at the end of an asbestos job. The
              document that actually carries legal weight in Scotland is the{" "}
              <strong className="text-brand-950">
                special waste consignment note
              </strong>{" "}
              — raised before the waste moves, travelling with it, and recording
              what the waste is, the European Waste Catalogue code (17 06 05 for
              cement products, for example), who produced it, who carried it,
              and which licensed facility received it.
            </p>
            <p>
              You get a copy, and you keep it. Three years is the recommended
              minimum, though for a property you own it&rsquo;s worth keeping
              indefinitely: the consignment note is what answers a buyer&rsquo;s
              solicitor, an insurer or a SEPA officer asking what happened to
              the garage roof, sometimes long after everyone has forgotten the
              job. Alongside it we provide the waste carrier registration
              details and, where the job warrants it, the removal method and
              site records — which together are what most people mean when they
              say &ldquo;certificate&rdquo;.
            </p>
            <p>
              The test to apply to any contractor is simple. Ask, before the
              waste leaves your property, for the carrier registration number
              and the name of the receiving site. A legitimate operator answers
              on the spot; ours is on the bottom of every page of this site. A
              collector who offers a handwritten receipt, or who gets vague
              about which tip it&rsquo;s going to, isn&rsquo;t offering disposal
              — and because the duty of care under the Environmental Protection
              Act 1990 stays with whoever produced the waste, it&rsquo;s your
              name on the trail when it turns up in a lay-by.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Asbestos disposal FAQs"
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
                description:
                  "Removal and disposal handled together, with one paper trail.",
              },
              {
                label: "Asbestos Disposal Rules",
                href: "/guides/asbestos-disposal-rules-scotland",
                description:
                  "Special waste law in Scotland — wrapping, paperwork and your duty of care.",
              },
              {
                label: "Asbestos Surveys",
                href: "/services/asbestos-surveys",
                description:
                  "Not sure what you have? Identify it before arranging disposal.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
