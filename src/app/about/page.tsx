import Link from 'next/link'
import { ArrowRight, Target, Eye, Lightbulb, Shield, Zap, Heart, Clock } from 'lucide-react'
import { coreValues, siteConfig } from '@/lib/data'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata = {
  title: 'About | Perugi Partners',
  description: 'Financial clarity for the modern entrepreneur. Learn why Perugi Partners was created.',
}

export default function About() {
  const storyPoints = [
    'Saw gap between traditional accounting firms and modern entrepreneurs',
    'Businesses often lacked financial visibility',
    'Wanted to make accounting approachable and useful',
    'Belief that financial clarity creates business confidence',
    'Built to combine finance, operations, and modern communication',
  ]

  const futureServices = [
    { title: 'Advisory', desc: 'Strategic financial guidance for key decisions' },
    { title: 'CFO Support', desc: 'Fractional CFO services for growing businesses' },
    { title: 'Forecasting', desc: 'Predictive financial modeling and planning' },
    { title: 'Tax Partnerships', desc: 'Integrated tax planning and preparation' },
    { title: 'Operational Consulting', desc: 'Process optimization and systems design' },
  ]

  const icons = [Lightbulb, Shield, Zap, Heart, Target, Eye, Clock]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] w-full flex items-center bg-background pt-28 pb-16">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-left">
              <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
                About {siteConfig.name}
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
                Financial clarity for the <span className="text-emerald-500">modern</span> entrepreneur.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Perugi Partners was built for a new generation of business owners who move fast, operate online, and need modern financial support.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2}>
              <div className="w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden">
                <img src="/images/jabez-roberts.jpg" alt="Founder" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-left" className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why <span className="text-emerald-500">Perugi Partners</span> was created.
              </h2>
              <ul className="space-y-4">
                {storyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={0.2} className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden">
                  <img src="/images/approach.jpg" alt="Our approach" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-lg">
                  <p className="text-3xl font-bold text-emerald-500">150+</p>
                  <p className="text-sm text-muted-foreground">Businesses Served</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">Help businesses understand, organize, and grow their finances with confidence.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">Become the leading modern financial partner for entrepreneurs in the Caribbean.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              What we <span className="text-emerald-500">believe</span> in.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => {
              const Icon = icons[i % icons.length]
              return (
                <AnimatedSection key={value.title} delay={i * 0.08} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/60 text-sm">{value.description}</p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              More than <span className="text-emerald-500">bookkeeping</span>.
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-12 text-left">
              {['Financial data should support decisions', 'Business owners deserve visibility', 'Entrepreneurs need modern support systems', 'Accounting should help growth, not just compliance'].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="flex items-start gap-3 p-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Built to <span className="text-emerald-500">grow</span> with our clients.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08} className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/30 transition-colors">
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
