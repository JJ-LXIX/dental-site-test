"use client";
import { useEffect, useState } from "react";
import ContactFormSection from "../../components/ContactFormSection/ContactFormSection";
import FaqSection from "../../components/FAQSection/FaqSection";
import HeroSection2 from "../../components/HeroSection/HeroSection2";
import ServiceSection from "../../components/ServicesSection/ServiceSection";
import WhyUsSection from "../../components/Why Us Section/WhyUsSection";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <main className="w-full">
      <ReactLenis root>
        <HeroSection2 isMobile={isMobile} />
        <WhyUsSection isMobile={isMobile} />
        <ServiceSection isMobile={isMobile} mousePosition={mousePosition} />
        <FaqSection isMobile={isMobile} />
        <ContactFormSection />
      </ReactLenis>
    </main>
  );
}
