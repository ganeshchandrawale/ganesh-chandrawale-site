import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/posts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BASE_URL = 'https://www.ganeshchandrawale.io'

export const metadata: Metadata = {
  title: 'Blog — Architecture, Leadership & Technology',
  description:
    'Writing by Ganesh Chandrawale on software architecture, digital transformation, technology leadership, business analysis and the future of work. Also published on LinkedIn.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Ganesh Chandrawale — Solutions Architect',
    description: 'Thoughts on architecture, leadership, tech decisions and lessons from 15+ years in enterprise IT.',
    url: `${BASE_URL}/blog`,
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#FAF7F2] pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4791A]" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">Writing</span>
            </div>
            <h1 className="font-display text-5xl font-bold text-[#0F4C5C] leading-tight mb-4">
              The Blog
            </h1>
            <p className="font-body text-base text-ink-500 max-w-xl leading-relaxed">
              Thoughts on architecture, leadership, technology decisions, and the lessons
              that only come from doing the work. Also published on LinkedIn.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="bg-white border border-ink-100 rounded-sm p-10 text-center">
              <p className="font-body text-ink-400 italic">Posts coming soon — check back shortly.</p>
              <p className="font-sans text-sm text-ink-400 mt-2">
                In the meantime, find my writing on{' '}
                <a href="https://www.linkedin.com/in/ganesh-chandrawale-7b734433/" target="_blank" rel="noopener noreferrer" className="text-[#D4791A] underline">LinkedIn</a>.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white border border-ink-100 rounded-sm p-7 card-hover">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <time dateTime={post.date} className="font-mono text-xs text-[#D4791A]">{post.date}</time>
                    <span className="font-sans text-xs text-ink-400">{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#0F4C5C] leading-snug mb-2 group-hover:text-[#1B7A8A] transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-ink-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1 font-sans text-xs text-[#D4791A]">
                    Read more <ArrowRight size={11} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
