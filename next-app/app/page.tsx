import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-brand-cyan/30">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <BentoGrid />
        <SocialProof />
      </div>
      <Footer />
    </main>
  );
}
