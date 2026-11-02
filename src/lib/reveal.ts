import type { CSSProperties } from "react";

/** Inline style that staggers a `data-reveal` element by its position in a list. */
export function revealDelay(index: number, stepMs = 90): CSSProperties {
  return { "--reveal-delay": `${index * stepMs}ms` } as CSSProperties;
}
