'use client'
import ButtonOutline from "./buttonOutline"

export default function Hero () {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col pt-6 pb-12 px-4 sm:pt-8 sm:pb-16 sm:px-6 md:pt-28 md:pb-20 md:px-10">

                {/* HEADER */}
                <div className="mb-12 sm:mb-14 md:mb-16 lg:mb-34">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl justify-center items-center text-center leading-tight">
                        Your Reliable Partner for<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        Meeting & Event Solutions.
                    </h1>
                </div>

                {/* BUTTON */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
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

                        <ButtonOutline href="/cabel" className="text-sm sm:text-base md:text-lg">
                            Cabel
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