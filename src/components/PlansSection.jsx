/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// DESIGN: NEON-GRADIENT HYPER-DARK
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Sparkles } from 'lucide-react';

const showcaseItems = [
    {
        id: 1,
        src: '/assets/1.png',
        title: 'PLATINUM HD ELITE',
        subtitle: 'Unrivaled 4K digital broadcasting with zero-loss transmission and elite sports coverage.',
        tag: 'PREMIUM CHOICE',
        stats: { resolution: 'ULTRA 4K', delay: '0.02ms' },
        gradient: 'from-[#1a89e5] to-blue-700'
    },
    {
        id: 2,
        src: '/assets/3.png',
        title: 'HYPER-FIBER GIGA',
        subtitle: 'Digital life without limits. Symmetric bandwidth for extreme professionals and elite gamers.',
        tag: 'SPEED MASTER',
        stats: { bandwidth: 'GIGABIT', uptime: '99.98%' },
        gradient: 'from-pink-600 to-fuchsia-600'
    },
    {
        id: 3,
        src: '/assets/tccl2.png',
        title: 'DE GOLD',
        subtitle: 'The gold standard of reliability. Experience seamless connectivity across the entire spectrum.',
        tag: 'PLATINUM SERVICE',
        stats: { availability: '24/7 SUPPORT', coverage: 'PAN-INDIA' },
        gradient: 'from-blue-600 to-indigo-700'
    },
    {
        id: 4,
        src: '/assets/paytm2.png',
        title: 'INSTANT RECHARGE',
        subtitle: 'Recharge your TCCL connection instantly via Paytm. Seamless, secure, and lightning fast.',
        tag: 'EASY PAY',
        stats: { method: 'QR SCAN', speed: 'INSTANT' },
        gradient: 'from-blue-500 to-indigo-600'
    }
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

    const moveSlide = (dir) => {
        setCurrentIndex((prev) => (prev + dir + showcaseItems.length) % showcaseItems.length);
        setIsAutoPlaying(false);
    };

    return (
        <section className="py-32 bg-[#030005] relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER: DYNAMIC & BOLD */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8 shadow-[0_0_20px_rgba(26,137,229,0.2)]">
                            <Sparkles size={14} className="animate-pulse" /> The TCCL Experience
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase italic">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a89e5] via-white to-blue-500">DIGITAL CURATION</span>
                        </h2>
                    </motion.div>

                    {/* INTERACTIVE CONTROLS */}
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col items-end gap-1 pr-10 border-r border-white/10 uppercase italic">
                            <span className="text-[10px] text-gray-600 font-bold tracking-[0.4em]">Sector</span>
                            <span className="text-4xl font-black text-white tabular-nums tracking-tighter shadow-blue-500/10 shadow-2xl">0{currentIndex + 1}</span>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => moveSlide(-1)}
                                className="w-16 h-16 rounded-[1.5rem] border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-blue-500/50 transition-all shadow-xl group"
                            >
                                <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => moveSlide(1)}
                                className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-[#1a89e5] flex items-center justify-center text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(26,137,229,0.4)] transition-all shadow-3xl group"
                            >
                                <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* CINEMATIC SLIDER: HYPER-STYLIZED */}
                <div className="relative h-[600px] md:h-[750px] w-full rounded-[4rem] overflow-hidden bg-[#000a1a] border border-white/10 shadow-[0_100px_200px_rgba(0,0,0,0.8)] group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="absolute inset-0"
                        >
                            {/* BLURRED BACKGROUND TO FILL SPACE */}
                            <img
                                src={showcaseItems[currentIndex].src}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 scale-110"
                            />
                            {/* MAIN UN-CROPED IMAGE */}
                            <img
                                src={showcaseItems[currentIndex].src}
                                alt={showcaseItems[currentIndex].title}
                                className="relative w-full h-full object-contain"
                            />

                            {/* Aggressive Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030005] via-transparent to-[#030005]/40 opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#030005]/60 via-transparent to-transparent hidden lg:block" />

                            {/* CONTENT BLOCK: FLOATING GLASS */}
                            <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-24">
                                <div className="grid lg:grid-cols-2 items-end gap-24">

                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                    >
                                        <div className={`inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r ${showcaseItems[currentIndex].gradient} rounded-full text-white text-[11px] font-black uppercase tracking-widest mb-10 shadow-3xl`}>
                                            <Zap size={16} fill="white" /> {showcaseItems[currentIndex].tag}
                                        </div>
                                        <h3 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9] uppercase italic drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                                            {showcaseItems[currentIndex].title}
                                        </h3>
                                        <p className="text-xl text-gray-300 mb-14 font-semibold leading-relaxed max-w-xl italic drop-shadow-lg">
                                            "{showcaseItems[currentIndex].subtitle}"
                                        </p>

                                    </motion.div>

                                    {/* Stats Grid: Neon Highlights */}
                                    <div className="hidden lg:grid grid-cols-2 gap-8">
                                        {Object.entries(showcaseItems[currentIndex].stats).map(([label, value], i) => (
                                            <motion.div
                                                key={label}
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.8 + i * 0.2 }}
                                                className="p-10 rounded-[3.5rem] bg-gradient-to-br from-white/15 to-transparent border border-white/10 backdrop-blur-3xl hover:border-blue-500/50 transition-all group/stat relative overflow-hidden"
                                            >
                                                <div className="text-[11px] text-gray-500 font-extrabold uppercase tracking-[0.4em] mb-4 group-hover/stat:text-blue-400 transition-colors">{label}</div>
                                                <div className="text-4xl font-black text-white italic tracking-tighter uppercase tabular-nums drop-shadow-2xl">{value}</div>
                                                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 opacity-0 group-hover/stat:opacity-20 blur-2xl transition-all" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* DYNAMIC PROGRESS BAR: BLUE & PINK */}
                    <div className="absolute bottom-12 right-12 left-12 z-20">
                        <div className="flex gap-6 w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                            {showcaseItems.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setCurrentIndex(idx);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`relative flex-1 h-full transition-all duration-1000 ${idx === currentIndex ? 'bg-blue-600/50' : 'bg-transparent'}`}
                                >
                                    {idx === currentIndex && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 8, ease: "linear" }}
                                            className="absolute inset-0 h-full bg-gradient-to-r from-blue-500 to-pink-500 shadow-[0_0_20px_rgba(26,137,229,0.8)]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlansSection;
