import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Pricing from '@/components/Pricing'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent rates for custom websites and web applications. No discovery-call gatekeeping on price.',
}

const INCLUDED = [
  { title: 'Work-for-hire IP assignment', body: 'You own the code, the design, the content, and the rights — no questions, no carve-outs, no licensing fees.' },
  { title: 'Source code & deployment access', body: 'You get the GitHub repo, the Vercel project, the domain registrar credentials. If we ever part ways, you walk with everything.' },
  { title: 'Written scope & fixed price', body: 'The scope of work and the price are signed before development starts. Any changes are documented and re-priced as a change order.' },
  { title: 'Pre-launch review window', body: 'Two rounds of revisions on staging before launch. Most projects need one; the second is your safety net.' },
  { title: '30 days of post-launch fixes', body: 'Anything that breaks because of how it was built is fixed at no charge for 30 days after launch.' },
  { title: 'Bilingual capability', body: 'EN/ES communication and copy review at no upcharge. Full bilingual site builds run +$500 to base scope.' },
]

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      <PageHeader
        bgImage="https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=2000&q=70&auto=format&fit=crop"
        eyebrow="Transparent Rates"
        title={<>No discovery-call gatekeeping.<br /><em>Prices listed.</em></>}
        lead={<>Final scope is set in writing before any work starts. These are starting ranges based on past projects — your number lands somewhere in here once we&apos;ve talked through what you actually need.</>}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      />

      <section className="pricing-section section-vc">
        <div className="container-vc">
          <Pricing />

          <Reveal className="pricing-includes">
            <h3>What every engagement includes — at no extra charge.</h3>
            <div className="pricing-includes-grid">
              {INCLUDED.map((it) => (
                <div key={it.title} className="pricing-includes-item">
                  <h4>{it.title}</h4>
                  <p>{it.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div style={{ maxWidth: 760, margin: '70px auto 0' }}>
            <Reveal>
              <span className="eyebrow">Notes & FAQ</span>
              <h2 style={{ marginTop: 14 }}>A few questions worth answering up front.</h2>
              <p className="muted" style={{ marginTop: 24 }}>
                <strong>Why a range and not a fixed price?</strong> Because every project is different in scope. The range is honest. Once we talk through what you actually need, the proposal is a single number, in writing, before any work starts.
              </p>
              <p className="muted">
                <strong>Is the discovery call free?</strong> The first 30-minute conversation is free. Detailed scoping for a Tier 02 web application engagement is a paid discovery — typically a few hundred dollars credited toward the build if you proceed.
              </p>
              <p className="muted">
                <strong>Can I pay in installments?</strong> Tier 01 projects are paid in two installments (50% to start, 50% on launch). Tier 02 projects are typically paid in three or four milestones. Tier 04 retainers are billed monthly in advance.
              </p>
              <p className="muted">
                <strong>What if my project doesn&apos;t fit any of these tiers?</strong> Talk to me anyway. The categories are how most projects shake out, not a wall.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="contact-section-vc">
        <div className="container-vc">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
              <span className="eyebrow">Sounds about right?</span>
              <h2 style={{ marginTop: 14 }}>Let&apos;s talk specifics.</h2>
              <p style={{ marginTop: 22, color: 'rgba(250,248,243,0.78)' }}>
                Tell me about the project and I&apos;ll come back with a real number — not a range — within one business day.
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
