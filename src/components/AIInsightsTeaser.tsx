'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredInsights = [
  {
    title: 'The AI industry right now is exactly like driving on an Indian road',
    excerpt: 'Lanes are suggestions. The biggest vehicle has right of way. And at any moment, a cow might sit down in the middle of the highway. Sound familiar?',
    date: '18 Feb 2026',
    readTime: '3 min read',
  },
  {
    title: 'Are you feeling overwhelmed by new AI models every day?',
    excerpt: 'FOMO is real. But there\'s a practical 4-step framework to filter the noise and focus on what actually makes sense for your business — without the hype.',
    date: '13 Feb 2026',
    readTime: '4 min read',
  },
  {
    title: 'I completed an architectural audit in 60 minutes using Amazon Kiro',
    excerpt: 'The wrong lens is "can AI write for me?" The right lens is "can AI handle governance and verification?" Here\'s exactly how I did it.',
    date: '25 Feb 2026',
    readTime: '5 min read',
  },
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
    <section id="ai-insights" ref={sectionRef} className="py-24 md:py-32 bg-[#FDF9F3]">
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
              href={`/ai-insights/${
                insight.title.includes('Indian road') ? 'ai-industry-indian-road' :
                insight.title.includes('overwhelmed') ? 'riding-technology-waves' :
                'architectural-audit-amazon-kiro'
              }`}
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
