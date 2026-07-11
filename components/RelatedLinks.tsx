import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export interface RelatedLink {
  label: string;
  href: string;
  description: string;
}

// In-copy cross-links block satisfying the IA linking rules (SPEC.md §2.1).
export default function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  return (
    <Reveal>
      <h2 className="font-display text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-card-hover"
          >
            {/* Top accent seam on hover */}
            <span
              className="gradient-hairline absolute inset-x-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span className="font-display text-lg font-semibold text-brand-950 transition-colors duration-300 group-hover:text-brand-700">
              {link.label}
            </span>
            <span className="mt-1.5 flex-1 text-sm text-slate-600">
              {link.description}
            </span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
              Read more
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
