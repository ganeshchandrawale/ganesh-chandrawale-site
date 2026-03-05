'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    tag: 'AWS · Microservices · Event-Driven',
    title: 'London Market Transformation — Billing Capability',
    company: 'DXC Technology · Velonetic',
    period: '2023 – Present',
    description: 'Designed and delivered a greenfield billing capability for the UK insurance market transformation — the "missing piece" nobody had addressed. Started with one-liner requirements, worked with BAs to build them to standard, then architected a solution using AWS services, Java microservices, webhooks and event-driven patterns. Approved by TDA on first presentation.',
    outcomes: ['Delivered from 0 to production-ready', 'Standardised requirements process across domain', 'Reduced tech debt backlog by 30%'],
    colour: '#0F4C5C',
  },
  {
    tag: 'AWS · Legacy Migration · DevOps',
    title: 'Legacy Application Migration to AWS',
    company: 'Cognizant · Telefonica O2',
    period: '2018',
    description: 'Three legacy apps needed migrating from Spanish data centres to AWS — with 3 months to go before a £1M+ DC licence deadline. Discovered they were incompatible with lift-and-shift. Presented an alternative modernisation plan, got it approved, and delivered all three applications with penetration testing complete and 3 days to spare. Solo-architected the full high and low-level design.',
    outcomes: ['Saved client £1M+ in DC licence costs', 'Delivered 3 months ahead of penalty clause', '100% technology compliance achieved'],
    colour: '#D4791A',
  },
  {
    tag: 'BPM · Process Automation · UX',
    title: 'Minor Works — From Coffee Chat to Product',
    company: 'Cognizant · Network Rail',
    period: '2020 – 2021',
    description: 'A casual conversation about a colleague\'s Friday reporting nightmare became a full product. Delivered a work management platform that replaced email-based processes, produced 15+ automated reports, and let the team take on significantly more work with the same headcount. Later replicated for other departments after the client started "showing it off" in SLT meetings.',
    outcomes: ['Eliminated hours of weekly manual reporting', 'Team capacity increased with same headcount', 'Replicated across additional departments'],
    colour: '#1B7A8A',
  },
  {
    tag: 'Java · Automation · IT Ops',
    title: 'L2 Support Automation Utility',
    company: 'Cognizant · Telefonica O2',
    period: '2015',
    description: 'Identified that a single category of tickets made up 50% of L2 support volume — always same root cause, same fix. Built a Java utility that queried the DB, detected the issue proactively and applied the resolution automatically. Demonstrated in non-prod, deployed to production within weeks. Ticket volume halved overnight.',
    outcomes: ['50% reduction in support ticket volume', 'Freed team capacity for higher-value work', 'Deployed to production within weeks of demo'],
    colour: '#737373',
  },
  {
    tag: 'Hiring · Process Design · Leadership',
    title: 'Recruitment Process Transformation',
    company: 'DXC Technology',
    period: '2023',
    description: 'Inherited a hiring process generating 20+ CVs/week with 80% rejection rate and 25% interview success. Built a structured interview matrix, rewrote job descriptions based on real responsibilities, aligned recruitment partners, and founded a Capability Guild for onboarding. End result: 5 interviews to hire 3 people, vs 20 interviews to hire fewer than 5 previously.',
    outcomes: ['CV volume dropped 80%, quality improved dramatically', 'Interview success rate doubled to 50%+', 'Founded System Architecture Guild (40+ members)'],
    colour: '#0F4C5C',
  },
]

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 bg-[#FDF9F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#D4791A]" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">
            Notable work
          </span>
        </div>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight mb-4">
          Problems solved.<br />
          <em className="font-normal text-ink-700">Lessons earned.</em>
        </h2>
        <p className="reveal font-body text-base text-ink-500 max-w-xl mb-14 leading-relaxed">
          Not just project names — the context, the challenge, and what actually happened.
        </p>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal card-hover bg-white border border-ink-100 rounded-sm p-7 flex flex-col ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
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
              <div className="font-sans text-xs text-ink-500 mb-4">{project.company}</div>

              {/* Description */}
              <p className="font-body text-sm text-ink-700 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Outcomes */}
              <div>
                <div className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-2">
                  Key outcomes
                </div>
                <ul className="space-y-1">
                  {project.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 font-sans text-xs text-ink-700">
                      <span style={{ color: project.colour }} className="mt-0.5 flex-shrink-0">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colour accent bar */}
              <div
                className="h-0.5 mt-6 rounded-full opacity-20"
                style={{ background: project.colour }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
