import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import About from '@/components/About'
import Philosophy from '@/components/Philosophy'
import Education from '@/components/Education'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About',
  description: 'Vencer is a custom web development studio operated by Al Alisca — software engineer and NY-barred attorney. The combination is the difference.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <PageHeader
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=70&auto=format&fit=crop"
        eyebrow="About"
        title={<>An engineer who reads contracts.<br /><em>An attorney who ships code.</em></>}
        lead={<>Vencer is a one-person, online studio. The combination of legal and engineering training is the reason the work product looks the way it does — careful in the construction, careful in the paperwork.</>}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <About />
      <Philosophy showAboutLink={false} />
      <Education />

      <section className="contact-section-vc">
        <div className="container-vc">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
              <span className="eyebrow">Work with me</span>
              <h2 style={{ marginTop: 14 }}>Tell me what you&apos;re building.</h2>
              <p style={{ marginTop: 22, color: 'rgba(250,248,243,0.78)' }}>
                A few sentences is all I need to give you a candid read on scope, timeline, and price.
              </p>
              <Link href="/contact" className="btn-vc btn-vc-teal" style={{ marginTop: 30 }}>
                Start a Project <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
