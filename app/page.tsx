import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArchDivider from "@/components/ArchDivider";
import Pillars from "@/components/Pillars";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import VideoTour from "@/components/VideoTour";
import RoomPricing from "@/components/RoomPricing";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Meals from "@/components/Meals";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ArchDivider />
      <Pillars />
      <Amenities />
      <Gallery />
      <VideoTour />
      <RoomPricing />
      <HowItWorks />
      <Testimonials />
      <Meals />
      <Location />
      <ArchDivider />
      <Footer />
    </main>
  );
}
