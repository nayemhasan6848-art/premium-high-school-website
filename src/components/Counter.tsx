'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface CounterProps {
  from: number
  to: number
  duration: number
  enabled: boolean
}

export default function Counter({ from, to, duration, enabled }: CounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!enabled || !counterRef.current) return

    const counterObj = { value: from }

    gsap.to(counterObj, {
      value: to,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(counterObj.value).toString()
        }
      },
    })
  }, [enabled, from, to, duration])

  return <span ref={counterRef}>{from}</span>
}
