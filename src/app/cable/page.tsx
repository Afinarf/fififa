'use client'

import { ActiveSectionProvider } from "../../components/activeSectionContext"
import Navbar from "../../components/navbar"
import Img from 'next/image'
import Footer from "../../components/footer"
import ServicesCard from "../../components/servicesCard"
import { ReactLenis } from 'lenis/react';
import Text from "../../components/animation/text"

export default function Cable () {
    return (
        <ReactLenis root>
        <ActiveSectionProvider>
            <div className="bg-white space-y-4 md:space-y-7 lg:space-y-9 pt-[74px] lg:pt-[102px]">
                
                <Navbar />

                <div className="portfolio-top-border absolute left-0 w-full h-px bg-neutral-500" />
                <div className="">
                    <div className='portfolio-item flex flex-col md:flex-row items-stretch md:items-stretch'>
                        
                        <div className="hidden md:block grow p-4 border-b border-t border-neutral-500"></div>
                        
                        <div className="flex flex-col p-4 sm:p-6 md:p-4 border-b border-t md:border-l md:border-r border-neutral-500 w-full md:w-[670px] lg:w-[900px] h-auto md:shrink-0 gap-3 md:gap-4">
                            <div className="flex flex-row items-end gap-2 md:gap-3">
                                <Text>
                                <h1 className="text-neutral-400 text-3xl sm:text-4xl md:text-5xl">05</h1>
                                </Text>
                                <Text delay={0.1}>
                                <h2 className="text-black text-xl sm:text-2xl md:text-3xl">Cable</h2>
                                </Text>
                            </div>

                            <div className="flex flex-col md:flex-row items-start justify-between w-full gap-3 md:gap-4 flex-1">
                                <Text>
                                <div className="border border-neutral-500 rounded-lg bg-white relative overflow-hidden w-full md:w-80 lg:w-90 md:h-[220px] lg:h-[246px] flex items-center justify-center p-2 shrink-0">
                                    <Img src="/img/cable.svg" alt="Cable" width={220} height={165} className="lg:w-[200px]"/>
                                </div>
                                </Text>
                                <Text delay={0.5}>
                                <div className="w-full flex-1 space-y-2">
                                    <p className="text-black text-sm md:sm lg:text-sm leading-relaxed">The reliable foundation for your setup. Keep your event connected with our premium range of HDMI, VGA, and power cables in lengths up to 30 meters. Our wide inventory offers the flexibility to arrange your equipment exactly where you need it, ensuring your technical setup is never limited by the size of the room.</p>
                                    <p className="text-black text-sm md:sm lg:text-sm leading-relaxed">Flawless signal and a professional look. We only provide tested, high-grade cables to ensure a stable signal and a tidy, trip-free installation. Our team helps you maintain an organized workspace, ensuring your technical foundation is as clean and professional as your presentation.</p>
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