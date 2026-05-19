import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Rocket, CheckCircle2, Tv, Wifi, Users, Globe } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section className="bg-gradient-to-br from-black via-[#030005] to-[#050510] relative overflow-hidden w-full mt-5 sm:py-2 md:py-2">

            {/* AMBIENT BACKGROUND GLOWS */}
            <div className="absolute top-1/2 left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-blue-600/10 via-pink-600/5 to-transparent rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-r from-pink-600/10 via-blue-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* HEADER: CENTERED ON MOBILE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center mb-12 sm:mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-pink-500/5 text-blue-400 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-6 sm:mb-10 shadow-[0_0_20px_rgba(26,137,229,0.2)]">
                            Established in 2012
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight sm:leading-none tracking-tighter uppercase italic mb-4 sm:mb-8">
                            WHO RUN <br />
                            <span className="text-white bg-clip-text drop-shadow-[0_0_15px_rgba(26,137,229,0.4)]">THE SHOW</span>
                        </h2>
                        <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-[#1a89e5] to-pink-500 rounded-full mx-auto lg:mx-0" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative text-center lg:text-left"
                    >
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-bold leading-relaxed italic border-l-0 lg:border-l-4 border-blue-600 px-0 lg:pl-10">
                            Thamizhaga Cable TV Communication Ltd (TCCL) is one of the largest Cable distribution companies with a strong emphasis on quality of service and content
                        </p>
                    </motion.div>
                </div>

                {/* MAIN CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-20 md:mb-32">

                    {/* THE STORY (LEFT) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-6 sm:space-y-8"
                    >
                        <div className="prose prose-invert max-w-none">
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-semibold">
                                This has enabled us to cater to millions of subscribers spread across Tamil Nadu over the years. With a fiber optic backbone across its networks and state-of-the-art distribution setups, we bring the digital age through Cable, transforming the way viewers receive information and entertainment.
                            </p>
                            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6 sm:my-10" />
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-semibold">
                                Thamizhaga Cable TV Communication Pvt. Ltd. is a leading Multi System Operator (MSO) in Chennai. Started operations in 2012, we aim to serve the entire state of Tamil Nadu with the best quality Cable Television experience.
                            </p>
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-semibold">
                                TCCL's success can be attributed to the experience of the members of the Tamil Nadu Cable TV Operators Welfare Association (TCOA), who are veterans in the field of cable TV technology. TCOA members are the pioneers who conceived the concept of MSO.
                            </p>
                        </div>

                        {/* INFRASTRUCTURE CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-10">
                            {[
                                { label: 'Network', value: '8500 KM+', desc: 'Fiber Optic', icon: Globe },
                                { label: 'Partners', value: '8000+', desc: 'Cable Operators', icon: Users },
                                { label: 'Channels', value: '500+', desc: 'HD Quality', icon: Tv }
                            ].map((item, i) => (
                                <div key={i} className="p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/50 transition-all group">
                                    <item.icon size={20} className="sm:size-6 text-[#1a89e5] mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                                    <div className="text-xl sm:text-2xl font-black text-white italic tracking-tighter mb-1">{item.value}</div>
                                    <div className="text-[9px] sm:text-[10px] text-gray-500 font-black uppercase tracking-widest">{item.desc}</div>
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
                        <div className="relative p-8 sm:p-12 rounded-3xl sm:rounded-[4rem] bg-gradient-to-br from-black/50 via-[#0a0a1a] to-black/30 border border-white/10 backdrop-blur-3xl shadow-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="relative z-10 space-y-8 sm:space-y-12">
                                <div>
                                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 font-black text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 drop-shadow-lg">Scale of Presence</div>
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter italic">30,00,000+</div>
                                    <div className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs mt-2">Active Households Served</div>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-800/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                                            <CheckCircle2 size={18} className="sm:size-5" />
                                        </div>
                                        <span className="text-white font-black text-[11px] sm:text-sm uppercase tracking-widest italic">Tamil Nadu Coverage</span>
                                    </div>
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-600/20 to-pink-800/10 flex items-center justify-center text-pink-400 flex-shrink-0">
                                            <CheckCircle2 size={18} className="sm:size-5" />
                                        </div>
                                        <span className="text-white font-black text-[11px] sm:text-sm uppercase tracking-widest italic">Andhra Pradesh Hub</span>
                                    </div>
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-800/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                                            <CheckCircle2 size={18} className="sm:size-5" />
                                        </div>
                                        <span className="text-white font-black text-[11px] sm:text-sm uppercase tracking-widest italic">Karnataka Expansion</span>
                                    </div>
                                </div>

                                <div className="pt-6 sm:pt-8 border-t border-gradient-to-r from-transparent via-white/10 to-transparent">
                                    <p className="text-gray-500 text-[11px] sm:text-sm italic font-bold leading-relaxed">
                                        TCCL has expanded its presence across Tamil Nadu, Andhra Pradesh, and Karnataka with a State-of-the-Art Digital Head End
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
                    className="relative rounded-3xl sm:rounded-5xl lg:rounded-[5rem] overflow-hidden bg-gradient-to-br from-[#050510] to-[#030005] border border-white/10 p-6 sm:p-12 md:p-16 lg:p-24 shadow-3xl group"
                >
                    <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1a89e5]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#1a89e5]/20 transition-all duration-1000" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center relative z-10">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-pink-600/20 border border-pink-500/30 rounded-full text-pink-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-10">
                                The Way Forward
                            </div>
                            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter uppercase italic mb-4 sm:mb-8 lg:mb-10">
                                BEYOND THE <br />
                                <span className="text-[#1a89e5]">HORIZON</span>
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-semibold leading-relaxed mb-6 sm:mb-8 lg:mb-12 italic border-l-0 lg:border-l-2 border-pink-500 px-0 lg:pl-8">
                                TCCL is planning to provide its customers with a cost-effective Set Top Box (STB),
                                enabling access to Value-Added Services such as Video on Demand, Gaming, and E-commerce
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                                <div className="flex gap-3 sm:gap-4 items-center justify-center lg:justify-start">
                                    <Award className="text-blue-500 flex-shrink-0" size={20} />
                                    <span className="text-white font-black text-[10px] sm:text-xs uppercase tracking-widest italic">HD & 3D Experience</span>
                                </div>
                                <div className="flex gap-3 sm:gap-4 items-center justify-center lg:justify-start">
                                    <Rocket className="text-pink-500 flex-shrink-0" size={20} />
                                    <span className="text-white font-black text-[10px] sm:text-xs uppercase tracking-widest italic">Support for Software Upgrades</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#1a89e5]/20 blur-[100px] rounded-full group-hover:bg-[#1a89e5]/40 transition-all duration-1000" />
                            <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl aspect-[16/10] transform group-hover:scale-105 transition-all duration-1000">
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
                <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-10 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl md:rounded-[3.5rem] bg-gradient-to-r from-blue-600/20 to-transparent border border-white/10 backdrop-blur-2xl">
                        <Wifi size={32} className="sm:size-10 md:size-12 text-blue-500 flex-shrink-0" />
                        <div className="text-center sm:text-left">
                            <h4 className="text-lg sm:text-xl md:text-2xl text-white font-black tracking-tighter uppercase italic">Broadband Service</h4>
                            <p className="text-gray-500 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 sm:mt-2">High Speed Fiber Backbone</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-10 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl md:rounded-[3.5rem] bg-gradient-to-r from-pink-600/20 to-transparent border border-white/10 backdrop-blur-2xl">
                        <Tv size={32} className="sm:size-10 md:size-12 text-pink-500 flex-shrink-0" />
                        <div className="text-center sm:text-left">
                            <h4 className="text-lg sm:text-xl md:text-2xl text-white font-black tracking-tighter uppercase italic">Digital Cable TV</h4>
                            <p className="text-gray-500 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 sm:mt-2">500+ Digital High Quality Channels</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;


