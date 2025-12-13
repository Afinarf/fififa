'use client'
import React, { useRef, ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import {useGSAP} from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, SplitText)

interface BlockTextRevealProps {
    children: ReactNode
    animateOnScroll?: boolean
    delay?: number
    blockColor?: string
    stagger?: number
    duration?: number
}

export default function BlockTextReveal({
    children,
    animateOnScroll = true,
    delay = 0,
    blockColor = "#000000",
    stagger = 0.15,
    duration = 0.75,
}: BlockTextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const splitRefs = useRef<SplitText[]>([])
    const lines = useRef<Element[]>([])
    const blocks = useRef<HTMLDivElement[]>([])

    useGSAP(() => {
        if (!containerRef.current) return

        // Clear previous refs
        splitRefs.current = []
        lines.current = []
        blocks.current = []

        let elements =[]

        if (containerRef.current.hasAttribute('data-copy-wrapper')) 
            elements = Array.from(containerRef.current.children)
        else {
            elements = [containerRef.current]
        }

        elements.forEach((element) => {
            const split = SplitText.create(element, { 
                type: "lines", 
                linesClass: "block-line",
                linesTreshold: 0.1,
            })

            splitRefs.current.push(split)
            
            split.lines.forEach((line) => {
                const wrapper = document.createElement("div")
                wrapper.className = "block-line-wrapper"
                line.parentNode!.insertBefore(wrapper, line)
                wrapper.appendChild(line)

                const block = document.createElement("div")
                block.className = "block-revealer"
                block.style.backgroundColor = blockColor
                wrapper.appendChild(block)

                lines.current.push(line)
                blocks.current.push(block)
            })
        })

        gsap.set(lines.current, {opacity: 0})
        gsap.set(blocks.current, {scaleX: 0, transformOrigin: "left center"})

        const createBlockRevealAnimation = (block: HTMLDivElement, line: Element, index: number) => {
            const tl = gsap.timeline({ delay: delay + index * stagger })

            tl.to(block, { scaleX: 1, duration: duration, ease: "power4.out" })
            tl.set(line, { opacity: 1 })
            tl.set(block, { transformOrigin: "right center" })
            tl.to(block, { scaleX: 0, duration: duration, ease: "power4.out" })
            return tl
        }

        if (animateOnScroll) {
            blocks.current.forEach((block, index) => {
                const tl = createBlockRevealAnimation(block, lines.current[index], index)
                tl.pause()

                scrollTrigger: ScrollTrigger.create({
                    trigger: containerRef.current!,
                    start: "top 90%",
                    onEnter: () => tl.play(),
                })
            })
        } else {
            blocks.current.forEach((block, index) => {
                createBlockRevealAnimation(block, lines.current[index], index)
            })
        }

        return () => {
            splitRefs.current.forEach((split) => split?.revert())

            const wrappers = containerRef.current?.querySelectorAll(".block-line-wrapper")
            wrappers?.forEach((wrapper) => {
                if (wrapper.parentNode && wrapper.firstChild) {
                    wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper)
                    wrapper.parentNode.removeChild(wrapper)
                }
            })
        }
    }, 
    {
        scope: containerRef,
        dependencies: [children, animateOnScroll, delay, blockColor, stagger, duration],
    })

    return (
        <div ref={containerRef}
        data-copy-wrapper="true">
            {children}
        </div>
    )
}