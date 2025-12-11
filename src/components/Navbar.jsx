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
    { title: 'About us', href: '/about' },
    { title: 'Regulatory', items: [
        { title: 'TCCL RIO', href: '/assets/pdf1.pdf' },
        { title: 'Declaration Under Section 4(4)', href: '/declaration' },
      ],
    },
    { title: 'Consumer Corner', items: [
        { title: 'Channels and Packages', href: '/channelPackage' },
        { title: 'Network Capacity Fee', href: '/network' },
        { title: 'CPE Scheme', href: '/cpeScheme' },
        { title: 'Manual of Practice', href: '/assets/pdf2.pdf' }
      ],
    },
    { title: 'Subscriber Corner', items: [
        { title: 'Subscriber Login', href: 'https://customer.tccl.co.in/' },
        { title: 'CAF FORM', href: '/assets/pdf3.pdf' },
      ],
    },
  ]

  return (
    <nav ref={wrapperRef} className="relative z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-blaack hover:bg-blue/10"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Centered logo on mobile, left on desktop */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <img src={logo} alt="Logo" className="h-8 inline-block" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 flex-1 ml-8">
            {menu.map((m) => (
              <div key={m.title} className="relative group">
                {m.items ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === m.title ? null : m.title)}
                      className="flex items-center gap-2 px-2 py-1 hover:opacity-90"
                      aria-expanded={openDropdown === m.title}
                    >
                      {m.title}
                      <span>▼</span>
                    </button>
                    {openDropdown === m.title && (
                      <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-xl z-50">
                        {m.items.map((it) => (
                          <a
                            key={it.title}
                            href={it.href}
                            className="block px-4 py-2 hover:bg-blue-100 first:rounded-t-md last:rounded-b-md"
                          >
                            {it.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={m.href} className="hover:opacity-90">
                    {m.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Search Icon */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="w-5 h-5 cursor-pointer hover:opacity-90"
              aria-label="Search"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {showSearch && (
              <div className="absolute top-16 right-4 z-50">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-lg text-gray-800 w-64"
                  autoFocus
                />
              </div>
            )}

            {/* Operator Login Button - Desktop */}
            <div className="relative">
              <button
                onClick={() => setOperatorOpen(!operatorOpen)}
                className="hidden md:inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-1 rounded-full font-medium shadow-sm hover:brightness-95"
                aria-expanded={operatorOpen}
                aria-haspopup="menu"
              >
                <FaUser size={16} />
                Operator Login
              </button>

              {operatorOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-xl z-50">
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                    TamilNadu
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-100 rounded-b-md">
                    Karnataka
                  </button>
                </div>
              )}
            </div>

            {/* Mobile operator button on the right */}
            <div className="relative md:hidden">
              <button
                onClick={() => setOperatorOpen(!operatorOpen)}
                className="md:hidden p-2 text-black hover:bg-white/10 rounded-lg"
                aria-label="Operator"
              >
                <FaUser size={20} />
              </button>

              {operatorOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-xl z-50">
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                    TamilNadu
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-100 rounded-b-md">
                    Karnataka
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 z-50">
            {menu.map((m) => (
              <div key={m.title}>
                {m.items ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === m.title ? null : m.title)}
                      className="w-full text-left px-4 py-2 hover:bg-white/10"
                    >
                      {m.title}
                    </button>
                    {openDropdown === m.title && (
                      <div className="bg-white/10 z-50">
                        {m.items.map((it) => (
                          <a
                            key={it.title}
                            href={it.href}
                            className="block pl-8 pr-4 py-2 hover:bg-white/20"
                          >
                            {it.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={m.href} className="block px-4 py-2 hover:bg-white/10">
                    {m.title}
                  </a>
                )}
              </div>
            ))}
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full text-left px-4 py-2 hover:bg-white/10 mt-2 border-t border-white/20"
              aria-haspopup="menu"
            >
              Operator Login
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}