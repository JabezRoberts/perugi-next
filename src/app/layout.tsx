import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '@/providers/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title:
    "Perugi Partners | Bookkeeping, Financial Reporting & Business Finance",

  description:
    "Helping entrepreneurs gain financial clarity through bookkeeping, reporting, cash flow insights, and practical business finance. Helping entrepreneurs understand their numbers and make financially-sound business decisions.",

  keywords: [
    "bookkeeping",
    "small business bookkeeping",
    "financial reporting",
    "cash flow",
    "business finance",
    "bookkeeping services",
    "financial statements",
    "entrepreneur finance",
    "startup bookkeeping",
    "business budgeting",
    "accounting",
    "financial management",
    "small business accounting",
    "profit and loss",
    "balance sheet"
  ],

  openGraph: {
    title:
      "Perugi Partners | Bookkeeping, Financial Reporting & Business Finance",

    description:
      "Financial clarity for entrepreneurs through bookkeeping, reporting, cash flow insights, and practical business finance.",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Perugi Partners | Financial Clarity for Modern Businesses",

    description:
      "Helping entrepreneurs understand their numbers and make financially-sound business decisions.",
  },

  icons: {
    icon: "./icon.png",
    apple: "./icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="grain-overlay min-h-screen bg-background text-foreground">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EYLBP6TF8Y"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-EYLBP6TF8Y');
          `}
        </Script>
      </body>
    </html>
  )
}
