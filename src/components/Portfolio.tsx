import Link from 'next/link'
import Reveal from './Reveal'
import { CASE_STUDIES } from './work-data'

type Props = {
  variant?: 'home-preview' | 'index'
}

export default function Portfolio({ variant = 'home-preview' }: Props) {
  return (
    <section className="work-section section-vc">
      <div className="container-vc">
        {variant === 'home-preview' && (
          <Reveal className="section-head">
            <span className="eyebrow">Selected Work</span>
            <h2>Four projects, four different problems.</h2>
            <p className="lead">
              A peer-to-peer fitness app. A virtual law firm. A bilingual tutor&apos;s booking site. A multi-borough vending business.{' '}
              <Link href="/work" style={{ color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
                See full case studies →
              </Link>
            </p>
          </Reveal>
        )}

        <Reveal stagger as="div" className="work-grid">
          {CASE_STUDIES.map((c) => (
            <Link key={c.slug} className="work-card" href={`/work/${c.slug}`}>
              <div className="work-img">
                <span className="work-tag">{c.tag}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={`${c.title} case study`} />
              </div>
              <div className="work-body">
                <h3>{c.title}</h3>
                <p>{variant === 'index' ? c.blurbLong : c.blurb}</p>
                <span className="work-link">View Case Study <span className="arrow">→</span></span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
