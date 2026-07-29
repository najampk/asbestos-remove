"use client";

import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import {
  ADDRESS_ONE_LINE,
  BUSINESS,
  GOOGLE_MAPS_URL,
  GOOGLE_MAPS_EMBED_URL,
} from "@/lib/constants";

/**
 * Click-to-load Google Maps facade.
 *
 * A Maps iframe pulls roughly a megabyte of third-party JavaScript, which is the
 * single most expensive thing that can go on a page and would put the contact
 * page well under the Lighthouse ≥95 budget (CLAUDE.md). So nothing third-party
 * loads until the visitor asks for it: until then this is a styled panel with
 * the address in real text, plus a plain link straight to Google Maps for anyone
 * who just wants directions. That link is the fast path and works with JS off.
 */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="overflow-hidden rounded-2xl border border-line shadow-card">
        <iframe
          src={GOOGLE_MAPS_EMBED_URL}
          title={`Map showing ${BUSINESS.legalName} at ${ADDRESS_ONE_LINE}`}
          className="block h-72 w-full border-0 sm:h-80"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="containment-grid relative overflow-hidden rounded-2xl border border-line bg-surface p-6 text-center">
      <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/90 px-4 py-2 font-mono text-xs uppercase tracking-wider text-brand-900 shadow-card backdrop-blur-sm">
        <MapPin className="h-3.5 w-3.5 text-eco-700" aria-hidden="true" />
        SMK Business Centre · Glasgow G5 8BE
      </p>
      <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-700 px-5 py-2.5 text-sm font-semibold text-brand-700 transition-colors duration-200 hover:bg-brand-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Show map
        </button>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-brand-700 underline decoration-eco-500/40 underline-offset-4 transition-colors duration-200 hover:text-brand-950"
        >
          Get directions
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-600">
        The map loads from Google only once you choose to show it.
      </p>
    </div>
  );
}
