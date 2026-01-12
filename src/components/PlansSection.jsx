/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// DESIGN: NEON-GRADIENT HYPER-DARK
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const showcaseItems = [
  { id: 1, src: '/assets/1.png' },
  { id: 2, src: '/assets/3.png' },
  { id: 3, src: '/assets/tccl2.png' },
  { id: 4, src: '/assets/paytm2.png' }
];

export const PlansSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    return (
        <section className="py-32 bg-[#030005] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative h-[600px] md:h-[750px] w-full rounded-[4rem] overflow-hidden bg-[#000a1a]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="absolute inset-0"
                        >
                            <img
                                src={showcaseItems[currentIndex].src}
                                alt=""
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default PlansSection;
