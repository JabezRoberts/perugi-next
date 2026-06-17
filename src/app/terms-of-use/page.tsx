import AnimatedSection from "@/components/AnimatedSection";

export default function TermsOfUsePage() {
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
              Terms of <span className="text-emerald-500">Use</span>
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
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using this website, you agree to be bound
                by these Terms of Use and all applicable laws and regulations.
                If you do not agree with these terms, you should discontinue
                use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Website Use
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is provided for informational purposes regarding
                Perugi Partners and its services. You agree not to misuse,
                interfere with, or attempt unauthorized access to any part
                of the website or its systems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Professional Information Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Content provided on this website is for general informational
                purposes only and does not constitute accounting, bookkeeping,
                tax, legal, or financial advice. Reliance on website content
                is at your own risk. Professional advice should be obtained
                for your specific circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics,
                branding, logos, layouts, and other materials, is owned
                by or licensed to Perugi Partners and is protected by
                applicable intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Third-Party Services & Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website may contain links to third-party websites,
                platforms, or service providers. Perugi Partners is not
                responsible for the content, security, privacy practices,
                or availability of any third-party services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Perugi Partners
                shall not be liable for any direct, indirect, incidental,
                consequential, or special damages arising from your use
                of or inability to use this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                No Warranties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
                basis. Perugi Partners makes no warranties regarding the
                accuracy, completeness, reliability, or availability of
                the website or its content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Changes to These Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms of Use from time to time.
                Changes become effective immediately upon posting to
                this page. Continued use of the website constitutes
                acceptance of any revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Use shall be governed by and construed
                in accordance with the laws applicable to the jurisdiction
                in which Perugi Partners operates.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions regarding these Terms of Use may be directed
                to Perugi Partners using the contact information provided
                on this website.
              </p>
            </div>

          </AnimatedSection>
        </div>
      </section>
    </>
  );
}