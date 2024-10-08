import CallToAction from "@/sections/CallToAction";
import Hero from "@/sections/Hero";
import LogoSection from "@/sections/LogoSection";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import FaqSection from "@/sections/FaqSection";

export default function Home() {
  return (
    <>
    <Hero/>
    <LogoSection/>
    <Services/>
    <Testimonials/>
    <FaqSection/>
    <CallToAction/>
    </>
  );
}
