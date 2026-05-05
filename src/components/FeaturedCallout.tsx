import Link from 'next/link'
import Reveal from './Reveal'

/**
 * Featured callout for "AI Automation" — positioned above the regular
 * services grid on home + services pages to highlight a new offering
 * without disturbing the 6-card grid.
 */
export default function FeaturedCallout() {
  return (
    <section className="featured-callout-section">
      <div className="container-vc">
        <Reveal className="featured-callout">
          <div className="featured-callout-bg" aria-hidden="true"></div>
          <div className="featured-callout-grain" aria-hidden="true"></div>
          <div className="featured-callout-inner">
            <div>
              <span className="featured-pill">New · In Demand</span>
              <h2>
                <span className="ai-tag">AI</span> Automation
              </h2>
              <p className="featured-lead">
                AI features and automated workflows, embedded inside the custom apps I already build.
                Chatbots, content generators, document review, agentic workflows, legal-tech tools — bring
                the use case, I&apos;ll build the whole thing end-to-end.
              </p>
              <ul className="featured-bullets">
                <li>AI features inside web apps — chat, summarization, content gen</li>
                <li>Workflow automation — auto-draft emails, classify leads, transcribe calls</li>
                <li>Legal-tech tools — contract review, NDA generation, intake automation</li>
                <li>Custom agents — Claude / OpenAI SDKs wired to your business logic</li>
              </ul>
              <div className="featured-cta-row">
                <Link href="/services#ai-automation" className="btn-vc btn-vc-teal">
                  Read more <span className="arrow">→</span>
                </Link>
                <Link href="/contact" className="btn-vc btn-vc-ghost btn-vc-on-dark">
                  Discuss your use case
                </Link>
              </div>
            </div>
            <div className="featured-meta">
              <div className="featured-price">
                <span className="featured-price-amt">$75<span className="featured-price-unit">/hr</span></span>
                <span className="featured-price-label">Or scoped per project after a paid discovery</span>
              </div>
              <div className="featured-meta-divider"></div>
              <div className="featured-meta-list">
                <div className="featured-meta-row">
                  <span className="key">Approach</span>
                  <span className="val">Full-stack engineer who ships the whole product, AI layer included</span>
                </div>
                <div className="featured-meta-row">
                  <span className="key">Stack</span>
                  <span className="val">Anthropic · OpenAI · Next.js · Supabase</span>
                </div>
                <div className="featured-meta-row">
                  <span className="key">Best fit</span>
                  <span className="val">Solo professionals, small ops teams, legal practices</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
