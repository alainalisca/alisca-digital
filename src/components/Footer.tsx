import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-vc">
      <div className="container-vc">
        <div className="footer-row">
          <div className="footer-mark" aria-label="VENCER">
            VENCE<span className="accent">R</span>
          </div>
          <div className="footer-meta">
            <div>alain@vencer.dev</div>
            <div>(347) 213-2947</div>
            <div>vencer.dev</div>
          </div>
        </div>
        <div className="footer-nav">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/referrals">Referrals</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vencer · A DBA of A Plus Fitness LLC</span>
          <span>Built in-house · Custom code · No templates</span>
        </div>
      </div>
    </footer>
  )
}
