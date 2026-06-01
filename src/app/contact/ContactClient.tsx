'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Globe, Send, Check } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', businessName: '', email: '', phone: '', services: '', revenue: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] w-full flex items-center bg-background pt-28 pb-12">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Contact Us</span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
              Let&apos;s talk about your <span className="text-emerald-500">business</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Whether you need bookkeeping support, financial organization, or operational visibility, we&apos;re here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <AnimatedSection animation="fade-left" className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Schedule a <span className="text-emerald-500">consultation</span>.
              </h2>
              <div className="space-y-5 mb-10">
                {[
                  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                  { icon: MapPin, label: 'Location', value: siteConfig.address, href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium hover:text-emerald-500 transition-colors">{item.value}</a>
                      ) : (
                        <span className="font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Follow us</p>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all" aria-label="Instagram">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all" aria-label="LinkedIn">
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection animation="fade-right" className="lg:col-span-3">
              <div className="p-6 lg:p-8 rounded-3xl bg-card border border-border">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                      <Check className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
                    <p className="text-muted-foreground max-w-md">We&apos;ve received your message and will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name <span className="text-red-400">*</span></label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                          placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium mb-2">Business Name</label>
                        <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                          placeholder="Your business name" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-400">*</span></label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                          placeholder="you@company.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                          placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="services" className="block text-sm font-medium mb-2">Services Needed</label>
                        <select id="services" name="services" value={formData.services} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all">
                          <option value="">Select a service</option>
                          <option value="bookkeeping">Monthly Bookkeeping</option>
                          <option value="reporting">Financial Reporting</option>
                          <option value="payroll">Payroll Support</option>
                          <option value="operations">Financial Operations</option>
                          <option value="insights">Business Insights</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="revenue" className="block text-sm font-medium mb-2">Monthly Revenue Range</label>
                        <select id="revenue" name="revenue" value={formData.revenue} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all">
                          <option value="">Select range</option>
                          <option value="0-100k">Under $100K JMD</option>
                          <option value="100-500k">$100K - $500K JMD</option>
                          <option value="500k-1m">$500K - $1M JMD</option>
                          <option value="1-5m">$1M - $5M JMD</option>
                          <option value="5m+">$5M+ JMD</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message <span className="text-red-400">*</span></label>
                      <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                        placeholder="Tell us about your business and what you need help with..." />
                    </div>
                    <button type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Discussion Points */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What we&apos;ll <span className="text-emerald-500">discuss</span>.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Current systems', 'Financial challenges', 'Reporting needs', 'Growth goals', 'Operational concerns'].map((point, i) => (
              <AnimatedSection key={point} delay={i * 0.08} className="p-5 rounded-2xl bg-card border border-border text-center">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-500 mx-auto mb-3">{i + 1}</span>
                <p className="font-medium">{point}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Modern businesses deserve modern financial <span className="text-emerald-500">support</span>.
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
              Perugi Partners helps businesses operate with greater clarity, confidence, and control.
            </p>
            <a href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
              <Mail className="w-4 h-4" /> Send us an email
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
