'use client'
import About from "../components/about";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import Services from "../components/services";
import Testimoni from "../components/testimoni";
import Footer from "../components/footer";
import { ActiveSectionProvider } from "../components/activeSectionContext";

export default function LandingPage() {
  return (
    <ActiveSectionProvider>
    <div className="bg-white">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div id="home" className="scroll-mt-28">
        <Hero />
      </div>
      <div id="about" className="scroll-mt-34">
        <About />
      </div>
      <div id="portfolio" className="pt-30">
        <Portfolio />
      </div>
      <div id="services" className="pt-30">
        <Services />
      </div>
      <div id="testimoni" className="pt-30">
        <Testimoni />
      </div>
      <div id="contact" className="pt-30 pb-5 sm:pb-10 md:pb-10 lg:pb-10">
        <Footer />
      </div>
    </div>
    </ActiveSectionProvider>
  )
}