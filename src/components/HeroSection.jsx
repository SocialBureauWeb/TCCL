
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Headphones, Building2, Copy, Check } from "lucide-react";

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const customerSupport = "044-4060-6666";
  const tollFree = "1800-102-9845";
  const corporate = "044-4927-2222";

  function copyNumber(number) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(number).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  const Card = ({ icon, title, numbers }) => (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-blue-100 text-[#1a89e5]">
          {icon}
        </div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
      </div>

      <div className="space-y-3">
        {numbers.map((num) => (
          <div
            key={num}
            className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3"
          >
            <span className="text-sm font-medium text-slate-700">{num}</span>

            <div className="flex gap-2">
              <a
                href={`tel:${num.replace(/[^0-9]/g, "")}`}
                className="px-3 py-1.5 text-xs rounded-md bg-[#1a89e5] text-white hover:bg-blue-700 transition"
              >
                Call
              </a>
              <button
                onClick={() => copyNumber(num)}
                className="px-3 py-1.5 text-xs rounded-md bg-white border hover:bg-blue-100 transition"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{
      backgroundImage: "url('/assets/set1.jpg')",
    }}
  />

  {/* DARK + BLUE OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/70 to-blue-800/60" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        We’re Here to Help You
      </h1>

      <p className="text-lg md:text-xl opacity-90 mb-8">
        From crystal-clear HD channels to fast broadband,
        our support team is always just one call away.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="tel:04440606666"
          className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Call Support
        </a>

        <a
          href="/contact"
          className="border border-white/80 px-7 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>


  );
};

export default HeroSection;
