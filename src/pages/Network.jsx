import React from "react";
import { motion } from "framer-motion";
import { Bell, CheckCircle, Volume2, FileWarning } from "lucide-react";
import { Navbar } from "../components/Navbar";
import ContactSection from "../components/ContactSection";

export default function NetworkPage() {
  const pricingPoints = [
    {
      title: "Pay ₹130/- only as Network Capacity Fee (NCF)",
      desc: "for receiving upto initial 200 SD Channels (taxes extra) to the first TV connection. Every HD channel subscribed to will count as 2 SD channels"
    },
    {
      title: "Pay ₹160/- only as Network Capacity Fee (NCF)",
      desc: "for receiving more than 200 SD channels subscribed to (taxes extra) to the first TV connection. Every HD channel subscribed to will count as 2 SD channels"
    },
    {
      title: "Network Capacity Fee for additional TV connections",
      desc: "Per month for each additional TV connection, beyond the first TV connection in a multi TV home shall be forty per cent of the Network Capacity Fee of the Parent STB"
    },
    {
      title: "Mandatory Government Channels",
      desc: "The television channels notified by the Central Government shall be mandatorily available to all the subscribers and shall be in addition to the number of channels available in the network capacity fee"
    }
  ];

  const additionalPoints = [
    { title: "Pay Distributor Retail Price (DRP)", icon: Bell, desc: "Pay Distributor Retail Price (DRP) as published by TCCL for pay channels or bouquets as per your choice (taxes extra)" },
    { title: "Freedom to Choose", icon: CheckCircle, desc: "Enjoy the freedom to choose your favourite channels or bouquet" },
    { title: "Maximum Retail Price Display", icon: Volume2, desc: "Maximum Retail Price of each channel (exclusive of applicable taxes) will be displayed on EPG as seen on your TV screen" },
    { title: "Package Pricing & GST", icon: FileWarning, desc: "All package pricing is per Set Top Box (STB) per month. Goods and Service Tax (GST) is payable by Subscriber as applicable" },
    { title: "Additional Information", icon: Bell, desc: "For additional information and MRP of pay channels please refer to respective broadcasters website and the CONSUMER INFO Channel in LCN - 999" }
  ];

  return (
    <div>
      <Navbar/>
    <div className="font-sans bg-white text-gray-800">
      {/* HERO SECTION */}
    <section className="bg-gradient-to-br from-[#1a89e5] via-[#0083edff] to-blue-900 text-white pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Important Notice for TCCL Consumers
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
          Telecom Regulatory Authority of India (TRAI) Compliance Notice
        </p>
      </div>
    </section>

      {/* REGULATORY REFERENCE */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">TRAI Regulatory Compliance</h2>
            <p className="text-gray-600 mb-6">
              Pursuant to "THE TELECOMMUNICATION (BROADCASTING AND CABLE) SERVICES (EIGHTH) (ADDRESSABLE SYSTEMS) TARIFF (SECOND AMENDMENT) ORDER, 2020 (No. 1 of 2020)" of Telecom Regulatory Authority of India (TRAI)
            </p>
            <p className="text-gray-600">
              Customers will have to pay for the Pay Channels and Network Capacity Fee (NCF) as mentioned below:
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-xl rounded-xl p-8 border-l-4 border-[#1a89e5]"
          >
            <h3 className="font-bold [#1a89e5] text-lg mb-4">Key Points</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✓ Flexible Channel Selection</li>
              <li>✓ Transparent Pricing</li>
              <li>✓ Mandatory Government Channels</li>
              <li>✓ GST as per Norms</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Network Capacity Fee (NCF) Structure</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Choose your package based on the number of channels you want to subscribe to
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingPoints.map((point, idx) => (
            <div key={idx} className="bg-[#1a89e5] text-white p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="font-bold text-xl mb-3">{point.title}</h3>
              <p className="text-sm opacity-90">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL INFORMATION */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Additional Information & Requirements</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Important terms and conditions for all subscribers
        </p>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {additionalPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div key={idx} className="bg-[#1a89e5] text-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
                <Icon className="mx-auto h-10 w-10 mb-3" />
                <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                <p className="text-xs opacity-90">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      {/* <section className="py-20 px-6 bg-[#1a89e5] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Need More Information?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          For additional details about TCCL services and channel pricing, contact our support team or visit the CONSUMER INFO Channel at LCN - 999.
        </p>
        <button className="bg-white text-[#1a89e5] font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition">
          044 - 4060 6666
        </button>
      </section> */}
      <br/>

        </div>
    <ContactSection/>
  </div>
  );
}