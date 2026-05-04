import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CASE_STUDIES, getNextPrev } from '@/components/work-data'
import { CONTENT } from '@/components/case-studies-content'

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = CONTENT[slug]
  if (!c) return {}
  return {
    title: c.metaTitle,
    description: c.metaDesc,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const content = CONTENT[slug]
  const meta = CASE_STUDIES.find((c) => c.slug === slug)
  if (!content || !meta) return notFound()

  const { prev, next } = getNextPrev(slug)

  return (
    <main>
      {content.draftBanner && (
        <div className="draft-banner">DRAFT — Replace placeholder text and metrics with verified detail before publishing</div>
      )}

      <Navbar />

      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-hero-bg" aria-hidden="true" style={{ backgroundImage: `url('${meta.image}')` }}></div>
        <div className="container-vc">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span className="sep">/</span>
            <Link href="/work">Work</Link> <span className="sep">/</span>
            <span>{meta.title}</span>
          </div>
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.headline}<em>{content.headlineEm}</em>{content.headlineRest}</h1>
          <p className="lead">{content.lead}</p>

          <div className="cs-hero-meta">
            {content.meta.map((m) => (
              <div key={m.key} className="meta-cell">
                <span className="key">{m.key}</span>
                <span className="val">{m.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="cs-section">
        <div className="container-narrow">
          <span className="eyebrow">The problem</span>
          <h2 style={{ marginTop: 14 }}>{content.problem.title}</h2>
          {content.problem.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* Approach */}
      <section className="cs-section alt">
        <div className="container-narrow">
          <span className="eyebrow">The approach</span>
          <h2 style={{ marginTop: 14 }}>{content.approach.title}</h2>
          {content.approach.body.map((p, i) => <p key={i}>{p}</p>)}
          <div className="cs-figure" style={{ backgroundImage: `url('${meta.image}')` }}></div>
          <div className="cs-figure-caption">{content.approach.figureCaption}</div>
        </div>
      </section>

      {/* Stack */}
      <section className="cs-section dark">
        <div className="container-narrow">
          <span className="eyebrow">The stack</span>
          <h2 style={{ marginTop: 14 }}>{content.stack.title}</h2>
          <p>{content.stack.body}</p>
          <div className="cs-stack">
            {content.stack.chips.map((c) => (
              <div key={c} className="stack-chip">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="cs-section">
        <div className="container-narrow">
          <span className="eyebrow">The outcome</span>
          <h2 style={{ marginTop: 14 }}>{content.outcome.title}</h2>
          {content.outcome.body.map((p, i) => <p key={i}>{p}</p>)}
          <ul>
            {content.outcome.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="cs-quote">
            &ldquo;{content.outcome.quote}&rdquo;
            <span className="attrib">{content.outcome.quoteAttrib}</span>
          </div>
          {meta.liveUrl && (
            <p style={{ marginTop: 32 }}>
              <a href={meta.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
                Visit the live site →
              </a>
            </p>
          )}
        </div>
      </section>

      {/* Next/Prev */}
      <div className="container-vc">
        <div className="cs-nav-row">
          {prev && (
            <Link className="cs-nav-card" href={`/work/${prev.slug}`}>
              <span className="key">← Previous</span>
              <h4>{prev.title}</h4>
            </Link>
          )}
          {next && (
            <Link className="cs-nav-card next" href={`/work/${next.slug}`}>
              <span className="key">Next →</span>
              <h4>{next.title}</h4>
            </Link>
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="contact-section-vc">
        <div className="container-vc">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <span className="eyebrow">Have a build like this?</span>
            <h2 style={{ marginTop: 14 }}>Let&apos;s talk.</h2>
            <p style={{ marginTop: 22, color: 'rgba(250,248,243,0.78)' }}>
              If you&apos;re scoping a project in this category, start the conversation here.
            </p>
            <Link href="/contact" className="btn-vc btn-vc-teal" style={{ marginTop: 30 }}>
              Start a Project <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
