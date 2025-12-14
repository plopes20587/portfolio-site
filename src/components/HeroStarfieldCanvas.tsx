import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// Meteor type for the shower effect
// Based on https://dailyremix.framer.website/004-meteor-shower
type Meteor = {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  delay: number
  elapsed: number
  tailLength: number
}

// Static star for background ambiance
type Star = {
  x: number
  y: number
  size: number
  alpha: number
  twinkleSpeed: number
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
    let meteors: Meteor[] = []
    let stars: Star[] = []
    
    // Meteor angle calculation: ~22.6 degrees for natural diagonal movement
    // tg(α) = x / y -> α = arctg(x / y)
    // Using ratio of 2.4 (width = height * 2.4)
    const angle = Math.atan(1 / 2.4) // ~22.6 degrees in radians
    const cosAngle = Math.cos(angle)
    const sinAngle = Math.sin(angle)

    // Generate background stars - sparse and subtle
    const generateStars = (width: number, height: number) => {
      const count = Math.min(40, Math.floor((width * height) / 30000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1 + 0.3, // Smaller: 0.3-1.3px
        alpha: Math.random() * 0.3 + 0.1, // More subtle: 0.1-0.4 opacity
        twinkleSpeed: Math.random() * 0.015 + 0.003, // Slower twinkle
      }))
    }

    // Generate meteors with randomized properties - sparse and subtle
    const generateMeteors = (width: number, height: number) => {
      // Fewer meteors for a more subtle effect
      const count = Math.min(8, Math.floor((width * height) / 150000) + 3)
      
      meteors = Array.from({ length: count }, () => {
        // Random starting position - spawn from top-left area, outside visible area
        const startX = Math.random() * width * 0.8 - width * 0.3
        const startY = Math.random() * height * 0.5 - height * 0.3
        
        return {
          x: startX,
          y: startY,
          length: Math.random() * 50 + 30, // Shorter: 30-80px meteor length
          speed: Math.random() * 2 + 1.5, // Slightly slower
          opacity: Math.random() * 0.3 + 0.15, // More subtle: 0.15-0.45 opacity
          delay: Math.random() * 12000, // Longer delay up to 12 seconds
          elapsed: 0,
          tailLength: Math.random() * 40 + 20, // Shorter tail: 20-60px
        }
      })
    }

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const scale = window.devicePixelRatio || 1
      canvas.width = width * scale
      canvas.height = height * scale
      context.setTransform(scale, 0, 0, scale, 0, 0)
      generateStars(width, height)
      generateMeteors(width, height)
    }

    // Draw a single star with twinkle
    const drawStar = (star: Star) => {
      context.beginPath()
      context.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
      context.fill()
    }

    // Draw a meteor with glowing tail
    const drawMeteor = (meteor: Meteor) => {
      // Calculate meteor head position
      const headX = meteor.x
      const headY = meteor.y
      
      // Calculate tail end position (opposite direction of movement)
      const tailX = headX - cosAngle * meteor.tailLength
      const tailY = headY - sinAngle * meteor.tailLength
      
      // Create gradient for the meteor tail
      const gradient = context.createLinearGradient(tailX, tailY, headX, headY)
      gradient.addColorStop(0, `rgba(255, 255, 255, 0)`)
      gradient.addColorStop(0.3, `rgba(200, 180, 255, ${meteor.opacity * 0.3})`)
      gradient.addColorStop(0.7, `rgba(180, 160, 255, ${meteor.opacity * 0.6})`)
      gradient.addColorStop(1, `rgba(255, 255, 255, ${meteor.opacity})`)
      
      // Draw meteor tail
      context.beginPath()
      context.moveTo(tailX, tailY)
      context.lineTo(headX, headY)
      context.strokeStyle = gradient
      context.lineWidth = 1.5
      context.lineCap = 'round'
      context.stroke()
      
      // Draw glowing head
      context.beginPath()
      context.arc(headX, headY, 1.5, 0, Math.PI * 2)
      context.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`
      context.shadowBlur = 8
      context.shadowColor = 'rgba(180, 160, 255, 0.8)'
      context.fill()
      context.shadowBlur = 0
    }

    let lastTime = 0
    
    const tick = (currentTime: number) => {
      const deltaTime = lastTime ? currentTime - lastTime : 16
      lastTime = currentTime
      
      const { width, height } = canvas.getBoundingClientRect()
      context.clearRect(0, 0, width, height)

      // Draw background stars with subtle twinkle
      for (const star of stars) {
        if (!prefersReducedMotion) {
          // Twinkle effect
          star.alpha += Math.sin(currentTime * star.twinkleSpeed) * 0.01
          star.alpha = Math.max(0.1, Math.min(0.7, star.alpha))
        }
        drawStar(star)
      }

      // Animate and draw meteors
      for (const meteor of meteors) {
        if (prefersReducedMotion) continue
        
        meteor.elapsed += deltaTime
        
        // Wait for delay before animating
        if (meteor.elapsed < meteor.delay) continue
        
        // Move meteor diagonally (down-right direction)
        meteor.x += cosAngle * meteor.speed
        meteor.y += sinAngle * meteor.speed
        
        // Fade out as meteor travels
        const travelDistance = Math.sqrt(
          Math.pow(meteor.x, 2) + Math.pow(meteor.y, 2)
        )
        const maxDistance = Math.sqrt(width * width + height * height)
        const progress = travelDistance / maxDistance
        const currentOpacity = meteor.opacity * (1 - progress * 0.5)
        
        // Draw meteor if visible
        if (meteor.x < width + 100 && meteor.y < height + 100 && currentOpacity > 0.05) {
          drawMeteor({ ...meteor, opacity: currentOpacity })
        }
        
        // Reset meteor when it goes off screen
        if (meteor.x > width + 150 || meteor.y > height + 150) {
          meteor.x = Math.random() * width * 0.6 - width * 0.4
          meteor.y = Math.random() * height * 0.4 - height * 0.4
          meteor.delay = Math.random() * 5000 + 1000
          meteor.elapsed = 0
          meteor.speed = Math.random() * 3 + 2
          meteor.opacity = Math.random() * 0.5 + 0.3
          meteor.tailLength = Math.random() * 60 + 30
        }
      }

      if (!prefersReducedMotion) {
        animationFrame = window.requestAnimationFrame(tick)
      }
    }

    resize()
    animationFrame = window.requestAnimationFrame(tick)
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  )
}

export default HeroStarfieldCanvas
