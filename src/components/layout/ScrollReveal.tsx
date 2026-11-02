"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

const reveal = (el: Element) => el.setAttribute("data-revealed", "");

/**
 * Reveals `[data-reveal]` elements as they scroll into view. Elements already
 * on screen are revealed before the page is armed, so nothing visible ever
 * blinks out; without JavaScript the page is never armed and nothing hides.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const pending = Array.from(document.querySelectorAll("[data-reveal]:not([data-revealed])")).filter((el) => {
      if (el.getBoundingClientRect().top >= window.innerHeight) return true;
      reveal(el);
      return false;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    pending.forEach((el) => observer.observe(el));
    document.documentElement.classList.add("reveal-armed");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
