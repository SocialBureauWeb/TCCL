import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tv, ShieldCheck, Zap, ChevronRight } from "lucide-react";

/* -------------------- SLIDES CONFIG -------------------- */
const slides = [
  {
    id: 0,
    src: "/assets/Landing page 5.jpg",
    mobileSrc: "/assets/stroll15.jpg",
    tabletSrc: "/assets/Landing page 5.jpg",
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
    tabletSrc: "/assets/Landing page 14.jpg",
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
    src: "/assets/header1 (1).jpeg",
    mobileSrc: "/assets/stroll2.jpg",
    tabletSrc: "/assets/header1 (1).jpeg",
    duration: 3000,
    trans: 0.5,
    title: null,
    desc: null,
  },
  {
    id: 3,
    src: "/assets/Landing page 2.jpg",
    mobileSrc: "/assets/poster2.jpg",
    tabletSrc: "/assets/Landing page 2.jpg",
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
    id: 4,
    src: "/assets/header2.jpeg",
    mobileSrc: "/assets/wolf.png",
    tabletSrc: "/assets/header2.jpeg",
    duration: 3000,
    trans: 0.5,
    title: null,
    desc: null,
  },
  {
    id: 5,
    src: "/assets/Landing page 13.jpg",
    mobileSrc: "/assets/tv35.jpg",
    tabletSrc: "/assets/Landing page 13.jpg",
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
  // {
  //   id: 6,
  //   src: "/assets/header3.jpeg",
  //   mobileSrc: "/assets/paytmmob.jpg",
  //   tabletSrc: "/assets/header3.jpeg",
  //   duration: 3000,
  //   trans: 0.5,
  //   title: null,
  //   desc: null,
  // },
];

export default function HeroBannerWithCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, slides[index].duration);

    return () => clearInterval(timer);
  }, [index]);

  const isNoOverlaySlide = slides[index].id !== 0;

  return (
    <section className="relative w-full overflow-hidden bg-[#050510]">
      {/* Responsive height: Mobile 55vh, Tablet 65vh, Laptop 100vh */}
      <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
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
                media="(max-width: 640px)"
                srcSet={slides[index].mobileSrc}
              />
              <source
                media="(max-width: 1024px)"
                srcSet={slides[index].tabletSrc}
              />
              <img
                src={slides[index].src}
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: slides[index].position || "center" }}
              />
            </picture>

            {/* Overlay: same for ALL slides except id:2, 4, 6 */}
            {!isNoOverlaySlide && (
              <div className="absolute inset-0 bg-black/80" />
            )}
          </motion.div>
        </AnimatePresence>

        {/* CONTENT - VISIBLE ON ALL DEVICES */}
        {!isNoOverlaySlide && (
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl w-full text-center"
              >
                {/* Responsive heading - scales smoothly across devices */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[0.9] mb-4 sm:mb-5 md:mb-6 lg:mb-8 tracking-tighter">
                  {slides[index].title}
                </h1>

                {/* Responsive description */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto font-semibold text-center">
                  {slides[index].desc}
                </p>

                {/* Responsive buttons */}
                <div className="flex justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 flex-wrap">
                  <a
                    href="/channelPackage"
                    className="px-5 sm:px-7 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-black text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase tracking-widest flex items-center gap-1.5 sm:gap-2 shadow-xl hover:scale-105 transition whitespace-nowrap"
                  >
                    Get Started <ChevronRight size={16} className="hidden sm:inline" />
                  </a>

                  <a
                    href="/contact"
                    className="px-5 sm:px-7 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white/5 border border-white/10 text-white rounded-full font-black text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase tracking-widest hover:bg-white/10 transition whitespace-nowrap"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* DOT NAVIGATION - ALWAYS VISIBLE */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-0 right-0 z-40 flex justify-center">
          <div className="flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all ${index === i
                  ? "bg-white h-1.5 sm:h-2 md:h-2 lg:h-2.5 w-5 sm:w-6 md:w-7 lg:w-8 shadow-lg"
                  : "bg-white/30 h-1.5 sm:h-2 md:h-2 lg:h-2.5 w-1.5 sm:w-2 md:w-2 lg:w-2 hover:bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}