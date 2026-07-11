import { clsx } from "@/lib/clsx";

export interface Stat {
  value: string;
  label: string;
}

// Gradient-text numbers in Plex Mono (SPEC.md §1.4). `onDark` swaps to a
// white→eco gradient so the numbers keep their pop (and their contrast) on the
// gradient-hero background.
export default function StatStrip({
  stats,
  tone = "onLight",
}: {
  stats: Stat[];
  tone?: "onLight" | "onDark";
}) {
  return (
    <dl
      className={clsx(
        "grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-8 lg:grid-cols-4 lg:divide-x",
        tone === "onDark" ? "lg:divide-white/10" : "lg:divide-line",
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span
              className={clsx(
                "block bg-clip-text font-mono text-4xl font-semibold tracking-tight text-transparent",
                tone === "onDark"
                  ? "bg-gradient-to-r from-white to-eco-400"
                  : "gradient-text",
              )}
            >
              {stat.value}
            </span>
            <span
              className={clsx(
                "mt-2 block text-sm font-medium",
                tone === "onDark" ? "text-white/75" : "text-slate-600",
              )}
            >
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
