import { getPost, getAllBlogPosts } from '@/lib/posts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Linkedin } from 'lucide-react'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const BASE_URL = 'https://ganeshchandrawale.info'

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPost(params.slug, 'blog')
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: 'Ganesh Chandrawale', url: BASE_URL }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Ganesh Chandrawale`,
      description: post.excerpt,
      type: 'article',
      url: `${BASE_URL}/blog/${post.slug}`,
      authors: ['Ganesh Chandrawale'],
      publishedTime: post.date,
      tags: ['Solution Architect', 'Architecture', 'Technology', 'Leadership', 'Digital Transformation'],
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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug, 'blog')
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
      jobTitle: 'Solution Architect',
      sameAs: ['https://www.linkedin.com/in/ganesh-chandrawale-7b734433/'],
    },
    publisher: { '@type': 'Person', name: 'Ganesh Chandrawale', url: BASE_URL },
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${post.slug}` },
    keywords: 'Ganesh Chandrawale, Solution Architect, Digital Transformation, Business Analyst, AWS, Technology Leadership',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Nav />
      <main className="min-h-screen bg-[#FAF7F2] pt-28 pb-24">
        <div className="max-w-2xl mx-auto px-6">

          {/* Breadcrumb — unchanged */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-ink-400">
              <li><Link href="/" className="hover:text-[#D4791A] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-[#D4791A] transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-600 truncate max-w-[220px]">{post.title}</li>
            </ol>
          </nav>

          {/* Meta row — unchanged */}
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <time dateTime={post.date} className="font-mono text-xs text-[#D4791A]">{post.date}</time>
            <span className="text-ink-300" aria-hidden="true">·</span>
            <span className="font-sans text-xs text-ink-400">{post.readTime}</span>
            {post.linkedinPost && (
              <>
                <span className="text-ink-300" aria-hidden="true">·</span>
                <span className="font-sans text-xs text-ink-400 flex items-center gap-1">
                  <Linkedin size={11} aria-hidden="true" /> Also on LinkedIn
                </span>
              </>
            )}
          </div>

          {/* H1 — unchanged */}
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight mb-4">
            {post.title}
          </h1>

          {/* ADDED: Standfirst / excerpt — the LinkedIn Article "intro paragraph" */}
          {post.excerpt && (
            <p className="font-body text-xl text-ink-600 leading-relaxed mb-6 border-l-4 border-[#D4791A] pl-4">
              {post.excerpt}
            </p>
          )}

          {/* Byline — unchanged */}
          <p className="font-sans text-sm text-ink-500 mb-8">
            By <span className="font-medium text-ink-700">Ganesh Chandrawale</span>
          </p>

          {/* Divider — unchanged */}
          <div className="flex items-center gap-4 mb-10" aria-hidden="true">
            <div className="h-px flex-1 bg-ink-200" />
            <div className="w-2 h-2 rounded-full bg-[#D4791A]" />
            <div className="h-px flex-1 bg-ink-200" />
          </div>

          {/* Article body — switched to prose-article (defined in globals.css) */}
          <article className="prose-article" dangerouslySetInnerHTML={{ __html: contentHtml }} />

          {/* Footer nav — unchanged */}
          <div className="mt-16 pt-8 border-t border-ink-200 flex items-center justify-between flex-wrap gap-4">
            <Link href="/blog" className="inline-flex items-center gap-2 font-sans text-sm text-ink-500 hover:text-[#D4791A] transition-colors">
              <ArrowLeft size={14} aria-hidden="true" /> All posts
            </Link>
            <a
              href="https://www.linkedin.com/in/ganesh-chandrawale-7b734433/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-ink-500 hover:text-[#D4791A] transition-colors"
              aria-label="Follow Ganesh Chandrawale on LinkedIn"
            >
              <Linkedin size={14} aria-hidden="true" /> Follow on LinkedIn
            </a>
          </div>

          {/* Author card — unchanged */}
          <div className="mt-10 bg-[#FDF9F3] border border-ink-100 rounded-sm p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#0F4C5C] flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <span className="font-display text-white font-bold text-sm">GC</span>
            </div>
            <div>
              <div className="font-sans text-sm font-semibold text-ink-800">Ganesh Chandrawale</div>
              <div className="font-sans text-xs text-ink-500 mt-0.5 mb-2">Solution architect focused on large-scale systems, API platforms, and emerging AI integration patterns.</div>
              <p className="font-body text-xs text-ink-600 leading-relaxed">
                Writing about architecture, leadership and the future of work — in a personal capacity.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}