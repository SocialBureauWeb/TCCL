import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = ({ logo = "/assets/logo102.png" }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [operatorOpen, setOperatorOpen] = useState(false);
  const wrapperRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    function handleOutside(event) {
      if (!wrapperRef.current) return;

      if (!wrapperRef.current.contains(event.target)) {
        setMobileOpen(false);
        setOpenDropdown(null);
        setOperatorOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  const handleOperatorMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setOperatorOpen(true);
  };

  const handleOperatorMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOperatorOpen(false);
    }, 3000);
  };

  const menu = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    {
      title: "Regulatory",
      items: [
        { title: "TCCL RIO", href: "/assets/pdf1.pdf" },
        { title: "Declaration Under Section 4(4)", href: "/declaration" },
      ],
    },
    {
      title: "Consumer Corner",
      items: [
        { title: "Channels and Packages", href: "/channelPackage" },
        { title: "Network Capacity Fee", href: "/network" },
        { title: "CPE Scheme", href: "/cpeScheme" },
        { title: "Manual of Practice", href: "/assets/pdf2.pdf" },
      ],
    },
    {
      title: "Subscriber Corner",
      items: [
        { title: "Subscriber Login", href: "https://customer.tccl.co.in/" },
        { title: "CAF FORM", href: "/assets/pdf3.pdf" },
      ],
    },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <nav ref={wrapperRef} className="fixed top-0 left-0 right-0 z-50 w-full">
      <style>{`
        .glass-navbar {
          background-color: #c8c8c8ff;
        }

        @keyframes slideDownFade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-menu-animate {
          animation: slideDownFade 0.3s ease-out;
        }

        .dropdown-item {
          font-weight: 700 !important;
        }
      `}</style>

      <div className="glass-navbar shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Desktop Navbar - Height responsive */}
          <div className="hidden lg:flex items-center justify-between h-24 lg:h-28 gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-20 lg:h-28 w-auto object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center gap-1 lg:gap-4 flex-1 ml-4 lg:ml-6 flex-wrap justify-center">
              {menu.map((m) => (
                <div key={m.title} className="relative group flex-shrink-0">
                  {m.items ? (
                    <>
                      <span className="flex items-center gap-2 px-2 lg:px-3 py-2 cursor-pointer text-blue-900 hover:text-blue-900 transition-colors text-sm lg:text-lg font-bold whitespace-nowrap">
                        {m.title}
                      </span>

                      <div className="absolute left-0 mt-3 w-56 lg:w-64 bg-[#e5e5e5] text-blue-900 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {m.items.map((it) => (
                          <a
                            key={it.title}
                            href={it.href}
                            target={
                              it.href.endsWith(".pdf") || it.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              it.href.endsWith(".pdf") || it.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="dropdown-item block px-4 lg:px-5 py-2.5 lg:py-3.5 hover:bg-white/20 text-blue-900 hover:text-blue-900 transition-all first:rounded-t-lg last:rounded-b-lg text-xs lg:text-base font-bold"
                          >
                            {it.title}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={m.href}
                      className="text-blue-900 hover:text-blue-900 transition-colors text-sm lg:text-lg font-bold px-2 lg:px-3 py-2"
                    >
                      {m.title}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section - Desktop */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div
                className="relative"
                onMouseEnter={handleOperatorMouseEnter}
                onMouseLeave={handleOperatorMouseLeave}
              >
                <button className="inline-flex items-center gap-2 lg:gap-3 bg-white text-blue-900 px-4 lg:px-7 py-2 lg:py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-xs lg:text-base whitespace-nowrap">
                  <FaUser size={16} className="lg:w-5 lg:h-5" />
                  <span>Operator Login</span>
                </button>

                {operatorOpen && (
                  <div className="dropdown-menu-animate absolute right-0 mt-3 w-48 lg:w-56 bg-[#e5e5e5] rounded-lg shadow-xl z-50">
                    <a
                      href="https://sms.tccl.co.in/index.php/lco_portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item block px-4 lg:px-5 py-3 lg:py-4 hover:bg-white/20 rounded-t-lg transition-all text-base lg:text-lg font-bold text-blue-900"
                    >
                      Tamil Nadu
                    </a>
                    <div className="h-px bg-white/10"></div>
                    <a
                      href="https://sms.kclnetworks.com/index.php/lco_portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item block px-4 lg:px-5 py-3 lg:py-4 hover:bg-white/20 rounded-b-lg transition-all text-base lg:text-lg font-bold text-blue-900"
                    >
                      Karnataka
                    </a>
                    <div className="h-px bg-white/10"></div>
                    <a
                      href="https://iptv.tccl.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item block px-4 lg:px-5 py-3 lg:py-4 hover:bg-white/20 rounded-b-lg transition-all text-base lg:text-lg font-bold text-blue-900"
                    >
                      IPTV
                    </a>
                  </div>
                  
                )}
              </div>
            </div>
          </div>

          {/* Tablet & Mobile Navbar - Responsive Heights */}
          <div className="lg:hidden flex items-center justify-between h-20 sm:h-22 gap-2 sm:gap-3">
            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 sm:p-3 rounded-md text-blue-900 hover:text-blue-900 hover:bg-white/10 transition-all flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes size={24} className="sm:w-7 sm:h-7" /> : <FaBars size={24} className="sm:w-7 sm:h-7" />}
            </button>

            {/* Logo - Centered */}
            <div className="flex-1 text-center">
              <img
                src={logo}
                alt="Logo"
                className="h-16 sm:h-20 w-auto object-contain inline-block"
              />
            </div>

            {/* Operator Login - Mobile/Tablet */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setOperatorOpen(!operatorOpen)}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-blue-900 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-xs sm:text-sm md:text-base whitespace-nowrap"
                aria-label="Operator Login"
              >
                <FaUser size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Operator</span>
                <span className="sm:hidden">Operator</span>
              </button>

              {operatorOpen && (
                <div className="dropdown-menu-animate absolute right-0 mt-2 w-48 sm:w-56 bg-[#e5e5e5] text-blue-900 rounded-lg shadow-xl z-50">
                  <a
                    href="https://sms.tccl.co.in/index.php/lco_portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item block px-4 sm:px-5 py-3 sm:py-4 hover:bg-white/20 rounded-t-lg transition-all text-base sm:text-lg font-bold text-blue-900"
                  >
                    Tamil Nadu
                  </a>
                  <div className="h-px bg-white/10"></div>
                  <a
                    href="https://sms.kclnetworks.com/index.php/lco_portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item block px-4 sm:px-5 py-3 sm:py-4 hover:bg-white/20 rounded-b-lg transition-all text-base sm:text-lg font-bold text-blue-900"
                  >
                    Karnataka
                  </a>
                   <div className="h-px bg-white/10"></div>
                  <a
                    href="https://iptv.tccl.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item block px-4 sm:px-5 py-3 sm:py-4 hover:bg-white/20 rounded-b-lg transition-all text-base sm:text-lg font-bold text-blue-900"
                  >
                    IPTV
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu - Responsive */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#e5e5e5] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 space-y-1 sm:space-y-2">
            {menu.map((m) => (
              <div key={m.title}>
                {m.items ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === m.title ? null : m.title,
                        )
                      }
                      className="w-full text-left px-4 sm:px-5 py-3 sm:py-4 text-blue-900 hover:bg-white/10 hover:text-blue-900 rounded-lg transition-all text-base sm:text-lg font-bold"
                    >
                      {m.title}
                    </button>

                    {openDropdown === m.title && (
                      <div className="bg-[#e5e5e5] rounded-lg ml-4 mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                        {m.items.map((it) => (
                          <a
                            key={it.title}
                            href={it.href}
                            target={
                              it.href.endsWith(".pdf") || it.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              it.href.endsWith(".pdf") || it.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            onClick={() => {
                              setMobileOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="dropdown-item block px-4 sm:px-5 py-2.5 sm:py-3.5 text-blue-900 hover:text-blue-900 hover:bg-white/20 rounded transition-all text-sm sm:text-lg font-bold"
                          >
                            {it.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={m.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 sm:px-5 py-3 sm:py-4 text-blue-900 hover:bg-white/10 hover:text-blue-900 rounded-lg transition-all font-bold text-base sm:text-lg"
                  >
                    {m.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;