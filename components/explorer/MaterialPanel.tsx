"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { X, ArrowRight, Info } from "lucide-react";
import { clsx } from "@/lib/clsx";
import { RISK_LABEL, type AsbestosHotspot } from "./explorer-data";

const BADGE: Record<AsbestosHotspot["risk"], string> = {
  lower: "bg-eco-500/12 text-eco-700 ring-1 ring-inset ring-eco-500/25",
  moderate: "bg-[#d97706]/12 text-[#b45309] ring-1 ring-inset ring-[#d97706]/25",
  higher: "bg-danger/12 text-danger ring-1 ring-inset ring-danger/25",
};

export default function MaterialPanel({
  hotspot,
  onClose,
  showClose = false,
}: {
  hotspot: AsbestosHotspot;
  onClose?: () => void;
  showClose?: boolean;
}) {
  const serviceLabel = hotspot.serviceLink.includes("removal")
    ? "See our removal service"
    : "See our survey service";

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <span
          className={clsx(
            "inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide",
            BADGE[hotspot.risk],
          )}
        >
          {RISK_LABEL[hotspot.risk]}
        </span>
        {showClose && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="-m-1.5 rounded-md p-1.5 text-slate-600 hover:bg-surface hover:text-brand-950"
          >
            <span className="sr-only">Close</span>
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      <h3 className="mt-3 font-display text-xl font-bold text-brand-950">
        {hotspot.label}
      </h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-slate-600">
        {hotspot.location} · {hotspot.era}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {hotspot.summary}
      </p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-950">
          Commonly disturbed by
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {hotspot.disturbedBy.map((d) => (
            <li
              key={d}
              className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-slate-600"
            >
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-brand-950/5 p-3.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
        <p className="text-sm font-medium text-brand-950">{hotspot.advice}</p>
      </div>

      <div className="mt-6 flex flex-col gap-2.5">
        <Link
          href={`/contact?material=${hotspot.id}`}
          onClick={() => track("explorer_quote", { material: hotspot.id })}
          className="gradient-cta group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cta active:translate-y-0"
        >
          Get this checked
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
        <Link
          href={hotspot.serviceLink}
          className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-500"
        >
          {serviceLabel}
        </Link>
      </div>
    </div>
  );
}
