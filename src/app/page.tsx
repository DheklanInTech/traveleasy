import { AboutSection } from "@/components/home/AboutSection";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Hero } from "@/components/home/Hero";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { InstagramReels, YouTubeVideos } from "@/components/home/SocialSections";
import { StepsSection } from "@/components/home/StepsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PackagesSection />
      <StepsSection />
      <InstagramReels />
      <YouTubeVideos />
      <ClosingCta />
    </>
  );
}
