// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { ArrowRight, Check, HelpCircle, Sparkles } from 'lucide-react'
// import { pricingPlans } from '@/lib/data'
// import AnimatedSection from '@/components/AnimatedSection'

// export default function PricingClient({ faqs }: { faqs: { question: string; answer: string }[] }) {
//   const [openIndex, setOpenIndex] = useState<number | null>(0)

//   const factors = ['Transaction volume', 'Payroll complexity', 'Reporting requirements', 'Number of accounts', 'Operational support level']

//   return (
//     <>
//       {/* Hero */}
//       <section className="relative min-h-[60vh] w-full flex items-center bg-background pt-28 pb-16">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection animation="fade-left">
//               <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Pricing</span>
//               <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
//                 Transparent pricing for <span className="text-emerald-500">growing</span> businesses.
//               </h1>
//               <p className="text-lg text-muted-foreground mb-8 max-w-lg">
//                 Flexible pricing based on business size, transaction volume, and operational complexity.
//               </p>
//               <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
//                 Request a Consultation <ArrowRight className="w-4 h-4" />
//               </Link>
//             </AnimatedSection>
//             <AnimatedSection animation="scale" delay={0.2}>
//               <div className="rounded-3xl overflow-hidden">
//                 <img src="/images/pricing-hero.jpg" alt="Pricing" className="w-full h-80 lg:h-96 object-cover" />
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Tiers */}
//       <section className="w-full py-20 lg:py-28 bg-background">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <AnimatedSection className="text-center mb-14">
//             <h2 className="text-3xl lg:text-5xl font-bold mb-4">
//               Plans that fit your <span className="text-emerald-500">stage</span>.
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Switch or upgrade anytime as your operations grow.</p>
//           </AnimatedSection>
//           <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
//             {pricingPlans.map((plan, i) => (
//               <AnimatedSection key={plan.name} delay={i * 0.12}
//                 className={`relative rounded-3xl p-8 ${plan.popular ? 'bg-card border-2 border-emerald-500 shadow-xl shadow-emerald-500/10' : 'bg-card border border-border'}`}>
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                     <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-emerald-500 text-white text-sm font-semibold rounded-full">
//                       <Sparkles className="w-3.5 h-3.5" /> Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <div className="mb-4">
//                   <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
//                   <p className="text-sm text-muted-foreground">{plan.description}</p>
//                 </div>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold">{plan.price}</span>
//                   <span className="text-muted-foreground text-sm"> {plan.currency}</span>
//                 </div>
//                 <div className="mb-4">
//                   <p className="text-xs uppercase tracking-wider text-muted-foreground mono mb-2">Best For</p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {plan.bestFor.map((bf) => (
//                       <span key={bf} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{bf}</span>
//                     ))}
//                   </div>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((f) => (
//                     <li key={f} className="flex items-center gap-2.5 text-sm">
//                       <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />{f}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link href={plan.href}
//                   className={`block w-full text-center py-3 rounded-full font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${plan.popular ? 'bg-emerald-500 text-white' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
//                   {plan.cta}
//                 </Link>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Custom Quotes */}
//       <section className="w-full py-20 lg:py-28 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection animation="fade-left">
//               <h2 className="text-3xl lg:text-4xl font-bold mb-6">
//                 Every business is <span className="text-emerald-500">different</span>.
//               </h2>
//               <p className="text-muted-foreground mb-8">
//                 We understand that no two businesses are alike. That&apos;s why we offer custom quotes tailored to your specific needs.
//               </p>
//               <ul className="space-y-3">
//                 {factors.map((f, i) => (
//                   <li key={f} className="flex items-center gap-3">
//                     <span className="w-2 h-2 rounded-full bg-emerald-500" />{f}
//                   </li>
//                 ))}
//               </ul>
//             </AnimatedSection>
//             <AnimatedSection animation="fade-right">
//               <div className="rounded-3xl overflow-hidden">
//                 <img src="/images/faq.jpg" alt="Custom pricing" className="w-full h-auto object-cover" />
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="w-full py-20 lg:py-28 bg-background">
//         <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
//           <AnimatedSection className="text-center mb-14">
//             <h2 className="text-3xl lg:text-5xl font-bold mb-4">
//               Questions founders <span className="text-emerald-500">actually</span> ask.
//             </h2>
//           </AnimatedSection>
//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <AnimatedSection key={i} delay={i * 0.08} className="rounded-2xl bg-card border border-border overflow-hidden">
//                 <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
//                   className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/5 transition-colors">
//                   <span className="font-medium pr-4">{faq.question}</span>
//                   <HelpCircle className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
//                 </button>
//                 {openIndex === i && (
//                   <div className="px-6 pb-6">
//                     <p className="text-muted-foreground">{faq.answer}</p>
//                   </div>
//                 )}
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
//         <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
//           <AnimatedSection>
//             <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
//               Let&apos;s build a financial support plan for your <span className="text-emerald-500">business</span>.
//             </h2>
//             <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all mt-8">
//               Request a Consultation <ArrowRight className="w-4 h-4" />
//             </Link>
//           </AnimatedSection>
//         </div>
//       </section>
//     </>
//   )
// }



'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function PricingClient({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const factors = [
    'Transaction volume',
    'Payroll complexity',
    'Reporting requirements',
    'Number of accounts',
    'Operational support level',
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] w-full flex items-center bg-background pt-28 pb-16">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <AnimatedSection animation="fade-left">
              <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
                Pricing
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
                Pricing built around your
                <span className="text-emerald-500"> business</span>.
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Every business is different. Your monthly investment is determined
                by transaction volume, payroll requirements, reporting needs, and
                the level of financial support required.
              </p>

              <div className="mb-8">
                <p className="text-sm uppercase tracking-wider text-muted-foreground mono">
                  Monthly engagements start from
                </p>

                <p className="text-4xl font-bold text-emerald-500">
                  $330 USD/month
                </p>
              </div>

              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all"
              >
                Get a Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={0.2}>
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/pricing-hero.jpg"
                  alt="Pricing"
                  className="w-full h-80 lg:h-96 object-cover"
                  width={800}
                  height={600}
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              How we determine your
              <span className="text-emerald-500"> monthly investment</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Rather than forcing businesses into generic packages, we create
              engagements based on the operational support you actually need.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              'Monthly transaction volume',
              'Number of bank & credit card accounts',
              'Payroll requirements',
              'Accounts receivable support',
              'Accounts payable support',
              'Financial reporting requirements',
              'Historical bookkeeping cleanup',
              'Operational complexity',
            ].map((factor) => (
              <div
                key={factor}
                className="rounded-2xl bg-card border border-border p-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 block mb-4" />
                <p className="font-medium">{factor}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Example Engagements */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Example
              <span className="text-emerald-500"> engagements</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every quote is customized, but these examples show how support can
              vary based on business size and operational complexity.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-card border border-border p-8">
              <h3 className="text-xl font-bold mb-4">
                Consultant or Freelancer
              </h3>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Low transaction volume</li>
                <li>• Monthly bookkeeping</li>
                <li>• Bank reconciliations</li>
                <li>• Monthly financial reports</li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Starting from
                </p>

                <p className="text-2xl font-bold text-emerald-500">
                  $330 USD/month
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-card border border-border p-8">
              <h3 className="text-xl font-bold mb-4">
                Growing Business
              </h3>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Higher transaction volume</li>
                <li>• Payroll support</li>
                <li>• Accounts receivable management</li>
                <li>• Accounts payable management</li>
                <li>• Monthly reporting</li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold">
                  Custom quote based on complexity
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-card border border-border p-8">
              <h3 className="text-xl font-bold mb-4">
                Operational Finance Support
              </h3>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• High transaction volume</li>
                <li>• KPI reporting</li>
                <li>• Cash flow oversight</li>
                <li>• Management reporting</li>
                <li>• Strategic financial support</li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold">
                  Custom engagement
                </p>
              </div>
            </div>

          </div>

        </div>
        
        <div className="flex justify-center mt-12">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all"
          >
            Get a Custom Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      {/* FAQ */}
      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Questions founders
              <span className="text-emerald-500"> actually </span>
              ask.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.08}
                className="rounded-2xl bg-card border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/5 transition-colors"
                >
                  <span className="font-medium pr-4">
                    {faq.question}
                  </span>

                  <HelpCircle
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                )}
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
              Get a custom quote for your
              <span className="text-emerald-500"> business</span>.
            </h2>

            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Tell us a little about your operations and we&apos;ll recommend the right
              level of support. Most proposals are delivered within 24 hours.
            </p>

            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all"
            >
              Get My Custom Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

        </div>
      </section>

    </>
  )
}



