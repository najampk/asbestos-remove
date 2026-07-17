// components/removal-story/story-data.ts
// Scene copy for the "Anatomy of a Safe Removal" scroll story (§10.2). Narration
// blocks are the Removal page's process content — semantic HTML in document order,
// so the section reads correctly with zero JS/CSS and keeps its SEO value.

export interface StoryScene {
  id: string;
  /** Scroll-progress window this scene owns (0→1). */
  range: [number, number];
  heading: string;
  narration: string;
  /** Describes the visual state for screen readers (live on the stage). */
  ariaLabel: string;
}

export const STORY_SCENES: StoryScene[] = [
  {
    id: "survey-plan",
    range: [0.0, 0.18],
    heading: "It starts on paper.",
    narration:
      "Every removal begins with a plan of work and risk assessments — and, for notifiable work, notification to the enforcing authority. Nothing is touched until the method is set.",
    ariaLabel:
      "A bare room with the suspect material marked, and a plan of work being drawn up.",
  },
  {
    id: "enclosure-seals",
    range: [0.18, 0.4],
    heading: "Your property is protected.",
    narration:
      "We isolate the work area with polythene sheeting, seal what stays in place, and set up signed, controlled access before any material is touched.",
    ariaLabel:
      "The work area sealed with polythene sheeting, barrier tape and warning signage, with a controlled access point.",
  },
  {
    id: "fibres-captured",
    range: [0.4, 0.62],
    heading: "Fibres are captured at source.",
    narration:
      "Wet suppression keeps fibres bound to the material; Class H filtered vacuums capture anything released. Air passes through filters — not through your home.",
    ariaLabel:
      "Water mist over the material and a Class H vacuum drawing air through filters, with the pressure gauge reading in the green.",
  },
  {
    id: "controlled-removal",
    range: [0.62, 0.82],
    heading: "The work happens under control.",
    narration:
      "UKATA-trained operatives remove the material whole where possible, double-bag every piece in UK approved waste bags, and decontaminate fully before stepping outside the work area.",
    ariaLabel:
      "A suited operative removing the material and sealing it into a red-tagged waste sack, then passing through decontamination.",
  },
  {
    id: "inspected-done",
    range: [0.82, 1.0],
    heading: "Checked and proven on paper.",
    narration:
      "The area is thoroughly inspected and handed back clean — with independent reassurance air testing available on request. Every bag of waste is tracked to a licensed facility, and the paperwork is yours to keep.",
    ariaLabel:
      "The clean room with sheeting removed, an inspection checklist completed and a waste consignment note stamped and sealed.",
  },
];

/** Mid-progress of each scene — used to render static frames (mobile / reduced-motion). */
export function sceneMidpoint(scene: StoryScene): number {
  return (scene.range[0] + scene.range[1]) / 2;
}
