'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredBlogPosts = [
  {
    title: 'Why Technical Leaders Need to Think Like Storytellers',
    excerpt: 'The hardest part of technical work is often not solving the problem — it is explaining it in a way that makes sense to everyone in the room. That is where storytelling becomes a real professional advantage.',
    date: '20 May 2026',
    readTime: '7 min read',
    slug: 'story-telling'
  },
  {
    title: 'Delivery Models Are Not Caricatures: Why the Waterfall vs Agile Debate Is Usually Wrong',
    excerpt: 'Most organisations do not run pure Waterfall or pure Agile. The real question is not which methodology is best — it is which blend fits the risk, the team, and the outcome.',
    date: '14 May 2026',
    readTime: '5 min read',
    slug: 'waterfall-agile-specdriven'
  },
  {
    title: 'Just-in-Time Leadership: Stepping Into Gaps You Didn\'t Train For',
    excerpt: 'The best leaders aren\'t always the most qualified person in the room. They\'re the one willing to step in when the team needs it most — learning fast, staying focused, and keeping the shared goal in sight.',
    date: '11 May 2026',
    readTime: '2 min read',
    slug: 'cricket-leadership'
  },
  {
    title: 'IT Uncertainty 2026: What It Feels Like on the Ground',
    excerpt: 'Ive worked my way up from Java developer to Solutions Architect across multiple industries. Ive seen tech booms, busts, and everything in between. But 2026 feels different. Not just for executives making decisions, but for employees living the daily reality.',
    date: '21 Apr 2026',
    readTime: '3 min read',
    slug: 'it-uncertainty-2026'
  },
]

export default function BlogTeaser() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#D4791A]" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">
            Thoughts & experiences
          </span>
        </div>
        <div className="md:flex md:items-end md:justify-between mb-12">
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight max-w-xl">
            From the field<br />
            <em className="font-normal text-ink-700">lessons learned.</em>
          </h2>
          <Link
            href="/blog"
            className="reveal hidden md:inline-flex items-center gap-2 font-sans text-sm text-[#D4791A] hover:text-[#0F4C5C] transition-colors mt-4 md:mt-0"
          >
            All posts <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredBlogPosts.map((post, i) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className="reveal bg-white border border-ink-100 rounded-sm p-6 card-hover group block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#D4791A]">{post.date}</span>
                <span className="font-sans text-xs text-ink-400">{post.readTime}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-[#0F4C5C] leading-snug mb-3 group-hover:text-[#1B7A8A] transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-sm text-ink-600 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1 font-sans text-xs text-[#D4791A]">
                Read more <ArrowRight size={11} />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="reveal mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm text-[#D4791A] hover:text-[#0F4C5C] transition-colors"
          >
            All posts <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
