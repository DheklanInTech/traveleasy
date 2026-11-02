import Image from "next/image";
import type { ReactNode } from "react";
import { packages } from "@/content/home";
import type { TravelPackage } from "@/content/types";
import { revealDelay } from "@/lib/reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CalendarIcon, MapPinIcon, UsersIcon } from "@/components/ui/icons";

function DetailRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex justify-between gap-3">
      <span>{children}</span>
      <span className="shrink-0 text-ink-muted">{icon}</span>
    </li>
  );
}

function PackageCard({ pkg, index }: { pkg: TravelPackage; index: number }) {
  return (
    <article className="flex flex-wrap gap-10 bg-white p-4 sm:p-10">
      <div data-reveal style={revealDelay(index, 120)} className="flex min-w-0 grow basis-[260px] flex-col gap-6">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.08] font-semibold tracking-[-0.035em]">{pkg.title}</h3>
          <p className="text-title font-semibold tracking-[-0.02em]">
            <span className="font-medium text-ink-muted">from</span> {pkg.price}
          </p>
        </div>
        <div className="grow" />
        <ul className="flex flex-col gap-3 text-meta">
          <DetailRow icon={<MapPinIcon />}>{pkg.location}</DetailRow>
          <DetailRow icon={<CalendarIcon />}>
            {pkg.dates} <span className="text-ink-muted">({pkg.duration})</span>
          </DetailRow>
          <DetailRow icon={<UsersIcon />}>{pkg.audience}</DetailRow>
        </ul>
        <ButtonLink href={pkg.href} variant="subtle" size="lg" block>
          View package
        </ButtonLink>
      </div>
      <div data-reveal="zoom" style={revealDelay(index, 120)} className="relative min-h-[420px] min-w-0 grow basis-[260px] overflow-hidden bg-fill-subtle">
        <Image src={pkg.image.src} alt={pkg.image.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
    </article>
  );
}

export function PackagesSection() {
  return (
    <section aria-labelledby="packages-title" className="border-t border-hairline pt-20">
      <SectionHeader
        id="packages-title"
        layout="split"
        title="Featured packages"
        aside={
          <p className="max-w-[520px] text-[1.125rem] leading-[1.45] tracking-[-0.015em] text-ink-muted">
            Holidays, honeymoons and group trips with flights, stays, transfers and visa support arranged for you.
          </p>
        }
      />
      <div className="grid grid-cols-1 gap-px border-y border-hairline bg-hairline xl:grid-cols-2">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.href} pkg={pkg} index={i} />
        ))}
      </div>
    </section>
  );
}
