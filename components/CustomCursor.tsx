'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over interactive element
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('interactive')

      setIsPointer(isInteractive)

      // Create trailing particles
      if (Math.random() > 0.7 && trailRef.current) {
        const particle = document.createElement('div')
        particle.className =
          'fixed w-2 h-2 bg-indigo-500 rounded-full pointer-events-none'
        particle.style.left = e.clientX + 'px'
        particle.style.top = e.clientY + 'px'
        particle.style.opacity = '0.6'
        trailRef.current.appendChild(particle)

        // Animate particle away
        const animationDuration = 600
        const startTime = Date.now()
        const startX = e.clientX
        const startY = e.clientY

        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = elapsed / animationDuration

          if (progress < 1) {
            const x = startX + (Math.random() - 0.5) * 100
            const y = startY + (Math.random() - 0.5) * 100
            particle.style.left = x + 'px'
            particle.style.top = y + 'px'
            particle.style.opacity = String(0.6 * (1 - progress))
            requestAnimationFrame(animate)
          } else {
            particle.remove()
          }
        }
        animate()
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div ref={trailRef} className="fixed inset-0 pointer-events-none z-40" />
      <motion.div
        ref={cursorRef}
        className={`fixed w-6 h-6 pointer-events-none z-50 flex items-center justify-center ${
          isPointer ? 'mix-blend-screen' : ''
        }`}
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{ cursor: 'none' }}
      >
        {/* Outer glow ring */}
        <div
          className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${
            isPointer
              ? 'border-cyan-400 shadow-lg shadow-cyan-400/50'
              : 'border-indigo-500 shadow-lg shadow-indigo-500/50'
          }`}
        />

        {/* Inner dot */}
        <div
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            isPointer ? 'bg-cyan-400' : 'bg-indigo-500'
          }`}
        />

        {/* Outer aura */}
        <div
          className={`absolute inset-0 rounded-full blur-sm transition-colors duration-300 ${
            isPointer
              ? 'bg-cyan-400/20'
              : 'bg-indigo-500/20'
          }`}
        />
      </motion.div>
    </>
  )
}
