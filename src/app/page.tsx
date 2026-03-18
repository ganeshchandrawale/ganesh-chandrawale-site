import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Journey from '@/components/Journey'
import Volunteering from '@/components/Volunteering'
import NotableWork from '@/components/NotableWork'
import LatestProjects from '@/components/LatestProjects'
import BlogTeaser from '@/components/BlogTeaser'
import AIInsightsTeaser from '@/components/AIInsightsTeaser'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import RedirectHandler from '@/components/RedirectHandler'

export const metadata: Metadata = {
  title: 'Ganesh Chandrawale — Solution Architect | Digital Transformation',
  description:
    'Ganesh Chandrawale is a Solution Architect with 15+ years experience in AWS, microservices, REST API design and digital transformation.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ganesh Chandrawale — Solution Architect | Digital Transformation',
    description:
      'Solution Architect with 15+ years experience in AWS, microservices and digital transformation.',
    url: 'https://ganeshchandrawale.info',
  },
}

const BASE_URL = 'https://ganeshchandrawale.info'

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ganesh Chandrawale — Solution Architect',
  description:
    'Personal website and blog of Ganesh Chandrawale, Solution Architect based in London with 15+ years in digital transformation, AWS cloud, microservices and API architecture.',
  url: BASE_URL,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Ganesh Chandrawale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ganesh Chandrawale is a Solution Architect with 15+ years of experience in digital transformation, AWS cloud architecture, microservices and REST API design. Based in London, UK.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Ganesh Chandrawale specialise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ganesh specialises in Solution Architecture, Digital Transformation, AWS cloud migrations, microservices, REST API design and governance, IT strategy, Business Analysis and process automation across regulated industries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where has Ganesh Chandrawale worked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ganesh has worked across enterprise technology programmes in Insurance, Telecoms and Rail in the UK. His roles have spanned Solution Architect, Senior IT Business Analyst, DevOps Engineer and Java Developer.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ganesh Chandrawale a Business Analyst or Solution Architect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both — and more. Ganesh's career spans Java development, L2/L3 operations, DevOps, IT Business Analysis, Integration Architecture and Solution Architecture. He's known for following the problem rather than a fixed title.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <RedirectHandler />
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
        <Volunteering />
        <NotableWork />
        <LatestProjects />
        <BlogTeaser />
        <AIInsightsTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
