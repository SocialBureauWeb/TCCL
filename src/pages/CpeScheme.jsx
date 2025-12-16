// import React, { useState } from "react";
// import { Navbar } from "../components/Navbar";
// import {
//   ShoppingCart,
//   Calendar,
//   Package,
//   CheckCircle,
//   AlertCircle,
//   DollarSign,
//   Shield,
//   Wrench,
//   Home,
//   Clock,
//   RefreshCw,
//   ArrowRight
// } from "lucide-react";

// export const CPESchemes = () => {
//   const [selectedScheme, setSelectedScheme] = useState("Outright Purchase Scheme");

//   const schemes = {
//     "Outright Purchase Scheme": {
//       icon: <ShoppingCart className="h-8 w-8" />,
//       color: "blue",
//       tables: [
//         {
//           title: "PRICE OF SET TOP BOX",
//           headers: ["Type of Set Top Box", "Amount to be paid by Subscriber"],
//           rows: [
//             ["SD Set Top Box", "Rs. 3,000/-"],
//             ["HD Set Top Box", "Rs. 4,000/-"]
//           ],
//           note: "*Above rates are exclusive of taxes"
//         }
//       ],
//       sections: [
//         {
//           icon: <Shield className="h-5 w-5" />,
//           title: "Guarantee/ Warranty Term",
//           content: "Warranty on all STBs is twelve (12) months."
//         },
//         {
//           icon: <Wrench className="h-5 w-5" />,
//           title: "Maintenance Provisions of CPE",
//           content: "No repair and maintenance charges shall be payable by the subscriber during the warranty period, provided STB has been used in normal working conditions and is not tampered with. During the warranty period the STB will be repaired or replaced within 24 hours of receipt of the subscriber's complaint. After the warranty period expires, TCCL shall offer the subscriber an Annual Maintenance Contract (AMC) on optional basis for Rs. 350/- excluding applicable taxes per annum. In case the subscriber chooses not to avail the said offer, the Company reserves the right to charge the subscriber for the repairs as per the rates to be announced by the Company from time to time."
//         },
//         {
//           icon: <DollarSign className="h-5 w-5" />,
//           title: "Price",
//           content: "The Company reserves the right to change the price of the STB from time to time."
//         },
//         {
//           icon: <Home className="h-5 w-5" />,
//           title: "Ownership",
//           content: "Ownership of the STB under this scheme vests with subscriber."
//         },
//         {
//           icon: <CheckCircle className="h-5 w-5" />,
//           title: "Installation and Activation",
//           content: "The Company would charge one time installation fee of Rs. 350 (exclusive of taxes) and one time activation fee of Rs. 100 (exclusive of taxes) per STB under this scheme. Any extra remote for STB would be given on payment of Rs. 150/- (excluding applicable taxes, if any) per remote."
//         },
//         {
//           icon: <RefreshCw className="h-5 w-5" />,
//           title: "Relocation",
//           content: "In case subscriber requests for relocation of his connection from one location to another, it shall be in accordance with Regulation 14 of The Telecommunication (Broadcasting and Cable) Services Standards of Quality of Service and Consumer Protection (Addressable Systems) Regulations, 2017."
//         },
//         {
//           icon: <Clock className="h-5 w-5" />,
//           title: "Temporary Suspension",
//           content: "In case of temporary suspension of broadcasting services related to television on request from a subscriber, it shall be in accordance with Regulation 12 of The Telecommunication (Broadcasting and Cable) Services Standards of Quality of Service and Consumer Protection (Addressable Systems) Regulations, 2017."
//         }
//       ]
//     },

//     "Rental Scheme": {
//       icon: <Calendar className="h-8 w-8" />,
//       color: "green",
//       tables: [
//         {
//           title: "Set Top Box Scheme for Standard Definition STB",
//           headers: ["Sr. No.", "STB Plans Rental Scheme (for three years)", "Security Deposit (Refundable after 3 years) (in Rs.)", "Amount payable per month (in Rs.)"],
//           rows: [
//             ["1", "Rental Scheme- I", "800", "110"]
//           ],
//           note: "*Above rates are exclusive of taxes per STB"
//         },
//         {
//           title: "Set Top Box Scheme for High Definition STB",
//           headers: ["Sr. No.", "STB Plans Rental Scheme (for three years)", "Security Deposit (Refundable after 3 years) (in Rs.)", "Amount payable per month (in Rs.)"],
//           rows: [
//             ["1", "Rental Scheme- I", "800", "150"]
//           ],
//           note: "*Above rates are exclusive of taxes per STB"
//         }
//       ],
//       sections: [
//         {
//           icon: <AlertCircle className="h-5 w-5" />,
//           title: "Important Notes",
//           content: "STB rented under this scheme shall be serviced in accordance with the relevant provisions as prescribed in applicable regulations issued by TRAI from time to time. It is to be noted that the ownership of the STB offered by TCCL under the rental scheme shall remain, at all times, with TCCL or its linked local cable operator, as the case maybe. After the expiry of three years from the date of installation and activation of STB, the interest free security deposit as mentioned above shall be refundable to the Subscriber without any deductions. Additionally, the full security deposit without any deduction shall be refunded to the Subscriber, if the STB is returned in good working condition, within a period of 3 years."
//         },
//         {
//           icon: <Shield className="h-5 w-5" />,
//           title: "Warranty",
//           content: "The STB purchased under this scheme has a warranty of 12 months, which is applicable from the date of purchase of the STB. No repair and maintenance charges shall be payable by the subscriber during the warranty period, provided STB has been used in normal working conditions and is not tampered with. During the warranty period the STB will be repaired or replaced within 24 hours of receipt of the subscriber. After the warranty period expires, the Company shall offer the subscriber an Annual Maintenance Contract (AMC) on an optional basis for Rs. 350/- excluding applicable taxes per annum. In case the subscriber chooses not to avail the said offer, the Company reserves the right to charge the subscriber for the repairs as per the rates to be announced by the Company from time to time."
//         },
//         {
//           icon: <Calendar className="h-5 w-5" />,
//           title: "Rental Terms",
//           content: "The Rental under this scheme is to be paid for a period of 3 years. The Monthly rental to be paid is exclusive of Taxes. After three years of rental payment, no rent is payable by the subscriber. The STB shall become the property of the subscriber except the smart card/viewing card. However, till last rental is paid, the STB remains the property of the company."
//         },
//         {
//           icon: <CheckCircle className="h-5 w-5" />,
//           title: "Installation and Activation",
//           content: "The Company would charge one time installation Fee of Rs. 350 (exclusive of taxes) and one time activation fee of Rs. 100 (exclusive of taxes) per STB under this scheme. Any extra remote for STB would be given on payment of Rs. 150/- (excluding applicable taxes, if any) per remote."
//         },
//         {
//           icon: <RefreshCw className="h-5 w-5" />,
//           title: "Relocation",
//           content: "In case subscriber requests for relocation of his connection from one location to another, it shall be in accordance with Regulation 14 of The Telecommunication (Broadcasting and Cable) Services Standards of Quality of Service and Consumer Protection (Addressable Systems) Regulations, 2017."
//         },
//         {
//           icon: <Clock className="h-5 w-5" />,
//           title: "Temporary Suspension",
//           content: "In case of temporary suspension of broadcasting services related to television on request from a subscriber, it shall be in accordance with Regulation 12 of The Telecommunication (Broadcasting and Cable) Services Standards of Quality of Service and Consumer Protection (Addressable Systems) Regulations, 2017."
//         }
//       ]
//     },

//     "TCCL Scheme": {
//       icon: <Package className="h-8 w-8" />,
//       color: "purple",
//       tables: [],
//       sections: [
//         {
//           icon: <DollarSign className="h-5 w-5" />,
//           title: "User Fee",
//           content: "User Fee of Rs 1500/- (Including GST) per Set Top Box"
//         },
//         {
//           icon: <AlertCircle className="h-5 w-5" />,
//           title: "Important Notes",
//           content: "STB availed under this scheme shall be serviced in accordance with the relevant provisions as prescribed in applicable regulations issued by TRAI from time to time. It is to be noted that the ownership of the STB offered by TCCL under the User Fee shall remain, at all times, with TCCL or its linked local cable operator, as the case maybe."
//         },
//         {
//           icon: <DollarSign className="h-5 w-5" />,
//           title: "Refund Policy",
//           content: "Rs. 750/- (inclusive of GST) shall be the Non Refundable User Fee for the current Financial Year (April to March). Balance shall be refundable till the end of next financial year, in case of Disconnection requested by the customer. However, once the next financial year ends, no refund shall be permissible."
//         },
//         {
//           icon: <Shield className="h-5 w-5" />,
//           title: "Warranty",
//           content: "The STB purchased under this scheme has a warranty of 12 months, which is applicable from the date of purchase of the STB. No repair and maintenance charges shall be payable by the subscriber during the warranty period, provided STB has been used in normal working conditions and is not tampered with. During the warranty period the STB will be repaired or replaced within 24 hours of receipt of the subscriber. After the warranty period expires, the Company shall offer the subscriber an Annual Maintenance Contract (AMC) on an optional basis for Rs. 350/- excluding applicable taxes per annum. In case the subscriber chooses not to avail the said offer, the Company reserves the right to charge the subscriber for the repairs as per the rates to be announced by the Company from time to time."
//         },
//         {
//           icon: <CheckCircle className="h-5 w-5" />,
//           title: "Installation and Activation",
//           content: "The Company would charge one time installation Fee of Rs. 350 (exclusive of taxes) per STB under this scheme. Any extra remote for STB would be given on payment of Rs. 150/- (excluding applicable taxes, if any) per remote."
//         },
//         {
//           icon: <RefreshCw className="h-5 w-5" />,
//           title: "Relocation",
//           content: "In case subscriber requests for relocation of his connection from one location to another, it shall be in accordance with Regulation 14 of The Telecommunication (Broadcasting and Cable) Services Standards of Quality of Service and Consumer Protection (Addressable Systems) Regulations, 2017."
//         }
//       ]
//     }
//   };

//   const colorClasses = {
//     blue: {
//       bg: "bg-blue-50",
//       border: "border-blue-200",
//       text: "text-blue-600",
//       darkText: "text-blue-700",
//       hover: "hover:bg-blue-100",
//       selected: "bg-blue-600 text-white",
//       iconBg: "bg-blue-100"
//     },
//     green: {
//       bg: "bg-green-50",
//       border: "border-green-200",
//       text: "text-green-600",
//       darkText: "text-green-700",
//       hover: "hover:bg-green-100",
//       selected: "bg-green-600 text-white",
//       iconBg: "bg-green-100"
//     },
//     purple: {
//       bg: "bg-purple-50",
//       border: "border-purple-200",
//       text: "text-purple-600",
//       darkText: "text-purple-700",
//       hover: "hover:bg-purple-100",
//       selected: "bg-purple-600 text-white",
//       iconBg: "bg-purple-100"
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <Navbar />
      
//       <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
//             <Package className="h-12 w-12 text-blue-600" />
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             CPE Schemes
//           </h1>
//           <p className="text-lg text-gray-600">
//             Scheme type, CPE price, and other terms and conditions
//           </p>
//         </div>

//         {/* Scheme Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//           {Object.keys(schemes).map((schemeName) => {
//             const scheme = schemes[schemeName];
//             const colors = colorClasses[scheme.color];
//             const isSelected = selectedScheme === schemeName;
            
//             return (
//               <div
//                 key={schemeName}
//                 onClick={() => setSelectedScheme(schemeName)}
//                 className={`
//                   cursor-pointer transition-all duration-300 transform hover:-translate-y-1
//                   border rounded-xl shadow-sm
//                   ${isSelected ? 'ring-2 ring-opacity-50 shadow-xl' : 'hover:shadow-lg'}
//                   ${isSelected ? `ring-${scheme.color}-500` : ''}
//                   ${isSelected ? colors.selected : `${colors.bg} ${colors.border} ${colors.hover}`}
//                 `}
//               >
//                 <div className="p-6">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className={`p-3 rounded-lg ${isSelected ? 'bg-white bg-opacity-20' : colors.iconBg}`}>
//                       <div className={isSelected ? 'text-white' : colors.text}>
//                         {scheme.icon}
//                       </div>
//                     </div>
//                     <ArrowRight className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
//                   </div>
                  
//                   <h3 className={`font-bold text-xl mb-2 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
//                     {schemeName}
//                   </h3>
                  
//                   <div className="flex items-center gap-2 mt-4">
//                     <span className={`text-sm px-3 py-1 rounded-full ${isSelected ? 'bg-white bg-opacity-20' : 'bg-white'}`}>
//                       {scheme.tables.length > 0 ? `${scheme.tables.length} price tables` : 'Special scheme'}
//                     </span>
//                     {isSelected && (
//                       <span className="text-sm px-3 py-1 rounded-full bg-white bg-opacity-20">
//                         Selected
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Selected Scheme Details */}
//         {selectedScheme && schemes[selectedScheme] && (
//           <div className="space-y-8">
//             {/* Scheme Title */}
//             <div className="flex items-center gap-4 mb-8">
//               <div className={`p-3 rounded-lg ${colorClasses[schemes[selectedScheme].color].bg}`}>
//                 <div className={colorClasses[schemes[selectedScheme].color].text}>
//                   {schemes[selectedScheme].icon}
//                 </div>
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   {selectedScheme} Details
//                 </h2>
//                 <p className="text-gray-600">
//                   Complete terms, conditions, and pricing information
//                 </p>
//               </div>
//             </div>

//             {/* Tables */}
//             {schemes[selectedScheme].tables.map((table, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
//                 <div className="p-6 border-b border-gray-200">
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {table.title}
//                   </h3>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         {table.headers.map((header, idx) => (
//                           <th 
//                             key={idx} 
//                             className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
//                           >
//                             {header}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {table.rows.map((row, rowIdx) => (
//                         <tr key={rowIdx} className="hover:bg-gray-50">
//                           {row.map((cell, cellIdx) => (
//                             <td 
//                               key={cellIdx} 
//                               className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
//                             >
//                               {cellIdx === 0 ? (
//                                 <span className="font-medium">{cell}</span>
//                               ) : (
//                                 <span className="font-semibold text-green-600">{cell}</span>
//                               )}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 {table.note && (
//                   <div className="px-6 py-3 bg-amber-50 border-t border-amber-100">
//                     <p className="text-sm text-amber-700 font-medium">
//                       {table.note}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))}

//             {/* Sections */}
//             <div className="space-y-6">
//               {schemes[selectedScheme].sections.map((section, index) => (
//                 <div 
//                   key={index} 
//                   className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
//                 >
//                   <div className="p-6">
//                     <div className="flex items-start gap-4">
//                       <div className={`p-2 rounded-lg ${colorClasses[schemes[selectedScheme].color].bg} flex-shrink-0`}>
//                         <div className={colorClasses[schemes[selectedScheme].color].text}>
//                           {section.icon}
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="text-lg font-semibold text-gray-800 mb-3">
//                           {section.title}
//                         </h4>
//                         <div className="prose prose-gray max-w-none">
//                           <p className="text-gray-700 leading-relaxed">
//                             {section.content}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Disclaimer */}
//             <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-300">
//               <div className="flex items-center gap-3 mb-3">
//                 <AlertCircle className="h-5 w-5 text-gray-600" />
//                 <h4 className="font-semibold text-gray-900">Disclaimer</h4>
//               </div>
//               <p className="text-sm text-gray-700">
//                 All schemes are subject to change as per TRAI regulations and company policies. Please contact TCCL customer care for the most current information. Terms and conditions apply.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };



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