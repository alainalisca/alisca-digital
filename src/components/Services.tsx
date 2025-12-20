const services = [
  { icon: '🌐', title: 'Business Websites', description: 'Professional marketing sites, landing pages, and portfolios. Clean design, fast performance, built to convert visitors into clients.', price: 'Starting at $1,500' },
  { icon: '⚡', title: 'Web Applications', description: 'Custom applications with user accounts, databases, and business logic. From booking systems to client portals to internal tools.', price: 'Starting at $3,500' },
  { icon: '📱', title: 'Progressive Web Apps', description: 'App-like experiences that work on any device without app store approval. Offline capability, push notifications, home screen installation.', price: 'Starting at $4,000' },
  { icon: '🔗', title: 'Integrations', description: 'Connect your tools. Stripe payments, scheduling systems, CRMs, email marketing, and third-party APIs wired into your workflow.', price: 'Starting at $500' },
  { icon: '🌍', title: 'Bilingual Sites', description: 'English and Spanish localization built in from the start. Reach broader markets with professional translations and cultural adaptation.', price: '+$500 to any project' },
  { icon: '🛠️', title: 'Ongoing Support', description: 'Monthly retainers for updates, maintenance, hosting management, and priority support. Keep your digital presence running smoothly.', price: '$200 – $500/month' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="section-label">Services</span>
          <h2 className="section-title">What I build</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group p-8 bg-[var(--warm-white)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--teal)] hover:-translate-y-1 hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--teal)] transition-all duration-300 group-hover:w-full" />
              <div className="w-12 h-12 bg-[var(--cream)] rounded-full flex items-center justify-center text-2xl mb-6">{service.icon}</div>
              <h3 className="font-serif text-2xl text-[var(--charcoal)] mb-3">{service.title}</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{service.description}</p>
              <div className="font-serif text-xl font-semibold text-[var(--teal)]">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
