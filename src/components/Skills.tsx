const skillCategories = [
  { title: 'Frontend', skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS / JS', 'Responsive Design'] },
  { title: 'Backend', skills: ['Node.js', 'Supabase', 'PostgreSQL', 'REST APIs', 'Server-Side Rendering'] },
  { title: 'Integrations', skills: ['Stripe Payments', 'Authentication Systems', 'Email (Resend, SendGrid)', 'Scheduling Tools', 'Third-Party APIs'] },
  { title: 'Deployment', skills: ['Vercel', 'Git / GitHub', 'Domain Configuration', 'SSL / Security', 'PWA Distribution'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-16 bg-[var(--warm-white)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">The toolkit</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-sm uppercase tracking-widest text-[var(--charcoal)] font-semibold mb-4 pb-3 border-b-2 border-[var(--teal)]">{category.title}</h4>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill} className="py-3 text-[var(--text-secondary)] border-b border-[var(--border)] last:border-b-0">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
