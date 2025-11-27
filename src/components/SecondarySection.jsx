import React from 'react'

const services = [
  {
    title: 'Digital TV',
    desc: 'High Speed Internet that fits your life style & Budget.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
      </svg>
    ),
  },
  {
    title: 'HDTV',
    desc: 'High Speed Internet that fits your life style & Budget.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <circle cx="12" cy="10" r="2" />
        <path d="M8 20h8" />
      </svg>
    ),
  },
  {
    title: 'HIGH SPEED BROADWAY',
    desc: 'High Speed Internet that fits your life style & Budget.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 12h3l3-8 4 16 3-8h4" />
      </svg>
    ),
  },
  {
    title: 'Cable TV',
    desc: 'High Speed Internet that fits your life style & Budget.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M2 12h6l4 8 4-16 6 8" />
      </svg>
    ),
  },
  {
    title: 'IP TV',
    desc: 'High Speed Internet that fits your life style & Budget.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="5" width="14" height="12" rx="2" />
        <polygon points="17,11 22,8 22,16 17,13" />
      </svg>
    ),
  },
]

export const SecondarySection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900">Our Services</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-blue-50/40 dark:bg-transparent border border-transparent hover:border-white/20 rounded-lg p-4 flex flex-col items-center text-center transition relative"
            >
              <div className="p-3 rounded-full bg-white/10 text-[#1187e6] mb-3">
                {s.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>

              {/* description hidden by default on desktop, shown on hover; on small screens hide description (no hover) */}
              <p className="mt-2 text-xs text-slate-700 opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 pointer-events-none md:pointer-events-auto">
                {s.desc}
              </p>

              {/* For very small screens, show a subtle info icon that toggles description could be added later */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecondarySection

