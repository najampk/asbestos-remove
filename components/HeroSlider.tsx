"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

// Auto-advancing cross-fade of the hero photography (behind the gradient overlay).
// Only slide 1 is fetched on first paint (priority = LCP); the rest mount
// progressively as the show advances, and reduced-motion users get a static slide.
// Three slides keep the download cost low; the pause control satisfies
// WCAG 2.2.2 for the auto-advancing background.
const IMAGES = [1, 2, 3].map((n) => `/images/hero-${n}.avif`);
const INTERVAL = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState<number[]>([0]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % IMAGES.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, [paused]);

  // Mount the current slide (and preload the next) as the show advances, so the
  // first paint only downloads slide 1.
  useEffect(() => {
    const next = (index + 1) % IMAGES.length;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- progressive image mount after advance
    setLoaded((prev) => Array.from(new Set([...prev, index, next])));
  }, [index]);

  return (
    <>
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        {IMAGES.map((src, i) =>
          loaded.includes(i) ? (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              priority={i === 0}
              loading="eager"
              sizes="100vw"
              className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : null,
        )}
      </div>
      {/* Pause/resume (WCAG 2.2.2) — hidden for reduced-motion users, whose
          slider never advances */}
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={
          paused ? "Resume background slideshow" : "Pause background slideshow"
        }
        className="absolute bottom-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-brand-950/40 text-white/80 backdrop-blur-sm transition-colors duration-200 hover:bg-brand-950/60 hover:text-white focus-visible:outline-white motion-reduce:hidden"
      >
        {paused ? (
          <Play className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Pause className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </>
  );
}
