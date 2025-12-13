import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white text-sm font-medium py-2 px-2 rounded-lg hover:-translate-y-2 hover:rotate-3 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] duration-200 transition-all cursor-pointer active:shadow-none ${className}`}>
      {children}
    </button>
  );
}