import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { parseMarkdown } from '@/lib/markdown'

const BASE_URL = 'https://ganeshchandrawale.info'

type Project = {
  slug: string
  title: string
  subtitle: string
  tag: string
  period: string
  content: string
  colour: string
}

const projects: Project[] = [
  {
    slug: 'billing-transformation',
    title: 'Billing Transformation',
    subtitle: 'Turning one-line intent into trusted, automated financial capability',
    tag: 'AWS · Microservices · Event-Driven',
    period: '2023 – Present',
    colour: '#0F4C5C',
    content: `
Billing is a Finance-critical capability. If Billing is wrong, everything downstream becomes noisy: reconciliation, reporting, controls, and stakeholder confidence.

I led the design and delivery of a **greenfield Billing capability** from one-line business requirements through design approval, delivery oversight, UAT, and production readiness—built to be **fully automated**, control-aware, and trusted by Finance.

---

## What Billing transformation really requires

Billing is often approached as a "system problem". In reality, it's a **domain problem**:

- What is being billed and why?
- When does liability become billable?
- What triggers billing events?
- What evidence and audit trail is required?
- How do exceptions resolve without breaking controls?

If those questions are not answered first, automation simply accelerates confusion.

---

## How I build Billing capabilities

I work domain-first and outcome-driven. My approach is:

1. **Clarify the business intent**  
   Minimal requirements are not a blocker—they are a signal that the domain needs structure.

2. **Define the operating model**  
   Ownership, approvals, exception handling, and control points.

3. **Design for straight-through processing**  
   Make the default path automated, but keep accountability visible.

4. **Prove correctness early**  
   Finance confidence is earned through clarity, traceability, and defensible rules—not through technical claims.

5. **Deliver through governance**  
   I work through design authority and structured approval, ensuring the design is understood and defendable before build and UAT.

---

## What "good" looks like

A Billing capability is successful when:

- Finance can explain and defend outcomes
- Processing is automated, not workaround-driven
- Exceptions are visible, traceable, and owned
- Controls are embedded into the workflow, not bolted on later

---

## My style of leadership in Billing change

Billing work is often where stakeholder confidence is fragile—especially when previous attempts have been inconsistent or overly technical.

I build trust by:

- Staying close to Finance outcomes and language
- Making decisions explicit and traceable
- Being clear about what the automation does *and does not* decide
- Keeping the design explainable to non-technical stakeholders

This is how greenfield Billing becomes a capability that Finance can rely on.
    `,
  },
  {
    slug: 'settlements-london-market',
    title: 'Settlements (London Market)',
    subtitle: 'Designing financial certainty in a multi-party market',
    tag: 'Domain Architecture · Financial Controls',
    period: '2023 – Present',
    colour: '#1B7A8A',
    content: `
Settlements in the London Market sit at the intersection of **financial risk, market practice, and regulatory scrutiny**. They are not simply "payments"; they are the point at which obligations become real, cash moves across parties, and exceptions become visible.

My work in Settlements focuses on making this complexity **defensible, auditable, and scalable**—without breaking the real-world practices the market relies on.

---

## What makes London Market settlements different

London Market settlement flows are inherently **multi-party** and **exception-heavy**. They involve carriers, brokers, reinsurers, coverholders, and supporting market services—often across borders and time zones—where timing, evidence, and responsibility matter.

That is why the most valuable improvements are rarely "more technology". They come from clarity on:

- **Who owns what decision** and when
- **What evidence is required** for settlement finality
- **Where controls must exist** and where straight-through processing is safe
- **How exceptions escalate** without losing accountability

---

## My focus areas in Settlements

I work at domain architecture level, owning outcomes across operating models and design governance. In Settlements, that typically means:

- Defining end-to-end settlement flows from agreement to instruction, execution, and reconciliation, including recoveries and exception handling.
- Making settlement outcomes **defensible** by designing clear ownership, escalation paths, and "why" behind decision points.
- Improving auditability through traceability of inputs, decisions, and outcomes—so settlement narratives can be reconstructed without manual effort.
- Ensuring changes align with how the London Market processes claims and accounting/settlement activities in practice.

---

## How I approach settlement modernisation

I start with the domain, not the system.

Before proposing solution changes, I map:

1. **The operating model** (roles, responsibilities, handoffs, approvals)
2. **Control points** (where risk is created, where evidence is required)
3. **Exception patterns** (what goes wrong in reality)
4. **Outcomes** (what Finance, Claims, and Compliance need to be able to prove)

Only then do we design automation or integration. The goal is always:

**reduce friction without removing accountability**.

---

## The outcome I aim for

A settlement capability is successful when:

- Finance trusts the correctness of the outcomes
- Claims teams can execute efficiently without workarounds
- Exceptions are handled consistently and transparently
- Audit and regulatory enquiries can be answered from the record, not from memory

That is the standard I design for.

---

## If you're working on settlements change…

If you're modernising London Market settlement processes, the biggest risks are usually:

- "Automating" before the operating model is clear
- Moving fast without defining ownership and escalation
- Treating exceptions as edge cases instead of the real workload

I build settlement designs that work under scrutiny—not only on a good day.
    `,
  },
]

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}

  return {
    title: `${project.title} | Projects`,
    description: project.subtitle,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Ganesh Chandrawale`,
      description: project.subtitle,
      url: `${BASE_URL}/projects/${project.slug}`,
      type: 'article',
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#FAF7F2] pt-28 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-sans text-sm text-[#D4791A] hover:text-[#0F4C5C] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <span className="font-mono text-xs tracking-wider" style={{ color: project.colour }}>
                {project.tag}
              </span>
              <span className="font-sans text-xs text-ink-400">{project.period}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight mb-3">
              {project.title}
            </h1>
            <p className="font-display text-xl text-ink-600 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-[#0F4C5C]
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
              prose-p:font-body prose-p:text-ink-700 prose-p:leading-relaxed
              prose-strong:text-[#0F4C5C] prose-strong:font-semibold
              prose-ul:font-body prose-ul:text-ink-700
              prose-li:my-1
              prose-hr:border-ink-200 prose-hr:my-8"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(project.content) }}
          />
        </article>
      </main>
      <Footer />
    </>
  )
}
