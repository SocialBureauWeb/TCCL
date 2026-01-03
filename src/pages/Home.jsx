import React from 'react'
import { Navbar } from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SecondarySection from '../components/SecondarySection'
import QuickFacts from '../components/QuickFacts'
import ContactSection from '../components/ContactSection'
import { Introvideo } from '../components/Introvideo'
import ScrollBanner from "../components/MotionGraphics"

export const Home = () => {
  return (
    <div>
      <Navbar />
    <Introvideo />
    {/* SCROLLING BANNER */}
      <ScrollBanner />
     {/* SECONDARY SECTION */}
      <SecondarySection />

      <div className="w-full bg-black overflow-hidden">

        <div className="flex flex-col md:flex-row">

          {/* IMAGE (TOP on mobile, LEFT on desktop) */}
          <div className="w-full md:w-1/2 h-[220px] sm:h-[300px] md:h-[50vh]">
            <img
              src="/assets/tv4.jpeg"
              alt="Left banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT SECTION */}
          <div
            className="
              relative w-full md:w-1/2
              px-5 sm:px-8 md:px-16
              py-10 sm:py-14 md:py-0
              flex items-center
              text-center md:text-left
            "
            style={{
              backgroundImage: "url('/assets/home2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/70" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-xl mx-auto md:mx-0">
              <h4 className="text-black font-semibold leading-snug
                            text-xl sm:text-2xl md:text-4xl">
                Get 500+ Channels & 80+ HD Channels
                <br className="hidden md:block" />
                for Unlimited Entertainment
              </h4>
            </div>
          </div>

        </div>
      </div>

      <QuickFacts />
      <HeroSection />
      <ContactSection />
    </div>
  )
}