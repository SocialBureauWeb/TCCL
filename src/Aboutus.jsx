import React from "react";
import { Navbar } from "./components/Navbar";
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
  Wifi, 
  Tv,
  Zap,
  Shield,
  BarChart3,
  MapPin,
  Clock,
  Star
} from "lucide-react";

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
            <Tv className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-lg">
            <Users className="h-5 w-5" />
            <span>WHO RUNS THE SHOW</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Text */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Thamizhaga Cable TV Communication Ltd (TCCL)
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Thamizhaga Cable TV Communication Ltd (TCCL) is one of the largest Cable distribution company with a strong emphasis on quality of service and content.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This has enabled us to cater to millions of subscribers who are spread across Tamil Nadu in a very short span of time. With fiber optic backbone across its networks and state-of-the-art distribution set ups, we bring the digital age through Cable transforming the way viewers receive information and entertainment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Thamizhaga Cable TV Communication Pvt. Ltd. is a leading Multi System Operator (MSO) in Chennai started operations in December 2012 with an aim to serve the entire state of Tamil Nadu with the best quality Cable Television experience.
              </p>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Achievements & Growth
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Today TCCL is serving to more than 30,00,000 households</span> in the state of Tamil Nadu through more than 8000 Cable Operators partners.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-50 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-gray-700">
                    After serving a greater part of Chennai, TCCL is now proliferated to the entire state of <span className="font-semibold">Tamil Nadu, Andhra Pradesh and Karnataka</span> with State of the art Digital Head End 8500 KM Fibre Optic Network.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-50 rounded-lg flex-shrink-0">
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                  <p className="text-gray-700">
                    After the implementation of DAS in Chennai TCCL was one of the MSO to provide actual DAS environment to the end customers successfully. TCCL currently provides <span className="font-semibold">500 channels</span> with high Digital quality picture and sound to its subscribers.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Expertise & Differentiators
                </h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                TCCL success can be attributed to the experience of the members of Tamil Nadu Cable TV Operators Welfare Association (TCOA) who are veterans in the field of cable TV technology. TCOA members are the pioneers to conceive the concept of MSO (Multi System Operators). Prior to TCCL they have been instrumental in successful launch and establishment of MSO's. They Established TCCL in June 2012.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Using international brands and state of art technology, Thamizhaga Cable TV Communication Pvt Ltd has developed a state of the art Digital Head End in Chennai. TCCL is always committed to provide best possible Quality of Service to all our viewers. There are some differentiating factors that helped us to reach and sustain our position at the zenith.
              </p>
            </div>
          </div>

          {/* Right Column - Stats & Services */}
          <div className="space-y-8">
            {/* Services Offered */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Services Offered
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Tv className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Digital Cable Television</h4>
                    <p className="text-sm text-gray-600">500+ channels with HD quality</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Wifi className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Broadband Service</h4>
                    <p className="text-sm text-gray-600">High-speed internet connectivity</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3">Future Services</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Star className="h-3 w-3 text-amber-500" />
                    Video on Demand (VOD)
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-3 w-3 text-amber-500" />
                    Push VOD Services
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-3 w-3 text-amber-500" />
                    Gaming Platform
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-3 w-3 text-amber-500" />
                    E-commerce Integration
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-gray-600" />
                Quick Stats
              </h3>
              
              <div className="space-y-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+ Lakhs</div>
                  <div className="text-sm text-gray-600">Households Served</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">8,000+</div>
                  <div className="text-sm text-gray-600">Cable Operator Partners</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">8,500 KM</div>
                  <div className="text-sm text-gray-600">Fibre Optic Network</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Channels Available</div>
                </div>
              </div>
            </div>

            {/* Technology Leadership */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-600" />
                Technology Leadership
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-sm">
                  TCCL is the MSO (Multi System Operator) in the country to have state of the art Digital Headends in Tamil Nadu.
                </p>
                <p className="text-gray-700 text-sm">
                  TCCL Set Top Boxes are technologically far ahead of the ones being used by competition and are equipped to support all the latest software upgrades.
                </p>
                <p className="text-gray-700 text-sm font-semibold">
                  TCCL is now providing to its subscribers the High Definition (HD) and 3D Experience, ahead of any competing MSO in the Region.
                </p>
                <p className="text-gray-700 text-sm">
                  All of this is being made possible only as a result of the sustained commitment of TCCL towards technological up gradations and adaptations.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-purple-200">
                <p className="text-gray-900 font-semibold flex items-center gap-2">
                  <Clock className="h-4 w-4 text-purple-600" />
                  Since 2012
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Leading with experience and innovation for over a decade
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
            <div className="bg-white px-8 py-6 rounded-lg">
              <p className="text-xl font-bold text-gray-900">
                Our experienced and skilled management takes us far ahead of the other MSOs.
              </p>
              <p className="text-gray-600 mt-2">
                Committed to excellence in cable television distribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};