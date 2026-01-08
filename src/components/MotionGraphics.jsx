import React, { useEffect, useState, useRef } from "react";

export default function ScrollBanner() {
  const images = [
    "/assets/Landing page 2.jpg",
    "/assets/Landing page 3.jpg",
    "/assets/Landing page 4.jpg",
    "/assets/1.png",
    "/assets/2.png",
    "/assets/3.png",
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
    <section className="w-full h-screen overflow-hidden bg-white m-0 p-0">
      <div className="relative w-full h-full">

        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Full screen image with smart containment */}
            <img
              src={src}
              alt="banner background"
              className="max-w-full max-h-full object-contain"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                startAutoPlay();
              }}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${i === current ? "bg-blue-500 scale-125" : "bg-white/70 hover:bg-white"
                }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setCurrent(current === 0 ? images.length - 1 : current - 1);
            startAutoPlay();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white z-20 transition-all hover:scale-110"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => {
            setCurrent((current + 1) % images.length);
            startAutoPlay();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white z-20 transition-all hover:scale-110"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </section>
  );
}