import React, { useEffect, useState } from 'react';

const stats = [
  { id: 1, label: 'CONNECTIONS', value: 3000000, icon: '/assets/tccl (3).png' },
  { id: 2, label: 'CHANNELS', value: 500, icon: '/assets/tccl (2).png' },
  { id: 3, label: 'D-CENTERS', value: 100, icon: '/assets/5.png' },
  { id: 4, label: 'DISTRIBUTORS', value: 2000, icon: '/assets/tccl (1).png' },
];

// Shared small Icon component (uses same image for demo)
const Icon = ({ src, size = 72, className = '' }) => (
  <img src={src} alt="icon" style={{ width: size, height: size }} className={className} />
);

export default function QuickFacts() {
  return (
    <div className="p-6 space-y-16 bg-gray-50 text-slate-900">

      <main className="max-w-7xl mx-auto space-y-12">

        {/* 2. Circular Stat Icons */}
        <section>
          <div className="flex flex-wrap justify-between gap-6">
            {stats.map((s) => (
              <div key={s.id} className="flex-1 min-w-[200px] max-w-xs p-6 text-center">
                <img src={s.icon} className='mx-auto h-20'/>
                <div className="mt-4 text-3xl font-extrabold">{s.value.toLocaleString()}</div>
                <div className="text-sm text-slate-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
</main>

      {/* small utilities */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
        /* gradient border helper for older tailwind versions */
        .border-gradient-to-br { background: linear-gradient(135deg, rgba(56,189,248,0.15), rgba(99,102,241,0.12)); }
      `}</style>
    </div>
  );
}
