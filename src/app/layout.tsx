import type { Metadata } from 'next'
import '../styles/globals.css'

const BASE_URL = 'https://ganeshchandrawale.info'

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: 'Ganesh Chandrawale — Solution Architect | Digital Transformation',
    template: '%s | Ganesh Chandrawale',
  },
  description:
    'Ganesh Chandrawale is a Solution Architect with 15+ years of experience in digital transformation, AWS cloud architecture, microservices, REST API design and IT strategy.',

  // ── Keywords (still worth including for some search engines) ─────────────
  keywords: [
    'Ganesh Chandrawale',
    'Ganesh Chandrawale Solution Architect',
    'Chandrawale',
    'Solution Architect London',
    'Solution Architect UK',
    'Business Analyst UK',
    'IT Business Analyst',
    'Digital Transformation Architect',
    'Digital Transformation Consultant UK',
    'AWS Solution Architect',
    'Cloud Migration Architect',
    'Microservices Architecture',
    'REST API Design',
    'API Governance',
    'System Architect',
    'Enterprise Architecture',
    'London Market Insurance',
    'IT Strategy Consultant',
    'Tech Leadership',
    'AI Enthusiast',
    'Future of Work',
    'SwaggerHub',
    'Event Driven Architecture',
  ],

  // ── Authors & Publisher ───────────────────────────────────────────────────
  authors: [{ name: 'Ganesh Chandrawale', url: BASE_URL }],
  creator: 'Ganesh Chandrawale',
  publisher: 'Ganesh Chandrawale',

  // ── Canonical & Alternates ────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },

  // ── Open Graph (LinkedIn, Facebook, WhatsApp previews) ───────────────────
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'Ganesh Chandrawale',
    title: 'Ganesh Chandrawale — Solution Architect | Digital Transformation',
    description:
      'Solution Architect with 15+ years experience in AWS, microservices, API design and digital transformation. Based in London. Writing about technology, leadership and the future of work.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ganesh Chandrawale — Solution Architect',
      },
    ],
  },

  // ── Twitter / X card ─────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Ganesh Chandrawale — Solution Architect',
    description:
      'Solution Architect with 15+ years in digital transformation, AWS and API architecture.',
    images: ['/og-image.png'],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Verification (add your codes once you have them) ─────────────────────
  verification: {
    google: 'iBrGG6Rvif1F7kyect61UjIChfWCKC2KnLpBx5w3s2A', // Cleaned up verification code
  },
}

// ── JSON-LD Structured Data (Person schema — helps Google show rich results) ──
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ganesh Chandrawale',
  url: BASE_URL,
  jobTitle: 'Solution Architect',
  description:
    'Solution Architect with 15+ years of experience in digital transformation, AWS, microservices and API architecture.',
  worksFor: {
    '@type': 'Organization',
    name: 'Independent',
  },
  knowsAbout: [
    'Solution Architecture',
    'Digital Transformation',
    'AWS Cloud',
    'Microservices',
    'REST API Design',
    'IT Strategy',
    'Business Analysis',
    'DevOps',
    'AI and Machine Learning',
  ],
  sameAs: [
    'https://www.linkedin.com/in/ganesh-chandrawale-7b734433/',
    'https://github.com',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="grain">
        {children}
      </body>
    </html>
  )
}
