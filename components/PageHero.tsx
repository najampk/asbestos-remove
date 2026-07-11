import Container from "@/components/Container";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

// Inner-page hero on the gradient-hero background with the containment-grid motif.
// `intro` carries the ≤50-word direct-answer GEO block (SPEC.md §3.3).
export default function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div
        className="containment-grid-dark absolute inset-0"
        aria-hidden="true"
      />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div
        className="gradient-hairline absolute inset-x-0 bottom-0 opacity-70"
        aria-hidden="true"
      />
      <Container className="relative py-12 sm:py-16">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 max-w-3xl">
          {eyebrow && (
            <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-wider text-eco-400">
              <span
                className="h-px w-8 bg-gradient-to-r from-transparent to-eco-400"
                aria-hidden="true"
              />
              {eyebrow}
            </p>
          )}
          <h1 className="h1-fluid mt-3 font-display font-bold text-white">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-white/85">{intro}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
