/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// MASTER PAGE: NEON-GRADIENT HYPER-DARK
*/

import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar';
import HeroBanner from '../components/HeroBanner'
import SecondarySection from '../components/SecondarySection'
import PlansSection from '../components/PlansSection'
import OTTSection from '../components/OTTSection'
import QuickFacts from '../components/QuickFacts'
import AboutSection from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'
import { motion, useScroll, useSpring } from 'framer-motion'

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#030005] min-h-screen selection:bg-pink-600/40 selection:text-white overflow-hidden font-sans relative">

      {/* GLOBAL MASTER PROGRESS: PINK TO BLUE */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-pink-500 via-fuchsia-400 to-blue-500 origin-left z-[1000] shadow-[0_0_20px_rgba(217,70,239,0.5)]"
        style={{ scaleX }}
      />

      {/* GLOBAL NOISE TEXTURE: SUBTLE PREMIUM GRAIN */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />

      <main className="relative">

        {/* GLOBAL DYNAMIC ATMOSPHERE: PULSATING NEON LAYERS */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ opacity: [0.03, 0.06, 0.03], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[10%] left-[-20%] w-[80%] h-[80%] bg-pink-600 rounded-full blur-[180px]"
          />
          <motion.div
            animate={{ opacity: [0.02, 0.05, 0.02], scale: [1.2, 1, 1.2] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-[20%] right-[-20%] w-[70%] h-[70%] bg-blue-600 rounded-full blur-[160px]"
          />
        </div>

        {/* SECTION STACK: CINEMATIC SPACING */}
        <div className="relative z-10 space-y-0">
          <HeroBanner />
          <SecondarySection />
          <AboutSection />

          {/* HIGH-IMPACT DIVIDER */}
          <div className="h-40 bg-gradient-to-b from-[#030005] via-[#050510] to-[#030005] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.05)_0%,transparent_70%)]" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent" />
          </div>

          <PlansSection />
          <OTTSection />

          <div className="h-40 bg-gradient-to-b from-[#030005] to-[#030005]" />

          <QuickFacts />
          <ContactSection />
        </div>
      </main>
    </div>
  )
}

export default Home;
