// // import React, { useState, useRef, useEffect } from 'react'
// // import { FaUser } from 'react-icons/fa'

// // export const Navbar = ({ logo = '/assets/logo.png' }) => {
// //   const [mobileOpen, setMobileOpen] = useState(false)
// //   const [openDropdown, setOpenDropdown] = useState(null)
// //   const [operatorOpen, setOperatorOpen] = useState(false)
// //   const [showSearch, setShowSearch] = useState(false)
// //   const wrapperRef = useRef(null)

// //   useEffect(() => {
// //     function handleOutside(event) {
// //       if (!wrapperRef.current) return

// //       if (!wrapperRef.current.contains(event.target)) {
// //         setMobileOpen(false)
// //         setOpenDropdown(null)
// //         setOperatorOpen(false)
// //       }
// //     }

// //     document.addEventListener('mousedown', handleOutside)
// //     document.addEventListener('touchstart', handleOutside)

// //     return () => {
// //       document.removeEventListener('mousedown', handleOutside)
// //       document.removeEventListener('touchstart', handleOutside)
// //     }
// //   }, [])



// //   const menu = [
// //     { title: 'Home', href: '/' },
// //     { title: 'About Us', href: '/about' },
// //     {
// //       title: 'Regulatory', items: [
// //         { title: 'TCCL RIO', href: '/assets/pdf1.pdf' },
// //         { title: 'Declaration Under Section 4(4)', href: '/declaration' },
// //       ],
// //     },
// //     {
// //       title: 'Consumer Corner', items: [
// //         { title: 'Channels and Packages', href: '/channelPackage' },
// //         { title: 'Network Capacity Fee', href: '/network' },
// //         { title: 'CPE Scheme', href: '/cpeScheme' },
// //         { title: 'Manual of Practice', href: '/assets/pdf2.pdf' }
// //       ],
// //     },
// //     {
// //       title: 'Subscriber Corner', items: [
// //         { title: 'Subscriber Login', href: 'https://customer.tccl.co.in/' },
// //         { title: 'CAF FORM', href: '/assets/pdf3.pdf' },
// //       ],
// //     },
// //     { title: 'Contact Us', href: '/contact' },
// //   ]

// //   return (
// //     <nav ref={wrapperRef} className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg text-white shadow-lg border-b border-white/10 w-full">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-16">
// //           {/* Hamburger Menu */}
// //           <button
// //             onClick={() => setMobileOpen(!mobileOpen)}
// //             className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
// //             aria-label="Toggle menu"
// //           >
// //             ☰
// //           </button>

// //           {/* Centered logo on mobile, left on desktop */}
// //           <div className="flex-1 md:flex-none text-center md:text-left">
// //             <img src={logo} alt="Logo" className="h-8 inline-block" />
// //           </div>

// //           {/* Desktop Menu */}
// //           <div className="hidden md:flex items-center gap-6 flex-1 ml-8">
// //             {menu.map((m) => (
// //               <div key={m.title} className="relative group">
// //                 {m.items ? (
// //                   <>
// //                     <div key={m.title} className="relative group">
// //                       {m.items ? (
// //                         <>
// //                           {/* Menu title */}
// //                           <span className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:opacity-90">
// //                             {m.title}
// //                           </span>

// //                           {/* Dropdown on hover */}
// //                           <div
// //                             className="
// //           absolute left-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700
// //           rounded-md shadow-xl z-50
// //           opacity-0 invisible
// //           group-hover:opacity-100 group-hover:visible
// //           transition-all duration-200
// //         "
// //                           >
// //                             {m.items.map((it) => (
// //                               <a
// //                                 key={it.title}
// //                                 href={it.href}
// //                                 target={it.href.endsWith('.pdf') ? '_blank' : undefined}
// //                                 rel={it.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
// //                                 className="block px-4 py-2 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md"
// //                               >
// //                                 {it.title}
// //                               </a>

// //                             ))}
// //                           </div>
// //                         </>
// //                       ) : (
// //                         <a href={m.href} className="hover:opacity-90">
// //                           {m.title}
// //                         </a>
// //                       )}
// //                     </div>

// //                   </>
// //                 ) : (
// //                   <a href={m.href} className="hover:text-blue-500 transition-colors">
// //                     {m.title}
// //                   </a>
// //                 )}
// //               </div>
// //             ))}
// //           </div>

// //           {/* Search Icon */}
// //           <div className="flex items-center gap-4">

// //             {/* Operator Login Button - Desktop */}
// //             {/* <div className="relative">
// //               <button
// //                 onClick={() => setOperatorOpen(!operatorOpen)}
// //                 className="hidden md:inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-1 rounded-full font-medium shadow-sm hover:brightness-95"
// //                 aria-expanded={operatorOpen}
// //                 aria-haspopup="menu"
// //               >
// //                 <FaUser size={16} />
// //                 Operator Login
// //               </button>

// //               {operatorOpen && (
// //             <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-xl z-50">
// //                 <a
// //                   href="https://sms.tccl.co.in/index.php/lco_portal"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="block px-4 py-2 hover:bg-blue-100"
// //                 >
// //                   Tamil Nadu
// //                 </a>

// //                 <a
// //                   href="https://sms.kclnetworks.com/index.php/lco_portal"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="block px-4 py-2 hover:bg-blue-100 rounded-b-md"
// //                 >
// //                   Karnataka
// //                 </a>
// //   </div>
// //               )}
// //             </div> */}

// //             {/* Mobile operator button on the right */}
// //             {/* <div className="relative md:hidden">
// //               <button
// //                 onClick={() => setOperatorOpen(!operatorOpen)}
// //                 className="md:hidden p-2 text-black hover:bg-white/10 rounded-lg"
// //                 aria-label="Operator"
// //               >
// //                 <FaUser size={20} />
// //               </button>

// //               {operatorOpen && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-xl z-50">
// //                   <a
// //                     href="https://sms.tccl.co.in/index.php/lco_portal"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="block px-4 py-2 hover:bg-blue-100"
// //                   >
// //                     Tamil Nadu
// //                   </a>

// //                   <a
// //                     href="https://sms.kclnetworks.com/index.php/lco_portal"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="block px-4 py-2 hover:bg-blue-100 rounded-b-md"
// //                   >
// //                     Karnataka
// //                   </a>
// //                 </div>
// //               )}
// //             </div> */}

// //             {/* Operator Login - Desktop (Hover) */}
// //             <div
// //               className="relative hidden md:block"
// //               onMouseEnter={() => setOperatorOpen(true)}
// //               onMouseLeave={() => setOperatorOpen(false)}
// //             >
// //               <button
// //                 className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1 rounded-full font-medium shadow-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all"
// //                 aria-haspopup="menu"
// //               >
// //                 <FaUser size={16} />
// //                 Operator Login
// //               </button>

// //               {operatorOpen && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700 rounded-md shadow-xl z-50">
// //                   <a
// //                     href="https://sms.tccl.co.in/index.php/lco_portal"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="block px-4 py-2 hover:bg-gray-700 rounded-t-md"
// //                   >
// //                     Tamil Nadu
// //                   </a>
// //                   <a
// //                     href="https://sms.kclnetworks.com/index.php/lco_portal"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="block px-4 py-2 hover:bg-gray-700 rounded-b-md"
// //                   >
// //                     Karnataka
// //                   </a>
// //                 </div>
// //               )}
// //             </div>


// //             {/* Mobile operator button - ONLY ONE */}
// //             <div className="relative md:hidden">
// //               <button
// //                 onClick={() => setOperatorOpen(!operatorOpen)}
// //                 className="p-2 text-white hover:bg-white/10 rounded-lg"
// //                 aria-label="Operator"
// //               >
// //                 <FaUser size={20} />
// //               </button>

// //               {operatorOpen && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700 rounded-md shadow-xl z-50">
// //                   <a
// //                     href="https://sms.tccl.co.in/index.php/lco_portal"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="block px-4 py-2 hover:bg-gray-700 rounded-t-md"
// //                   >
// //                     Tamil Nadu
// //                   </a>
// //                   <a
// //                     href="https://sms.kclnetworks.com/index.php/lco_portal"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="block px-4 py-2 hover:bg-gray-700 rounded-b-md"
// //                   >
// //                     Karnataka
// //                   </a>
// //                 </div>
// //               )}
// //             </div>

// //           </div>
// //         </div>

// //         {/* Mobile menu */}
// //         {/* Mobile menu */}
// //         {mobileOpen && (
// //           <div className="md:hidden pb-4 z-50 bg-black">
// //             {menu.map((m) => (
// //               <div key={m.title}>
// //                 {m.items ? (
// //                   <>
// //                     <button
// //                       onClick={() =>
// //                         setOpenDropdown(openDropdown === m.title ? null : m.title)
// //                       }
// //                       className="w-full text-left px-4 py-2 hover:bg-gray-800"
// //                     >
// //                       {m.title}
// //                     </button>

// //                     {openDropdown === m.title && (
// //                       <div className="bg-gray-800">
// //                         {m.items.map((it) => (
// //                           <a
// //                             key={it.title}
// //                             href={it.href}
// //                             target={it.href.endsWith('.pdf') ? '_blank' : undefined}
// //                             rel={it.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
// //                             onClick={() => {
// //                               setMobileOpen(false)
// //                               setOpenDropdown(null)
// //                             }}
// //                             className="block pl-8 pr-4 py-2 hover:bg-gray-700"
// //                           >
// //                             {it.title}
// //                           </a>
// //                         ))}
// //                       </div>
// //                     )}
// //                   </>
// //                 ) : (
// //                   <a
// //                     href={m.href}
// //                     onClick={() => setMobileOpen(false)}
// //                     className="block px-4 py-2 hover:bg-gray-800"
// //                   >
// //                     {m.title}
// //                   </a>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   )
// // }

// import React, { useState, useRef, useEffect } from 'react'
// import { FaUser } from 'react-icons/fa'

// export const Navbar = ({ logo = '/assets/logo.png' }) => {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const [operatorOpen, setOperatorOpen] = useState(false)
//   const [showSearch, setShowSearch] = useState(false)
//   const wrapperRef = useRef(null)
//   const timerRef = useRef(null)

//   useEffect(() => {
//     function handleOutside(event) {
//       if (!wrapperRef.current) return

//       if (!wrapperRef.current.contains(event.target)) {
//         setMobileOpen(false)
//         setOpenDropdown(null)
//         setOperatorOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleOutside)
//     document.addEventListener('touchstart', handleOutside)

//     return () => {
//       document.removeEventListener('mousedown', handleOutside)
//       document.removeEventListener('touchstart', handleOutside)
//     }
//   }, [])

//   const handleOperatorMouseEnter = () => {
//     // Clear any existing timer
//     if (timerRef.current) {
//       clearTimeout(timerRef.current)
//     }
//     setOperatorOpen(true)
//   }

//   const handleOperatorMouseLeave = () => {
//     // Set timer to close after 3 seconds
//     timerRef.current = setTimeout(() => {
//       setOperatorOpen(false)
//     }, 3000)
//   }

//   const menu = [
//     { title: 'Home', href: '/' },
//     { title: 'About Us', href: '/about' },
//     {
//       title: 'Regulatory', items: [
//         { title: 'TCCL RIO', href: '/assets/pdf1.pdf' },
//         { title: 'Declaration Under Section 4(4)', href: '/declaration' },
//       ],
//     },
//     {
//       title: 'Consumer Corner', items: [
//         { title: 'Channels and Packages', href: '/channelPackage' },
//         { title: 'Network Capacity Fee', href: '/network' },
//         { title: 'CPE Scheme', href: '/cpeScheme' },
//         { title: 'Manual of Practice', href: '/assets/pdf2.pdf' }
//       ],
//     },
//     {
//       title: 'Subscriber Corner', items: [
//         { title: 'Subscriber Login', href: 'https://customer.tccl.co.in/' },
//         { title: 'CAF FORM', href: '/assets/pdf3.pdf' },
//       ],
//     },
//     { title: 'Contact Us', href: '/contact' },
//   ]

//   return (
//     <nav ref={wrapperRef} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg text-white shadow-lg border-b border-white/10 w-full">
//       <style>{`
//         @keyframes slideDownFade {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .dropdown-menu-animate {
//           animation: slideDownFade 0.3s ease-out;
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Hamburger Menu */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
//             aria-label="Toggle menu"
//           >
//             ☰
//           </button>

//           {/* Centered logo on mobile, left on desktop */}
//           <div className="flex-1 md:flex-none text-center md:text-left">
//             <img src={logo} alt="Logo" className="h-9 w-16 inline-block" />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-6 flex-1 ml-8">
//             {menu.map((m) => (
//               <div key={m.title} className="relative group">
//                 {m.items ? (
//                   <>
//                     <div key={m.title} className="relative group">
//                       {m.items ? (
//                         <>
//                           {/* Menu title */}
//                           <span className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:opacity-90">
//                             {m.title}
//                           </span>

//                           {/* Dropdown on hover */}
//                           <div
//                             className="
//           absolute left-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700
//           rounded-md shadow-xl z-50
//           opacity-0 invisible
//           group-hover:opacity-100 group-hover:visible
//           transition-all duration-200
//         "
//                           >
//                             {m.items.map((it) => (
//                               <a
//                                 key={it.title}
//                                 href={it.href}
//                                 target={it.href.endsWith('.pdf') ? '_blank' : undefined}
//                                 rel={it.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
//                                 className="block px-4 py-2 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md"
//                               >
//                                 {it.title}
//                               </a>

//                             ))}
//                           </div>
//                         </>
//                       ) : (
//                         <a href={m.href} className="hover:opacity-90">
//                           {m.title}
//                         </a>
//                       )}
//                     </div>

//                   </>
//                 ) : (
//                   <a href={m.href} className="hover:text-blue-500 transition-colors">
//                     {m.title}
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Search Icon */}
//           <div className="flex items-center gap-4">

//             {/* Operator Login - Desktop (Hover with 3 second timer) */}
//             <div
//               className="relative hidden md:block"
//               onMouseEnter={handleOperatorMouseEnter}
//               onMouseLeave={handleOperatorMouseLeave}
//             >
//               <button
//                 className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1 rounded-full font-medium shadow-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all"
//                 aria-haspopup="menu"
//               >
//                 <FaUser size={16} />
//                 Operator Login
//               </button>

//               {operatorOpen && (
//                 <div className="dropdown-menu-animate absolute right-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700 rounded-md shadow-xl z-50">
//                   <a
//                     href="https://sms.tccl.co.in/index.php/lco_portal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block px-4 py-2 hover:bg-gray-700 rounded-t-md transition-colors"
//                   >
//                     Tamil Nadu
//                   </a>
//                   <a
//                     href="https://sms.kclnetworks.com/index.php/lco_portal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block px-4 py-2 hover:bg-gray-700 rounded-b-md transition-colors"
//                   >
//                     Karnataka
//                   </a>
//                 </div>
//               )}
//             </div>


//             {/* Mobile operator button - ONLY ONE */}
//             <div className="relative md:hidden">
//               <button
//                 onClick={() => setOperatorOpen(!operatorOpen)}
//                 className="p-2 text-white hover:bg-white/10 rounded-lg"
//                 aria-label="Operator"
//               >
//                 <FaUser size={20} />
//               </button>

//               {operatorOpen && (
//                 <div className="dropdown-menu-animate absolute right-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700 rounded-md shadow-xl z-50">
//                   <a
//                     href="https://sms.tccl.co.in/index.php/lco_portal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block px-4 py-2 hover:bg-gray-700 rounded-t-md transition-colors"
//                   >
//                     Tamil Nadu
//                   </a>
//                   <a
//                     href="https://sms.kclnetworks.com/index.php/lco_portal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block px-4 py-2 hover:bg-gray-700 rounded-b-md transition-colors"
//                   >
//                     Karnataka
//                   </a>
//                 </div>
//               )}
//             </div>

//           </div>
//         </div>

//         {/* Mobile menu */}
//         {mobileOpen && (
//           <div className="md:hidden pb-4 z-50 bg-black">
//             {menu.map((m) => (
//               <div key={m.title}>
//                 {m.items ? (
//                   <>
//                     <button
//                       onClick={() =>
//                         setOpenDropdown(openDropdown === m.title ? null : m.title)
//                       }
//                       className="w-full text-left px-4 py-2 hover:bg-gray-800"
//                     >
//                       {m.title}
//                     </button>

//                     {openDropdown === m.title && (
//                       <div className="bg-gray-800">
//                         {m.items.map((it) => (
//                           <a
//                             key={it.title}
//                             href={it.href}
//                             target={it.href.endsWith('.pdf') ? '_blank' : undefined}
//                             rel={it.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
//                             onClick={() => {
//                               setMobileOpen(false)
//                               setOpenDropdown(null)
//                             }}
//                             className="block pl-8 pr-4 py-2 hover:bg-gray-700"
//                           >
//                             {it.title}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <a
//                     href={m.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="block px-4 py-2 hover:bg-gray-800"
//                   >
//                     {m.title}
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }




import React, { useState, useRef, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

export const Navbar = ({ logo = '/assets/logo.png' }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [operatorOpen, setOperatorOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const wrapperRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    function handleOutside(event) {
      if (!wrapperRef.current) return

      if (!wrapperRef.current.contains(event.target)) {
        setMobileOpen(false)
        setOpenDropdown(null)
        setOperatorOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside)

    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [])

  const handleOperatorMouseEnter = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setOperatorOpen(true)
  }

  const handleOperatorMouseLeave = () => {
    // Set timer to close after 3 seconds
    timerRef.current = setTimeout(() => {
      setOperatorOpen(false)
    }, 3000)
  }

  const menu = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    {
      title: 'Regulatory', items: [
        { title: 'TCCL RIO', href: '/assets/pdf1.pdf' },
        { title: 'Declaration Under Section 4(4)', href: '/declaration' },
      ],
    },
    {
      title: 'Consumer Corner', items: [
        { title: 'Channels and Packages', href: '/channelPackage' },
        { title: 'Network Capacity Fee', href: '/network' },
        { title: 'CPE Scheme', href: '/cpeScheme' },
        { title: 'Manual of Practice', href: '/assets/pdf2.pdf' }
      ],
    },
    {
      title: 'Subscriber Corner', items: [
        { title: 'Subscriber Login', href: 'https://customer.tccl.co.in/' },
        { title: 'CAF FORM', href: '/assets/pdf3.pdf' },
      ],
    },
    { title: 'Contact Us', href: '/contact' },
  ]

  return (
    <nav ref={wrapperRef} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg text-white shadow-lg border-b border-white/10 w-full">
      <style>{`
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
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Centered logo on mobile, left on desktop */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <img src={logo} alt="Logo" className="h-9 w-16 md:h-12 md:w-20 inline-block" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 flex-1 ml-8">
            {menu.map((m) => (
              <div key={m.title} className="relative group">
                {m.items ? (
                  <>
                    <div key={m.title} className="relative group">
                      {m.items ? (
                        <>
                          {/* Menu title */}
                          <span className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:opacity-90">
                            {m.title}
                          </span>

                          {/* Dropdown on hover */}
                          <div
                            className="
          absolute left-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700
          rounded-md shadow-xl z-50
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-200
        "
                          >
                            {m.items.map((it) => (
                              <a
                                key={it.title}
                                href={it.href}
                                target={it.href.endsWith('.pdf') ? '_blank' : undefined}
                                rel={it.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                                className="block px-4 py-2 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md"
                              >
                                {it.title}
                              </a>

                            ))}
                          </div>
                        </>
                      ) : (
                        <a href={m.href} className="hover:opacity-90">
                          {m.title}
                        </a>
                      )}
                    </div>

                  </>
                ) : (
                  <a href={m.href} className="hover:text-blue-500 transition-colors">
                    {m.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Search Icon */}
          <div className="flex items-center gap-4">

            {/* Operator Login - Desktop (Hover with 3 second timer) */}
            <div
              className="relative hidden md:block"
              onMouseEnter={handleOperatorMouseEnter}
              onMouseLeave={handleOperatorMouseLeave}
            >
              <button
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1 rounded-full font-medium shadow-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                aria-haspopup="menu"
              >
                <FaUser size={16} />
                Operator Login
              </button>

              {operatorOpen && (
                <div className="dropdown-menu-animate absolute right-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700 rounded-md shadow-xl z-50">
                  <a
                    href="https://sms.tccl.co.in/index.php/lco_portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-700 rounded-t-md transition-colors"
                  >
                    Tamil Nadu
                  </a>
                  <a
                    href="https://sms.kclnetworks.com/index.php/lco_portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-700 rounded-b-md transition-colors"
                  >
                    Karnataka
                  </a>
                </div>
              )}
            </div>


            {/* Mobile operator button - ONLY ONE */}
            <div className="relative md:hidden">
              <button
                onClick={() => setOperatorOpen(!operatorOpen)}
                className="p-2 text-white hover:bg-white/10 rounded-lg"
                aria-label="Operator"
              >
                <FaUser size={20} />
              </button>

              {operatorOpen && (
                <div className="dropdown-menu-animate absolute right-0 mt-2 w-48 bg-gray-800 text-white border border-gray-700 rounded-md shadow-xl z-50">
                  <a
                    href="https://sms.tccl.co.in/index.php/lco_portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-700 rounded-t-md transition-colors"
                  >
                    Tamil Nadu
                  </a>
                  <a
                    href="https://sms.kclnetworks.com/index.php/lco_portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-700 rounded-b-md transition-colors"
                  >
                    Karnataka
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 z-50 bg-black">
            {menu.map((m) => (
              <div key={m.title}>
                {m.items ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === m.title ? null : m.title)
                      }
                      className="w-full text-left px-4 py-2 hover:bg-gray-800"
                    >
                      {m.title}
                    </button>

                    {openDropdown === m.title && (
                      <div className="bg-gray-800">
                        {m.items.map((it) => (
                          <a
                            key={it.title}
                            href={it.href}
                            target={it.href.endsWith('.pdf') ? '_blank' : undefined}
                            rel={it.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                            onClick={() => {
                              setMobileOpen(false)
                              setOpenDropdown(null)
                            }}
                            className="block pl-8 pr-4 py-2 hover:bg-gray-700"
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
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    {m.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}