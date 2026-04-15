import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Referrals from '@/components/Referrals'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Skills />
      <Education />
      <Referrals />
      <Contact />
      <Footer />
    </main>
  )
}
