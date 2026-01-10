
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import {
  ShoppingCart,
  Calendar,
  Package,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Shield,
  Wrench,
  Home,
  Clock,
  RefreshCw,
  ArrowRight,
  Zap
} from "lucide-react";
import ContactSection from "../components/ContactSection";

export const CPESchemes = () => {
  const [selectedScheme, setSelectedScheme] = useState("Outright Purchase Scheme");

  const schemes = {
    "Outright Purchase Scheme": {
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "blue",
      tables: [
        {
          title: "PRICE OF SET TOP BOX",
          headers: ["Type of Set Top Box", "Amount to be paid by Subscriber"],
          rows: [
            ["SD Set Top Box", "Rs. 3,000/-"],
            ["HD Set Top Box", "Rs. 4,000/-"]
          ],
          note: "*Above rates are exclusive of taxes"
        }
      ],
      sections: [
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Guarantee/ Warranty Term",
          content: "Warranty on all STBs is twelve (12) months."
        },
        {
          icon: <Wrench className="h-5 w-5" />,
          title: "Maintenance Provisions of CPE",
          content:
            "No repair and maintenance charges shall be payable by the subscriber during the warranty period..."
        },
        {
          icon: <DollarSign className="h-5 w-5" />,
          title: "Price",
          content: "The Company reserves the right to change the price of the STB from time to time."
        },
        {
          icon: <Home className="h-5 w-5" />,
          title: "Ownership",
          content: "Ownership of the STB under this scheme vests with subscriber."
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Installation and Activation",
          content:
            "The Company would charge one time installation fee of Rs. 350..."
        },
        {
          icon: <RefreshCw className="h-5 w-5" />,
          title: "Relocation",
          content:
            "In case subscriber requests for relocation of his connection..."
        },
        {
          icon: <Clock className="h-5 w-5" />,
          title: "Temporary Suspension",
          content:
            "In case of temporary suspension of broadcasting services..."
        }
      ]
    },

    "Rental Scheme": {
      icon: <Calendar className="h-8 w-8" />,
      color: "blue",
      tables: [
        {
          title: "Set Top Box Scheme for Standard Definition STB",
          headers: [
            "Sr. No.",
            "STB Plans Rental Scheme (for three years)",
            "Security Deposit",
            "Monthly Amount"
          ],
          rows: [["1", "Rental Scheme-I", "800", "110"]],
          note: "*Above rates are exclusive of taxes per STB"
        },
        {
          title: "Set Top Box Scheme for High Definition STB",
          headers: [
            "Sr. No.",
            "STB Plans Rental Scheme (for three years)",
            "Security Deposit",
            "Monthly Amount"
          ],
          rows: [["1", "Rental Scheme-I", "800", "150"]],
          note: "*Above rates are exclusive of taxes per STB"
        }
      ],
      sections: [
        {
          icon: <AlertCircle className="h-5 w-5" />,
          title: "Important Notes",
          content:
            "STB rented under this scheme shall be serviced in accordance..."
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Warranty",
          content: "The STB purchased under this scheme has a warranty of 12 months..."
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Rental Terms",
          content:
            "The Rental under this scheme is to be paid for a period of 3 years..."
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Installation and Activation",
          content:
            "The Company would charge one time installation Fee of Rs. 350..."
        },
        {
          icon: <RefreshCw className="h-5 w-5" />,
          title: "Relocation",
          content:
            "In case subscriber requests for relocation of his connection..."
        },
        {
          icon: <Clock className="h-5 w-5" />,
          title: "Temporary Suspension",
          content:
            "In case of temporary suspension of broadcasting services..."
        }
      ]
    },

    "TCCL Scheme": {
      icon: <Package className="h-8 w-8" />,
      color: "blue",
      tables: [],
      sections: [
        {
          icon: <DollarSign className="h-5 w-5" />,
          title: "User Fee",
          content: "User Fee of Rs 1500/- (Including GST)..."
        },
        {
          icon: <AlertCircle className="h-5 w-5" />,
          title: "Important Notes",
          content:
            "STB availed under this scheme shall be serviced in accordance..."
        },
        {
          icon: <DollarSign className="h-5 w-5" />,
          title: "Refund Policy",
          content:
            "Rs. 750/- shall be the Non Refundable User Fee..."
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Warranty",
          content:
            "The STB purchased under this scheme has a warranty of 12 months..."
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Installation and Activation",
          content:
            "The Company would charge one time installation Fee of Rs. 350..."
        },
        {
          icon: <RefreshCw className="h-5 w-5" />,
          title: "Relocation",
          content:
            "In case subscriber requests for relocation..."
        }
      ]
    }
  };

  const schemeColorMap = {
    "Outright Purchase Scheme": "from-blue-500 to-blue-700",
    "Rental Scheme": "from-blue-500 to-blue-700",
    "TCCL Scheme": "from-blue-500 to-blue-700"
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="text-center mb-16 pt-24">

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-700 bg-clip-text text-transparent mb-4">
              CPE Schemes
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Scheme types, pricing, and detailed terms & conditions
            </p>
          </div>

          {/* Scheme Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {Object.keys(schemes).map((schemeName) => {
              const scheme = schemes[schemeName];
              const isActive = selectedScheme === schemeName;
              const gradientColor = schemeColorMap[schemeName];

              return (
                <div
                  key={schemeName}
                  onClick={() => setSelectedScheme(schemeName)}
                  className={`
                    group relative overflow-hidden rounded-2xl cursor-pointer
                    transition-all duration-500 transform
                    ${isActive
                      ? 'ring-2 ring-blue-400 scale-105 shadow-2xl'
                      : 'hover:scale-105 shadow-lg hover:shadow-2xl'
                    }
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative bg-gray-900 p-8 border border-white/10 dark:border-blue-900 h-full flex flex-col pointer-events-none">
                    <div className="flex-1">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientColor} p-3 mb-4`}>
                        <div className="w-full h-full text-white">
                          {scheme.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {schemeName}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {scheme.tables.length > 0 ? `${scheme.tables.length} Price Table(s)` : "Special Scheme"}
                      </p>
                    </div>

                    <div className="mb-4 inline-block">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                        {scheme.sections.length} Details
                      </span>
                    </div>



                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 pointer-events-none rounded-2xl" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Scheme Details */}
          <div className="space-y-8">

            {/* Header */}
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${schemeColorMap[selectedScheme]}`}>
                <div className="text-white">
                  {schemes[selectedScheme].icon}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {selectedScheme} — Details
                </h2>
                <p className="text-blue-200">Complete terms & pricing information</p>
              </div>
            </div>

            {/* Tables */}
            {schemes[selectedScheme].tables.map((table, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="px-8 py-6 border-b border-white/10 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {table.title}
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/80 border-b border-white/10">
                      <tr>
                        {table.headers.map((header, idx) => (
                          <th
                            key={idx}
                            className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-white/5">
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-6 py-4">
                              <span
                                className={`text-sm ${cIdx === 0
                                  ? "font-medium text-gray-300"
                                  : "font-bold text-blue-500"
                                  }`}
                              >
                                {cell}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {table.note && (
                  <div className="px-8 py-4 bg-blue-500/5 border-t border-white/10 text-sm text-blue-400 font-medium italic">
                    {table.note}
                  </div>
                )}
              </div>
            ))}

            {/* Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
              {schemes[selectedScheme].sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl shadow-lg border border-white/10 p-8 hover:shadow-blue-500/5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <div className="flex gap-5">
                    <div className="p-4 rounded-xl bg-blue-500/10 flex-shrink-0">
                      <div className="text-blue-500">
                        {section.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {section.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};