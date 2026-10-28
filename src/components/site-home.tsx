import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AudiencesSection } from "@/components/sections/audiences-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FleetSection } from "@/components/sections/fleet-section";
import { GhanaSection } from "@/components/sections/ghana-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { MapSection } from "@/components/sections/map-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { VisionSection } from "@/components/sections/vision-section";

export function SiteHome() {
  return (
    <>
      <SiteHeader />
      <main className="w-full">
        <HeroSection />
        <HowItWorksSection />
        <div id="businesses" className="sr-only" aria-hidden />
        <AudiencesSection />
        <FleetSection />
        <ComparisonSection />
        <VisionSection />
        <GhanaSection />
        <TechnologySection />
        <PartnersSection />
        <MapSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
