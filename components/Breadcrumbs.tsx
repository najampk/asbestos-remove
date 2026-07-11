import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href: string;
}

// Breadcrumb UI for all non-home pages (SPEC.md §2.1). BreadcrumbList JSON-LD is
// added in the M4 SEO layer.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-white/70">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 text-white/40"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span aria-current="page" className="text-white/90">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="rounded-sm underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
