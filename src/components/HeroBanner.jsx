// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sparkles, Tv, Wifi, ShieldCheck, Play, Zap, ChevronRight } from "lucide-react";

// /* -------------------- BACKGROUND SLIDES -------------------- */
// const slides = [
//   { id: 0, src: "/assets/Landing page 5.jpg", mobileSrc: "/assets/Landing page 5.jpg", duration: 6000, trans: 1.0 },
//   { id: 1, src: "/assets/Landing page 14.jpg", mobileSrc: "/assets/post165.png", duration: 3000, trans: 0.5, position: "70% center" },
//   { id: 2, src: "/assets/3.png", mobileSrc: "/assets/paytmmob.jpg", duration: 3000, trans: 0.5, position: "70% center" },
//   { id: 3, src: "/assets/tccl2.png", mobileSrc: "/assets/wolf.png", duration: 3000, trans: 0.5 },
//   { id: 4, src: "/assets/Landing page 13.jpg", mobileSrc: "/assets/Landing page 13.jpg", duration: 3000, trans: 0.5 },
// ];

// export default function HeroBannerWithCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, slides[index].duration);
//     return () => clearInterval(timer);
//   }, [index, slides[index].duration]);

//   return (
//     <section className="relative w-full overflow-hidden bg-[#050510]">

//       {/* ================= BACKGROUND CAROUSEL ================= */}
//       <div className="relative w-full h-[50vh] md:h-screen flex items-center justify-center overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slides[index].id}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.98 }}
//             transition={{ duration: slides[index].trans, ease: "easeInOut" }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             {/* RESPONSIVE IMAGE: Full coverage */}
//             <picture className="w-full h-full">
//               <source media="(max-width: 768px)" srcSet={slides[index].mobileSrc} />
//               <img
//                 src={slides[index].src}
//                 alt=""
//                 className="w-full h-full object-cover z-10"
//                 style={{ objectPosition: slides[index].position || "center" }}
//               />
//             </picture>

//             {/* Cinematic overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050510] md:from-black/70 md:via-black/30 md:to-[#050510] z-20" />
//           </motion.div>
//         </AnimatePresence>

//         {/* ================= CONTENT OVERLAY - ALL SLIDES (DESKTOP ONLY) ================= */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="absolute inset-0 z-30 pointer-events-none hidden md:flex md:items-center md:justify-center"
//         >
//           <div className="flex flex-col justify-center pt-8 pb-40 px-12 max-w-3xl text-center bg-black/30 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
//             {/* Main Content */}
//             <div>
//               {/* Heading */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-6 tracking-tighter"
//               >
//                 THE POWER OF <br />
//                 <span className="text-pink-400/80">TCCL NETWORK</span>
//               </motion.h1>

//               {/* Description */}
//               <motion.p
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl font-semibold border-l-4 border-blue-600/50 pl-6"
//               >
//                 Delivering high-quality digital cable television and broadband services through a state-wide fiber optic backbone across Tamil Nadu.
//               </motion.p>

//               {/* CTA Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.8 }}
//                 className="flex flex-wrap gap-4 pointer-events-auto justify-center"
//               >
//                 <motion.a
//                   href="/channelPackage"
//                   whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(26,137,229,0.5)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-blue-600 via-[#1a89e5] to-blue-700 text-white rounded-[2rem] font-black text-xs md:text-sm uppercase tracking-widest flex items-center gap-2 transition-all shadow-2xl"
//                 >
//                   Get Started <ChevronRight size={18} />
//                 </motion.a>
//                 <motion.a
//                   href="/contact"
//                   whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-3 md:px-10 md:py-4 bg-white/5 backdrop-blur-3xl border border-white/10 text-white rounded-[2rem] font-black text-xs md:text-sm uppercase tracking-widest transition-all"
//                 >
//                   Contact Us
//                 </motion.a>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>

//         {/* ================= BOTTOM STATS - ALL SLIDES ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ delay: 1, duration: 0.6 }}
//           className="absolute bottom-12 md:bottom-20 left-0 right-0 z-30 flex justify-center pointer-events-none md:pointer-events-auto"
//         >
//           <div className="flex flex-wrap justify-center gap-6 md:gap-16 px-4 pb-10">
//             {[
//               { count: '3M+', label: 'CONNECTED', icon: Zap, color: 'blue' },
//               { count: '500+', label: 'CHANNELS', icon: Tv, color: 'pink' },
//               { count: '100+', label: 'CENTERS', icon: ShieldCheck, color: 'blue' }
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
//                 className="group cursor-pointer text-center pointer-events-auto"
//               >
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <stat.icon size={16} className={stat.color === 'blue' ? "text-blue-500" : "text-pink-500"} />
//                   <div className="text-2xl md:text-3xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-all">{stat.count}</div>
//                 </div>
//                 <div className="text-[9px] md:text-[10px] text-gray-300 font-black uppercase tracking-[0.2em]">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* ================= DOT NAV ================= */}
//       <div className="absolute bottom-10 left-0 right-0 z-40 flex justify-center pointer-events-none">
//         <div className="flex items-center gap-3 pointer-events-auto">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`h-2 rounded-full transition-all duration-300 ${index === i ? "bg-white w-8 shadow-[0_0_12px_rgba(255,255,255,0.9)]" : "bg-white/30 w-2 hover:bg-white/50"
//                 }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ================= ANIMATION STYLES ================= */}
//       <style>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }




import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tv, ShieldCheck, Zap, ChevronRight } from "lucide-react";

/* -------------------- SLIDES CONFIG -------------------- */
const slides = [
  {
    id: 0,
    src: "/assets/Landing page 5.jpg",
    mobileSrc: "/assets/Landing page 5.jpg",
    duration: 6000,
    trans: 1.0,
    title: (
      <>
        THE POWER OF <br />
        <span className="text-pink-400/80">TCCL NETWORK</span>
      </>
    ),
    desc:
      "Delivering high-quality digital cable television and broadband services through a state-wide fiber optic backbone across Tamil Nadu.",
  },
  {
    id: 1,
    src: "/assets/Landing page 14.jpg",
    mobileSrc: "/assets/post165.png",
    duration: 3000,
    trans: 0.5,
    position: "70% center",
    title: (
      <>
        ENTERTAINMENT <br />
        <span className="text-pink-400/80">REDEFINED</span>
      </>
    ),
    desc:
      "Experience hundreds of HD channels with crystal-clear picture and immersive sound.",
  },
  {
    id: 2,
    src: "/assets/3.png",
    mobileSrc: "/assets/paytmmob.jpg",
    duration: 3000,
    trans: 0.5,
    position: "70% center",
    title: (
      <>
        ULTRA-FAST <br />
        <span className="text-pink-400/80">FIBER INTERNET</span>
      </>
    ),
    desc:
      "Reliable high-speed broadband designed for streaming, gaming, and smart homes.",
  },
  {
    id: 3,
    src: "/assets/tccl2.png",
    mobileSrc: "/assets/wolf.png",
    duration: 3000,
    trans: 0.5,
    title: (
      <>
        STATEWIDE <br />
        <span className="text-pink-400/80">CONNECTIVITY</span>
      </>
    ),
    desc:
      "A powerful fiber network connecting cities, towns, and rural Tamil Nadu.",
  },
  {
    id: 4,
    src: "/assets/Landing page 13.jpg",
    mobileSrc: "/assets/Landing page 13.jpg",
    duration: 3000,
    trans: 0.5,
    title: (
      <>
        TRUSTED BY <br />
        <span className="text-pink-400/80">MILLIONS</span>
      </>
    ),
    desc:
      "Over 3 million users rely on TCCL for uninterrupted digital services.",
  },
];

export default function HeroBannerWithCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, slides[index].duration);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative w-full overflow-hidden bg-[#050510]">
      {/* ================= BACKGROUND CAROUSEL ================= */}
      <div className="relative w-full h-[50vh] md:h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: slides[index].trans }}
            className="absolute inset-0"
          >
            <picture className="w-full h-full">
              <source
                media="(max-width: 768px)"
                srcSet={slides[index].mobileSrc}
              />
              <img
                src={slides[index].src}
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: slides[index].position || "center" }}
              />
            </picture>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050510]" />
          </motion.div>
        </AnimatePresence>

        {/* ================= CONTENT ================= */}
        <div className="absolute inset-0 z-20 hidden md:flex items-center justify-center">
          <div className="bg-black/30 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl px-12 py-16 text-center max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-6 tracking-tighter">
                  {slides[index].title}
                </h1>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto font-semibold border-l-4 border-blue-600/50 pl-6 text-left">
                  {slides[index].desc}
                </p>

                {/* CTA */}
                <div className="flex justify-center gap-4">
                  <a
                    href="/channelPackage"
                    className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl hover:scale-105 transition"
                  >
                    Get Started <ChevronRight size={18} />
                  </a>
                  <a
                    href="/contact"
                    className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="absolute bottom-16 left-0 right-0 z-30 flex justify-center">
          <div className="flex gap-12 text-center">
            {[
              { count: "3M+", label: "CONNECTED", icon: Zap },
              { count: "500+", label: "CHANNELS", icon: Tv },
              { count: "100+", label: "CENTERS", icon: ShieldCheck },
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon size={16} className="text-blue-500" />
                  <div className="text-3xl font-black text-white">
                    {stat.count}
                  </div>
                </div>
                <div className="text-[10px] text-gray-300 font-black uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DOT NAV ================= */}
        <div className="absolute bottom-8 left-0 right-0 z-40 flex justify-center">
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${index === i
                    ? "bg-white w-8 shadow-lg"
                    : "bg-white/30 w-2 hover:bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
