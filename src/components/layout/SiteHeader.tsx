"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { consultationHref, mainNav } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

/** Sticky frosted header: logo cell, navigation, consultation CTA, divided by hairlines. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="glass-header sticky top-0 z-30 border-b border-hairline">
      <div className="flex h-header items-stretch">
        <Link href="/" aria-label="Travel Ease home" className="flex shrink-0 items-center border-r border-hairline px-4 sm:px-10">
          <Image src="/brand/travelease-horizontal.svg" alt="Travel Ease" width={134} height={34} priority className="h-[34px] w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 items-center justify-end gap-8 px-10 text-label font-medium lg:flex">
          {mainNav.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-ink-muted">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center border-l border-hairline px-10 lg:flex">
          <ButtonLink href={consultationHref} className="h-11">
            Book a consultation
          </ButtonLink>
        </div>

        <div className="flex flex-1 items-center justify-end px-4 lg:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full bg-fill-subtle text-navy"
          >
            {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="h-[calc(100dvh-var(--spacing-header))] overflow-y-auto border-t border-hairline bg-white lg:hidden">
          <ul className="flex flex-col">
            {mainNav.map((link) => (
              <li key={link.href} className="border-b border-hairline">
                <Link href={link.href} onClick={() => setOpen(false)} className="block px-4 py-5 text-title font-semibold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-4">
            <ButtonLink href={consultationHref} block size="lg">
              Book a consultation
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
