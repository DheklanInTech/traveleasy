import { consultationHref, contact } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionHeader";
import { MessageIcon } from "@/components/ui/icons";
import { revealDelay } from "@/lib/reveal";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-title" className="border-t border-hairline">
      <div className="mx-auto flex max-w-page flex-wrap items-end gap-x-10 gap-y-8 px-4 py-24 sm:px-10">
        <div data-reveal className="basis-[220px] grow self-start pt-3.5">
          <SectionLabel>Get started</SectionLabel>
        </div>
        <div data-reveal style={revealDelay(1)} className="flex basis-[560px] grow-[3] flex-col gap-9">
          <h2 id="cta-title" className="text-section">
            Tell us where you are going. We will handle the rest
          </h2>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={consultationHref} size="lg">
              Book a consultation
            </ButtonLink>
            <ButtonLink href={contact.whatsappHref} external variant="subtle" size="lg" arrow={false} leadingIcon={<MessageIcon />}>
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
