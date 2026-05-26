import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";
import { Solutions } from "@/components/features/Solutions";
import { CoreBanking } from "@/components/features/CoreBanking";
import { SystemFeatures } from "@/components/features/SystemFeatures";
import { DigitalBanking } from "@/components/features/DigitalBanking";
import { PaperlessCTA } from "@/components/features/PaperlessCTA";
import { CarouselMarquee } from "@/components/features/CarouselMarquee";
import { DigitalPaperlessCTA } from "@/components/features/DigitalPaperlessCTA";
import { Insights } from "@/components/features/Insights";

export default function Home() {
  return (
    <main className="min-h-screen  relative overflow-hidden bg-page-bg text-text-main">
      <Navbar />
      <Hero />
      <Solutions />
      <CoreBanking />
      <SystemFeatures />
      <PaperlessCTA />
      <CarouselMarquee />
      <DigitalBanking />
      <DigitalPaperlessCTA />
      <Insights />
    </main>
  );
}
