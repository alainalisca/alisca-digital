'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Reveal from './Reveal'

const POINTS = [
  {
    num: '01 / Code',
    title: 'Custom code, no rented platforms',
    body: "Every line is written for your project. You're not stuck on a SaaS treadmill or paying per seat for what your business already paid to build.",
  },
  {
    num: '02 / Contract',
    title: 'Work-for-hire by default',
    body: 'Every contract assigns full IP to you on delivery — code, design, content, all of it. Drafted by someone who actually practices law.',
  },
  {
    num: '03 / Continuity',
    title: 'Built to be maintained',
    body: "Clean component structure, documented decisions, modern stack. Whether I'm the one updating it or you bring on someone else — it'll make sense.",
  },
]

type Props = {
  showAboutLink?: boolean
}

export default function Philosophy({ showAboutLink = true }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)

  // Subtle parallax on philosophy bg
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        if (sectionRef.current && bgRef.current) {
          const r = sectionRef.current.getBoundingClientRect()
          const vh = window.innerHeight
          const p = (vh - r.top) / (vh + r.height)
          const offset = (p - 0.5) * 60
          bgRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="philosophy-section">
      <div ref={bgRef} className="philo-bg" aria-hidden="true"></div>
      <div className="container-vc">
        <div className="philo-inner">
          <Reveal>
            <span className="eyebrow">Process</span>
            <h2 style={{ marginTop: 18 }}>Built right, owned outright, easy to live with.</h2>
            <p className="lead" style={{ color: 'rgba(250,248,243,0.78)', marginTop: 22 }}>
              A site that makes you proud isn&apos;t a template that has been re-skinned. It&apos;s the result of three commitments — to the craft, to your IP, and to the long game.
            </p>
            {showAboutLink && (
              <Link href="/about" className="btn-vc btn-vc-ghost btn-vc-on-dark" style={{ marginTop: 30 }}>
                Read the full approach <span className="arrow">→</span>
              </Link>
            )}
          </Reveal>

          <Reveal stagger className="philo-points">
            {POINTS.map((p) => (
              <div key={p.num} className="philo-point">
                <span className="num">{p.num}</span>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
