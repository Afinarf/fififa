import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function ButtonOutline({ children, onClick, className = 'text-sm', href }: ButtonProps) {
    const baseStyle = `bg-transparent border border-black text-black font-medium py-2 px-2 rounded-lg hover:-translate-y-2 hover:rotate-3 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] duration-200 transition-all cursor-pointer active:shadow-none`

    if (href) {
        return (
            <Link href={href} className={`${baseStyle} ${className}`}>
                {children}
            </Link>
        );
    }
    
    return (
        <button
        onClick={onClick}
        className={`${baseStyle} ${className}`}>
        {children}
        </button>
    );
}