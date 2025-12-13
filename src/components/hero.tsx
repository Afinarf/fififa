'use client'
import ButtonOutline from "./buttonOutline"
import Img from "next/image"

export default function Hero () {
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col lg:flex-row justify-between pt-10 pb-20 px-10">

                {/* HEADER */}
                <div className="w-8/12 mb-8">
                    <h1 className="text-black text-7xl">
                        Your Reliable Partner <br />
                        for Meeting & Event <br />
                        Solutions.
                    </h1>
                </div>

                {/* BUTTON */}
                <div className="flex flex-col w-4/12 gap-4 justify-end">
                    <div className="flex flex-wrap justify-end gap-2">
                    <ButtonOutline href="/projector" className="text-base">
                        Projector
                    </ButtonOutline>
                    <ButtonOutline href="/screen" className="text-base">
                        Screen
                    </ButtonOutline>
                    <ButtonOutline href="/tv" className="text-base">
                        TV
                    </ButtonOutline>
                    <ButtonOutline href="/laptop" className="text-base">
                        Laptop
                    </ButtonOutline>
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                    <ButtonOutline href="/cabel" className="text-base">
                        Cabel
                    </ButtonOutline>
                    <ButtonOutline href="/mic-delegates" className="text-base">
                        Mic Delegates
                    </ButtonOutline>
                    <ButtonOutline href="/interpreter" className="text-base">
                        Interpreter
                    </ButtonOutline>
                    </div>
                </div>
            </div>

            {/* IMAGE */}
            <div className="shrink-0">
                <div className="w-full h-[300px] relative overflow-hidden">
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