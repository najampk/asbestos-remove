"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Auto-advancing cross-fade of the hero photography (behind the gradient overlay).
// Only slide 1 is fetched on first paint (priority = LCP); the rest mount
// progressively as the show advances, and reduced-motion users get a static slide.
const IMAGES = [1, 2, 3, 4, 5, 6].map((n) => `/images/hero-${n}.avif`);
const INTERVAL = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<number[]>([0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % IMAGES.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, []);

  // Mount the current slide (and preload the next) as the show advances, so the
  // first paint only downloads slide 1.
  useEffect(() => {
    const next = (index + 1) % IMAGES.length;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- progressive image mount after advance
    setLoaded((prev) => Array.from(new Set([...prev, index, next])));
  }, [index]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
      {IMAGES.map((src, i) =>
        loaded.includes(i) ? (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null,
      )}
    </div>
  );
}
