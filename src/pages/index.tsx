import { HeroSection } from "@/components/layouts/home/hero-section";
import { AnalyzeSection } from "@/components/layouts/home/analyze-section";
import { WorkingSteps } from "@/components/layouts/home/working-steps";
import { Team } from "@/components/layouts/home/team";
import { OurServices } from "@/components/layouts/home/our-services";
import { Packages } from "@/components/layouts/home/packages";
import { WhyUs } from "@/components/layouts/home/why-us";
import { inter } from "@/lib/fonts";
import { Testimonials } from "@/components/layouts/home/testimonials";

export default function Home() {
  return (
    <main className={`container ${inter.className}`}>
      <HeroSection />
      <AnalyzeSection />
      <WorkingSteps />
      <Team />
      <OurServices />
      <Packages />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
