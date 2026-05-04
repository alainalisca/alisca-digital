import Reveal from './Reveal'

const TIERS = [
  {
    label: 'Tier 01',
    title: 'Business Website',
    amt: '$500',
    unit: '– $1,500',
    desc: 'Marketing sites, landing pages, portfolios. Custom design, mobile-first, deployed and live on your own domain.',
  },
  {
    label: 'Tier 02 · Most Common',
    title: 'Web Application',
    amt: '$2,500',
    unit: '– $10,000+',
    desc: 'User accounts, databases, payments, internal tooling. Scoped per project after a paid discovery.',
    featured: true,
  },
  {
    label: 'Tier 03',
    title: 'Hourly Consulting',
    amt: '$50',
    unit: '/ hour',
    desc: "Code reviews, audits, second opinions, fixes that don't justify a full engagement.",
  },
  {
    label: 'Tier 04',
    title: 'Maintenance Retainer',
    amt: '$200',
    unit: '– $500 / mo',
    desc: 'Ongoing updates, hosting management, security patches, priority support windows. Month-to-month, cancel anytime.',
  },
]

export default function Pricing() {
  return (
    <Reveal stagger as="div" className="pricing-grid">
      {TIERS.map((t) => (
        <div key={t.title} className={`price-card ${t.featured ? 'featured' : ''}`}>
          <span className="label">{t.label}</span>
          <h3>{t.title}</h3>
          <div className="amt">{t.amt}<span className="unit">{t.unit}</span></div>
          <p>{t.desc}</p>
        </div>
      ))}
    </Reveal>
  )
}
