// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Sun, Moon, Menu, X } from 'lucide-react'
// import { useTheme } from 'next-themes'
// import { navLinks, siteConfig } from '@/lib/data'

// export default function Navbar() {
//   const { theme, setTheme } = useTheme()
//   const pathname = usePathname()
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => { setMobileOpen(false) }, [pathname])

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50' : 'bg-transparent'
//         }`}
//       >
//         <div className="w-full px-6 lg:px-12">
//           <div className="flex items-center justify-between h-18 lg:h-20">
//             <Link href="/" className="flex items-center gap-2 group">
//               <span className="text-xl lg:text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
//                 {siteConfig.name}
//               </span>
//               <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
//             </Link>

//             <div className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <Link key={link.href} href={link.href}
//                   className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
//                     pathname === link.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
//                   }`}>
//                   {pathname === link.href && (
//                     <motion.span layoutId="activeNav" className="absolute inset-0 bg-emerald-500/20 rounded-full" transition={{ type: 'spring', duration: 0.4 }} />
//                   )}
//                   <span className="relative z-10">{link.label}</span>
//                 </Link>
//               ))}
//             </div>

//             <div className="flex items-center gap-2">
//               <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                 className="p-2.5 rounded-full hover:bg-accent/20 transition-colors text-foreground" aria-label="Toggle theme">
//                 <AnimatePresence mode="wait">
//                   {theme === 'dark' ? (
//                     <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
//                       <Sun className="w-5 h-5" />
//                     </motion.div>
//                   ) : (
//                     <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
//                       <Moon className="w-5 h-5" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </button>

//               <Link href="/get-started"
//                 className="hidden lg:inline-flex items-center px-5 py-2.5 bg-emerald-500 text-white font-semibold text-sm rounded-full hover:scale-105 active:scale-95 transition-all duration-200">
//                 Get Started
//               </Link>

//               <button onClick={() => setMobileOpen(!mobileOpen)}
//                 className="lg:hidden p-2.5 rounded-full hover:bg-accent/20 transition-colors text-foreground" aria-label="Toggle menu">
//                 {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 lg:hidden">
//             <div className="flex flex-col gap-2">
//               {navLinks.map((link, i) => (
//                 <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
//                   <Link href={link.href} className={`block py-4 text-2xl font-semibold ${pathname === link.href ? 'text-emerald-500' : 'text-foreground'}`}>
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6">
//                 <Link href="/get-started" className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full">
//                   Get Started
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }






// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Sun, Moon, Menu, X } from 'lucide-react'
// import { useTheme } from 'next-themes'
// import { navLinks, siteConfig } from '@/lib/data'

// export default function Navbar() {
//   const pathname = usePathname()

//   const { setTheme, resolvedTheme } = useTheme()

//   // const [mounted, setMounted] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   // FIX 1: mount flag ONLY (no hydration mismatch)
//   // useLayoutEffect(() => {
//   //   setMounted(true)
//   // }, [])

//   // FIX 2: scroll listener (safe)
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // FIX 3: NO setState in effect (eslint fix)
//   const closeMobileMenu = () => {
//     setMobileOpen(false)
//   }

//   // const toggleTheme = () => {
//   //   setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
//   // }

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? 'bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50'
//             : 'bg-transparent'
//         }`}
//       >
//         <div className="w-full px-6 lg:px-12">
//           <div className="flex items-center justify-between h-18 lg:h-20">
            
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2">
//               <span className="text-xl font-bold">
//                 {siteConfig.name}
//               </span>
//             </Link>

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex items-center gap-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`px-4 py-2 text-sm rounded-full ${
//                     pathname === link.href
//                       ? 'text-foreground'
//                       : 'text-muted-foreground hover:text-foreground'
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Actions */}
//             <div className="flex items-center gap-2">

//               {/* THEME BUTTON (hydration-safe) */}
//               <button
//   onClick={() =>
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
//   }
//   className="p-2.5 rounded-full"
//   aria-label="Toggle theme"
// >
//   <AnimatePresence mode="wait">
//     {resolvedTheme === 'dark' ? (
//       <motion.div
//         key="sun"
//         initial={{ rotate: -90, opacity: 0 }}
//         animate={{ rotate: 0, opacity: 1 }}
//         exit={{ rotate: 90, opacity: 0 }}
//       >
//         <Sun className="w-5 h-5" />
//       </motion.div>
//     ) : (
//       <motion.div
//         key="moon"
//         initial={{ rotate: 90, opacity: 0 }}
//         animate={{ rotate: 0, opacity: 1 }}
//         exit={{ rotate: -90, opacity: 0 }}
//       >
//         <Moon className="w-5 h-5" />
//       </motion.div>
//     )}
//   </AnimatePresence>
// </button>

//               {/* CTA */}
//               <Link
//                 href="/get-started"
//                 className="hidden lg:inline-flex px-5 py-2.5 bg-emerald-500 text-white rounded-full"
//               >
//                 Get Started
//               </Link>

//               {/* Mobile button (NO useEffect needed anymore) */}
//               <button
//                 onClick={() => setMobileOpen((v) => !v)}
//                 className="lg:hidden p-2.5"
//                 aria-label="Toggle menu"
//               >
//                 {mobileOpen ? <X /> : <Menu />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed inset-0 z-40 bg-background/95 pt-24 px-6 lg:hidden"
//           >
//             <div className="flex flex-col gap-4">
//               {navLinks.map((link, i) => (
//                 <motion.div
//                   key={link.href}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.05 }}
//                 >
//                   <Link
//                     href={link.href}
//                     onClick={closeMobileMenu}
//                     className="text-2xl font-semibold"
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { navLinks, siteConfig } from '@/lib/data'

export default function Navbar() {
  const pathname = usePathname()
  const { setTheme, resolvedTheme } = useTheme()

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)   // ← Critical for theme

  // Mount flag
  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl lg:text-2xl font-bold tracking-tight">
                {siteConfig.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    pathname === link.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-emerald-500/20 rounded-full"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-full hover:bg-accent/20 transition-colors"
                aria-label="Toggle theme"
                disabled={!mounted}
              >
                <AnimatePresence mode="wait">
                  {mounted && (
                    resolvedTheme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="w-5 h-5" />
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </button>

              {/* CTA */}
              <Link
                href="/get-started"
                className="hidden lg:inline-flex items-center px-5 py-2.5 bg-emerald-500 text-white font-semibold text-sm rounded-full hover:scale-105 active:scale-95 transition-all"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden p-2.5 rounded-full hover:bg-accent/20 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`block py-4 text-2xl font-semibold ${pathname === link.href ? 'text-emerald-500' : ''}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/get-started"
                onClick={closeMobileMenu}
                className="mt-6 inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full w-fit"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}