'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredBlogPosts = [
    {
    title: 'IT Uncertainty 2026: What It Feels Like on the Ground',
    excerpt: 'Ive worked my way up from Java developer to Solutions Architect across multiple industries. Ive seen tech booms, busts, and everything in between. But 2026 feels different. Not just for executives making decisions, but for employees living the daily reality.',
    date: '21 Apr 2026',
    readTime: '3 min read',
    slug: 'it-uncertainty-2026'
  },
  {
    title: 'The Ferrari Analogy Is Costing You More Than You Think',
    excerpt: 'How a seemingly sensible boardroom shortcut quietly undermines engineering quality, accumulates risk, and misreads the very philosophy it claims to follow.',
    date: '07 Apr 2026',
    readTime: '8 min read',
    slug: 'ferrari-toyota-analogy'
  },
  {
    title: 'The Requirements Graveyard: Why So Many Projects Die Before a Line of Code Is Written',
    excerpt: 'Most projects do not die in production; they die quietly in the requirements phase. By the time engineers open an IDE, the real damage is already done.',
    date: '25 Mar 2026',
    readTime: '4 min read',
    slug: 'the-requirements-graveyard'
  },
  {
    title: 'Which Architect Am I, Exactly? The Job-Title Maze We\'ve Built',
    excerpt: 'When someone asks me what kind of architect I am, I still hesitate. My CV says Solution Architect, but my work cuts across integration, data, cloud and enterprise architecture.',
    date: '16 Mar 2026',
    readTime: '8 min read',
    slug: 'which-architect-am-i-exactly'
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
