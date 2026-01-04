'use client'
import React, { useEffect, useState } from 'react'
import Img from 'next/image'
import { motion, useMotionValue, useMotionValueEvent, animate } from 'framer-motion'
import Text from './animation/text'

export default function Testimoni() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [cardWidth, setCardWidth] = useState(555)
    const x = useMotionValue(0)

    const uniqueTestimonials = [
        {
            name: 'Sarah Wijaya Kusuma',
            message: 'Kualitas peralatan melebihi ekspektasi kami. Semua yang kami sewa, termasuk proyektor, TV, dan layar, dalam kondisi sangat baik dan berfungsi dengan sempurna. Jarang menemukan peralatan sewa yang terawat dan andal seperti ini.',
            img: '/img/testimoni/avatar2.svg'
        },
        {
            name: 'Aburizal Ahmad',
            message: 'Saya sangat panik hanya sehari sebelum acara sampai saya menemukan layanan sewa ini. Pengalamannya sangat bebas stres, peralatannya lengkap, harganya kompetitif, dan layanannya sangat cepat dan ramah. Benar-benar penyelamat!',
            img: '/img/testimoni/avatar1.svg'
        },
        {
            name: 'Randy Pratama',
            message: 'Mereka menawarkan kualitas kerja yang luar biasa dengan harga yang sangat kompetitif, yang sulit ditemukan saat ini. Timnya sangat berpengalaman dan proaktif, selalu memberikan solusi terbaik bahkan untuk pengaturan teknis kami yang paling kompleks.',
            img: '/img/testimoni/avatar3.svg'
        },
        {
            name: 'Yudha Dwi P',
            message: 'Layanan luar biasa dengan harga kompetitif. Proses pemesanan sangat lancar dan sangat mudah digunakan. Saya sangat merekomendasikan layanan mereka karena keandalan dan standar profesionalnya.',
            img: '/img/testimoni/avatar4.svg'
        },
        {
            name: 'Santoso',
            message: 'Peralatan yang disediakan sangat berkualitas, dan layanannya luar biasa. Profesionalisme dan perhatian terhadap detail mereka membuat acara sukses. Saya sangat merekomendasikan mereka atas layanan luar biasa mereka.',
            img: '/img/testimoni/avatar5.svg'
        },
    ]

    const testimonials = [...uniqueTestimonials, ...uniqueTestimonials]

    const ONE_SET_WIDTH = uniqueTestimonials.length * cardWidth

    useEffect(() => {
        setIsLoaded(true)
        
        const updateCardWidth = () => {
            if (window.innerWidth < 640) {
                setCardWidth(window.innerWidth - 32)
            } else if (window.innerWidth < 768) {
                setCardWidth(400)
            } else if (window.innerWidth < 1024) {
                setCardWidth(480)
            } else {
                setCardWidth(555)
            }
        }

        updateCardWidth()
        window.addEventListener('resize', updateCardWidth)
        
        return () => window.removeEventListener('resize', updateCardWidth)
    }, [])

    useMotionValueEvent(x, "change", (latest) => {
        const xPos = latest
        if (xPos <= -ONE_SET_WIDTH) {
            x.set(xPos + ONE_SET_WIDTH)
        } 
        else if (xPos > 0) {
            x.set(xPos - ONE_SET_WIDTH)
        }
    })

    return (
        <section className="overflow-hidden">
            <div className="">
                <div className='border-t border-neutral-500 pb-8 sm:pb-12 md:pb-16'/>
                <Text>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black justify-center items-center text-center leading-tight">
                    Jangan Hanya 
                    <br />
                    Percaya Kata Kami.
                </h1>
                </Text>
                <Text>
                <p className='text-center text-black text-sm sm:text-base md:text-lg pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-18 px-4'>
                    Dengar langsung dari klien puas yang telah mempercayakan rapat dan acara mereka kepada kami.
                </p>
                </Text>
            </div>

            <motion.div 
                initial={{ opacity: 0, x: 100 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                onViewportLeave={() => {
                    animate(x, 0, { duration: 0.5, ease: "easeInOut" })
                }}
                
                className={`cursor-grab active:cursor-grabbing overflow-hidden`}
            >
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
            </motion.div>
        </section>
    )
}