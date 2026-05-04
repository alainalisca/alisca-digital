export type CaseStudy = {
  slug: string
  title: string
  tag: string
  blurb: string
  blurbLong: string
  image: string
  liveUrl?: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'tribe',
    title: 'Tribe',
    tag: 'Mobile App · App Stores',
    blurb: 'Peer-to-peer fitness app connecting athletes for training sessions. Now live on the app stores — real-time matching, in-app chat, payment processing.',
    blurbLong: 'A peer-to-peer fitness app — now live on the app stores — connecting athletes for training sessions, with real-time matching, in-app chat, and payment processing.',
    image: '/images/tribe.v3.jpg',
    liveUrl: 'https://tribe-v3.vercel.app',
  },
  {
    slug: 'alisca-law',
    title: 'Alisca Law',
    tag: 'Law Firm',
    blurb: 'An operating virtual law firm for contract and transactional legal work. Authoritative design, intake flows that respect the client.',
    blurbLong: 'An operating virtual law firm for contract and transactional legal work. Authoritative design, intake flows that respect the client, and bilingual capability built in.',
    image: '/images/aliscalaw.jpg',
    liveUrl: 'https://aliscalaw.com',
  },
  {
    slug: 'la-profe-vero',
    title: 'La Profe Vero',
    tag: 'Bilingual',
    blurb: 'Spanish-tutoring business with booking integration, pricing tiers, and warm Colombian branding tailored to her audience.',
    blurbLong: 'Spanish-tutoring business with booking integration, pricing tiers, and warm Colombian branding tailored to her audience.',
    image: '/images/laprofevero.jpg',
    liveUrl: 'https://laprofevero.com',
  },
  {
    slug: 'jay-essentials',
    title: 'Jay Essentials',
    tag: 'Multi-page',
    blurb: 'Multi-page vending-services site built to rank locally and convert facility-manager inquiries with real service-area depth.',
    blurbLong: 'A multi-page vending-services site built to rank locally and convert facility-manager inquiries with real service-area depth.',
    image: '/images/jayessentials.jpg',
    liveUrl: 'https://jayessentials.co',
  },
]

export function getNextPrev(slug: string) {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug)
  if (i === -1) return { prev: null, next: null }
  const prev = CASE_STUDIES[(i - 1 + CASE_STUDIES.length) % CASE_STUDIES.length]
  const next = CASE_STUDIES[(i + 1) % CASE_STUDIES.length]
  return { prev, next }
}
