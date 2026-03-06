'use client'
import { useEffect, useRef } from 'react'

const journey = [
  {
    period: '2010 – 2013',
    role: 'PL/SQL & Java Developer',
    company: 'Cognizant · T-Systems, Pune, India',
    colour: '#737373',
    story: `Started as a Java developer after fast-track training — then immediately landed on a PL/SQL project I wasn't hired for. Learned on the job, became one of the trusted juniors, and discovered my first big lesson: everyone must understand what they're working towards, no matter how small their role.`,
    learning: 'Real-world experience is the best teacher.',
  },
  {
    period: '2013 – 2018',
    role: 'L3 Engineer → L2 Lead → DevOps → Java Dev → Solutions Architect',
    company: 'Cognizant · Telefonica O2, UK',
    colour: '#D4791A',
    story: `Five roles in five years. Joined a chaotic vendor transition, spent 12-hour days documenting everything, automated away 50% of the ticket volume with a Java utility I built in my spare time. Was sent to London when my son was 40 days old to rescue a project in the red. Turned it around in weeks. Ended the chapter as a Solutions Architect migrating legacy apps to AWS with 3 days to spare before the deadline.`,
    learning: 'Skills matter more than seniority. Document everything. Automate the boring stuff.',
  },
  {
    period: '2019 – 2022',
    role: 'Sr. IT Business Analyst & Integration Architect',
    company: 'Cognizant · Network Rail Telecoms, UK',
    colour: '#1B7A8A',
    story: `Learned what proper requirements management looks like. Championed automation in a resistant organisation. Had a coffee conversation that turned into a project saving thousands of hours of manual reporting — and proved that the best way to sell a new tool is to solve a real, painful problem for a real person who really needs it.`,
    learning: 'An IT change without a business change is just an expensive illusion.',
  },
  {
    period: '2022 – Present',
    role: 'Sr. System Architect → Solutions Architect',
    company: 'DXC Technology · Velonetic, London',
    colour: '#0F4C5C',
    story: `Joined the UK's largest insurance market transformation. Standardised hiring processes, founded the System Architecture Guild, delivered a billing capability from scratch, and started building an AI Agent for DXC's innovation challenge. The work is bigger than ever — and so is the learning.`,
    learning: 'Growing a community of like-minded people is one of the most rewarding things you can do.',
  },
]

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150)
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
    <section id="journey" ref={sectionRef} className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#D4791A]" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">
            The journey
          </span>
        </div>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight mb-4">
          15 years of showing up<br />
          <em className="font-normal text-ink-700">and figuring it out.</em>
        </h2>
        <p className="reveal font-body text-base text-ink-500 max-w-xl mb-16 leading-relaxed">
          This isn't a polished CV summary. It's the actual story — the chaos, the lessons,
          and the moments that shaped how I think.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ink-200 to-transparent md:-translate-x-px" />

          <div className="space-y-12 md:space-y-0">
            {journey.map((item, i) => (
              <div
                key={item.period}
                className={`reveal relative md:grid md:grid-cols-2 md:gap-12 md:mb-16 ${
                  i % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full border-4 border-[#FAF7F2] md:-translate-x-3 z-10 flex items-center justify-center"
                  style={{ background: item.colour }}
                />

                {/* Content — alternating sides */}
                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                  {/* Period */}
                  <span
                    className="font-mono text-xs font-medium tracking-wider"
                    style={{ color: item.colour }}
                  >
                    {item.period}
                  </span>

                  {/* Role */}
                  <h3 className="font-display text-xl font-bold text-[#0F4C5C] mt-1 mb-1 leading-snug">
                    {item.role}
                  </h3>

                  {/* Company */}
                  <div className="font-sans text-xs text-ink-500 tracking-wide mb-3">
                    {item.company}
                  </div>

                  {/* Story */}
                  <p className="font-body text-sm text-ink-700 leading-relaxed mb-3">
                    {item.story}
                  </p>

                  {/* Learning callout */}
                  <div
                    className={`inline-flex items-start gap-2 bg-[#FDF9F3] border-l-2 px-3 py-2 ${
                      i % 2 === 0 ? 'md:border-r-2 md:border-l-0 md:text-right' : ''
                    }`}
                    style={{ borderColor: item.colour }}
                  >
                    <span className="font-sans text-xs text-ink-500 italic leading-relaxed">
                      💡 {item.learning}
                    </span>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                {i % 2 === 0 && <div className="hidden md:block" />}
                {i % 2 !== 0 && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
