import Image from "next/image";
import { MapPin } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import SectorCard from "@/components/SectorCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import StatStrip from "@/components/StatStrip";
import FeatureList from "@/components/FeatureList";
import FAQAccordion, { type FAQ } from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import PropertyExplorer from "@/components/explorer/PropertyExplorer";
import { SERVICES } from "@/lib/services";
import { SECTORS } from "@/lib/sectors";
import { PROCESS_STEPS } from "@/lib/process";
import { BUSINESS } from "@/lib/constants";
import {
  HOMEPAGE_SCOPE_PARAGRAPH,
  LICENSING_FAQ_ANSWER,
  FAQ_SELF_REMOVAL_ANSWER,
  PLACEHOLDERS,
} from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Asbestos Removal Glasgow | Surveys, Removal & Disposal",
  description:
    "Safe, compliant asbestos removal, surveys, disposal & management across Glasgow. UKATA-trained team, 30+ years' experience, free quotes. Call 07960 881102.",
  path: "/",
  titleAbsolute: true,
});

const WHY_US: string[] = [
  "30+ years of hands-on industry experience",
  "UKATA-trained, vetted operatives",
  "Fixed, transparent quotes — no surprises",
  "Honest advice on what we can and can't remove",
  "Full waste documentation supplied",
  "Glasgow-based, fast local response",
];

const HOME_FAQS: FAQ[] = [
  {
    question: "How much does asbestos removal cost in Glasgow?",
    answer:
      "It depends on material type, condition, location and quantity — a garage roof differs greatly from pipe lagging in a boiler room. Every job is quoted individually after a survey or photo assessment, and quotes are free and fixed.",
  },
  {
    question: "Is it illegal to remove asbestos myself?",
    answer: FAQ_SELF_REMOVAL_ANSWER,
  },
  {
    question: "How do I know if my property contains asbestos?",
    answer:
      "Any building constructed or refurbished before 2000 may contain asbestos. The only reliable confirmation is sampling and laboratory analysis as part of an asbestos survey.",
  },
  {
    question: "Do you cover areas outside Glasgow?",
    answer:
      "Yes — we're Glasgow-based and cover the surrounding areas, with Scotland-wide coverage for commercial and industrial projects.",
  },
  {
    question: "Are you licensed by the HSE?",
    answer: LICENSING_FAQ_ANSWER,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <HeroSlider />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950/95 via-brand-900/90 to-eco-700/70"
          aria-hidden="true"
        />
        <div
          className="containment-grid-dark absolute inset-0 -z-10"
          aria-hidden="true"
        />
        <div className="hero-glow absolute inset-0 -z-10" aria-hidden="true" />
        <div
          className="gradient-hairline absolute inset-x-0 bottom-0 z-10 opacity-70"
          aria-hidden="true"
        />
        <Container className="py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-wider text-eco-400">
              <span
                className="h-px w-8 bg-gradient-to-r from-transparent to-eco-400"
                aria-hidden="true"
              />
              UKATA-Trained Specialists · Glasgow &amp; Surrounding Areas
            </p>
            <h1 className="h1-fluid mt-4 font-display font-bold text-white">
              Safe, Compliant, Efficient Asbestos Removal in Glasgow
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Asbestos Removal Environmental Ltd delivers safe, compliant
              asbestos removal, surveying, disposal and management for homes,
              businesses and industrial sites across Glasgow and beyond.
              Protecting your property. Safeguarding your health.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">
                Get a Free Quote
              </Button>
              <Button href="/services" variant="outlineLight">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <TrustBar tone="onLight" />

      {/* ── Direct-answer GEO block ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <SectionHeading
                eyebrow="Glasgow's Asbestos Safety Specialists"
                title="Honest, compliant asbestos work — done properly"
              />
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {HOMEPAGE_SCOPE_PARAGRAPH}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <div
                  className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-700/10 to-eco-500/10 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-line">
                  <Image
                    src="/images/scotland.avif"
                    alt="Scotland — the area Asbestos Remove covers from its Glasgow base"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/45 via-brand-950/5 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
                    <MapPin className="h-4 w-4 text-eco-700" aria-hidden="true" />
                    <span className="font-mono text-xs font-medium uppercase tracking-wider text-brand-900">
                      Glasgow · Scotland-wide
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Our Comprehensive Asbestos Services"
              align="center"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Sectors ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Who We Work With"
              title="Trusted across homes, businesses and industry"
              align="center"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {SECTORS.map((sector) => (
                <SectorCard key={sector.slug} sector={sector} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Where Asbestos Hides — Property Explorer (M2.5) ──────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Interactive"
            title="Where Asbestos Hides in Glasgow Homes"
            intro="Most Glasgow homes built before 2000 hide asbestos in plain sight. Tap the markers to see what's where, how risky it is, and what to do about it."
            align="center"
          />
          <div className="mt-12">
            <PropertyExplorer />
          </div>
        </Container>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="From Enquiry to Clearance Certificate"
            />
            <div className="mt-12">
              <ProcessTimeline steps={PROCESS_STEPS} />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="gradient-hero relative overflow-hidden py-16 sm:py-20">
        <div
          className="containment-grid-dark absolute inset-0"
          aria-hidden="true"
        />
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <StatStrip
              tone="onDark"
              stats={[
                { value: "100%", label: "CAR 2012 Compliant" },
                { value: "24hr", label: "Quote Turnaround" },
                { value: "30+ yrs", label: "Founder Industry Experience" },
                {
                  value: `£${PLACEHOLDERS.insuranceCover}`,
                  label: "Insurance Cover",
                },
              ]}
            />
          </Reveal>
        </Container>
      </section>

      {/* ── Why choose us ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-card-hover lg:grid-cols-2">
              {/* Fibre-textured brand panel — carries the heading */}
              <div className="relative isolate flex min-h-[320px] flex-col justify-end p-8 sm:p-10 lg:p-12">
                <Image
                  src="/images/asbestos-fibres.avif"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="-z-20 object-cover"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950/95 via-brand-900/85 to-eco-700/75"
                  aria-hidden="true"
                />
                <div
                  className="containment-grid absolute inset-0 -z-10 opacity-15"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-eco-400">
                  Why Choose Us
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Why Glasgow chooses Asbestos Remove
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-white/85">
                  From first survey to final clearance certificate, every job is
                  handled by UKATA-trained operatives working to CAR 2012 — with
                  honest advice at every step.
                </p>
              </div>
              {/* Reasons — clean white column */}
              <div className="flex items-center p-8 sm:p-10 lg:p-12">
                <FeatureList items={WHY_US} columns={1} className="w-full" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Asbestos removal in Glasgow — your questions answered"
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion items={HOME_FAQS} />
          </div>
          <p className="mt-8 text-center text-slate-600">
            Still unsure? Call our Glasgow team on{" "}
            <a
              href={BUSINESS.phoneHref}
              className="font-semibold text-brand-700 hover:text-brand-500"
            >
              {BUSINESS.phoneDisplay}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
