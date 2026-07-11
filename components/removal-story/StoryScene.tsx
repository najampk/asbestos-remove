"use client";

import { useEffect, useRef } from "react";
import type { StoryScene as Scene } from "./story-data";

// One narration block (§10.3). Ordinary semantic HTML (h3 + p) in document order,
// so the process reads correctly with zero JS. Reports itself as the active scene
// via IntersectionObserver when it reaches the vertical centre of the viewport.
export default function StoryScene({
  scene,
  index,
  onActivate,
}: {
  scene: Scene;
  index: number;
  onActivate: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onActivate(index);
        }
      },
      // Narrow band across the vertical centre of the viewport.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onActivate]);

  return (
    <div ref={ref} className="flex min-h-[80vh] flex-col justify-center py-12">
      <p className="gradient-text font-mono text-xs font-medium uppercase tracking-wider">
        Scene {index + 1} of 5
      </p>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
        {scene.heading}
      </h3>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
        {scene.narration}
      </p>
    </div>
  );
}
