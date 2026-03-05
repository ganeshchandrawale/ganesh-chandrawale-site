import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Journey from '@/components/Journey'
import Projects from '@/components/Projects'
import AIInsightsTeaser from '@/components/AIInsightsTeaser'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ganesh Chandrawale — Solutions Architect | Digital Transformation | London',
  description:
    'Ganesh Chandrawale is a Solutions Architect with 15+ years experience in AWS, microservices, REST API design and digital transformation. Based in London. Formerly DXC Technology, Cognizant, Network Rail, Telefonica O2.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ganesh Chandrawale — Solutions Architect | Digital Transformation | London',
    description:
      'Solutions Architect with 15+ years experience in AWS, microservices and digital transformation. Based in London, UK.',
    url: 'https://www.ganeshchandrawale.io',
  },
}

const BASE_URL = 'https://www.ganeshchandrawale.io'

// WebPage schema
const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ganesh Chandrawale — Solutions Architect',
  description:
    'Personal website and blog of Ganesh Chandrawale, Solutions Architect based in London with 15+ years in digital transformation, AWS cloud, microservices and API architecture.',
  url: BASE_URL,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ],
  },
}

// FAQ schema — helps Google show rich results for "who is Ganesh Chandrawale" searches
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Ganesh Chandrawale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ganesh Chandrawale is a Solutions Architect with 15+ years of experience in digital transformation, AWS cloud architecture, microservices and REST API design. Based in London, UK, currently at DXC Technology on the London Market Transformation Programme.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Ganesh Chandrawale specialise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ganesh specialises in Solutions Architecture, Digital Transformation, AWS cloud migrations, microservices, REST API design and governance, IT strategy, Business Analysis and process automation. He has delivered programmes across Insurance, Telecoms and Rail in the UK.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where has Ganesh Chandrawale worked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ganesh has worked at DXC Technology (Velonetic, London Market Transformation), Cognizant Technology Solutions (Network Rail Telecoms, Telefonica O2, T-Systems). His roles have spanned Solutions Architect, Senior IT Business Analyst, DevOps Engineer and Java Developer.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ganesh Chandrawale a Business Analyst or Solutions Architect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both — and more. Ganesh's career spans Java development, L2/L3 operations, DevOps, IT Business Analysis, Integration Architecture and Solutions Architecture. He's known for following the problem rather than a fixed title.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <AIInsightsTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
