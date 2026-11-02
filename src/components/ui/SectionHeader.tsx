import type { ReactNode } from "react";

/** A gold square and one or two words naming the section. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-2 text-label font-medium">
      <span aria-hidden="true" className="size-2.5 bg-gold" />
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  id: string;
  title: string;
  label?: string;
  /** Right-hand content in the split layout (an aside or actions). */
  aside?: ReactNode;
  /** `offset`: label in the first quarter, headline in the rest. `split`: headline left, aside right. */
  layout?: "offset" | "split";
}

export function SectionHeader({ id, title, label, aside, layout = "offset" }: SectionHeaderProps) {
  if (layout === "offset") {
    return (
      <div data-reveal className="mx-auto flex max-w-page flex-wrap gap-x-10 gap-y-6 px-4 pb-14 sm:px-10">
        <div className="basis-[220px] grow pt-3.5">{label && <SectionLabel>{label}</SectionLabel>}</div>
        <h2 id={id} className="text-section basis-[560px] grow-[3]">
          {title}
        </h2>
      </div>
    );
  }

  return (
    <div data-reveal className="mx-auto flex max-w-page flex-wrap items-end justify-between gap-x-10 gap-y-6 px-4 pb-14 sm:px-10">
      <div className="flex basis-[520px] grow flex-col gap-5">
        {label && <SectionLabel>{label}</SectionLabel>}
        <h2 id={id} className="text-section">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  );
}
