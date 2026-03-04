import type { Metadata, Viewport } from 'next'
import { Italiana, Syne, Syne_Mono, DM_Sans } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CursorManager from '@/components/CursorManager'
import '@/app/globals.css'

const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italiana',
})

const syne = Syne({
  subsets: ['latin'],
  weights: [400, 500, 600, 700, 800],
  variable: '--font-syne',
})

const syneMono = Syne_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-syne-mono',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weights: [400, 500, 600, 700],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Beechwood Trees & Landscapes — Professional Arboricultural Contractors UK',
  description:
    'Award-winning arboricultural and landscape contractors serving the UK since 1998. 50+ NPTC qualified arborists. ISO 9001, 14001 & 45001 certified. Free surveys.',
  keywords:
    'arboricultural services, tree surgery, landscape contractors, UK, certified arborists',
  openGraph: {
    title: 'Beechwood Trees & Landscapes',
    description: 'Award-winning arboricultural contractors in the UK',
    type: 'website',
    url: 'https://www.beechwoodtrees.co.uk',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#c5e135',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${italiana.variable} ${syne.variable} ${syneMono.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Beechwood Trees & Landscapes Ltd',
            url: 'https://www.beechwoodtrees.co.uk',
            telephone: '08003287988',
            email: 'office@beechwoodtrees.co.uk',
            foundingDate: '1998',
            areaServed: 'United Kingdom',
            award:
              'Arboricultural Company of the Year - Pro Landscaper Business Awards 2022',
          })}
        </script>
      </head>
      <body>
        <div id="cursor" className="cursor" />
        <div id="cursor-ring" className="cursor-ring" />
        <CursorManager />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <style jsx global>{`
          :root {
            --black: #080c08;
            --void: #060906;
            --dim: #111811;
            --surface: #141a14;
            --border: rgba(255, 255, 255, 0.06);
            --border2: rgba(255, 255, 255, 0.12);
            --white: #f0ede8;
            --off: #a8b0a8;
            --faint: #4a544a;
            --lime: #c5e135;
            --lime2: #d4f040;
            --lime-dim: #8aab22;
            --gold: #c8921a;
            --red: #d63c2a;
            --wa: #25d366;
            --nav-h: 68px;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
            background: var(--black);
          }

          body {
            font-family: var(--font-syne), sans-serif;
            background: var(--black);
            color: var(--white);
            overflow-x: hidden;
            cursor: none;
          }

          #cursor {
            position: fixed;
            width: 8px;
            height: 8px;
            background: var(--lime);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s;
            mix-blend-mode: difference;
          }

          #cursor-ring {
            position: fixed;
            width: 36px;
            height: 36px;
            border: 1px solid rgba(197, 225, 53, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%);
            transition: width 0.28s, height 0.28s, border-color 0.28s;
          }

          body:has(a:hover) #cursor,
          body:has(button:hover) #cursor,
          body:has([onclick]:hover) #cursor {
            width: 14px;
            height: 14px;
          }

          body:has(a:hover) #cursor-ring,
          body:has(button:hover) #cursor-ring,
          body:has([onclick]:hover) #cursor-ring {
            width: 52px;
            height: 52px;
            border-color: rgba(197, 225, 53, 0.55);
          }
        `}</style>
      </body>
    </html>
  )
}
