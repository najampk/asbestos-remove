import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

// Icon, title, summary, arrow link; hover lifts with gradient border (SPEC.md §1.4).
export default function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-card-hover focus-visible:-translate-y-1.5"
    >
      {/* gradient fill on hover */}
      <span
        aria-hidden="true"
        className="gradient-cta pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ margin: "-1px" }}
      />
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700/10 to-eco-500/10 text-brand-700 ring-1 ring-inset ring-brand-700/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-none group-hover:bg-white/20 group-hover:text-white group-hover:ring-white/25">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-brand-950 transition-colors duration-300 group-hover:text-white">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/90">
        {detailed ? service.blurb : service.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors duration-300 group-hover:text-white">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
