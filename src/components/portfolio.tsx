'use client'
import React, { useEffect } from 'react'
import Img from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio () {
    useEffect(() => {
        gsap.utils.toArray<HTMLElement>('.portfolio-item').forEach((item, index) => {
            const animation = gsap.from(item, {
                x: index % 2 === 0 ? '100%' : '-100%',
                opacity: 0,
                duration: 2.5,
                ease: 'expo.out',
                paused: true,
            });

            ScrollTrigger.create({
                trigger: item,
                start: 'top 60%',
                end: 'bottom 0%',
                onEnter: () => animation.timeScale(1).play(),
                onLeaveBack: () => animation.timeScale(2).reverse(),
            });
        });

        const borderAnimation = gsap.from('.portfolio-top-border', {
            x: '100%',
            duration: 2.5,
            ease: 'expo.out',
            paused: true,
        });

        ScrollTrigger.create({
            trigger: '.portfolio-top-border',
            start: 'top 60%',
            end: 'bottom 0%',
            onEnter: () => borderAnimation.timeScale(1).play(),
            onLeaveBack: () => borderAnimation.timeScale(2).reverse(),
        });
    }, []);

    return (
        <section>
            <div>
                <h1 className="text-5xl text-black justify-center items-center text-center">
                    Setting the Perfect Stage <br />
                    for Impactful Meetings & Events.
                </h1>
            </div>

            <div className="max-w-3xl mx-auto py-16 text-lg text-black text-center">
                <p>
                    A showcase of the successful meetings and events we have brought to life.
                </p>
            </div>

            {/* PORTFOLIO */}
            <div className="relative overflow-x-hidden">
                <div className="portfolio-top-border absolute top-0 left-0 w-full h-px bg-neutral-500" />

                    <div  className='portfolio-item flex flex-row items-center'>
                        <div className="grow p-4 border-b border-neutral-500 h-64">
                        </div>
                        <div className="flex flex-row justify-between items-center p-4 border-l border-r border-b border-neutral-500 w-[670px] h-64 shrink-0">
                            <div className="w-1/2 pr-20">
                                <h2 className="text-black text-3xl">G20 Indonesia</h2>
                                <p className="text-black">Penggunaan alat interpreter untuk konferensi.</p>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <Img src="/img/portfolio1.png" alt="G20 Indonesia" width={309} height={224}/>
                            </div>
                        </div>
                        <div className="grow p-4 border-b border-neutral-500 h-64">
                        </div>
                    </div>

                    <div  className='portfolio-item flex flex-row items-center'>
                        <div className="w-[248px] p-4 border-b border-neutral-500 h-64">
                        </div>
                        <div className="flex flex-row justify-between items-center p-4 border-l border-r border-b border-neutral-500 w-[670px] h-64 shrink-0">
                            <div className="w-1/2 pr-20">
                                <h2 className="text-black text-3xl">43rd ASEAN Summit</h2>
                                <p className="text-black">Penggunaan alat interpreter untuk konferensi.</p>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <Img src="/img/portfolio2.png" alt="43rdASEAN Summit" width={309} height={224}/>
                            </div>
                        </div>
                        <div className="grow p-4 border-b border-neutral-500 h-64">
                        </div>
                    </div>

                    <div  className='portfolio-item flex flex-row items-center'> 
                        <div className="grow p-4 border-b border-neutral-500 h-64"> 
                        </div>
                        <div className="flex flex-row justify-between items-center p-4 border-l border-r border-b border-neutral-500 w-[670px] h-64 shrink-0">
                            <div className="w-1/2 pr-20">
                                <h2 className="text-black text-3xl">16th ASEAN High Level Legal Experts Group</h2>
                                <p className="text-black">Penggunaan alat interpreter untuk konferensi.</p>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <Img src="/img/portfolio3.png" alt="16th ASEAN High Level Legal Experts Group" width={309} height={224}/>
                            </div>
                        </div>
                        <div className="w-[232px] p-4 border-b border-neutral-500 h-64">
                        </div>
                    </div>

                    <div  className='portfolio-item flex flex-row items-center'> 
                        <div className="w-36 p-4 border-b border-neutral-500 h-64"> 
                        </div>
                        <div className="flex flex-row justify-between items-center p-4 border-l border-r border-b border-neutral-500 w-[670px] h-64 shrink-0">
                            <div className="w-1/2 pr-20">
                                <h2 className="text-black text-3xl">Joint Commission Meeting Indonesia China</h2>
                                <p className="text-black">Penggunaan alat interpreter dan mic delegates untuk konferensi.</p>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <Img src="/img/portfolio4.png" alt="International Monetary Fund" width={309} height={224}/>
                            </div>
                        </div>
                        <div className="grow p-4 border-b border-neutral-500 h-64">
                        </div>
                    </div>
                    
                    <div  className='portfolio-item flex flex-row items-center'> 
                        <div className="grow p-4 border-b border-neutral-500 h-64"> 
                        </div>
                        <div className="flex flex-row justify-between items-center p-4 border-l border-r border-b border-neutral-500 w-[670px] h-64 shrink-0">
                            <div className="w-1/2 pr-20">
                                <h2 className="text-black text-3xl">EAEU and  Mercosur Conference</h2>
                                <p className="text-black">Penggunaan alat interpreter untuk konferensi.</p>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <Img src="/img/portfolio5.png" alt="Asian African Conference" width={309} height={224}/>
                            </div>
                        </div>
                        <div className="grow p-4 border-b border-neutral-500 h-64">
                        </div>
                    </div>
            </div>
        </section>
    )
}
