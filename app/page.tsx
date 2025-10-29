import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { AdventCalendarSection } from "@/components/home/AdventCalendarSection";
import { AboutSection } from "@/components/home/AboutSection";
import { RealisationsSection } from "@/components/home/RealisationsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AdventCalendarSection />
        <AboutSection />
        <RealisationsSection />
        <PartnersSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
