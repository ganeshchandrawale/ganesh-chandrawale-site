import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BASE_URL = 'https://ganeshchandrawale.info'

export const metadata: Metadata = {
  title: 'Projects — Real Work, Real Outcomes',
  description: 'Notable projects by Ganesh Chandrawale — from billing transformation to legacy migration, process automation to hiring reform.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Ganesh Chandrawale — Solutions Architect',
    description: 'Real work, real outcomes. Notable projects from 15+ years in enterprise technology.',
    url: `${BASE_URL}/projects`,
    type: 'website',
  },
}

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
]

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#FAF7F2] pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4791A]" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">Notable work</span>
            </div>
            <h1 className="font-display text-5xl font-bold text-[#0F4C5C] leading-tight mb-4">
              Projects
            </h1>
            <p className="font-body text-base text-ink-500 max-w-xl leading-relaxed">
              Not just project names — the context, the challenge, and what actually happened.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group block bg-white border border-ink-100 rounded-sm p-7 card-hover">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span className="font-mono text-xs tracking-wider" style={{ color: project.colour }}>
                    {project.tag}
                  </span>
                  <span className="font-sans text-xs text-ink-400">{project.period}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-[#0F4C5C] leading-snug mb-1 group-hover:text-[#1B7A8A] transition-colors">
                  {project.title}
                </h2>
                <div className="font-sans text-xs text-ink-500 mb-3">{project.subtitle}</div>
                <p className="font-body text-sm text-ink-600 leading-relaxed mb-4">{project.excerpt}</p>
                <div className="flex items-center gap-1 font-sans text-xs text-[#D4791A]">
                  Read more <ArrowRight size={11} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
