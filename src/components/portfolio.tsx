'use client'
import React, { useEffect, useRef } from 'react'
import Img from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Text from './animation/text'

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio () {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mediaQuery = window.matchMedia('(min-width: 768px)')
            
            if (mediaQuery.matches) {
                gsap.utils.toArray<HTMLElement>('.portfolio-item').forEach((item, index) => {
                    const animation = gsap.from(item, {
                        x: index % 2 === 0 ? '100%' : '-100%',
                        opacity: 0,
                        duration: 2.5,
                        ease: 'expo.out',
                        paused: true,
                    })

                    ScrollTrigger.create({
                        trigger: item,
                        start: 'top 60%',
                        end: 'bottom 0%',
                        onEnter: () => animation.timeScale(1).play(),
                        onLeaveBack: () => animation.timeScale(2).reverse(),
                    })
                })

                const borderAnimation = gsap.from('.portfolio-top-border', {
                    x: '100%',
                    duration: 2.5,
                    ease: 'expo.out',
                    paused: true,
                })

                ScrollTrigger.create({
                    trigger: '.portfolio-top-border',
                    start: 'top 60%',
                    end: 'bottom 0%',
                    onEnter: () => borderAnimation.timeScale(1).play(),
                    onLeaveBack: () => borderAnimation.timeScale(2).reverse(),
                })
            }
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section className="" ref={container}>
            <div className="pt-8 sm:pt-12 md:pt-16">
                <Text>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black justify-center items-center text-center leading-tight px-4">
                    Setting the Perfect Stage <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    for Impactful Meetings & Events.
                </h1>
                </Text>
            </div>

            <div className="max-w-3xl mx-auto py-8 sm:py-12 md:py-16 text-sm sm:text-base md:text-lg text-black text-center px-4">
                <Text>
                <p>
                    A showcase of the successful meetings and events we have brought to life.
                </p>
                </Text>
            </div>

            {/* PORTFOLIO */}
            <div className="relative overflow-x-hidden">
                <div className="portfolio-top-border absolute top-0 left-0 w-full h-px bg-neutral-500" />

                {/* Portfolio Item 1 */}
                <div className='portfolio-item flex flex-col md:flex-row items-stretch md:items-center'>
                    <div className="hidden md:block grow p-4 border-b border-neutral-500 md:h-64"></div>
                    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 md:p-4 border-b md:border-l md:border-r border-neutral-500 w-full md:w-[670px] md:h-64 md:shrink-0 gap-4 sm:gap-6">
                        <div className="w-full sm:w-1/2 md:pr-20">
                            <h2 className="text-black text-xl sm:text-2xl md:text-3xl mb-2">G20 Indonesia</h2>
                            <p className="text-black text-sm sm:text-base">Interpretation Systems for Conferences.</p>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                            <Img src="/img/portfolio1.png" alt="G20 Indonesia" width={309} height={224} className="w-full max-w-[309px] h-auto"/>
                        </div>
                    </div>
                    <div className="hidden md:block grow p-4 border-b border-neutral-500 md:h-64"></div>
                </div>

                {/* Portfolio Item 2 */}
                <div className='portfolio-item flex flex-col md:flex-row items-stretch md:items-center'>
                    <div className="hidden md:block md:w-[248px] p-4 border-b border-neutral-500 md:h-64"></div>
                    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 md:p-4 border-b md:border-l md:border-r border-neutral-500 w-full md:w-[670px] md:h-64 md:shrink-0 gap-4 sm:gap-6">
                        <div className="w-full sm:w-1/2 md:pr-20">
                            <h2 className="text-black text-xl sm:text-2xl md:text-3xl mb-2">43rd ASEAN Summit</h2>
                            <p className="text-black text-sm sm:text-base">Interpretation Systems for Conferences.</p>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                            <Img src="/img/portfolio2.png" alt="43rd ASEAN Summit" width={309} height={224} className="w-full max-w-[309px] h-auto"/>
                        </div>
                    </div>
                    <div className="hidden md:block grow p-4 border-b border-neutral-500 md:h-64"></div>
                </div>

                {/* Portfolio Item 3 */}
                <div className='portfolio-item flex flex-col md:flex-row items-stretch md:items-center'> 
                    <div className="hidden md:block grow p-4 border-b border-neutral-500 md:h-64"></div>
                    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 md:p-4 border-b md:border-l md:border-r border-neutral-500 w-full md:w-[670px] md:h-64 md:shrink-0 gap-4 sm:gap-6">
                        <div className="w-full sm:w-1/2 md:pr-20">
                            <h2 className="text-black text-xl sm:text-2xl md:text-3xl mb-2">16th ASEAN High Level Legal Experts Group</h2>
                            <p className="text-black text-sm sm:text-base">Interpretation Systems for Conferences.</p>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                            <Img src="/img/portfolio3.png" alt="16th ASEAN High Level Legal Experts Group" width={309} height={224} className="w-full max-w-[309px] h-auto"/>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-[232px] p-4 border-b border-neutral-500 md:h-64"></div>
                </div>

                {/* Portfolio Item 4 */}
                <div className='portfolio-item flex flex-col md:flex-row items-stretch md:items-center'> 
                    <div className="hidden md:block md:w-36 p-4 border-b border-neutral-500 md:h-64"></div>
                    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 md:p-4 border-b md:border-l md:border-r border-neutral-500 w-full md:w-[670px] md:h-64 md:shrink-0 gap-4 sm:gap-6">
                        <div className="w-full sm:w-1/2 md:pr-20">
                            <h2 className="text-black text-xl sm:text-2xl md:text-3xl mb-2">Joint Commission Meeting Indonesia China</h2>
                            <p className="text-black text-sm sm:text-base">Interpretation Systems & Delegate Mics for Conferences.</p>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                            <Img src="/img/portfolio4.png" alt="Joint Commission Meeting Indonesia China" width={309} height={224} className="w-full max-w-[309px] h-auto"/>
                        </div>
                    </div>
                    <div className="hidden md:block grow p-4 border-b border-neutral-500 md:h-64"></div>
                </div>
                
                {/* Portfolio Item 5 */}
                <div className='portfolio-item flex flex-col md:flex-row items-stretch md:items-center'> 
                    <div className="hidden md:block grow p-4 border-b border-neutral-500 md:h-64"></div>
                    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 md:p-4 border-b md:border-l md:border-r border-neutral-500 w-full md:w-[670px] md:h-64 md:shrink-0 gap-4 sm:gap-6">
                        <div className="w-full sm:w-1/2 md:pr-20">
                            <h2 className="text-black text-xl sm:text-2xl md:text-3xl mb-2">EAEU and Mercosur Conference</h2>
                            <p className="text-black text-sm sm:text-base">Interpretation Systems for Conferences.</p>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                            <Img src="/img/portfolio5.png" alt="EAEU and Mercosur Conference" width={309} height={224} className="w-full max-w-[309px] h-auto"/>
                        </div>
                    </div>
                    <div className="hidden md:block grow p-4 border-b border-neutral-500 md:h-64"></div>
                </div>
            </div>
        </section>
    )
}