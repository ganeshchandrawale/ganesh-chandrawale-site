'use client'
import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-[#FDF9F3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — story */}
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4791A]" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">
                About me
              </span>
            </div>

            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight mb-6">
              I follow the problem,<br />
              <em className="font-normal text-ink-700">not the title.</em>
            </h2>

            <div className="reveal space-y-4 font-body text-base text-ink-700 leading-relaxed">
              <p>
                My career didn't follow a plan. It followed curiosity. I started as a PL/SQL developer
                on a project I wasn't hired for, became a Java developer, then accidentally ran an
                L2 ops team of 20 people, then flew to London when my son was 40 days old to rescue
                a project in the red — and somehow turned it around.
              </p>
              <p>
                That pattern — show up, learn fast, solve the hard thing — has defined every
                chapter of the last 15 years. From Pune to London, from writing shell scripts at
                midnight to designing cloud architectures for some of the UK's largest programmes.
              </p>
              <p>
                Today I work as a Solutions Architect on the London Market Transformation
                Programme at DXC Technology, designing enterprise-scale systems on AWS. I also
                write, mentor, lead a System Architecture Guild, and obsess over the role AI will
                play in the future of how we all work.
              </p>
            </div>
          </div>

          {/* Right — values / highlights */}
          <div className="space-y-6">
            <div className="reveal">
              <div className="bg-[#FAF7F2] border border-amber-100 rounded-sm p-6 card-hover">
                <div className="font-sans text-xs tracking-widest uppercase text-[#D4791A] font-medium mb-3">
                  What I believe
                </div>
                <ul className="space-y-3 font-body text-sm text-ink-700 leading-relaxed">
                  {[
                    'An IT change without a business change is an illusion.',
                    'Skills matter more than seniority.',
                    'Real-world experience is the best teacher.',
                    'Documentation isn\'t boring — it\'s how knowledge survives you.',
                    'The best architecture decisions are deeply human ones.',
                  ].map((belief) => (
                    <li key={belief} className="flex items-start gap-3">
                      <span className="text-[#D4791A] mt-0.5 flex-shrink-0">—</span>
                      <span>{belief}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal">
              <div className="bg-[#0F4C5C] rounded-sm p-6">
                <div className="font-sans text-xs tracking-widest uppercase text-teal-200 font-medium mb-4">
                  Currently
                </div>
                <div className="space-y-3">
                  {[
                    { role: 'Solutions Architect', place: 'DXC Technology / Velonetic, London' },
                    { role: 'Building an AI Agent', place: 'DXC Innovation Challenge' },
                  ].map((item) => (
                    <div key={item.role}>
                      <div className="font-sans text-sm font-medium text-white">{item.role}</div>
                      <div className="font-sans text-xs text-teal-200 mt-0.5">{item.place}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="bg-[#FAF7F2] border border-amber-100 rounded-sm p-6 card-hover">
                <div className="font-sans text-xs tracking-widest uppercase text-[#D4791A] font-medium mb-3">
                  Core expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Insurance Domain Architecture',
                    'London Market Insurance',
                    'Insurance Settlements',
                    'Insurance Billing',
                    'Sanctions Enablement',
                    'Architecture Governance',
                    'Regulatory & Financial Controls',
                    'Stakeholder Management',
                    'Solution Architecture',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="font-sans text-xs text-ink-700 border border-ink-200 px-2.5 py-1 rounded-sm bg-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
