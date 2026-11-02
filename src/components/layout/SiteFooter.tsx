import Image from "next/image";
import Link from "next/link";
import { contact, footerCompany, footerServices, social } from "@/content/home";
import type { NavLink } from "@/content/types";

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav aria-label={title} className="flex flex-col gap-3 border-white/16 px-4 py-14 text-label sm:px-10 lg:border-r">
      <span className="pb-1.5 text-meta text-white/72">{title}</span>
      {links.map((link) => (
        <Link key={link.href + link.label} href={link.href} className="hover:text-gold">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-navy text-white">
      <div className="grid grid-cols-1 border-b border-white/16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5 border-white/16 px-4 py-14 sm:px-10 lg:border-r">
          <Image src="/brand/travelease-horizontal-reversed.svg" alt="Travel Ease" width={142} height={36} className="h-9 w-auto self-start" />
          <p className="text-meta text-white/72">Visa assistance, travel planning and international mobility support.</p>
        </div>
        <FooterColumn title="Services" links={footerServices} />
        <FooterColumn
          title="Company"
          links={[
            ...footerCompany,
            { label: "Instagram", href: social.instagramHref },
            { label: "YouTube", href: social.youtubeHref },
          ]}
        />
        <div className="flex flex-col gap-3 px-4 py-14 text-label sm:px-10">
          <span className="pb-1.5 text-meta text-white/72">Contact</span>
          <address className="not-italic">{contact.address}</address>
          <span>{contact.phone}</span>
          <a href={`mailto:${contact.email}`} className="hover:text-gold">
            {contact.email}
          </a>
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            WhatsApp us
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-x-10 gap-y-3 px-4 py-6 text-meta text-white/72 sm:px-10">
        <span>© {year} Travel Ease. All rights reserved.</span>
        <span>Visa decisions are made by the issuing embassy or authority.</span>
      </div>
    </footer>
  );
}
