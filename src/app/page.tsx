import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Philosophy from '@/components/Philosophy'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services variant="home-preview" />
      <Portfolio variant="home-preview" />
      <Philosophy showAboutLink />
      <Contact variant="home-teaser" />
      <Footer />
    </main>
  )
}
