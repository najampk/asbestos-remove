import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Asbestos Services Glasgow",
  description:
    "Complete asbestos services in Glasgow: surveys & testing, compliant removal, certified disposal and ongoing management plans. Free fixed quotes — 07960 881102.",
  path: "/services",
});

const DECISION_HELPER = [
  {
    situation: "Found suspect material",
    action: "Start with a Survey",
    href: "/services/asbestos-surveys",
  },
  {
    situation: "Confirmed asbestos",
    action: "Book Removal",
    href: "/services/asbestos-removal",
  },
  {
    situation: "Already removed or bagged",
    action: "Arrange Disposal",
    href: "/services/asbestos-disposal",
  },
  {
    situation: "Asbestos staying in place",
    action: "Set up Management",
    href: "/services/asbestos-management",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Asbestos Services in Glasgow"
        intro="From first suspicion to final documentation, Asbestos Remove provides every asbestos service under one roof — surveying, compliant removal, certified disposal and long-term management — across Glasgow and surrounding areas."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Service cards (detailed) */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} detailed />
            ))}
          </div>
        </Container>
      </section>

      {/* Decision helper */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Point Me In The Right Direction"
            title="Not sure what you need?"
            intro="Tell us where you are and we'll steer you to the right service — or just call and we'll advise, free of charge."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DECISION_HELPER.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white hover:shadow-card-hover"
              >
                <span
                  className="gradient-hairline absolute inset-x-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-600">
                  {item.situation}
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 font-display text-lg font-semibold text-brand-950 transition-colors duration-300 group-hover:text-brand-700">
                  {item.action}
                  <ArrowRight
                    className="h-4 w-4 text-brand-700 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Mini process strip */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="A Clear, Documented Process"
            title="Every job follows the same disciplined sequence"
            align="center"
          />
          <ol className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 font-mono text-sm text-slate-600">
            {[
              "Enquiry",
              "Survey",
              "Plan",
              "Removal",
              "Air Test",
              "Certificate",
            ].map((step, i, arr) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-line bg-white px-4 py-2 text-brand-950 shadow-card transition-colors duration-200 hover:border-brand-500/40">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight
                    className="h-4 w-4 text-brand-700"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
