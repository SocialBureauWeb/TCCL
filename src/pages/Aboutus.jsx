import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Tv,
  Wifi,
  Globe,
  Shield,
  Clock,
  Heart,
  ChevronRight,
  Play,
  CheckCircle,
  Zap,
  Headphones,
  ShieldCheck,
  Rocket,
  Award as AwardIcon,
  Tv as TvIcon,
  Satellite,
  Smartphone as SmartphoneIcon,
  TrendingUp as Growth,
  Database,
  Cable,
  Cctv,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import ContactSection from "../components/ContactSection";

export const AboutPage = () => {
  // Using images from your Home page assets
  const images = {
    hero: "/assets/Landing page 5.jpg",
    team: "/assets/Landing page 3.jpg",
    network: "/assets/Landing page 2.jpg",
    controlRoom: "/assets/aboutus.jpeg",
    fiber: "/assets/abt1.jpg",
    stats: "/assets/home2.png",
    expansionMap: '/assets/Landing page 6.jpg',
  };

  const coreValues = [
    { title: "Integrity", desc: "Transparent and honest operations in all dealings.", icon: Shield },
    { title: "Innovation", desc: "Cutting-edge solutions for modern entertainment.", icon: Target },
    { title: "Commitment", desc: "Dedicated to customer satisfaction and support.", icon: Heart },
    { title: "Teamwork", desc: "Collaborative excellence drives our success.", icon: Users },
    { title: "Excellence", desc: "Highest standards in service delivery.", icon: Award },
    { title: "Reliability", desc: "Consistent performance you can trust.", icon: Clock },
  ];

  const services = [
    {
      title: "Digital Cable TV",
      desc: "500+ channels with high digital picture and sound quality, including HD content",
      icon: Tv,
      image: "/assets/tv34.jpg"
    },
    {
      title: "Broadband Services",
      desc: "Broadband internet delivered over fiber-optic technology for reliable connectivity",
      icon: Wifi,
      image: "/assets/highspeed.jpg"
    },
    {
      title: "Future Technology",
      desc: "Planned value-added services including Video on Demand (VoD), Smart Home integrations, Gaming, and e-commerce",
      icon: Globe,
      image: "/assets/digit2.png"
    },
  ];

  const stats = [
    { number: "3M+", label: "Happy Households", icon: Users, color: "from-blue-500 to-blue-600" },
    { number: "500+", label: "TV Channels", icon: TvIcon, color: "from-green-500 to-green-600" },
    { number: "8500+", label: "KM Fiber Network", icon: Cable, color: "from-purple-500 to-purple-600" },
    { number: "8000+", label: "Operator Partners", icon: Users, color: "from-blue-500 to-blue-600" },
    { number: "24/7", label: "Customer Support", icon: Headphones, color: "from-blue-500 to-blue-600" },
    { number: "99.9%", label: "Service Uptime", icon: ShieldCheck, color: "from-teal-500 to-teal-600" },
  ];

  const achievements = [
    { year: "2012", title: "Foundation", desc: "Started operations in Chennai" },
    { year: "2014", title: "State Expansion", desc: "Expanded across Tamil Nadu" },
    { year: "2016", title: "1M Milestone", desc: "Reached 1 million subscribers" },
    { year: "2018", title: "Fiber Network", desc: "Launched 8500+ KM fiber optic" },
    { year: "2020", title: "Digital Infrastructure", desc: "Advanced digital head-end and DAS implementation" },
    { year: "2023", title: "3M+ Homes", desc: "Serving 3 million households", icon: Growth },
  ];

  const technologyFeatures = [
    { icon: Database, title: "Digital Headend", desc: "State-of-the-art processing and distribution" },
    { icon: Satellite, title: "Signal Quality", desc: "High-quality digital picture and sound" },
    { icon: SmartphoneIcon, title: "Platform Readiness", desc: "Infrastructure designed to support future digital services" },
    { icon: Cctv, title: "Secure Network", desc: "Content delivery supported by secure conditional access systems" },
  ];
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const line = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="font-sans bg-black text-white overflow-hidden">
      <Navbar />

      {/* ENHANCED HERO SECTION */}
 <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030005]">

            {/* HYPER-VIBRANT BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/Landing page 3.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-110"
                />

                {/* Layered Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0033] via-[#030005]/95 to-[#000a1a] z-10" />

                {/* Pulsating Neon Auras - TCCL Blue & Pinkish Violet */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#d946ef]/20 rounded-full blur-[160px] z-10"
                />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#1a89e5]/30 rounded-full blur-[160px] z-10"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 w-full mt-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT CONTENT: HYPER-STYLIZED */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-black uppercase tracking-[0.4em] mb-10 shadow-[0_0_30px_rgba(26,137,229,0.2)]"
                        >
                            <Sparkles size={14} className="animate-spin-slow text-blue-400" />
                            Tamil Nadu's Digital Pride
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tighter">
                            THE POWER OF <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a89e5] via-fuchsia-400 to-blue-600 drop-shadow-[0_0_15px_rgba(26,137,229,0.5)] uppercase">TCCL NETWORK</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl font-semibold border-l-4 border-blue-600/50 pl-6 italic">
                            Delivering high-quality digital cable television and broadband services
                            through a state-wide fiber optic backbone across Tamil Nadu.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <motion.a
                                href="/channelPackage"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(26,137,229,0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 bg-gradient-to-r from-blue-600 via-[#1a89e5] to-blue-700 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl"
                            >
                                Get Started <ChevronRight size={20} />
                            </motion.a>
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 bg-white/5 backdrop-blur-3xl border border-white/10 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all"
                            >
                                Contact Us
                            </motion.a>
                        </div>

                        {/* PREMIUM BADGES
                        <div className="flex justify-center gap-16 mt-20 pt-12 border-t border-white/10">
                            {[
                                { count: '3M+', label: 'CONNECTED', icon: Zap, color: 'blue' },
                                { count: '500+', label: 'COMMAND', icon: Tv, color: 'pink' },
                                { count: '100+', label: 'CENTERS', icon: ShieldCheck, color: 'blue' }
                            ].map((stat, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="flex items-center gap-2 mb-2">
                                        <stat.icon size={16} className={stat.color === 'blue' ? "text-blue-500" : "text-pink-500"} />
                                        <div className="text-3xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-all">{stat.count}</div>
                                    </div>
                                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{stat.label}</div>
                                </div>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* RIGHT CONTENT: FLOATING INTERACTIVE GRID */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-6 relative">
                        {[
                            { icon: Tv, title: 'Cable TV', gradient: 'from-[#1a89e5] to-blue-700' },
                            { icon: Wifi, title: 'Fiber Net', gradient: 'from-pink-500 to-fuchsia-600' },
                            { icon: ShieldCheck, title: 'Security', gradient: 'from-blue-600 to-[#1a89e5]' },
                            { icon: Play, title: 'HD', gradient: 'from-fuchsia-600 to-pink-500' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + idx * 0.1, duration: 0.8 }}
                                whileHover={{ y: -15, scale: 1.05 }}
                                className="relative rounded-[3rem] p-8 aspect-square bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-2xl flex flex-col items-center justify-center text-center group transition-all"
                            >
                                <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-2xl group-hover:shadow-[0_0_30px_rgba(26,137,229,0.3)] transition-all`}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-white font-black text-lg uppercase tracking-tight">{item.title}</h3>
                                <div className="absolute inset-0 rounded-[3rem] border-2 border-transparent group-hover:border-blue-500/50 transition-all" />
                            </motion.div>
                        ))}
                    </div>
                </div>
                                        {/* PREMIUM BADGES */}
                        <div className="flex justify-center gap-16 mt-20 pt-12 border-t border-white/10">
                            {[
                                { count: '3M+', label: 'CONNECTED', icon: Zap, color: 'blue' },
                                { count: '500+', label: 'COMMAND', icon: Tv, color: 'pink' },
                                { count: '100+', label: 'CENTERS', icon: ShieldCheck, color: 'blue' }
                            ].map((stat, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="flex items-center gap-2 mb-2">
                                        <stat.icon size={16} className={stat.color === 'blue' ? "text-blue-500" : "text-pink-500"} />
                                        <div className="text-3xl font-black text-white tracking-tighter group-hover:text-blue-400 transition-all">{stat.count}</div>
                                    </div>
                                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
            </div>

            {/* DECORATIVE NEON BAR */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#1a89e5] via-pink-500 to-transparent opacity-50" />

            {/* Global Styles for Animations */}
            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </section>

      {/* OUR STORY SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Journey & Impact
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                From a visionary start-up to Tamil Nadu's leading Multi System Operator
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={images.team} 
                  alt="TCCL Infrastructure" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">State-of-the-Art Infrastructure</h3>
                  <p className="text-white/90">Advanced technology serving millions</p>
                </div>
              </div>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">

                {/* Image zoom */}
                <motion.img
                  src={images.team}
                  alt="TCCL Infrastructure"
                  className="w-full h-[500px] object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Text motion */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    State-of-the-Art Infrastructure
                  </h3>
                  <p className="text-white/90">
                    Advanced technology serving millions
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Leading Digital Transformation
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Established in 2012, <strong className="text-blue-500">Thamizhaga Cable TV Communication Ltd</strong> has revolutionized the cable television landscape in Tamil Nadu. From humble beginnings to becoming the state's preferred MSO, our journey is a testament to innovation, quality, and customer-centric approach.
                </p>

                <div className="bg-white/5 border-l-4 border-blue-500 p-6 rounded-r-lg border border-white/10">
                  <p className="text-gray-300 text-lg">
                    With over <strong>8500+ KM of fiber-optic network</strong> and <strong>cutting-edge digital infrastructure</strong>, we deliver unparalleled entertainment experiences to every home.
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "One of the first MSOs to successfully implement DAS",
                    "One of the largest fiber networks in Tamil Nadu’s cable industry",
                    "Committed to high standards of customer service and support",
                    "Among the early adopters of HD and digital content delivery",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ACHIEVEMENTS TIMELINE */}
          <div className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold mb-10 text-center text-white">Milestone Journey</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative flex justify-center mb-6">
                    {/* Year Badge Only */}
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-blue-500 font-bold text-lg shadow-md border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {achievement.year}
                    </div>
                  </div>

                  <h4 className="font-bold text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {achievement.desc}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY EXCELLENCE */}
      <section className="px-6 bg-gradient-to-b from-gray-950 to-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technology Leadership</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
              Advanced infrastructure powering seamless digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={images.controlRoom}
                  alt="Digital Control Center"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Digital Head End</h3>
                  <p className="text-white/90">
                    Advanced processing and distribution of 500+ channels with uncompromised quality
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={images.fiber}
                  alt="Fiber Optic Network"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Fiber Optic Excellence</h3>
                  <p className="text-white/90">
                    8500+ KM network ensuring high-speed connectivity and future-ready infrastructure
                  </p>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>
      {/* SERVICES SHOWCASE */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Premium Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions for modern entertainment needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              // const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    {/* <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
                      <Icon className="h-6 w-6 text-white" />
                    </div> */}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      {/* <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Guiding Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Values that define our culture and drive our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* MISSION & VISION */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.expansionMap}
            alt="Mission Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20"
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                To enhance digital connectivity by delivering reliable, innovative cable television and broadband solutions, focused on quality, technology, and customer experience, while bringing rich digital entertainment and seamless connectivity to households across our service regions              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20"
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                To become one of South India’s most trusted and technologically advanced Multi System Operators, recognized for digital entertainment quality, network reliability, and customer-centric innovation, while steadily expanding into new regions and services
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Join Our Digital Journey</h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Be part of a growing digital entertainment network transforming connectivity across Tamil Nadu and beyond
            </p>
          </motion.div>
        </div>
      </section>
      {/* TECH FEATURES */}
      <div className="bg-gray-900 rounded-2xl shadow-lg p-6 md:p-8 border-t border-white/10">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Technology Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologyFeatures.map((tech, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 border border-white/10">
                <tech.icon className="h-8 w-8 md:h-10 md:w-10 text-blue-500" />
              </div>
              <div className="font-bold text-white text-base md:text-lg mb-2">{tech.title}</div>
              <div className="text-gray-400 text-xs md:text-sm">{tech.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </div>
  );
}