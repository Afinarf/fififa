'use client'
import React from 'react'
import Button from './button'
import { ArrowBearRight } from './icons/outline'
import Img from 'next/image'
import Link from 'next/link'
import { useActiveSection } from './activeSectionContext'

export default function Footer () {
        const { setActiveSection } = useActiveSection();
        const links = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Portfolio', path: '#portfolio' },
        { name: 'Services', path: '#services'},
        { name: 'Testimoni', path: '#testimoni' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <footer className='bg-blue-100 h-[588px] mx-10 rounded-2xl flex flex-col justify-end'>
            <div className='px-4 pb-4'>

                <div className='flex flex-row justify-between items-center'>
                    {/*HEADER FOOTER  */}
                    <div className='space-y-6 w-10/14'>
                        <div>
                            <span className='text-neutral-500 text-7xl'>Let&#39;s <b className='text-black font-medium'>discuss</b> your</span>
                        </div>
                        <div className='flex flex-row items-center whitespace-nowrap space-x-4'>
                                <span className='text-7xl text-neutral-500'>needs</span>
                                <Button className='flex items-center space-x-2 py-4' onClick={() => window.open('https://wa.me/6287717363285')}>
                                <span className='text-2xl font-semibold'>Let&#39;s Talk</span>
                                    <ArrowBearRight strokeWidth={2} />
                                </Button>
                                <span><b className='text-black text-7xl font-medium'>with us</b></span>
                        </div> 
                    </div>

                    {/* CONTACT INFORMATION */}
                    <div className='flex flex-col justify-end w-4/14 text-right'>
                        <p className='text-black'>Bogor City,<br />Tanah Sareal,<br />16169,<br />West Java,<br />Indonesia</p>
                        <p className='text-black'>+62 877-1736-3285</p>
                        <p className='text-black'>fififamultimedia@gmail.com</p>
                    </div>
                </div>
                
                <div className='border-t border-neutral-500 mt-20 mb-6'/>

                <div className='flex flex-row justify-between items-center'>
                    {/* LOGO */}
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
                        <div className="flex items-center cursor-pointer space-x-4">
                            <Img src="/img/logo.svg" alt="Logo" width={0} height={0} sizes="100vw" className='brightness-0 h-16 w-auto' />
                            <span className='text-sm font-bold text-black tracking-wide'>FIFIFA MULTIMEDIA</span>
                        </div>
                    </div>

                    {/* NAV LINKS */}
                    <div className='items-center justify-between space-x-6'>
                        <ul className='flex space-x-6 cursor-pointer relative'>
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.path} 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveSection(link.name);
                                            const element = document.querySelector(link.path);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className={`relative px-2 text-sm transition-colors flex items-center outline-none cursor-pointer text-black`}>
                                        <span className="relative z-10 px-1 py-1">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COPYRIGHT */}
                    <div>
                        <p className='text-black'>©FIFIFA MULTIMEDIA 2025. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}