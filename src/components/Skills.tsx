import Reveal from './Reveal'

const TOOLS = [
  { name: 'Next.js 14', cat: 'Framework' },
  { name: 'TypeScript', cat: 'Language' },
  { name: 'Tailwind CSS', cat: 'Styling' },
  { name: 'React', cat: 'UI' },
  { name: 'Supabase', cat: 'Backend' },
  { name: 'PostgreSQL', cat: 'Database' },
  { name: 'Stripe', cat: 'Payments · Intl.' },
  { name: 'Nequi', cat: 'Payments · CO' },
  { name: 'next-intl', cat: 'i18n' },
  { name: 'Vercel', cat: 'Hosting' },
  { name: 'Resend', cat: 'Transactional Email' },
  { name: 'GitHub', cat: 'Source / CI' },
]

export default function Skills() {
  return (
    <section className="toolkit-section section-vc">
      <div className="container-vc">
        <Reveal className="section-head">
          <span className="eyebrow">The Toolkit</span>
          <h2>Modern, boring, battle-tested.</h2>
          <p className="lead">Every line of code on this list is one I&apos;ve shipped to a paying client at least once. No experiments at your expense.</p>
        </Reveal>
        <Reveal stagger as="div" className="toolkit-grid">
          {TOOLS.map((t) => (
            <div key={t.name} className="tool">
              <span className="tool-name">{t.name}</span>
              <span className="tool-cat">{t.cat}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
