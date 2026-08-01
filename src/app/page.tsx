import Hero from "@/components/sections/Hero";
import PrecisionCallout from "@/components/sections/PrecisionCallout";
import About from "@/components/sections/About";
import CapabilityDeepDive from "@/components/sections/CapabilityDeepDive";
import Products from "@/components/sections/Products";
import ProgramTimeline from "@/components/sections/ProgramTimeline";
import SplitResearchPanel from "@/components/sections/SplitResearchPanel";
import TieredTrustWall from "@/components/sections/TieredTrustWall";
import FactoryGallery from "@/components/sections/FactoryGallery";
import Quality from "@/components/sections/Quality";
import Sustainability from "@/components/sections/Sustainability";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-slate-900">
      <Hero />
      <PrecisionCallout />
      <About />
      <CapabilityDeepDive />
      <Products />
      <ProgramTimeline />
      <SplitResearchPanel />
      <TieredTrustWall />
      <FactoryGallery />
      <Quality />
      <Sustainability />
      <Contact />
    </main>
  );
}
