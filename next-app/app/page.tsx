import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { FloatingCTA } from "@/components/shared/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <AboutTeaser />
      <LeadMagnet />
      <ProjectsGallery />
      <Reviews />
      <ServiceArea />
      <FAQ />
      <CTABanner />
      <FloatingCTA />
    </div>
  );
}
