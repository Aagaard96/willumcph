// components/SectionHeading.js
"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function SectionHeading({ heading, className }) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        onChange: (inView) => {
            if (inView) {
                setHasAnimated(true);
            }
        },
    });

    return (
        <div ref={ref} className={`relative inline-block uppercase font-bold text-2xl md:text-4xl ${className}`}>
            <h2 className="relative z-10 pb-0 sm:pb-1">{heading}</h2>
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1 sm:h-1.5 bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={hasAnimated ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            />
        </div>
    );
};
