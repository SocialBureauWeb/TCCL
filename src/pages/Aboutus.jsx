import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";
import ContactSection from "../components/ContactSection";

const sections = [
  {
    title: "WHO RUN THE SHOW",
    text: `Thamizhaga Cable TV Communication Ltd (TCCL) is one of the largest 
    Cable distribution companies with a strong emphasis on quality of service and content.`,
    image: "/assets/abt1.png",
  },
  {
    title: "OUR JOURNEY",
    text: `We cater to millions of subscribers across Tamil Nadu with a fiber optic backbone 
    and advanced distribution infrastructure.`,
    image: "/assets/about2.jpg",
  },
  {
    title: "OUR REACH",
    text: `TCCL serves more than 30,00,000 households with the support of 8000+ cable operators 
    across Tamil Nadu, Andhra Pradesh, and Karnataka.`,
    image: "/assets/about3.jpg",
  },
  {
    title: "OUR TECHNOLOGY",
    text: `We operate 8500 KM Fiber Network and provide more than 500 digital channels 
    with HD & 3D experience.`,
    image: "/assets/about4.jpg",
  },
  {
    title: "OUR COMMITMENT",
    text: `TCCL is committed to delivering the highest quality of service with advanced technology 
    and continuous upgrades.`,
    image: "/assets/about5.jpg",
  },
];

export const AboutUs = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      if (sectionIndex !== currentSection && sectionIndex < sections.length) {
        setCurrentSection(sectionIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <div>
        <Navbar/>
    <div className="w-full h-full bg-black">

      {sections.map((sec, index) => (
        <section
          key={index}
          className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
          {/* BACKGROUND IMAGES WITH SMOOTH CROSSFADE */}
          <AnimatePresence>
            {index === currentSection && (
              <motion.img
                key={sec.image}
                src={sec.image}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.15, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.15, filter: "blur(6px)" }}
                transition={{ duration: .5, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>

          {/* Gradient Overlays */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-black/70 to-black pointer-events-none" />
          {index !== 0 && (
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
          )}

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative z-10 max-w-4xl text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {sec.title}
            </h1>

            <p className="text-lg md:text-2xl text-white/90">{sec.text}</p>
          </motion.div>
        </section>
      ))}
    </div>
    <ContactSection/>
  </div>
  );
};
