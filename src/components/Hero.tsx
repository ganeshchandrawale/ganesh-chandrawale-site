'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAF7F2]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large teal arc */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #0F4C5C 0%, transparent 70%)' }}
        />
        {/* Amber accent bottom left */}
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #D4791A 0%, transparent 70%)' }}
        />
        {/* Subtle grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0F4C5C" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating quote mark */}
        <span className="absolute top-1/4 right-12 font-display text-[200px] text-[#0F4C5C] opacity-[0.03] leading-none select-none">
          "
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}
          >
            <div className="h-px w-8 bg-[#D4791A]" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">
              Solutions Architect · London, UK
            </span>
          </div>

          {/* Main heading */}
          <h1
            ref={headingRef}
            className="font-display text-5xl md:text-7xl font-bold text-[#0F4C5C] leading-[1.05] mb-6"
          >
            Ganesh<br />
            <span className="italic font-normal text-[#1a1a1a]">Chandrawale</span>
          </h1>

          {/* Tagline */}
          <p
            className="font-body text-xl md:text-2xl text-ink-600 mb-4 leading-relaxed"
            style={{ animation: 'fadeUp 0.7s ease 0.35s both' }}
          >
            Problem solver.{' '}
            <span className="text-[#D4791A]">Tech leader.</span>{' '}
            Lifelong learner.
          </p>

          {/* Sub-tagline */}
          <p
            className="font-body text-base md:text-lg text-ink-500 max-w-xl leading-relaxed mb-10"
            style={{ animation: 'fadeUp 0.7s ease 0.5s both' }}
          >
            15+ years turning complex business problems into elegant technology solutions —
            from writing Java code in Pune to architecting cloud transformations in London.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.7s ease 0.65s both' }}
          >
            <Link
              href="/#journey"
              className="inline-flex items-center gap-2 bg-[#0F4C5C] text-white font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-[#1B7A8A] transition-colors"
            >
              Read my story
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-[#D4791A] text-[#D4791A] font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-[#FEF3C7] transition-colors"
            >
              Read the blog
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-ink-200"
            style={{ animation: 'fadeUp 0.7s ease 0.8s both' }}
          >
            {[
              { num: '15+', label: 'Years in tech' },
              { num: '4', label: 'Industries served' },
              { num: '10+', label: 'Roles & disciplines' },
              { num: '3', label: 'Countries worked in' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-[#0F4C5C]">{stat.num}</div>
                <div className="font-sans text-xs text-ink-500 tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-sans text-xs tracking-widest uppercase text-ink-500">Scroll</span>
        <ArrowDown size={14} className="text-ink-500 animate-bounce" />
      </div>
    </section>
  )
}
