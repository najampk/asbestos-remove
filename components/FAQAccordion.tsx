import { Plus } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export interface FAQ {
  question: string;
  answer: string;
}

// Semantic <details> accordion (SPEC.md §1.4). No JS required. FAQPage JSON-LD is
// added in the M4 SEO layer, driven from the same data passed here.
export default function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <>
      <JsonLd data={faqPageSchema(items)} />
      <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-card-hover ring-1 ring-brand-950/5">
        {items.map((item) => (
          <details key={item.question} className="faq-item group px-6 transition-colors duration-200 open:bg-surface/60 hover:bg-surface/60">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold text-brand-950 transition-colors marker:content-none hover:text-brand-700 [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-700/8 text-brand-700 ring-1 ring-inset ring-brand-700/15 transition-all duration-300 group-open:rotate-45 group-open:bg-brand-700 group-open:text-white"
                aria-hidden="true"
              >
                <Plus className="h-4 w-4" />
              </span>
            </summary>
            <p className="pb-5 leading-relaxed text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
