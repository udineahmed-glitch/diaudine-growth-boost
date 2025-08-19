'use client'

import { useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = ''
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * value))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isInView, value, duration])

  return (
    <span 
      ref={ref} 
      className={`font-numbers font-bold ${className}`}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedCounter