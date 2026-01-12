/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// DESIGN: NEON-GRADIENT HYPER-DARK
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Wifi, CheckCircle2, Zap, Shield, Layout, Star, Cable, Headphones, Signal } from 'lucide-react';

const coreServices = [
    {
        title: "DIGITAL CABLE TV",
        desc: "Providing over 500 digital channels with high-quality picture and sound",
        icon: Tv,
        gradient: "from-[#1a89e5] to-blue-700"
    },
    {
        title: "FIBER OPTIC NETWORK",
        desc: "Broadband connectivity supported by an 8500 KM fiber optic network",
        icon: Wifi,
        gradient: "from-pink-500 to-fuchsia-600"
    },
    {
        title: "COMMERCIAL & INSTITUTIONAL SERVICES",
        desc: "Digital cable and broadband connectivity solutions for offices and commercial establishments",
        icon: Layout,
        gradient: "from-blue-600 to-[#1a89e5]"
    }
];

export default function SecondarySection() {
    return (
        <section className="py-32 bg-[#030005] relative overflow-hidden">

            {/* AMBIENT BACKGROUND - TCCL BLUE FOCUS */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER: HYPER-STYLIZED */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-black uppercase tracking-[0.4em] mb-10 shadow-[0_0_20px_rgba(26,137,229,0.15)]">
                            <Star size={14} fill="currentColor" /> Strategic Infrastructure
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase italic">
                            A LEGACY OF <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a89e5] via-white to-pink-500">DIGITAL MASTERCLASS</span>
                        </h2>
                        <p className="text-xl text-gray-500 mx-auto mt-10 font-bold border-t border-white/5 pt-10 uppercase tracking-widest text-center whitespace-nowrap">
                            Elevating South India's digital landscape since 2012
                        </p>

                    </motion.div>
                </div>

                {/* SERVICES GRID */}
                <div className="grid lg:grid-cols-3 gap-10 mb-40">
                    {coreServices.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 1 }}
                            whileHover={{ y: -20, scale: 1.02 }}
                            className="group relative p-8 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl hover:border-blue-500/40 transition-all duration-700 overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-10 group-hover:rotate-12 transition-transform shadow-2xl`}>
                                    <service.icon size={36} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors uppercase italic">{service.title}</h3>
                                <p className="text-base text-gray-400 font-bold leading-relaxed mb-10 group-hover:text-gray-300 transition-colors">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* SPOTLIGHT SECTION: CINEMATIC BRIGHTNESS */}
                <div className="relative rounded-[5rem] overflow-hidden bg-gradient-to-br from-white/5 to-[#050510] border border-white/10 p-12 lg:p-24 shadow-[0_50px_100px_rgba(0,0,0,1)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-pink-600/10 pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">

                        {/* HYPER-BRIGHT VISUAL */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full group-hover:bg-pink-500/30 transition-all duration-1000" />
                            <div className="relative overflow-hidden border border-white/10 shadow-3xl aspect-[4/3] transform group-hover:scale-105 transition-all duration-1000 bg-black">
                                <img
                                    src="/assets/tv4.jpeg"
                                    alt=""
                                    className="absolute inset-0 w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030005]/80 via-transparent to-transparent" />
                            </div>

                        </motion.div>

                        {/* CONTENT */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
                                    SYNCING <span className="text-[#1a89e5] uppercase">EMOTIONS</span> WITH TECHNOLOGY
                                </h3>

                                <p className="text-xl text-gray-400 mb-14 font-semibold leading-relaxed max-w-xl italic border-l-2 border-blue-500 pl-8">
                                    Experience the pinnacle of digital delivery. Unwavering stability, hyper-local pride, and a fiber-backbone built to dominate the future.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-10">
                                    {[
                                        { title: "RELIABLE SIGNAL DELIVERY", icon: Signal, color: 'text-blue-400' },
                                        { title: "HIGH-DEFINITION DIGITAL TRANSMISSION", icon: CheckCircle2, color: 'text-pink-400' },
                                        { title: "CUSTOMER SUPPORT SERVICES", icon: Headphones, color: 'text-blue-400' },
                                        { title: "EXTENSIVE FIBER OPTIC NETWORK", icon: Cable, color: 'text-pink-400' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-5 group/item cursor-pointer">
                                            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} border border-white/10 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-pink-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(26,137,229,0.3)] transition-all`}>
                                                <item.icon size={24} />
                                            </div>
                                            <span className="text-white font-black text-xs uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
