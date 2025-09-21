import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Strategy from "./components/Strategy";
import ComparisonSection from "./components/ComparisonSection";
import GrowthBanner from "./components/GrowthBanner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Strategy />
      <ComparisonSection />
      <GrowthBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
