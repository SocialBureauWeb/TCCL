import React from "react";
import { Navbar } from "../components/Navbar";
import { 
  AlertTriangle, 
  Info, 
  FileText, 
  CheckCircle, 
  Bell, 
  Shield,
  ExternalLink,
  Volume2,
  FileWarning
} from "lucide-react";

export const NetworkPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-amber-100 rounded-full mb-6">
            <AlertTriangle className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Important Notice for TCCL Consumers
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Info className="h-4 w-4 text-blue-600" />
            <p className="text-sm text-blue-700 font-medium">
              Telecom Regulatory Authority of India (TRAI) Compliance Notice
            </p>
          </div>
        </div>

        {/* Legal Reference Card */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Regulatory Reference
              </h3>
              <p className="text-gray-700">
                Pursuant to <span className="font-semibold">"THE TELECOMMUNICATION (BROADCASTING AND CABLE) SERVICES (EIGHTH) (ADDRESSABLE SYSTEMS) TARIFF (SECOND AMENDMENT) ORDER, 2020 (No. 1 of 2020)"</span> of Telecom Regulatory Authority of India (TRAI)
              </p>
            </div>
          </div>
        </div>

        {/* Main Notice Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8">
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Key Information for Customers
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                Customers will have to pay for the Pay Channels and Network Capacity Fee (NCF) as mentioned below:
              </p>
            </div>

            {/* Points List */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">1</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Pay ₹130/- only as Network Capacity Fee (NCF)</span> for receiving upto initial 200 SD Channels (taxes extra) to the first TV connection.
                    <span className="block mt-2 text-amber-700 font-medium">
                      Every HD channel subscribed to will count as 2 SD channels
                    </span>
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">2</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Pay ₹160/- only as Network Capacity Fee (NCF)</span> for receiving more than 200 SD channels subscribed to (taxes extra) to the first TV connection.
                    <span className="block mt-2 text-amber-700 font-medium">
                      Every HD channel subscribed to will count as 2 SD channels
                    </span>
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 font-bold">3</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Network Capacity Fee for additional TV connections:</span> Per month for each additional TV connection, beyond the first TV connection in a multi TV home shall be forty per cent of the Network Capacity Fee of the Parent STB. The STB with maximum number of channels would be treated as Parent STB.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold">4</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Mandatory Government Channels:</span> The television channels notified by the Central Government shall be mandatorily available to all the subscribers and shall be in addition to the number of channels available in the network capacity fee.
                  </p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="flex gap-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-700 font-bold">5</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Pay Distributor Retail Price (DRP):</span> Pay Distributor Retail Price (DRP) as published by TCCL for pay channels or bouquets as per your choice (taxes extra).
                  </p>
                </div>
              </div>

              {/* Point 6 */}
              <div className="flex gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">
                    Enjoy the freedom to choose your favourite channels or bouquet
                  </p>
                </div>
              </div>

              {/* Point 7 */}
              <div className="flex gap-4 p-4 bg-rose-50 rounded-lg border border-rose-100">
                <div className="flex-shrink-0">
                  <Volume2 className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Maximum Retail Price Display:</span> Maximum Retail Price of each channel (exclusive of applicable taxes) will be displayed on EPG as seen on your TV screen.
                  </p>
                </div>
              </div>

              {/* Point 8 */}
              <div className="flex gap-4 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <div className="flex-shrink-0">
                  <FileWarning className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Package Pricing & GST:</span> All package pricing is per Set Top Box (STB) per month. Goods and Service Tax (GST) is payable by Subscriber as applicable.
                  </p>
                </div>
              </div>

              {/* Point 9 */}
              <div className="flex gap-4 p-4 bg-sky-50 rounded-lg border border-sky-100">
                <div className="flex-shrink-0">
                  <ExternalLink className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Additional Information:</span> For additional information and MRP of pay channels please refer to respective broadcasters website and the CONSUMER INFO Channel in LCN - 999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};