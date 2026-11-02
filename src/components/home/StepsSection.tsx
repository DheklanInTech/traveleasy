import Image from "next/image";
import { steps, stepsImage } from "@/content/home";
import { revealDelay } from "@/lib/reveal";

const bundle = ["Visa", "Flights", "Stay"];

export function StepsSection() {
  return (
    <section aria-labelledby="steps-title" className="on-dark relative mt-20 overflow-hidden text-white">
      <Image src={stepsImage.src} alt={stepsImage.alt} fill sizes="100vw" className="parallax object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/62" />

      <div className="relative flex flex-col gap-7 px-4 pt-24 pb-30 sm:px-10">
        <h2 id="steps-title" data-reveal className="text-section">
          One plan, start to finish
        </h2>
        <p className="flex flex-col text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.1] font-medium tracking-[-0.04em]">
          {bundle.map((item, i) => (
            <span key={item} data-reveal style={revealDelay(i + 1, 120)}>
              <span className="text-white/60">+</span>
              {item}
            </span>
          ))}
        </p>
      </div>

      <div className="glass-navy relative grid grid-cols-1 border-t border-white/32 sm:grid-cols-2 lg:grid-cols-5">
        <p data-reveal="fade" className="border-white/28 p-4 text-title font-medium sm:col-span-2 sm:p-10 lg:col-span-1 lg:border-r">
          One consultation, one checklist and one team following your application until you fly.
        </p>
        <ol className="contents">
          {steps.map((step, i) => (
            <li key={step.title} data-reveal style={revealDelay(i + 1)} className="flex flex-col gap-2.5 border-white/28 p-4 sm:p-10 lg:border-r lg:last:border-r-0">
              <span className="text-numeral font-medium tracking-[-0.04em]">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-caption font-medium text-white/72">Step</span>
              <span className="pt-6 text-title font-semibold tracking-[-0.02em]">{step.title}</span>
              <span className="text-body text-white/86">{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
