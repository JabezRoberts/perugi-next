import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { ServicesPageContent } from '@/lib/services'


type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.values(ServicesPageContent).map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const service = Object.values(ServicesPageContent).find(
    (s) => s.slug === slug
  )

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} | Perugi Partners`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  // const service = Object.values(ServicesPageContent).find(
  //   (s) => s.slug === params.slug
  // )
  const service = Object.values(ServicesPageContent).find(
    (s) => s.slug === slug
  )

  if (!service) return notFound()

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-background pt-28 pb-16">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <AnimatedSection animation="fade-left">
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
                Service Overview
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
                {service.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                {service.description}
              </p>

              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 transition"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={0.2}>
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1200}
                  height={900}
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="w-full py-12 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            {service.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-emerald-500">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="w-full py-20 lg:py-28">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Problems we <span className="text-emerald-500">solve</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {service.painPoints.map((item) => (
              <AnimatedSection
                key={item.problem}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <p className="font-semibold mb-2">{item.problem}</p>
                <p className="text-muted-foreground">{item.solution}</p>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="w-full py-20 lg:py-28 bg-card/30">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why it <span className="text-emerald-500">matters</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {service.benefits.map((b) => (
              <AnimatedSection
                key={b.title}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-emerald-500/20">
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {b.description}
                </p>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full py-20 lg:py-28 bg-[#0B0F17]">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              How it <span className="text-emerald-500">works</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {service.process.map((step) => (
              <AnimatedSection
                key={step.number}
                className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl font-bold text-emerald-500/40">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full py-20 lg:py-28">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">

          <AnimatedSection className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold">
              What clients <span className="text-emerald-500">say</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {service.testimonials.map((t) => (
              <AnimatedSection
                key={t.name}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <p className="text-lg mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="text-sm text-muted-foreground">
                  {t.name} — {t.company}
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-20 lg:py-28 text-center">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">

          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>

            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:scale-105 transition"
            >
              Start Now <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

        </div>
      </section>
    </>
  )
}