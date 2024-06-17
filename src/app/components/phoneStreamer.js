"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone } from "react-icons/fi";

export default function FixedStreamer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="tel:+4553848415"
                    className="w-[50px] h-[50px] sm:w-[150px] lg:w-[200px] flex justify-center items-center gap-4 bg-accent text-white text-md lg:text-lg xl:text-xl p-2 z-20 fixed transform rotate-90 right-0 sm:right-[-50px] lg:right-[-75px] top-40 rounded-b"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .60 }}
                >
                    <FiPhone size={28} className="md:size-6 lg:size-7 -rotate-90" />
                    <span className="hidden sm:block">53 84 84 15</span>
                </motion.a>

            )}

        </AnimatePresence>
    );
}
