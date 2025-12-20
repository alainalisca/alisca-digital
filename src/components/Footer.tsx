import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal-deep)] py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/" className="font-serif text-xl font-semibold text-white tracking-wide">
          Alisca<span className="text-[var(--teal)]">Digital</span>
        </Link>
        <p className="text-[var(--stone)] text-sm">© {new Date().getFullYear()} Alisca Digital. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="https://linkedin.com/in/alainalisca" target="_blank" rel="noopener noreferrer" className="text-[var(--stone-light)] text-sm hover:text-[var(--teal-light)] transition-colors">LinkedIn</a>
          <a href="https://github.com/alainalisca" target="_blank" rel="noopener noreferrer" className="text-[var(--stone-light)] text-sm hover:text-[var(--teal-light)] transition-colors">GitHub</a>
          <a href="https://aliscalaw.com" target="_blank" rel="noopener noreferrer" className="text-[var(--stone-light)] text-sm hover:text-[var(--teal-light)] transition-colors">Alisca Law</a>
        </div>
      </div>
    </footer>
  )
}
