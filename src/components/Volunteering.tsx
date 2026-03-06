'use client'
import { useEffect, useRef } from 'react'

export default function Volunteering() {
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
    <section id="volunteering" ref={sectionRef} className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left — Content */}
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4791A]" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">
                Beyond the code
              </span>
            </div>

            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight mb-6">
              Cricket coaching.<br />
              <em className="font-normal text-ink-700">A different kind of delivery.</em>
            </h2>

            <div className="reveal space-y-4 font-body text-base text-ink-700 leading-relaxed">
              <p>
                Since 2019, I've been coaching cricket at my local club — starting with 9-year-olds 
                learning their first forward defensive, and now working with 13-year-olds who are 
                starting to understand the game's deeper tactics.
              </p>
              <p>
                Cricket teaches patience, discipline, and how to handle pressure — lessons that 
                translate surprisingly well to software architecture. Both require reading the 
                situation, adapting your approach, and knowing when to attack and when to defend.
              </p>
              <p>
                It's also a reminder that not everything valuable happens in front of a screen. 
                Some of the best problem-solving happens on a cricket field on a Saturday morning.
              </p>
            </div>
          </div>

          {/* Right — Club card */}
          <div className="reveal">
            <div className="bg-white border border-ink-100 rounded-sm p-8 card-hover">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-sans text-xs tracking-widest uppercase text-[#D4791A] font-medium mb-2">
                    Current club
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0F4C5C] leading-tight mb-1">
                    Witney Mills Cricket Club
                  </h3>
                  <p className="font-sans text-sm text-ink-500">Witney, Oxfordshire</p>
                </div>
                <div className="text-4xl" aria-hidden="true">🏏</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-1">
                    Role
                  </div>
                  <div className="font-body text-sm text-ink-700">Youth Cricket Coach</div>
                </div>
                <div>
                  <div className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-1">
                    Age group
                  </div>
                  <div className="font-body text-sm text-ink-700">Under-13s</div>
                </div>
                <div>
                  <div className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-1">
                    Since
                  </div>
                  <div className="font-body text-sm text-ink-700">2019</div>
                </div>
              </div>

              <div className="pt-6 border-t border-ink-100">
                <p className="font-body text-xs text-ink-600 leading-relaxed italic mb-6">
                  "Coaching isn't just about technique — it's about building confidence, 
                  teaching resilience, and helping young players fall in love with the game."
                </p>

                <div className="space-y-2">
                  <div className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-3">
                    Accreditations
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Enhanced DBS Checked',
                      'ECB Core Coach (Level 2)',
                      'ECB Safe Hands Certified',
                      'First Aid Certified',
                    ].map((cert) => (
                      <div key={cert} className="flex items-start gap-2">
                        <span className="text-[#D4791A] mt-0.5 flex-shrink-0 text-xs">✓</span>
                        <span className="font-sans text-xs text-ink-700 leading-tight">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-0.5 mt-6 rounded-full bg-[#D4791A] opacity-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
