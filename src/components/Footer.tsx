import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-white font-bold tracking-tight">Ganesh Chandrawale</span>
          <span className="font-sans text-xs text-white/40 mt-0.5">Problem solver. Tech leader. Lifelong learner.</span>
        </div>
        <nav className="flex items-center gap-6">
          {[
            { label: 'About', href: '/#about' },
            { label: 'Journey', href: '/#journey' },
            { label: 'Blog', href: '/blog' },
            { label: 'AI Insights', href: '/ai-insights' },
            { label: 'Contact', href: '/#contact' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-xs hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="font-sans text-xs text-white/30">
          © {new Date().getFullYear()} Ganesh Chandrawale
        </div>
      </div>
    </footer>
  )
}
