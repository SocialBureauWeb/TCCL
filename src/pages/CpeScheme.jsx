
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
    "Outright Purchase Scheme": "from-blue-600 via-blue-500 to-cyan-400",
    "Rental Scheme": "from-blue-600 via-blue-500 to-cyan-400",
    "TCCL Scheme": "from-blue-600 via-blue-500 to-cyan-400"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#1a89e5] to-cyan-900">
      <Navbar />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="text-center mb-16">

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-white/90 to-blue-400 bg-clip-text text-transparent mb-4">
              CPE Schemes
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative bg-white dark:bg-slate-800 p-8 border border-blue-100 dark:border-blue-900 h-full flex flex-col pointer-events-none">
                    <div className="flex-1">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientColor} p-3 mb-4`}>
                        <div className="w-full h-full text-white">
                          {scheme.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {schemeName}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {scheme.tables.length > 0 ? `${scheme.tables.length} Price Table(s)` : "Special Scheme"}
                      </p>
                    </div>

                    <div className="mb-4 inline-block">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-semibold">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {scheme.sections.length} Details
                      </span>
                    </div>

                    

                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 pointer-events-none rounded-2xl" />
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
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-blue-200 dark:border-blue-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="px-8 py-6 border-b bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {table.title}
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-b border-blue-200 dark:border-blue-800">
                      <tr>
                        {table.headers.map((header, idx) => (
                          <th
                            key={idx}
                            className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-blue-100 dark:divide-blue-900">
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-6 py-4">
                              <span
                                className={`text-sm ${
                                  cIdx === 0
                                    ? "font-medium text-gray-800 dark:text-gray-200"
                                    : "font-bold text-green-600 dark:text-green-400"
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
                  <div className="px-8 py-4 bg-amber-50 dark:bg-amber-950/30 border-t border-amber-200 dark:border-amber-800 text-sm text-amber-700 dark:text-amber-300 font-medium">
                    {table.note}
                  </div>
                )}
              </div>
            ))}

            {/* Sections */}
            <div className="space-y-6">
              {schemes[selectedScheme].sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-6 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <div className="flex gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 flex-shrink-0">
                      <div className="text-blue-600 dark:text-blue-400">
                        {section.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
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
      <ContactSection/>
    </div>
  );
};