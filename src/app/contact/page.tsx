import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Tell Vencer what you're working on. Custom websites and web applications, scoped and quoted within one business day.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <PageHeader
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2200&q=70&auto=format&fit=crop"
        eyebrow="Let's Build"
        title={<>Tell me what<br />you&apos;re working on.</>}
        lead={<>Whether it&apos;s a one-page launch, a full web application, or a redesign you&apos;ve been putting off — start with a few sentences. I respond within one business day with a candid take on scope, timeline, and price.</>}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <Contact variant="full" />

      <Footer />
    </main>
  )
}
