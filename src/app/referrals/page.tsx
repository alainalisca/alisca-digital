import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Referrals from '@/components/Referrals'

export const metadata: Metadata = {
  title: 'Referrals',
  description: 'Send Vencer good clients. Get paid. Tiered commission structure plus 15% recurring on retainer revenue for 12 months.',
}

export default function ReferralsPage() {
  return (
    <main>
      <Navbar />

      <PageHeader
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&q=70&auto=format&fit=crop"
        eyebrow="Referral Program"
        title={<>Send me good clients.<br /><em>Get paid.</em></>}
        lead={<>A casual program for one-off introductions; a formal sales-partner track for repeat referrers. Tiered commission based on project size, plus 15% recurring on retainer revenue for 12 months.</>}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Referrals' }]}
      />

      <Referrals />

      <Footer />
    </main>
  )
}
