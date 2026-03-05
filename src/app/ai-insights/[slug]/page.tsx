import { getPost, getAllAIInsights } from '@/lib/posts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Linkedin } from 'lucide-react'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const BASE_URL = 'https://www.ganeshchandrawale.io'

export async function generateStaticParams() {
  const posts = getAllAIInsights()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPost(params.slug, 'ai-insights')
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: 'Ganesh Chandrawale', url: BASE_URL }],
    alternates: { canonical: `/ai-insights/${post.slug}` },
    openGraph: {
      title: `${post.title} | Ganesh Chandrawale`,
      description: post.excerpt,
      type: 'article',
      url: `${BASE_URL}/ai-insights/${post.slug}`,
      authors: ['Ganesh Chandrawale'],
      publishedTime: post.date,
      tags: ['AI', 'Future of Work', 'Solutions Architect', 'Digital Transformation', 'Technology Leadership'],
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/og-image.png'],
    },
  }
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkHtml).process(markdown)
  return result.toString()
}

export default async function AIInsightPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug, 'ai-insights')
  if (!post) notFound()

  const contentHtml = await markdownToHtml(post.content)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Ganesh Chandrawale',
      url: BASE_URL,
      jobTitle: 'Solutions Architect',
      sameAs: ['https://www.linkedin.com/in/ganesh-chandrawale-7b734433/'],
    },
    publisher: { '@type': 'Person', name: 'Ganesh Chandrawale', url: BASE_URL },
    url: `${BASE_URL}/ai-insights/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/ai-insights/${post.slug}` },
    keywords: 'Ganesh Chandrawale, AI, Future of Work, Solutions Architect, Digital Transformation, Technology Leadership',
    articleSection: 'AI & Future of Work',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'AI Insights', item: `${BASE_URL}/ai-insights` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/ai-insights/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Nav />
      <main className="min-h-screen bg-[#0F4C5C] pt-28 pb-24">
        <div className="max-w-2xl mx-auto px-6">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-white/40">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/ai-insights" className="hover:text-amber-300 transition-colors">AI Insights</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/60 truncate max-w-[220px]">{post.title}</li>
            </ol>
          </nav>

          {/* Meta row */}
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <time dateTime={post.date} className="font-mono text-xs text-amber-300">{post.date}</time>
            <span className="text-white/20" aria-hidden="true">·</span>
            <span className="font-sans text-xs text-white/40">{post.readTime}</span>
            {post.linkedinPost && (
              <>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span className="font-sans text-xs text-white/40 flex items-center gap-1">
                  <Linkedin size={11} aria-hidden="true" /> Also on LinkedIn
                </span>
              </>
            )}
          </div>

          {/* H1 */}
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          {/* Byline */}
          <p className="font-sans text-sm text-white/50 mb-8">
            By <span className="font-medium text-white/80">Ganesh Chandrawale</span>
            {' '}— Solutions Architect, London
          </p>

          <div className="flex items-center gap-4 mb-10" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Article body */}
          <article
            className="prose-warm"
            style={{ color: 'rgba(255,255,255,0.82)' }}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
            <Link href="/ai-insights" className="inline-flex items-center gap-2 font-sans text-sm text-white/50 hover:text-amber-300 transition-colors">
              <ArrowLeft size={14} aria-hidden="true" /> All insights
            </Link>
            <a
              href="https://www.linkedin.com/in/ganesh-chandrawale-7b734433/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-white/50 hover:text-amber-300 transition-colors"
              aria-label="Follow Ganesh Chandrawale on LinkedIn"
            >
              <Linkedin size={14} aria-hidden="true" /> Follow on LinkedIn
            </a>
          </div>

          {/* Author card */}
          <div className="mt-10 bg-white/5 border border-white/10 rounded-sm p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <span className="font-display text-amber-300 font-bold text-sm">GC</span>
            </div>
            <div>
              <div className="font-sans text-sm font-semibold text-white">Ganesh Chandrawale</div>
              <div className="font-sans text-xs text-white/40 mt-0.5 mb-2">Solutions Architect · DXC Technology · London, UK</div>
              <p className="font-body text-xs text-white/60 leading-relaxed">
                15+ years delivering digital transformations across Insurance, Telecoms and Rail.
                Writing about AI, architecture and the future of work.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
