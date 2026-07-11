// lib/process.ts
// The real removal sequence (SPEC.md §5.1 ProcessTimeline). Homepage renders all
// six steps; the Removal page reuses steps 3–6 in detail (and M2.6 turns them into
// the scroll story). Numbering is justified — it IS a sequence.

export interface ProcessStep {
  title: string;
  body: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Contact & Advice",
    body: "Call or send photos. We assess urgency and advise on the safest next step, free of charge.",
  },
  {
    title: "Survey & Quote",
    body: "A qualified surveyor identifies and samples suspect materials. You receive a clear report and fixed quote.",
  },
  {
    title: "Plan of Work",
    body: "We prepare risk assessments, method statements and, for notifiable work, notification to the enforcing authority.",
  },
  {
    title: "Controlled Removal",
    body: "Protected, sheeted work areas, wet suppression and Class H vacuums. UKATA-trained operatives throughout.",
  },
  {
    title: "Inspection & Reassurance",
    body: "Thorough visual inspection and clean handover, with independent reassurance air testing available on request.",
  },
  {
    title: "Certified Disposal",
    body: "Waste double-bagged, consigned and transported to a licensed facility. Full paper trail supplied.",
  },
];
