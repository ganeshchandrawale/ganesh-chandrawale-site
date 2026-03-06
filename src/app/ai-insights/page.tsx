import type { Metadata } from 'next'
import { getAllAIInsights } from '@/lib/posts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BASE_URL = 'https://ganeshchandrawale.info'

export const metadata: Metadata = {
  title: 'AI Insights — The Future of Work & Technology',
  description:
    'Ganesh Chandrawale writes about AI, the future of work, and how technology is reshaping enterprise IT. Practical perspectives from a Solutions Architect with 15+ years of experience.',
  alternates: { canonical: '/ai-insights' },
  openGraph: {
    title: 'AI Insights | Ganesh Chandrawale — Solutions Architect',
    description: 'Practical perspectives on AI and the future of work from a Solutions Architect with 15+ years in enterprise technology.',
    url: `${BASE_URL}/ai-insights`,
    type: 'website',
  },
}

export default function AIInsightsPage() {
  const posts = getAllAIInsights()

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#FAF7F2] pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4791A]" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4791A] font-medium">AI & the future of work</span>
            </div>
            <h1 className="font-display text-5xl font-bold text-[#0F4C5C] leading-tight mb-4">
              AI Insights
            </h1>
            <p className="font-body text-base text-ink-500 max-w-xl leading-relaxed">
              I'm not an AI evangelist or a doomer. I'm a practitioner — someone who uses
              these tools daily and writes about what actually works, what doesn't, and
              where all of this is genuinely heading.
            </p>
          </div>

          <div className="bg-[#0F4C5C] border border-[#0F4C5C] rounded-sm p-8 mb-10">
            <div className="font-sans text-xs tracking-widest uppercase text-amber-300 font-medium mb-3">My perspective</div>
            <blockquote className="font-display text-2xl font-bold text-white italic leading-snug">
              "The hesitation many architects feel comes from trying to use AI for writing.
              That's the wrong lens. Use it for governance and verification."
            </blockquote>
          </div>

          {posts.length === 0 ? (
            <div className="bg-white border border-ink-100 rounded-sm p-10 text-center">
              <p className="font-body text-ink-400 italic">Articles coming soon.</p>
              <p className="font-sans text-sm text-ink-400 mt-2">
                Find my thinking on{' '}
                <a href="https://www.linkedin.com/in/ganesh-chandrawale-7b734433/" target="_blank" rel="noopener noreferrer" className="text-[#D4791A] underline">LinkedIn</a>.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/ai-insights/${post.slug}`} className="group block bg-white border border-ink-100 rounded-sm p-7 card-hover">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <time dateTime={post.date} className="font-mono text-xs text-[#D4791A]">{post.date}</time>
                    <span className="font-sans text-xs text-ink-400">{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#0F4C5C] leading-snug mb-2 group-hover:text-[#1B7A8A] transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-ink-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1 font-sans text-xs text-[#D4791A]">
                    Read more <ArrowRight size={11} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
