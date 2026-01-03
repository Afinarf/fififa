import About from "../components/about"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import Portfolio from "../components/portfolio"
import Services from "../components/services"
import Testimoni from "../components/testimoni"
import Footer from "../components/footer"
import { ActiveSectionProvider } from "../components/activeSectionContext"
import { ReactLenis } from 'lenis/react'



export default function LandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FIFIFA Multimedia',
    image: 'https://fififa-multimedia.com/logo.svg',
    description: 'Penyedia jasa sewa proyektor, TV, screen, dan peralatan meeting profesional di Bogor',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jalan Anggrek 2',
      addressLocality: 'Bogor',
      postalCode: '16169',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.523383580513461,
      longitude: 106.76913416971475
    },
    url: 'https://fififa-multimedia.com',
    telephone: '+62-877-1736-3285',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '19:00'
      }
    ]
  }

  return (
    <ReactLenis root>
      <ActiveSectionProvider>
        <div className="bg-white pt-[88px]">
          <Navbar />
          <div className="w-full overflow-x-hidden">
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
        </div>
      </ActiveSectionProvider>
    </ReactLenis>
  )
}