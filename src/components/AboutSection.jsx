/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// DESIGN: NEON-GRADIENT HYPER-DARK
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Rocket, CheckCircle2, Tv, Wifi, Users, Globe } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section className="py-32 bg-[#030005] relative overflow-hidden">

            {/* AMBIENT BACKGROUND GLOWS */}
            <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER: MASSIVE & BOLD */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-black uppercase tracking-[0.5em] mb-10 shadow-[0_0_20px_rgba(26,137,229,0.2)]">
                            Established June 2012
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase italic mb-8">
                            WHO RUN <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a89e5] via-white to-pink-500 drop-shadow-[0_0_15px_rgba(26,137,229,0.4)]">THE SHOW</span>
                        </h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-[#1a89e5] to-pink-500 rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <p className="text-2xl text-gray-300 font-bold leading-relaxed italic border-l-4 border-blue-600 pl-10 select-none">
                            Thamizhaga Cable TV Communication Ltd (TCCL) is one of the largest Cable distribution companies with a strong emphasis on quality of service and content
                        </p>
                    </motion.div>
                </div>

                {/* MAIN CONTENT GRID */}
                <div className="grid lg:grid-cols-12 gap-16 mb-32">

                    {/* THE STORY (LEFT) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-400 leading-relaxed font-semibold">
                                This has enabled us to cater to millions of subscribers spread across Tamil Nadu over the years. With a fiber optic backbone across its networks and state-of-the-art distribution setups, we bring the digital age through Cable, transforming the way viewers receive information and entertainment.
                            </p>
                            <div className="h-px bg-white/5 my-10 prose prose-invert max-w-none" />
                            <p className="text-lg text-gray-400 leading-relaxed font-semibold">
                                Thamizhaga Cable TV Communication Pvt. Ltd. is a leading Multi System Operator (MSO) in Chennai. Started operations in December 2012, we aim to serve the entire state of Tamil Nadu with the best quality Cable Television experience.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed font-semibold">
                                TCCL's success can be attributed to the experience of the members of the Tamil Nadu Cable TV Operators Welfare Association (TCOA), who are veterans in the field of cable TV technology. TCOA members are the pioneers who conceived the concept of MSO.
                            </p>
                        </div>

                        {/* INFRASTRUCTURE CARDS */}
                        <div className="grid sm:grid-cols-3 gap-6 pt-10">
                            {[
                                { label: 'Network', value: '8500 KM+', desc: 'Fiber Optic', icon: Globe },
                                { label: 'Partners', value: '8000+', desc: 'Cable Operators', icon: Users },
                                { label: 'Channels', value: '500+', desc: 'HD Quality', icon: Tv }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
                                    <item.icon size={24} className="text-[#1a89e5] mb-6 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-black text-white italic tracking-tighter mb-1">{item.value}</div>
                                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* THE STATS (RIGHT) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <div className="relative p-12 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl shadow-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="relative z-10 space-y-12">
                                <div>
                                    <div className="text-[#1a89e5] font-black text-[11px] uppercase tracking-[0.4em] mb-4 shadow-blue-500/20 drop-shadow-lg">Scale of Presence</div>
                                    <div className="text-6xl font-black text-white tracking-tighter italic">30,00,000+</div>
                                    <div className="text-gray-400 font-bold uppercase tracking-widest mt-2">Active Households Served</div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="text-white font-black text-sm uppercase tracking-widest italic">Tamil Nadu Coverage</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-pink-600/20 flex items-center justify-center text-pink-400">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="text-white font-black text-sm uppercase tracking-widest italic">Andhra Pradesh Hub</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="text-white font-black text-sm uppercase tracking-widest italic">Karnataka Expansion</span>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10">
                                    <p className="text-gray-500 text-sm italic font-bold leading-relaxed">
                                        TCCL is now proliferated to the entire state of Tamil Nadu, Andhra Pradesh, and Karnataka with a State-of-the-Art Digital Head End.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FUTURE VISION SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[5rem] overflow-hidden bg-gradient-to-br from-[#050510] to-[#030005] border border-white/10 p-12 lg:p-24 shadow-3xl group"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a89e5]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#1a89e5]/20 transition-all duration-1000" />

                    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-5 py-2 bg-pink-600/20 border border-pink-500/30 rounded-full text-pink-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10">
                                The Way Forward
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase italic mb-10">
                                BEYOND THE <br />
                                <span className="text-[#1a89e5]">HORIZON</span>
                            </h3>
                            <p className="text-lg text-gray-400 font-semibold leading-relaxed mb-12 italic border-l-2 border-pink-500 pl-8">
                                TCCL is planning to provide its customers with a cost-effective Set Top Box (STB),
enabling access to Value-Added Services such as Video on Demand, Gaming, and E-commerce                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="flex gap-4 items-center">
                                    <Award className="text-blue-500" size={24} />
                                    <span className="text-white font-black text-xs uppercase tracking-widest italic">HD & 3D Experience</span>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Rocket className="text-pink-500" size={24} />
                                    <span className="text-white font-black text-xs uppercase tracking-widest italic">Support for Software Upgrades</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#1a89e5]/20 blur-[100px] rounded-full group-hover:bg-[#1a89e5]/40 transition-all duration-1000" />
                            <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl aspect-[16/10] transform group-hover:scale-105 transition-all duration-1000">
                                <img
                                    src="/assets/Landing page 3.jpg"
                                    alt="Future Content"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030005]/90 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* SERVICES OFFERED STRIP */}
                <div className="mt-40 grid md:grid-cols-2 gap-10">
                    <div className="flex items-center gap-10 p-12 rounded-[3.5rem] bg-gradient-to-r from-blue-600/20 to-transparent border border-white/10 backdrop-blur-2xl">
                        <Wifi size={48} className="text-blue-500" />
                        <div>
                            <h4 className="text-white font-black text-2xl tracking-tighter uppercase italic">Broadband Service</h4>
                            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mt-2">High Speed Fiber Backbone</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-10 p-12 rounded-[3.5rem] bg-gradient-to-r from-pink-600/20 to-transparent border border-white/10 backdrop-blur-2xl">
                        <Tv size={48} className="text-pink-500" />
                        <div>
                            <h4 className="text-white font-black text-2xl tracking-tighter uppercase italic">Digital Cable TV</h4>
                            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mt-2">500+ Digital High Quality Channels</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
