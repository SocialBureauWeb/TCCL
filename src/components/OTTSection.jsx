/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// DESIGN: NEON-GRADIENT HYPER-DARK
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Activity, Lock, Cpu } from 'lucide-react';

const valueProps = [
    {
        icon: Shield,
        title: 'ARMORED SIGNAL',
        desc: 'Sovereign signal protocols ensuring absolute digital stability for elite viewing.',
        gradient: 'from-[#1a89e5] to-blue-700'
    },
    {
        icon: Zap,
        title: 'HYPER-LATENCY',
        desc: 'Zero-hop signal routing for the fastest command response in the industry.',
        gradient: 'from-pink-500 to-fuchsia-600'
    },
    {
        icon: Cpu,
        title: 'NEXUS COMMAND',
        desc: 'State-wide D-Centers monitoring network integrity with AI-driven precision.',
        gradient: 'from-blue-600 to-[#1a89e5]'
    },
    {
        icon: Activity,
        title: 'LOCAL ARCHIVE',
        desc: 'Deeply rooted support infrastructure. We are always where you are.',
        gradient: 'from-blue-600 to-blue-800'
    }
];

export const OTTSection = () => {
    return (
        <section className="py-32 bg-[#030005] relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-24 items-center">

                    {/* VISUAL SIDE: HYPER-STYLIZED MATRIX */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative group p-8 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] bg-black">
                                <img
                                    src="/assets/Landing page 5.jpg"
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-3xl scale-110"
                                />
                                <img
                                    src="/assets/Landing page 5.jpg"
                                    alt="Digital Infrastructure"
                                    className="relative w-full h-full object-contain brightness-150 saturate-150 transition-all duration-700 pointer-events-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030005] via-transparent to-transparent opacity-80" />

                                {/* HUD Overlay: Neon Matrix */}
                                <div className="absolute inset-x-8 bottom-8 p-10 bg-[#030005]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-3xl">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex gap-2 h-10 items-end">
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ height: [`${30 + Math.random() * 50}%`, `${10 + Math.random() * 90}%`] }}
                                                    transition={{ duration: 0.5 + Math.random(), repeat: Infinity, repeatType: "mirror" }}
                                                    className="w-1.5 bg-[#1a89e5] rounded-full"
                                                />
                                            ))}
                                        </div>
                                        <div className="px-5 py-1.5 bg-[#1a89e5] text-white font-black text-[10px] uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(26,137,229,0.5)] animate-pulse">
                                            CORE ACTIVE
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-2">NEURAL BACKBONE</h4>
                                    <p className="text-[10px] text-gray-500 font-extrabold uppercase tracking-[0.4em]">Grid Monitoring: TN-REGION-044</p>
                                </div>
                            </div>

                            {/* Decorative Neon Border Flare - Blue Focus */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-[#1a89e5]/30 to-blue-500/0 group-hover:via-[#1a89e5]/60 transition-all duration-700 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* CONTENT SIDE */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="text-[#1a89e5] font-black uppercase tracking-[0.5em] text-[11px] mb-10 drop-shadow-[0_0_10px_rgba(26,137,229,0.5)]">
                                UNWAVERING DIGITAL SOVEREIGNTY
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9] uppercase italic">
                                BULLETPROOF <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a89e5] via-white to-pink-500">DIGITAL LIFE.</span>
                            </h2>
                            <p className="text-xl text-gray-500 font-semibold mb-16 leading-relaxed max-w-xl italic border-l-4 border-blue-600 pl-10">
                                We've engineered the matrix of Tamil Nadu's digital future. Hyper-redundant fiber routes and sovereign command centers ensure your world never goes dark.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-10">
                            {valueProps.map((prop, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${prop.gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-115 group-hover:rotate-12 transition-all`}>
                                            <prop.icon size={30} />
                                        </div>
                                        <h4 className="text-white font-black text-lg tracking-tighter uppercase italic group-hover:text-blue-400 transition-colors">{prop.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-400 font-bold leading-relaxed border-t border-white/5 pt-4">{prop.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OTTSection;
