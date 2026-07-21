import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import Button from "@/components/Button";
import { LOCATION_SCOPE_NOTE } from "@/lib/claims";
import { BUSINESS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { serviceSchema } from "@/lib/schema";
import { otherLocations, type Location } from "@/lib/locations";

// Shared shell for the §7.1 location pages. Every word of substance comes from
// the Location record — this file only decides where it sits on the page, so a
// town page can never quietly become a template with the name swapped out.
export default function LocationPage({ location }: { location: Location }) {
  const {
    slug,
    town,
    council,
    heroIntro,
    stockHeading,
    stock,
    coverage,
    faqs,
  } = location;

  const schema = serviceSchema({
    name: `Asbestos Removal in ${town}`,
    description: heroIntro,
    path: `/${slug}`,
    serviceType: "Asbestos removal",
    areaServed: [
      { type: "City", name: town },
      { type: "AdministrativeArea", name: council },
    ],
  });

  const siblings = otherLocations(slug);

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow={`${council} · Areas We Cover`}
        title={`Asbestos Removal in ${town}`}
        intro={heroIntro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: `Asbestos Removal ${town}`, href: `/${slug}` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/contact#quote-form">
            Get a free fixed quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <a
            href={BUSINESS.phoneHref}
            className="font-mono text-sm text-white/80 transition-colors hover:text-white"
          >
            Or call {BUSINESS.phoneDisplay} — 24/7
          </a>
        </div>
      </PageHero>

      {/* Local building stock — the unique copy (SPEC.md §7.1) */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Local Knowledge" title={stockHeading} />
          <div className="mt-8 space-y-5 leading-relaxed text-slate-600">
            {stock.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title={`Our services in ${town}`}
            intro="The same four services we run across the city region, delivered by the same team to the same standard."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ href, title, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700/8 text-brand-700 ring-1 ring-inset ring-brand-700/15">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-4 flex-1 font-display font-bold text-brand-950 transition-colors duration-300 group-hover:text-brand-700">
                  {title}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10 max-w-3xl leading-relaxed text-slate-600">
            {LOCATION_SCOPE_NOTE}
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            If material in {town} has already been damaged or disturbed, that
            skips the queue —{" "}
            <Link
              href="/services/emergency-asbestos-removal"
              className="font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-950"
            >
              our 24-hour emergency page
            </Link>{" "}
            sets out what to do in the first five minutes, and the phone line is
            answered whatever the hour.
          </p>
        </Container>
      </section>

      {/* Coverage */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Getting To You"
            title={`How we cover ${town}`}
          />
          <p className="mt-8 leading-relaxed text-slate-600">{coverage}</p>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-surface p-6">
            <MapPin
              className="mt-0.5 h-5 w-5 shrink-0 text-eco-700"
              aria-hidden="true"
            />
            <p className="leading-relaxed text-slate-600">
              Not sure whether your postcode is covered? Tell us where the
              property is and what you think you&rsquo;re dealing with — we
              confirm coverage and the sensible next step before anybody
              arranges a visit. Advice on the phone is free and comes without a
              hard sell.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title={`Asbestos questions from ${town}`}
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      {/* Sibling towns */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Nearby" title="Other areas we cover" />
          <div className="mt-8 flex flex-wrap gap-3">
            {siblings.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-5 py-3 font-medium text-brand-950 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-700/25 hover:text-brand-700"
              >
                <MapPin className="h-4 w-4 text-eco-700" aria-hidden="true" />
                {other.town}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Cross-links */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <RelatedLinks
            title="Before you book anything"
            links={[
              {
                label: "How to Identify Asbestos",
                href: "/guides/how-to-identify-asbestos",
                description:
                  "Read the clues by property age and material before spending a penny.",
              },
              {
                label: "Asbestos Removal Costs",
                href: "/guides/asbestos-removal-cost",
                description:
                  "Real 2026 price ranges, per-square-metre rates and what moves a quote.",
              },
              {
                label: "Clarity Check",
                href: "/clarity-check",
                description:
                  "Explore a typical property and see where asbestos usually hides.",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
