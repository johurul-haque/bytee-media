import { Inter } from "next/font/google";
import { HeroSection } from "@/components/layouts/home/hero-section";
import { AnalyzeSection } from "@/components/layouts/home/analyze-section";
import { WorkingSteps } from "@/components/layouts/home/working-steps";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`container ${inter.className}`}>
      <HeroSection />
      <AnalyzeSection />
      <WorkingSteps />
    </main>
  );
}
