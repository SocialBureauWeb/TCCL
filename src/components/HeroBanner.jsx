
// // // // // // // import React from 'react';
// // // // // // // import { motion } from 'framer-motion';
// // // // // // // import { ChevronRight, Zap, ShieldCheck, Wifi, Tv, Play, Sparkles, Users, Headphones } from 'lucide-react';

// // // // // // // const hero = "/assets/Landing page 5.jpg";

// // // // // // // const container = {
// // // // // // //   hidden: {},
// // // // // // //   show: {
// // // // // // //     transition: {
// // // // // // //       staggerChildren: 0.18,
// // // // // // //     },
// // // // // // //   },
// // // // // // // };

// // // // // // // const line = {
// // // // // // //   hidden: {
// // // // // // //     opacity: 0,
// // // // // // //     y: 30,
// // // // // // //     filter: "blur(6px)",
// // // // // // //   },
// // // // // // //   show: {
// // // // // // //     opacity: 1,
// // // // // // //     y: 0,
// // // // // // //     filter: "blur(0px)",
// // // // // // //     transition: {
// // // // // // //       duration: 0.6,
// // // // // // //       ease: "easeOut",
// // // // // // //     },
// // // // // // //   },
// // // // // // // };

// // // // // // // const stats = [
// // // // // // //   { number: "3M+", label: "Happy Households", icon: Users, color: "from-blue-500 to-blue-600" },
// // // // // // //   { number: "500+", label: "TV Channels", icon: Tv, color: "from-green-500 to-green-600" },
// // // // // // //   { number: "8500+", label: "KM Fiber Network", icon: Wifi, color: "from-purple-500 to-purple-600" },
// // // // // // //   { number: "8000+", label: "Operator Partners", icon: Users, color: "from-blue-500 to-blue-600" },
// // // // // // //   { number: "24/7", label: "Customer Support", icon: Headphones, color: "from-blue-500 to-blue-600" },
// // // // // // //   { number: "99.9%", label: "Service Uptime", icon: ShieldCheck, color: "from-teal-500 to-teal-600" },
// // // // // // // ];

// // // // // // // export default function HeroBanner() {
// // // // // // //   return (
// // // // // // //     <section className="relative min-h-[90vh] pt-24 pb-20 px-6 overflow-hidden">
// // // // // // //       {/* Background - Image for Desktop, Gradient for Mobile */}
// // // // // // //       <div className="absolute inset-0 z-0">
// // // // // // //         {/* Desktop: Image Background */}
// // // // // // //         <div className="hidden md:block absolute inset-0">
// // // // // // //           <img
// // // // // // //             src={hero}
// // // // // // //             alt="Hero Background"
// // // // // // //             className="w-full h-full object-cover"
// // // // // // //           />
// // // // // // //           <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/95"></div>
// // // // // // //         </div>

// // // // // // //         {/* Mobile: Gradient Background */}
// // // // // // //         <div className="md:hidden absolute inset-0 bg-gradient-to-br from-[#f316b4] via-[#2b0126] to-[#0f0620]">
// // // // // // //           {/* Animated Gradient Orbs for Mobile */}
// // // // // // //           <motion.div
// // // // // // //             animate={{
// // // // // // //               opacity: [0.4, 0.7, 0.4],
// // // // // // //               scale: [1, 1.1, 1],
// // // // // // //             }}
// // // // // // //             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// // // // // // //             className="absolute top-[-20%] left-[-10%] w-48 h-48 bg-[#5a3a8a]/40 rounded-full blur-3xl"
// // // // // // //           />
// // // // // // //           <motion.div
// // // // // // //             animate={{
// // // // // // //               opacity: [0.3, 0.6, 0.3],
// // // // // // //               scale: [1.1, 1, 1.1],
// // // // // // //             }}
// // // // // // //             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
// // // // // // //             className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-[#3d5ba8]/35 rounded-full blur-3xl"
// // // // // // //           />
// // // // // // //           <motion.div
// // // // // // //             animate={{
// // // // // // //               opacity: [0.25, 0.5, 0.25],
// // // // // // //               scale: [1, 1.15, 1],
// // // // // // //             }}
// // // // // // //             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
// // // // // // //             className="absolute top-1/2 left-1/4 w-36 h-36 bg-[#1a0033]/50 rounded-full blur-3xl"
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="relative z-10 max-w-7xl mx-auto">
// // // // // // //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// // // // // // //           <motion.div
// // // // // // //             variants={container}
// // // // // // //             initial="hidden"
// // // // // // //             animate="show"
// // // // // // //           >
// // // // // // //             {/* Badge */}
// // // // // // //             <motion.div
// // // // // // //               variants={line}
// // // // // // //               className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
// // // // // // //             >
// // // // // // //               <span className="text-white text-sm font-semibold">
// // // // // // //                 SINCE 2012 • LEADING MSO
// // // // // // //               </span>
// // // // // // //             </motion.div>

// // // // // // //             {/* Heading line 1 */}
// // // // // // //             <motion.h1
// // // // // // //               variants={line}
// // // // // // //               className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white leading-tight"
// // // // // // //             >
// // // // // // //               Powering <span className="text-blue-500">Digital</span> Dreams,
// // // // // // //             </motion.h1>

// // // // // // //             {/* Heading line 2 */}
// // // // // // //             <motion.h1
// // // // // // //               variants={line}
// // // // // // //               className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
// // // // // // //             >
// // // // // // //               Connecting <span className="text-blue-500">Millions</span>
// // // // // // //             </motion.h1>

// // // // // // //             {/* Paragraph */}
// // // // // // //             <motion.p
// // // // // // //               variants={line}
// // // // // // //               className="text-xl md:text-2xl max-w-2xl mb-10 text-white/95 leading-relaxed"
// // // // // // //             >
// // // // // // //               Thamizhaga Cable TV Communication Ltd – Transforming entertainment
// // // // // // //               experiences across Tamil Nadu with cutting-edge technology and
// // // // // // //               unwavering commitment.
// // // // // // //             </motion.p>
// // // // // // //           </motion.div>

// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, scale: 0.9 }}
// // // // // // //             animate={{ opacity: 1, scale: 1 }}
// // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // //             className="relative"
// // // // // // //           >
// // // // // // //             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
// // // // // // //               <div className="grid grid-cols-2 gap-4">
// // // // // // //                 {stats.slice(0, 4).map((stat, index) => {
// // // // // // //                   const Icon = stat.icon;

// // // // // // //                   return (
// // // // // // //                     <motion.div
// // // // // // //                       key={index}
// // // // // // //                       whileHover={{ y: -6, scale: 1.04 }}
// // // // // // //                       transition={{ type: "spring", stiffness: 260, damping: 18 }}
// // // // // // //                       className="relative bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 cursor-pointer overflow-hidden"
// // // // // // //                     >
// // // // // // //                       {/* Glow */}
// // // // // // //                       <motion.div
// // // // // // //                         className="absolute inset-0 rounded-xl"
// // // // // // //                         initial={{ opacity: 0 }}
// // // // // // //                         whileHover={{ opacity: 1 }}
// // // // // // //                         transition={{ duration: 0.3 }}
// // // // // // //                         style={{
// // // // // // //                           background:
// // // // // // //                             "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 65%)",
// // // // // // //                         }}
// // // // // // //                       />

// // // // // // //                       <div className="relative flex flex-col items-center text-center z-10">
// // // // // // //                         {/* Icon pop */}
// // // // // // //                         <motion.div
// // // // // // //                           whileHover={{ scale: 1.15 }}
// // // // // // //                           transition={{ duration: 0.25 }}
// // // // // // //                         >
// // // // // // //                           <Icon className="h-8 w-8 text-white mb-3" />
// // // // // // //                         </motion.div>

// // // // // // //                         <div className="text-3xl font-bold text-white mb-1">
// // // // // // //                           {stat.number}
// // // // // // //                         </div>
// // // // // // //                         <div className="text-white font-medium text-sm">
// // // // // // //                           {stat.label}
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </motion.div>
// // // // // // //                   );
// // // // // // //                 })}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // const slides = [
// // // // // //   { id: 1, src: "/assets/1.png" },
// // // // // //   { id: 2, src: "/assets/3.png" },
// // // // // //   { id: 3, src: "/assets/tccl2.png" },
// // // // // //   { id: 4, src: "/assets/paytm2.png" },
// // // // // // ];

// // // // // // export default function HeroCarousel() {
// // // // // //   const [index, setIndex] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     const interval = setInterval(() => {
// // // // // //       setIndex((prev) => (prev + 1) % slides.length);
// // // // // //     }, 6500);
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0f1220] via-[#0b0b12] to-[#050510]">

// // // // // //       {/* HERO CONTAINER */}
// // // // // //       <div
// // // // // //         className="
// // // // // //           relative z-10
// // // // // //           w-full
// // // // // //           h-[65vh]
// // // // // //           sm:h-[70vh]
// // // // // //           md:h-[75vh]
// // // // // //           flex items-center justify-center
// // // // // //           px-4
// // // // // //         "
// // // // // //       >
// // // // // //         <AnimatePresence mode="wait">
// // // // // //           <motion.div
// // // // // //             key={slides[index].id}
// // // // // //             initial={{ opacity: 0, scale: 1.015 }}
// // // // // //             animate={{ opacity: 1, scale: 1 }}
// // // // // //             exit={{ opacity: 0, scale: 0.985 }}
// // // // // //             transition={{ duration: 0.7, ease: "easeOut" }}
// // // // // //             className="absolute inset-0 flex items-center justify-center"
// // // // // //           >
// // // // // //             {/* IMAGE – NO CROP */}
// // // // // //             <motion.img
// // // // // //               src={slides[index].src}
// // // // // //               alt=""
// // // // // //               initial={{ opacity: 0 }}
// // // // // //               animate={{ opacity: 1 }}
// // // // // //               transition={{ duration: 0.5 }}
// // // // // //               className="w-auto h-[100vh] mx-auto
// // // // // //                 // h-full
// // // // // //                 // sm:max-h-[56vh]
// // // // // //                 // md:max-h-[60vh]
// // // // // //                 // max-w-auto
// // // // // //                 // object-contain
// // // // // //                 // drop-shadow-[0_18px_45px_rgba(0,0,0,0.55)]
// // // // // //               "
// // // // // //             />
// // // // // //           </motion.div>
// // // // // //         </AnimatePresence>
// // // // // //       </div>

// // // // // //       {/* SOFT BOTTOM FADE — BLENDS INTO NEXT SECTION */}
// // // // // //       <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#050510]" />

// // // // // //       {/* NAV DOTS */}
// // // // // //       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
// // // // // //         {slides.map((_, i) => (
// // // // // //           <button
// // // // // //             key={i}
// // // // // //             onClick={() => setIndex(i)}
// // // // // //             className={`h-2.5 w-2.5 rounded-full transition-all ${index === i
// // // // // //               ? "bg-white scale-125"
// // // // // //               : "bg-white/40"
// // // // // //               }`}
// // // // // //           />
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }



// // // // // import React, { useState, useEffect } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import { Wifi, Tv, ShieldCheck, Users, Headphones } from "lucide-react";

// // // // // /* -------------------- BACKGROUND SLIDES -------------------- */
// // // // // const slides = [
// // // // //   { id: 0, src: "/assets/Landing page 5.jpg" }, // FIRST = ORIGINAL HERO
// // // // //   { id: 1, src: "/assets/Landing page 14.jpg" },
// // // // //   { id: 2, src: "/assets/3.png" },
// // // // //   { id: 3, src: "/assets/tccl2.png" },
// // // // //   { id: 4, src: "/assets/Landing page 13.jpg" },
// // // // // ];

// // // // // /* -------------------- TEXT ANIMATIONS -------------------- */
// // // // // const container = {
// // // // //   hidden: {},
// // // // //   show: { transition: { staggerChildren: 0.18 } },
// // // // // };

// // // // // const line = {
// // // // //   hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
// // // // //   show: {
// // // // //     opacity: 1,
// // // // //     y: 0,
// // // // //     filter: "blur(0px)",
// // // // //     transition: { duration: 0.6, ease: "easeOut" },
// // // // //   },
// // // // // };

// // // // // /* -------------------- STATS -------------------- */
// // // // // const stats = [
// // // // //   { number: "3M+", label: "Happy Households", icon: Users },
// // // // //   { number: "500+", label: "TV Channels", icon: Tv },
// // // // //   { number: "8500+", label: "KM Fiber Network", icon: Wifi },
// // // // //   { number: "24/7", label: "Customer Support", icon: Headphones },
// // // // // ];

// // // // // /* ========================================================== */

// // // // // export default function HeroBannerWithCarousel() {
// // // // //   const [index, setIndex] = useState(0);

// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(() => {
// // // // //       setIndex((prev) => (prev + 1) % slides.length);
// // // // //     }, 6500);
// // // // //     return () => clearInterval(timer);
// // // // //   }, []);

// // // // //   return (
// // // // //     <section className="relative h-[56.25vw] md:h-screen w-full overflow-hidden bg-[#050510]">

// // // // //       {/* ================= BACKGROUND CAROUSEL ================= */}
// // // // //       <div className="absolute inset-0 z-0 bg-[#050510]">
// // // // //         <AnimatePresence mode="wait">
// // // // //           <motion.div
// // // // //             key={slides[index].id}
// // // // //             initial={{ opacity: 0, scale: 1.05 }}
// // // // //             animate={{ opacity: 1, scale: 1 }}
// // // // //             exit={{ opacity: 0, scale: 0.97 }}
// // // // //             transition={{ duration: 1.1, ease: "easeOut" }}
// // // // //             className="absolute inset-0"
// // // // //           >
// // // // //             {/* Background Layer - Clean dark depth instead of blur for clarity */}
// // // // //             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f20] to-[#050510] md:hidden" />

// // // // //             {/* MAIN IMAGE: Full visibility on mobile with subtle padding, object-cover for desktop cinematic feel */}
// // // // //             <img
// // // // //               src={slides[index].src}
// // // // //               alt=""
// // // // //               className="absolute inset-0 w-full h-full object-contain md:object-cover object-center z-10 p-2 md:p-0"
// // // // //             />

// // // // //             {/* Cinematic overlay - Sophisticated gradient */}
// // // // //             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050510] md:from-black/70 md:via-black/30 md:to-[#050510] z-20" />
// // // // //           </motion.div>
// // // // //         </AnimatePresence>
// // // // //       </div>

// // // // //       {/* ================= FOREGROUND CONTENT ================= */}
// // // // //       <div className="relative z-30 max-w-7xl mx-auto 
// // // // //   px-4 pt-4 pb-4 
// // // // //   md:px-4 md:pt-20 md:pb-10 
// // // // //   lg:px-6 lg:pt-28 lg:pb-20">
// // // // //         <div className="grid lg:grid-cols-2 gap-14 items-center">

// // // // //           {/* LEFT CONTENT - Stats Box (Hidden on mobile for clarity and better image visibility) */}
// // // // //           {/* <motion.div
// // // // //             variants={container}
// // // // //             initial="hidden"
// // // // //             animate="show"
// // // // //             className="hidden md:block"
// // // // //           >
// // // // //             <div className="grid grid-cols-2 gap-3 lg:gap-4">
// // // // //               {stats.map((stat, i) => {
// // // // //                 const Icon = stat.icon;
// // // // //                 return (
// // // // //                   <div
// // // // //                     key={i}
// // // // //                     className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 text-center"
// // // // //                   >
// // // // //                     <Icon className="h-8 w-8 text-white mx-auto mb-3" />
// // // // //                     <div className="text-3xl font-bold text-white">
// // // // //                       {stat.number}
// // // // //                     </div>
// // // // //                     <div className="text-sm text-white/80">
// // // // //                       {stat.label}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 );
// // // // //               })}
// // // // //             </div>
// // // // //           </motion.div> */}

// // // // //           {/* RIGHT STATS */}
// // // // //           {/* <motion.div
// // // // //             initial={{ opacity: 0, scale: 0.95 }}
// // // // //             animate={{ opacity: 1, scale: 1 }}
// // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // //             className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
// // // // //           >
// // // // //             {/* <div className="grid grid-cols-2 gap-4">
// // // // //               {stats.map((stat, i) => {
// // // // //                 const Icon = stat.icon;
// // // // //                 return (
// // // // //                   <div
// // // // //                     key={i}
// // // // //                     className="bg-white/10 rounded-xl p-5 border border-white/20 text-center"
// // // // //                   >
// // // // //                     <Icon className="h-8 w-8 text-white mx-auto mb-3" />
// // // // //                     <div className="text-3xl font-bold text-white">
// // // // //                       {stat.number}
// // // // //                     </div>
// // // // //                     <div className="text-sm text-white/80">
// // // // //                       {stat.label}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 );
// // // // //               })}
// // // // //             </div> */}
// // // // //           {/* </motion.div> */}

// // // // //         </div>
// // // // //       </div>

// // // // //       {/* ================= DOT NAV ================= */}
// // // // //       <div className="absolute 
// // // // //   bottom-4 md:bottom-6 
// // // // //   left-1/2 -translate-x-1/2 
// // // // //   flex gap-3 z-40">
// // // // //         {slides.map((_, i) => (
// // // // //           <button
// // // // //             key={i}
// // // // //             onClick={() => setIndex(i)}
// // // // //             className={`h-2.5 w-2.5 rounded-full transition-all ${index === i ? "bg-white scale-125" : "bg-white/40"
// // // // //               }`}
// // // // //           />
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* SOFT BLEND INTO NEXT SECTION */}
// // // // //       <div className="absolute bottom-0 left-0 w-full h-4 md:h-12 lg:h-24 bg-gradient-to-b from-transparent to-[#050510]" />
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // import React, { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { Wifi, Tv, ShieldCheck, Users, Headphones } from "lucide-react";

// // // // /* -------------------- BACKGROUND SLIDES -------------------- */
// // // // const slides = [
// // // //   { id: 0, src: "/assets/Landing page 5.jpg" },
// // // //   { id: 1, src: "/assets/Landing page 14.jpg" },
// // // //   { id: 2, src: "/assets/3.png" },
// // // //   { id: 3, src: "/assets/tccl2.png" },
// // // //   { id: 4, src: "/assets/Landing page 13.jpg" },
// // // // ];

// // // // /* -------------------- TEXT ANIMATIONS -------------------- */
// // // // const container = {
// // // //   hidden: {},
// // // //   show: { transition: { staggerChildren: 0.18 } },
// // // // };

// // // // const line = {
// // // //   hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
// // // //   show: {
// // // //     opacity: 1,
// // // //     y: 0,
// // // //     filter: "blur(0px)",
// // // //     transition: { duration: 0.6, ease: "easeOut" },
// // // //   },
// // // // };

// // // // /* -------------------- STATS -------------------- */
// // // // const stats = [
// // // //   { number: "3M+", label: "Happy Households", icon: Users },
// // // //   { number: "500+", label: "TV Channels", icon: Tv },
// // // //   { number: "8500+", label: "KM Fiber Network", icon: Wifi },
// // // //   { number: "24/7", label: "Customer Support", icon: Headphones },
// // // // ];

// // // // /* ========================================================== */

// // // // export default function HeroBannerWithCarousel() {
// // // //   const [index, setIndex] = useState(0);

// // // //   useEffect(() => {
// // // //     const timer = setInterval(() => {
// // // //       setIndex((prev) => (prev + 1) % slides.length);
// // // //     }, 6500);
// // // //     return () => clearInterval(timer);
// // // //   }, []);

// // // //   return (
// // // //     <section className="relative w-full overflow-hidden bg-[#050510]">

// // // //       {/* ================= BACKGROUND CAROUSEL ================= */}
// // // //       <div className="relative w-full md:h-screen h-auto flex items-center justify-center">
// // // //         <AnimatePresence mode="wait">
// // // //           <motion.div
// // // //             key={slides[index].id}
// // // //             initial={{ opacity: 0, scale: 1.05 }}
// // // //             animate={{ opacity: 1, scale: 1 }}
// // // //             exit={{ opacity: 0, scale: 0.97 }}
// // // //             transition={{ duration: 1.1, ease: "easeOut" }}
// // // //             className="relative w-full h-full"
// // // //           >
// // // //             {/* MAIN IMAGE: Mobile - Full height stretched, Desktop - Object cover */}
// // // //             <img
// // // //               src={slides[index].src}
// // // //               alt=""
// // // //               className="w-full md:h-full md:object-cover md:object-center z-10 h-auto md:absolute md:inset-0"
// // // //             />

// // // //             {/* Cinematic overlay */}
// // // //             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050510] md:from-black/70 md:via-black/30 md:to-[#050510] z-20" />
// // // //           </motion.div>
// // // //         </AnimatePresence>
// // // //       </div>

// // // //       {/* ================= FOREGROUND CONTENT ================= */}
// // // //       <div className="relative z-30 max-w-7xl mx-auto 
// // // //   px-4 pt-4 pb-4 
// // // //   md:px-4 md:pt-20 md:pb-10 
// // // //   lg:px-6 lg:pt-28 lg:pb-20 hidden md:block">
// // // //         <div className="grid lg:grid-cols-2 gap-14 items-center">

// // // //           {/* LEFT CONTENT - Stats Box */}
// // // //           <motion.div
// // // //             variants={container}
// // // //             initial="hidden"
// // // //             animate="show"
// // // //           >
// // // //             <div className="grid grid-cols-2 gap-3 lg:gap-4">
// // // //               {stats.map((stat, i) => {
// // // //                 const Icon = stat.icon;
// // // //                 return (
// // // //                   <div
// // // //                     key={i}
// // // //                     className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 text-center"
// // // //                   >
// // // //                     <Icon className="h-8 w-8 text-white mx-auto mb-3" />
// // // //                     <div className="text-3xl font-bold text-white">
// // // //                       {stat.number}
// // // //                     </div>
// // // //                     <div className="text-sm text-white/80">
// // // //                       {stat.label}
// // // //                     </div>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //             </div>
// // // //           </motion.div>

// // // //         </div>
// // // //       </div>

// // // //       {/* ================= DOT NAV - CENTER ALIGNED ================= */}
// // // //       <div className="absolute 
// // // //   bottom-4 md:bottom-6 
// // // //   left-1/2 -translate-x-1/2 
// // // //   flex gap-3 z-40">
// // // //         {slides.map((_, i) => (
// // // //           <button
// // // //             key={i}
// // // //             onClick={() => setIndex(i)}
// // // //             className={`h-2.5 w-2.5 rounded-full transition-all ${index === i ? "bg-white scale-125" : "bg-white/40"
// // // //               }`}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       {/* SOFT BLEND INTO NEXT SECTION */}
// // // //       <div className="relative w-full h-4 md:h-12 lg:h-24 bg-gradient-to-b from-transparent to-[#050510]" />
// // // //     </section>
// // // //   );
// // // // }

// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Wifi, Tv, ShieldCheck, Users, Headphones } from "lucide-react";

// // // /* -------------------- BACKGROUND SLIDES -------------------- */
// // // const slides = [
// // //   { id: 0, src: "/assets/Landing page 5.jpg" },
// // //   { id: 1, src: "/assets/Landing page 14.jpg" },
// // //   { id: 2, src: "/assets/3.png" },
// // //   { id: 3, src: "/assets/tccl2.png" },
// // //   { id: 4, src: "/assets/Landing page 13.jpg" },
// // // ];

// // // /* -------------------- TEXT ANIMATIONS -------------------- */
// // // const container = {
// // //   hidden: {},
// // //   show: { transition: { staggerChildren: 0.18 } },
// // // };

// // // const line = {
// // //   hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
// // //   show: {
// // //     opacity: 1,
// // //     y: 0,
// // //     filter: "blur(0px)",
// // //     transition: { duration: 0.6, ease: "easeOut" },
// // //   },
// // // };

// // // /* -------------------- STATS -------------------- */
// // // const stats = [
// // //   { number: "3M+", label: "Happy Households", icon: Users },
// // //   { number: "500+", label: "TV Channels", icon: Tv },
// // //   { number: "8500+", label: "KM Fiber Network", icon: Wifi },
// // //   { number: "24/7", label: "Customer Support", icon: Headphones },
// // // ];

// // // /* ========================================================== */

// // // export default function HeroBannerWithCarousel() {
// // //   const [index, setIndex] = useState(0);

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setIndex((prev) => (prev + 1) % slides.length);
// // //     }, 6500);
// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   return (
// // //     <section className="relative w-full overflow-hidden bg-[#050510]">

// // //       {/* ================= BACKGROUND CAROUSEL ================= */}
// // //       <div className="relative w-full md:h-screen flex items-center justify-center">
// // //         <AnimatePresence mode="wait">
// // //           <motion.div
// // //             key={slides[index].id}
// // //             initial={{ opacity: 0, scale: 1.05 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             exit={{ opacity: 0, scale: 0.97 }}
// // //             transition={{ duration: 1.1, ease: "easeOut" }}
// // //             className="relative w-full h-full flex items-center justify-center"
// // //           >
// // //             {/* MAIN IMAGE: Mobile - Full width, auto height (no crop), Desktop - Object cover */}
// // //             <img
// // //               src={slides[index].src}
// // //               alt=""
// // //               className="w-full h-full md:absolute md:inset-0 md:object-cover md:object-center z-10 object-contain"
// // //             />

// // //             {/* Cinematic overlay */}
// // //             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050510] md:from-black/70 md:via-black/30 md:to-[#050510] z-20" />
// // //           </motion.div>
// // //         </AnimatePresence>
// // //       </div>

// // //       {/* ================= FOREGROUND CONTENT ================= */}
// // //       <div className="relative z-30 max-w-7xl mx-auto 
// // //   px-4 pt-4 pb-4 
// // //   md:px-4 md:pt-20 md:pb-10 
// // //   lg:px-6 lg:pt-28 lg:pb-20 hidden md:block">
// // //         <div className="grid lg:grid-cols-2 gap-14 items-center">

// // //           {/* LEFT CONTENT - Stats Box */}
// // //           <motion.div
// // //             variants={container}
// // //             initial="hidden"
// // //             animate="show"
// // //           >
// // //             <div className="grid grid-cols-2 gap-3 lg:gap-4">
// // //               {stats.map((stat, i) => {
// // //                 const Icon = stat.icon;
// // //                 return (
// // //                   <div
// // //                     key={i}
// // //                     className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 text-center"
// // //                   >
// // //                     <Icon className="h-8 w-8 text-white mx-auto mb-3" />
// // //                     <div className="text-3xl font-bold text-white">
// // //                       {stat.number}
// // //                     </div>
// // //                     <div className="text-sm text-white/80">
// // //                       {stat.label}
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </motion.div>

// // //         </div>
// // //       </div>

// // //       {/* ================= DOT NAV - CENTER ALIGNED ================= */}
// // //       <div className="relative w-full flex justify-center py-4 z-40">
// // //         <div className="flex gap-3">
// // //           {slides.map((_, i) => (
// // //             <button
// // //               key={i}
// // //               onClick={() => setIndex(i)}
// // //               className={`h-2.5 w-2.5 rounded-full transition-all ${index === i ? "bg-white scale-125" : "bg-white/40"
// // //                 }`}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* SOFT BLEND INTO NEXT SECTION */}
// // //       <div className="relative w-full h-4 md:h-12 lg:h-24 bg-gradient-to-b from-transparent to-[#050510]" />
// // //     </section>
// // //   );
// // // }
// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Wifi, Tv, ShieldCheck, Users, Headphones } from "lucide-react";

// // /* -------------------- BACKGROUND SLIDES -------------------- */
// // const slides = [
// //   { id: 0, src: "/assets/Landing page 5.jpg", mobileSrc: "/assets/Landing page 5.jpg" },
// //   { id: 1, src: "/assets/Landing page 14.jpg", mobileSrc: "/assets/Landing page 14.jpg" },
// //   { id: 2, src: "/assets/3.png", mobileSrc: "/assets/paytmmob.jpg" },
// //   { id: 3, src: "/assets/tccl2.png", mobileSrc: "/assets/wolf.png" },
// //   { id: 4, src: "/assets/Landing page 13.jpg", mobileSrc: "/assets/Landing page 13.jpg" },
// // ];

// // /* -------------------- TEXT ANIMATIONS -------------------- */
// // const container = {
// //   hidden: {},
// //   show: { transition: { staggerChildren: 0.18 } },
// // };

// // const line = {
// //   hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
// //   show: {
// //     opacity: 1,
// //     y: 0,
// //     filter: "blur(0px)",
// //     transition: { duration: 0.6, ease: "easeOut" },
// //   },
// // };

// // /* -------------------- STATS -------------------- */
// // const stats = [
// //   { number: "3M+", label: "Happy Households", icon: Users },
// //   { number: "500+", label: "TV Channels", icon: Tv },
// //   { number: "8500+", label: "KM Fiber Network", icon: Wifi },
// //   { number: "24/7", label: "Customer Support", icon: Headphones },
// // ];

// // /* ========================================================== */

// // export default function HeroBannerWithCarousel() {
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setIndex((prev) => (prev + 1) % slides.length);
// //     }, 6500);
// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <section className="relative w-full overflow-hidden bg-[#050510]">

// //       {/* ================= BACKGROUND CAROUSEL ================= */}
// //       <div className="relative w-full h-[50vh] md:h-screen">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={slides[index].id}
// //             initial={{ opacity: 0, scale: 1.05 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 0.97 }}
// //             transition={{ duration: 1.1, ease: "easeOut" }}
// //             className="absolute inset-0"
// //           >
// //             {/* RESPONSIVE IMAGE: Uses picture tag to serve different images for Mobile vs Desktop */}
// //             <picture className="w-full h-full">
// //               <source media="(max-width: 768px)" srcSet={slides[index].mobileSrc} />
// //               <img
// //                 src={slides[index].src}
// //                 alt=""
// //                 className="w-full h-full object-cover object-center z-10"
// //               />
// //             </picture>

// //             {/* Cinematic overlay */}
// //             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050510] md:from-black/70 md:via-black/30 md:to-[#050510] z-20" />
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>

// //       {/* ================= FOREGROUND CONTENT ================= */}
// //       <div className="relative z-30 max-w-7xl mx-auto 
// //   px-4 pt-4 pb-4 
// //   md:px-4 md:pt-20 md:pb-10 
// //   lg:px-6 lg:pt-28 lg:pb-20 hidden md:block">
// //         <div className="grid lg:grid-cols-2 gap-14 items-center">

// //           {/* LEFT CONTENT - Stats Box */}
// //           <motion.div
// //             variants={container}
// //             initial="hidden"
// //             animate="show"
// //           >
// //             <div className="grid grid-cols-2 gap-3 lg:gap-4">
// //               {stats.map((stat, i) => {
// //                 const Icon = stat.icon;
// //                 return (
// //                   <div
// //                     key={i}
// //                     className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 text-center"
// //                   >
// //                     <Icon className="h-8 w-8 text-white mx-auto mb-3" />
// //                     <div className="text-3xl font-bold text-white">
// //                       {stat.number}
// //                     </div>
// //                     <div className="text-sm text-white/80">
// //                       {stat.label}
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>

// //       {/* ================= DOT NAV - OVER IMAGE ================= */}
// //       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-40">
// //         {slides.map((_, i) => (
// //           <button
// //             key={i}
// //             onClick={() => setIndex(i)}
// //             className={`h-2.5 w-2.5 rounded-full transition-all ${index === i ? "bg-white scale-125" : "bg-white/40"
// //               }`}
// //           />
// //         ))}
// //       </div>

// //       {/* SOFT BLEND INTO NEXT SECTION */}
// //       <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-[#050510] z-30" />
// //     </section>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Wifi, Tv, ShieldCheck, Users, Headphones } from "lucide-react";

// /* -------------------- BACKGROUND SLIDES -------------------- */
// const slides = [
//   { id: 0, src: "/assets/Landing page 5.jpg", mobileSrc: "/assets/Landing page 5.jpg", duration: 8000 },
//   { id: 1, src: "/assets/Landing page 14.jpg", mobileSrc: "/assets/Landing page 14.jpg", duration: 5000 },
//   { id: 2, src: "/assets/3.png", mobileSrc: "/assets/paytmmob.jpg", duration: 5000 },
//   { id: 3, src: "/assets/tccl2.png", mobileSrc: "/assets/wolf.png", duration: 5000 },
//   { id: 4, src: "/assets/Landing page 13.jpg", mobileSrc: "/assets/Landing page 13.jpg", duration: 5000 },
// ];

// /* -------------------- TEXT ANIMATIONS -------------------- */
// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.18 } },
// };

// const line = {
//   hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// /* -------------------- STATS -------------------- */
// const stats = [
//   { number: "3M+", label: "Happy Households", icon: Users },
//   { number: "500+", label: "TV Channels", icon: Tv },
//   { number: "8500+", label: "KM Fiber Network", icon: Wifi },
//   { number: "24/7", label: "Customer Support", icon: Headphones },
// ];

// /* ========================================================== */

// export default function HeroBannerWithCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, slides[index].duration);
//     return () => clearInterval(timer);
//   }, [index]);

//   return (
//     <section className="relative w-full overflow-hidden bg-[#050510]">

//       {/* ================= BACKGROUND CAROUSEL ================= */}
//       <div className="relative w-full h-[50vh] md:h-screen flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slides[index].id}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.97 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             {/* RESPONSIVE IMAGE: Centered with padding to show no cropping */}
//             <picture className="w-full h-full flex items-center justify-center p-2 md:p-0">
//               <source media="(max-width: 768px)" srcSet={slides[index].mobileSrc} />
//               <img
//                 src={slides[index].src}
//                 alt=""
//                 className="w-full h-full object-contain md:object-cover md:object-center z-10"
//               />
//             </picture>

//             {/* Cinematic overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050510] md:from-black/70 md:via-black/30 md:to-[#050510] z-20" />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* ================= FOREGROUND CONTENT ================= */}
//       <div className="relative z-30 max-w-7xl mx-auto 
//   px-4 pt-4 pb-4 
//   md:px-4 md:pt-20 md:pb-10 
//   lg:px-6 lg:pt-28 lg:pb-20 hidden md:block">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* LEFT CONTENT - Stats Box */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//           >
//             <div className="grid grid-cols-2 gap-3 lg:gap-4">
//               {stats.map((stat, i) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div
//                     key={i}
//                     className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 text-center"
//                   >
//                     <Icon className="h-8 w-8 text-white mx-auto mb-3" />
//                     <div className="text-3xl font-bold text-white">
//                       {stat.number}
//                     </div>
//                     <div className="text-sm text-white/80">
//                       {stat.label}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </motion.div>

//         </div>
//       </div>

//       {/* ================= DOT NAV - CENTERED ================= */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-40">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-2.5 w-2.5 rounded-full transition-all ${index === i ? "bg-white scale-125" : "bg-white/40"
//               }`}
//           />
//         ))}
//       </div>

//       {/* SOFT BLEND INTO NEXT SECTION */}
//       <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-[#050510] z-30" />
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------- BACKGROUND SLIDES -------------------- */
const slides = [
  { id: 0, src: "/assets/Landing page 5.jpg", mobileSrc: "/assets/Landing page 5.jpg", duration: 6000, trans: 1.0 },
  { id: 1, src: "/assets/Landing page 14.jpg", mobileSrc: "/assets/post165.png", duration: 3000, trans: 0.5, position: "70% center" },
  { id: 2, src: "/assets/3.png", mobileSrc: "/assets/paytmmob.jpg", duration: 3000, trans: 0.5, position: "70% center" },
  { id: 3, src: "/assets/tccl2.png", mobileSrc: "/assets/wolf.png", duration: 3000, trans: 0.5 },
  { id: 4, src: "/assets/Landing page 13.jpg", mobileSrc: "/assets/Landing page 13.jpg", duration: 3000, trans: 0.5 },
];

export default function HeroBannerWithCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, slides[index].duration);
    return () => clearInterval(timer);
  }, [index, slides[index].duration]);

  return (
    <section className="relative w-full overflow-hidden bg-[#050510]">

      {/* ================= BACKGROUND CAROUSEL ================= */}
      <div className="relative w-full h-[50vh] md:h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: slides[index].trans, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* RESPONSIVE IMAGE: Full coverage */}
            <picture className="w-full h-full">
              <source media="(max-width: 768px)" srcSet={slides[index].mobileSrc} />
              <img
                src={slides[index].src}
                alt=""
                className="w-full h-full object-cover z-10"
                style={{ objectPosition: slides[index].position || "center" }}
              />
            </picture>


            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050510] md:from-black/70 md:via-black/30 md:to-[#050510] z-20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= DOT NAV - RE-CENTERED ================= */}
      <div className="absolute bottom-10 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${index === i ? "bg-white w-8 shadow-[0_0_12px_rgba(255,255,255,0.9)]" : "bg-white/30 w-2 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
