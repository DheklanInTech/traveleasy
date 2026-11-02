"use client";

import Image from "next/image";
import { testimonials, testimonialsImage } from "@/content/home";
import { useAutoAdvance } from "@/hooks/useAutoAdvance";
import { SectionLabel } from "@/components/ui/SectionHeader";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

/** A photograph with a frosted panel cycling through client testimonials. */
export function TestimonialCarousel({ className = "" }: { className?: string }) {
  const { index, goTo, next, previous, pause, resume } = useAutoAdvance({
    count: testimonials.length,
    intervalMs: 6000,
  });
  const current = testimonials[index];

  return (
    <div
      className={`on-dark relative min-h-[620px] overflow-hidden bg-navy sm:min-h-[560px] ${className}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <Image src={testimonialsImage.src} alt={testimonialsImage.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />

      <figure
        data-reveal
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        className="glass-navy absolute right-4 bottom-4 left-4 flex max-w-[620px] flex-col gap-6 border border-white/40 p-6 text-white sm:right-8 sm:bottom-8 sm:left-8 sm:p-8"
      >
        <div className="flex items-center justify-between gap-4">
          <SectionLabel>What our clients say</SectionLabel>
          <span className="text-meta text-white/80">
            {index + 1} / {testimonials.length}
          </span>
        </div>

        <blockquote aria-live="polite" className="min-h-[90px] text-[clamp(1.1875rem,1.7vw,1.4375rem)] leading-[1.35] font-medium tracking-[-0.02em]">
          “{current.quote}”
        </blockquote>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/28 pt-5">
          <figcaption className="flex flex-col gap-0.5">
            <span className="text-label font-semibold">{current.name}</span>
            <span className="text-meta text-white/80">{current.trip}</span>
          </figcaption>

          <div className="flex items-center gap-3.5">
            <div className="flex items-center gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.quote}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-[22px] bg-white" : "w-1.5 bg-white/45"}`}
                />
              ))}
            </div>
            <button type="button" aria-label="Previous testimonial" onClick={previous} className="glass-light inline-flex size-11 items-center justify-center rounded-full text-white hover:bg-white/30">
              <ChevronLeftIcon />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={next} className="glass-light inline-flex size-11 items-center justify-center rounded-full text-white hover:bg-white/30">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </figure>
    </div>
  );
}
