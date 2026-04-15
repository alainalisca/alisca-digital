'use client'

import { useState } from 'react'

export default function Referrals() {
  const [submitted, setSubmitted] = useState(false)

  const steps = [
    { number: '01', title: 'Refer', description: 'Send us someone who needs a website or web app' },
    { number: '02', title: 'They Sign', description: 'We close the deal and start the project' },
    { number: '03', title: 'You Get Paid', description: 'You receive your referral fee when we receive payment' },
  ]

  const tiers = [
    { label: 'Projects under $2,500', value: '$250 flat' },
    { label: 'Projects $2,500 – $7,500', value: '15%' },
    { label: 'Projects $7,500+', value: '12%' },
  ]

  return (
    <section id="referrals" className="py-24 px-6 lg:px-16 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--charcoal)] mb-4">
            Referral Program
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Know someone who needs a website? Get paid when they sign.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="bg-[var(--warm-white)] p-8 border border-[var(--border)]">
              <span className="text-[var(--teal)] font-serif text-3xl font-bold">{step.number}</span>
              <h3 className="text-xl font-serif font-semibold text-[var(--charcoal)] mt-4 mb-2">{step.title}</h3>
              <p className="text-[var(--text-secondary)]">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Compensation */}
        <div className="bg-[var(--warm-white)] border border-[var(--border)] p-8 md:p-12 mb-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-semibold text-[var(--charcoal)] mb-8">Compensation</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {tiers.map((tier) => (
              <div key={tier.label} className="p-6 border border-[var(--border)]">
                <span className="block text-2xl font-serif font-bold text-[var(--teal)] mb-2">{tier.value}</span>
                <span className="text-[var(--text-secondary)] text-sm">{tier.label}</span>
              </div>
            ))}
          </div>
          <p className="text-[var(--text-secondary)] text-sm">Paid when we receive first client payment</p>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[var(--stone)] text-xs mb-12 max-w-2xl mx-auto">
          This referral program applies to web development and digital services only. Legal services through Alisca Law PLLC are not included.
        </p>

        {/* Referral Form */}
        {submitted ? (
          <div className="max-w-2xl mx-auto text-center py-16">
            <h3 className="text-2xl font-serif font-semibold text-[var(--charcoal)] mb-4">Thank you!</h3>
            <p className="text-[var(--text-secondary)]">We received your referral and will be in touch soon.</p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/maqaqejd"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
              }).then((res) => {
                if (res.ok) setSubmitted(true)
              })
            }}
            className="max-w-2xl mx-auto bg-[var(--warm-white)] border border-[var(--border)] p-8 md:p-12"
          >
            <h3 className="text-2xl font-serif font-semibold text-[var(--charcoal)] mb-8 text-center">Submit a Referral</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-2">Your Name *</label>
                <input type="text" name="your_name" required className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--teal)] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-2">Your Email *</label>
                <input type="email" name="your_email" required className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--teal)] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-2">Your Phone</label>
                <input type="tel" name="your_phone" className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--teal)] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-2">Referred Person&apos;s Name *</label>
                <input type="text" name="referred_name" required className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--teal)] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-2">Referred Person&apos;s Email *</label>
                <input type="email" name="referred_email" required className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--teal)] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-2">Referred Person&apos;s Phone</label>
                <input type="tel" name="referred_phone" className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--teal)] transition-colors" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-2">What do they need? *</label>
              <select name="service_needed" required className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--teal)] transition-colors">
                <option value="">Select one...</option>
                <option value="Website">Website</option>
                <option value="Web App">Web App</option>
                <option value="Full Brand Package">Full Brand Package</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-widest text-[var(--stone)] mb-2">Additional Notes</label>
              <textarea name="notes" rows={4} className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--teal)] transition-colors resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">Submit Referral</button>
          </form>
        )}

        {/* Sales Partner CTA */}
        <div className="max-w-2xl mx-auto mt-16 bg-[var(--charcoal)] text-white p-8 md:p-12 text-center">
          <h3 className="text-2xl font-serif font-semibold mb-4">Want to earn more? Become a Vencer Sales Partner.</h3>
          <p className="text-[var(--stone-light)] mb-6">
            We offer 30–40% commission for dedicated sales partners who actively source and close clients. Flexible, independent contractor role — no hours, no cap on earnings.
          </p>
          <a
            href="mailto:alainalisca@aplusfitnessllc.com?subject=Sales%20Partner%20Inquiry"
            className="btn-primary inline-flex"
          >
            Apply to become a Sales Partner →
          </a>
        </div>
      </div>
    </section>
  )
}
