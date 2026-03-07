'use client'

import { useEffect, useState } from 'react'

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const format = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="flex space-x-1.5 md:space-x-2 font-mono text-[#C9922A] text-base md:text-lg font-bold">
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.days)}</span>
        <span className="text-[8px] md:text-[10px] uppercase text-gray-500 font-bold tracking-widest mt-0.5 md:mt-1">Days</span>
      </div>
      <span className="mt-0.5">:</span>
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.hours)}</span>
        <span className="text-[8px] md:text-[10px] uppercase text-gray-500 font-bold tracking-widest mt-0.5 md:mt-1">Hrs</span>
      </div>
      <span className="mt-0.5">:</span>
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.minutes)}</span>
        <span className="text-[8px] md:text-[10px] uppercase text-gray-500 font-bold tracking-widest mt-0.5 md:mt-1">Min</span>
      </div>
      <span className="mt-0.5">:</span>
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.seconds)}</span>
        <span className="text-[8px] md:text-[10px] uppercase text-gray-500 font-bold tracking-widest mt-0.5 md:mt-1">Sec</span>
      </div>
    </div>
  )
}
