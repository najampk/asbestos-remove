import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { SERVICE_AREAS, LOCATION_LINKS } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section className="section-muted py-16 sm:py-20" aria-label="Glasgow service area">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Local coverage" title="Glasgow-based, serving the wider city region" />
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">We support homeowners, landlords, property factors and organisations across Glasgow and neighbouring areas. Commercial and industrial projects can be considered across Scotland.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">Tell us the property postcode and the material or work involved. We’ll confirm coverage and the appropriate next step before arranging a visit.</p>
            <Button href="/contact#quote-form" variant="outline" className="mt-6">
              Check coverage for your postcode
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <div className="mt-8">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-eco-700">
                Town pages
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-slate-600">
                {LOCATION_LINKS.map((town, i) => (
                  <li key={town.href} className="flex items-center gap-2">
                    <Link
                      href={town.href}
                      className="font-medium underline decoration-eco-500/40 underline-offset-4 transition-colors hover:text-brand-700"
                    >
                      {town.label}
                    </Link>
                    {i < LOCATION_LINKS.length - 1 && (
                      <span aria-hidden="true" className="text-line">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Core service areas">
            {SERVICE_AREAS.map((area) => <li key={area} className="flex min-h-14 items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 font-medium text-brand-950 shadow-card"><MapPin className="h-4 w-4 shrink-0 text-eco-700" aria-hidden="true" />{area}</li>)}
          </ul>
        </div>
      </Container>
    </section>
  );
}
