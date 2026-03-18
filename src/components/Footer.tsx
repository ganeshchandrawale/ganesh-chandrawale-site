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
            { label: 'Volunteering', href: '/#volunteering' },
            { label: 'Notable Work', href: '/#notable-work' },
            { label: 'Latest Projects', href: '/#latest-projects' },
            { label: 'AI Insights', href: '/ai-insights' },
            { label: 'Blog', href: '/blog' },
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
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-white/10">
        <p className="font-sans text-xs text-white/30 leading-relaxed text-center">
          <span className="text-white/50 font-medium">Important note:</span> This website is a personal portfolio and thought-leadership space. All opinions, interpretations, and perspectives expressed here are my own and are shared in a personal capacity. Nothing on this site should be interpreted as representing the views, practices, or intellectual property of my employer or any past or present client.
        </p>
      </div>
    </footer>
  )
}
