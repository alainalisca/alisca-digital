const projects = [
  { title: 'Tribe', type: 'Web Application / PWA', description: 'Peer-to-peer fitness app connecting athletes for training sessions. Real-time matching, in-app chat, bilingual support, session management.', tech: ['Next.js 15', 'TypeScript', 'Supabase', 'PWA'] },
  { title: 'Alisca Law', type: 'Professional Website', description: 'Virtual law firm website for contract and transactional legal services. Clean, authoritative design with clear service positioning.', tech: ['Next.js', 'Responsive', 'SEO Optimized'] },
  { title: 'La Profe Vero', type: 'Business Website', description: 'Spanish tutoring business site with booking integration, pricing tiers, and warm Colombian branding for international students.', tech: ['HTML/CSS/JS', 'Booking Integration', 'Bilingual'] },
  { title: 'Jay Essentials', type: 'Business Website', description: 'Vending machine business serving NYC and Long Island. Professional multi-page site showcasing services and service areas.', tech: ['Next.js', 'Vercel', 'Custom Domain'] },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[var(--charcoal)] py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 block text-[var(--teal-light)]">Portfolio</span>
          <h2 className="text-4xl md:text-5xl text-white leading-tight font-serif">Selected work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group bg-[var(--charcoal-deep)] border border-white/10 overflow-hidden transition-all duration-300 hover:border-[var(--teal)] hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-[var(--teal)]/20 to-[var(--charcoal)] flex items-center justify-center">
                <span className="text-[var(--stone-light)] text-sm uppercase tracking-widest">Screenshot: {project.title}</span>
              </div>
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-[var(--teal-light)] mb-2 block">{project.type}</span>
                <h3 className="font-serif text-2xl text-white mb-3">{project.title}</h3>
                <p className="text-[var(--stone-light)] mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs uppercase tracking-wider px-3 py-1.5 bg-white/5 text-[var(--stone-light)] border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
