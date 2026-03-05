'use client'
import { useEffect, useRef } from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#D4791A]" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">
              Get in touch
            </span>
            <div className="h-px w-8 bg-[#D4791A]" />
          </div>

          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight mb-4">
            Let's have a<br />
            <em className="font-normal text-ink-700">real conversation.</em>
          </h2>

          <p className="reveal font-body text-base text-ink-500 leading-relaxed mb-10">
            Whether you want to talk architecture, AI strategy, career journeys, or just swap
            notes on what's working and what isn't in enterprise tech — I'm always up for it.
          </p>

          {/* Contact links */}
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:gchandrawale@gmail.com"
              className="inline-flex items-center gap-3 bg-[#0F4C5C] text-white font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-[#1B7A8A] transition-colors w-full sm:w-auto justify-center"
            >
              <Mail size={15} />
              gchandrawale@gmail.com
            </a>
          </div>

          {/* Social links */}
          <div className="reveal flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/ganesh-chandrawale-7b734433/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-sans text-sm text-ink-600 hover:text-[#D4791A] transition-colors"
            >
              <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
            <div className="w-px h-4 bg-ink-200" />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-sans text-sm text-ink-600 hover:text-[#D4791A] transition-colors"
            >
              <Github size={16} className="group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
