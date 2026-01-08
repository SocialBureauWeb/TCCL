import { motion } from "framer-motion";
import {
  Users, Target, Award, Briefcase, Tv, Wifi, MapPin, Globe,
  BarChart, Shield, Clock, Heart, ChevronRight, Play, Star,
  CheckCircle, TrendingUp, Zap, Globe as GlobeIcon,
  Monitor, Smartphone, Server, Home, Video, ShoppingBag,
  Headphones, ShieldCheck, Rocket, Building, Network, Award as AwardIcon,
  ThumbsUp, Tv as TvIcon, Satellite, Smartphone as SmartphoneIcon,
  TrendingUp as Growth, Database, Cable, Cctv
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import ContactSection from "../components/ContactSection";

export const AboutPage = () => {
  // Using images from your Home page assets
  const images = {
    hero: "/assets/Landing page 5.jpg",
    team: "/assets/Landing page 3.jpg",
    network: "/assets/Landing page 2.jpg",
    controlRoom: "/assets/head.jpg",
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
      desc: "500+ channels with crystal clear HD quality and premium content",
      icon: Tv,
      image: "/assets/tv34.jpg"
    },
    {
      title: "Broadband Services",
      desc: "High-speed internet with fiber-optic technology for seamless connectivity",
      icon: Wifi,
      image: "/assets/highspeed.jpg"
    },
    {
      title: "Future Technology",
      desc: "VoD, Smart Home, Gaming, and e-commerce integrations",
      icon: Globe,
      image: "/assets/digit2.png"
    },
  ];

  const stats = [
    { number: "3M+", label: "Happy Households", icon: Users, color: "from-blue-500 to-blue-600" },
    { number: "500+", label: "TV Channels", icon: TvIcon, color: "from-green-500 to-green-600" },
    { number: "8500+", label: "KM Fiber Network", icon: Cable, color: "from-purple-500 to-purple-600" },
    { number: "8000+", label: "Operator Partners", icon: Users, color: "from-orange-500 to-orange-600" },
    { number: "24/7", label: "Customer Support", icon: Headphones, color: "from-red-500 to-red-600" },
    { number: "99.9%", label: "Service Uptime", icon: ShieldCheck, color: "from-teal-500 to-teal-600" },
  ];

  const achievements = [
    { year: "2012", title: "Foundation", desc: "Started operations in Chennai", icon: Building },
    { year: "2014", title: "State Expansion", desc: "Expanded across Tamil Nadu", icon: MapPin },
    { year: "2016", title: "1M Milestone", desc: "Reached 1 million subscribers", icon: AwardIcon },
    { year: "2018", title: "Fiber Network", desc: "Launched 8500+ KM fiber optic", icon: Network },
    { year: "2020", title: "Digital Excellence", desc: "Awarded for service quality", icon: Star },
    { year: "2023", title: "3M+ Homes", desc: "Serving 3 million households", icon: Growth },
  ];

  const technologyFeatures = [
    { icon: Database, title: "Digital Headend", desc: "State-of-the-art processing" },
    { icon: Satellite, title: "Signal Quality", desc: "Crystal clear transmission" },
    { icon: SmartphoneIcon, title: "Multi-Platform", desc: "TV, Mobile & Web access" },
    { icon: Cctv, title: "Secure Network", desc: "Protected content delivery" },
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
    <div className="font-sans bg-white text-gray-800 overflow-hidden">
      <Navbar />

      {/* ENHANCED HERO SECTION */}
      <section className="relative min-h-[90vh] pt-24 pb-20 px-6 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={images.hero}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white text-sm font-semibold">SINCE 2012 • LEADING MSO</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                Powering <span className="text-yellow-300">Digital</span> Dreams, <br />
                Connecting <span className="text-yellow-300">Millions</span>
              </h1>

              <p className="text-xl md:text-2xl max-w-2xl mb-10 text-white/95 leading-relaxed">
                Thamizhaga Cable TV Communication Ltd - Transforming entertainment experiences across Tamil Nadu with cutting-edge technology and unwavering commitment.
              </p>

            </motion.div> */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Badge */}
              <motion.div
                variants={line}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
              >
                <span className="text-white text-sm font-semibold">
                  SINCE 2012 • LEADING MSO
                </span>
              </motion.div>

              {/* Heading line 1 */}
              <motion.h1
                variants={line}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white leading-tight"
              >
                Powering <span className="text-yellow-300">Digital</span> Dreams,
              </motion.h1>

              {/* Heading line 2 */}
              <motion.h1
                variants={line}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
              >
                Connecting <span className="text-yellow-300">Millions</span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                variants={line}
                className="text-xl md:text-2xl max-w-2xl mb-10 text-white/95 leading-relaxed"
              >
                Thamizhaga Cable TV Communication Ltd – Transforming entertainment
                experiences across Tamil Nadu with cutting-edge technology and
                unwavering commitment.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {/* {stats.slice(0, 4).map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                      >
                        <div className="flex flex-col items-center text-center">
                          <Icon className="h-8 w-8 text-white mb-3" />
                          <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                          <div className="text-white font-medium text-sm">{stat.label}</div>
                        </div>
                      </div>
                    );
                  })} */}
                  {stats.slice(0, 4).map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                      <motion.div
                        key={index}
                        whileHover={{ y: -6, scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="relative bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 cursor-pointer overflow-hidden"
                      >
                        {/* Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            background:
                              "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 65%)",
                          }}
                        />

                        <div className="relative flex flex-col items-center text-center z-10">
                          {/* Icon pop */}
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.25 }}
                          >
                            <Icon className="h-8 w-8 text-white mb-3" />
                          </motion.div>

                          <div className="text-3xl font-bold text-white mb-1">
                            {stat.number}
                          </div>
                          <div className="text-white font-medium text-sm">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Journey & Impact
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
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
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Leading Digital Transformation
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Established in 2012, <strong className="text-blue-600">Thamizhaga Cable TV Communication Ltd</strong> has revolutionized the cable television landscape in Tamil Nadu. From humble beginnings to becoming the state's preferred MSO, our journey is a testament to innovation, quality, and customer-centric approach.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-gray-700 text-lg">
                    With over <strong>8500+ KM of fiber-optic network</strong> and <strong>cutting-edge digital infrastructure</strong>, we deliver unparalleled entertainment experiences to every home.
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "First MSO to implement DAS environment successfully",
                    "Largest fiber network in Tamil Nadu cable industry",
                    "Award-winning customer service and support",
                    "Pioneer in HD and digital content delivery"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ACHIEVEMENTS TIMELINE */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">Milestone Journey</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-center group"
                  >
                    <div className="relative flex justify-center">
                      {/* Main Icon Circle */}
                      <div className={`relative w-20 h-10 rounded-2xl bg-gradient-to-br ${idx % 2 === 0 ? 'from-blue-500 to-blue-600' : 'from-blue-600 to-blue-700'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-10 w-10 text-white" />

                        {/* Year Badge - Perfectly Centered at Top */}
                        {/* <div className="absolute -top-3 inset-x-0 mx-auto w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm shadow-md border-2 border-white"> */}
                        {/* <div className="absolute -top-4 inset-x-0 mx-auto min-w-[3rem] h-12 p-2 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-base shadow-md border-2 border-white"> */}
                        <div className="absolute -top-5 inset-x-0 mx-auto w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-lg shadow-md border-2 border-white">

                          {achievement.year}
                        </div>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY EXCELLENCE */}
      <section className="px-6 bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Technology Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
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
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions for modern entertainment needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.desc}</p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all cursor-pointer">
                      Discover More <ChevronRight className="h-4 w-4" />
                    </div>
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
                To revolutionize digital connectivity by delivering exceptional, innovative cable and broadband solutions that exceed expectations while ensuring unparalleled customer satisfaction, bringing world-class entertainment and seamless connectivity to every home in South India.
              </p>
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
                To emerge as South India's most trusted and technologically advanced Multi System Operator, setting industry benchmarks for digital entertainment quality, broadband reliability, and customer-centric innovation while expanding our footprint across new regions and services.
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
            <h3 className="text-3xl font-bold text-white mb-6">Join Our Digital Revolution</h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Be part of Tamil Nadu's fastest growing digital entertainment network
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Explore Careers
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* TECH FEATURES */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Technology Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologyFeatures.map((tech, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <tech.icon className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
              </div>
              <div className="font-bold text-gray-900 text-base md:text-lg mb-2">{tech.title}</div>
              <div className="text-gray-600 text-xs md:text-sm">{tech.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </div>
  );
}