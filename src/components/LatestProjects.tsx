'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    slug: 'billing-transformation',
    tag: 'AWS · Microservices · Event-Driven',
    title: 'Billing Transformation',
    subtitle: 'London Market Insurance',
    period: '2023 – Present',
    excerpt: 'Designed and delivered a greenfield billing capability from one-line requirements to production-ready.',
    colour: '#0F4C5C',
  },
  {
    slug: 'settlements-london-market',
    tag: 'Domain Architecture · Financial Controls',
    title: 'Settlements (London Market)',
    subtitle: 'Multi-party Financial Flows',
    period: '2023 – Present',
    excerpt: 'Designing financial certainty in a multi-party market—making complexity defensible, auditable, and scalable.',
    colour: '#1B7A8A',
  },
]

export default function LatestProjects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="latest-projects" ref={sectionRef} className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#D4791A]" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">
            Current focus
          </span>
        </div>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight mb-4">
          Latest Projects
        </h2>
        <p className="reveal font-body text-base text-ink-500 max-w-xl mb-14 leading-relaxed">
          Deep dives into current work — the domain challenges, design decisions, and outcomes that matter.
        </p>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="reveal card-hover bg-white border border-ink-100 rounded-sm p-7 flex flex-col"
            >
              {/* Tag + period */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <span
                  className="font-mono text-xs tracking-wider"
                  style={{ color: project.colour }}
                >
                  {project.tag}
                </span>
                <span className="font-sans text-xs text-ink-400">{project.period}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-[#0F4C5C] mb-1 leading-snug">
                {project.title}
              </h3>
              <div className="font-sans text-xs text-ink-500 mb-4">{project.subtitle}</div>

              {/* Description */}
              <p className="font-body text-sm text-ink-700 leading-relaxed mb-5 flex-1">
                {project.excerpt}
              </p>

              {/* Read more link */}
              <div className="flex items-center gap-1 font-sans text-xs text-[#D4791A]">
                Read more <ArrowRight size={11} />
              </div>

              {/* Colour accent bar */}
              <div
                className="h-0.5 mt-6 rounded-full opacity-20"
                style={{ background: project.colour }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
