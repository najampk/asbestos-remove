"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  useScroll,
  useReducedMotion,
  useMotionValue,
} from "motion/react";
import Button from "@/components/Button";
import StoryStage from "./StoryStage";
import StoryScene from "./StoryScene";
import { STORY_SCENES, sceneMidpoint, type StoryScene as Scene } from "./story-data";

// A single static frame (mobile / reduced-motion): the SVG at this scene's
// midpoint progress, with its narration beneath.
function StaticFrame({
  scene,
  index,
  animate,
}: {
  scene: Scene;
  index: number;
  animate: boolean;
}) {
  const frozen = useMotionValue(sceneMidpoint(scene));
  return (
    <div className="border-t border-line py-10 first:border-t-0">
      <StoryStage
        progress={frozen}
        animate={animate}
        airflowActive={index === 2}
        ariaLabel={scene.ariaLabel}
      />
      <div className="mt-6">
        <p className="gradient-text font-mono text-xs font-medium uppercase tracking-wider">
          Scene {index + 1} of 5
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-950">
          {scene.heading}
        </h3>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
          {scene.narration}
        </p>
      </div>
    </div>
  );
}

function ClosingBeat() {
  return (
    <div className="gradient-cta relative mt-12 overflow-hidden rounded-3xl px-6 py-10 text-center shadow-card-hover sm:py-12">
      <div className="containment-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(30rem_16rem_at_50%_0%,rgb(255_255_255/0.14),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative">
        <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          That&rsquo;s what doing it properly looks like.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/contact" variant="white">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
}

// Pinned two-column scroll layout. Extracted into its own component so that
// `useScroll` (which requires its target ref to be mounted) only runs once this is
// actually rendered — never against the static-frames layout's absent target.
function PinnedStory() {
  const [activeScene, setActiveScene] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const onActivate = useCallback((i: number) => setActiveScene(i), []);

  return (
    <div>
      <div ref={sectionRef} className="grid grid-cols-2 gap-12">
        {/* Pinned stage (offset below the sticky 4rem header) */}
        <div className="h-full">
          <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center">
            <StoryStage
              progress={scrollYProgress}
              animate
              airflowActive={activeScene === 2}
              ariaLabel={STORY_SCENES[activeScene].ariaLabel}
            />
          </div>
        </div>
        {/* Scrolling narration */}
        <div>
          {STORY_SCENES.map((scene, i) => (
            <StoryScene key={scene.id} scene={scene} index={i} onActivate={onActivate} />
          ))}
        </div>
      </div>
      <ClosingBeat />
    </div>
  );
}

export default function RemovalStory() {
  const reduced = useReducedMotion() ?? false;
  const [pinned, setPinned] = useState(false);

  // Choose the pinned scroll layout only on capable desktops. Default (SSR) is the
  // static-frames layout, which carries the full semantic narration for SEO/no-JS.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const noPref = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const update = () => setPinned(wide.matches && noPref.matches);
    update();
    wide.addEventListener("change", update);
    noPref.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      noPref.removeEventListener("change", update);
    };
  }, []);

  if (pinned) return <PinnedStory />;

  return (
    <div>
      {STORY_SCENES.map((scene, i) => (
        <StaticFrame key={scene.id} scene={scene} index={i} animate={!reduced} />
      ))}
      <ClosingBeat />
    </div>
  );
}
