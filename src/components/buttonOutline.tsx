import React from 'react'
import TransitionLink from './animation/Transition'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (e?: React.MouseEvent) => void
  className?: string
  href?: string;
}

export default function ButtonOutline({ children, onClick, className = '', href }: ButtonProps) {
    const baseStyle = `bg-transparent border border-black text-black font-medium text-xs sm:text-sm md:text-base py-2 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-5 rounded-lg hover:-translate-y-1 sm:hover:-translate-y-2 hover:rotate-2 sm:hover:rotate-3 hover:translate-x-1 sm:hover:translate-x-2 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] duration-200 transition-all cursor-pointer active:shadow-none active:translate-y-0 active:translate-x-0 touch-manipulation inline-block text-center select-none`

    if (href) {
        return (
            <TransitionLink 
                href={href} 
                className={`${baseStyle} ${className}`}
                onClick={onClick}
            >
                {children}
            </TransitionLink>
        );
    }
    
    return (
        <button
            onClick={onClick}
            className={`${baseStyle} ${className}`}
        >
            {children}
        </button>
    );
}