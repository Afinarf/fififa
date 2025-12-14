'use client'
import Img from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './button';
import { ArrowBearRight } from './icons/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from './activeSectionContext';

const links = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Services', path: '#services'},
    { name: 'Testimoni', path: '#testimoni' },
    { name: 'Contact', path: '#contact' },
];

export default function Navbar () {
    const { activeSection, setActiveSection } = useActiveSection();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        const activeLink = links.find((link) => link.path === `#${id}`);
                        if (activeLink) {
                            setActiveSection(activeLink.name);
                        }
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            }
        );

        links.forEach((link) => {
            const element = document.querySelector(link.path);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [setActiveSection]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof links[0]) => {
        e.preventDefault();
        setActiveSection(link.name);
        setIsMobileMenuOpen(false);
        const element = document.querySelector(link.path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="w-full bg-white sticky top-0 z-50">
            
            {/* CONTAINER */}
            <div className='flex flex-col w-full'>
                <div className='flex items-center justify-between py-3 sm:py-4 bg-white px-4 sm:px-6 md:px-8 lg:px-10'>
                    
                    {/* LOGO */}
                    <div className="flex items-center cursor-pointer space-x-2 sm:space-x-4" onClick={() => window.location.reload()}>
                        <Img src="/img/logo.svg" alt="Logo" width={0} height={0} sizes="100vw" className='brightness-0 h-10 sm:h-12 md:h-14 lg:h-16 w-auto' />
                        <span className='text-xs sm:text-sm font-bold text-black tracking-wide hidden sm:block'>FIFIFA MULTIMEDIA</span>
                    </div>

                    {/* DESKTOP NAV LINKS */}
                    <div className='hidden lg:flex items-center justify-between space-x-6 xl:space-x-10'>
                        <ul className='flex space-x-6 xl:space-x-10 cursor-pointer relative'>
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        onClick={(e) => handleNavClick(e, link)}
                                        className={`
                                            relative px-2 text-sm font-medium transition-colors flex items-center outline-none cursor-pointer
                                            ${activeSection === link.name ? 'text-white' : 'text-neutral-500 hover:text-black'}
                                        `}
                                    >
                                        <span className="relative z-10 px-1 py-1">{link.name}</span>

                                        {/* Sliding Pill Border */}
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

                    {/* BUTTON + MOBILE MENU TOGGLE */}
                    <div className="flex space-x-2 sm:space-x-4 items-center">
                        {/* DESKTOP BUTTON */}
                        <div className='hidden sm:block'>
                            <Button className='flex items-center space-x-2 py-3' onClick={() => window.open('https://wa.me/6287717363285')}>
                                <span className='text-sm font-semibold'>Make a Call</span>
                                <ArrowBearRight strokeWidth={2} />
                            </Button>
                        </div>

                        {/* MOBILE BUTTON */}
                        <div className='sm:hidden'>
                            <Button className='flex items-center py-2 px-3' onClick={() => window.open('https://wa.me/6287717363285')}>
                                <ArrowBearRight strokeWidth={2} className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* MOBILE MENU TOGGLE */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-black block transition-all"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-0.5 bg-black block transition-all"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-black block transition-all"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white overflow-hidden"
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
                                        href={link.path}
                                        onClick={(e) => handleNavClick(e, link)}
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
    );
}