const ITEMS = [
  'Next.js 14',
  'Bilingual EN/ES',
  'Work-for-hire IP',
  'Supabase & Postgres',
  'Stripe + Nequi',
  'Stony Brook · St. John\'s Law',
  'No templates',
  'Custom code, every time',
]

export default function Marquee() {
  return (
    <div className="marquee-vc" aria-hidden="true">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="dot"></span>
          </span>
        ))}
      </div>
    </div>
  )
}
