'use client'

import React from 'react'
import TypeWritter from './animation/typeWritter'
import Marque from './marque'
import Text from './animation/text'

export default function About () {
    return (
        <section className="h-auto justify-center items-center text-center bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-[104px]">
            <div className='px-4 sm:px-6 md:px-8 lg:px-10'>
                <Text>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                    Menghadirkan Kualitas Dan <br />
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mt-2 sm:mt-0'>
                        <h1 className="whitespace-nowrap sm:whitespace-normal">Dukungan Profesional Yang</h1>
                        <div className="w-36 sm:w-40 md:w-44 lg:w-48 text-center sm:text-left whitespace-nowrap">
                            <TypeWritter />
                        </div>
                    </div>
                </div>
                </Text>
            </div>

            <div className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-6 sm:py-8 md:py-12 lg:py-18'>
                <Text delay={0.2}>
                    <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm md:text-base text-black leading-relaxed">
                        Berbekal pengalaman lebih dari 5 tahun, kami telah menjadi mitra terpercaya berbagai industri dalam menciptakan acara yang berkesan. Kami hadir lebih dari sekadar penyedia sewa peralatan; kami menawarkan solusi teknis menyeluruh yang mencakup multimedia canggih, perlengkapan rapat, dan dukungan IT terintegrasi. Tim ahli kami memastikan eksekusi teknis yang sempurna, memberikan Anda ketenangan untuk fokus sepenuhnya pada kesuksesan acara Anda.
                    </p>
                </Text>
            </div>

            <div>
                <Marque />
            </div>
        </section>
    )
}