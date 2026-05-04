import Reveal from './Reveal'

/**
 * About body — used on /about page.
 * Side-by-side editorial image + bio prose.
 */
export default function About() {
  return (
    <section className="section-vc" style={{ paddingTop: 90, paddingBottom: 90 }}>
      <div className="container-vc">
        <div className="cred-grid">
          <Reveal className="cred-img" />
          <Reveal>
            <div className="about-bio">
              <span className="eyebrow">The studio</span>
              <h2 style={{ marginTop: 14, marginBottom: 22 }}>Why the dual training matters.</h2>
              <p>
                Most agencies treat the contract phase as a hurdle to clear before the real work starts. The contract gets thrown together, signed, filed, and forgotten — until something goes wrong and someone realizes the IP assignment language was a copy-paste from a template that didn&apos;t quite fit. By that point it&apos;s a problem, not a clause.
              </p>
              <p>
                Vencer&apos;s contracts are drafted by the same person doing the work. Every project ships with a work-for-hire agreement that assigns full IP to the client on delivery, drafted with the kind of care that comes from spending time on the legal side. The result is that you, the client, end up with code, content, and rights that are unambiguously yours — not subject to a future dispute over what the agency owns vs. what you bought.
              </p>
              <p>
                The engineering side carries the same standard. Every project is custom-coded with a modern, opinionated stack — Next.js, TypeScript, Tailwind, Supabase. No drag-and-drop builders, no rented platforms, no &quot;we built this on WordPress, please send us $200/month forever to make it stay alive.&quot;
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
