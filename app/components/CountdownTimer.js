'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const targetDate = new Date('December 24, 2025 00:00:00').getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hidden lg:flex items-center gap-4 font-sans text-xs tracking-widest">
      <span className="text-[#5d6ea1] uppercase">First Drop</span>
      <div className="flex items-center gap-2 text-white">
        <span className="font-mono">{String(timeLeft.days).padStart(2, '0')}d</span>
        <span className="text-white/30">:</span>
        <span className="font-mono">{String(timeLeft.hours).padStart(2, '0')}h</span>
        <span className="text-white/30">:</span>
        <span className="font-mono">{String(timeLeft.minutes).padStart(2, '0')}m</span>
        <span className="text-white/30">:</span>
        <span className="font-mono">{String(timeLeft.seconds).padStart(2, '0')}s</span>
      </div>
    </div>
  )
}
