import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import { GUIDE_LINKS } from "@/lib/constants";
import { SCOPE_STATEMENT } from "@/lib/claims";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Asbestos Guides & Advice",
  description:
    "Plain-English asbestos guides from a Glasgow contractor — what removal costs, how to identify asbestos, disposal rules and the licensing system explained.",
  path: "/guides",
});

export default function GuidesHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Asbestos Guides & Advice"
        intro="Straight answers to the questions we get asked every week — what removal costs, how the licensing system works, how to tell whether that ceiling is a problem, and what the law says about disposal. Written by the team that does the work."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
        ]}
      />

      {/* Guide index */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {GUIDE_LINKS.map((guide, i) => (
              <Reveal key={guide.href}>
                <Link
                  href={guide.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-card-hover"
                >
                  <span
                    className="gradient-hairline absolute inset-x-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-eco-700">
                    Guide {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 font-display text-xl font-bold text-brand-950 transition-colors duration-300 group-hover:text-brand-700">
                    {guide.label}
                  </span>
                  <span className="mt-2.5 flex-1 leading-relaxed text-slate-600">
                    {guide.description}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Read the guide
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why we publish these */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Why We Publish These"
            title="An informed customer is our favourite kind"
          />
          <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
            <p>
              Asbestos is a subject where bad information gets expensive fast —
              in both directions. People pay licensed-work prices for a garage
              roof that never needed a licence, and people dry-sand Artex
              ceilings because a forum post told them it was probably fine.
              These guides exist to close that gap before you spend a penny
              with us or anyone else.
            </p>
            <p>
              {SCOPE_STATEMENT} That scope shapes the advice here: where a job
              is ours, we say what it involves; where it isn&rsquo;t, we say
              that too. If a guide leaves your question unanswered, phone us —
              the advice is free and doesn&rsquo;t come with a hard sell.
            </p>
          </div>
        </Container>
      </section>

      {/* Cross-links */}
      <section className="py-16 sm:py-20">
        <Container>
          <RelatedLinks
            title="When you're past the reading stage"
            links={[
              {
                label: "Asbestos Surveys",
                href: "/services/asbestos-surveys",
                description:
                  "Sampling and surveys that tell you exactly what you're dealing with.",
              },
              {
                label: "Asbestos Removal",
                href: "/services/asbestos-removal",
                description:
                  "Controlled removal of non-licensed and NNLW materials across Glasgow.",
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
