'use client'
import Text from './animation/text'
import ServicesCard from './servicesCard'

export default function Services() {
    return (
        <section className="">
            <div className="pt-8 sm:pt-12 md:pt-16">
                <Text>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black justify-center items-center text-center leading-tight px-4">
                    Comprehensive Services <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    for Successful Meetings & Events.
                </h1>
                </Text>
            </div>
            <div className='pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-18'>
                <Text>
                <p className="text-sm sm:text-base md:text-lg text-black text-center px-4">
                    Explore our wide range of technical solutions and equipment designed to meet every requirement of your event.
                </p>
                </Text>
            </div>

            <ServicesCard />
        </section>
    )
}