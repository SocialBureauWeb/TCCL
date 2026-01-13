/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// DESIGN: NEON-GRADIENT HYPER-DARK
*/

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Tv, Landmark, Truck, Activity, Star } from "lucide-react";

const stats = [
    { id: 1, icon: Users, label: "ELITE CONNECTIONS", value: 3000000, suffix: "+", color: "pink", gradient: "from-pink-500 to-fuchsia-600" },
    { id: 2, icon: Tv, label: "4K COMMAND HUB", value: 500, suffix: "+", color: "blue", gradient: "from-blue-600 to-cyan-500" },
    { id: 3, icon: Landmark, label: "D-CENTER NEXUS", value: 100, suffix: "+", color: "pink", gradient: "from-fuchsia-600 to-blue-600" },
    { id: 4, icon: Truck, label: "DISTRIBUTORS", value: 2000, suffix: "+", color: "blue", gradient: "from-blue-600 to-indigo-700" },
];

const Counter = ({ value, duration = 3000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const totalFrames = (duration / 1000) * 60;
            const increment = end / totalFrames;

            const handle = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(handle);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);
            return () => clearInterval(handle);
        }
    }, [isInView, value, duration]);

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(0) + "K";
        return num.toString();
    };

    return <span ref={ref} className="font-black italic tabular-nums tracking-tighter">{formatNumber(count)}</span>;
};

export default function QuickFacts() {
    return (
        <section className="relative py-32 bg-[#030005] overflow-hidden">

            {/* HYPER-DARK DISTORTED BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/Landing page 5.jpg"
                    className="w-full h-full object-cover opacity-10 mix-blend-screen brightness-50 contrast-150 saturate-0"
                    alt="Stats Matrix"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#030005] via-transparent to-[#030005]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.05),transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER: HYPER-STYLIZED */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-[11px] font-black uppercase tracking-[0.5em] mb-10 shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                            <Star size={14} className="animate-pulse" /> The Scale of Supremacy
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.9]">
                            LEADING THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-white to-blue-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.3)]">DIGITAL RACE.</span>
                        </h2>
                        <div className="w-48 h-1.5 bg-gradient-to-r from-pink-600 to-blue-600 mx-auto rounded-full mb-10" />
                    </motion.div>
                </div>

                {/* STATS BRUTALIST GRID: NEON CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {stats.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 1 }}
                            whileHover={{ y: -20, scale: 1.05 }}
                            className="relative group p-12 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl hover:border-pink-500/50 transition-all duration-700 text-center shadow-2xl"
                        >
                            {/* Internal Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 rounded-[4rem]`} />

                            <div className="relative z-10">
                                <div className={`w-20 h-20 rounded-[1.75rem] bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-10 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all shadow-3xl`}>
                                    <s.icon size={36} />
                                </div>

                                <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic drop-shadow-2xl">
                                    <Counter value={s.value} />{s.suffix}
                                </div>

                                <div className="text-[11px] text-gray-500 font-black uppercase tracking-[0.4em] group-hover:text-pink-400 transition-colors">
                                    {s.label}
                                </div>
                            </div>

                            {/* Cyber Corner Accents */}
                            <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-pink-500/50 transition-all" />
                            <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-blue-500/50 transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
