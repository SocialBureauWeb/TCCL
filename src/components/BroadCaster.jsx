import React, { useState } from "react";
import { X, GripVertical, Info, Package, Users, Globe, FileText, ChevronDown } from "lucide-react";

// Package Data
const sunPackages = [
  { name: "SUN TAMIL BASIC SD", price: 49, channels: ["ADITHYA TV", "SUN TV", "CHUTTI TV", "KTV", "SUN LIFE", "SUN MUSIC", "SUNNEWS"] },
  { name: "SUN ULTIMATE SD", price: 118, channels: ["CHINTU TV", "UDAYA TV", "UDAYA COMEDY", "UDAYA MOVIES", "UDAYA MUSIC", "KOCHU TV", "SURYA TV", "SURYA COMEDY", "SURYA MOVIES", "SURYA MUSIC", "GEMINI TV", "GEMINI COMEDY", "GEMINI LIFE", "GEMINI MOVIES", "GEMINI MUSIC", "KUSHI TV", "ADITHYA TV", "SUN TV", "CHUTTI TV", "KTV", "SUN LIFE", "SUN MUSIC", "SUN NEWS"] },
  { name: "SUN TAMIL BASIC HD", price: 70, channels: ["ADITHYA TV", "SUN TV HD", "CHUTTI TV", "KTV HD", "SUN LIFE", "SUN MUSIC HD", "SUN NEWS"] },
  { name: "SUN TELUGU BASIC SD", price: 38, channels: ["GEMINI COMEDY", "GEMINI LIFE", "GEMINI MOVIES", "GEMINI TV", "KUSHI TV"] },
  { name: "SUN KANNADA BASIC SD", price: 35, channels: ["CHINTU TV", "UDAYA TV", "UDAYA COMEDY", "UDAYA MOVIES", "UDAYA MUSIC"] },
  { name: "SUN MALAYALAM BASIC SD", price: 22, channels: ["KOCHU TV", "SURYA COMEDY", "SURYA MOVIES", "SURYA MUSIC", "SURYA TV"] },
  {
    name: "SUN ULTIMATE HD", price: 140, channels: [
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
    ]
  },
  { name: "SUN KANNADA PRIME", price: 45, channels: ["CHINTU TV", "UDAYA TV", "UDAYA COMEDY", "UDAYA MOVIES", "UDAYA MUSIC", "GEMINI TV", "SUN TV", "KTV"] }
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
  { id: 2, name: "JIO STAR INDIA PRIVATE LIMITED", color: "cyan", description: "Digital entertainment giant", bouquets: jioStarPackages },
  { id: 3, name: "ZEE Entertainment Enterprises Limited", color: "sky", description: "Leading Indian media conglomerate", bouquets: zeePackages },
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
  blue: { bg: "bg-blue-900/10", border: "border-blue-900/30", text: "text-blue-400", header: "bg-blue-900/40" },
  red: { bg: "bg-cyan-900/10", border: "border-cyan-900/30", text: "text-cyan-400", header: "bg-cyan-900/40" },
  orange: { bg: "bg-blue-900/10", border: "border-blue-900/30", text: "text-blue-400", header: "bg-blue-900/40" },
  purple: { bg: "bg-purple-900/10", border: "border-purple-900/30", text: "text-purple-400", header: "bg-purple-900/40" },
  green: { bg: "bg-green-900/10", border: "border-green-900/30", text: "text-green-400", header: "bg-green-900/40" },
  indigo: { bg: "bg-indigo-900/10", border: "border-indigo-900/30", text: "text-indigo-400", header: "bg-indigo-900/40" },
  teal: { bg: "bg-teal-900/10", border: "border-teal-900/30", text: "text-teal-400", header: "bg-teal-900/40" },
  pink: { bg: "bg-pink-900/10", border: "border-pink-900/30", text: "text-pink-400", header: "bg-pink-900/40" },
  yellow: { bg: "bg-yellow-900/10", border: "border-yellow-900/30", text: "text-yellow-400", header: "bg-yellow-900/40" },
  rose: { bg: "bg-rose-900/10", border: "border-rose-900/30", text: "text-rose-400", header: "bg-rose-900/40" },
  cyan: { bg: "bg-cyan-900/10", border: "border-cyan-900/30", text: "text-cyan-400", header: "bg-cyan-900/40" },
  amber: { bg: "bg-amber-900/10", border: "border-amber-900/30", text: "text-amber-400", header: "bg-amber-900/40" },
  lime: { bg: "bg-lime-900/10", border: "border-lime-900/30", text: "text-lime-400", header: "bg-lime-900/40" },
  violet: { bg: "bg-violet-900/10", border: "border-violet-900/30", text: "text-violet-400", header: "bg-violet-900/40" },
  emerald: { bg: "bg-emerald-900/10", border: "border-emerald-900/30", text: "text-emerald-400", header: "bg-emerald-900/40" },
  sky: { bg: "bg-sky-900/10", border: "border-sky-900/30", text: "text-sky-400", header: "bg-sky-900/40" }
};

const BouquetModal = ({ bouquet, broadcaster, isOpen, onClose }) => {
  if (!isOpen || !bouquet) return null;

  const colors = colorClasses[broadcaster.color];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-gray-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          <div className={`${colors.header} p-6 border-b border-white/5`}>
            <div className="flex justify-between items-start">
              <div>
                <h2 className={`text-2xl font-bold ${colors.text}`}>{bouquet.name}</h2>
                <p className="text-gray-400 mt-2 text-sm">{broadcaster.name}</p>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Monthly Price</p>
              <p className="text-4xl font-bold text-white">₹{bouquet.price}</p>
              <p className="text-gray-400 text-sm mt-1">per month</p>
            </div>

            <div className="bg-black/40 p-5 rounded-xl border border-white/5 mb-6">
              <h3 className="font-semibold text-gray-300 mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" /> Channels Included
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                {bouquet.channels?.length > 0 ? (
                  bouquet.channels.map((channel, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></div>
                      <span className="text-gray-400 text-sm">{channel}</span>
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
    <div className={`border-b border-white/5`}>
      <div
        className="flex items-center gap-4 p-5 cursor-pointer hover:bg-white/5 transition-all group"
        onClick={() => setExpanded(!expanded)}
      >
        <GripVertical className="h-5 w-5 text-gray-600 group-hover:text-gray-400 flex-shrink-0" />
        <div className="flex-1">
          <h3 className={`font-bold text-lg ${colors.text}`}>{broadcaster.name}</h3>
          <p className="text-sm text-gray-500">{broadcaster.description}</p>
        </div>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${expanded ? 'rotate-180 text-blue-500' : ''}`} />
      </div>

      {expanded && (
        <div className={`${colors.bg} border-t border-white/5 p-8`}>
          <h4 className="font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
            <Package className="h-4 w-4 text-blue-500" /> Available Bouquets ({broadcaster.bouquets.length})
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {broadcaster.bouquets.map((bouquet, idx) => (
              <div
                key={idx}
                onClick={() => onBouquetClick(bouquet, broadcaster)}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5 cursor-pointer hover:border-blue-500/50 hover:bg-gray-900 transition-all transform hover:-translate-y-1 shadow-xl"
              >
                <h5 className={`font-bold ${colors.text} mb-3 text-sm line-clamp-1`}>{bouquet.name}</h5>
                <div className="flex items-end gap-1">
                  <p className="text-3xl font-black text-white">₹{bouquet.price}</p>
                  <p className="text-xs text-gray-500 mb-1.5">/Month</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <p className="text-xs text-gray-400 font-medium uppercase">{bouquet.channels?.length || 0} channels</p>
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <ChevronDown className="h-3 w-3 text-blue-500 -rotate-90" />
                  </div>
                </div>
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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20 pb-20 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Broadcasters <span className="text-blue-500">Dashboard</span></h1>
          <p className="text-gray-400 font-display">Drag to reorder broadcasters and explore their premium bouquet offerings</p>
        </div>

        <div className="bg-gray-900/50 rounded-3xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl">
          {list.map((broadcaster, index) => (
            <div
              key={broadcaster.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className={`${draggedItem === index ? "opacity-20 bg-blue-500/10" : ""} transition-all`}
            >
              <CollapsibleBroadcaster broadcaster={broadcaster} onBouquetClick={handleBouquetClick} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 mt-10">
          <div className="text-center">
            <p className="text-2xl font-black text-blue-500">{list.length}</p>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Broadcasters</p>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <p className="text-2xl font-black text-blue-500">{list.reduce((acc, b) => acc + b.bouquets.length, 0)}</p>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Total Packages</p>
          </div>
        </div>
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