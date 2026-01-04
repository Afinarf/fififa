'use client'
import Typewriter from "typewriter-effect"

export default function TypeWritter() {
    return (
        <div>
            <Typewriter
            options={{
                strings: ['Hemat.', 'Berpengalaman.', 'Efisien.', 'Cepat.', 'Sempurna.', 'Terpercaya.', 'Mulus.'],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 80,
            }}
            />
        </div>
    )
}
