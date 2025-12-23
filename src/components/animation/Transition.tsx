'use client'

import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface TransitionLinkProps extends LinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function TransitionLink({
    children,
    href,
    className,
    onClick,
    ...props
}: TransitionLinkProps) {
    const router = useRouter()

    const handlerTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (onClick) {
            onClick(e)
        }
        
        e.preventDefault()

        const body = document.querySelector('body')

        body?.classList.add('page-transition')
        
        await sleep(500) 
        
        router.push(href)
        
        await sleep(500) 
        
        body?.classList.remove('page-transition')
    }

    return (
        <Link 
            onClick={handlerTransition} 
            href={href} 
            className={className}
            {...props}
        >
            {children}
        </Link>
    )
}