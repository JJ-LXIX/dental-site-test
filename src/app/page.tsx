"use client";
import { useState } from "react";
import ContactFormSection from "../../components/ContactFormSection/ContactFormSection";
import FaqSection from "../../components/FAQSection/FaqSection";
import HeroSection2 from "../../components/HeroSection/HeroSection2";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import WhyUsSection from "../../components/Why Us Section/WhyUsSection";
import { ReactLenis } from "@studio-freight/react-lenis";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import useDimension from "@/lib/hooks/useDimension";
import useMousePosition from "@/lib/hooks/useMousePosition";
import TeamSection from "../../components/TeamSection/TeamSection";
import SmallScreenTestimonial from "../../components/TestimonialSection/SmallScreenTestimonial";

export default function Home() {
  const { isMobile, isSmallScreen } = useDimension();
  const [clickable, setClickable] = useState(false);
  const mousePosition = useMousePosition();

  return (
    <main className="w-full">
      {/* <ReactLenis root> */}
      <HeroSection2 isSmallScreen={isSmallScreen} />
      <WhyUsSection isMobile={isMobile} />
      <ServiceSection
        mousePosition={mousePosition}
        isSmallScreen={isSmallScreen}
        setClickable={setClickable}
      />
      <TeamSection />
      <FaqSection isMobile={isMobile} setClickable={setClickable} />
      {isSmallScreen ? <SmallScreenTestimonial /> : <TestimonialSection />}
      <ContactFormSection />
      {isSmallScreen ? null : (
        <CustomCursor mousePosition={mousePosition} clickable={clickable} />
      )}
      {/* </ReactLenis> */}
    </main>
  );
}

{
}
