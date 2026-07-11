"use client";

import { type MotionValue } from "motion/react";
import EnclosureSvg from "./EnclosureSvg";

// Sticky illustrated stage (§10.1). role="img" with a live aria-label describing
// the current visual state; the SVG layers themselves are aria-hidden.
export default function StoryStage({
  progress,
  animate,
  airflowActive = false,
  ariaLabel,
}: {
  progress: MotionValue<number>;
  animate: boolean;
  airflowActive?: boolean;
  ariaLabel: string;
}) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-white shadow-card"
    >
      <div
        className="containment-grid absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <EnclosureSvg
        progress={progress}
        animate={animate}
        airflowActive={airflowActive}
        className="absolute inset-0 h-full w-full"
      />
      <p className="sr-only" aria-live="polite">
        {ariaLabel}
      </p>
    </div>
  );
}
