import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck2, MapPin, Phone, ShieldCheck } from "lucide-react";
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
import SafetyTriage from "@/components/SafetyTriage";
import ServiceArea from "@/components/ServiceArea";
import { SERVICES } from "@/lib/services";
import { SECTORS } from "@/lib/sectors";
import { PROCESS_STEPS } from "@/lib/process";
import { BUSINESS } from "@/lib/constants";
import {
  HOMEPAGE_SCOPE_PARAGRAPH,
  LICENSABLE_REFERRAL,
  LICENSING_FAQ_ANSWER,
  FAQ_SELF_REMOVAL_ANSWER,
} from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";

// The homepage title is the one place the registered company name can sit at
// full weight without breaking the ≤60-char rule on every other page, so it
// carries both the head keyword and the brand people search by name.
export const metadata = buildMetadata({
  title: "Asbestos Removal Glasgow | Asbestos Removal Environmental",
  description:
    "Asbestos Removal Environmental Ltd — safe, compliant asbestos removal, surveys, testing and disposal across Glasgow. UKATA-trained team. Call 07960 881102.",
  path: "/",
  titleAbsolute: true,
});

const WHY_US: string[] = [
  "30+ years of hands-on industry experience",
  "UKATA-trained, vetted operatives",
  "Certified plumber & joiner on the team — both asbestos trained",
  "Fixed, transparent quotes — no surprises",
  "Honest advice on what we can and can't remove",
  "Full waste documentation supplied",
  "Glasgow-based, fast local response",
  "Available 24 hours a day, 7 days a week",
];

/**
 * The specific jobs people search for by name, rather than the four broad
 * service categories. Each points at the page that answers that search in full.
 */
const SPECIFIC_JOBS: { label: string; description: string; meta: string; href: string }[] = [
  {
    label: "Asbestos garage roof removal",
    description:
      "Grey corrugated cement sheeting on a garage, shed or coal store — taken off whole, wrapped and disposed of with the paperwork.",
    meta: "From £400 · usually one day",
    href: "/services/asbestos-garage-roof-removal",
  },
  {
    label: "Asbestos testing",
    description:
      "A sample collected at your property and analysed by a UKAS-accredited laboratory. Nothing else confirms asbestos.",
    meta: "From £25 · same-day attendance",
    href: "/services/asbestos-testing",
  },
  {
    label: "Artex & textured ceilings",
    description:
      "Test first, then remove. Asbestos and asbestos-free Artex look identical from a stepladder.",
    meta: "£25–£50 per m²",
    href: "/services/asbestos-removal",
  },
  {
    label: "Asbestos surveys",
    description:
      "HSG264 management and refurbishment/demolition surveys, with the register and recommendations you can act on.",
    meta: "Before the builders start",
    href: "/services/asbestos-surveys",
  },
  {
    label: "Damaged or disturbed asbestos",
    description:
      "A sheet broken in a storm, or a contractor who cut into something. Stop, keep everyone out, and ring.",
    meta: "24-hour line · free triage",
    href: "/services/emergency-asbestos-removal",
  },
  {
    label: "Disposal & collection",
    description:
      "Already down and wrapped? We uplift it as a registered carrier and hand you the consignment note.",
    meta: "SEPA registered carrier",
    href: "/services/asbestos-disposal",
  },
];

const HOME_FAQS: FAQ[] = [
  {
    question: "How much does asbestos removal cost in Glasgow?",
    answer:
      "It depends on material type, condition, location and quantity — a garage roof differs greatly from pipe lagging in a boiler room. Every job is quoted individually after an assessment, and quotes are free and fixed.",
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
    question: "Which areas of Glasgow and Scotland do you cover?",
    answer:
      "The whole of the City of Glasgow at a single rate — West End, Southside, East End, the north of the city and the post-war schemes alike, from Hillhead and Partick to Shawlands, Dennistoun, Knightswood, Cardonald, Castlemilk and Drumchapel. Beyond the city boundary we cover Paisley, Hamilton, Motherwell, East Kilbride, Clydebank and Cumbernauld, as well as Livingston, Edinburgh and further afield, with Scotland-wide coverage for commercial and industrial projects. Nobody pays a premium for a postcode.",
  },
  {
    question: "How much does asbestos garage roof removal cost in Glasgow?",
    answer:
      "A single garage roof typically runs £400–£800 including disposal and the waste paperwork, a double or larger roof £700–£1,200, and a full garage demolition £800–£1,500. Condition moves the price more than size does — sheets that unbolt and lift whole are a morning's work, while cracked or previously patched sheets need slower handling. Most single garages are cleared in a day.",
  },
  {
    question: "Do you offer emergency asbestos removal?",
    answer: `If asbestos has been damaged or disturbed, stop work, keep people out of the area and call us on ${BUSINESS.phoneDisplay} — our line is open 24 hours a day. Urgent situations are prioritised — we'll tell you straight away how to make the area safe, then arrange the survey or removal that follows.`,
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
              UKATA-Trained Specialists · Glasgow &amp; All of Scotland
            </p>
            {/* SEPA registration renders once, in the TrustBar directly below */}
            <h1 className="h1-fluid mt-5 font-display font-bold text-white">
              Safe, Compliant, Efficient Asbestos Removal in Glasgow &amp;
              Across Scotland
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Clear advice, asbestos surveys and controlled non-licensed and
              notifiable non-licensed work for homes, businesses and industrial
              sites across Glasgow and all of Scotland.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact#quote-form" variant="primary">
                Get a Free Quote
              </Button>
              <Button href={BUSINESS.phoneHref} variant="outlineLight" external>
                <Phone className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phoneDisplay}
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/70">Free, no-obligation enquiry · Available 24/7 · Glasgow-based team</p>
          </div>
        </Container>
      </section>
      <TrustBar tone="onLight" />
      <SafetyTriage />

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="gradient-hero relative overflow-hidden rounded-3xl p-7 text-white shadow-card-hover sm:p-10">
            <div className="containment-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-eco-400">A clearer first step</p>
                <h2 className="mt-3 font-display text-3xl font-bold">Not sure what service you need?</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/80">Use the free Glasgow Asbestos Clarity Check. Describe the property, your plans and the suspected material to receive safety-first guidance and an honest indication of what should happen next.</p>
                <Button href="/clarity-check" variant="white" className="mt-6">Start the 2-minute check <ArrowRight className="h-4 w-4" aria-hidden="true" /></Button>
              </div>
              <ul className="grid gap-3 text-sm">
                <li className="flex gap-3 rounded-xl border border-white/15 bg-white/8 p-4"><ShieldCheck className="h-5 w-5 shrink-0 text-eco-400" aria-hidden="true" /><span>No visual asbestos diagnosis and no unsafe DIY advice</span></li>
                <li className="flex gap-3 rounded-xl border border-white/15 bg-white/8 p-4"><FileCheck2 className="h-5 w-5 shrink-0 text-eco-400" aria-hidden="true" /><span>Printable summary and direct handoff to the Glasgow team</span></li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

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
                    src="/images/asbestos-remove-glasgow-uk.avif"
                    alt="Glasgow — home of Asbestos Remove, serving the city and all of Scotland"
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

      {/* ── Team & consultancy ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={120} className="lg:order-first">
              <div className="relative">
                <div
                  className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-eco-500/10 to-brand-700/10 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-line">
                  <Image
                    src="/images/asbestos-remove-glasgow-uk-consultancy.avif"
                    alt="The Asbestos Remove team carrying out asbestos removal and consultancy work in Glasgow"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/45 via-brand-950/5 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
                    <ShieldCheck className="h-4 w-4 text-eco-700" aria-hidden="true" />
                    <span className="font-mono text-xs font-medium uppercase tracking-wider text-brand-900">
                      UKATA-Trained Team
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <SectionHeading
                eyebrow="An Entire Team Dedicated To"
                title="Asbestos Removal & Consultancy"
              />
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                From the first phone call to the final clearance certificate,
                every job is handled by one dedicated Glasgow team —
                UKATA-trained operatives supported by a certified plumber and
                joiner, both asbestos trained.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                That depth of experience — more than 30 years of it at founder
                level — is why clients also use us as consultants. Surveys,
                registers and asbestos management plans keep homes, businesses
                and duty holders compliant with CAR 2012 long after the work is
                finished.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                {LICENSABLE_REFERRAL} And whatever the job, our
                customer-focused team works in close cooperation with you to
                deliver it safely, on budget and on time.
              </p>
              <div className="mt-8">
                <Button href="/services" variant="outline">
                  Explore our services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
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

          {/* Specific jobs — the searches people actually arrive on */}
          <Reveal>
            <div className="mt-12 rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-eco-700">
                What Glasgow calls us about most
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SPECIFIC_JOBS.map((job) => (
                  <Link
                    key={job.href}
                    href={job.href}
                    className="group flex flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-card-hover"
                  >
                    <span className="font-display text-lg font-semibold text-brand-950 transition-colors duration-300 group-hover:text-brand-700">
                      {job.label}
                    </span>
                    <span className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">
                      {job.description}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-eco-700">
                      {job.meta}
                    </span>
                  </Link>
                ))}
              </div>
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
            intro="Homes built or refurbished before 2000 may contain asbestos-containing materials. Explore common locations, but remember: appearance alone cannot confirm asbestos and suspected material should not be disturbed."
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
            <div className="mt-10">
              <Button
                href="/services/asbestos-removal#removal-story"
                variant="outline"
              >
                See how a controlled removal happens
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
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
                { value: "Glasgow", label: "Local Team" },
                { value: "24/7", label: "Phone Line, Always Open" },
                { value: "30+ yrs", label: "Founder Industry Experience" },
                { value: "SEPA", label: "Registered Waste Carrier" },
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
                  Why Glasgow chooses Asbestos Removal Environmental Ltd
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

      <ServiceArea />

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
