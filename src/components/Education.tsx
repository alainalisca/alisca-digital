const credentials = [
  { year: '2025', title: 'Software Engineering Certificate', school: 'Stony Brook University', detail: 'Full-stack web development, modern frameworks, database design' },
  { year: '2019', title: 'Juris Doctor (JD)', school: "St. John's University School of Law", detail: 'NY Bar Admitted 2020 • Contract & Transactional Law' },
  { year: 'Undergraduate', title: 'Dual Degree', school: 'Stony Brook University', detail: 'Technological Systems Management & Sociology' },
]

export default function Education() {
  return (
    <section id="education" className="bg-[var(--cream)] py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label">Education</span>
          <h2 className="section-title">Credentials</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((cred) => (
            <div key={cred.title} className="p-8 bg-[var(--warm-white)] border border-[var(--border)]">
              <span className="text-xs uppercase tracking-widest text-[var(--teal)] font-semibold mb-3 block">{cred.year}</span>
              <h3 className="font-serif text-2xl text-[var(--charcoal)] mb-2">{cred.title}</h3>
              <p className="text-[var(--text-secondary)] mb-4">{cred.school}</p>
              <p className="text-sm text-[var(--stone)] italic">{cred.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
