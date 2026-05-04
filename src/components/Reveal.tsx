'use client'

import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react'

type RevealProps = {
  children?: ReactNode
  stagger?: boolean
  className?: string
  style?: CSSProperties
  as?: 'div' | 'section' | 'article' | 'ul' | 'aside'
}

/**
 * Wraps children in a scroll-reveal observer.
 * Single elements: pass {stagger}={false} (default) -> uses .reveal class.
 * Stagger groups: pass {stagger}={true} -> uses .reveal-stagger class
 *   so direct children animate in sequence per the CSS rules in globals.css.
 */
export default function Reveal({
  children,
  stagger = false,
  className = '',
  style,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!ref.current || shown) return
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [shown])

  const baseClass = stagger ? 'reveal-stagger' : 'reveal'
  const cls = [baseClass, shown ? 'in' : '', className].filter(Boolean).join(' ')

  // @ts-expect-error -- dynamic Tag with ref typing
  return <Tag ref={ref} className={cls} style={style}>{children}</Tag>
}
