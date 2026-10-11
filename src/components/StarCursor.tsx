import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

// Each layer follows the pointer with its own spring, so the trail lags behind the star
const STAR_SPRING = { damping: 30, stiffness: 200, mass: 0.5 }
const NEAR_TRAIL_SPRING = { damping: 20, stiffness: 150, mass: 0.8 }
const FAR_TRAIL_SPRING = { damping: 15, stiffness: 100, mass: 1 }

const StarCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Pointer position as motion values: updating them moves the elements
  // without re-rendering this component on every mouse move
  const pointerX = useMotionValue(-40)
  const pointerY = useMotionValue(-40)
  const starX = useSpring(pointerX, STAR_SPRING)
  const starY = useSpring(pointerY, STAR_SPRING)
  const nearTrailX = useSpring(pointerX, NEAR_TRAIL_SPRING)
  const nearTrailY = useSpring(pointerY, NEAR_TRAIL_SPRING)
  const farTrailX = useSpring(pointerX, FAR_TRAIL_SPRING)
  const farTrailY = useSpring(pointerY, FAR_TRAIL_SPRING)

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
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
    }

    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [enabled, pointerX, pointerY])

  if (!enabled) return null

  // Negative margins center each element on the pointer (half its size)
  const layerClass = 'pointer-events-none fixed left-0 top-0 z-50 mix-blend-screen'

  return (
    <>
      {/* Main glowing star (20px) */}
      <motion.div
        aria-hidden
        className={`${layerClass} -ml-[10px] -mt-[10px]`}
        style={{ x: starX, y: starY }}
      >
        <div className="relative h-5 w-5">
          {/* Outer glow */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-primary opacity-60 blur-md" />

          {/* Star shape */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 20 20" fill="none">
            {/* Vertical line */}
            <line
              x1="10"
              y1="4"
              x2="10"
              y2="16"
              stroke="var(--color-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Horizontal line */}
            <line
              x1="4"
              y1="10"
              x2="16"
              y2="10"
              stroke="var(--color-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Center glow */}
            <circle cx="10" cy="10" r="2" fill="var(--color-primary)" opacity="0.8" />
          </svg>
        </div>
      </motion.div>

      {/* Trailing particles (6px, then 4px) */}
      <motion.div
        aria-hidden
        className={`${layerClass} -ml-[3px] -mt-[3px]`}
        style={{ x: nearTrailX, y: nearTrailY }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-primary opacity-40 blur-sm" />
      </motion.div>

      <motion.div
        aria-hidden
        className={`${layerClass} -ml-[2px] -mt-[2px]`}
        style={{ x: farTrailX, y: farTrailY }}
      >
        <div className="h-1 w-1 rounded-full bg-purple-light opacity-30 blur-sm" />
      </motion.div>
    </>
  )
}

export default StarCursor
