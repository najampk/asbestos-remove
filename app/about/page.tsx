import { BadgeCheck, Truck, FileCheck, Wrench } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import { BUSINESS } from "@/lib/constants";
import { SCOPE_STATEMENT, LICENSABLE_REFERRAL, PLACEHOLDERS } from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Asbestos Remove | Glasgow Asbestos Specialists",
  description:
    "Meet Asbestos Removal Environmental Ltd — Glasgow asbestos specialists led by 30+ years of industry experience. UKATA-trained team and a safety-first culture.",
  path: "/about",
  titleAbsolute: true,
});

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    label: "UKATA-Trained Operatives",
    body: "Every operative holds current UKATA asbestos training, so the people on your site know exactly how to work safely and legally.",
  },
  {
    icon: Truck,
    label: `SEPA Registered Waste Carrier ${PLACEHOLDERS.wasteCarrierNo}`,
    body: "Registered with SEPA to transport waste in Scotland, so asbestos waste is contained, transported and tracked to an appropriately authorised facility with the applicable paperwork.",
  },
  {
    icon: FileCheck,
    label: "Clear Project Records",
    body: "We provide the applicable project and waste documentation for your records.",
  },
  {
    icon: Wrench,
    label: "Certified Plumber & Joiner In-House",
    body: "The team includes a certified plumber and a certified joiner, both asbestos trained — so jobs that involve pipework, boarding or timber get safe strip-out and tidy reinstatement from one team.",
  },
];

const VALUES = [
  {
    title: "Safety without shortcuts",
    body: "Controlled methods, trained people and the right equipment — every time, no exceptions.",
  },
  {
    title: "Honest, fixed pricing",
    body: "Clear written quotes with no surprises, and straight advice on what we can and can't do.",
  },
  {
    title: "Paperwork you can rely on",
    body: "Registers, certificates and consignment notes that stand up to insurers and auditors.",
  },
];

const AREAS = [
  "Glasgow",
  "Paisley",
  "Hamilton",
  "Motherwell",
  "East Kilbride",
  "Clydebank",
  "Cumbernauld",
  "Livingston",
  "Edinburgh",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Glasgow's Safety-First Asbestos Specialists"
        intro={`Asbestos Remove is the trading name of ${BUSINESS.legalName}, a Glasgow asbestos contractor headquartered at the SMK Business Centre. The company is led by founder ${BUSINESS.founder}, who brings over 30 years of hands-on industry experience across domestic, commercial and industrial asbestos work.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Our standards */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Our Standards" title="Credentials that mean something for you" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {CREDENTIALS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="group flex gap-4 rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-card-hover"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700/10 to-eco-500/10 text-brand-700 ring-1 ring-inset ring-brand-700/10 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-mono text-sm font-medium uppercase tracking-wide text-brand-950">
                      {c.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {c.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Honest scope paragraph */}
          <div className="mt-8 rounded-2xl border border-line bg-surface p-8">
            <p className="text-lg leading-relaxed text-slate-600">
              {SCOPE_STATEMENT} {LICENSABLE_REFERRAL}
            </p>
          </div>
        </Container>
      </section>

      {/* Our values */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="What Drives Us" title="Our Values" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card-hover"
              >
                <span
                  className="gradient-hairline absolute inset-x-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg font-bold text-brand-950">
                  {v.title}
                </h3>
                <p className="mt-3 text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Where we work */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Service Area"
            title="Where We Work"
            intro="Glasgow-based and covering the surrounding areas, with industrial projects undertaken Scotland-wide."
          />
          <div className="mt-10 rounded-2xl border border-line bg-surface p-8">
            <FeatureList items={AREAS} columns={2} />
          </div>
        </Container>
      </section>
    </>
  );
}
