import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--cream)] hidden lg:block" />
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-6 font-serif">
            We build websites that <span className="text-[var(--teal)] italic">convert</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-xl font-light">
            Custom-coded websites and web applications. No templates. No page builders. Every project includes a work-for-hire agreement — you own everything.
          </p>
          <div className="flex flex-wrap gap-8 mb-10 pt-6 border-t border-[var(--border)]">
            <div>
              <span className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-1">Background</span>
              <span className="font-serif text-lg font-semibold text-[var(--charcoal)]">Attorney + Engineer</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-1">Education</span>
              <span className="font-serif text-lg font-semibold text-[var(--charcoal)]">Stony Brook University</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-1">Focus</span>
              <span className="font-serif text-lg font-semibold text-[var(--charcoal)]">Full-Stack Development</span>
            </div>
          </div>
          <a href="#contact" className="btn-primary group">
            Discuss Your Project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative max-w-md ml-auto">
            <div className="absolute -top-5 -left-5 right-5 bottom-5 border-2 border-[var(--teal)]" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/headshot.jpeg"
                alt="Alain Alisca"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
