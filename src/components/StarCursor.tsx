import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const StarCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const x = useMotionValue(-40)
  const y = useMotionValue(-40)
  const springX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 })
  const scale = useTransform(springX, () => (enabled ? 1 : 0))

  useEffect(() => {
    const checkEligibility = () => {
      const isCoarse = window.matchMedia('(pointer: coarse)').matches
      const isNarrow = window.innerWidth < 768
      setEnabled(!prefersReducedMotion && !isCoarse && !isNarrow)
    }

    checkEligibility()
    window.addEventListener('resize', checkEligibility)
    return () => window.removeEventListener('resize', checkEligibility)
  }, [prefersReducedMotion])

  useEffect(() => {
    if (!enabled) return

    const move = (event: PointerEvent) => {
      x.set(event.clientX - 14)
      y.set(event.clientY - 14)
    }

    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: 'screen' }}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          scale,
          clipPath:
            'polygon(50% 0%, 61% 38%, 98% 38%, 68% 59%, 79% 98%, 50% 75%, 21% 98%, 32% 59%, 2% 38%, 39% 38%)',
        }}
        className="size-8 rounded-full bg-gradient-to-br from-accent to-lilac shadow-[0_0_40px_rgba(125,232,255,0.45)] opacity-80"
      />
      <motion.div
        style={{
          x: springX,
          y: springY,
          scale,
        }}
        className="absolute h-14 w-14 -translate-x-3 -translate-y-3 rounded-full bg-accent/10 blur-2xl"
      />
    </motion.div>
  )
}

export default StarCursor
