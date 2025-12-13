'use client'
import Img from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from './button';
import { ArrowBearRight } from './icons/outline';
import { motion } from 'framer-motion';
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

    return (
        <nav className="w-full bg-white sticky top-0 z-50">
            
            {/* CONTAINER */}
            <div className='flex flex-col w-full'>
                <div className='flex items-center justify-between py-4 bg-white px-10'>
                    
                    {/* LOGO */}
                    <div className="flex items-center cursor-pointer space-x-4" onClick={() => window.location.reload()}>
                        <Img src="/img/logo.svg" alt="Logo" width={0} height={0} sizes="100vw" className='brightness-0 h-16 w-auto' />
                        <span className='text-sm font-bold text-black tracking-wide'>FIFIFA MULTIMEDIA</span>
                    </div>

                    {/* NAV LINKS */}
                    <div className='items-center justify-between space-x-10'>
                        <ul className='flex space-x-10 cursor-pointer relative'>
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

                    {/* LANGUAGE SELECTOR + BUTTON */}
                    <div className="flex space-x-4 items-center">
                        {/* BUTTON */}
                        <div>
                            <Button className='flex items-center space-x-2 py-3' onClick={() => window.open('https://wa.me/6287717363285')}>
                                <span className='text-sm font-semibold'>Make a Call</span>
                                <ArrowBearRight strokeWidth={2} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}