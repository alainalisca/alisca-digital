'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/referrals', label: 'Referrals' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Inner pages: nav is always solid (since they don't have a dark hero)
  const navClass = `nav-vc ${(!isHome || scrolled) ? 'solid' : ''}`

  return (
    <header className={navClass}>
      <div className="container-vc nav-row">
        <Link href="/" aria-label="Vencer home" className="flex items-center" style={{ gap: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/vencer-logo.svg" alt="Vencer" style={{ height: 30, width: 'auto' }} />
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname?.startsWith(l.href) ? 'active' : ''}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-vc btn-vc-primary nav-cta">
            Start a Project <span className="arrow">→</span>
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
          style={{ display: 'none' }}
        >
          ≡
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--warm-white)',
            borderBottom: '1px solid var(--border)',
            padding: '24px 0',
          }}
        >
          <nav className="container-vc" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-primary)' }}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-vc btn-vc-primary" style={{ alignSelf: 'flex-start' }}>
              Start a Project <span className="arrow">→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
