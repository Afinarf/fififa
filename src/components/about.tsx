'use client'

import React from 'react'
import TypeWritter from './animation/typeWritter'
import Marque from './marque'

export default function About () {
    return (
        <section className="h-auto justify-center items-center text-center bg-white pt-[104px]">
            <div className='px-10'>
                <div className="text-5xl text-black">
                    Delivering Professional <br />
                    <div className='flex justify-center items-center gap-3'>
                        <h1>Quality and Support That Is</h1>
                        <div className="w-48 text-left whitespace-nowrap"><TypeWritter /></div>
                    </div>
                </div>
            </div>

            <div className='px-60 py-18'>
                <p className="mt-6 text-sm text-black">
                    With over 5 years of experience, we assist diverse industries in delivering memorable meetings and events. We go far beyond simple equipment rental by delivering comprehensive technical solutions that seamlessly cover advanced multimedia, meeting essentials, and integrated IT support. Our expert team adapts to your unique needs, guaranteeing flawless technical execution and giving you the peace of mind to focus entirely on your event’s goals.
                </p>
            </div>

            <div>
                <Marque />
            </div>
        </section>
    )
}