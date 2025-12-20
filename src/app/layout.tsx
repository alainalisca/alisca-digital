import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alisca Digital | Software Engineering & Web Development',
  description: 'Custom websites and web applications built with precision. Full-stack development by an engineer who understands both code and contracts.',
  keywords: ['web development', 'software engineering', 'Next.js', 'React', 'web applications'],
  authors: [{ name: 'Alain Alisca' }],
  openGraph: {
    title: 'Alisca Digital | Software Engineering & Web Development',
    description: 'Custom websites and web applications built with precision.',
    url: 'https://aliscadigital.com',
    siteName: 'Alisca Digital',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
