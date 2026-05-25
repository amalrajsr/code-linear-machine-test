import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";
import { Solutions } from "@/components/features/Solutions";
import { CoreBanking } from "@/components/features/CoreBanking";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-page-bg text-text-main">
      <Navbar />
      <Hero />
      <Solutions />
      <CoreBanking />
    </main>
  );
}
