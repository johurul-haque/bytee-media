import { Inter } from "next/font/google";
import { HeroSection } from "@/components/layouts/home/hero-section";
import { AnalyzeSection } from "@/components/layouts/home/analyze-section";
import { WorkingSteps } from "@/components/layouts/home/working-steps";
import { Team } from "@/components/layouts/home/team";
import { OurServices } from "@/components/layouts/home/our-services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`container ${inter.className}`}>
      <HeroSection />
      <AnalyzeSection />
      <WorkingSteps />
      <Team />
      <OurServices />
    </main>
  );
}
