import AnimatedSection from "@/components/AnimatedSection";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] w-full flex items-center bg-background pt-28 pb-12">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <AnimatedSection className="max-w-3xl">
            <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 block">
              Legal
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[0.95]">
              Privacy <span className="text-emerald-500">Policy</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Effective Date: June 12, 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 lg:py-24 bg-background">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">

          <AnimatedSection className="space-y-12">

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Information We Collect
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Perugi Partners may collect information you voluntarily
                provide through contact forms, consultation requests,
                email communications, and other interactions with our
                website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                How We Use Information
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We use collected information to respond to inquiries,
                provide bookkeeping and consulting services, improve
                our website, communicate with clients, and comply with
                legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Information Sharing
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We do not sell or rent personal information. Information
                may be shared with trusted service providers necessary
                to operate our business or when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Data Security
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable safeguards to protect personal
                information from unauthorized access, disclosure,
                alteration, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Cookies & Analytics
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies and analytics tools to
                understand visitor behavior and improve performance.
                These tools may collect anonymized usage information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Third-Party Services
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We may use third-party providers for website hosting,
                analytics, scheduling, CRM, email communication, and
                related business operations. These providers maintain
                their own privacy practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Your Rights
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                You may request access to, correction of, or deletion
                of your personal information by contacting us directly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Changes to This Policy
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Changes
                become effective upon posting to this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Contact
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Questions regarding this Privacy Policy may be directed
                to Perugi Partners using the contact information
                available on this website.
              </p>
            </div>

          </AnimatedSection>

        </div>
      </section>
    </>
  )
}