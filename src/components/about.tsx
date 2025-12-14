'use client'

import React from 'react'
import TypeWritter from './animation/typeWritter'
import Marque from './marque'

export default function About () {
    return (
        <section className="h-auto justify-center items-center text-center bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-[104px]">
            <div className='px-4 sm:px-6 md:px-8 lg:px-10'>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                    Delivering Professional <br />
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mt-2 sm:mt-0'>
                        <h1 className="whitespace-nowrap sm:whitespace-normal">Quality and Support That Is</h1>
                        <div className="w-36 sm:w-40 md:w-44 lg:w-48 text-center sm:text-left whitespace-nowrap">
                            <TypeWritter />
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-6 sm:py-8 md:py-12 lg:py-18'>
                <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm md:text-base text-black leading-relaxed">
                    With over 5 years of experience, we assist diverse industries in delivering memorable meetings and events. We go far beyond simple equipment rental by delivering comprehensive technical solutions that seamlessly cover advanced multimedia, meeting essentials, and integrated IT support. Our expert team adapts to your unique needs, guaranteeing flawless technical execution and giving you the peace of mind to focus entirely on your event&apos;s goals.
                </p>
            </div>

            <div>
                <Marque />
            </div>
        </section>
    )
}