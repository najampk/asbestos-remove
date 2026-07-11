import type { ProcessStep } from "@/lib/process";

// Numbered vertical steps — a real sequence, so numbering is justified (SPEC.md §1.4).
export default function ProcessTimeline({
  steps,
  startNumber = 1,
}: {
  steps: ProcessStep[];
  startNumber?: number;
}) {
  return (
    <ol className="relative space-y-8 pl-8 sm:pl-10">
      {/* Gradient spine — enquiry (blue) flows to certificate (green) */}
      <span
        className="absolute bottom-1 left-0 top-1 w-0.5 rounded-full bg-gradient-to-b from-brand-700 via-brand-500 to-eco-500 opacity-30"
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <li key={step.title} className="group relative">
          <span
            className="gradient-cta absolute -left-[2.35rem] flex h-9 w-9 items-center justify-center rounded-full font-mono text-sm font-semibold text-white shadow-sm ring-4 ring-surface transition-transform duration-300 group-hover:scale-110 sm:-left-[3.05rem]"
            aria-hidden="true"
          >
            {startNumber + i}
          </span>
          <h3 className="font-display text-lg font-bold text-brand-950">
            {step.title}
          </h3>
          <p className="mt-1.5 max-w-2xl text-slate-600">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
