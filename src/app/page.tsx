import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { OfferPopup } from "@/components/ui/OfferPopup";
import { HolidayPopup } from "@/components/ui/HolidayPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <WhyUsSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
      <OfferPopup />
      <HolidayPopup />
    </>
  );
}
