import type { Metadata } from 'next'
import { ThemeProvider } from '@/providers/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perugi Partners | Financial Clarity for Modern Businesses',
  description: 'Bookkeeping, financial reporting, and operational financial support for entrepreneurs and modern businesses.',
}

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
      </body>
    </html>
  )
}
