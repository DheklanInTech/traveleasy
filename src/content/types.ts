/**
 * Content shapes for the home page. They mirror what a CMS (e.g. Sanity)
 * document would return, so `src/content/home.ts` can later be swapped for
 * a fetch without touching the components.
 */

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  href: string;
  image: ImageAsset;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  trip: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TravelPackage {
  title: string;
  price: string;
  location: string;
  dates: string;
  duration: string;
  audience: string;
  href: string;
  image: ImageAsset;
}

export interface Step {
  title: string;
  text: string;
}

export interface SocialVideo {
  title: string;
  href: string;
  thumbnail: ImageAsset;
}

export interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  whatsappHref: string;
}

export interface SocialProfiles {
  instagramHandle: string;
  instagramHref: string;
  youtubeHref: string;
}
