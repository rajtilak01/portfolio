import { HeroParallax } from "@/components/ui/HeroParallax";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { NavbarTop } from "@/components/Navbar";
import { TimelineComponent } from "@/components/Timeline";
import { CardHoverEffectDemo } from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <HeroSection/> */}
      <NavbarTop/>
      <Hero/>
      {/* <TimelineComponent/> */}
      <CardHoverEffectDemo/>
    </main>
 );
}
