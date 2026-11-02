# Travel Ease website

Home page for Travel Ease, a visa and travel agency. Built with Next.js 15 (App Router), TypeScript and Tailwind CSS v4, following the Travel Ease design system.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

```
src/
  app/
    layout.tsx         Inter font, metadata, header, footer, skip link
    page.tsx           Home page: composes the sections in order
    globals.css        Design tokens (@theme) and glass utilities
  content/
    types.ts           Content shapes (mirror future Sanity documents)
    home.ts            All home page copy, links and images
  components/
    layout/            SiteHeader (sticky glass, mobile menu), SiteFooter
    home/              Hero, ServicesSection, TestimonialCarousel, AboutSection,
                       PackagesSection, StepsSection, SocialSections, ClosingCta
    ui/                ButtonLink, SectionHeader/SectionLabel, icons
  hooks/
    useAutoAdvance.ts  Timer-driven index for the hero slideshow and testimonials
public/brand/          Travel Ease logos (SVG)
```

## Design tokens

Defined in `src/app/globals.css` under `@theme`, so they work as Tailwind classes:

- Colours: `navy`, `gold`, `sky`, `offwhite`, `ink`, `ink-muted`, `hairline`, `fill-subtle`
- Type: `text-display`, `text-headline`, `text-numeral`, `text-lead`, `text-title`, `text-body`, `text-label`, `text-meta`, `text-caption`, plus `text-section` for responsive section headlines
- Layout: `max-w-page` (1440px), `h-header` (72px)
- Glass: `glass-header`, `glass-light`, `glass-navy` (only over photography)

## Before launch

Everything in `src/content/home.ts` written in `[square brackets]` is a placeholder:

- Prices, travel dates and group sizes on the packages
- The two stats in the About section
- Client testimonials (use real quotes, with the client's permission)
- Instagram handle, reel links and covers; YouTube video links and thumbnails
- Office address, phone, email and WhatsApp link (`https://wa.me/<number>`)

Photos are Unsplash stock images loaded from `images.unsplash.com`. Swap them for the agency's own photography when available (put files in `public/` or add the host to `next.config.ts`).

Navigation links point to pages that don't exist yet (`/visa-services`, `/vacation-packages`, …).

## Moving content to Sanity

The components only read from `src/content/home.ts`. To move to Sanity, create schemas matching `src/content/types.ts`, fetch them in `page.tsx` (a server component) and pass the data down as props.
