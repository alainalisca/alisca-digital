const pricingData = [
  { service: 'Business Website', description: 'Marketing sites, landing pages, portfolios (5-10 pages)', price: '$1,500 – $3,000' },
  { service: 'Web Application', description: 'Custom apps with database, authentication, business logic', price: '$3,500 – $8,000+' },
  { service: 'Progressive Web App', description: 'Full PWA with offline support, push notifications, installable', price: '$4,000 – $10,000+' },
  { service: 'Hourly Consulting', description: 'Code review, technical advisory, small tasks, troubleshooting', price: '$75/hour' },
  { service: 'Maintenance Retainer', description: 'Monthly updates, hosting management, priority support', price: '$200 – $500/month' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Transparent rates</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--charcoal)] text-white">
                <th className="px-8 py-5 text-left font-serif text-lg font-semibold tracking-wide">Service</th>
                <th className="px-8 py-5 text-left font-serif text-lg font-semibold tracking-wide">Description</th>
                <th className="px-8 py-5 text-right font-serif text-lg font-semibold tracking-wide">Investment</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item) => (
                <tr key={item.service} className="border-b border-[var(--border)] transition-colors hover:bg-[var(--cream)]">
                  <td className="px-8 py-6 font-serif text-xl font-semibold text-[var(--charcoal)]">{item.service}</td>
                  <td className="px-8 py-6 text-[var(--text-secondary)]">{item.description}</td>
                  <td className="px-8 py-6 text-right font-serif text-xl font-semibold text-[var(--teal)]">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 p-6 bg-[var(--cream)] border-l-4 border-[var(--teal)]">
          <p className="text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">How it works:</strong> Every project starts with a free consultation to understand your needs. I&apos;ll provide a detailed scope and fixed quote before any work begins. No surprises, no scope creep billing. Payment plans available for larger projects.
          </p>
        </div>
      </div>
    </section>
  )
}
