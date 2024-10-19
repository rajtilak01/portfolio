import { HeroParallax } from "@/components/ui/HeroParallax";
import HeroSection from "../components/HeroSection"
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { NavbarTop } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <HeroSection/> */}
      <NavbarTop/>
      <Hero/>
    </main>
 );
}
