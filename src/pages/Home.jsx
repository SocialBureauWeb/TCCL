/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// MASTER PAGE: NEON-GRADIENT HYPER-DARK
*/

import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar';
import HeroBanner from '../components/HeroBannerWithCarousel'
import SecondarySection from '../components/SecondarySection'
// import PlansSection from '../components/PlansSection'
import OTTSection from '../components/OTTSection'
import QuickFacts from '../components/QuickFacts'
import AboutSection from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#030005] min-h-screen selection:bg-pink-600/40 selection:text-white overflow-x-hidden overflow-y-auto font-sans relative">
      <Navbar />
      <main className="relative w-full">
        <HeroBanner />
        <SecondarySection />
        <AboutSection />
        {/* <PlansSection /> */}
        <OTTSection />
        <QuickFacts />
        <ContactSection />
      </main>
    </div>
  )
}

export default Home;
