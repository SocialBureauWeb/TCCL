import React, { useState, useRef, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

export const Navbar = ({ logo = '/assets/logo.png' }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [operatorOpen, setOperatorOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenDropdown(null)
        setOperatorOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [wrapperRef])

  const menu = [
    { title: 'Home', href: '/' },
    {
      title: 'Regulatory',
      items: [
        { title: 'TCCL RIO', href: 'https://www.tccl.co.in/admin/home/TCCL-RIO-2017-1.pdf' },
        { title: 'Declaration Under Section 4(4)', href: '/regulatory/guidelines' },
      ],
    },
    {
      title: 'Consumer Corner',
      items: [
        { title: 'Channels and Packages', href: '/consumer/support' },
        { title: 'Network Capacity Fee', href: '/consumer/faqs' },
        { title: 'CPE Scheme', href: '/consumer/support' },
        { title: 'Manual of Practice', href: 'https://www.tccl.co.in/admin/home/manualpagetccl.pdf' }
      ],
    },
    {
      title: 'Subscriber Corner',
      items: [
        { title: 'Subscriber Login', href: 'https://customer.tccl.co.in/' },
        { title: 'CAF FORM', href: 'https://tccl.co.in/admin/home/TCCL%20SAF.pdf' },
      ],
    },
    { title: 'Contact Us', href: '/contact' },
  ]

  return (
    <header ref={wrapperRef} className="bg-[#1187e6] text-white shadow-sm ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>

          {/* Centered logo on mobile, left on desktop */}
          <a href="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none flex items-center gap-3 z-10">
            <img src={logo} alt="TCCL logo" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {menu.map((m) => (
              <div key={m.title} className="relative">
                {m.items ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === m.title ? null : m.title)}
                      className="flex items-center gap-2 px-2 py-1 hover:opacity-90"
                      aria-expanded={openDropdown === m.title}
                    >
                      <span className="font-medium">{m.title}</span>
                      <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                      </svg>
                    </button>

                    <div
                      className={`absolute right-0 mt-2 w-48 bg-white text-slate-800 rounded-md shadow-lg overflow-hidden transition-all duration-150 ${
                        openDropdown === m.title ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-95'
                      }`}
                      role="menu"
                    >
                      {m.items.map((it) => (
                        <a key={it.title} href={it.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-slate-100">
                          {it.title}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href={m.href} target="_blank" rel="noopener noreferrer" className="px-2 py-1 font-medium hover:opacity-90">
                    {m.title}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className={`hidden md:flex items-center bg-white/10 rounded-full px-3 py-1 ${showSearch ? 'ring-2 ring-white/30' : ''}`}>
              <svg onClick={() => setShowSearch(!showSearch)} className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              {showSearch && (
                <input type="search" placeholder="Search..." className="ml-2 bg-transparent outline-none placeholder-white/80 text-sm w-44" />
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setOperatorOpen(!operatorOpen)}
                className="hidden md:inline-flex items-center gap-2 bg-white text-[#1187e6] px-4 py-1 rounded-full font-medium shadow-sm hover:brightness-95"
                aria-expanded={operatorOpen}
                aria-haspopup="menu"
              >
                <FaUser />
                <span>Operator Login</span>
              </button>

              {/* Mobile operator button on the right */}
              <button
                onClick={() => setOperatorOpen(!operatorOpen)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
                aria-label="Operator"
              >
                <FaUser />
              </button>

              <div
                className={`absolute right-0 mt-2 w-48 bg-white text-slate-800 rounded-md shadow-lg overflow-hidden transition-all duration-150 ${
                  operatorOpen ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-95'
                }`}
                role="menu"
              >
                <a href="https://sms.tccl.co.in/index.php/lco_portal" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-slate-100">
                  TamilNadu
                </a>
                <a href="https://sms.kclnetworks.com/index.php/lco_portal" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-slate-100">
                  Karnataka
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-[#0f76c9] ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menu.map((m) => (
            <div key={`m-${m.title}`} className="">
              {m.items ? (
                <details className="group" open={false}>
                  <summary className="flex justify-between items-center px-3 py-2 cursor-pointer list-none">
                    <span className="font-medium">{m.title}</span>
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                    </svg>
                  </summary>
                  <div className="pl-4">
                    {m.items.map((it) => (
                      <a key={it.title} href={it.href} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm hover:bg-white/10">
                        {it.title}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a href={m.href} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 font-medium hover:bg-white/10">
                  {m.title}
                </a>
              )}
            </div>
          ))}

          <div className="px-3 py-3">
            <div className="w-full">
              <button className="w-full inline-flex justify-center items-center gap-2 bg-white text-[#1187e6] px-4 py-2 rounded-full font-medium" onClick={() => setMobileOpen(false)} aria-haspopup="menu">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.761 0 5.333.793 7.879 2.334M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Operator Login
              </button>

              <div className="mt-2 space-y-1">
                 <a href="https://sms.tccl.co.in/index.php/lco_portal" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-slate-100">
                  TamilNadu
                </a>
                <a href="https://sms.kclnetworks.com/index.php/lco_portal" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-slate-100">
                  Karnataka
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
