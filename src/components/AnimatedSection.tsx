'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade'

const variants = {
  'fade-up': { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  'fade-left': { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  'fade-right': { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  'scale': { hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } },
  'fade': { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[animation]}
      className={className}
    >
      {children}
    </motion.div>
  )
}
