"use client";
import { useEffect, useState } from "react";
import ContactFormSection from "../../components/ContactFormSection/ContactFormSection";
import FaqSection from "../../components/FAQSection/FaqSection";
import HeroSection2 from "../../components/HeroSection/HeroSection2";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import WhyUsSection from "../../components/Why Us Section/WhyUsSection";
import { ReactLenis } from "@studio-freight/react-lenis";
import CustomCursor from "../../components/CustomCursor/CustomCursor";

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [clickable, setClickable] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1280) {
      setIsSmallScreen(false);
    } else setIsSmallScreen(true);
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
        <ServiceSection
          mousePosition={mousePosition}
          isSmallScreen={isSmallScreen}
          setClickable={setClickable}
        />
        <FaqSection isMobile={isMobile} setClickable={setClickable} />
        <ContactFormSection />
        {isSmallScreen ? null : (
          <CustomCursor mousePosition={mousePosition} clickable={clickable} />
        )}
      </ReactLenis>
    </main>
  );
}

{
}
