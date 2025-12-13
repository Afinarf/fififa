'use client'
import React, { useState, useRef } from 'react'
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
    
    const containerRef = useRef(null);

    useGSAP(() => {
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

    }, { dependencies: [activeIndex], scope: containerRef });

    return (
        <section ref={containerRef}>
            <div>
                <h1 className="text-5xl text-black justify-center items-center text-center">
                    Comprehensive Services <br />
                    for Successful Meetings & Events.
                </h1>
            </div>
            <div className='pt-16 pb-18'>
                <p className="text-lg text-black text-center">
                    Explore our wide range of technical solutions and equipment designed to meet every requirement of your event.
                </p>
            </div>

            {/* CARD CONTAINER */}
            <div className='mx-10 flex flex-row flex-wrap justify-center gap-6'>
                {services.map((service, index) => (
                    <div 
                        key={service.id}
                        onClick={() => setActiveIndex(index)}
                        className={`service-card-${index} relative h-[338px] rounded-lg overflow-hidden ${index === activeIndex ? 'cursor-default' : 'cursor-pointer'}`}
                        style={{ width: index === 0 ? '320px' : '156px' }}
                    >
                        {/* ACTIVE CONTENT */}
                        <div className="content-active flex-col justify-between h-full w-full hidden">
                            <h2 className='text-3xl justify-start text-black whitespace-nowrap'>{service.title}</h2>
                            <div className='bg-blue-100 rounded-lg space-y-4 p-4 mt-4 mx-0 h-full flex flex-col justify-end'>
                                <div className='border border-neutral-500 rounded-lg bg-white h-full relative overflow-hidden hover:-translate-y-2 hover:-rotate-3 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] duration-200 transition-all'>
                                    <Img src={service.image} alt={service.title} fill className="object-contain p-2" />
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <ButtonOutline className='flex items-center justify-between cursor-pointer' onClick={() => {
                                        window.open('https://wa.me/6287717363285');
                                    }}>
                                        <span className='text-sm font-medium'>See Details</span>
                                        <ArrowBearRight className='text-black' strokeWidth={2} />
                                    </ButtonOutline>
                                </div>
                            </div>
                        </div>

                        {/* INACTIVE CONTENT */}
                        <div className="content-inactive w-full h-full p-4 relative bg-blue-100">
                            <h2 className='absolute top-4 left-4 text-5xl text-neutral-400'>{service.id}</h2>
                            
                            <div className='absolute inset-0 flex items-center justify-start pl-4 pointer-events-none'>
                                <h3 className='text-black text-7xl whitespace-nowrap origin-left'>
                                    {service.title}
                                </h3>
                            </div>
                            <p className='absolute bottom-4 left-4 text-black text-base'>{service.title}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}