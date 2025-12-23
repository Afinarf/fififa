import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white text-xs sm:text-sm md:text-base font-medium py-2 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-5 rounded-lg hover:-translate-y-1 sm:hover:-translate-y-2 hover:rotate-2 sm:hover:rotate-3 hover:translate-x-1 sm:hover:translate-x-2 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] duration-200 transition-all cursor-pointer active:shadow-none active:translate-y-0 active:translate-x-0 touch-manipulation ${className}`}>
      {children}
    </button>
  )
}