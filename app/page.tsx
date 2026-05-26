import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";
import { Footer } from "@/components/layout/Footer";
import dynamic from 'next/dynamic';

const Solutions = dynamic(() => import('@/components/features/Solutions').then(mod => mod.Solutions));
const CoreBanking = dynamic(() => import('@/components/features/CoreBanking').then(mod => mod.CoreBanking));
const SystemFeatures = dynamic(() => import('@/components/features/SystemFeatures').then(mod => mod.SystemFeatures));
const DigitalBanking = dynamic(() => import('@/components/features/DigitalBanking').then(mod => mod.DigitalBanking));
const PaperlessCTA = dynamic(() => import('@/components/features/PaperlessCTA').then(mod => mod.PaperlessCTA));
const CarouselMarquee = dynamic(() => import('@/components/features/CarouselMarquee').then(mod => mod.CarouselMarquee));
const DigitalPaperlessCTA = dynamic(() => import('@/components/features/DigitalPaperlessCTA').then(mod => mod.DigitalPaperlessCTA));
const Insights = dynamic(() => import('@/components/features/Insights').then(mod => mod.Insights));
const CaseStudies = dynamic(() => import('@/components/features/CaseStudies').then(mod => mod.CaseStudies));

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-360 mx-auto relative overflow-hidden bg-page-bg text-text-main">
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
      <CaseStudies/>
      <Footer />
    </main>
  );
}
