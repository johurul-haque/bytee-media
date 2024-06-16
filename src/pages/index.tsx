import { Inter } from "next/font/google";
import { HeroSection } from "@/components/layouts/home/hero-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`container ${inter.className}`}>
      <HeroSection />
    </main>
  );
}
