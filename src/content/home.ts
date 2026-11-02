import { unsplash } from "@/lib/unsplash";
import type {
  ContactDetails,
  ImageAsset,
  NavLink,
  Service,
  SocialProfiles,
  SocialVideo,
  Stat,
  Step,
  Testimonial,
  TravelPackage,
} from "./types";

/*
 * Home page content. Values in [square brackets] are placeholders the
 * Travel Ease team must replace with real details before launch.
 * Photos are Unsplash stock images; swap for the agency's own when available.
 */

export const mainNav: NavLink[] = [
  { label: "Visa services", href: "/visa-services" },
  { label: "Packages", href: "/vacation-packages" },
  { label: "Corporate travel", href: "/corporate-travel" },
  { label: "Study abroad", href: "/study-abroad" },
  { label: "Guides", href: "/travel-guides" },
  { label: "About", href: "/about" },
];

export const consultationHref = "/contact";

export const heroSlides: ImageAsset[] = [
  { src: unsplash("1501785888041-af3ef285b470"), alt: "A wooden boat on a turquoise alpine lake below mountain peaks" },
  { src: unsplash("1507525428034-b723cf961d3e"), alt: "Waves rolling onto a sandy beach at sunset" },
  { src: unsplash("1512453979798-5ea266f8880c"), alt: "The Dubai skyline at sunset" },
  { src: unsplash("1436491865332-7a61a109cc05"), alt: "An aircraft wing above the clouds" },
  { src: unsplash("1547471080-7cc2caa01a7e"), alt: "An acacia tree on the savanna at sunset" },
];

export const heroHighlights: string[] = [
  "Tourist and visitor visas",
  "Business and corporate travel",
  "Student visas and admissions",
  "Flights, stays and transfers",
];

export const services: Service[] = [
  {
    title: "Visa services",
    description: "Tourist, business and student visas, consultation, application assistance and cover letter writing.",
    href: "/visa-services",
    image: { src: unsplash("1488646953014-85cb44e25828"), alt: "A travel map with a notebook, guidebooks and a camera" },
  },
  {
    title: "Vacation packages",
    description: "Holidays, family trips, honeymoons, group travel and special-event getaways.",
    href: "/vacation-packages",
    image: { src: unsplash("1520250497591-112f2f40a3f4"), alt: "A resort pool among palm trees and mountains" },
  },
  {
    title: "Flights and accommodation",
    description: "Flight bookings, hotel reservations and travel insurance, arranged in one place.",
    href: "/flights-accommodation",
    image: { src: unsplash("1436491865332-7a61a109cc05"), alt: "An aircraft wing above the clouds" },
  },
  {
    title: "Corporate travel",
    description: "Executive and team travel, conference trips and group coordination, tailored to your organisation.",
    href: "/corporate-travel",
    badge: "Core service",
    image: { src: unsplash("1530521954074-e64f6810b32d"), alt: "A business traveller waiting in an airport lounge as a plane takes off" },
  },
  {
    title: "Concierge services",
    description: "Personal itineraries, airport transfers, hotel arrangements and special requests.",
    href: "/concierge",
    image: { src: unsplash("1566073771259-6a8506099945"), alt: "A boutique hotel terrace with loungers beside a pool" },
  },
  {
    title: "Study abroad",
    description: "Admissions guidance, scholarships, student visas and exchange programmes.",
    href: "/study-abroad",
    image: { src: unsplash("1522202176988-66273c2fd55f"), alt: "Three students working together on laptops" },
  },
];

export const testimonialsImage: ImageAsset = {
  src: unsplash("1529156069898-49953e39b3ac"),
  alt: "A group of friends sitting together looking out over a city",
};

// Replace with real client testimonials (with their permission) before launch.
export const testimonials: Testimonial[] = [
  {
    quote: "[Client quote about their visa application, in their own words. One or two sentences.]",
    name: "[Client name]",
    trip: "[Trip, e.g. UK visitor visa]",
  },
  {
    quote: "[Client quote about a holiday or honeymoon package Travel Ease planned for them.]",
    name: "[Client name]",
    trip: "[Trip, e.g. Dubai family holiday]",
  },
  {
    quote: "[Client quote from a corporate or study abroad traveller about the support they received.]",
    name: "[Client name]",
    trip: "[Trip, e.g. Canada study permit]",
  },
];

export const about = {
  title: "Not just bookings. A smooth, stress-free journey from planning to departure",
  body: "Travel Ease is a visa and travel agency for people who want the paperwork done right. We check every document before you submit it, plan the trip around you, and stay on hand until you land.",
  image: { src: unsplash("1489392191049-fc10c97e64b6"), alt: "Mount Kilimanjaro rising above acacia trees on the savanna" } satisfies ImageAsset,
  stats: [
    { value: "[00]+", label: "Visa applications supported" },
    { value: "[00]+", label: "Destinations we plan trips to" },
  ] satisfies Stat[],
};

export const packages: TravelPackage[] = [
  {
    title: "Dubai city and desert escape",
    price: "[Price]",
    location: "Dubai, United Arab Emirates",
    dates: "[Dates]",
    duration: "5 days, 4 nights",
    audience: "Couples, families and friends",
    href: "/vacation-packages/dubai",
    image: { src: unsplash("1512453979798-5ea266f8880c"), alt: "The Dubai skyline at sunset with the Burj Khalifa" },
  },
  {
    title: "Paris honeymoon getaway",
    price: "[Price]",
    location: "Paris, France",
    dates: "[Dates]",
    duration: "7 days, 6 nights",
    audience: "Couples",
    href: "/vacation-packages/paris",
    image: { src: unsplash("1502602898657-3e91760cbb34"), alt: "The Eiffel Tower over the Seine at dusk" },
  },
  {
    title: "Maasai Mara safari",
    price: "[Price]",
    location: "Narok County, Kenya",
    dates: "[Dates]",
    duration: "4 days, 3 nights",
    audience: "Groups of up to [00]",
    href: "/vacation-packages/maasai-mara",
    image: { src: unsplash("1516026672322-bc52d61a55d5"), alt: "A lone acacia tree on the savanna at sunrise" },
  },
  {
    title: "London family holiday",
    price: "[Price]",
    location: "London, United Kingdom",
    dates: "[Dates]",
    duration: "8 days, 7 nights",
    audience: "Families with children",
    href: "/vacation-packages/london",
    image: { src: unsplash("1513635269975-59663e0ac1ad"), alt: "Tower Bridge and the Thames in London from above" },
  },
];

export const stepsImage: ImageAsset = {
  src: unsplash("1517400508447-f8dd518b86db"),
  alt: "A traveller with a backpack reading the departures board in an airport",
};

export const steps: Step[] = [
  { title: "Book a consultation", text: "Tell us where you are going, when and why." },
  { title: "Get your checklist", text: "We list every document your application needs." },
  { title: "Submit with confidence", text: "We review, book appointments and track progress." },
  { title: "Travel with ease", text: "Flights, stay and transfers ready before you leave." },
];

export const social: SocialProfiles = {
  instagramHandle: "@[instagram handle]",
  instagramHref: "https://www.instagram.com/",
  youtubeHref: "https://www.youtube.com/",
};

// Replace with real reel links and cover images.
export const reels: SocialVideo[] = [
  { title: "Reel 1", href: social.instagramHref, thumbnail: { src: unsplash("1527631746610-bca00a040d60"), alt: "" } },
  { title: "Reel 2", href: social.instagramHref, thumbnail: { src: unsplash("1523906834658-6e24ef2386f9"), alt: "" } },
  { title: "Reel 3", href: social.instagramHref, thumbnail: { src: unsplash("1539635278303-d4002c07eae3"), alt: "" } },
  { title: "Reel 4", href: social.instagramHref, thumbnail: { src: unsplash("1503220317375-aaad61436b1b"), alt: "" } },
  { title: "Reel 5", href: social.instagramHref, thumbnail: { src: unsplash("1540959733332-eab4deabeeaf"), alt: "" } },
];

// Replace with real video links and thumbnails (https://i.ytimg.com/vi/<id>/maxresdefault.jpg).
export const videos: SocialVideo[] = [
  { title: "[Video title] Business travel, planned end to end", href: social.youtubeHref, thumbnail: { src: unsplash("1474302770737-173ee21bab63"), alt: "" } },
  { title: "[Video title] Planning a beach honeymoon", href: social.youtubeHref, thumbnail: { src: unsplash("1507525428034-b723cf961d3e"), alt: "" } },
  { title: "[Video title] Schengen visa documents, step by step", href: social.youtubeHref, thumbnail: { src: unsplash("1499856871958-5b9627545d1a"), alt: "" } },
  { title: "[Video title] What a Kenya safari really costs", href: social.youtubeHref, thumbnail: { src: unsplash("1547471080-7cc2caa01a7e"), alt: "" } },
];

export const contact: ContactDetails = {
  address: "[Office address]",
  phone: "[Phone number]",
  email: "[Email address]",
  whatsappHref: "https://wa.me/",
};

export const footerServices: NavLink[] = [
  { label: "Visa services", href: "/visa-services" },
  { label: "Vacation packages", href: "/vacation-packages" },
  { label: "Flights and accommodation", href: "/flights-accommodation" },
  { label: "Corporate travel", href: "/corporate-travel" },
  { label: "Concierge services", href: "/concierge" },
  { label: "Study abroad and education", href: "/study-abroad" },
];

export const footerCompany: NavLink[] = [
  { label: "Travel guides and resources", href: "/travel-guides" },
  { label: "About Travel Ease", href: "/about" },
  { label: "Book a consultation", href: consultationHref },
];
