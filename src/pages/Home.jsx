/*
// SUPREME PINKISH VIOLET & TCCL BLUE - ULTRA ATTRACTIVE THEME
// MASTER PAGE: NEON-GRADIENT HYPER-DARK
*/

import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar';
import HeroBanner from '../components/HeroBannerWithCarousel'
import SecondarySection from '../components/SecondarySection'
// import PlansSection from '../components/PlansSection'
import OTTSection from '../components/OTTSection'
import QuickFacts from '../components/QuickFacts'
import AboutSection from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'

export const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowPopup(true);
  }, []);

  return (
    <div className="bg-[#030005] min-h-screen selection:bg-pink-600/40 selection:text-white overflow-x-hidden overflow-y-auto font-sans relative">
      <Navbar />

      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative max-w-2xl w-full bg-[#0a0a0a] rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 text-white/90 hover:text-white rounded-full transition-all z-10 backdrop-blur-sm"
              aria-label="Close popup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src="/assets/header3.jpeg"
              alt="Welcome to TCCL"
              className="w-full h-auto object-cover max-h-[80vh]"
            />
          </div>
        </div>
      )}

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
