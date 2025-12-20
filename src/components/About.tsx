export default function About() {
  const stats = [
    { number: '5+', label: 'Years Legal Experience' },
    { number: '4', label: 'Shipped Projects' },
    { number: '2', label: 'Degrees from SBU' },
  ]

  return (
    <section id="about" className="bg-[var(--cream)] py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr,1.5fr] gap-16">
        <div>
          <span className="section-label">About</span>
          <h2 className="section-title">Engineer with a<br />legal mind</h2>
        </div>
        <div>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            <strong className="text-[var(--text-primary)] font-semibold">I build digital products that solve real problems.</strong> With five years of legal experience drafting and negotiating contracts, I understand what businesses actually need — software that works reliably, scales gracefully, and doesn&apos;t require constant hand-holding.
          </p>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            My path to engineering wasn&apos;t traditional. After practicing law, I earned my software engineering certification from Stony Brook University because I wanted to build, not just advise. Now I combine both disciplines: the precision of legal thinking with the creativity of software development.
          </p>
          <p className="text-lg text-[var(--text-secondary)] mb-10">
            I work with small businesses, startups, fitness and wellness brands, and professionals who need more than a template — they need a partner who understands their business.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[var(--border)]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-5xl font-semibold text-[var(--teal)] leading-none">{stat.number}</div>
                <div className="text-xs uppercase tracking-widest text-[var(--stone)] mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
