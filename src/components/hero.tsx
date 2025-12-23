'use client'
import { useEffect } from "react"
import ButtonOutline from "./buttonOutline"
import Text from "./animation/text"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero () {
    
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <section className="w-full bg-white">
            <div className="flex flex-col pt-6 pb-12 px-4 sm:pt-8 sm:pb-16 sm:px-6 md:pt-28 md:pb-20 md:px-10">

                {/* HEADER */}
                <div className="mb-12 sm:mb-14 md:mb-16 lg:mb-34">
                    <Text delay={0.8}>
                        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl justify-center items-center text-center leading-tight">
                            Your Reliable Partner for<br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>
                            Meeting & Event Solutions.
                        </h1>
                    </Text>
                </div>

                {/* BUTTONS */}
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="800" 
                    data-aos-duration="800" 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                >
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
                        <ButtonOutline href="/projector" className="text-sm sm:text-base md:text-lg">
                            Projector
                        </ButtonOutline>
                        <ButtonOutline href="/screen" className="text-sm sm:text-base md:text-lg">
                            Screen
                        </ButtonOutline>
                        <ButtonOutline href="/tv" className="text-sm sm:text-base md:text-lg">
                            TV
                        </ButtonOutline>
                        <ButtonOutline href="/laptop" className="text-sm sm:text-base md:text-lg">
                            Laptop
                        </ButtonOutline>

                        <ButtonOutline href="/cable" className="text-sm sm:text-base md:text-lg">
                            Cable
                        </ButtonOutline>
                        <ButtonOutline href="/mic-delegates" className="text-sm sm:text-base md:text-lg">
                            Mic Delegates
                        </ButtonOutline>
                        <ButtonOutline href="/interpreter" className="text-sm sm:text-base md:text-lg">
                            Interpreter
                        </ButtonOutline>
                    </div>
                </div>
            </div>
        </section>
    )
}