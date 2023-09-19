"use client";
import FaqSection from "../../components/FAQSection/FaqSection";
import HeroSection2 from "../../components/HeroSection/HeroSection2";
import WhyUsSection from "../../components/Why Us Section/WhyUsSection";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <main className="w-full">
      <ReactLenis root>
        <HeroSection2 />
        <WhyUsSection />
        <FaqSection />
      </ReactLenis>
    </main>
  );
}
