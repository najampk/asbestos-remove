"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  MAIN_NAV,
  BUSINESS,
  type NavGroup,
} from "@/lib/constants";

function DesktopItem({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);

  if (!group.children) {
    return (
      <Link
        href={group.href}
        className="nav-underline px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-brand-700"
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        className="nav-underline flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-brand-700"
      >
        {group.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`absolute left-0 top-full min-w-60 rounded-xl border border-line bg-white/95 p-2 shadow-card-hover ring-1 ring-brand-950/5 backdrop-blur transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
        }}
      >
        {group.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="group/item flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-surface hover:text-brand-700"
          >
            {child.label}
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-eco-500 opacity-0 transition-opacity group-hover/item:opacity-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 shadow-[0_1px_12px_rgb(7_27_71/0.05)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${BUSINESS.tradingName} — home`}
        >
          <Image
            src="/images/logo.webp"
            alt=""
            width={1254}
            height={1254}
            className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-brand-950">
              Asbestos Remove
            </span>
            <span className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-eco-700">
              Breathe Easy
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center lg:flex"
        >
          {MAIN_NAV.map((group) => (
            <DesktopItem key={group.label} group={group} />
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-950/5 hover:text-brand-700"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full bg-eco-500/12 text-eco-700"
              aria-hidden="true"
            >
              <Phone className="h-3.5 w-3.5" />
            </span>
            {BUSINESS.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="gradient-cta rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cta active:translate-y-0"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-950 transition-colors hover:bg-brand-950/5 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">
            {mobileOpen ? "Close menu" : "Open menu"}
          </span>
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Signature hairline — sits on the header's bottom edge */}
      <div
        className="gradient-hairline absolute inset-x-0 bottom-0 opacity-60"
        aria-hidden="true"
      />

      {/* Mobile sheet */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white shadow-card-hover lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6"
          >
            {MAIN_NAV.map((group) => (
              <div key={group.label}>
                <Link
                  href={group.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-semibold text-brand-950 hover:bg-surface"
                >
                  {group.label}
                </Link>
                {group.children && (
                  <div className="ml-3 border-l border-line pl-3">
                    {group.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-surface hover:text-brand-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="space-y-3 border-t border-line pt-4">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2.5 px-3 text-base font-semibold text-brand-950"
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-eco-500/12 text-eco-700"
                  aria-hidden="true"
                >
                  <Phone className="h-4 w-4" />
                </span>
                {BUSINESS.phoneDisplay}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="gradient-cta block rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
