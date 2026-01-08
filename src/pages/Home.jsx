import React from 'react'
import { Navbar } from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SecondarySection from '../components/SecondarySection'
import QuickFacts from '../components/QuickFacts'
import ContactSection from '../components/ContactSection'
import ScrollBanner from "../components/MotionGraphics"

export const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
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

      {/* SECOND ADDITIONAL IMAGE SECTION */}
      <div className="w-full bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-8">
            <div className="w-full md:w-2/3">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/paytm2.png"
                  alt="Channel lineup"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="p-4 md:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Extensive Channel Lineup
                </h3>
                <p className="text-gray-600">
                  From sports to movies, news to kids' shows, we have channels for every member of the family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FIRST ADDITIONAL IMAGE SECTION */}
      <div className="w-full bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="w-full md:w-2/3">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/tccl2.png"
                  alt="Entertainment banner"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="p-4 md:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Premium Entertainment
                </h3>
                <p className="text-gray-600">
                  Experience the best in television entertainment with our premium channel packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickFacts />


      {/* THIRD ADDITIONAL IMAGE SECTION */}
      <div className="w-full bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="w-full md:w-2/3">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/stroll5.jpg"
                  alt="Family entertainment"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="p-4 md:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Family Entertainment
                </h3>
                <p className="text-gray-600">
                  Create unforgettable moments with family-friendly programming that brings everyone together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroSection />
      <ContactSection />
    </div>
  )
}