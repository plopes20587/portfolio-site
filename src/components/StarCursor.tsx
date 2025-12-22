import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const StarCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: -40, y: -40 })
  const prefersReducedMotion = useReducedMotion()

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
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      {/* Main glowing star */}
    <motion.div
      aria-hidden
        className="pointer-events-none fixed z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      >
        {/* Outer glow */}
        <div className="relative h-5 w-5">
          <div className="absolute inset-0 animate-pulse rounded-full bg-[#7F5AF0] opacity-60 blur-md" />
          
          {/* Star shape */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 20 20"
            fill="none"
          >
            {/* Horizontal line */}
            <line
              x1="10"
              y1="4"
              x2="10"
              y2="16"
              stroke="#7F5AF0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Vertical line */}
            <line
              x1="4"
              y1="10"
              x2="16"
              y2="10"
              stroke="#7F5AF0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Center glow */}
            <circle
              cx="10"
              cy="10"
              r="2"
              fill="#7F5AF0"
              opacity="0.8"
            />
          </svg>
        </div>
      </motion.div>

      {/* Trailing particles */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
          mass: 0.8,
        }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-[#7F5AF0] opacity-40 blur-sm" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 100,
          mass: 1,
        }}
      >
        <div className="h-1 w-1 rounded-full bg-[#9D7FF5] opacity-30 blur-sm" />
    </motion.div>
    </>
  )
}

export default StarCursor
