'use client'
import { useEffect, useRef } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-[#0F4C5C]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-300" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-amber-300 font-medium">
            Get in touch
          </span>
          <div className="h-px w-8 bg-amber-300" />
        </div>

        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Let's talk.
        </h2>

        <p className="reveal font-body text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Whether it's architecture, transformation, hiring, or just a conversation about where technology is heading — I'm always up for a chat.
        </p>

        <div className="reveal flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="mailto:ganesh.chandrawale@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-[#0F4C5C] font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-amber-100 transition-colors"
          >
            <Mail size={16} />
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/ganesh-chandrawale-7b734433/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/ganeshchandrawale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
