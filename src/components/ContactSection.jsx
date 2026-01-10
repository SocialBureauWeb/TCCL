/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// DESIGN: NEON-GRADIENT HYPER-DARK
// STRUCTURE: REPLICATED FROM TCCL-SELF.VERCEL.APP (WITH DARK THEME)
*/

import React from 'react';
import { Link } from "react-router-dom";
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    HeadphonesIcon,
    ArrowRight,
    Sparkles
} from "lucide-react";
import { motion } from 'framer-motion';

export const ContactSection = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
    ];

    return (
        <footer className="bg-[#030005] text-white overflow-hidden relative">
            {/* 2. MAIN FOOTER GRID (3 COLUMNS) */}
            <div className="max-w-7xl mx-auto px-6 py-24 border-y border-white/5 relative">
                {/* Decorative Neon Auras */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/5 blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 relative z-10">

                    {/* Column 1: Contact Details */}
                    <div>
                        <div className="space-y-8">
                            <div className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                                    <MapPin size={22} />
                                </div>
                                <p className="text-gray-400 text-sm font-bold leading-relaxed uppercase tracking-wider group-hover:text-white transition-colors">
                                    9A, 5, Club Rd, M.S. Nagar, Mukta Gardens, Chetpet, Chennai – 600031
                                </p>
                            </div>
                            <div className="flex gap-5 group items-center">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-xl">
                                    <Mail size={22} />
                                </div>
                                <a href="mailto:customercare@tccl.co.in" className="text-gray-400 font-black text-sm uppercase tracking-widest group-hover:text-pink-400 transition-colors">
                                    customercare@tccl.co.in
                                </a>
                            </div>
                            <div className="flex gap-5 group items-center">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                                    <Phone size={22} />
                                </div>
                                <div className="flex flex-col">
                                    <a href="tel:04440606666" className="text-gray-400 font-black text-sm uppercase tracking-widest group-hover:text-blue-400 transition-colors">044-4060-6666</a>
                                    <a href="tel:18001029845" className="text-gray-400 font-black text-xs uppercase tracking-widest mt-1 opacity-50">1800-102-9845</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-black text-[11px] uppercase tracking-[0.5em] mb-12 italic border-l-2 border-blue-600 pl-6">Navigation</h4>
                        <ul className="grid grid-cols-1 gap-6">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-500 hover:text-white font-black text-[13px] uppercase tracking-[0.3em] transition-all flex items-center gap-4 group"
                                    >
                                        <ChevronRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all font-bold" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <br />
                <img
                    src="/assets/footer.jpg"
                    alt="footer-img"
                    className="h-16 transition-transform group-hover:scale-105"
                />
            </div>

        </footer>
    );
};

export default ContactSection;
