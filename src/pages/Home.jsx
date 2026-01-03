// import React from 'react'
// import { Navbar } from '../components/Navbar'
// import HeroSection from '../components/HeroSection'
// import SecondarySection from '../components/SecondarySection'
// import QuickFacts from '../components/QuickFacts'
// import ContactSection from '../components/ContactSection'
// import { Introvideo } from '../components/Introvideo'

// export const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <Introvideo/>
  

 
// <div className="w-full h-[35vh] md:h-[50vh] flex flex-col md:flex-row overflow-hidden bg-black">

//   {/* LEFT : IMAGE 1 */}
//   <div className="relative w-full md:w-1/2 h-full">
//     <img
//       src="/assets/tv4.jpeg"   // IMAGE 1
//       alt="Left banner"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* RIGHT : TEXT WITH IMAGE 2 BACKGROUND */}
//   <div
//     className="relative w-full md:w-1/2 h-full flex items-center
//                justify-center md:justify-start px-6 md:px-16
//                text-center md:text-left"
//     style={{
//       backgroundImage: "url('/assets/home2.png')", // IMAGE 2
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}
//   >
//     {/* Overlay */}
//     <div className="absolute inset-0 bg-white/70"></div>

//     {/* CONTENT */}
//     <div className="relative z-10">
//       <h4 className="text-black-300 text-xl sm:text-3xl md:text-4xl leading-tight">
//         Get 500+ Channels & 80+ HD Channels
//         <br className="hidden sm:block" />
//         for Unlimited Entertainment
//       </h4>

//       {/* <div className="mt-8">
//         <a
//           href="tel:04440606666"
//           className="inline-flex items-center gap-2
//                      bg-white text-[#1a89e5] font-semibold
//                      px-6 py-3 rounded-full
//                      hover:scale-105 transition shadow-lg"
//         >
//           Call Us Now
//         </a>
//       </div> */}
//     </div>
//   </div>

// </div>
//       <SecondarySection/>

// {/* FULL WIDTH IMAGE — NO BLACK, NO CUT
// <div className="w-full">
//   <img
//     src="/assets/pay222.png"
//     alt="Paytm banner"
//     className="w-full h-auto block"
//   />
// </div> */}

// <div className="relative w-full overflow-hidden bg-white">
//   <div
//     className="
//       flex w-max
//       animate-[scroll_30s_linear_infinite]
//     "
//   >
//     {[
//       "/assets/pay222.png",
//       "/assets/pay333.png",
//       "/assets/pay444.png",
//     ].map((img, i) => (
//       <img
//         key={i}
//         src={img}
//         alt="banner"
//         className="w-screen h-auto flex-shrink-0"
//       />
//     ))}

//     {/* duplicate for seamless loop */}
//     {[
//       "/assets/pay222.png",
//       "/assets/pay222.png",
//       "/assets/pay222.png",
//     ].map((img, i) => (
//       <img
//         key={`dup-${i}`}
//         src={img}
//         alt="banner"
//         className="w-screen h-auto flex-shrink-0"
//       />
//     ))}
//   </div>

//   {/* Tailwind-only keyframes */}
//   <style>
//     {`
//       @keyframes scroll {
//         0% { transform: translateX(0); }
//         100% { transform: translateX(-50%); }
//       }
//     `}
//   </style>
// </div>




//       <QuickFacts />
//      <HeroSection />
//      <br/>
//       <ContactSection />

//     </div>
//   )
// }



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
  
      {/* TOP BANNER SECTION */}
      {/* <div className="w-full h-[35vh] md:h-[50vh] flex flex-col md:flex-row overflow-hidden bg-black">

        <div className="relative w-full md:w-1/2 h-full">
          <img
            src="/assets/tv4.jpeg"
            alt="Left banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="relative w-full md:w-1/2 h-full flex items-center
                     justify-center md:justify-start px-6 md:px-16
                     text-center md:text-left"
          style={{
            backgroundImage: "url('/assets/home2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/70"></div>

          <div className="relative z-10">
            <h4 className="text-black-300 text-xl sm:text-3xl md:text-4xl leading-tight">
              Get 500+ Channels & 80+ HD Channels
              <br className="hidden sm:block" />
              for Unlimited Entertainment
            </h4>
          </div>
        </div>
      </div> */}
{/* TOP BANNER SECTION */}
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

      {/* SECONDARY SECTION */}
      <SecondarySection />

      {/* SCROLLING BANNER */}
      <ScrollBanner />

      {/* QUICK FACTS */}
      <QuickFacts />

      {/* HERO SECTION */}
      <HeroSection />

      <br />

      {/* CONTACT SECTION */}
      <ContactSection />
    </div>
  )
}