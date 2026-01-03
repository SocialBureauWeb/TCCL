

// import React, { useEffect, useState, useRef } from "react";

// export default function ScrollBanner() {
//   const images = [
//     "/assets/sb.png",
//     "/assets/s1.png",
//     "/assets/stroll5.jpg",
//   ];

//   const [current, setCurrent] = useState(0);
//   const intervalRef = useRef(null);

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

//   return (
//     <section className="w-full overflow-hidden bg-white">
//       <div className="relative w-full h-[45vh] sm:h-[40vh] md:h-[70vh] lg:h-[80vh]">

//         {images.map((src, index) => (
//           <div
//             key={src}
//             className={`absolute inset-0 transition-opacity duration-700 ${
//               index === current ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={src}
//               alt="banner"
//               className="
//                 w-full h-full
//                 object-contain
//                 bg-white
//               "
//             />
//           </div>
//         ))}

//         {/* SIMPLE DOTS */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//           {images.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`h-2 w-2 rounded-full ${
//                 i === current ? "bg-black" : "bg-gray-300"
//               }`}
//             />
//           ))}
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
    <section className="w-full overflow-hidden bg-white m-0 p-0">
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[60vh] lg:h-[75vh] m-0 p-0">

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
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${
                i === current ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}