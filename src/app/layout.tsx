import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vencer — Custom Websites & Web Applications',
  description: 'Custom websites and web applications built with precision. Full-stack development by an engineer who understands both code and contracts.',
  keywords: ['web development', 'software engineering', 'Next.js', 'React', 'web applications'],
  authors: [{ name: 'Alain Alisca' }],
  openGraph: {
    title: 'Vencer — Custom Websites & Web Applications',
    description: 'Custom websites and web applications built with precision.',
    url: 'https://vencerdigital.com',
    siteName: 'Vencer',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><head><link rel="icon" href="/favicon.svg" type="image/svg+xml" /></head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
