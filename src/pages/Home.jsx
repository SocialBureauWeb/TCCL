import React from 'react'
import { Navbar } from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SecondarySection from '../components/SecondarySection'
import QuickFacts from '../components/QuickFacts'
import ContactSection from '../components/ContactSection'
import { Introvideo } from '../components/Introvideo'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Introvideo/>
     
      <HeroSection />
      <SecondarySection/>
<div className="md:h-[50vh] h-[35vh] w-full relative overflow-hidden">
  {/* Background image */}
  <img
    src="/assets/tv4.jpeg"
    alt="banner"
    className="hidden md:block w-full h-full object-cover"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

  {/* Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="px-6 md:px-16 md:w-[50vw] w-full text-center md:text-left">
      
      <h4 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
        Get 500+ Channels & 80+ HD Channels
        <br className="hidden sm:block" />
        for Unlimited Entertainment
      </h4>

      <div className="mt-8">
        <a
          href="tel:04440606666"
          className="inline-flex items-center gap-2 
                     bg-white text-[#1a89e5] font-semibold 
                     px-6 py-3 rounded-full 
                     hover:scale-105 transition shadow-lg"
        >
           Call Us Now
        </a>
      </div>

    </div>
  </div>
</div>


            
      <QuickFacts />
      <ContactSection />
    </div>
  )
}
