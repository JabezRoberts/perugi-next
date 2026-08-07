// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight, CheckCircle } from "lucide-react";
// import AnimatedSection from "@/components/AnimatedSection";

// export const metadata = {
//   title:
//     "Free Financial Guide | The 10 Most Important Numbers Every Entrepreneur Should Track",
//   description:
//     "Download our free guide covering the financial numbers every business owner should monitor to improve profitability, cash flow, and decision-making.",
// };

// export default function FinancialGuidePage() {
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-background pt-28 pb-20">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">

//           <div className="grid lg:grid-cols-2 gap-14 items-center">

//             {/* Left */}

//             <AnimatedSection animation="fade-right">

//               <span className="mono uppercase tracking-[0.15em] text-xs text-muted-foreground block mb-4">
//                 FREE DOWNLOAD
//               </span>

//               <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
//                 Know Your Numbers
//                 <span className="text-emerald-500">
//                   {" "}Before They Become Problems.
//                 </span>
//               </h1>

//               <p className="text-lg text-muted-foreground mb-8">
//                 Learn the 10 most important financial numbers every entrepreneur
//                 should track every day, week, month, and quarter—and understand
//                 exactly why they matter.
//               </p>

//               <div className="space-y-4 mb-10">

//                 {[
//                   "Daily, weekly, monthly & quarterly KPIs",
//                   "Simple explanations for every metric",
//                   "How to calculate each number",
//                   "Why every number matters",
//                   "Designed for busy entrepreneurs"
//                 ].map(item => (

//                   <div
//                     key={item}
//                     className="flex items-center gap-3"
//                   >
//                     <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />

//                     <span>{item}</span>

//                   </div>

//                 ))}

//               </div>

//             </AnimatedSection>

//             {/* Right */}

//             <AnimatedSection animation="scale">

//               <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">

//                 <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-8 bg-muted">

//                   {/* Replace with your PDF cover */}

//                   <Image
//                     src="/images/financial-guide-cover.png"
//                     alt="Financial Guide"
//                     fill
//                     className="object-cover"
//                   />

//                 </div>

//                 <h2 className="text-2xl font-bold mb-3">
//                   Download the Guide
//                 </h2>

//                 <p className="text-muted-foreground mb-6">
//                   Enter your email below and we&apos;ll send the PDF straight to your inbox.
//                 </p>

//                 {/* MAILERLITE FORM */}

//                 <div
//                   id="mlb2-embed"
//                   className="mb-6"
//                 >
//                   {/* Paste MailerLite embed code here */}
//                 </div>

//                 <p className="text-xs text-muted-foreground">
//                   No spam. Unsubscribe anytime.
//                 </p>

//               </div>

//             </AnimatedSection>

//           </div>

//         </div>
//       </section>

//       {/* About */}

//       <section className="py-20 bg-card/30">

//         <div className="max-w-5xl mx-auto px-6 lg:px-12">

//           <AnimatedSection>

//             <div className="text-center mb-12">

//               <h2 className="text-4xl font-bold mb-6">

//                 Why I Created This Guide

//               </h2>

//               <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">

//                 I built this guide because I used to run a business where I only
//                 understood my financial position when tax season arrived.

//                 That experience taught me that successful businesses don&apos;t wait
//                 months to understand their numbers—they track the right metrics
//                 consistently.

//               </p>

//             </div>

//           </AnimatedSection>

//         </div>

//       </section>

//       {/* CTA */}

//       <section className="py-20">

//         <div className="max-w-4xl mx-auto px-6 lg:px-12">

//           <AnimatedSection>

//             <div className="rounded-3xl bg-emerald-500 text-white p-10 text-center">

//               <h2 className="text-4xl font-bold mb-4">

//                 Want Help Implementing Better Financial Systems?

//               </h2>

//               <p className="opacity-90 mb-8">

//                 Perugi Partners helps entrepreneurs gain financial clarity through
//                 bookkeeping, reporting, and modern financial systems.

//               </p>

//               <Link
//                 href="/get-started"
//                 className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-emerald-600 font-semibold hover:scale-105 transition"
//               >
//                 Book a Consultation

//                 <ArrowRight className="w-4 h-4" />

//               </Link>

//             </div>

//           </AnimatedSection>

//         </div>

//       </section>

//     </>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import KitForm from "@/components/KitForm";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title:
    "Free Financial Guide | The 10 Most Important Numbers Every Entrepreneur Should Track",
  description:
    "Download our free guide covering the financial numbers every business owner should monitor to improve profitability, cash flow, and decision-making.",
};

export default function FinancialGuidePage() {
  return (
    <>
      {/* Hero */}

      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}

            <AnimatedSection animation="fade-right">
              <span className="mono uppercase tracking-[0.15em] text-xs text-muted-foreground block mb-4">
                FREE DOWNLOAD
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Know Your Numbers
                <span className="text-emerald-500">
                  {" "}Before They Become Problems.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Learn the 10 most important financial numbers every entrepreneur
                should track every day, week, month, and quarter—and understand
                exactly why they matter.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Daily, weekly, monthly & quarterly KPIs",
                  "Simple explanations for every metric",
                  "How to calculate each number",
                  "Why every number matters",
                  "Designed for busy entrepreneurs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right */}

            <AnimatedSection animation="scale">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">

                {/* <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-8 bg-muted">
                  <Image
                    src="/images/financial-guide-cover.png"
                    alt="The 10 Most Important Numbers Every Entrepreneur Should Track"
                    fill
                    className="object-cover"
                    priority
                  />
                </div> */}

                <h2 className="text-2xl font-bold mb-3">
                  Download the Guide
                </h2>

                <p className="text-muted-foreground mb-6">
                  Enter your email below and we&apos;ll send the PDF straight
                  to your inbox.
                </p>

                {/* KIT FORM */}

                <div className="mb-6">
                  <KitForm
                    uid="c9456ebe1e"
                    src="https://perugipartners.kit.com/c9456ebe1e/index.js"
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* About */}

      <section className="py-20 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Why I Created This Guide
              </h2>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I built this guide because I used to run a business where I only
                understood my financial position when tax season arrived.

                That experience taught me that successful businesses don&apos;t wait
                months to understand their numbers—they track the right metrics
                consistently.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="rounded-3xl bg-emerald-500 text-white p-10 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Want Help Implementing Better Financial Systems?
              </h2>

              <p className="opacity-90 mb-8">
                Perugi Partners helps entrepreneurs gain financial clarity through
                bookkeeping, reporting, and modern financial systems.
              </p>

              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-emerald-600 font-semibold hover:scale-105 transition"
              >
                Book a Consultation

                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}