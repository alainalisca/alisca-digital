'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#referrals', label: 'Referrals' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[var(--warm-white)]/95 backdrop-blur-md border-b border-[var(--border)]' : 'py-6 bg-[var(--warm-white)]'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-semibold text-[var(--charcoal)] tracking-wide">
          Vencer
        </Link>
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[var(--text-secondary)] text-sm font-medium uppercase tracking-wider hover:text-[var(--teal)] transition-colors">{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden lg:inline-flex btn-secondary text-xs">Start a Project</a>
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-[var(--charcoal)] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-[var(--charcoal)] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-[var(--charcoal)] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--warm-white)] border-b border-[var(--border)] py-6">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[var(--text-secondary)] text-sm font-medium uppercase tracking-wider hover:text-[var(--teal)] transition-colors" onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
            <li><a href="#contact" className="btn-secondary text-xs" onClick={() => setMobileMenuOpen(false)}>Start a Project</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
