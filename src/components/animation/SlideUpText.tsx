import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

interface SlideUpTextProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  yOffset?: number
}

const SlideUpText: React.FC<SlideUpTextProps> = ({
  children,
  className = '',
  duration = 1.0,
  delay = 0,
  yOffset = 30,
}) => {
  const componentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        componentRef.current,
        { y: yOffset, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: duration,
          delay: delay,
          ease: 'power3.out',
        }
      )
    }, componentRef)

    return () => ctx.revert()
  }, [duration, delay, yOffset])

  return (
    <div ref={componentRef} className={className}>
      {children}
    </div>
  )
}

export default SlideUpText