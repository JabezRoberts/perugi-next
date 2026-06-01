import Link from 'next/link'
import { ArrowRight, Check, TrendingUp, BookOpen, Users } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata = {
  title: 'Bookkeeping | Perugi Partners',
  description: 'Modern bookkeeping for modern businesses.',
}

export default function Bookkeeping() {
  const features = ['Monthly bookkeeping', 'Transaction categorization', 'Bank reconciliation', 'Expense tracking', 'Income tracking', 'Financial organization', 'Monthly reports']

  const benefits = [
    { title: 'Understand profitability', desc: 'See exactly where your money is coming from and going.', icon: TrendingUp },
    { title: 'Improve visibility', desc: 'Real-time dashboards give you a clear picture of your finances.', icon: BookOpen },
    { title: 'Reduce confusion', desc: 'Organized records mean no more scrambling at tax time.', icon: Check },
    { title: 'Track cash flow', desc: 'Monitor your cash position and plan for the future.', icon: TrendingUp },
    { title: 'Stay organized', desc: 'Clean books make everything from taxes to fundraising easier.', icon: BookOpen },
    { title: 'Prepare for growth', desc: 'Scalable systems that grow with your business.', icon: TrendingUp },
  ]

  const clients = ['Small businesses', 'Agencies', 'Contractors', 'Restaurants', 'Startups', 'E-commerce brands', 'Freelancers']

  const steps = [
    { number: '01', title: 'Consultation', desc: 'We discuss your business, current systems, and financial goals.' },
    { number: '02', title: 'Financial Review', desc: 'We assess your existing books and identify areas for improvement.' },
    { number: '03', title: 'Setup & Organization', desc: 'We set up your chart of accounts and integrate your financial tools.' },
    { number: '04', title: 'Monthly Bookkeeping', desc: 'We handle your monthly transactions, reconciliation, and reporting.' },
    { number: '05', title: 'Ongoing Reporting & Support', desc: 'We provide continuous support, insights, and quarterly reviews.' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] w-full flex items-center bg-background pt-28 pb-16">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-left">
              <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Service Details</span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
                Modern bookkeeping for <span className="text-emerald-500">modern</span> businesses.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Organized books, clear reporting, and reliable financial visibility for growing companies.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
                Schedule a Call <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2}>
              <div className="rounded-3xl overflow-hidden">
                <img src="/images/service-bookkeeping.jpg" alt="Bookkeeping" className="w-full h-80 lg:h-96 object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                What&apos;s <span className="text-emerald-500">included</span>.
              </h2>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" className="flex items-center">
              <div className="w-full rounded-3xl overflow-hidden">
                <img src="/images/blog-bookkeeping.jpg" alt="Bookkeeping details" className="w-full h-auto object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Better books create better <span className="text-emerald-500">decisions</span>.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1} className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Who it&apos;s <span className="text-emerald-500">for</span>.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <AnimatedSection key={c} delay={i * 0.06} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border">
                <Users className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-medium text-sm">{c}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Our <span className="text-emerald-500">process</span>.
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1} className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl font-bold text-emerald-500/40 flex-shrink-0">{step.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-white/60">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Ready to simplify your <span className="text-emerald-500">bookkeeping</span>?
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all mt-8">
              Schedule a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
