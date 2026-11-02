import Image from "next/image";
import { about } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="py-20">
      <SectionHeader id="about-title" label="About us" title={about.title} />
      <div className="mx-auto flex max-w-page flex-wrap gap-10 px-4 sm:px-10">
        <div data-reveal="zoom" className="relative aspect-[4/3] min-w-0 grow-[1.15] basis-[480px] overflow-hidden bg-fill-subtle">
          <Image src={about.image.src} alt={about.image.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        </div>
        <div className="flex min-w-0 grow basis-[420px] flex-col justify-between gap-12">
          <p data-reveal className="indent-[72px] text-lead font-medium tracking-[-0.025em]">{about.body}</p>
          <dl data-reveal className="grid grid-cols-2 gap-8 border-t border-hairline pt-8">
            {about.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-3.5">
                <dt className="max-w-[16ch] text-meta text-ink-muted">{stat.label}</dt>
                <dd className="text-numeral font-medium tracking-[-0.04em]">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <div data-reveal>
            <ButtonLink href="/about" variant="subtle">
              Read our story
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
