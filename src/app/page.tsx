import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AuctionGrid from "@/components/AuctionGrid";
import HowItWorks from "@/components/HowItWorks";
import BrowseByBrand from "@/components/BrowseByBrand";
import WhyVolta from "@/components/WhyVolta";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <AuctionGrid />
      <HowItWorks />
      <BrowseByBrand />
      <WhyVolta />
      <Testimonials />
      <Footer />
    </main>
  );
}
