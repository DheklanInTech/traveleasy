"use client";

import Image from "next/image";
import { consultationHref, heroHighlights, heroSlides } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { useAutoAdvance } from "@/hooks/useAutoAdvance";

/** Full-bleed hero: five photographs cross-fading under a dark overlay. */
export function Hero() {
  const { index } = useAutoAdvance({ count: heroSlides.length, intervalMs: 5000 });

  return (
    <section aria-label="Introduction" className="relative flex min-h-[720px] flex-col justify-end overflow-hidden text-white lg:min-h-[780px]">
      <div aria-hidden="true" className="absolute inset-0 bg-navy">
        {heroSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-[1600ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-black/38" />

      <div className="relative flex flex-col items-center gap-7 px-4 pt-30 pb-24 text-center">
        <h1 className="animate-rise-in text-[clamp(4.5rem,12vw,11rem)] leading-[0.9] font-semibold tracking-[-0.055em]">Go further</h1>
        <p className="animate-rise-in max-w-[700px] [animation-delay:150ms] text-[clamp(1.25rem,2vw,1.625rem)] leading-[1.3] font-medium tracking-[-0.025em]">
          Your visa sorted, your flights booked and your stay arranged. We guide you from the first question to the boarding gate.
        </p>
        <div className="animate-rise-in flex flex-wrap justify-center gap-3 pt-2 [animation-delay:300ms]">
          <ButtonLink href={consultationHref} variant="light" size="lg">
            Start my visa application
          </ButtonLink>
          <ButtonLink href="/vacation-packages" variant="glass" size="lg" arrow={false}>
            Explore packages
          </ButtonLink>
        </div>
      </div>

      <ul className="glass-navy relative grid grid-cols-1 border-t border-white/32 sm:grid-cols-2 lg:grid-cols-4">
        {heroHighlights.map((item) => (
          <li key={item} className="border-b border-white/28 px-4 py-5 last:border-b-0 sm:border-b-0 text-label font-medium sm:px-10 lg:border-r lg:last:border-r-0">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
