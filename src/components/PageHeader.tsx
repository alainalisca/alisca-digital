import Link from 'next/link'
import { ReactNode } from 'react'

type Crumb = { label: string; href?: string }

type PageHeaderProps = {
  bgImage: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  crumbs?: Crumb[]
}

export default function PageHeader({ bgImage, eyebrow, title, lead, crumbs }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="page-header-bg" aria-hidden="true" style={{ backgroundImage: `url('${bgImage}')` }}></div>
      <div className="container-vc">
        {crumbs && crumbs.length > 0 && (
          <div className="breadcrumbs">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1
              return (
                <span key={i} style={{ display: 'inline-flex', gap: 10, alignItems: 'center' }}>
                  {c.href && !isLast ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                  {!isLast && <span className="sep">/</span>}
                </span>
              )
            })}
          </div>
        )}
        <span className="eyebrow">{eyebrow}</span>
        <h1 style={{ marginTop: 18 }}>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  )
}
