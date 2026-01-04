'use client'
import React from 'react'
import Button from './button'
import { ArrowBearRight } from './icons/outline'
import Img from 'next/image'
import Link from 'next/link'
import { useActiveSection } from './activeSectionContext'
import { usePathname, useRouter } from 'next/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Footer () {
        const { setActiveSection } = useActiveSection()
        const pathname = usePathname()
        const router = useRouter()
        const isHomePage = pathname === '/'

        const links = [
        { name: 'Beranda', path: '#home' },
        { name: 'Tentang', path: '#about' },
        { name: 'Portofolio', path: '#portfolio' },
        { name: 'Layanan', path: '#services'},
        { name: 'Testimoni', path: '#testimoni' },
        { name: 'Kontak', path: '#contact' },
    ]

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof links[0]) => {
        if (!isHomePage) {
            e.preventDefault()
            sessionStorage.setItem('navTarget', link.path)
            router.push('/')
            return
        }

        e.preventDefault()
        setActiveSection(link.name)
        const element = document.querySelector(link.path)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer data-aos="flip-down" className='bg-blue-100 h-auto min-h-[748px] sm:min-h-[748px] md:min-h-[614px] lg:h-[588px] mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-2xl flex flex-col justify-end'>
            <div className='px-4 sm:px-6 md:px-8 lg:px-4 pb-6 sm:pb-8 lg:pb-4'>

                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0'>
                    {/*HEADER FOOTER  */}
                    <div className='space-y-4 sm:space-y-6 w-full lg:w-10/14'>
                        <div className='flex flex-row gap-2'>
                            <span className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-500'>
                                Mari
                            </span>
                            <Button className='flex items-center space-x-1 sm:space-x-2 py-2 px-3 sm:py-3 sm:px-4 md:py-4' onClick={() => window.open('https://wa.me/6287717363285')}>
                                <span className='text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap'>Diskusikan</span>
                                <ArrowBearRight strokeWidth={2} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            </Button>
                        </div>
                        <div className='flex flex-row items-center flex-wrap gap-2 sm:gap-3 md:gap-4'>
                            <span>
                                <b className='text-black text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium whitespace-nowrap'>Kebutuhan</b>
                            </span>
                            <span className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-500 whitespace-nowrap'>Anda</span>
                        </div> 
                    </div>

                    {/* CONTACT INFORMATION */}
                    <div className='flex flex-col justify-end w-full lg:w-4/14 text-left lg:text-right space-y-1 sm:space-y-2'>
                        <p className='text-black text-sm sm:text-base'>
                            Kota Bogor,<br />
                            Tanah Sareal,<br />
                            16169,<br />
                            Jawa Barat,<br />
                            Indonesia
                        </p>
                        <p className='text-black text-sm sm:text-base font-medium'>+62 877-1736-3285</p>
                        <p className='text-black text-sm sm:text-base'>fififamultimedia@gmail.com</p>
                    </div>
                </div>
                
                <div className='border-t border-neutral-500 mt-12 sm:mt-16 lg:mt-20 mb-4 sm:mb-6'/>

                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0'>
                    {/* LOGO */}
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
                        <div className="flex items-center cursor-pointer space-x-2 sm:space-x-4">
                            <Img src="/img/logo.svg" alt="Logo" width={0} height={0} sizes="100vw" className='brightness-0 h-10 sm:h-12 md:h-14 lg:h-16 w-auto' />
                            <span className='text-xs sm:text-sm font-bold text-black tracking-wide'>FIFIFA MULTIMEDIA</span>
                        </div>
                    </div>

                    {/* NAV LINKS - Desktop Only */}
                    <div className='hidden lg:block lg:w-auto'>
                        <ul className='flex space-x-6 cursor-pointer relative whitespace-nowrap'>
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={isHomePage ? link.path : '/'} 
                                        onClick={(e) => handleNavClick(e, link)}
                                        className={`relative px-2 text-sm transition-colors flex items-center outline-none cursor-pointer text-black hover:text-blue-600`}>
                                        <span className="relative z-10 px-1 py-1">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COPYRIGHT */}
                    <div className='w-full lg:w-auto'>
                        <p className='text-black text-xs sm:text-sm text-left lg:text-right'>©FIFIFA MULTIMEDIA 2025. Hak cipta dilindungi undang-undang.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}