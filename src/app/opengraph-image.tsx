import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Vencer — Custom Websites & Web Applications'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Fetch Cormorant Garamond from Google Fonts at runtime so the OG card
// matches the site's display typography. Falls back to system serif
// if the fetch fails.
async function loadCormorant() {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    ).then((r) => r.text())
    const match = css.match(/src: url\((https:\/\/[^)]+\.woff2)\)/)
    if (!match) return null
    const buf = await fetch(match[1]).then((r) => r.arrayBuffer())
    return buf
  } catch {
    return null
  }
}

export default async function Image() {
  const cormorant = await loadCormorant()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0c0f13',
          backgroundImage:
            'linear-gradient(135deg, rgba(12,15,19,1) 0%, rgba(21,25,30,1) 50%, rgba(13,148,136,0.45) 100%)',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Top-left eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#2dd4bf',
            fontSize: 22,
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            marginBottom: 50,
          }}
        >
          <div style={{ width: 50, height: 1, background: '#2dd4bf' }} />
          <span>Studio · Est. 2025</span>
        </div>

        {/* VENCER wordmark */}
        <div
          style={{
            display: 'flex',
            fontSize: 220,
            color: '#faf8f3',
            fontWeight: 500,
            letterSpacing: -6,
            lineHeight: 1,
            fontFamily: cormorant ? 'Cormorant' : 'serif',
          }}
        >
          <span>VENCE</span>
          <span style={{ color: '#2dd4bf' }}>R</span>
        </div>

        {/* Teal rule */}
        <div
          style={{
            width: 320,
            height: 2,
            background:
              'linear-gradient(90deg, #2dd4bf 0%, rgba(45,212,191,0) 100%)',
            marginTop: 36,
            marginBottom: 36,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: 36,
            lineHeight: 1.25,
            color: 'rgba(250,248,243,0.94)',
            maxWidth: 1000,
            fontFamily: cormorant ? 'Cormorant' : 'serif',
            fontWeight: 400,
          }}
        >
          <span>
            Custom websites &amp; web applications, built by an engineer who
            understands{' '}
            <span style={{ color: '#2dd4bf', fontStyle: 'italic' }}>
              both code and law
            </span>
            .
          </span>
        </div>

        {/* Bottom-right URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            right: 80,
            color: 'rgba(250,248,243,0.55)',
            fontSize: 20,
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontFamily: 'monospace',
          }}
        >
          vencer.dev
        </div>
      </div>
    ),
    {
      ...size,
      fonts: cormorant
        ? [{ name: 'Cormorant', data: cormorant, style: 'normal', weight: 500 }]
        : undefined,
    }
  )
}
