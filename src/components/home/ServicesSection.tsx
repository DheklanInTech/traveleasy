import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/home";
import { revealDelay } from "@/lib/reveal";
import type { Service } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCarousel } from "./TestimonialCarousel";

function ServiceCard({ service, number }: { service: Service; number: number }) {
  return (
    <Link href={service.href} className="group flex flex-col gap-5 bg-white p-4 sm:p-10">
      <div data-reveal style={revealDelay(number - 1)} className="flex items-baseline justify-between gap-4">
        <span className="text-title font-semibold tracking-[-0.02em]">{service.title}</span>
        <span className="shrink-0 text-label whitespace-nowrap text-ink-muted">/ {String(number).padStart(2, "0")}</span>
      </div>
      <div data-reveal style={revealDelay(number - 1)} className="relative aspect-[4/5] overflow-hidden bg-fill-subtle">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {service.badge && (
          <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1.5 text-caption font-medium text-navy">{service.badge}</span>
        )}
      </div>
      <p data-reveal style={revealDelay(number - 1)} className="text-body tracking-[-0.01em] text-ink-muted">{service.description}</p>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section aria-labelledby="services-title" className="pt-20">
      <SectionHeader id="services-title" label="Our services" title="Every part of your journey, handled by one team you can call" />
      {/* 1px gaps over a hairline ground draw the grid rules. */}
      <div className="grid grid-cols-1 gap-px border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <ServiceCard key={service.href} service={service} number={i + 1} />
        ))}
        <TestimonialCarousel className="sm:col-span-2" />
      </div>
    </section>
  );
}
