import ContactFormSection from "../../components/ContactFormSection/ContactFormSection";
import FaqSection from "../../components/FAQSection/FaqSection";
import HeroSection2 from "../../components/HeroSection/HeroSection2";
import WhyUsSection from "../../components/Why Us Section/WhyUsSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection2 />
      <WhyUsSection />
      <FaqSection />
      <ContactFormSection />
    </main>
  );
}
