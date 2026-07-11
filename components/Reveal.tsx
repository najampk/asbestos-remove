"use client";

import { useEffect, useRef } from "react";

// Lightweight scroll-reveal (SPEC.md §1.5). No animation library — one shared
// IntersectionObserver drives all instances, so it costs almost nothing and never
// blocks the main thread. The hidden/visible styling lives in globals.css, gated
// behind `.js` + prefers-reduced-motion so content is always visible without JS.

type Callback = () => void;
let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, Callback>();

function sharedObserver(): IntersectionObserver {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          callbacks.get(entry.target)?.();
          observer?.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
  );
  return observer;
}

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reveal immediately if the user prefers reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    callbacks.set(el, () => el.classList.add("is-visible"));
    sharedObserver().observe(el);
    return () => {
      sharedObserver().unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
