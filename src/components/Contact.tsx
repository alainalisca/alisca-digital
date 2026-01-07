'use client'

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/xpqwvweb', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })
      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[var(--charcoal)] py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 block text-[var(--teal-light)]">Contact</span>
          <h2 className="text-4xl md:text-5xl text-white leading-tight font-serif mb-6">Let&apos;s build something</h2>
          <p className="text-lg text-[var(--stone-light)] mb-10">Have a project in mind? I&apos;d love to hear about it. Reach out for a free consultation and let&apos;s discuss how we can work together.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-[var(--stone-light)] w-20">Email</span>
              <a href="mailto:alainalisca@aplusfitnessllc.com" className="text-[var(--teal-light)] hover:text-white transition-colors">alainalisca@aplusfitnessllc.com</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-[var(--stone-light)] w-20">Location</span>
              <span className="text-white">Serving clients worldwide</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-[var(--stone-light)] w-20">Response</span>
              <span className="text-white">Within 24 hours</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[var(--stone-light)] mb-2">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" className="w-full px-4 py-4 bg-[var(--charcoal-deep)] border border-white/10 text-white placeholder-[var(--stone)] focus:border-[var(--teal)] focus:outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[var(--stone-light)] mb-2">Email</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-4 bg-[var(--charcoal-deep)] border border-white/10 text-white placeholder-[var(--stone)] focus:border-[var(--teal)] focus:outline-none transition-colors" />
            </div>
          </div>
          <div>
            <label htmlFor="projectType" className="block text-xs uppercase tracking-widest text-[var(--stone-light)] mb-2">Project Type</label>
            <select id="projectType" name="projectType" className="w-full px-4 py-4 bg-[var(--charcoal-deep)] border border-white/10 text-white focus:border-[var(--teal)] focus:outline-none transition-colors">
              <option value="">Select a service...</option>
              <option value="website">Business Website</option>
              <option value="webapp">Web Application</option>
              <option value="pwa">Progressive Web App</option>
              <option value="consulting">Hourly Consulting</option>
              <option value="other">Something Else</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[var(--stone-light)] mb-2">Project Details</label>
            <textarea id="message" name="message" rows={6} placeholder="Tell me about your project, timeline, and budget..." className="w-full px-4 py-4 bg-[var(--charcoal-deep)] border border-white/10 text-white placeholder-[var(--stone)] focus:border-[var(--teal)] focus:outline-none transition-colors resize-none" />
          </div>
          <button type="submit" disabled={status === 'loading'} className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed">
            {status === 'loading' ? 'Sending...' : 'SEND MESSAGE'}
          </button>
          {status === 'success' && <p className="text-[var(--teal-light)] text-center">Message sent! I&apos;ll get back to you within 24 hours.</p>}
          {status === 'error' && <p className="text-red-400 text-center">Something went wrong. Please try again or email directly.</p>}
        </form>
      </div>
    </section>
  )
}
