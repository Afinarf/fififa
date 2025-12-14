'use client'
import React, { useState, useRef, useEffect } from 'react'
import Img from 'next/image'
import ButtonOutline from "./buttonOutline"
import { ArrowBearRight } from './icons/outline'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Services() {
    const services = [
        { id: "01", title: "Projector", image: "/img/projector.svg" },
        { id: "02", title: "Screen", image: "/img/screen.svg" },
        { id: "03", title: "TV", image: "/img/tv.svg" },
        { id: "04", title: "Laptop", image: "/img/laptop.svg" },
        { id: "05", title: "Cable", image: "/img/cable.svg" },
        { id: "06", title: "Mic Delegates", image: "/img/micdelegates.svg" },
        { id: "07", title: "Interpreter", image: "/img/interpreter.svg" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    const containerRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useGSAP(() => {
        if (isMobile) return;
        
        services.forEach((_, index) => {
            const isActive = index === activeIndex;
            const target = `.service-card-${index}`;

            gsap.to(target, {
                width: isActive ? 320 : 156, 
                duration: 0.5,
                ease: "power3.inOut"
            });

            gsap.to(`${target} .content-active`, {
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 1,
                duration: 0.5,
                delay: isActive ? 0.1 : 0,
                display: isActive ? 'flex' : 'none'
            });

            gsap.to(`${target} .content-inactive`, {
                opacity: isActive ? 0 : 1,
                x: isActive ? 1 : 0,
                duration: 0.5,
                display: isActive ? 'none' : 'block'
            });
        });

    }, { dependencies: [activeIndex, isMobile], scope: containerRef });

    return (
        <section ref={containerRef} className="px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="pt-8 sm:pt-12 md:pt-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black justify-center items-center text-center leading-tight px-4">
                    Comprehensive Services <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    for Successful Meetings & Events.
                </h1>
            </div>
            <div className='pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-18'>
                <p className="text-sm sm:text-base md:text-lg text-black text-center px-4">
                    Explore our wide range of technical solutions and equipment designed to meet every requirement of your event.
                </p>
            </div>

            {/* CARD CONTAINER - DESKTOP */}
            <div className='hidden md:flex flex-row flex-wrap justify-center gap-4 lg:gap-6'>
                {services.map((service, index) => (
                    <div 
                        key={service.id}
                        onClick={() => setActiveIndex(index)}
                        className={`service-card-${index} relative h-[280px] md:h-80 lg:h-[338px] rounded-lg overflow-hidden ${index === activeIndex ? 'cursor-default' : 'cursor-pointer'}`}
                        style={{ width: index === 0 ? '320px' : '156px' }}
                    >
                        {/* ACTIVE CONTENT */}
                        <div className="content-active flex-col justify-between h-full w-full hidden">
                            <h2 className='text-2xl lg:text-3xl justify-start text-black whitespace-nowrap'>{service.title}</h2>
                            <div className='bg-blue-100 rounded-lg space-y-3 lg:space-y-4 p-3 lg:p-4 mt-3 lg:mt-4 mx-0 h-full flex flex-col justify-end'>
                                <div className='border border-neutral-500 rounded-lg bg-white h-full relative overflow-hidden hover:-translate-y-2 hover:-rotate-3 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] duration-200 transition-all'>
                                    <Img src={service.image} alt={service.title} fill className="object-contain p-2" />
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <ButtonOutline className='flex items-center justify-between cursor-pointer' onClick={() => {window.open('https://wa.me/6287717363285');}}>
                                        <span className='text-xs lg:text-sm font-medium'>See Details</span>
                                        {/* <ArrowBearRight className='text-black w-4 h-4' strokeWidth={2} /> */}
                                    </ButtonOutline>
                                </div>
                            </div>
                        </div>

                        {/* INACTIVE CONTENT */}
                        <div className="content-inactive w-full h-full p-3 lg:p-4 relative bg-blue-100">
                            <h2 className='absolute top-3 lg:top-4 left-3 lg:left-4 text-3xl md:text-4xl lg:text-5xl text-neutral-400'>{service.id}</h2>
                            
                            <div className='absolute inset-0 flex items-center justify-start pl-3 lg:pl-4 pointer-events-none'>
                                <h3 className='text-black text-5xl md:text-6xl lg:text-7xl whitespace-nowrap origin-left'>
                                    {service.title}
                                </h3>
                            </div>
                            <p className='absolute bottom-3 lg:bottom-4 left-3 lg:left-4 text-black text-sm md:text-base'>{service.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CARD CONTAINER - MOBILE (Grid Layout) */}
            <div className='md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-0'>
                {services.map((service, index) => (
                    <div 
                        key={service.id}
                        className='relative h-[280px] rounded-lg overflow-hidden bg-blue-100 cursor-pointer hover:scale-[1.02] transition-transform duration-200'
                        onClick={() => window.open('https://wa.me/6287717363285')}
                    >
                        <div className="w-full h-full p-4 flex flex-col justify-between">
                            <div className='flex justify-between items-start'>
                                <h2 className='text-2xl text-black font-medium'>{service.title}</h2>
                                <span className='text-3xl text-neutral-400'>{service.id}</span>
                            </div>
                            
                            <div className='border border-neutral-500 rounded-lg bg-white h-32 relative overflow-hidden'>
                                <Img src={service.image} alt={service.title} fill className="object-contain p-2" />
                            </div>

                            <div className='flex flex-row justify-between items-center'>
                                <ButtonOutline className='flex items-center justify-between cursor-pointer w-full'>
                                    <span className='text-sm font-medium'>See Details</span>
                                    {/* <ArrowBearRight className='text-black w-4 h-4' strokeWidth={2} /> */}
                                </ButtonOutline>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}