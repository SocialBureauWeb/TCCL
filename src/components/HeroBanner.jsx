// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronRight, Zap, ShieldCheck, Wifi, Tv, Play, Sparkles, Users, Headphones } from 'lucide-react';

// const hero = "/assets/Landing page 5.jpg";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// };

// const line = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//     filter: "blur(6px)",
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const stats = [
//   { number: "3M+", label: "Happy Households", icon: Users, color: "from-blue-500 to-blue-600" },
//   { number: "500+", label: "TV Channels", icon: Tv, color: "from-green-500 to-green-600" },
//   { number: "8500+", label: "KM Fiber Network", icon: Wifi, color: "from-purple-500 to-purple-600" },
//   { number: "8000+", label: "Operator Partners", icon: Users, color: "from-blue-500 to-blue-600" },
//   { number: "24/7", label: "Customer Support", icon: Headphones, color: "from-blue-500 to-blue-600" },
//   { number: "99.9%", label: "Service Uptime", icon: ShieldCheck, color: "from-teal-500 to-teal-600" },
// ];

// export default function HeroBanner() {
//   return (
//     <section className="relative min-h-[90vh] pt-24 pb-20 px-6 overflow-hidden">
//       {/* Background Image with Gradient Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={hero}
//           alt="Hero Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/95"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//           >
//             {/* Badge */}
//             <motion.div
//               variants={line}
//               className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
//             >
//               <span className="text-white text-sm font-semibold">
//                 SINCE 2012 • LEADING MSO
//               </span>
//             </motion.div>

//             {/* Heading line 1 */}
//             <motion.h1
//               variants={line}
//               className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white leading-tight"
//             >
//               Powering <span className="text-blue-500">Digital</span> Dreams,
//             </motion.h1>

//             {/* Heading line 2 */}
//             <motion.h1
//               variants={line}
//               className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
//             >
//               Connecting <span className="text-blue-500">Millions</span>
//             </motion.h1>

//             {/* Paragraph */}
//             <motion.p
//               variants={line}
//               className="text-xl md:text-2xl max-w-2xl mb-10 text-white/95 leading-relaxed"
//             >
//               Thamizhaga Cable TV Communication Ltd – Transforming entertainment
//               experiences across Tamil Nadu with cutting-edge technology and
//               unwavering commitment.
//             </motion.p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
//               <div className="grid grid-cols-2 gap-4">
//                 {stats.slice(0, 4).map((stat, index) => {
//                   const Icon = stat.icon;

//                   return (
//                     <motion.div
//                       key={index}
//                       whileHover={{ y: -6, scale: 1.04 }}
//                       transition={{ type: "spring", stiffness: 260, damping: 18 }}
//                       className="relative bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 cursor-pointer overflow-hidden"
//                     >
//                       {/* Glow */}
//                       <motion.div
//                         className="absolute inset-0 rounded-xl"
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         style={{
//                           background:
//                             "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 65%)",
//                         }}
//                       />

//                       <div className="relative flex flex-col items-center text-center z-10">
//                         {/* Icon pop */}
//                         <motion.div
//                           whileHover={{ scale: 1.15 }}
//                           transition={{ duration: 0.25 }}
//                         >
//                           <Icon className="h-8 w-8 text-white mb-3" />
//                         </motion.div>

//                         <div className="text-3xl font-bold text-white mb-1">
//                           {stat.number}
//                         </div>
//                         <div className="text-white font-medium text-sm">
//                           {stat.label}
//                         </div>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, ShieldCheck, Wifi, Tv, Play, Sparkles, Users, Headphones } from 'lucide-react';

const hero = "/assets/Landing page 5.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const line = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stats = [
  { number: "3M+", label: "Happy Households", icon: Users, color: "from-blue-500 to-blue-600" },
  { number: "500+", label: "TV Channels", icon: Tv, color: "from-green-500 to-green-600" },
  { number: "8500+", label: "KM Fiber Network", icon: Wifi, color: "from-purple-500 to-purple-600" },
  { number: "8000+", label: "Operator Partners", icon: Users, color: "from-blue-500 to-blue-600" },
  { number: "24/7", label: "Customer Support", icon: Headphones, color: "from-blue-500 to-blue-600" },
  { number: "99.9%", label: "Service Uptime", icon: ShieldCheck, color: "from-teal-500 to-teal-600" },
];

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-20 px-6 overflow-hidden">
      {/* Background - Image for Desktop, Gradient for Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop: Image Background */}
        <div className="hidden md:block absolute inset-0">
          <img
            src={hero}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/95"></div>
        </div>

        {/* Mobile: Gradient Background */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-br from-[#f316b4] via-[#2b0126] to-[#0f0620]">
          {/* Animated Gradient Orbs for Mobile */}
          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-48 h-48 bg-[#5a3a8a]/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1.1, 1, 1.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-[#3d5ba8]/35 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/4 w-36 h-36 bg-[#1a0033]/50 rounded-full blur-3xl"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div
              variants={line}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="text-white text-sm font-semibold">
                SINCE 2012 • LEADING MSO
              </span>
            </motion.div>

            {/* Heading line 1 */}
            <motion.h1
              variants={line}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white leading-tight"
            >
              Powering <span className="text-blue-500">Digital</span> Dreams,
            </motion.h1>

            {/* Heading line 2 */}
            <motion.h1
              variants={line}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Connecting <span className="text-blue-500">Millions</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={line}
              className="text-xl md:text-2xl max-w-2xl mb-10 text-white/95 leading-relaxed"
            >
              Thamizhaga Cable TV Communication Ltd – Transforming entertainment
              experiences across Tamil Nadu with cutting-edge technology and
              unwavering commitment.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 4).map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="relative bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 cursor-pointer overflow-hidden"
                    >
                      {/* Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background:
                            "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 65%)",
                        }}
                      />

                      <div className="relative flex flex-col items-center text-center z-10">
                        {/* Icon pop */}
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.25 }}
                        >
                          <Icon className="h-8 w-8 text-white mb-3" />
                        </motion.div>

                        <div className="text-3xl font-bold text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-white font-medium text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}