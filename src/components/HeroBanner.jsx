/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// DESIGN: NEON-GRADIENT HYPER-DARK
*/

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, ShieldCheck, Wifi, Tv, Play, Sparkles } from 'lucide-react';

export default function HeroBanner() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030005]">

            {/* HYPER-VIBRANT BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/Landing page 3.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-110"
                />

                {/* Layered Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0033] via-[#030005]/95 to-[#000a1a] z-10" />

                {/* Pulsating Neon Auras - TCCL Blue & Pinkish Violet */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#d946ef]/20 rounded-full blur-[160px] z-10"
                />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#1a89e5]/30 rounded-full blur-[160px] z-10"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 w-full mt-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT CONTENT: HYPER-STYLIZED */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-black uppercase tracking-[0.4em] mb-10 shadow-[0_0_30px_rgba(26,137,229,0.2)]"
                        >
                            <Sparkles size={14} className="animate-spin-slow text-blue-400" />
                            Tamil Nadu's Digital Pride
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tighter">
                            THE POWER OF <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a89e5] via-fuchsia-400 to-blue-600 drop-shadow-[0_0_15px_rgba(26,137,229,0.5)] uppercase">TCCL CONNECT.</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl font-semibold border-l-4 border-blue-600/50 pl-6 italic">
                            Experience the fusion of Hyper-Fiber speeds and 4K Digital TV. High-performance networking redesigned for the future of entertainment.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <motion.a
                                href="/channelPackage"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(26,137,229,0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 bg-gradient-to-r from-blue-600 via-[#1a89e5] to-blue-700 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl"
                            >
                                Get Started <ChevronRight size={20} />
                            </motion.a>
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 bg-white/5 backdrop-blur-3xl border border-white/10 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all"
                            >
                                Contact Us
                            </motion.a>
                        </div>

                        {/* PREMIUM BADGES */}
                        <div className="flex justify-center gap-16 mt-20 pt-12 border-t border-white/10">
                            {[
                                { count: '3M+', label: 'CONNECTED', icon: Zap, color: 'blue' },
                                { count: '500+', label: 'COMMAND', icon: Tv, color: 'pink' },
                                { count: '100+', label: 'CENTERS', icon: ShieldCheck, color: 'blue' }
                            ].map((stat, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="flex items-center gap-2 mb-2">
                                        <stat.icon size={16} className={stat.color === 'blue' ? "text-blue-500" : "text-pink-500"} />
                                        <div className="text-3xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-all">{stat.count}</div>
                                    </div>
                                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT: FLOATING INTERACTIVE GRID */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-6 relative">
                        {[
                            { icon: Tv, title: 'Cable TV', gradient: 'from-[#1a89e5] to-blue-700' },
                            { icon: Wifi, title: 'Fiber Net', gradient: 'from-pink-500 to-fuchsia-600' },
                            { icon: ShieldCheck, title: 'Security', gradient: 'from-blue-600 to-[#1a89e5]' },
                            { icon: Play, title: 'Direct', gradient: 'from-fuchsia-600 to-pink-500' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + idx * 0.1, duration: 0.8 }}
                                whileHover={{ y: -15, scale: 1.05 }}
                                className="relative rounded-[3rem] p-8 aspect-square bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-2xl flex flex-col items-center justify-center text-center group transition-all"
                            >
                                <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-2xl group-hover:shadow-[0_0_30px_rgba(26,137,229,0.3)] transition-all`}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-white font-black text-lg uppercase tracking-tight">{item.title}</h3>
                                <div className="absolute inset-0 rounded-[3rem] border-2 border-transparent group-hover:border-blue-500/50 transition-all" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* DECORATIVE NEON BAR */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#1a89e5] via-pink-500 to-transparent opacity-50" />
        </section>
    );
}

// Global styles for hero animations
const style = document.createElement('style');
style.textContent = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;
document.head.appendChild(style);
