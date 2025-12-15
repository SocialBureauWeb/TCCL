// import React, { useState } from 'react'
// import { motion } from "framer-motion";
// import { FaCopy, FaBuilding, FaHeadset } from "react-icons/fa";

// export const HeroSection = () => {
//   const [copied, setCopied] = useState(false)

//   const customerSupport = '044-4060-6666'
//   const tollFree = '1800-102-9845'
//   const corporate = '044-4927-2222'

//   function copyNumber(number) {
//     if (!navigator.clipboard) return
//     navigator.clipboard.writeText(number).then(() => {
//       setCopied(true)
//       setTimeout(() => setCopied(false), 1500)
//     })
//   }

//   return (
//     <>
// <section className="bg-white text-slate-900 py-6 md:py-16">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//     <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

//       {/* IMAGE FIRST ON MOBILE */}
//       <motion.div
//         initial={{ opacity: 0, x: -40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="w-full order-1 md:order-2"
//       >
//         <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
//           <img
//             src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-299586,resizemode-75,msid-110676105/industry/media/entertainment/tv-channel-rates-may-soon-go-up-by-5-8.jpg"
//             alt="Customer Support"
//             className="w-full h-52 sm:h-64 md:h-80 object-cover"
//           />
//         </div>
//       </motion.div>

//       {/* TEXT SECOND ON MOBILE */}
//       <motion.div
//         initial={{ opacity: 0, x: 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="space-y-6 order-2 md:order-1"
//       >
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-[#1187e6]">
//           Standard & High Definition
//         </h2>

//         <p className="text-base sm:text-lg text-slate-700">
//           We are providing the Channels with Standard Definition and High Definition Clarity for the Consumers.
//         </p>

//         {/* GLASS CARD */}
//         <div className="bg-white/70 backdrop-blur-xl p-5 md:p-6 rounded-2xl shadow-md border border-slate-200">

//           <p className="font-semibold text-slate-800 text-base sm:text-lg">
//            We Believe customer is more important to us — any query
//           </p>

//           <div className="mt-4 space-y-4">

//             {/* CUSTOMER SUPPORT */}
//             <div className="bg-slate-50 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <div className="flex items-start gap-3">
//                 <FaHeadset className="text-[#1187e6] text-xl" />
//                 <div>
//                   <p className="text-sm text-slate-600">Customer Support</p>
//                   <p className="font-semibold text-sm sm:text-base">{customerSupport} / {tollFree}</p>
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 <a
//                   href={`tel:${customerSupport.replace(/[^0-9]/g, '')}`}
//                   className="px-4 py-2 bg-[#1187e6] text-white rounded-md text-sm hover:scale-105 transition"
//                 >
//                   Call
//                 </a>
//                 <button
//                   onClick={() => copyNumber(customerSupport)}
//                   className="px-4 py-2 bg-white border rounded-md text-sm hover:scale-105 transition"
//                 >
//                   <FaCopy />
//                 </button>
//               </div>
//             </div>

//             {/* CORPORATE */}
//             <div className="bg-slate-50 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <div className="flex items-start gap-3">
//                 <FaBuilding className="text-[#1187e6] text-xl" />
//                 <div>
//                   <p className="text-sm text-slate-600">Corporate Office</p>
//                   <p className="font-semibold text-sm sm:text-base">{corporate}</p>
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 <a
//                   href={`tel:${corporate.replace(/[^0-9]/g, '')}`}
//                   className="px-4 py-2 bg-[#1187e6] text-white rounded-md text-sm hover:scale-105 transition"
//                 >
//                   Call
//                 </a>
//                 <button
//                   onClick={() => copyNumber(corporate)}
//                   className="px-4 py-2 bg-white border rounded-md text-sm hover:scale-105 transition"
//                 >
//                   <FaCopy />
//                 </button>
//               </div>
//             </div>

//           </div>

//           {/* COPY NOTIFICATION */}
//           {copied && (
//             <p className="text-green-600 text-sm mt-2">📋 Number copied!</p>
//           )}
//         </div>
//       </motion.div>

//     </div>
//   </div>
// </section>
//     </>
//   )
// }

// export default HeroSection

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Headphones, Building2, Copy, Check } from "lucide-react";

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const customerSupport = "044-4060-6666";
  const tollFree = "1800-102-9845";
  const corporate = "044-4927-2222";

  function copyNumber(number) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(number).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  const Card = ({ icon, title, numbers }) => (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-blue-100 text-[#1a89e5]">
          {icon}
        </div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
      </div>

      <div className="space-y-3">
        {numbers.map((num) => (
          <div
            key={num}
            className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3"
          >
            <span className="text-sm font-medium text-slate-700">{num}</span>

            <div className="flex gap-2">
              <a
                href={`tel:${num.replace(/[^0-9]/g, "")}`}
                className="px-3 py-1.5 text-xs rounded-md bg-[#1a89e5] text-white hover:bg-blue-700 transition"
              >
                Call
              </a>
              <button
                onClick={() => copyNumber(num)}
                className="px-3 py-1.5 text-xs rounded-md bg-white border hover:bg-blue-100 transition"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{
      backgroundImage: "url('/assets/set1.jpg')",
    }}
  />

  {/* DARK + BLUE OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/70 to-blue-800/60" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        We’re Here to Help You
      </h1>

      <p className="text-lg md:text-xl opacity-90 mb-8">
        From crystal-clear HD channels to fast broadband,
        our support team is always just one call away.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="tel:04440606666"
          className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Call Support
        </a>

        <a
          href="/contact"
          className="border border-white/80 px-7 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>


  );
};

export default HeroSection;
