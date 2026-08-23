import { useMemo, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useTheme } from '../context/ThemeContext'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  xRange: number
  yRange: number
  opacity: number
  color: string
}

function generateParticles(isDark: boolean): Particle[] {
  const colors = isDark
    ? ['#8B5CF6', '#A78BFA', '#818CF8', '#6366F1', '#7C5CFF', '#C4B5FD']
    : ['#6D3DF5', '#7C5CFF', '#818CF8', '#6366F1', '#8B5CF6', '#A78BFA']

  return Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 9 + 5,
    delay: Math.random() * 5,
    xRange: (Math.random() - 0.5) * 80,
    yRange: (Math.random() - 0.5) * 80,
    opacity: Math.random() * 0.5 + 0.15,
    color: colors[Math.floor(Math.random() * colors.length)],
  }))
}

export function FloatingParticles() {
  const { theme } = useTheme()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const particles = useMemo(() => generateParticles(theme === 'dark'), [theme])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: `blur(${particle.size > 6 ? 2 : particle.size > 4 ? 1.5 : 0}px)`,
          }}
          animate={
            prefersReducedMotion
              ? { opacity: particle.opacity }
              : {
                  opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
                  x: [0, particle.xRange, -particle.xRange * 0.5, particle.xRange * 0.3, 0],
                  y: [0, -particle.yRange, particle.yRange * 0.5, -particle.yRange * 0.3, 0],
                  scale: [1, 1.2, 0.9, 1.1, 1],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
