'use client'
import Typewriter from "typewriter-effect"

export default function TypeWritter() {
    return (
        <div>
            <Typewriter
            options={{
                strings: ['Fast.', 'Flawless.', 'Reliable.', 'Seemless.', 'Time Savings.', 'Cost Savings.', 'Experienced.', 'Efficient.'],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 80,
            }}
            />
        </div>
    )
}
