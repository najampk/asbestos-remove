import { clsx } from "@/lib/clsx";
import { TRUST_BAR_ITEMS } from "@/lib/claims";

// Mono-type compliance strip beneath the hero (SPEC.md §1.4). Items come from
// lib/claims.ts; ISO / carrier no. / insurance render as §0 placeholder tokens.
export default function TrustBar({
  className,
  tone = "onDark",
}: {
  className?: string;
  tone?: "onDark" | "onLight";
}) {
  return (
    <div
      className={clsx(
        "border-y",
        tone === "onDark"
          ? "border-white/15 bg-white/5"
          : "border-line bg-white",
        className,
      )}
    >
      <ul
        className={clsx(
          "mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 py-3.5 text-center font-mono text-xs uppercase tracking-wider sm:px-6",
          tone === "onDark" ? "text-white/75" : "text-slate-600",
        )}
      >
        {TRUST_BAR_ITEMS.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 whitespace-nowrap"
          >
            <span
              aria-hidden="true"
              className={clsx(
                "h-1.5 w-1.5 shrink-0 rounded-full",
                tone === "onDark" ? "bg-eco-400/80" : "bg-eco-500/70",
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
