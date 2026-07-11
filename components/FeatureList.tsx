import { Check } from "lucide-react";
import { clsx } from "@/lib/clsx";

// Check-marked list for "What You Receive", "Materials We Remove", checklists, etc.
export default function FeatureList({
  items,
  columns = 1,
  className,
}: {
  items: string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul
      className={clsx(
        "grid gap-x-8 gap-y-3",
        columns === 2 && "sm:grid-cols-2",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="group flex items-start gap-3">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eco-500/12 text-eco-700 ring-1 ring-inset ring-eco-500/25 transition-all duration-200 group-hover:bg-eco-500 group-hover:text-white"
            aria-hidden="true"
          >
            <Check className="h-3.5 w-3.5" />
          </span>
          <span className="text-slate-600 transition-colors duration-200 group-hover:text-ink">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
