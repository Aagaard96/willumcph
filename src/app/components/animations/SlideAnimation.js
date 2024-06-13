"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Animation({ children, className, type = 'bottom', duration = 0.5, delay = 0.5, as = 'div' }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        // DIRECTIONS
        SlideInLeft: { initial: { opacity: 0, x: -150, scale: 0.5 }, animate: { opacity: 1, x: 0, scale: 1 } },
        SlideInRight: { initial: { opacity: 0, x: 150, scale: 0.5 }, animate: { opacity: 1, x: 0, scale: 1 } },
        SlideInTop: { initial: { opacity: 0, y: -50, scale: 0.5 }, animate: { opacity: 1, y: 0, scale: 1 } },
        SlideInBottom: { initial: { opacity: 0, y: 50, scale: 0.5 }, animate: { opacity: 1, y: 0, scale: 1 } },
        
        //EFFECTS
        OnlyScale: { initial: { opacity: 0, y: 0, scale: 0.5 }, animate: { opacity: 1, y: 0, scale: 1 } },
        OnlyAppear: { initial: { opacity: 0, y: 0 }, animate: { opacity: 1, y: 0 } }
    };

    const MotionComponent = motion[as];

    return (
        <MotionComponent
            ref={ref}
            initial={variants[type].initial} // Set initial state based on direction
            animate={isInView ? variants[type].animate : {}} // Set animate state based on direction
            transition={{ duration, delay }} // Set duration and delay
            className={className} // Add your desired classes
        >
            {children}
        </MotionComponent>
    );
}
