import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, FileText } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Free Business & Financial Resources | Perugi Partners",
  description:
    "Explore free financial guides, tools, and resources from Perugi Partners to help you understand your numbers and make better business decisions.",
};

const resources = [
  {
    title: "The 17 Most Important Numbers Every Entrepreneur Should Track",
    description:
      "Learn the key financial numbers to monitor daily, weekly, monthly, and quarterly so you can improve profitability, cash flow, and decision-making.",
    category: "Financial Guide",
    href: "/resources/financial-guide",
    icon: FileText,
    available: true,
  },
  {
    title: "Business Cash Flow Checklist",
    description:
      "A practical checklist to help you identify cash flow problems before they become serious business problems.",
    category: "Checklist",
    href: "#",
    icon: Calculator,
    available: false,
  },
  {
    title: "Understanding Your Financial Statements",
    description:
      "A simple guide to understanding your profit and loss statement, balance sheet, and cash flow statement.",
    category: "Financial Guide",
    href: "#",
    icon: BookOpen,
    available: false,
  },
];

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero */}

      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="mono uppercase tracking-[0.15em] text-xs text-muted-foreground block mb-4">
                FREE RESOURCES
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Better Financial Decisions Start With
                <span className="text-emerald-500"> Better Information.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore practical guides, checklists, and tools designed to help
                entrepreneurs understand their numbers, strengthen their
                financial systems, and make better business decisions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources */}

      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <AnimatedSection key={resource.title}>
                  <div className="h-full rounded-3xl border border-border bg-card p-7 flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-emerald-500" />
                    </div>

                    <span className="mono uppercase tracking-[0.12em] text-xs text-muted-foreground mb-3">
                      {resource.category}
                    </span>

                    <h2 className="text-2xl font-bold mb-4">
                      {resource.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {resource.description}
                    </p>

                    {resource.available ? (
                      <Link
                        href={resource.href}
                        className="inline-flex items-center gap-2 font-semibold text-emerald-500 hover:gap-3 transition-all"
                      >
                        Get the Free Resource
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="rounded-3xl bg-emerald-800 text-white p-10 lg:p-14 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Need More Than a Guide?
              </h2>

              <p className="max-w-2xl mx-auto opacity-90 mb-8">
                Perugi Partners helps business owners improve their financial
                clarity through bookkeeping, reporting, and modern financial
                systems.
              </p>

              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-emerald-600 font-semibold hover:scale-105 transition"
              >
                Work With Perugi Partners
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}