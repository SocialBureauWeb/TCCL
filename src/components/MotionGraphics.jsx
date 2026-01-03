// // // // import React, { useEffect, useState, useRef } from "react";

// // // // export default function ScrollBanner() {
// // // //   const images = [
// // // //     "/assets/pay222.png",
// // // //     "/assets/stroll3.png",
// // // //     "/assets/stroll5.png",
// // // //   ];

// // // //   const [current, setCurrent] = useState(0);
// // // //   const intervalRef = useRef(null);

// // // //   // Auto change after 4 seconds
// // // //   useEffect(() => {
// // // //     startAutoPlay();
// // // //     return stopAutoPlay;
// // // //   }, []);

// // // //   const startAutoPlay = () => {
// // // //     stopAutoPlay();
// // // //     intervalRef.current = setInterval(() => {
// // // //       setCurrent((prev) => (prev + 1) % images.length);
// // // //     }, 4000);
// // // //   };

// // // //   const stopAutoPlay = () => {
// // // //     if (intervalRef.current) clearInterval(intervalRef.current);
// // // //   };

// // // //   const nextSlide = () => {
// // // //     stopAutoPlay();
// // // //     setCurrent((prev) => (prev + 1) % images.length);
// // // //   };

// // // //   const prevSlide = () => {
// // // //     stopAutoPlay();
// // // //     setCurrent((prev) =>
// // // //       prev === 0 ? images.length - 1 : prev - 1
// // // //     );
// // // //   };

// // // //   return (
// // // //     <section className="w-full bg-white py-10">
// // // //       <div className="relative mx-auto max-w-5xl px-4">

// // // //         {/* IMAGE */}
// // // //         <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg bg-gray-100">
// // // //           <img
// // // //             src={images[current]}
// // // //             alt="banner"
// // // //             className="w-full h-full object-cover"
// // // //           />
// // // //         </div>

// // // //         {/* LEFT BUTTON */}
// // // //         <button
// // // //           onClick={prevSlide}
// // // //           className="absolute left-2 top-1/2 -translate-y-1/2 
// // // //                      bg-white/80 hover:bg-white
// // // //                      rounded-full p-2 shadow"
// // // //         >
// // // //           ◀
// // // //         </button>

// // // //         {/* RIGHT BUTTON */}
// // // //         <button
// // // //           onClick={nextSlide}
// // // //           className="absolute right-2 top-1/2 -translate-y-1/2 
// // // //                      bg-white/80 hover:bg-white
// // // //                      rounded-full p-2 shadow"
// // // //         >
// // // //           ▶
// // // //         </button>

// // // //         {/* DOTS */}
// // // //         <div className="mt-4 flex justify-center gap-2">
// // // //           {images.map((_, i) => (
// // // //             <button
// // // //               key={i}
// // // //               onClick={() => {
// // // //                 stopAutoPlay();
// // // //                 setCurrent(i);
// // // //               }}
// // // //               className={`h-2 w-2 rounded-full ${
// // // //                 i === current ? "bg-black" : "bg-gray-300"
// // // //               }`}
// // // //             />
// // // //           ))}
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // // import React, { useEffect, useState, useRef } from "react";

// // // export default function ScrollBanner() {
// // //   const images = [
// // //     "/assets/pay222.png",
// // //     "/assets/stroll3.png",
// // //     "/assets/stroll5.png",
// // //   ];

// // //   const [current, setCurrent] = useState(0);
// // //   const timerRef = useRef(null);

// // //   useEffect(() => {
// // //     start();
// // //     return stop;
// // //   }, []);

// // //   const start = () => {
// // //     stop();
// // //     timerRef.current = setInterval(() => {
// // //       setCurrent((c) => (c + 1) % images.length);
// // //     }, 4500);
// // //   };

// // //   const stop = () => {
// // //     if (timerRef.current) clearInterval(timerRef.current);
// // //   };

// // //   return (
// // //     <section className="w-full bg-white py-16">
// // //       <div className="relative mx-auto max-w-6xl px-4">

// // //         {/* SLIDER */}
// // //         <div className="relative h-[420px] overflow-hidden rounded-2xl bg-gray-100">

// // //           {images.map((img, index) => (
// // //             <img
// // //               key={index}
// // //               src={img}
// // //               alt="banner"
// // //               className={`
// // //                 absolute inset-0 w-full h-full object-cover
// // //                 transition-opacity duration-700 ease-in-out
// // //                 ${index === current ? "opacity-100" : "opacity-0"}
// // //               `}
// // //             />
// // //           ))}

// // //           {/* LEFT */}
// // //           <button
// // //             onClick={() =>
// // //               setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
// // //             }
// // //             className="
// // //               absolute left-4 top-1/2 -translate-y-1/2
// // //               h-10 w-10 rounded-full
// // //               bg-black/40 text-white
// // //               backdrop-blur
// // //               hover:bg-black/60 transition
// // //             "
// // //           >
// // //             ‹
// // //           </button>

// // //           {/* RIGHT */}
// // //           <button
// // //             onClick={() =>
// // //               setCurrent((c) => (c + 1) % images.length)
// // //             }
// // //             className="
// // //               absolute right-4 top-1/2 -translate-y-1/2
// // //               h-10 w-10 rounded-full
// // //               bg-black/40 text-white
// // //               backdrop-blur
// // //               hover:bg-black/60 transition
// // //             "
// // //           >
// // //             ›
// // //           </button>
// // //         </div>

// // //         {/* DOTS */}
// // //         <div className="mt-6 flex justify-center gap-3">
// // //           {images.map((_, i) => (
// // //             <button
// // //               key={i}
// // //               onClick={() => setCurrent(i)}
// // //               className={`
// // //                 h-2.5 rounded-full transition-all duration-300
// // //                 ${i === current ? "w-8 bg-black" : "w-2.5 bg-gray-300"}
// // //               `}
// // //             />
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }



// // import React, { useEffect, useState, useRef } from "react";

// // export default function ScrollBanner() {
// //   const images = [
// //     "/assets/pay222.png",
// //     "/assets/stroll3.png",
// //     "/assets/stroll5.png",
// //   ];

// //   const [current, setCurrent] = useState(0);
// //   const intervalRef = useRef(null);

// //   // Auto change after 4 seconds
// //   useEffect(() => {
// //     startAutoPlay();
// //     return stopAutoPlay;
// //   }, []);

// //   const startAutoPlay = () => {
// //     stopAutoPlay();
// //     intervalRef.current = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % images.length);
// //     }, 4000);
// //   };

// //   const stopAutoPlay = () => {
// //     if (intervalRef.current) clearInterval(intervalRef.current);
// //   };

// //   const nextSlide = () => {
// //     stopAutoPlay();
// //     setCurrent((prev) => (prev + 1) % images.length);
// //     startAutoPlay();
// //   };

// //   const prevSlide = () => {
// //     stopAutoPlay();
// //     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// //     startAutoPlay();
// //   };

// //   const goToSlide = (index) => {
// //     stopAutoPlay();
// //     setCurrent(index);
// //     startAutoPlay();
// //   };

// //   return (
// //     <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
// //       <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
// //         {/* Main Carousel Container */}
// //         <div className="relative group">
          
// //           {/* IMAGE with fade transition */}
// //           <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
// //             <div className="relative w-full h-full">
// //               {images.map((src, index) => (
// //                 <div
// //                   key={src}
// //                   className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
// //                     index === current
// //                       ? "opacity-100 translate-x-0"
// //                       : "opacity-0 translate-x-full"
// //                   }`}
// //                 >
// //                   <img
// //                     src={src}
// //                     alt={`Slide ${index + 1}`}
// //                     className="w-full h-full object-cover"
// //                     loading="lazy"
// //                   />
// //                   {/* Gradient overlay */}
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
// //                 </div>
// //               ))}
// //             </div>
            
// //             {/* Image Counter */}
// //             <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
// //               {current + 1} / {images.length}
// //             </div>
// //           </div>

// //           {/* LEFT BUTTON with hover effect */}
// //           <button
// //             onClick={prevSlide}
// //             onMouseEnter={stopAutoPlay}
// //             onMouseLeave={startAutoPlay}
// //             className="absolute left-4 top-1/2 -translate-y-1/2 
// //                        bg-white/90 hover:bg-white backdrop-blur-sm
// //                        rounded-full p-3 shadow-xl hover:shadow-2xl
// //                        transition-all duration-300 hover:scale-110
// //                        border border-gray-200
// //                        hidden group-hover:block"
// //             aria-label="Previous slide"
// //           >
// //             <svg 
// //               className="w-6 h-6 text-gray-800" 
// //               fill="none" 
// //               stroke="currentColor" 
// //               viewBox="0 0 24 24"
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //             </svg>
// //           </button>

// //           {/* RIGHT BUTTON with hover effect */}
// //           <button
// //             onClick={nextSlide}
// //             onMouseEnter={stopAutoPlay}
// //             onMouseLeave={startAutoPlay}
// //             className="absolute right-4 top-1/2 -translate-y-1/2 
// //                        bg-white/90 hover:bg-white backdrop-blur-sm
// //                        rounded-full p-3 shadow-xl hover:shadow-2xl
// //                        transition-all duration-300 hover:scale-110
// //                        border border-gray-200
// //                        hidden group-hover:block"
// //             aria-label="Next slide"
// //           >
// //             <svg 
// //               className="w-6 h-6 text-gray-800" 
// //               fill="none" 
// //               stroke="currentColor" 
// //               viewBox="0 0 24 24"
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //             </svg>
// //           </button>

// //           {/* Progress Bar */}
// //           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
// //             <div 
// //               className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
// //               style={{ width: `${((current + 1) / images.length) * 100}%` }}
// //             />
// //           </div>
// //         </div>

// //         {/* DOTS with better styling */}
// //         <div className="mt-8 flex justify-center items-center gap-3">
// //           {images.map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => goToSlide(i)}
// //               onMouseEnter={stopAutoPlay}
// //               onMouseLeave={startAutoPlay}
// //               className={`relative transition-all duration-300 ${
// //                 i === current 
// //                   ? "scale-125" 
// //                   : "hover:scale-110"
// //               }`}
// //               aria-label={`Go to slide ${i + 1}`}
// //             >
// //               <div 
// //                 className={`h-3 w-3 rounded-full transition-all duration-300 ${
// //                   i === current 
// //                     ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" 
// //                     : "bg-gray-300 hover:bg-gray-400"
// //                 }`}
// //               />
// //               {/* Pulse animation for active dot */}
// //               {i === current && (
// //                 <div className="absolute inset-0 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-ping" />
// //               )}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Caption Section (Optional) */}
// //         <div className="mt-6 text-center">
// //           <p className="text-gray-600 text-sm md:text-base">
// //             Slide {current + 1} of {images.length}
// //           </p>
// //           <div className="mt-2 flex justify-center gap-4">
// //             <button
// //               onClick={startAutoPlay}
// //               className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline"
// //             >
// //               Start Auto-play
// //             </button>
// //             <button
// //               onClick={stopAutoPlay}
// //               className="text-sm text-gray-600 hover:text-gray-800 font-medium hover:underline"
// //             >
// //               Pause
// //             </button>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }


// import React, { useEffect, useState, useRef } from "react";

// export default function ScrollBanner() {
//   const images = [
//     "/assets/sb.png",
//     "/assets/s1.png",
//     "/assets/stroll5.jpg",
//   ];

//   const [current, setCurrent] = useState(0);
//   const intervalRef = useRef(null);

//   // Auto change after 4 seconds
//   useEffect(() => {
//     startAutoPlay();
//     return stopAutoPlay;
//   }, []);

//   const startAutoPlay = () => {
//     stopAutoPlay();
//     intervalRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000);
//   };

//   const stopAutoPlay = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   const nextSlide = () => {
//     stopAutoPlay();
//     setCurrent((prev) => (prev + 1) % images.length);
//     startAutoPlay();
//   };

//   const prevSlide = () => {
//     stopAutoPlay();
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     startAutoPlay();
//   };

//   const goToSlide = (index) => {
//     stopAutoPlay();
//     setCurrent(index);
//     startAutoPlay();
//   };

//   return (
//     <section className="w-full overflow-hidden">
//       {/* Full-width container - no max-width restrictions */}
//       <div className="relative">
        
//         {/* FULL SCREEN IMAGE CONTAINER */}
//         <div className="relative w-full h-[60vh] min-h-[500px] max-h-[800px]">
//           {images.map((src, index) => (
//             <div
//               key={src}
//               className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//                 index === current ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={src}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
              
//               {/* Dark overlay for better text visibility (optional) */}
//               <div className="absolute inset-0 bg-black/10" />
//             </div>
//           ))}

//           {/* LEFT NAVIGATION BUTTON */}
//           <button
//             onClick={prevSlide}
//             onMouseEnter={stopAutoPlay}
//             onMouseLeave={startAutoPlay}
//             className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 
//                        bg-white/80 hover:bg-white backdrop-blur-sm
//                        rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl
//                        transition-all duration-300 hover:scale-110
//                        border border-white/20"
//             aria-label="Previous slide"
//           >
//             <svg 
//               className="w-5 h-5 md:w-6 md:h-6 text-gray-800" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* RIGHT NAVIGATION BUTTON */}
//           <button
//             onClick={nextSlide}
//             onMouseEnter={stopAutoPlay}
//             onMouseLeave={startAutoPlay}
//             className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 
//                        bg-white/80 hover:bg-white backdrop-blur-sm
//                        rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl
//                        transition-all duration-300 hover:scale-110
//                        border border-white/20"
//             aria-label="Next slide"
//           >
//             <svg 
//               className="w-5 h-5 md:w-6 md:h-6 text-gray-800" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>

//           {/* PROGRESS BAR (Top of image) */}
//           <div className="absolute top-0 left-0 right-0 h-1 bg-black/20">
//             <div 
//               className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-1000 ease-out"
//               style={{ width: `${((current + 1) / images.length) * 100}%` }}
//             />
//           </div>

//           {/* SLIDE INDICATORS (Bottom Center) */}
//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToSlide(i)}
//                 onMouseEnter={stopAutoPlay}
//                 onMouseLeave={startAutoPlay}
//                 className={`relative transition-all duration-300 ${
//                   i === current ? "scale-125" : "hover:scale-110"
//                 }`}
//                 aria-label={`Go to slide ${i + 1}`}
//               >
//                 <div 
//                   className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
//                     i === current 
//                       ? "bg-white shadow-lg" 
//                       : "bg-white/50 hover:bg-white/80"
//                   }`}
//                 />
//                 {/* Glow effect for active dot */}
//                 {i === current && (
//                   <div className="absolute inset-0 h-2 w-2 md:h-3 md:w-3 rounded-full bg-white/30 animate-ping" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



import React, { useEffect, useState, useRef } from "react";

export default function ScrollBanner() {
  const images = [
    "/assets/sb.png",
    "/assets/s1.png",
    "/assets/stroll5.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="relative w-full h-[70vh] md:h-[80vh]">

        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt="banner"
              className="
                w-full h-full
                object-contain
                bg-white
              "
            />
          </div>
        ))}

        {/* SIMPLE DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
