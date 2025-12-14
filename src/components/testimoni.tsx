'use client'
import React, { useEffect, useState } from 'react'
import Img from 'next/image'
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion'

export default function Testimoni() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [cardWidth, setCardWidth] = useState(555);
    const x = useMotionValue(0);

    const uniqueTestimonials = [
        {
            name: 'Sarah Wijaya Kusuma',
            message: 'The equipment quality exceeded our expectations. Everything we rented, including the projectors, TVs, and screens, was in pristine condition and worked flawlessly. It\'s rare to find rental gear that is this well-maintained and reliable.',
            img: '/img/testimoni/avatar2.svg'
        },
        {
            name: 'Aburizal Ahmad',
            message: 'I was in a total panic just one day before the event until I stumbled upon this rental service. It was such a stress-free experience; the equipment was complete, the prices were competitive, and the service was impressively fast and friendly. Absolute lifesavers!',
            img: '/img/testimoni/avatar1.svg'
        },
        {
            name: 'Randy Pratama',
            message: 'They offer exceptional quality work at very competitive prices, which is hard to find these days. The team is incredibly experienced and proactive, consistently providing the best solutions for even our most complex technical setups.',
            img: '/img/testimoni/avatar3.svg'
        },
        {
            name: 'Yudha Dwi P',
            message: 'Exceptional service at a competitive price. The ordering process was seamless and incredibly user-friendly. I highly recommend their services for their reliability and professional standards.',
            img: '/img/testimoni/avatar4.svg'
        },
        {
            name: 'Santoso',
            message: 'The equipment provided was top-notch, and the service was exceptional. Their professionalism and attention to detail made the event a success. I highly recommend them for their outstanding services.',
            img: '/img/testimoni/avatar5.svg'
        },
    ];

    const testimonials = [...uniqueTestimonials, ...uniqueTestimonials];

    const ONE_SET_WIDTH = uniqueTestimonials.length * cardWidth;

    useEffect(() => {
        setIsLoaded(true);
        
        // Update card width based on screen size
        const updateCardWidth = () => {
            if (window.innerWidth < 640) {
                setCardWidth(window.innerWidth - 32); // Full width minus padding
            } else if (window.innerWidth < 768) {
                setCardWidth(400);
            } else if (window.innerWidth < 1024) {
                setCardWidth(480);
            } else {
                setCardWidth(555);
            }
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);
        
        return () => window.removeEventListener('resize', updateCardWidth);
    }, []);

    useMotionValueEvent(x, "change", (latest) => {
        const xPos = latest;
        if (xPos <= -ONE_SET_WIDTH) {
            x.set(xPos + ONE_SET_WIDTH);
        } 
        else if (xPos > 0) {
            x.set(xPos - ONE_SET_WIDTH);
        }
    });

    return (
        <section className="overflow-hidden">
            <div className="">
                <div className='border-t border-neutral-500 pb-8 sm:pb-12 md:pb-16'/>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black justify-center items-center text-center leading-tight">
                    Don&apos;t Just 
                    <br />
                    Take Our Words.
                </h1>
                <p className='text-center text-black text-sm sm:text-base md:text-lg pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-18 px-4'>
                    Hear directly from satisfied clients who have trusted us with their meetings and events.
                </p>
            </div>

            {/* TESTIMONI CAROUSEL */}
            <div className={`cursor-grab active:cursor-grabbing overflow-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                <motion.div 
                    style={{ x }} 
                    drag="x" 
                    dragConstraints={{ left: -ONE_SET_WIDTH, right: 0 }}
                    whileTap={{ cursor: "grabbing" }} 
                    className='flex flex-row w-max relative'
                >
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className='flex flex-col border-t border-b border-l border-neutral-500 p-3 sm:p-4 h-auto min-h-[200px] sm:min-h-[220px] md:min-h-60 lg:h-60 shrink-0 select-none'
                            style={{ width: `${cardWidth}px` }}
                        >
                            <div className='flex flex-row items-end pb-2 space-x-2'>
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] shrink-0">
                                    <Img 
                                        src={testimonial.img} 
                                        alt="Avatar" 
                                        fill 
                                        className='rounded-lg object-cover'
                                        draggable={false}
                                    />
                                </div>
                                <h3 className='text-sm sm:text-base text-black font-semibold'>{testimonial.name}</h3>
                            </div>
                            <div className='border-t border border-neutral-400 w-1/2'/>
                            <p className='text-black mt-2 text-xs sm:text-sm leading-relaxed pointer-events-none line-clamp-6 sm:line-clamp-none'>
                                {testimonial.message}
                            </p>
                        </div>
                    ))}
                    <div className='border-l border-neutral-500 h-[200px] sm:h-[220px] md:h-60 lg:h-60'></div>
                </motion.div>
            </div>
        </section>
    )
}