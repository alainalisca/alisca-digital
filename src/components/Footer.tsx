import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal-deep)] py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/" aria-label="Vencer home" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/vencer-logo-white.svg" alt="Vencer" className="h-7 w-auto" />
        </Link>
        <div className="text-center">
          <p className="text-[var(--stone)] text-sm">© 2026 Vencer. All rights reserved.</p>
          <p className="text-[var(--stone)] text-xs mt-1">A DBA of A Plus Fitness LLC</p>
        </div>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/alainaliscaesq/" target="_blank" rel="noopener noreferrer" className="text-[var(--stone-light)] text-sm hover:text-[var(--teal-light)] transition-colors">LinkedIn</a>
          <a href="https://github.com/alainalisca" target="_blank" rel="noopener noreferrer" className="text-[var(--stone-light)] text-sm hover:text-[var(--teal-light)] transition-colors">GitHub</a>
          <a href="https://aliscalaw.com" target="_blank" rel="noopener noreferrer" className="text-[var(--stone-light)] text-sm hover:text-[var(--teal-light)] transition-colors">Alisca Law</a>
        </div>
      </div>
    </footer>
  )
}
