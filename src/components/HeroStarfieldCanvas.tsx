import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

type Star = {
  x: number
  y: number
  size: number
  speed: number
  alpha: number
  driftX: number
  driftY: number
}

type ShootingStar = {
  x: number
  y: number
  length: number
  speed: number
  life: number
}

const HeroStarfieldCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    let animationFrame: number
    let stars: Star[] = []
    let shootingStar: ShootingStar | null = null

    const generateStars = (width: number, height: number) => {
      const count = Math.min(220, Math.floor((width * height) / 5000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.4,
        speed: Math.random() * 0.15 + 0.05,
        alpha: Math.random() * 0.6 + 0.2,
        driftX: Math.random() * 0.3 - 0.15,
        driftY: Math.random() * 0.2 - 0.1,
      }))
    }

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const scale = window.devicePixelRatio || 1
      canvas.width = width * scale
      canvas.height = height * scale
      context.setTransform(scale, 0, 0, scale, 0, 0)
      generateStars(width, height)
    }

    const drawStar = (star: Star) => {
      context.beginPath()
      context.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      context.fillStyle = `rgba(255,255,255,${star.alpha})`
      context.shadowBlur = 8
      context.shadowColor = 'rgba(125, 232, 255, 0.6)'
      context.fill()
    }

    const tick = () => {
      const { width, height } = canvas.getBoundingClientRect()
      context.clearRect(0, 0, width, height)
      context.globalCompositeOperation = 'lighter'

      for (const star of stars) {
        if (!prefersReducedMotion) {
          star.x += star.driftX
          star.y += star.driftY
          if (star.x < 0) star.x = width
          if (star.x > width) star.x = 0
          if (star.y < 0) star.y = height
          if (star.y > height) star.y = 0
        }
        drawStar(star)
      }

      if (!prefersReducedMotion && Math.random() > 0.992 && !shootingStar) {
        shootingStar = {
          x: Math.random() * width,
          y: Math.random() * height * 0.4 + height * 0.2,
          length: Math.random() * 60 + 40,
          speed: Math.random() * 6 + 3,
          life: 1,
        }
      }

      if (shootingStar) {
        context.strokeStyle = 'rgba(125,232,255,0.9)'
        context.lineWidth = 1.2
        context.shadowBlur = 12
        context.shadowColor = 'rgba(125,232,255,0.6)'
        context.beginPath()
        context.moveTo(shootingStar.x, shootingStar.y)
        context.lineTo(shootingStar.x - shootingStar.length, shootingStar.y + shootingStar.length * 0.2)
        context.stroke()

        shootingStar.x += shootingStar.speed
        shootingStar.y -= shootingStar.speed * 0.12
        shootingStar.life -= 0.02
        if (shootingStar.life <= 0) shootingStar = null
      }

      if (!prefersReducedMotion) {
        animationFrame = window.requestAnimationFrame(tick)
      }
    }

    resize()
    tick()
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full rounded-[32px] bg-[radial-gradient(circle_at_top,#162136,transparent_45%)]"
      aria-hidden
    />
  )
}

export default HeroStarfieldCanvas
