'use client'

import React, { useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(SplitText, ScrollTrigger)

interface TextProps {
    children: React.ReactElement
    animateOnScroll?: boolean
    delay?: number
}

export default function Text({ children, animateOnScroll = true, delay = 0 }: TextProps) {
    const containRef = useRef<any>(null)
    const elementRef = useRef<HTMLElement[]>([])
    const splitRef = useRef<SplitText[]>([])
    const lines = useRef<Element[]>([])

    useGSAP(() => {
        if (!containRef.current) return
        
        splitRef.current = []
        elementRef.current = []
        lines.current = []

        let elements: Element[] = []

        if (containRef.current.hasAttribute('data-text-wrapper')) {
            elements = Array.from(containRef.current.children)
        } else {
            elements = [containRef.current]
        }

        elements.forEach((element) => {
            elementRef.current.push(element as HTMLElement)

            const split = new SplitText(element, {
                type: "lines",
                linesClass: "line",
            })

            if (split.lines) {
                split.lines.forEach((line) => {
                    const wrapper = document.createElement('div')
                    wrapper.style.overflow = 'hidden'
                    wrapper.style.paddingBottom = "0.15em"
                    wrapper.style.marginBottom = "-0.15em"
                    line.parentNode?.insertBefore(wrapper, line)
                    wrapper.appendChild(line)
                })
            }

            splitRef.current.push(split)

            const computedStyle = window.getComputedStyle(element)
            const textIndent = computedStyle.textIndent

            if (textIndent && textIndent !== "0px") {
                if (split.lines && split.lines.length > 0) {
                    (split.lines[0] as HTMLElement).style.paddingLeft = textIndent
                }
                (element as HTMLElement).style.textIndent = "0"
            }

            if (split.lines) {
                lines.current.push(...split.lines)
            }
        })

        gsap.set(lines.current, { y: "100%" })

        const animationProps = {
            y: "0%",
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: delay,
        }

        if (animateOnScroll) {
            gsap.to(lines.current, {
                ...animationProps,
                scrollTrigger: {
                    trigger: containRef.current,
                    start: "top 80%",
                    once: true,
                },
            })
        } else {
            gsap.to(lines.current, animationProps)
        }

        return () => {
            splitRef.current.forEach((split) => {
                if (split) {
                    split.revert()
                }
            })
        }
    },
    {
        scope: containRef,
        dependencies: [animateOnScroll, delay],
    }
    )

    if (React.Children.count(children) === 1) {
        return React.cloneElement(children, { ref: containRef })
    }

    return (
        <div ref={containRef} data-text-wrapper="true">
            {children}
        </div>
    )
}