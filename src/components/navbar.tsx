'use client'
import Img from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import Button from './button'
import { ArrowBearRight } from './icons/outline'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { useActiveSection } from './activeSectionContext'

const links = [
    { name: 'Beranda', path: '#home' },
    { name: 'Tentang', path: '#about' },
    { name: 'Portofolio', path: '#portfolio' },
    { name: 'Layanan', path: '#services'},
    { name: 'Testimoni', path: '#testimoni' },
    { name: 'Kontak', path: '#contact' },
]

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "50%",
        },
    },
}

export default function Navbar () {
    const { activeSection, setActiveSection } = useActiveSection()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    
    const pathname = usePathname()
    const router = useRouter()
    const isHomePage = pathname === '/'

    const isManualScrolling = useRef(false)
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const body = document.querySelector('body')
        if (body?.classList.contains('page-transition')) {
            body.classList.remove('page-transition')
        }
    }, [])

    useEffect(() => {
        if (isHomePage) {
            const targetPath = sessionStorage.getItem('navTarget')
            if (targetPath) {
                const targetId = targetPath.replace('#', '')
                const element = document.getElementById(targetId)
                if (element) {
                    const activeLink = links.find(l => l.path === targetPath)
                    if (activeLink) setActiveSection(activeLink.name)
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'auto' }) 
                    }, 10)
                }
                sessionStorage.removeItem('navTarget')
            }
        } else {
            setActiveSection('Layanan') 
        }
    }, [isHomePage, setActiveSection])

    useEffect(() => {
        if (!isHomePage) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isManualScrolling.current) {
                        const id = entry.target.id
                        const activeLink = links.find((link) => link.path === `#${id}`)
                        if (activeLink) {
                            setActiveSection(activeLink.name)
                        }
                    }
                })
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
        )
        links.forEach((link) => {
            const element = document.querySelector(link.path)
            if (element) observer.observe(element)
        })
        return () => observer.disconnect()
    }, [setActiveSection, isHomePage])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const handleTransition = async (href: string) => {
        const body = document.querySelector('body')
        body?.classList.add('page-transition')
        
        await new Promise((resolve) => setTimeout(resolve, 500))
        
        router.push(href)
        
        await new Promise((resolve) => setTimeout(resolve, 500))
        body?.classList.remove('page-transition')
    }

    const handleRefresh = async () => {
        const body = document.querySelector('body')
        
        body?.classList.add('page-transition')

        await new Promise((resolve) => setTimeout(resolve, 500))
        
        window.location.href = '/'
    }

    const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, link: typeof links[0]) => {
        e.preventDefault()

        if (!isHomePage) {
            setIsMobileMenuOpen(false)
            sessionStorage.setItem('navTarget', link.path)
            await handleTransition('/')
            return 
        }

        isManualScrolling.current = true
        setActiveSection(link.name)
        setIsMobileMenuOpen(false)

        const element = document.querySelector(link.path)
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        }

        if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
        scrollTimeout.current = setTimeout(() => {
            isManualScrolling.current = false
        }, 1000)
    }

    return (
        <nav className="w-full bg-white fixed top-0 z-50">
            <div className='flex flex-col w-full'>
                <div className='flex items-center justify-between py-3 sm:py-4 bg-white px-4 sm:px-6 md:px-8 lg:px-10'>
                    
                    <div className="flex items-center cursor-pointer" onClick={handleRefresh}>
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <Img src="/img/logo.svg" alt="Logo" width={0} height={0} sizes="100vw" className='brightness-0 h-10 sm:h-12 md:h-14 lg:h-16 w-auto' />
                            <span className='text-xs sm:text-sm font-bold text-black tracking-wide hidden sm:block'>FIFIFA MULTIMEDIA</span>
                        </div>
                    </div>

                    <div className='hidden lg:flex items-center justify-between space-x-6 xl:space-x-10'>
                        <ul className='flex space-x-6 xl:space-x-10 cursor-pointer relative'>
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={isHomePage ? link.path : '/'}
                                        onClick={(e) => { void handleNavClick(e, link) }}
                                        className={`
                                            relative px-2 text-sm font-medium transition-colors flex items-center outline-none cursor-pointer
                                            ${activeSection === link.name ? 'text-white' : 'text-neutral-500 hover:text-black'}
                                        `}
                                    >
                                        <span className="relative z-10 px-1 py-1">{link.name}</span>
                                        {activeSection === link.name && (
                                            <motion.div
                                                layoutId="active-nav-border"
                                                className="absolute inset-0 bg-black rounded-lg"
                                                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4 items-center">
                        <div className='hidden sm:block'>
                            <Button className='flex items-center space-x-2 py-3' onClick={() => window.open('https://wa.me/6287717363285')}>
                                <span className='text-sm font-semibold'>Hubungi</span>
                                <ArrowBearRight strokeWidth={2} />
                            </Button>
                        </div>
                        <div className='sm:hidden'>
                            <Button className='flex items-center py-2 px-3' onClick={() => window.open('https://wa.me/6287717363285')}>
                                <ArrowBearRight strokeWidth={2} className="w-4 h-4" />
                            </Button>
                        </div>
                        
                        <div className="lg:hidden flex items-center justify-center">
                            <MotionConfig
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                            >
                                <motion.button
                                    initial={false}
                                    animate={isMobileMenuOpen ? "open" : "closed"}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    variants={{
                                        open: { rotate: 90 },
                                        closed: { rotate: 0 }
                                    }}
                                    className="relative h-12 w-12 rounded-full bg-white/0 transition-colors hover:bg-neutral-100"
                                >
                                    <motion.span
                                        variants={VARIANTS.top}
                                        className="absolute h-0.5 w-7 bg-black"
                                        style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                                    />
                                    <motion.span
                                        variants={VARIANTS.middle}
                                        className="absolute h-0.5 w-7 bg-black"
                                        style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                                    />
                                    <motion.span
                                        variants={VARIANTS.bottom}
                                        className="absolute h-0.5 w-7 bg-black"
                                        style={{
                                            x: "-50%",
                                            y: "50%",
                                            bottom: "35%",
                                            left: "50%",
                                        }}
                                    />
                                </motion.button>
                            </MotionConfig>
                        </div>

                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white overflow-hidden border-t border-neutral-100"
                    >
                        <ul className='flex flex-col py-4'>
                            {links.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={isHomePage ? link.path : '/'}
                                        onClick={(e) => { void handleNavClick(e, link) }}
                                        className={`
                                            block px-6 py-3 text-base font-medium transition-colors
                                            ${activeSection === link.name ? 'bg-black text-white' : 'text-neutral-700 hover:bg-neutral-100'}
                                        `}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}