
// // import React from "react";
// // import { Tv, MonitorPlay, Wifi, Cable, Globe } from "lucide-react";

// // const services = [
// //   {
// //     title: "Digital TV",
// //     desc: "Crystal clear digital channels with reliable signal quality.",
// //     icon: <Tv size={26} />,
// //     bg: "bg-[#1a89e5]",
// //   },
// //   {
// //     title: "HD TV",
// //     desc: "Enjoy immersive HD viewing with vibrant clarity.",
// //     icon: <MonitorPlay size={26} />,
// //     bg: "bg-[#1a89e5]",
// //   },
// //   {
// //     title: "High Speed Broadband",
// //     desc: "Fast, stable internet tailored to your lifestyle.",
// //     icon: <Wifi size={26} />,
// //     bg: "bg-[#1a89e5]",
// //   },
// //   {
// //     title: "Cable TV",
// //     desc: "Affordable cable TV with a wide channel lineup.",
// //     icon: <Cable size={26} />,
// //     bg: "bg-[#1a89e5]",
// //   },
// //   {
// //     title: "IP TV",
// //     desc: "Next-gen IPTV with smart features & flexibility.",
// //     icon: <Globe size={26} />,
// //     bg: "bg-[#1a89e5]",
// //   },
// // ];

// // export const SecondarySection = () => {
// //   return (
// //     <section className="py-20 bg-gradient-to-b from-white to-blue-50">
// //       <div className="max-w-6xl mx-auto px-4">

// //         {/* HEADER */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
// //             Our Services
// //           </h2>
// //           <p className="text-slate-600 max-w-xl mx-auto">
// //             Entertainment & connectivity designed for modern homes.
// //           </p>
// //         </div>

// //         {/* GRID */}
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
// //           {services.map((s) => (
// //             <div
// //               key={s.title}
// //               className="group bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1"
// //             >
// //               {/* ICON */}
// //               <div
// //                 className={`mx-auto mb-4 w-14 h-14 rounded-xl flex items-center justify-center text-white ${s.bg}`}
// //               >
// //                 {s.icon}
// //               </div>

// //               <h3 className="text-sm font-semibold text-slate-900">
// //                 {s.title}
// //               </h3>

// //               <p className="mt-2 text-xs text-slate-600 opacity-0 group-hover:opacity-100 transition">
// //                 {s.desc}
// //               </p>

// //               <span className="mt-2 block text-[10px] text-blue-500 sm:hidden">
// //                 Tap to know more
// //               </span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default SecondarySection;





// import React, { useState } from "react";
// import { Tv, MonitorPlay, Wifi, Cable, Globe } from "lucide-react";

// const services = [
//   {
//     title: "Digital TV",
//     desc: "Crystal clear digital channels with reliable signal quality.",
//     icon: <Tv size={26} />,
//   },
//   {
//     title: "HD TV",
//     desc: "Enjoy immersive HD viewing with vibrant clarity.",
//     icon: <MonitorPlay size={26} />,
//   },
//   {
//     title: "High Speed Broadband",
//     desc: "Fast, stable internet tailored to your lifestyle.",
//     icon: <Wifi size={26} />,
//   },
//   {
//     title: "Cable TV",
//     desc: "Affordable cable TV with a wide channel lineup.",
//     icon: <Cable size={26} />,
//   },
//   {
//     title: "IP TV",
//     desc: "Next-gen IPTV with smart features & flexibility.",
//     icon: <Globe size={26} />,
//   },
// ];

// export const SecondarySection = () => {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <section className="py-10 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
//             Our Services
//           </h2>
//           <p className="text-slate-600 max-w-xl mx-auto">
//             Entertainment & connectivity designed for modern homes.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//           {services.map((s, index) => {
//             const isActive = hovered === index;
//             const isBlurred = hovered !== null && hovered !== index;

//             return (
//               <div
//                 key={s.title}
//                 onMouseEnter={() => setHovered(index)}
//                 onMouseLeave={() => setHovered(null)}
//                 className={`
//                   bg-white rounded-2xl p-5 text-center shadow-md
//                   transition-all duration-300 ease-out
//                   cursor-pointer
//                   ${isActive ? "scale-110 z-10 shadow-2xl" : ""}
//                   ${isBlurred ? "blur-sm opacity-50 scale-95" : ""}
//                 `}
//               >
//                 {/* ICON */}
//                 <div className="mx-auto mb-4 w-14 h-14 rounded-xl 
//                                 flex items-center justify-center 
//                                 text-white bg-[#1a89e5]">
//                   {s.icon}
//                 </div>

//                 <h3 className="text-sm font-semibold text-slate-900">
//                   {s.title}
//                 </h3>

//                 <p
//                   className={`
//                     mt-2 text-xs text-slate-600 transition
//                     ${isActive ? "opacity-100" : "opacity-0"}
//                   `}
//                 >
//                   {s.desc}
//                 </p>

//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SecondarySection;


import React, { useState } from "react";
import { Tv, MonitorPlay, Wifi, Cable, Globe } from "lucide-react";

const services = [
  {
    title: "Digital TV",
    desc: "Crystal clear digital channels with reliable signal quality.",
    icon: <Tv size={26} />,
  },
  {
    title: "HD TV",
    desc: "Enjoy immersive HD viewing with vibrant clarity.",
    icon: <MonitorPlay size={26} />,
  },
  {
    title: "High Speed Broadband",
    desc: "Fast, stable internet tailored to your lifestyle.",
    icon: <Wifi size={26} />,
  },
  {
    title: "Cable TV",
    desc: "Affordable cable TV with a wide channel lineup.",
    icon: <Cable size={26} />,
  },
  {
    title: "IP TV",
    desc: "Next-gen IPTV with smart features & flexibility.",
    icon: <Globe size={26} />,
  },
];

export default function SecondarySection() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-14 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Our Services
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
            Entertainment & connectivity designed for modern homes.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {services.map((s, index) => {
            const isActive = active === index;

            return (
              <div
                key={s.title}
                onClick={() => setActive(isActive ? null : index)}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className={`
                  relative bg-white rounded-2xl p-4 md:p-5
                  text-center shadow-md cursor-pointer
                  transition-all duration-300 ease-out
                  md:hover:scale-110 md:hover:shadow-2xl
                  ${isActive ? "scale-[1.03] shadow-xl" : ""}
                `}
              >
                {/* ICON */}
                <div
                  className="
                    mx-auto mb-3 w-12 h-12 md:w-14 md:h-14
                    rounded-xl flex items-center justify-center
                    text-white bg-[#1a89e5]
                  "
                >
                  {s.icon}
                </div>

                <h3 className="text-sm font-semibold text-slate-900">
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <div
                  className={`
                    mt-2 text-xs text-slate-600
                    overflow-hidden transition-all duration-300
                    ${isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}
                    md:max-h-none md:opacity-100 md:block
                  `}
                >
                  {s.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
