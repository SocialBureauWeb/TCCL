import React, { useState } from "react";
import { X, GripVertical, Info, Package, Users, Globe, FileText, ChevronDown } from "lucide-react";

// Package Data
const sunPackages = [
  { name: "SUN TAMIL BASIC SD", price: 49, channels: ["ADITHYA TV", "SUN TV", "CHUTTI TV", "KTV","SUN LIFE","SUN MUSIC","SUNNEWS"] },
  { name: "SUN ULTIMATE SD", price: 118, channels: ["CHINTU TV", "UDAYA TV", "UDAYA COMEDY", "UDAYA MOVIES", "UDAYA MUSIC", "KOCHU TV", "SURYA TV", "SURYA COMEDY", "SURYA MOVIES", "SURYA MUSIC", "GEMINI TV", "GEMINI COMEDY", "GEMINI LIFE", "GEMINI MOVIES", "GEMINI MUSIC", "KUSHI TV", "ADITHYA TV", "SUN TV", "CHUTTI TV", "KTV", "SUN LIFE", "SUN MUSIC", "SUN NEWS"] },
  { name: "SUN TAMIL BASIC HD", price: 70, channels: ["ADITHYA TV", "SUN TV HD", "CHUTTI TV", "KTV HD", "SUN LIFE","SUN MUSIC HD", "SUN NEWS"] },
  { name: "SUN TELUGU BASIC SD", price: 38, channels: ["GEMINI COMEDY","GEMINI LIFE","GEMINI MOVIES","GEMINI TV", "KUSHI TV"] },
  { name: "SUN KANNADA BASIC SD", price: 35, channels: ["CHINTU TV", "UDAYA TV", "UDAYA COMEDY", "UDAYA MOVIES", "UDAYA MUSIC"] },
  { name: "SUN MALAYALAM BASIC SD", price: 22, channels: ["KOCHU TV", "SURYA COMEDY", "SURYA MOVIES", "SURYA MUSIC","SURYA TV"] },
  { name: "SUN ULTIMATE HD", price: 140, channels: [
      "CHINTU TV",
      "UDAYA COMEDY",
      "UDAYA MOVIES",
      "UDAYA MUSIC",
      "UDAYA HD",
      "KOCHU TV",
      "SURYA TV HD",
      "SURYA COMEDY",
      "SURYA MOVIES",
      "SURYA MUSIC",
      "GEMINI COMEDY",
      "GEMINI LIFE",
      "GEMINI MOVIES HD",
      "GEMINI MUSIC HD",
      "GEMINI TV HD",
      "KUSHI TV",
      "ADITHYA TV",
      "SUN TV HD",
      "CHUTTI TV",
      "KTV HD",
      "SUN LIFE",
      "SUN MUSIC HD",
      "SUN NEWS"
    ]},
  { name: "SUN KANNADA PRIME", price: 45, channels: ["CHINTU TV", "UDAYA TV","UDAYA COMEDY", "UDAYA MOVIES","UDAYA MUSIC",   "GEMINI TV", "SUN TV", "KTV"] }
];

const jioStarPackages = [
  { name: "SVP TAMIL", price: 75, channels: ["NAT GEO WILD", "NGC", "HUNGAMA TV", "NICK", "STAR SPORTS 1 TAMIL", "VIJAY TV"] },
  { name: "DISNEY KIDS PACK", price: 17, channels: ["DISNEY CHANNEL", "DISNEY JUNIOR", "SUPER HUNGAMA"] },
  { name: "SVP HINDI", price: 110, channels: ["NAT GEO WILD", "NGC", "HUNGAMA TV", "STAR SPORTS 1 HINDI", "STAR PLUS"] },
  { name: "SVP TELUGU", price: 59, channels: ["NAT GEO WILD", "NGC", "STAR SPORTS 1 TELUGU", "MAA GOLD"] },
  { name: "SVP KANNADA", price: 45, channels: ["NAT GEO WILD", "STAR SUVARNA PLUS", "STAR SPORTS 1 KANNADA"] },
  { name: "SVP MALAYALAM", price: 90, channels: ["NAT GEO WILD", "ASIANET", "STAR SPORTS 1"] }
];

const zeePackages = [
  { name: "ZEE PP TAMIL SD", price: 21, channels: ["ZEE ZEST", "ZEE BOLLYWOOD", "ZING", "ZEE TAMIL", "ZEE THIRAI"] },
  { name: "ZEE FP-A TAMIL SD", price: 35, channels: ["ZEE CAFE", "ZEE ZEST", "& FLIX", "ZEE BOLLYWOOD", "ZEE TAMIL"] },
  { name: "ZEE ALL-IN-ONE TAMIL SD", price: 72, channels: ["ZEE CAFE", "ZEE ZEST", "& TV", "ZEE TV", "ZEE CINEMA"] },
  { name: "ZEE PRIME PACK TAMIL HD", price: 25, channels: ["WION TV", "ZEE ZEST HD", "ZEE TAMIL HD"] },
  { name: "ZEE FP HINDI SD", price: 47, channels: ["ZEE ZEST", "& TV", "ZEE TV", "ZEE CINEMA"] }
];

const culverMaxPackages = [
  { name: "HI SMART SOUTH 1", price: 26, channels: ["SONY YAY", "SONY TEN 1", "SONY BBC EARTH"] },
  { name: "HI ENGLISH DELIGHT", price: 13, channels: ["SONY YAY", "SONY PIX", "SONY BBC EARTH"] },
  { name: "HI SMART PLUS SOUTH", price: 43, channels: ["SONY YAY", "SONY PIX", "SONY TEN 1", "SONY ENTERTAINMENT"] },
  { name: "HI SMART HINDI", price: 48, channels: ["SONY YAY", "SONY TEN 3", "SONY ENTERTAINMENT", "SONY SAB"] }
];

const bennettColemanPackages = [
  { name: "TIMES SD PACK-02", price: 15, channels: ["MNX", "MOVIES NOW", "TIMES NOW", "ET NOW"] },
  { name: "TIMES SD PACK-01", price: 5, channels: ["MIRROR NOW", "TIMES NOW", "ET NOW"] },
  { name: "TIMES ALL HD PACK", price: 20, channels: ["MIRROR NOW", "MNX HD", "MOVIES NOW HD", "ET NOW"] }
];

const warnerMediaPackages = [
  { name: "TURNER KIDS PACK", price: 4.25, channels: ["CARTOON NETWORK", "POGO"] },
  { name: "TURNER FAMILY PACK", price: 10, channels: ["CARTOON NETWORK", "POGO", "CNN"] }
];

const tvTodayPackages = [
  { name: "TVTN NEWS BOUQUET", price: 1, channels: ["INDIA TODAY", "AAJ TAK", "GOOD NEWS TODAY"] },
  { name: "ENGLISH NEWS INDIA TODAY PACK", price: 1.75, channels: ["INDIA TODAY", "AAJ TAK"] }
];

const rajTvPackages = [
  { name: "RAJ PACK", price: 6, channels: ["RAJ DIGITAL PLUS", "RAJ TV", "RAJ MUSIX", "RAJ NEWS"] }
];

const mavisSatcomPackages = [
  { name: "JAYA PACK", price: 8, channels: ["JAYA TV", "J MOVIES", "JAYA MAX", "JAYA PLUS"] }
];

const silverStarPackages = [
  { name: "MEGA PACK 1", price: 3.6, channels: ["MEGA 24", "MEGA TV", "MEGA MUSIC"] }
];

const ndtvPackages = [
  { name: "NDTV SOUTH", price: 3.25, channels: ["NDTV GOOD TIMES", "NDTV 24X7", "NDTV PROFIT"] },
  { name: "NDTV ULTRA", price: 4.5, channels: ["NDTV GOOD TIMES", "NDTV 24X7", "NDTV PROFIT", "NDTV INDIA"] }
];

const eenaduPackages = [
  { name: "ETV FAMILY PACK", price: 31, channels: ["ETV TELENGANA", "ETV ABIRUCHI", "ETV ANDHRA PRADESH"] },
  { name: "ETV FAMILY PACK-01", price: 34, channels: ["ETV BAL BHARAT", "ETV TELENGANA", "ETV CINEMA"] },
  { name: "ETV HD FAMILY PACK", price: 41, channels: ["ETV TELENGANA", "ETV CINEMA HD", "ETV PLUS HD"] }
];

const kalaignarPackages = [
  { name: "KALAIGNAR PACK", price: 25, channels: ["SIRIPOLI", "KALAIGNAR TV", "ISAI ARUVI"] }
];

const bbcPackages = [
  { name: "BBC PACK", price: 3, channels: ["BBC CBEEBIES", "BBC WORLD NEWS"] }
];

const in10MediaPackages = [
  { name: "IN10 VALUE PACK", price: 9, channels: ["FILAMCHI", "ISHARA", "GUBBARE", "EPIC TV"] }
];

const discoveryPackages = [
  { name: "DIS PREMIUM TAMIL PACK-HD", price: 26, channels: ["CARTOON NETWORK HD PLUS", "CARTOON NETWORK", "POGO"] }
];

const broadcasters = [
  { id: 1, name: "KAL Media Services Private Limited", color: "blue", description: "Leading media services provider", bouquets: sunPackages },
  { id: 2, name: "JIO STAR INDIA PRIVATE LIMITED", color: "red", description: "Digital entertainment giant", bouquets: jioStarPackages },
  { id: 3, name: "ZEE Entertainment Enterprises Limited", color: "orange", description: "Leading Indian media conglomerate", bouquets: zeePackages },
  { id: 4, name: "Culver Max Entertainment Pvt Ltd", color: "purple", description: "Formerly Sony Pictures Networks", bouquets: culverMaxPackages },
  { id: 5, name: "Bennett and Coleman Company Ltd", color: "green", description: "Times Group media company", bouquets: bennettColemanPackages },
  { id: 6, name: "Warner Media India Private Limited", color: "indigo", description: "Global entertainment leader", bouquets: warnerMediaPackages },
  { id: 7, name: "TV Today Network Ltd", color: "teal", description: "News and current affairs network", bouquets: tvTodayPackages },
  { id: 8, name: "Raj Television Network Limited", color: "pink", description: "South Indian entertainment network", bouquets: rajTvPackages },
  { id: 9, name: "Mavis Satcom Ltd", color: "yellow", description: "Satellite communications provider", bouquets: mavisSatcomPackages },
  { id: 10, name: "Silver Star Entertainment India Pvt Ltd", color: "rose", description: "Entertainment and movie network", bouquets: silverStarPackages },
  { id: 11, name: "New Delhi Television Ltd", color: "cyan", description: "Premier news broadcasting company", bouquets: ndtvPackages },
  { id: 12, name: "Eenadu Television Pvt Ltd", color: "amber", description: "Leading Telugu language broadcaster", bouquets: eenaduPackages },
  { id: 13, name: "Kalaignar TV Pvt Ltd", color: "lime", description: "Popular Tamil language broadcaster", bouquets: kalaignarPackages },
  { id: 14, name: "BBC Global News India Pvt Ltd", color: "violet", description: "International news broadcaster", bouquets: bbcPackages },
  { id: 15, name: "IN10 Media Private Limited", color: "emerald", description: "Indian media network", bouquets: in10MediaPackages },
  { id: 16, name: "Discovery Communications India", color: "sky", description: "Factual entertainment network", bouquets: discoveryPackages }
];

const colorClasses = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", header: "bg-blue-100" },
  red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", header: "bg-red-100" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", header: "bg-orange-100" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", header: "bg-purple-100" },
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", header: "bg-green-100" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700", header: "bg-indigo-100" },
  teal: { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-700", header: "bg-teal-100" },
  pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-700", header: "bg-pink-100" },
  yellow: { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700", header: "bg-yellow-100" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", header: "bg-rose-100" },
  cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-700", header: "bg-cyan-100" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", header: "bg-amber-100" },
  lime: { bg: "bg-lime-50", border: "border-lime-200", text: "text-lime-700", header: "bg-lime-100" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", header: "bg-violet-100" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", header: "bg-emerald-100" },
  sky: { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-700", header: "bg-sky-100" }
};

const BouquetModal = ({ bouquet, broadcaster, isOpen, onClose }) => {
  if (!isOpen || !bouquet) return null;
  
  const colors = colorClasses[broadcaster.color];
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          <div className={`${colors.header} p-6`}>
            <div className="flex justify-between items-start">
              <div>
                <h2 className={`text-2xl font-bold ${colors.text}`}>{bouquet.name}</h2>
                <p className="text-gray-700 mt-2">{broadcaster.name}</p>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-600 text-sm mb-2">Monthly Price</p>
              <p className="text-4xl font-bold text-gray-900">₹{bouquet.price}</p>
              <p className="text-gray-500 text-sm mt-1">per month</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5" /> Channels Included
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {bouquet.channels?.length > 0 ? (
                  bouquet.channels.map((channel, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{channel}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No channels available</p>
                )}
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

const CollapsibleBroadcaster = ({ broadcaster, onBouquetClick }) => {
  const [expanded, setExpanded] = useState(false);
  const colors = colorClasses[broadcaster.color];
  
  return (
    <div className={`border-b ${colors.border}`}>
      <div 
        className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition" 
        onClick={() => setExpanded(!expanded)}
      >
        <GripVertical className="h-5 w-5 text-gray-400 flex-shrink-0" />
        <div className="flex-1">
          <h3 className={`font-semibold text-lg ${colors.text}`}>{broadcaster.name}</h3>
          <p className="text-sm text-gray-600">{broadcaster.description}</p>
        </div>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${expanded ? 'rotate-180' : ''}`} />
      </div>
      
      {expanded && (
        <div className={`${colors.bg} border-t ${colors.border} p-6`}>
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Package className="h-5 w-5" /> Available Bouquets ({broadcaster.bouquets.length})
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {broadcaster.bouquets.map((bouquet, idx) => (
              <div 
                key={idx}
                onClick={() => onBouquetClick(bouquet, broadcaster)}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg hover:border-gray-300 transition transform hover:scale-105"
              >
                <h5 className={`font-semibold ${colors.text} mb-2 text-sm line-clamp-2`}>{bouquet.name}</h5>
                <p className="text-2xl font-bold text-gray-900">₹{bouquet.price}</p>
                <p className="text-xs text-gray-500 mt-1">/Month</p>
                <p className="text-xs text-gray-400 mt-2">{bouquet.channels?.length || 0} channels</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function BroadcastersDashboard() {
  const [list, setList] = useState(broadcasters);
  const [selectedBouquet, setSelectedBouquet] = useState(null);
  const [selectedBroadcaster, setSelectedBroadcaster] = useState(null);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === dropIndex) return;
    
    const newList = [...list];
    const draggedBroadcaster = newList[draggedItem];
    newList.splice(draggedItem, 1);
    newList.splice(dropIndex, 0, draggedBroadcaster);
    
    setList(newList);
    setDraggedItem(null);
  };

  const handleBouquetClick = (bouquet, broadcaster) => {
    setSelectedBouquet(bouquet);
    setSelectedBroadcaster(broadcaster);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Broadcasters Dashboard</h1>
          <p className="text-gray-600">Drag to reorder, click to expand and view bouquets</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
          {list.map((broadcaster, index) => (
            <div
              key={broadcaster.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className={draggedItem === index ? "opacity-50" : ""}
            >
              <CollapsibleBroadcaster broadcaster={broadcaster} onBouquetClick={handleBouquetClick} />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Total Broadcasters: {list.length} | Total Packages: {list.reduce((acc, b) => acc + b.bouquets.length, 0)}
        </p>
      </div>

      <BouquetModal 
        bouquet={selectedBouquet} 
        broadcaster={selectedBroadcaster}
        isOpen={!!selectedBouquet} 
        onClose={() => {
          setSelectedBouquet(null);
          setSelectedBroadcaster(null);
        }} 
      />
    </div>
  );
}