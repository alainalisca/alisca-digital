import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import FeaturedCallout from '@/components/FeaturedCallout'
import Services, { SERVICES } from '@/components/Services'
import Skills from '@/components/Skills'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom web development services: business websites, web applications, PWAs, integrations, bilingual sites, and ongoing support. No templates. No page builders.',
}

const DETAILS: Record<string, {
  blurb: string
  includes: string[]
  meta: { startsAt?: string; pricing?: string; addon?: string; range?: string; commitment?: string; timeline: string; bestFor: string }
  bgImage: string
  reverse?: boolean
  headline: string
}> = {
  'business-websites': {
    headline: 'Marketing sites that look like you took the work seriously.',
    blurb: 'The first impression a prospect, recruiter, or referral source has of your business is your website. It should look as competent as the work behind it. These sites are designed for clarity, built to load fast, and structured so visitors can find the answer they came for in under ten seconds.',
    includes: [
      'Up to 8 pages of custom design and copy collaboration',
      'Mobile-first responsive layout, tested on real devices',
      'Google Analytics 4 + Search Console wired in',
      'Contact form with spam protection and email delivery',
      'Basic SEO (meta tags, sitemap, structured data)',
      'Deployed on Vercel with custom domain & HTTPS',
    ],
    meta: { startsAt: '$500', timeline: '2–4 weeks', bestFor: 'Solo professionals, small businesses' },
    bgImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=72&auto=format&fit=crop',
  },
  'web-applications': {
    headline: 'Custom software that earns its keep.',
    blurb: "When a website starts needing user accounts, databases, scheduling logic, or payment flows, it's no longer a website — it's an application. I build them from scratch with a modern stack so you can run your business on something that fits the way you actually work, instead of bending your business around someone else's SaaS.",
    includes: [
      'User authentication (email/password, Google, magic link)',
      'Database design with PostgreSQL via Supabase',
      'Payments via Stripe (subscriptions, one-time, or marketplace)',
      'Admin dashboard for you to manage everything',
      'Transactional email via Resend (receipts, password resets, etc.)',
      'Role-based access if you have multiple user types',
    ],
    meta: { startsAt: '$2,500', timeline: '6–12 weeks', bestFor: 'Booking systems, client portals, internal tools' },
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=72&auto=format&fit=crop',
    reverse: true,
  },
  'progressive-web-apps': {
    headline: 'App-like, without the app store tax.',
    blurb: "If you've ever priced a native iOS or Android build, you know it usually costs five to ten times what a web build costs — and gets you a 30% revenue cut from Apple plus a quarterly approval gauntlet. A Progressive Web App installs to the home screen, works offline, sends push notifications, and runs everywhere. For most product ideas, it's the right answer.",
    includes: [
      'Install to home screen on iOS, Android, desktop',
      'Offline mode with smart caching',
      'Push notifications (where supported)',
      'Works as a standard website too — no fragmentation',
      'One codebase, one deploy',
    ],
    meta: { pricing: 'Scoped per project', timeline: '8–14 weeks', bestFor: 'Consumer apps, internal tools that need mobile' },
    bgImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&q=72&auto=format&fit=crop',
  },
  'integrations': {
    headline: 'The plumbing between your tools.',
    blurb: 'Every business eventually accumulates a stack — a CRM, an email tool, a scheduling app, a payment processor, accounting software. Each one was useful in isolation. Together, they create double-data-entry hell. I build the integrations that connect them, automate the busywork, and keep your team focused on the parts of the job that actually need a human.',
    includes: [
      'Stripe ↔ accounting (QuickBooks, Xero, etc.)',
      'Calendly / Cal.com ↔ CRM ↔ email automation',
      'Web form ↔ CRM ↔ Slack/email notifications',
      'Custom API integrations for niche software',
      'Webhooks, scheduled jobs, error monitoring',
    ],
    meta: { pricing: '$50/hr or fixed quote', timeline: '1–4 weeks per integration', bestFor: 'Operations teams, agencies, automation' },
    bgImage: 'https://images.unsplash.com/photo-1498409785966-ab341407de6e?w=1400&q=72&auto=format&fit=crop',
    reverse: true,
  },
  'bilingual-sites': {
    headline: 'English and Spanish, both first-class.',
    blurb: "Bilingual support added late is always worse than bilingual support designed in. URL routing, fallback strategies, SEO tags, language switching, and the actual cultural fit of the copy — all of it benefits from being a day-one decision. I build with next-intl, ship with both languages on the same deployment, and translate copy with native-speaker fluency to make the Spanish version sound like it was written by a person, not by Google.",
    includes: [
      'Two locales (EN/ES) with proper URL routing',
      'Per-locale SEO tags and Open Graph data',
      'Language switcher with intelligent fallbacks',
      'Cultural localization, not just word-for-word translation',
      'Available as add-on to any other service',
    ],
    meta: { addon: '+$500 to base scope', timeline: '+1–2 weeks', bestFor: 'Latin-American markets, US Hispanic audiences' },
    bgImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=72&auto=format&fit=crop',
  },
  'ongoing-support': {
    headline: "Don't let the site you paid for slowly fall apart.",
    blurb: 'A site without maintenance is a site rotting in slow motion — dependencies drift, SSL certificates need renewal, content needs updating, security patches need applying, and analytics need a quarterly check. A retainer keeps your site sharp, current, and on the right side of the next browser update.',
    includes: [
      'Monthly content updates (text, images, new sections)',
      'Dependency & security patching',
      'Hosting + DNS management',
      'Uptime monitoring with email alerts',
      'Quarterly performance & SEO check-up',
      'Priority response window (24h business days)',
    ],
    meta: { range: '$200–$500 / month', commitment: 'Month-to-month, cancel anytime', timeline: '—', bestFor: 'Sites that need to stay sharp without your time' },
    bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=72&auto=format&fit=crop',
    reverse: true,
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <PageHeader
        bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=2000&q=70&auto=format&fit=crop"
        eyebrow="What I build"
        title={<>Six services. Custom-coded.<br /><em>You own everything.</em></>}
        lead={<>No drag-and-drop, no licensed page builders, no platforms you&apos;ll pay rent on for the next decade. Each engagement is scoped, quoted, and delivered as code you keep on day one.</>}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Featured: AI Automation */}
      <FeaturedCallout />

      {/* Quick service grid */}
      <section className="services-section" style={{ paddingTop: 50, paddingBottom: 40 }}>
        <div className="container-vc">
          <Services variant="jump-grid" />
        </div>
      </section>

      {/* Detailed service rows */}
      <section style={{ padding: '40px 0 90px' }}>
        <div className="container-vc">
          {SERVICES.map((s) => {
            const d = DETAILS[s.slug]
            return (
              <Reveal key={s.slug} as="article" className={`svc-detail-row ${d.reverse ? 'reverse' : ''}`}>
                {!d.reverse && (
                  <div className="svc-detail-img" style={{ backgroundImage: `url('${d.bgImage}')` }} id={s.slug} />
                )}
                <div className="svc-detail-body">
                  <span className="eyebrow">{s.num} / {s.title}</span>
                  <h2 style={{ marginTop: 8 }}>{d.headline}</h2>
                  <p>{d.blurb}</p>
                  <ul className="svc-includes">
                    {d.includes.map((i, idx) => <li key={idx}>{i}</li>)}
                  </ul>
                  <div className="svc-meta-row">
                    {d.meta.startsAt && <div className="meta"><span className="key">Starts at</span><span className="val">{d.meta.startsAt}</span></div>}
                    {d.meta.pricing && <div className="meta"><span className="key">Pricing</span><span className="val">{d.meta.pricing}</span></div>}
                    {d.meta.addon && <div className="meta"><span className="key">Add-on</span><span className="val">{d.meta.addon}</span></div>}
                    {d.meta.range && <div className="meta"><span className="key">Range</span><span className="val">{d.meta.range}</span></div>}
                    {d.meta.commitment && <div className="meta"><span className="key">Commitment</span><span className="val">{d.meta.commitment}</span></div>}
                    {d.meta.timeline !== '—' && <div className="meta"><span className="key">Timeline</span><span className="val">{d.meta.timeline}</span></div>}
                    <div className="meta"><span className="key">Best for</span><span className="val">{d.meta.bestFor}</span></div>
                  </div>
                </div>
                {d.reverse && (
                  <div className="svc-detail-img" style={{ backgroundImage: `url('${d.bgImage}')` }} id={s.slug} />
                )}
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* AI Automation deep section */}
      <section style={{ padding: '40px 0 90px' }}>
        <div className="container-vc">
          <Reveal as="article" className="ai-deep-row">
            <div className="ai-deep-img" id="ai-automation" aria-hidden="true"></div>
            <div className="svc-detail-body">
              <span className="eyebrow">07 / AI Automation · NEW</span>
              <h2 style={{ marginTop: 8 }}>AI features and agents, embedded in custom apps you own.</h2>
              <p>
                AI work splits into two kinds of vendors: specialists who only do AI but can&apos;t ship the surrounding application, and full-stack developers who can ship the application but treat the AI layer as someone else&apos;s problem. I&apos;m the second kind, with the AI layer included — useful when you want one person to build the whole thing and the AI is part of it, not a separate vendor relationship.
              </p>
              <p>
                Every project is custom-coded against the model APIs (Anthropic, OpenAI, etc.) — not built on a no-code platform you&apos;ll pay rent on forever. Your prompts, your data flow, your agent logic, all running on infrastructure you own.
              </p>

              <div className="ai-categories">
                <div className="ai-category">
                  <h4>AI features in web apps</h4>
                  <p>Chat assistants, content generators, summarization, semantic search inside your custom app.</p>
                </div>
                <div className="ai-category">
                  <h4>Workflow automation</h4>
                  <p>Auto-classify inbound leads, draft replies, transcribe and summarize calls, process documents.</p>
                </div>
                <div className="ai-category">
                  <h4>Legal-tech automation</h4>
                  <p>Contract review, NDA generation, intake forms with structured extraction. Built by a JD.</p>
                </div>
                <div className="ai-category">
                  <h4>Custom agents</h4>
                  <p>Multi-step agents using Claude / OpenAI SDKs, wired to your business logic and data.</p>
                </div>
              </div>

              <ul className="svc-includes">
                <li>Discovery call to scope the use case (free first 30 min)</li>
                <li>Custom prompts, evals, and guardrails written for your data — not generic boilerplate</li>
                <li>Server-side API integration so prompts and keys aren&apos;t exposed in client code</li>
                <li>Cost monitoring + rate limiting baked in (so an unexpected spike doesn&apos;t blow your bill)</li>
                <li>Honest framing: I&apos;ll tell you when an AI tool is the wrong answer for your use case</li>
              </ul>

              <div className="svc-meta-row">
                <div className="meta"><span className="key">Hourly</span><span className="val">$75 / hour</span></div>
                <div className="meta"><span className="key">Project work</span><span className="val">Scoped after a paid discovery</span></div>
                <div className="meta"><span className="key">Best for</span><span className="val">Solo professionals, small ops teams, legal practices</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Toolkit */}
      <Skills />

      {/* CTA */}
      <section className="contact-section-vc">
        <div className="container-vc">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
              <span className="eyebrow">Next step</span>
              <h2 style={{ marginTop: 14 }}>Have a project in mind?</h2>
              <p style={{ marginTop: 22, color: 'rgba(250,248,243,0.78)' }}>
                Tell me a few sentences about it. I respond within one business day with a candid read on scope, timeline, and price.
              </p>
              <Link href="/contact" className="btn-vc btn-vc-teal" style={{ marginTop: 30 }}>
                Start a Project <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
