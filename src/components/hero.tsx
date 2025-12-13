'use client'
import ButtonOutline from "./buttonOutline"
import Img from "next/image"

export default function Hero () {
    return (
        <section className="h-auto bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end pt-10 pb-10 lg:pb-20 px-4 lg:px-10">

                {/* HEADER */}
                <div className="w-full lg:w-8/12 mb-8 lg:mb-0">
                    <h1 className="text-black text-4xl md:text-6xl lg:text-7xl">
                        Your Reliable Partner <br />
                        for Meeting & Event <br />
                        Solutions.
                    </h1>
                </div>

                {/* BUTTON */}
                <div className="flex flex-col w-full lg:w-4/12 gap-4 items-start lg:items-end">
                    <div className="flex flex-wrap justify-start lg:justify-end gap-2 md:gap-4">
                    <ButtonOutline href="/projector" className="text-base md:text-xl">
                        Projector
                    </ButtonOutline>
                    <ButtonOutline href="/screen" className="text-base md:text-xl">
                        Screen
                    </ButtonOutline>
                    <ButtonOutline href="/tv" className="text-base md:text-xl">
                        TV
                    </ButtonOutline>
                    <ButtonOutline href="/laptop" className="text-base md:text-xl">
                        Laptop
                    </ButtonOutline>
                    </div>
                    <div className="flex flex-wrap justify-start lg:justify-end gap-2 md:gap-4">
                    <ButtonOutline href="/cabel" className="text-base md:text-xl">
                        Cabel
                    </ButtonOutline>
                    <ButtonOutline href="/mic-delegates" className="text-base md:text-xl">
                        Mic Delegates
                    </ButtonOutline>
                    <ButtonOutline href="/interpreter" className="text-base md:text-xl">
                        Interpreter
                    </ButtonOutline>
                    </div>
                </div>
            </div>

            {/* IMAGE */}
            <div className="shrink-0">
                <div className="w-full h-[300px] md:h-[400px] lg:h-[513px] relative overflow-hidden">
                    <Img 
                        src="/img/hero.png" 
                        alt="Hero Image" 
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/25" />
                </div>
            </div>
        </section>
    )
}