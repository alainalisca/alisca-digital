import Reveal from './Reveal'

const CRED = [
  { title: 'Software Engineering Certificate', body: 'Stony Brook University' },
  { title: 'Juris Doctor (JD)', body: "St. John's University School of Law · Admitted to NY Bar" },
  { title: 'Bilingual: English & Spanish', body: 'Comfortable in client-facing and contract-facing contexts in both languages' },
  { title: 'Online studio · Available globally', body: 'Fully virtual practice — every engagement runs over email, video, and shared docs' },
]

export default function Education() {
  return (
    <section className="cred-section section-vc">
      <div className="container-vc">
        <Reveal className="section-head">
          <span className="eyebrow">Credentials</span>
          <h2>Two degrees, one rare combination.</h2>
          <p className="lead">The training that informs the work.</p>
        </Reveal>
        <Reveal stagger as="div" className="cred-list" style={{ maxWidth: 760 }}>
          {CRED.map((c) => (
            <div key={c.title} className="cred-item">
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
