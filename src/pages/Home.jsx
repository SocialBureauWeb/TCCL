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
     
//       <HeroSection />
//       <SecondarySection/>
//       <div className='md:h-[50vh] h-[30vh] w-full relative overflow-hidden bg-black'>
//         <img src="/assets/2.png" alt="banner" className='hidden md:block w-full h-full object-cover' />

//         <div className='absolute inset-0 bg-black/40 pointer-events-none'></div>

//         <div className='absolute inset-0 flex items-center justify-center md:justify-start'>
//           <div className='text-center md:text-left px-4 md:w-[45vw] w-full'>
//             <h4 className='text-white text-2xl sm:text-4xl font-extrabold'>Get 500+ Channels and 80+ HD Channels to fulfill your entertainment</h4>
//             <div className='mt-8'>
//               <a href="tel:04440606666" className='inline-block bg-white text-blue-600 font-semibold px-5 py-2 rounded-full'>CALL US</a>
//             </div>
//           </div>
//         </div>
//       </div>
            
//       <QuickFacts />
//       <ContactSection />
//       <footer className="bg-slate-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
//         <div className="text-sm">© 2025 TCCL All Rights Reserved.</div>

//         <nav className="text-sm">
//           <ul className="flex flex-wrap items-center gap-3 md:gap-4 text-white/90">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li className="hidden md:inline">|</li>
//             <li><a href="/about" className="hover:underline">About Us</a></li>
//             <li className="hidden md:inline">|</li>
//             <li><a href="/contact" className="hover:underline">Contact us</a></li>
//             <li className="hidden md:inline">|</li>
//             <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
//           </ul>
//         </nav>
//       </div>
//     </footer>
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
      {/* <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm">© 2025 TCCL All Rights Reserved.</div>

        <nav className="text-sm">
          <ul className="flex flex-wrap items-center gap-3 md:gap-4 text-white/90">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li className="hidden md:inline">|</li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li className="hidden md:inline">|</li>
            <li><a href="/contact" className="hover:underline">Contact us</a></li>
            <li className="hidden md:inline">|</li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
    </footer> */}
    </div>
  )
}
