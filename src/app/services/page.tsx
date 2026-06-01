import Link from 'next/link'
import { ArrowRight, BookOpen, BarChart3, Users, Check, TrendingUp, Wallet } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const allServices = [
  {
    title: 'Bookkeeping', description: 'Organized books, clear reporting, and reliable financial visibility for growing companies.',
    icon: BookOpen, features: ['Transaction categorization', 'Reconciliation', 'Monthly bookkeeping', 'Expense tracking', 'Income tracking'],
    href: '/bookkeeping', image: '/images/service-bookkeeping.jpg',
  },
  {
    title: 'Financial Reporting', description: 'Clear monthly reports that help you understand your business performance.',
    icon: BarChart3, features: ['Profit & Loss statements', 'Balance Sheets', 'Cash Flow summaries', 'Monthly reporting'],
    href: '/contact', image: '/images/service-reporting.jpg',
  },
  {
    title: 'Payroll Support', description: 'Streamlined payroll tracking and employee payment record management.',
    icon: Users, features: ['Payroll tracking', 'Employee payment records', 'Payroll organization', 'Reporting support'],
    href: '/contact', image: '/images/hero-workspace.jpg',
  },
  {
    title: 'Financial Operations Support', description: 'End-to-end financial operations support for growing businesses.',
    icon: Wallet, features: ['Expense visibility', 'Financial systems', 'Workflow organization', 'Operational financial tracking'],
    href: '/contact', image: '/images/service-operations.jpg',
  },
  {
    title: 'Business Financial Insights', description: 'Data-driven insights to help you make better business decisions.',
    icon: TrendingUp, features: ['Margin visibility', 'KPI tracking', 'Spending analysis', 'Financial trend analysis'],
    href: '/contact', image: '/images/pricing-hero.jpg',
  },
]

export const metadata = {
  title: 'Services | Perugi Partners',
  description: 'Financial services built for growing businesses.',
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] w-full flex items-center bg-background pt-28 pb-16">
        <svg className="absolute right-0 top-20 w-64 h-64 opacity-[0.06]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Our Services</span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
              Financial services built for <span className="text-emerald-500">growing</span> businesses.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Practical financial support designed for entrepreneurs, startups, and modern businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="space-y-20">
            {allServices.map((service, i) => (
              <AnimatedSection key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? '' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="rounded-3xl overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-64 lg:h-80 object-cover" />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
              Let&apos;s simplify your financial <span className="text-emerald-500">operations</span>.
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all mt-8">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
