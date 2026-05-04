import Link from 'next/link'
import Reveal from './Reveal'

export const SERVICES = [
  {
    img: 1,
    num: '01 / Marketing',
    title: 'Business Websites',
    desc: 'Professional marketing sites, landing pages, and portfolios. Clean design, fast performance, built to convert.',
    price: 'From $500',
    slug: 'business-websites',
  },
  {
    img: 2,
    num: '02 / Software',
    title: 'Web Applications',
    desc: 'Custom apps with user accounts, databases, and business logic. Booking systems to client portals to internal tools.',
    price: 'From $2,500',
    slug: 'web-applications',
  },
  {
    img: 3,
    num: '03 / Mobile',
    title: 'Progressive Web Apps',
    desc: 'App-like experiences on any device, no app-store approval. Offline capability, push notifications, install.',
    price: 'Scoped per project',
    slug: 'progressive-web-apps',
  },
  {
    img: 4,
    num: '04 / Plumbing',
    title: 'Integrations',
    desc: 'Connect your tools — Stripe, scheduling, CRMs, email marketing, third-party APIs — wired into your workflow.',
    price: 'Hourly or fixed',
    slug: 'integrations',
  },
  {
    img: 5,
    num: '05 / Reach',
    title: 'Bilingual Sites',
    desc: 'English and Spanish localization built in from day one. Reach broader markets with professional translations.',
    price: '+$500 add-on',
    slug: 'bilingual-sites',
  },
  {
    img: 6,
    num: '06 / Aftercare',
    title: 'Ongoing Support',
    desc: 'Monthly retainers for updates, maintenance, hosting management, and priority support. Sharp and current.',
    price: '$200–$500 / mo',
    slug: 'ongoing-support',
  },
]

type Props = {
  variant?: 'home-preview' | 'jump-grid'
}

export default function Services({ variant = 'home-preview' }: Props) {
  if (variant === 'jump-grid') {
    return (
      <Reveal stagger as="div" className="services-grid">
        {SERVICES.map((s) => (
          <Link key={s.slug} className="service" data-img={s.img} href={`/services#${s.slug}`}>
            <div className="service-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <span className="service-price">{s.price}</span>
          </Link>
        ))}
      </Reveal>
    )
  }

  return (
    <section className="services-section section-vc">
      <div className="container-vc">
        <Reveal className="section-head">
          <span className="eyebrow">What I build</span>
          <h2>Six things, done with full ownership and zero shortcuts.</h2>
          <p className="lead">
            Each project is scoped, quoted, and delivered as custom code.{' '}
            <Link href="/services" style={{ color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              See what&apos;s included →
            </Link>
          </p>
        </Reveal>

        <Reveal stagger as="div" className="services-grid">
          {SERVICES.map((s) => (
            <Link key={s.slug} className="service" data-img={s.img} href={`/services#${s.slug}`}>
              <div className="service-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <span className="service-price">{s.price}</span>
              <span className="service-more">Read more <span className="arrow">→</span></span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
