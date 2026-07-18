import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  BUSINESS,
  SERVICE_LINKS,
  SECTOR_LINKS,
  COMPANY_LINKS,
} from "@/lib/constants";
import { FOOTER_COMPLIANCE_ITEMS } from "@/lib/claims";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-eco-400">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rounded-full bg-eco-400/0 transition-colors duration-200 group-hover:bg-eco-400"
              />
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <Image
        src="/images/asbestos-fibres.avif"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-brand-950/88" aria-hidden="true" />
      {/* Signature hairline + faded containment grid */}
      <div className="gradient-hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <div
        className="containment-grid-dark pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Brand lockup */}
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white via-slate-100 to-slate-300 p-1.5 shadow-sm ring-1 ring-white/30">
            <Image
              src="/images/asbestos-remove-logo.webp"
              alt=""
              width={1254}
              height={1254}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Asbestos Removal
            </span>
            <span className="mt-0.5 font-display text-sm font-semibold tracking-[0.31em] text-eco-400">
              Environmental Ltd.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <FooterColumn title="Services" links={SERVICE_LINKS} />
          <FooterColumn title="Sectors" links={SECTOR_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />

          {/* Contact column */}
          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-eco-400">
              Contact
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-white/70">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`mailto:${BUSINESS.emailGeneral}`}
                className="flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {BUSINESS.emailGeneral}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {BUSINESS.address.line1}, {BUSINESS.address.line2},{" "}
                  {BUSINESS.address.city}, {BUSINESS.address.postcode}
                </span>
              </p>
            </address>
          </div>
        </div>

        {/* Compliance strip (mono) — driven from lib/claims.ts */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <ul className="flex flex-wrap gap-2">
            {FOOTER_COMPLIANCE_ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white/65"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal strip (SPEC.md §4.3) */}
        <div className="mt-6 space-y-2 text-xs leading-relaxed text-white/50">
          <p>
            {BUSINESS.tradingName} is a trading name of {BUSINESS.legalName}.
            Registered in Scotland, company number {BUSINESS.companyNumber}.
            Registered office: {BUSINESS.address.line1},{" "}
            {BUSINESS.address.line2}, {BUSINESS.address.city},{" "}
            {BUSINESS.address.postcode}.
          </p>
          <p>
            &copy; {year} {BUSINESS.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
