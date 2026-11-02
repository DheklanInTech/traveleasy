"use client";

import { useCallback, useEffect, useState } from "react";

interface AutoAdvanceOptions {
  count: number;
  intervalMs: number;
}

/**
 * Index state for slideshows and carousels that advance on a timer.
 * Pauses while `pause()` is in effect and never auto-advances when the
 * visitor prefers reduced motion.
 */
export function useAutoAdvance({ count, intervalMs }: AutoAdvanceOptions) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const previous = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return;
    const timer = window.setInterval(next, intervalMs);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, count, intervalMs, next]);

  return {
    index,
    goTo,
    next,
    previous,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}
