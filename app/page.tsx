import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-page-bg text-white">
      <Navbar />
      <Hero />
    </main>
  );
}
