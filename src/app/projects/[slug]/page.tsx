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
    subtitle: 'Turning intent into trusted, automated financial capability',
    tag: 'AWS · Microservices · Event-Driven',
    period: '2023 – Present',
    colour: '#0F4C5C',
    content: `
Billing is a Finance-critical capability. If Billing is wrong, everything downstream becomes noisy: reconciliation, reporting, controls, and stakeholder confidence.

This piece explores the architectural considerations behind designing a **greenfield Billing capability** — from clarifying business intent through to automated, control-aware financial processing.

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

## One way to think about Billing architecture

A domain-first, outcome-driven approach tends to work well. The key considerations are:

- **Clarify the business intent**
  Minimal requirements are not a blocker — they are a signal that the domain needs structure first.

- **Define the operating model**
  Ownership, approvals, exception handling, and control points need to be explicit before automation is designed.

- **Design for straight-through processing**
  Make the default path automated, but keep accountability visible at every step.

- **Prove correctness early**
  Finance confidence is earned through clarity, traceability, and defensible rules — not through technical claims.

- **Deliver through governance**
  Structured design approval ensures the architecture is understood and defensible before build begins.

---

## What "good" looks like

A Billing capability is in a good place when:

- Finance can explain and defend outcomes
- Processing is automated, not workaround-driven
- Exceptions are visible, traceable, and owned
- Controls are embedded into the workflow, not bolted on later

---

## Stakeholder confidence in Billing change

Billing work is often where stakeholder confidence is fragile — especially where previous attempts have been inconsistent or overly technical.

Trust tends to build when:

- Outcomes are framed in Finance language, not system language
- Decisions are explicit and traceable
- The automation's scope is clearly communicated — what it decides, and what it does not
- The design remains explainable to non-technical stakeholders

This is how a Billing capability becomes something Finance can rely on, not just something IT can point to.
    `,
  },
  {
    slug: 'settlements-london-market',
    title: 'Settlements Architecture',
    subtitle: 'Designing financial certainty in multi-party settlement flows',
    tag: 'Domain Architecture · Financial Controls',
    period: '2023 – Present',
    colour: '#1B7A8A',
    content: `
Settlements in regulated financial markets sit at the intersection of **financial risk, market practice, and regulatory scrutiny**. They are not simply "payments" — they are the point at which obligations become real, cash moves across parties, and exceptions become visible.

This piece explores architectural considerations for making settlement complexity **defensible, auditable, and scalable** — without breaking the real-world practices the market relies on.

---

## What makes multi-party settlements architecturally interesting

Settlement flows in complex markets are inherently **multi-party** and **exception-heavy**. They involve multiple counterparties, often across borders and time zones, where timing, evidence, and responsibility all matter.

The most valuable architectural improvements rarely come from "more technology". They come from clarity on:

- **Who owns what decision** and when
- **What evidence is required** for settlement finality
- **Where controls must exist** and where straight-through processing is safe
- **How exceptions escalate** without losing accountability

---

## Key architectural focus areas

Working at domain architecture level, the considerations that tend to matter most are:

- Defining end-to-end settlement flows from agreement to instruction, execution, and reconciliation — including recoveries and exception handling.
- Making settlement outcomes **defensible** through clear ownership, escalation paths, and explicit decision rationale.
- Improving auditability through traceability of inputs, decisions, and outcomes — so settlement narratives can be reconstructed without manual effort.
- Ensuring architectural changes align with how the market actually processes accounting and settlement activities in practice.

---

## An illustrative approach to settlement modernisation

Starting with the domain rather than the system tends to produce more durable designs. Before proposing solution changes, it helps to map:

1. **The operating model** — roles, responsibilities, handoffs, approvals
2. **Control points** — where risk is created, where evidence is required
3. **Exception patterns** — what goes wrong in practice, not just in theory
4. **Outcomes** — what Finance and Compliance need to be able to prove

Only then does automation or integration design make sense. The goal is always:

**reduce friction without removing accountability**.

---

## What a well-designed settlement capability looks like

A settlement architecture is in a good place when:

- Finance trusts the correctness of outcomes
- Operational teams can execute efficiently without workarounds
- Exceptions are handled consistently and transparently
- Audit and regulatory enquiries can be answered from the record, not from memory

---

## Common risks in settlement modernisation

The patterns that tend to cause problems:

- Automating before the operating model is clear
- Moving fast without defining ownership and escalation paths
- Treating exceptions as edge cases rather than the real workload

Settlement designs that hold up under scrutiny are built around these risks, not despite them.
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
        <article className="max-w-2xl mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-sans text-sm text-[#D4791A] hover:text-[#0F4C5C] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Notable Work
          </Link>

          {/* Header block */}
          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <span className="font-mono text-xs tracking-wider" style={{ color: project.colour }}>
                {project.tag}
              </span>
              <span className="font-sans text-xs text-ink-400">{project.period}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0F4C5C] leading-tight mb-4">
              {project.title}
            </h1>

            {/* Subtitle as standfirst — matches blog/AI insights treatment */}
            <p className="font-body text-xl text-ink-600 leading-relaxed mb-6 border-l-4 border-[#D4791A] pl-4">
              {project.subtitle}
            </p>
          </div>

          {/* Divider — matches blog/AI insights pages */}
          <div className="flex items-center gap-4 mb-10" aria-hidden="true">
            <div className="h-px flex-1 bg-ink-200" />
            <div className="w-2 h-2 rounded-full bg-[#D4791A]" />
            <div className="h-px flex-1 bg-ink-200" />
          </div>

          {/* Article body — same prose-article class as blog and AI insights */}
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(project.content) }}
          />
        </article>
      </main>
      <Footer />
    </>
  )
}