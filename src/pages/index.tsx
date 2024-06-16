import { Inter } from "next/font/google";
import { HeroSection } from "@/components/layouts/home/hero-section";
import { AnalyzeSection } from "@/components/layouts/home/analyze-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`container ${inter.className}`}>
      <HeroSection />
      <AnalyzeSection />
    </main>
  );
}
