import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoSection from "@/sections/LogoSection";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <LogoSection/>
    <Services/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
    </>
  );
}
