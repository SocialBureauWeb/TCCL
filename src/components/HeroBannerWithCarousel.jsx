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
    desc: "Delivering high-quality digital cable television and broadband services through a state-wide fiber optic backbone across Tamil Nadu.",
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
    desc: "Experience hundreds of HD channels with crystal-clear picture and immersive sound.",
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
    desc: "Reliable high-speed broadband designed for streaming, gaming, and smart homes.",
  },
  {
    id: 3,
    src: "/assets/tccl2.png",
    mobileSrc: "/assets/wolf.png",
    duration: 3000,
    trans: 0.5,
    title: null,
    desc: null,
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
    desc: "Over 3 million users rely on TCCL for uninterrupted digital services.",
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

  const isNoOverlaySlide = slides[index].id === 3; // ✅ tccl2.png only

  return (
    <section className="relative w-full overflow-hidden bg-[#050510]">
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

            {/* ✅ Overlay: same for ALL slides except id:3 */}
            {!isNoOverlaySlide && (
              <div className="absolute inset-0 bg-black/80" />
            )}
          </motion.div>
        </AnimatePresence>

        {/* ✅ CONTENT (HIDDEN for slide id:3) */}
        {!isNoOverlaySlide && (
          <div className="absolute inset-0 z-20 hidden md:flex items-center justify-center px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl text-center"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-6 tracking-tighter">
                  {slides[index].title}
                </h1>

                <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto font-semibold text-center">
                  {slides[index].desc}
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
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
        )}

        {/* ✅ STATS (HIDDEN for slide id:3) */}
        {!isNoOverlaySlide && (
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
        )}

        {/* ✅ DOT NAV (always visible) */}
        <div className="absolute bottom-8 left-0 right-0 z-40 flex justify-center">
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  index === i
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
