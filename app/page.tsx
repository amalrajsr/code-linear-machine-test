import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";
import { Solutions } from "@/components/features/Solutions";
import { CoreBanking } from "@/components/features/CoreBanking";
import { SystemFeatures } from "@/components/features/SystemFeatures";
import { PaperlessCTA } from "@/components/features/PaperlessCTA";
import { CarouselMarquee } from "@/components/features/CarouselMarquee";

export default function Home() {
  return (
    <main className="min-h-screen  relative overflow-hidden bg-page-bg text-text-main">
      <div className=" max-w-360 mx-auto">
        <Navbar />
        <Hero />
        <Solutions />
        <CoreBanking />
        <SystemFeatures />
        <PaperlessCTA />
      </div>
      <CarouselMarquee />
    </main>
  );
}
