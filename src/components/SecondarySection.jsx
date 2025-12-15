// import React from 'react'

// const services = [
//   {
//     title: 'Digital TV',
//     desc: 'High Speed Internet that fits your life style & Budget.',
//     icon: (
//       <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <rect x="3" y="4" width="18" height="12" rx="2" />
//         <path d="M8 20h8" />
//       </svg>
//     ),
//   },
//   {
//     title: 'HDTV',
//     desc: 'High Speed Internet that fits your life style & Budget.',
//     icon: (
//       <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <rect x="3" y="4" width="18" height="12" rx="2" />
//         <circle cx="12" cy="10" r="2" />
//         <path d="M8 20h8" />
//       </svg>
//     ),
//   },
//   {
//     title: 'HIGH SPEED BROADWAY',
//     desc: 'High Speed Internet that fits your life style & Budget.',
//     icon: (
//       <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path d="M3 12h3l3-8 4 16 3-8h4" />
//       </svg>
//     ),
//   },
//   {
//     title: 'Cable TV',
//     desc: 'High Speed Internet that fits your life style & Budget.',
//     icon: (
//       <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path d="M2 12h6l4 8 4-16 6 8" />
//       </svg>
//     ),
//   },
//   {
//     title: 'IP TV',
//     desc: 'High Speed Internet that fits your life style & Budget.',
//     icon: (
//       <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <rect x="3" y="5" width="14" height="12" rx="2" />
//         <polygon points="17,11 22,8 22,16 17,13" />
//       </svg>
//     ),
//   },
// ]

// export const SecondarySection = () => {
//   return (
//     <section className="py-10 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-semibold mb-6 text-slate-900">Our Services</h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//           {services.map((s) => (
//             <div
//               key={s.title}
//               className="group bg-blue-50/40 dark:bg-transparent border border-transparent hover:border-white/20 rounded-lg p-4 flex flex-col items-center text-center transition relative"
//             >
//               <div className="p-3 rounded-full bg-white/10 text-[#1187e6] mb-3">
//                 {s.icon}
//               </div>
//               <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>

//               {/* description hidden by default on desktop, shown on hover; on small screens hide description (no hover) */}
//               <p className="mt-2 text-xs text-slate-700 opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 pointer-events-none md:pointer-events-auto">
//                 {s.desc}
//               </p>

//               {/* For very small screens, show a subtle info icon that toggles description could be added later */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SecondarySection



import React from "react";
import { Tv, MonitorPlay, Wifi, Cable, Globe } from "lucide-react";

const services = [
  {
    title: "Digital TV",
    desc: "Crystal clear digital channels with reliable signal quality.",
    icon: <Tv size={26} />,
    bg: "bg-[#1a89e5]",
  },
  {
    title: "HD TV",
    desc: "Enjoy immersive HD viewing with vibrant clarity.",
    icon: <MonitorPlay size={26} />,
    bg: "bg-[#1a89e5]",
  },
  {
    title: "High Speed Broadband",
    desc: "Fast, stable internet tailored to your lifestyle.",
    icon: <Wifi size={26} />,
    bg: "bg-[#1a89e5]",
  },
  {
    title: "Cable TV",
    desc: "Affordable cable TV with a wide channel lineup.",
    icon: <Cable size={26} />,
    bg: "bg-[#1a89e5]",
  },
  {
    title: "IP TV",
    desc: "Next-gen IPTV with smart features & flexibility.",
    icon: <Globe size={26} />,
    bg: "bg-[#1a89e5]",
  },
];

export const SecondarySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Our Services
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Entertainment & connectivity designed for modern homes.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* ICON */}
              <div
                className={`mx-auto mb-4 w-14 h-14 rounded-xl flex items-center justify-center text-white ${s.bg}`}
              >
                {s.icon}
              </div>

              <h3 className="text-sm font-semibold text-slate-900">
                {s.title}
              </h3>

              <p className="mt-2 text-xs text-slate-600 opacity-0 group-hover:opacity-100 transition">
                {s.desc}
              </p>

              <span className="mt-2 block text-[10px] text-blue-500 sm:hidden">
                Tap to know more
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondarySection;
