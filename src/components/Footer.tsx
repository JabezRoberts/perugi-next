'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Globe } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const footerLinks = {
  services: [
    { label: 'Bookkeeping', href: '/bookkeeping' },
    { label: 'Financial Reporting', href: '/services' },
    { label: 'Operational Support', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Case Studies', href: '/services' },
    { label: 'FAQ', href: '/pricing' },
  ],
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F17] text-white relative">
      <div className="w-full px-6 lg:px-12 py-16 lg:py-24 border-b border-white/10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Let&apos;s build something <span className="text-emerald-500">durable</span>.
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">{siteConfig.tagline}</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
            Book a Consultation
          </Link>
        </motion.div>
      </div>

      <div className="w-full px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
                {siteConfig.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </Link>
            <p className="text-white/50 mb-6 max-w-sm">
              Modern financial operations and bookkeeping for entrepreneurs and growing businesses.
            </p>
            <div className="flex items-center gap-3">
              <a href={`mailto:${siteConfig.email}`} className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors" aria-label="Email">
                <Mail className="w-4 h-4 text-white/70" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors" aria-label="Instagram">
                <Globe className="w-4 h-4 text-white/70" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <Globe className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-emerald-500 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white/60 transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white/60 transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <svg viewBox="0 0 1440 200" fill="none" className="w-full">
          <path d="M-100 200 C 400 50, 1040 50, 1540 200" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </footer>
  )
}
