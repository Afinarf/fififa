'use client'

import { ActiveSectionProvider } from "../../components/activeSectionContext"
import Navbar from "../../components/navbar"
import Img from 'next/image'
import Footer from "../../components/footer"
import ServicesCard from "@/src/components/servicesCard"
import { ReactLenis } from 'lenis/react'
import Text from "../../components/animation/text"

export default function Screen () {
    return (
        <ReactLenis root>
        <ActiveSectionProvider>
            <div className="bg-white space-y-4 md:space-y-7 lg:space-y-9">
                <div className="sticky top-0 z-50">
                    <Navbar />
                </div>

                <div className="portfolio-top-border absolute top-0 left-0 w-full h-px bg-neutral-500" />
                <div className="">
                    <div className='portfolio-item flex flex-col md:flex-row items-stretch md:items-stretch'>
                        
                        <div className="hidden md:block grow p-4 border-b border-t border-neutral-500"></div>
                        
                        <div className="flex flex-col p-4 sm:p-6 md:p-4 border-b border-t md:border-l md:border-r border-neutral-500 w-full md:w-[670px] lg:w-[900px] h-auto md:shrink-0 gap-3 md:gap-4">
                            <div className="flex flex-row items-end gap-2 md:gap-3">
                                <Text>
                                <h1 className="text-neutral-400 text-3xl sm:text-4xl md:text-5xl">02</h1>
                                </Text>
                                <Text delay={0.1}>
                                <h2 className="text-black text-xl sm:text-2xl md:text-3xl">Screen</h2>
                                </Text>
                            </div>
                            <div className="flex flex-col md:flex-row items-start justify-between w-full gap-3 md:gap-4 flex-1">
                                <Text>
                                <div className="border border-neutral-500 rounded-lg bg-white relative overflow-hidden w-full md:w-80 lg:w-90 md:h-[220px] lg:h-[246px] flex items-center justify-center p-2 shrink-0">
                                    <Img src="/img/screen.svg" alt="Screen" width={220} height={165} className=""/>
                                </div>
                                </Text>
                                <Text delay={0.5}>
                                <div className="w-full flex-1 space-y-2">
                                    <p className="text-black text-sm md:sm lg:text-sm leading-relaxed">The perfect backdrop for every detail. Our 2x2m screens feature a specialized high-reflectivity surface designed to capture and reflect light with maximum clarity. Perfectly sized for seminars or office meetings, they provide a professional, high-contrast display that makes your content easy to read from any seat in the room.</p>
                                    <p className="text-black text-sm md:sm lg:text-sm leading-relaxed">Hassle-free setup, every time. We handle the heavy lifting with prompt delivery and expert on-site installation. Our screens are sturdy, meticulously maintained, and ready for use in minutes—ensuring your event stays on schedule while we manage the technical foundation.</p>
                                </div>
                                </Text>
                            </div>
                        </div>

                        <div className="hidden md:block grow p-4 border-b border-t border-neutral-500"></div>
                    </div>
                </div>

                <div>
                    <ServicesCard />
                </div>

                <div className="pb-4 md:pt-4 lg:pb-10">
                    <Footer />
                </div>
            </div>
        </ActiveSectionProvider>
        </ReactLenis>
    )
}