"use client";
import ContactFormSection from "../../components/ContactFormSection/ContactFormSection";
import FaqSection from "../../components/FAQSection/FaqSection";
import HeroSection2 from "../../components/HeroSection/HeroSection2";
import ServiceSection from "../../components/ServicesSection/ServiceSection";
import WhyUsSection from "../../components/Why Us Section/WhyUsSection";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <main className="w-full">
      <ReactLenis root>
        <HeroSection2 />
        <WhyUsSection />
        <ServiceSection />
        <FaqSection />
        <ContactFormSection />
      </ReactLenis>
    </main>
  );
}
