import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaCopy, FaBuilding, FaHeadset } from "react-icons/fa";

export const HeroSection = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [copied, setCopied] = useState(false)

  const customerSupport = '044-4060-6666'
  const tollFree = '1800-102-9845'
  const corporate = '044-4927-2222'

  function copyNumber(number) {
    if (!navigator.clipboard) return
    navigator.clipboard.writeText(number).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <>
    <img src="/assets/tccl-slide3.jpg" alt="hero-img" className='w-screen h-auto' />
    
<section className="bg-white text-slate-900 md:py-16 py-3">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-semibold leading-tight text-[#1187e6]">
          Standard & High Definition
        </h2>

        <p className="text-lg text-slate-700">
          We are providing the Channels with Standard Definition
and High Definition Clarity for the Consumers.
        </p>

        {/* GLASS CARD */}
        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-slate-200">

          <p className="font-semibold text-slate-800">
           We Believe customer is more important to us any query
          </p>

          <div className="mt-4 space-y-4">

            {/* SUPPORT NUMBER */}
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
              <div className="flex items-start gap-3">
                <FaHeadset className="text-[#1187e6] text-lg mt-1" />
                <div>
                  <p className="text-sm text-slate-600">Customer Support</p>
                  <p className="font-semibold">{customerSupport} / {tollFree}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`tel:${customerSupport.replace(/[^0-9]/g, '')}`}
                  className="px-3 py-1.5 bg-[#1187e6] text-white rounded-md text-sm hover:scale-105 transition"
                >
                  Call
                </a>
                <button
                  onClick={() => copyNumber(customerSupport)}
                  className="px-3 py-1.5 bg-white border rounded-md text-sm hover:scale-105 transition"
                >
                  <FaCopy />
                </button>
              </div>
            </div>

            {/* CORPORATE NUMBER */}
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
              <div className="flex items-start gap-3">
                <FaBuilding className="text-[#1187e6] text-lg mt-1" />
                <div>
                  <p className="text-sm text-slate-600">Corporate Office</p>
                  <p className="font-semibold">{corporate}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`tel:${corporate.replace(/[^0-9]/g, '')}`}
                  className="px-3 py-1.5 bg-[#1187e6] text-white rounded-md text-sm hover:scale-105 transition"
                >
                  Call
                </a>
                <button
                  onClick={() => copyNumber(corporate)}
                  className="px-3 py-1.5 bg-white border rounded-md text-sm hover:scale-105 transition"
                >
                  <FaCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* LEFT IMAGE BLOCK */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-299586,resizemode-75,msid-110676105/industry/media/entertainment/tv-channel-rates-may-soon-go-up-by-5-8.jpg"
            alt="Customer Support"
            className="w-full h-80 object-cover"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>

    </>
  )
}

export default HeroSection
