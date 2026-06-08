import { ServicesList } from "@/app/constants/services";

// import { notFound } from 'next/navigation'
// import Link from 'next/link'
// import { ArrowRight, Check } from 'lucide-react'
// // import { services } from '@/data/services'

// export default function ServicePage({ params }: { params: { slug: string } }) {
//   const service = ServicesList.find((s) => s.slug === params.slug)

//   if (!service) return notFound()

//   return (
//     <>
//       {/* HERO */}
//       <section className="w-full pt-32 pb-16 bg-background">
//         <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">

//           <span className="text-xs uppercase tracking-wider text-muted-foreground">
//             Service
//           </span>

//           <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-5 leading-[0.95]">
//             {service.title}
//           </h1>

//           <p className="text-muted-foreground text-lg max-w-2xl">
//             {service.description}
//           </p>

//           <Link
//             href="/get-started"
//             className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:scale-105 transition-all"
//           >
//             Get Started <ArrowRight className="w-4 h-4" />
//           </Link>
//         </div>
//       </section>

//       {/* BENEFITS */}
//       <section className="w-full py-16 bg-card/30">
//         <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">

//           <h2 className="text-2xl lg:text-3xl font-bold mb-8">
//             What you get
//           </h2>

//           <div className="space-y-4">
//             {service.benefits.map((item) => (
//               <div
//                 key={item}
//                 className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border"
//               >
//                 <Check className="w-5 h-5 text-emerald-500 mt-0.5" />
//                 <span className="text-foreground">{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="w-full py-20 bg-[#0B0F17] text-white text-center">
//         <div className="max-w-3xl mx-auto px-6">

//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//             Get clarity on your {service.title.toLowerCase()}
//           </h2>

//           <p className="text-white/70 mb-8">
//             Stop guessing your numbers. Start making decisions with confidence.
//           </p>

//           <Link
//             href="/get-started"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:scale-105 transition-all"
//           >
//             Book a Consultation <ArrowRight className="w-4 h-4" />
//           </Link>

//         </div>
//       </section>
//     </>
//   )
// }


import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

import { AllServices } from '@/app/constants/services'

export function generateStaticParams() {
  return AllServices.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = AllServices.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="w-full bg-background">

      {/* Hero */}
      <section className="w-full py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {service.title}
            </h1>

            <p className="text-muted-foreground text-lg mb-6">
              {service.description}
            </p>

            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {service.image && (
            <div className="rounded-3xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          )}

        </div>
      </section>

      {/* Features */}
      {Array.isArray(service.features) && service.features.length > 0 && (
        <section className="w-full py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">

            <h2 className="text-2xl font-bold mb-6">
              What&apos;s Included
            </h2>

            <ul className="space-y-3">
              {service.features.map((feature: string) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

          </div>
        </section>
      )}

    </main>
  )
}