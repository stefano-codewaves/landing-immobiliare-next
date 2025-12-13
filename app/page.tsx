import HeroSection from "@/components/long-a/HeroSection";
import TimelineSection from "@/components/long-a/TimelineSection";
import GallerySection from "@/components/long-a/GallerySection";
import MapSection from "@/components/long-a/MapSection";
import FloorPlansSection from "@/components/long-a/FloorPlansSection";
import StatisticsSection from "@/components/long-a/StatisticsSection";
import BenefitsSection from "@/components/long-a/BenefitsSection";
import SwiperGallery from "@/components/long-a/SwiperGallery";
import ContactForm from "@/components/long-a/ContactForm";
import Footer from "@/components/long-a/Footer";

export default function HomePage() {
  const availableUnits = 12; // From GraphQL stub

  return (
    <main className="w-full h-full xl:overflow-hidden flex flex-col space-y-30 xl:space-y-50">
      <div className="my-0">
        <HeroSection availableUnits={availableUnits} />
        <TimelineSection />
      </div>
      <GallerySection />
      <MapSection />
      <FloorPlansSection />
      <BenefitsSection />
      <StatisticsSection />
      <SwiperGallery />
      <ContactForm />
      <Footer />
    </main>
  );
}
