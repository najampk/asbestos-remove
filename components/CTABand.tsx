import Link from "next/link";
import { Phone, TriangleAlert } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

// Full-width gradient band before the footer on every page (SPEC.md §1.4 / §4.2).
export default function CTABand() {
  return (
    <section
      aria-labelledby="cta-band-heading"
      className="gradient-cta relative overflow-hidden"
    >
      <div className="containment-grid absolute inset-0 opacity-40" aria-hidden="true" />
      {/* Soft glow so the flat gradient reads with depth */}
      <div
        className="absolute inset-0 bg-[radial-gradient(38rem_20rem_at_50%_0%,rgb(255_255_255/0.14),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-14 text-center text-white sm:px-6 sm:py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] backdrop-blur-sm">
          <TriangleAlert className="h-3.5 w-3.5" aria-hidden="true" />
          Safety first
        </span>
        <h2
          id="cta-band-heading"
          className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Think you&rsquo;ve found asbestos? Don&rsquo;t disturb it.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">
          Leave the area, avoid touching the material, and call our Glasgow team
          for fast, professional advice.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-card-hover active:translate-y-0"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
          <Link
            href="/contact#quote-form"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 active:translate-y-0"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
