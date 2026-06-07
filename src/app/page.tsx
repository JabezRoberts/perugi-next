import Link from 'next/link'
import { benefits, services } from '@/app/constants/index'
import { ArrowRight, Check, TrendingUp, Users, FileText, Zap } from 'lucide-react'
import { testimonials } from '@/lib/data'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-background pt-20">
        <svg className="absolute -left-[18vw] -top-[10vh] w-[56vw] h-[56vw] opacity-[0.08]" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute -right-[12vw] top-[34vh] w-[52vw] h-[52vw] opacity-[0.08]" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div className="w-full px-6 lg:px-12 py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

            <AnimatedSection animation="scale" className="relative order-2 lg:order-1">
              <div className="relative w-[70vw] h-[70vw] lg:w-[50vh] lg:h-[50vh] mx-auto rounded-full overflow-hidden">
                <img src="/images/hero-workspace.jpg" alt="Modern workspace" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-0 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">98% Client</p>
                    <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={0.2} className="order-1 lg:order-2 text-center lg:text-left">
              <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
                PERUGI PARTNERS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-3xl xl:text-5xl font-bold mb-6 leading-[0.95]">
                Stop Guessing Your Finances & {" "}
                <span className="text-emerald-500">Get Clear Financial Systems {" "}</span> for Growing Businesses
              </h1>
              <p className="text-lg text-muted-foreground mb-4 max-w-lg mx-auto lg:mx-0">
                Built for businesses that want more than outdated accounting and bookkeeping. 
              </p>

              <p className="text-base text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                We help founders clearly understand where their money is going and how their business is actually performing through structured bookkeeping, financial reporting, and ongoing financial clarity.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/get-started" className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3.5 border border-border rounded-full hover:bg-accent/20 transition-all text-foreground font-medium">
                  All Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust */}
      {/* <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Financial support designed for <span className="text-emerald-500">modern</span> entrepreneurs.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Clear communication', 'Fast responses', 'Digital-first systems', 'Entrepreneur-friendly', 'Easy-to-understand reporting', 'Long-term partnerships'].map((feature, i) => (
              <AnimatedSection key={feature} delay={i * 0.08} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="font-medium">{feature}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Your books should do more than{" "} <span className="text-emerald-500">keep score</span>.
            </h2>

            <p className="text-lg text-muted-foreground mb-1 mt-6 font-bold">
              Accurate bookkeeping is only the starting point. 
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Clear financial reports help you understand performance, monitor cash flow, and make confident business decisions. 
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit: { title: string; description: string }) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Most businesses make money, but <span className="text-emerald-500">Few have financial clarity.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-1 mt-6 font-bold">
              Making money in your business is only half the battle. 
            </p>
            <p className="text-lg text-muted-foreground mb-4 ">
              Without clear financial systems and reporting, it becomes difficult to understand cash flow, measure performance, and make confident decisions. The result is missed opportunities, unnecessary costs, and limited visibility into the financial health of your business.  
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <AnimatedSection animation="fade-left">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mono mb-6">What Is Breaking Most Businesses</h3>
              <ul className="space-y-4">
                {[
                    'Cash flow is unclear until problems appear',
                    'Records are incomplete or inconsistent',
                    'Expenses are not tracked in real time',
                    'Business decisions are made without financial data',
                    'Owners lack visibility into true performance'
                  ].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/90" />{p}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-right">
              <h3 className="text-sm uppercase tracking-wider text-emerald-500 mono mb-6">What We Put in Place</h3>
              <ul className="space-y-4">
                {[
                  'Structured bookkeeping that stays up to date',
                  'Clear monthly financial reports you can actually use',
                  'Full visibility into cash flow and spending',
                  'Simple insights that support better decisions',
                  'Reliable systems that keep finances organized'
                ].map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    </span>{s}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Services built to <span className="text-emerald-500">keep your business financially sound</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-1 mt-6 font-bold">
              Your Business&apos;s financial health is more than your income. 
            </p>
            <p className="text-muted-foreground text-lg max-w-6xl mx-auto">
              From bookkeeping to financial reporting and ongoing support, we help business owners stay on top of their numbers with accurate records, clear insights, and reliable financial processes.
            </p>
          </AnimatedSection>

          {/* <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.12} animation="scale">
                <Link href={service.href} className="group block">
                  <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 via-[#0B0F17]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-white/70 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-500 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div> */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => (
              <AnimatedSection
                key={service.title}
                delay={i * 0.12}
                animation="scale"
              >
                <div className="h-full rounded-3xl border border-border bg-card p-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-emerald-500" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 transition-all"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Industries */}
      <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Built for <span className="text-emerald-500">ambitious</span> businesses.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Zap, label: 'Startups' },
              { icon: Users, label: 'Agencies' },
              { icon: FileText, label: 'Contractors' },
              { icon: TrendingUp, label: 'E-commerce' },
              { icon: Users, label: 'Creators' },
              { icon: FileText, label: 'Consultants' },
              { icon: Zap, label: 'Restaurants' },
              { icon: Users, label: 'Service businesses' },
            ].map((client, i) => (
              <AnimatedSection key={client.label} delay={i * 0.06}>
                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <client.icon className="w-6 h-6 text-emerald-500" />
                  <span className="text-white font-medium">{client.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Accounting should not feel <span className="text-emerald-500">outdated</span>.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['Modern communication', 'Technology-first', 'Educational approach', 'Relationship-focused', 'Practical business support'].map((point, i) => (
              <AnimatedSection key={point} delay={i * 0.08} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="font-medium">{point}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full py-20 lg:py-32 bg-card/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] rounded-full overflow-hidden opacity-15 pointer-events-none">
          <img src="/images/service-operations.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-[0.95]">Clarity isn&apos;t a luxury.</h2>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-emerald-500 leading-[0.95]">It&apos;s a competitive advantage.</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We organize your finances so you can make faster decisions—and sleep better.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3.5 border border-border rounded-full hover:bg-accent/20 transition-all text-foreground font-medium">
              Meet the team <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Trusted by operators who value <span className="text-emerald-500">clarity</span>.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-emerald-500">{t.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Ready to get financially <span className="text-emerald-500">organized</span>?
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full hover:bg-accent/20 transition-all text-foreground font-medium">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
