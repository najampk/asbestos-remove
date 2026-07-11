import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Sector } from "@/lib/sectors";

// Image-led card for Domestic / Commercial / Industrial (SPEC.md §1.4).
export default function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link
      href={sector.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover focus-visible:-translate-y-1.5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={sector.image}
          alt={sector.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent"
          aria-hidden="true"
        />
        {/* Sector chip — mono, compliance-strip voice */}
        <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-brand-950/55 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
          {sector.label}
        </span>
        {/* Gradient seam between image and body */}
        <span
          className="gradient-hairline absolute inset-x-0 bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-brand-950 transition-colors duration-300 group-hover:text-brand-700">
          {sector.cardTitle}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {sector.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          View {sector.label}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
