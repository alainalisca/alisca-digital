import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-vc">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-grain" aria-hidden="true"></div>
      <div className="container-vc hero-inner">
        <span className="eyebrow hero-eyebrow">Studio &nbsp;/&nbsp; Est. 2025</span>
        <div className="hero-mark" aria-label="VENCER">
          <span>V</span><span>E</span><span>N</span><span>C</span><span>E</span><span>R</span>
        </div>
        <div className="hero-rule" aria-hidden="true"></div>
        <p className="hero-headline">
          Custom websites &amp; web applications,<br />
          built by an engineer who understands <em>both code and law</em>.
        </p>
        <p className="hero-sub">
          Custom-coded. No templates. No page builders. Every project ships with a
          work-for-hire agreement — you own the code, the content, and the keys.
        </p>
        <div className="hero-cta-row">
          <Link href="/contact" className="btn-vc btn-vc-teal">
            Start a Project <span className="arrow">→</span>
          </Link>
          <Link href="/work" className="btn-vc btn-vc-ghost btn-vc-on-dark">
            View Selected Work
          </Link>
        </div>
      </div>
      <div className="hero-meta">
        <div className="container-vc hero-meta-row">
          <span>Studio &nbsp;·&nbsp; Est. 2025</span>
          <span className="hero-scroll"><span className="line"></span> Scroll</span>
          <span>Booking projects · Q3 2026</span>
        </div>
      </div>
    </section>
  )
}
