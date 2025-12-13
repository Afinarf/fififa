'use client'
import { SquareRoundedPlus } from "./icons/outline";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Register plugin once at the module level

export default function Marque() {
    const marqueList = [
        { name: '/ Time Savings', icon: <SquareRoundedPlus strokeWidth={2} className="h-6 w-6" />},
        { name: '/ Cost Savings', icon: <SquareRoundedPlus strokeWidth={2} className="h-6 w-6" />},
        { name: '/ Experienced', icon: <SquareRoundedPlus strokeWidth={2} className="h-6 w-6" />},
        { name: '/ Efficient', icon: <SquareRoundedPlus strokeWidth={2} className="h-6 w-6" />},
        { name: '/ Fast', icon: <SquareRoundedPlus strokeWidth={2} className="h-6 w-6" />},
        { name: '/ Flawless', icon: <SquareRoundedPlus strokeWidth={2} className="h-6 w-6" />},
        { name: '/ Reliable', icon: <SquareRoundedPlus strokeWidth={2} className="h-6 w-6" />},
        { name: '/ Seamless', icon: <SquareRoundedPlus strokeWidth={2} className="h-6 w-6" />}
    ];

    const marqueeContainer = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const marqueeTween = useRef<gsap.core.Tween | null>(null);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        marqueeTween.current = gsap.to(marqueeContainer.current, {
            xPercent: -100,
            ease: "none",
            duration: 25,
            repeat: -1,
        });
 
        const st = ScrollTrigger.create({
            onUpdate: (self) => {
                const newTimeScale = self.direction * 2;
                gsap.to(marqueeTween.current, {
                    timeScale: newTimeScale,
                    duration: 0.5,
                    ease: "power1.out",
                    overwrite: true,
                });
 
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }
                scrollTimeout.current = setTimeout(() => {
                    gsap.to(marqueeTween.current, {
                        timeScale: 1,
                        duration: 1,
                        ease: "power2.out",
                    });
                }, 150);
            },
        });
 
        return () => {
            st.kill();
            marqueeTween.current?.kill();
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    return (
        <div ref={wrapper} className="text-black overflow-hidden border-t border-b border-black py-4 text-center">
            <div ref={marqueeContainer} className="text-3xl flex whitespace-nowrap">
                {marqueList.map((item, index) => (
                    <span key={`first-${index}`} className="mx-4 flex items-center gap-4">
                        {item.name}
                        {item.icon}
                    </span>
                ))}
                {marqueList.map((item, index) => (
                    <span key={`second-${index}`} className="mx-4 flex items-center gap-4">
                        {item.name}
                        {item.icon}
                    </span>
                ))}
            </div>
        </div>
    )
}
