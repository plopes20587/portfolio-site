import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { rotatingKeywords } from '../siteData'

const ROTATE_INTERVAL = 2400

const RotatingKeywords = () => {
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingKeywords.length)
    }, ROTATE_INTERVAL)
    return () => window.clearInterval(id)
  }, [prefersReducedMotion])

  const keyword = rotatingKeywords[index]

  return (
    <div className="relative h-8 overflow-hidden text-sm text-slate-300 sm:text-base">
      <AnimatePresence mode="wait">
        <motion.span
          key={keyword}
          initial={{ y: prefersReducedMotion ? 0 : 16, opacity: prefersReducedMotion ? 1 : 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: prefersReducedMotion ? 0 : -16, opacity: prefersReducedMotion ? 1 : 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1"
        >
          <span className="size-1.5 rounded-full bg-accent shadow-glow" />
          {keyword}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default RotatingKeywords
