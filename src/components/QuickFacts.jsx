// import React, { useEffect, useState } from 'react';

// const stats = [
//   { id: 1, label: 'CONNECTIONS', value: 3000000, icon: '/assets/tccl (3).png' },
//   { id: 2, label: 'CHANNELS', value: 500, icon: '/assets/tccl (2).png' },
//   { id: 3, label: 'D-CENTERS', value: 100, icon: '/assets/5.png' },
//   { id: 4, label: 'DISTRIBUTORS', value: 2000, icon: '/assets/tccl (1).png' },
// ];

// // Shared small Icon component (uses same image for demo)
// const Icon = ({ src, size = 72, className = '' }) => (
//   <img src={src} alt="icon" style={{ width: size, height: size }} className={className} />
// );

// export default function QuickFacts() {
//   return (
//     <div className="p-6 space-y-16 bg-gray-50 text-slate-900">

//       <main className="max-w-7xl mx-auto space-y-12">

//         {/* 2. Circular Stat Icons */}
//         <section>
//           <div className="flex flex-wrap justify-between gap-6">
//             {stats.map((s) => (
//               <div key={s.id} className="flex-1 min-w-[200px] max-w-xs p-6 text-center">
//                 <img src={s.icon} className='mx-auto h-20'/>
//                 <div className="mt-4 text-3xl font-extrabold">{s.value.toLocaleString()}</div>
//                 <div className="text-sm text-slate-600 mt-1">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </section>
// </main>

//       {/* small utilities */}
//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 18s linear infinite;
//         }
//         /* gradient border helper for older tailwind versions */
//         .border-gradient-to-br { background: linear-gradient(135deg, rgba(56,189,248,0.15), rgba(99,102,241,0.12)); }
//       `}</style>
//     </div>
//   );
// }






import React, { useEffect, useState } from "react";

const stats = [
  { id: 1, label: "Connections", value: 3000000, icon: "/assets/tccl (3).png" },
  { id: 2, label: "Channels", value: 500, icon: "/assets/tccl (2).png" },
  { id: 3, label: "D-Centers", value: 100, icon: "/assets/5.png" },
  { id: 4, label: "Distributors", value: 2000, icon: "/assets/tccl (1).png" },
];

const StatCard = ({ icon, label, value }) => {
  const [count, setCount] = useState(0);

  // Cute count-up animation
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    const step = Math.max(1, Math.floor(end / (duration / 16)));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1">
      {/* ICON */}
      <div className="mx-auto w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-105 transition">
        <img src={icon} alt={label} className="h-12 w-12 object-contain" />
      </div>

      {/* NUMBER */}
      <div className="text-3xl font-extrabold text-[#1a89e5]">
        {count.toLocaleString()}
        {label === "Connections" && "+"}
      </div>

      {/* LABEL */}
      <div className="mt-1 text-sm font-medium text-slate-600 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

export default function QuickFacts() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
<h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#1a89e5] via-[#3aa0ff] to-[#1a89e5] bg-clip-text text-transparent">
  Quick Facts
</h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            Trusted by millions, delivering entertainment across Tamil Nadu.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatCard
              key={s.id}
              icon={s.icon}
              label={s.label}
              value={s.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
