// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Navbar } from "../components/Navbar";
// // import ContactSection from "../components/ContactSection";

// // const sections = [
// //   {
// //     title: "WHO RUN THE SHOW",
// //     text: `Thamizhaga Cable TV Communication Ltd (TCCL) is one of the largest 
// //     Cable distribution companies with a strong emphasis on quality of service and content.`,
// //     image: "/assets/abt1.png",
// //   },
// //   {
// //     title: "OUR JOURNEY",
// //     text: `We cater to millions of subscribers across Tamil Nadu with a fiber optic backbone 
// //     and advanced distribution infrastructure.`,
// //     image: "/assets/about2.jpg",
// //   },
// //   {
// //     title: "OUR REACH",
// //     text: `TCCL serves more than 30,00,000 households with the support of 8000+ cable operators 
// //     across Tamil Nadu, Andhra Pradesh, and Karnataka.`,
// //     image: "/assets/about3.jpg",
// //   },
// //   {
// //     title: "OUR TECHNOLOGY",
// //     text: `We operate 8500 KM Fiber Network and provide more than 500 digital channels 
// //     with HD & 3D experience.`,
// //     image: "/assets/about4.jpg",
// //   },
// //   {
// //     title: "OUR COMMITMENT",
// //     text: `TCCL is committed to delivering the highest quality of service with advanced technology 
// //     and continuous upgrades.`,
// //     image: "/assets/about5.jpg",
// //   },
// // ];

// // export const AboutUs = () => {
// //   const [currentSection, setCurrentSection] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollPosition = window.scrollY;
// //       const windowHeight = window.innerHeight;

// //       const sectionIndex = Math.floor(scrollPosition / windowHeight);
// //       if (sectionIndex !== currentSection && sectionIndex < sections.length) {
// //         setCurrentSection(sectionIndex);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [currentSection]);

// //   return (
// //     <div>
// //         <Navbar/>
// //     <div className="w-full h-full bg-black">

// //       {sections.map((sec, index) => (
// //         <section
// //           key={index}
// //           className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
// //         >
// //           {/* BACKGROUND IMAGES WITH SMOOTH CROSSFADE */}
// //           <AnimatePresence>
// //             {index === currentSection && (
// //               <motion.img
// //                 key={sec.image}
// //                 src={sec.image}
// //                 className="absolute inset-0 w-full h-full object-cover"
// //                 initial={{ opacity: 0, scale: 1.15, filter: "blur(6px)" }}
// //                 animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
// //                 exit={{ opacity: 0, scale: 1.15, filter: "blur(6px)" }}
// //                 transition={{ duration: .5, ease: "easeInOut" }}
// //               />
// //             )}
// //           </AnimatePresence>

// //           {/* Gradient Overlays */}
// //           <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-black/70 to-black pointer-events-none" />
// //           {index !== 0 && (
// //             <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
// //           )}

// //           {/* TEXT CONTENT */}
// //           <motion.div
// //             initial={{ y: 80, opacity: 0 }}
// //             whileInView={{ y: 0, opacity: 1 }}
// //             transition={{ duration: 1.2, ease: "easeOut" }}
// //             viewport={{ once: false, amount: 0.4 }}
// //             className="relative z-10 max-w-4xl text-center px-6"
// //           >
// //             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
// //               {sec.title}
// //             </h1>

// //             <p className="text-lg md:text-2xl text-white/90">{sec.text}</p>
// //           </motion.div>
// //         </section>
// //       ))}
// //     </div>
// //     <ContactSection/>
// //   </div>
// //   );
// // };




// import { motion } from "framer-motion";
// import { Users, Target, Award, Briefcase } from "lucide-react";
// import { Navbar } from "../components/Navbar";
// import ContactSection from "../components/ContactSection";

// export const AboutPage = () => {
//   const coreValues = [
//     { title: "Integrity", desc: "We operate with complete transparency and honesty.", icon: Award },
//     { title: "Innovation", desc: "We build solutions that create lasting impact.", icon: Target },
//     { title: "Commitment", desc: "We prioritize customer support and satisfaction.", icon: Briefcase },
//     { title: "Teamwork", desc: "We grow together and achieve excellence together.", icon: Users },
//   ];

//   return (
//     <div>
//       <Navbar />

//       <div className="font-sans bg-white text-gray-800">

//         {/* HERO SECTION */}
//         <section className="bg-gradient-to-br from-[#1a89e5] via-[#0083ed] to-blue-900 text-white pt-28 pb-24 px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">
//               About Our Company
//             </h1>
//             <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
//               Delivering excellence through innovation, dedication and trust.
//             </p>
//           </div>
//         </section>

//         {/* WHO WE ARE */}
//         <section className="py-20 px-6 bg-gray-50">
//           <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
//               <p className="text-gray-600 mb-6">
//                 We are a dedicated team committed to providing high-quality services
//                 and building strong relationships with our clients. With years of
//                 experience, we focus on delivering solutions that align with modern
//                 standards and customer expectations.
//               </p>
//               <p className="text-gray-600">
//                 Our mission is to deliver reliable, innovative, and customer-centric
//                 services that empower businesses and individuals.
//               </p>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               className="bg-white shadow-xl rounded-xl p-8 border-l-4 border-[#1a89e5]"
//             >
//               <h3 className="font-bold text-[#1a89e5] text-lg mb-4">Our Highlights</h3>
//               <ul className="text-gray-700 space-y-2 text-sm">
//                 <li>✓ Professional Expertise</li>
//                 <li>✓ Customer-Centric Approach</li>
//                 <li>✓ Trusted by Leading Brands</li>
//                 <li>✓ High Standard of Service Delivery</li>
//               </ul>
//             </motion.div>
//           </div>
//         </section>

//         {/* CORE VALUES */}
//         <section className="py-20 px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//             These values define who we are and how we work every day
//           </p>

//           <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             {coreValues.map((value, idx) => {
//               const Icon = value.icon;
//               return (
//                 <div
//                   key={idx}
//                   className="bg-[#1a89e5] text-white p-8 rounded-xl shadow-lg hover:scale-105 transition"
//                 >
//                   <Icon className="mx-auto h-10 w-10 mb-4" />
//                   <h3 className="font-bold text-xl mb-2">{value.title}</h3>
//                   <p className="text-sm opacity-90">{value.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* MISSION & VISION */}
//         <section className="py-20 px-6 bg-gray-50">
//           <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
//             <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#1a89e5]">
//               <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//               <p className="text-gray-600">
//                 To provide exceptional and innovative solutions that exceed
//                 expectations while ensuring customer satisfaction at every step.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#1a89e5]">
//               <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//               <p className="text-gray-600">
//                 To be a trusted leader known for delivering high-value professional
//                 services with unmatched quality and integrity.
//               </p>
//             </div>
//           </div>
//         </section>

//         <br />
//       </div>

//       <ContactSection />
//     </div>
//   );
// }




import { motion } from "framer-motion";
import { Users, Target, Award, Briefcase, Tv, Wifi, MapPin, Globe, BarChart, Shield, Clock, Heart } from "lucide-react";
import { Navbar } from "../components/Navbar";
import ContactSection from "../components/ContactSection";

export const AboutPage = () => {
  const coreValues = [
    { title: "Integrity", desc: "We operate with complete transparency and honesty.", icon: Shield },
    { title: "Innovation", desc: "We build solutions that create lasting impact.", icon: Target },
    { title: "Commitment", desc: "We prioritize customer support and satisfaction.", icon: Heart },
    { title: "Teamwork", desc: "We grow together and achieve excellence together.", icon: Users },
    { title: "Excellence", desc: "We strive for the highest standards in everything we do.", icon: Award },
    { title: "Reliability", desc: "Consistent performance you can count on.", icon: Clock },
  ];

  const services = [
    { title: "Digital Cable Television", desc: "500+ channels with high digital quality picture and sound", icon: Tv },
    { title: "Broadband Service", desc: "High-speed internet connectivity", icon: Wifi },
    { title: "Future Services", desc: "Video on Demand, Gaming, eCommerce and more", icon: Globe },
  ];

  const stats = [
    { number: "30,00,000+", label: "Households Served", icon: Users },
    { number: "8000+", label: "Cable Operator Partners", icon: Users },
    { number: "8500+", label: "KM Fibre Optic Network", icon: MapPin },
    { number: "500+", label: "Channels Offered", icon: Tv },
  ];

  return (
    <div>
      <Navbar />

      <div className="font-sans bg-white text-gray-800">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-[#1a89e5] via-[#0083ed] to-blue-900 text-white pt-28 pb-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About TCCL
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-95">
              Thamizhaga Cable TV Communication Ltd (TCCL) - Delivering digital excellence to millions across Tamil Nadu
            </p>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon className="h-5 w-5" />
                      <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                    </div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                WHO RUNS THE SHOW
              </h2>
              <div className="w-24 h-1 bg-[#1a89e5] mx-auto mb-8"></div>
            </div>
            
            <div className="grid gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  <strong>Thamizhaga Cable TV Communication Ltd (TCCL)</strong> is one of the largest Cable distribution companies with a strong emphasis on quality of service and content.
                </p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  This has enabled us to cater to millions of subscribers who are spread across Tamil Nadu in a very short span of time. With fiber optic backbone across its networks and state-of-the-art distribution set ups, we bring the digital age through Cable transforming the way viewers receive information and entertainment.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Thamizhaga Cable TV Communication Pvt. Ltd. is a leading Multi System Operator (MSO) in Chennai started operations in December 2012 with an aim to serve the entire state of Tamil Nadu with the best quality Cable Television experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY HISTORY & EXPANSION */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Journey & Expansion</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[#1a89e5]">Growth & Expansion</h3>
                <p className="text-gray-600 mb-4">
                  Today TCCL is serving to more than 30,00,000 households in the state of Tamil Nadu through more than 8000 Cable Operators partners.
                </p>
                <p className="text-gray-600">
                  After serving a greater part of Chennai, TCCL is now proliferated to the entire state of Tamil Nadu, Andhra Pradesh and Karnataka with State of the art Digital Head End 8500 KM Fibre Optic Network. After the implementation of DAS in Chennai TCCL was one of the MSO to provide actual DAS environment to the end customers successfully.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[#1a89e5]">Technology & Innovation</h3>
                <p className="text-gray-600 mb-4">
                  TCCL currently provides 500 channels with high Digital quality picture and sound to its subscribers. TCCL success can be attributed to the experience of the members of Tamil Nadu Cable TV Operators Welfare Association (TCOA) who are veterans in the field of cable TV technology.
                </p>
                <p className="text-gray-600">
                  TCOA members are the pioneers to conceive the concept of MSO (Multi System Operators). Prior to TCCL they have been instrumental in successful launch and establishment of MSO's. They Established TCCL in June 2012. Using international brands and state of art technology, Thamizhaga Cable TV Communication Pvt Ltd has developed a state of the art Digital Head End in Chennai.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[#1a89e5]">Quality Commitment</h3>
                <p className="text-gray-600">
                  TCCL is always committed to provide best possible Quality of Service to all our viewers. There are some differentiating factors that helped us to reach and sustain our position at the zenith.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Services</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-[#1a89e5] rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-center text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-center">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FUTURE PLANS */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Future Roadmap</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Way Forward</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  TCCL is all set to provide to its customer a very cost effective technologically advanced STB which would enable the subscribers to have an access to a plethora of Value added services like:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {['Video on Demand', 'Push VOD', 'Gaming', 'E-commerce'].map((service, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-6 h-6 bg-[#1a89e5] rounded-full flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-800 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 text-lg">
                  All these services will be available under a very secured Conditional Access and at a very competitive price. TCCL is the MSO (Multi System Operator) in the country to have state of the art Digital Headends in Tamil Nadu.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <p className="text-gray-800 font-semibold">
                    TCCL Set Top Boxes are technologically far ahead of the ones being used by competition and are equipped to support all the latest software upgrades.
                  </p>
                </div>
                
                <p className="text-gray-600 text-lg">
                  TCCL is now providing to its subscribers the High Definition (HD) and 3D Experience, ahead of any competing MSO in the Region. All of this is being made possible only as a result of the sustained commitment of TCCL towards technological up gradations and adaptations.
                </p>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-gray-800 text-lg font-semibold">
                    Our experienced and skilled management takes us far ahead of the other MSOs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                These values define who we are and how we work every day
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-[#1a89e5] rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#1a89e5] hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide exceptional and innovative digital cable solutions that exceed expectations while ensuring customer satisfaction at every step, bringing the best entertainment experience to millions of households across South India.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#1a89e5] hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading and most trusted Multi System Operator known for delivering high-value digital entertainment and broadband services with unmatched quality, technological innovation, and integrity across all regions we serve.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ContactSection />
    </div>
  );
}