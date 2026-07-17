"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import PropertySvg from "./PropertySvg";
import Hotspot from "./Hotspot";
import MaterialPanel from "./MaterialPanel";
import { HOTSPOTS, RISK_LABEL, type RiskLevel } from "./explorer-data";

const PANEL_ID = "explorer-panel";

const LEGEND: { risk: RiskLevel; dot: string }[] = [
  { risk: "lower", dot: "bg-eco-500" },
  { risk: "moderate", dot: "bg-[#d97706]" },
  { risk: "higher", dot: "bg-danger" },
];

export default function PropertyExplorer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  // Portal target only exists client-side; sheet content never renders on the
  // server (activeId starts null), so this just gates createPortal itself.
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion() ?? false;
  const triggerRef = useRef<HTMLElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only portal gate
    setMounted(true);
  }, []);

  const active = HOTSPOTS.find((h) => h.id === activeId) ?? null;

  const select = useCallback((id: string) => {
    triggerRef.current = (document.activeElement as HTMLElement) ?? null;
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const close = useCallback(() => {
    setActiveId(null);
    triggerRef.current?.focus();
  }, []);

  // Deep-link in: open a panel from ?spot=<id> on first load. This must run after
  // hydration — the statically-prerendered HTML has no query param, so a lazy
  // initializer would cause a hydration mismatch.
  useEffect(() => {
    const spot = new URLSearchParams(window.location.search).get("spot");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional post-hydration URL sync
    if (spot && HOTSPOTS.some((h) => h.id === spot)) setActiveId(spot);
  }, []);

  // Deep-link out: reflect the open panel in the URL for sharing (no navigation).
  useEffect(() => {
    const url = new URL(window.location.href);
    if (activeId) url.searchParams.set("spot", activeId);
    else url.searchParams.delete("spot");
    window.history.replaceState(null, "", url);
  }, [activeId]);

  // Vercel Analytics: count hotspot opens (SPEC.md §9.3).
  useEffect(() => {
    if (activeId) track("explorer_open", { material: activeId });
  }, [activeId]);

  // Esc closes the panel.
  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId, close]);

  // Move focus into the mobile sheet when it opens.
  useEffect(() => {
    if (activeId && window.matchMedia("(max-width: 1023px)").matches) {
      sheetRef.current?.querySelector("button")?.focus();
    }
  }, [activeId]);

  // Sheet modality (mobile only): make the rest of the page inert, lock body
  // scroll, and trap Tab inside the sheet. The sheet is portalled to <body>
  // (its own subtree, excluded below), so everything else can be inerted.
  useEffect(() => {
    if (!activeId) return;
    if (!window.matchMedia("(max-width: 1023px)").matches) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const inerted: HTMLElement[] = [];
    document.querySelectorAll<HTMLElement>("body > *").forEach((el) => {
      if ("explorerSheetRoot" in el.dataset) return;
      if (!el.hasAttribute("inert")) {
        el.setAttribute("inert", "");
        inerted.push(el);
      }
    });

    // Belt-and-braces for browsers without inert support.
    const onKeyDown = (event: KeyboardEvent) => {
      const sheet = sheetRef.current;
      if (event.key !== "Tab" || !sheet) return;
      const focusable = sheet.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!sheet.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      inerted.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = previousOverflow;
    };
  }, [activeId]);

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        {/* Stage */}
        <div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div
              className="containment-grid absolute inset-0 opacity-40"
              aria-hidden="true"
            />
            <PropertySvg className="absolute inset-0 h-full w-full" />
            {HOTSPOTS.map((h) => (
              <Hotspot
                key={h.id}
                hotspot={h}
                active={activeId === h.id}
                reducedMotion={reduced}
                onSelect={select}
                panelId={PANEL_ID}
              />
            ))}
          </div>

          {/* Risk legend */}
          <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {LEGEND.map((l) => (
              <li key={l.risk} className="flex items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-full ${l.dot}`}
                  aria-hidden="true"
                />
                {RISK_LABEL[l.risk]}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop panel column */}
        <div
          id={PANEL_ID}
          className="relative hidden overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card lg:block"
        >
          <span
            className="gradient-hairline absolute inset-x-0 top-0"
            aria-hidden="true"
          />
          {active ? (
            <MaterialPanel hotspot={active} />
          ) : (
            <div className="flex h-full flex-col justify-center text-center">
              <p className="font-display text-lg font-bold text-brand-950">
                Select a marker
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Select any point on the property to learn what the material is,
                its risk level, and the safest next step.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile bottom sheet + scrim — portalled to <body> so the rest of the
          page can be made inert while the sheet is open (see modality effect) */}
      {mounted &&
        createPortal(
          <div data-explorer-sheet-root="">
            <AnimatePresence>
              {active && (
                <motion.div
                  key="sheet"
                  className="fixed inset-x-0 bottom-0 z-[60] lg:hidden"
                  role="dialog"
                  aria-modal="true"
                  aria-label={active.label}
                  initial={reduced ? false : { y: "100%" }}
                  animate={reduced ? {} : { y: 0 }}
                  exit={reduced ? {} : { y: "100%" }}
                  transition={{ type: "spring", stiffness: 320, damping: 34 }}
                >
                  <div
                    ref={sheetRef}
                    className="mx-auto max-h-[85vh] max-w-lg overflow-y-auto rounded-t-3xl border border-line bg-white p-6 shadow-2xl"
                  >
                    <MaterialPanel hotspot={active} onClose={close} showClose />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Scrim behind the sheet */}
            <AnimatePresence>
              {active && (
                <motion.button
                  key="scrim"
                  type="button"
                  aria-hidden="true"
                  tabIndex={-1}
                  onClick={close}
                  className="fixed inset-0 z-[55] bg-brand-950/40 lg:hidden"
                  initial={reduced ? false : { opacity: 0 }}
                  animate={reduced ? {} : { opacity: 1 }}
                  exit={reduced ? {} : { opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </div>,
          document.body,
        )}

      {/* No-JS / crawler fallback — full hotspot content as semantic HTML (§9.1) */}
      <details className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <summary className="cursor-pointer list-none px-6 py-4 font-display text-lg font-semibold text-brand-950 transition-colors marker:content-none hover:bg-surface/60 hover:text-brand-700 [&::-webkit-details-marker]:hidden">
          View as list
        </summary>
        <ul className="divide-y divide-line border-t border-line">
          {HOTSPOTS.map((h) => (
            <li key={h.id} className="px-6 py-5">
              <h3 className="font-display text-lg font-bold text-brand-950">
                {h.label}{" "}
                <span className="font-mono text-xs font-medium uppercase tracking-wide text-slate-600">
                  ({RISK_LABEL[h.risk]})
                </span>
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-slate-600">
                {h.location} · {h.era}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {h.summary}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-semibold text-brand-950">
                  Commonly disturbed by:
                </span>{" "}
                {h.disturbedBy.join(", ")}.
              </p>
              <p className="mt-2 text-sm font-medium text-brand-950">
                {h.advice}
              </p>
              <Link
                href={h.serviceLink}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-500"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
