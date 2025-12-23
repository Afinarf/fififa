'use client'
import { SquareRoundedPlus } from "./icons/outline"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Marque() {
    const [iconSize, setIconSize] = useState('h-6 w-6')
    
    const marqueList = [
        { name: '/ Time Savings', icon: <SquareRoundedPlus strokeWidth={2} className={iconSize} />},
        { name: '/ Cost Savings', icon: <SquareRoundedPlus strokeWidth={2} className={iconSize} />},
        { name: '/ Experienced', icon: <SquareRoundedPlus strokeWidth={2} className={iconSize} />},
        { name: '/ Efficient', icon: <SquareRoundedPlus strokeWidth={2} className={iconSize} />},
        { name: '/ Fast', icon: <SquareRoundedPlus strokeWidth={2} className={iconSize} />},
        { name: '/ Flawless', icon: <SquareRoundedPlus strokeWidth={2} className={iconSize} />},
        { name: '/ Reliable', icon: <SquareRoundedPlus strokeWidth={2} className={iconSize} />},
        { name: '/ Seamless', icon: <SquareRoundedPlus strokeWidth={2} className={iconSize} />}
    ]

    const marqueeContainer = useRef<HTMLDivElement>(null)
    const wrapper = useRef<HTMLDivElement>(null)
    const marqueeTween = useRef<gsap.core.Tween | null>(null)
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const updateIconSize = () => {
            if (window.innerWidth < 640) {
                setIconSize('h-4 w-4')
            } else if (window.innerWidth < 768) {
                setIconSize('h-5 w-5')
            } else {
                setIconSize('h-6 w-6')
            }
        }

        updateIconSize()
        window.addEventListener('resize', updateIconSize)

        const getDuration = () => {
            if (window.innerWidth < 640) return 20
            if (window.innerWidth < 1024) return 22
            return 25
        }

        marqueeTween.current = gsap.to(marqueeContainer.current, {
            xPercent: -100,
            ease: "none",
            duration: getDuration(),
            repeat: -1,
        })
 
        const st = ScrollTrigger.create({
            onUpdate: (self) => {
                const newTimeScale = self.direction * 2
                gsap.to(marqueeTween.current, {
                    timeScale: newTimeScale,
                    duration: 0.5,
                    ease: "power1.out",
                    overwrite: true,
                })
 
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current)
                }
                scrollTimeout.current = setTimeout(() => {
                    gsap.to(marqueeTween.current, {
                        timeScale: 1,
                        duration: 1,
                        ease: "power2.out",
                    })
                }, 150)
            },
        })
 
        return () => {
            st.kill()
            marqueeTween.current?.kill()
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
            window.removeEventListener('resize', updateIconSize)
        }
    }, [])

    return (
        <div ref={wrapper} className="text-black overflow-hidden border-t border-b border-black py-2 sm:py-3 md:py-4 text-center">
            <div ref={marqueeContainer} className="text-base sm:text-xl md:text-2xl lg:text-3xl flex whitespace-nowrap">
                {marqueList.map((item, index) => (
                    <span key={`first-${index}`} className="mx-2 sm:mx-3 md:mx-4 flex items-center gap-2 sm:gap-3 md:gap-4">
                        {item.name}
                        {item.icon}
                    </span>
                ))}
                {marqueList.map((item, index) => (
                    <span key={`second-${index}`} className="mx-2 sm:mx-3 md:mx-4 flex items-center gap-2 sm:gap-3 md:gap-4">
                        {item.name}
                        {item.icon}
                    </span>
                ))}
            </div>
        </div>
    )
}