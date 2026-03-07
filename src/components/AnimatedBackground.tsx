'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black">
      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#C9922A]/10 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-orange-500/5 blur-[100px] rounded-full"
      />
      <motion.div
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * -0.04,
        }}
        className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-[#C9922A]/5 blur-[150px] rounded-full"
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `radial-gradient(#C9922A 0.5px, transparent 0.5px)`, 
          backgroundSize: '30px 30px' 
        }} 
      />
    </div>
  )
}
