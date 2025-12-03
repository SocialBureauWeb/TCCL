import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FaCopy, FaBuilding, FaHeadset } from "react-icons/fa";

export const HeroSection = () => {
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
<section className="bg-white text-slate-900 py-6 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

      {/* IMAGE FIRST ON MOBILE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full order-1 md:order-2"
      >
        <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-299586,resizemode-75,msid-110676105/industry/media/entertainment/tv-channel-rates-may-soon-go-up-by-5-8.jpg"
            alt="Customer Support"
            className="w-full h-52 sm:h-64 md:h-80 object-cover"
          />
        </div>
      </motion.div>

      {/* TEXT SECOND ON MOBILE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 order-2 md:order-1"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-[#1187e6]">
          Standard & High Definition
        </h2>

        <p className="text-base sm:text-lg text-slate-700">
          We are providing the Channels with Standard Definition and High Definition Clarity for the Consumers.
        </p>

        {/* GLASS CARD */}
        <div className="bg-white/70 backdrop-blur-xl p-5 md:p-6 rounded-2xl shadow-md border border-slate-200">

          <p className="font-semibold text-slate-800 text-base sm:text-lg">
           We Believe customer is more important to us — any query
          </p>

          <div className="mt-4 space-y-4">

            {/* CUSTOMER SUPPORT */}
            <div className="bg-slate-50 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-3">
                <FaHeadset className="text-[#1187e6] text-xl" />
                <div>
                  <p className="text-sm text-slate-600">Customer Support</p>
                  <p className="font-semibold text-sm sm:text-base">{customerSupport} / {tollFree}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`tel:${customerSupport.replace(/[^0-9]/g, '')}`}
                  className="px-4 py-2 bg-[#1187e6] text-white rounded-md text-sm hover:scale-105 transition"
                >
                  Call
                </a>
                <button
                  onClick={() => copyNumber(customerSupport)}
                  className="px-4 py-2 bg-white border rounded-md text-sm hover:scale-105 transition"
                >
                  <FaCopy />
                </button>
              </div>
            </div>

            {/* CORPORATE */}
            <div className="bg-slate-50 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-3">
                <FaBuilding className="text-[#1187e6] text-xl" />
                <div>
                  <p className="text-sm text-slate-600">Corporate Office</p>
                  <p className="font-semibold text-sm sm:text-base">{corporate}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`tel:${corporate.replace(/[^0-9]/g, '')}`}
                  className="px-4 py-2 bg-[#1187e6] text-white rounded-md text-sm hover:scale-105 transition"
                >
                  Call
                </a>
                <button
                  onClick={() => copyNumber(corporate)}
                  className="px-4 py-2 bg-white border rounded-md text-sm hover:scale-105 transition"
                >
                  <FaCopy />
                </button>
              </div>
            </div>

          </div>

          {/* COPY NOTIFICATION */}
          {copied && (
            <p className="text-green-600 text-sm mt-2">📋 Number copied!</p>
          )}
        </div>
      </motion.div>

    </div>
  </div>
</section>
    </>
  )
}

export default HeroSection
