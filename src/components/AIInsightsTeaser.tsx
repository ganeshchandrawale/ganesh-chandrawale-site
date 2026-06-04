'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredInsights = [
  {
    title: 'Enterprise AI Architectures in 2026: Where the Market Agrees, Where It Splits, and What It Means for Work',
    excerpt: 'The biggest tech platforms have now placed their AI strategy bets for 2026. A clear-eyed look at where the market aligns, where it diverges, and what it means for enterprise architects and the future of work.',
    date: '4 Jun 2026',
    readTime: '10 min read',
    slug: 'enterprise-ai-architectures-2026'
  },
  {
    title: 'AI killing jobs might not be the whole truth',
    excerpt: 'AI killing jobs might not be the whole truth; it is rewriting job descriptions, reshaping team structures, and raising the bar for hybrid roles.',
    date: '27 May 2026',
    readTime: '6 min read',
    slug: 'ai-job-evolution'
  },
  {
    title: 'AI-Enabled API Governance: Turning a Bottleneck into a Competitive Advantage',
    excerpt: 'API governance is one of those disciplines everyone agrees matters — but too many organisations still handle it too late.',
    date: '27 Apr 2026',
    readTime: '10 min read',
    slug: 'ai_enabled_api_governance'
  },
  {
    title: 'Architecture Assurance: Reconciling Intent Across the Distributed Web',
    excerpt: 'In a modern enterprise, architecture is—and always will be—a Distributed Web of Artifacts.',
    date: '31 Mar 2026',
    readTime: '5 min read',
    slug: 'architecture_assurance_article'
  },
  {
    title: 'From Page Views to Purpose: How AI Is Redefining Customer Experience in the IT Industry',
    excerpt: 'An exploration for strategy leaders, enterprise architects and customer experience professionals on the fundamental shift happening at the intersection of AI and customer experience.',
    date: '12 Mar 2026',
    readTime: '12 min read',
    slug: 'page-views-to-purpose'
  }
]

export default function AIInsightsTeaser() {
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
    <section id="ai-insights" ref={sectionRef} className="py-16 md:py-24 bg-[#FDF9F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#D4791A]" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">
            AI & the future of work
          </span>
        </div>
        <div className="md:flex md:items-end md:justify-between mb-12">
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight max-w-xl">
            Thoughts on where<br />
            <em className="font-normal text-ink-700">technology is taking us.</em>
          </h2>
          <Link
            href="/ai-insights"
            className="reveal hidden md:inline-flex items-center gap-2 font-sans text-sm text-[#D4791A] hover:text-[#0F4C5C] transition-colors mt-4 md:mt-0"
          >
            All insights <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredInsights.map((insight, i) => (
            <Link
              key={insight.title}
              href={`/ai-insights/${insight.slug}`}
              className="reveal bg-white border border-ink-100 rounded-sm p-6 card-hover group block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#D4791A]">{insight.date}</span>
                <span className="font-sans text-xs text-ink-400">{insight.readTime}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-[#0F4C5C] leading-snug mb-3 group-hover:text-[#1B7A8A] transition-colors">
                {insight.title}
              </h3>
              <p className="font-body text-sm text-ink-600 leading-relaxed">
                {insight.excerpt}
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
            href="/ai-insights"
            className="inline-flex items-center gap-2 font-sans text-sm text-[#D4791A] hover:text-[#0F4C5C] transition-colors"
          >
            All insights <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
