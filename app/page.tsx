import { Navbar } from '@/app/components/Navbar'
import { HeroSection } from '@/app/components/HeroSection'
import { AboutSection } from '@/app/components/AboutSection'
import { ServicesSection } from '@/app/components/ServicesSection'
import { PortfolioSection } from '@/app/components/PortfolioSection'
import { ContactSection } from '@/app/components/ContactSection'
import { Footer } from '@/app/components/Footer'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
