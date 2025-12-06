import React, { useState } from "react";
import { X, GripVertical, Info, Package, Users, Globe, FileText, ChevronDown } from "lucide-react";

const broadcasters = [
  {
    id: 1,
    name: "KAL Media Services Private Limited",
    color: "blue",
    description: "Leading media services provider",
    details: {
      channels: ["KTV", "K Music", "K News"],
      website: "www.kalmedia.com"
    },
    bouquets: [
      {   name: "SUN TAMIL BASIC SD", 
          price: "49.00",
          channels: ["ADITHYA","ADITHYA TV","SUN","SUN TV","CHUTTI","CHUTTI TV","KTV","KTV","SUN","SUN LIFE","SUN","SUN MUSIC","SUN","SUN NEWS"]
       },
      { name: "SUN ULTIMATE SD", 
        price: "118.00",
        channels:[["CHINTU","CHINTU TV","UDAYA","UDAYA COMEDY","UDAYA","UDAYA MOVIES","UDAYA","UDAYA MUSIC","UDAYA","UDAYA TV","KOCHU","KOCHU TV","SURYA","SURYA COMEDY","SURYA","SURYA MOVIES","SURYA","SURYA MUSIC","SURYA","SURYA TV","GEMINI","GEMINI COMEDY","GEMINI","GEMINI LIFE","GEMINI","GEMINI MOVIES","GEMINI","GEMINI MUSIC","GEMINI","GEMINI TV","KUSHI","KUSHI TV","ADITHYA","ADITHYA TV","SUN","SUN TV","CHUTTI","CHUTTI TV","KTV","KTV","SUN","SUN LIFE","SUN","SUN MUSIC","SUN"]
],
       },
      { name: "SUN TAMIL BASIC HD", price: "70.00",
         channels:[]
      },
      { name: "SUN TELUGU BASIC SD", price: "49.00",
        channel:[]
       },
      { name: "SUN KANNADA BASIC SD", price: "35.00",
        channel: []
       },
      { name: "SUN MALAYALAM BASIC SD", price: "22.00",
        channel:[]
       },
      { name: "SUN ULTIMATE HD", price: "140.00",
        channel:[]
       },
      { name: "SUN KANNADA PRIME", price: "45.00", },
      { name: "OT SUN MALAYALAM BASIC SD ", price: "22.00",
        channel:[] },
      { name: "OT SUN TAMIL BASIC HD ", price: "70.00",
        channel:[] },
      { name: "OT SUN ULTIMATE SD ", price: "118.00",
        channel:[
[
  "CHINTU",
  "CHINTU TV",
  "UDAYA",
  "UDAYA COMEDY",
  "UDAYA MOVIES",
  "UDAYA MUSIC",
  "UDAYA TV",
  "KOCHU",
  "KOCHU TV",
  "SURYA",
  "SURYA COMEDY",
  "SURYA MOVIES",
  "SURYA MUSIC",
  "SURYA TV",
  "GEMINI",
  "GEMINI COMEDY",
  "GEMINI LIFE",
  "GEMINI MOVIES",
  "GEMINI MUSIC",
  "GEMINI TV",
  "KUSHI",
  "KUSHI TV",
  "ADITHYA",
  "ADITHYA TV",
  "SUN",
  "SUN TV",
  "CHUTTI",
  "CHUTTI TV",
  "KTV",
  "SUN LIFE",
  "SUN MUSIC",
  "SUN NEWS"
]

]
 },
      { name: "SUN KANNADA BASIC HD ", price: "50.00",
        channel:["HINTU", "CHINTU TV", "UDAYA", "UDAYA COMEDY", 
          "UDAYA", "UDAYA HD", "UDAYA", "UDAYA MOVIES", 
          "UDAYA", "UDAYA MUSIC"] },
      { name: "SUN TAMIL TELUGU SD ", price: "68.00",
        channel:["GEMINI COMEDY", "GEMINI", "GEMINI LIFE", 
          "GEMINI", "GEMINI MOVIES", "GEMINI", "GEMINI MUSIC",
           "GEMINI", "GEMINI TV", "KUSHI TV", "ADITHYA TV",
            "SUN TV", "CHUTTI TV", "KTV", "SUN LIFE", 
            "SUN MUSIC", "SUN NEWS"]},
      { name: "SUN TAMIL KANNADA SD", price: "68.00",
      channel:[
      "CHINTU",
      "CHINTU TV",
      "UDAYA",
      "UDAYA COMEDY",
      "UDAYA",
      "UDAYA MOVIES",
      "UDAYA",
      "UDAYA MUSIC",
      "UDAYA",
      "UDAYA TV",
      "ADITHYA",
      "ADITHYA TV",
      "SUN",
      "SUN TV",
      "CHUTTI",
      "CHUTTI TV",
      "KTV",
      "KTV",
      "SUN",
      "SUN LIFE",
      "SUN",
      "SUN MUSIC",
      "SUN",
      "SUN NEWS"
      ]},
      { name: "SUN TAMIL MALAYALAM SD ", price: "58.00",
        channel:[
          "KOCHU",
          "KOCHU TV",
          "SURYA",
          "SURYA COMEDY",
          "SURYA",
          "SURYA MOVIES",
          "SURYA",
          "SURYA MUSIC",
          "SURYA",
          "SURYA TV",
          "ADITHYA",
          "ADITHYA TV",
          "SUN",
          "SUN TV",
          "CHUTTI",
          "CHUTTI TV",
          "KTV",
          "KTV",
          "SUN",
          "SUN LIFE",
          "SUN",
          "SUN MUSIC",
          "SUN",
          "SUN NEWS"
        ]},
      { name: "SUN TELUGU KANNADA HD  ", price: "80.00",
        channel:["CHINTU",
        'CHINTU TV',
        'UDAYA',
        'UDAYA COMEDY',
        'UDAYA',
        'UDAYA HD',
        'UDAYA',
        'UDAYA MOVIES',
        'UDAYA',
        'UDAYA MUSIC',
        'GEMINI',
        'GEMINI COMEDY',
        'GEMINI',
        'GEMINI LIFE',
        'GEMINI',
        'GEMINI MOVIES HD',
        'GEMINI',
        "GEMINI MUSIC HD",
        "GEMINI",
        "GEMINI TV HD",
        "KUSHI",
        "KUSHI TV"]},
      { name: "SUN TELUGU BASIC HD", price: "45.00",
        channel:["GEMINI",
                "GEMINI COMEDY",
                "GEMINI",
                "GEMINI LIFE",
                "GEMINI",
                "GEMINI MOVIES HD",
                "GEMINI",
                "GEMINI MUSIC HD",
                "GEMINI",
                "GEMINI TV HD",
                "KUSHI",
                "KUSHI TV",
                ]
      },
     { name: "SUN MALAYALAM BASIC HD", price: "30.00",
        channel:["SURYA",
        "SURYA TV HD",
        "KOCHU",
        "KOCHU TV",
        "SURYA",
        "SURYA COMEDY",
        "SURYA",
        "SURYA MOVIES",
        "SURYA",
        "SURYA MUSIC" ]
     },
    ]
  },
  {
    id: 2,
    name: "JIO STAR INDIA PRIVATE LIMITED",
    color: "red",
    description: "Digital entertainment giant",
    details: {
      channels: ["JioCinema", "JioTV", "Sports Channels"],
      website: "www.jiostar.com"
    },
  bouquets: [
    { name: "JIO BASIC", price: "299.00" },
    { name: "JIO PREMIUM", price: "599.00" },
    { name: "JIO ULTIMATE", price: "999.00" },
    { name: "JIO SPORTS", price: "449.00" },
    { name: "SVP TAMIL", price: "75.00" },
    { name: "DISNEY KIDS PACK", price: "17.00" },
    { name: "STAR TAMIL TELUGU VALUE", price: "55.00" },
    { name: "SVP HINDI", price: "110.00" },
    { name: "SVP TELUGU", price: "59.00" },
    { name: "SVP KANNADA", price: "45.00" },
    { name: "SVP MALAYALAM", price: "90.00" },
    { name: "SVP HD HINDI", price: "88.00" },
    { name: "TEST STAR", price: "0.00" },
    { name: "OT DISNEY KIDS PACK", price: "17.00" },
    { name: "OT SVP HD HINDI", price: "88.00" },
    { name: "OT SVP HINDI", price: "110.00" },
    { name: "OT SVP KANNADA", price: "45.00" },
    { name: "OT SVP MALAYALAM", price: "90.00" },
    { name: "OT SVP TAMIL", price: "75.00" },
    { name: "OT SVP TELUGU", price: "59.00" },
    { name: "SVP MARATHI HINDI", price: "125.00" },
    { name: "SVP KANNADA TELUGU MINI", price: "45.00" },
    { name: "SVP KANNADA MARATHI MINI", price: "45.00" },
    { name: "SVP TELUGU KANNADA", price: "63.00" },
    { name: "SVP ALL SOUTH TAMIL", price: "130.00" },
    { name: "SVP ALL SOUTH", price: "97.00" },
    { name: "SPP MINI TAMIL", price: "76.00" },
    { name: "SVP HD KANNADA", price: "77.00" },
    { name: "SVP HD MALAYALAM", price: "77.00" },
    { name: "SVP HD TAMIL", price: "77.00" },
    { name: "SVP LITE HD TELUGU", price: "77.00" },
    { name: "DISNEY HUNGAMA KIDS PACK HD", price: "18.00" },
    { name: "SVP TAMIL TELUGU", price: "66.00" },
    { name: "SPP TAMIL", price: "150.00" },
    { name: "SPP HD TAMIL", price: "113.00" },
    { name: "SVP TELUGU TAMIL", price: "66.00" },
    { name: "SVP HINDI BASIC", price: "110.00" },
    { name: "SVP LITE HINDI HD", price: "150.00" },
    { name: "SVP LITE HINDI HD BASIC", price: "150.00" },
    { name: "SVP TAMIL BASIC", price: "75.00" },
    { name: "SVP LITE TAMIL HD", price: "120.00" }
  ]
  },
  {
    id: 3,
    name: "ZEE Entertainment Enterprises Limited",
    color: "orange",
    description: "Leading Indian media conglomerate",
    details: {
      channels: ["Zee TV", "Zee Cinema", "Zee News"],
      website: "www.zeetv.com"
    },
  bouquets: [
  { name: "ZEE PP TAMIL SD", price: "₹21.00/Month" },
  { name: "ZEE FP-A TAMIL SD", price: "₹35.00/Month" },
  { name: "ZEE ALL-IN-ONE TAMIL SD", price: "₹72.00/Month" },
  { name: "ZEE PRIME PACK TAMIL HD", price: "₹25.00/Month" },
  { name: "ZEE FAMILY PACK TAMIL HD", price: "₹65.00/Month" },
  { name: "ZEE PRIME PACK ALL SOUTH SD", price: "₹34.00/Month" },
  { name: "ZEE FAMILY PACK ALL SOUTH SD", price: "₹65.00/Month" },
  { name: "ZEE PRIME PACK TAMIL-TELUGU SD", price: "₹25.00/Month" },
  { name: "ZEE FP HINDI SD", price: "₹47.00/Month" },
  { name: "ZEE FP-A TELUGU SD", price: "₹35.00/Month" },
  { name: "ZEE ALL-IN-ONE PACK HINDI HD", price: "₹85.00/Month" },
  { name: "ZEE PRIME PACK TAMIL SD", price: "₹19.00/Month" },
  { name: "OT ZEE ALL-IN-ONE TAMIL SD", price: "₹72.00/Month" },
  { name: "OT ZEE FP HINDI SD", price: "₹47.00/Month" },
  { name: "OT ZEE FP-A TAMIL SD", price: "₹35.00/Month" },
  { name: "OT ZEE PP TAMIL SD", price: "₹21.00/Month" },
  { name: "OT ZEE FP-A TELUGU SD", price: "₹35.00/Month" },
  { name: "ZEE PP ENGLISH SD", price: "₹15.00/Month" },
  { name: "ZEE FP-A KANNADA SD", price: "₹35.00/Month" },
  { name: "ZEE FP-A MALAYALAM SD", price: "₹24.00/Month" },
  { name: "ZMCL SOUTH PACK", price: "₹0.83/Month" },
  { name: "ZEE FP HINDI HD", price: "₹79.00/Month" },
  { name: "ZEE PP ENGLISH HD", price: "₹25.00/Month" },
  { name: "ZEE PP TAMIL HD", price: "₹33.00/Month" },
  { name: "ZEE PP TELUGU HD", price: "₹44.00/Month" },
  { name: "ZEE PP KANNADA HD", price: "₹33.00/Month" },
  { name: "ZEE PP MALAYALAM HD", price: "₹16.00/Month" },
  { name: "ZEE FP MARATHI SD", price: "₹54.00/Month" },
]
  },
  {
    id: 4,
    name: "Culver Max Entertainment Pvt Ltd",
    color: "purple",
    description: "Formerly Sony Pictures Networks",
    details: {
      channels: ["Sony TV", "SAB TV", "Sony Max"],
      website: "www.sonytv.com"
    },
    bouquets: [
        { name: "HI SMART SOUTH 1", price: "26.00" },
        { name: "HI ENGLISH DELIGHT", price: "13.00" },
        { name: "HI SMART PLUS SOUTH", price: "43.00" },
        { name: "OT HI SMART PLUS SOUTH", price: "43.00" },
        { name: "OT HI SMART SOUTH 1", price: "26.00" },
        { name: "OT HI ENGLISH DELIGHT", price: "13.00" },
        { name: "HI SMART HINDI", price: "48.00" },
        { name: "HI SMART SOUTH 2", price: "25.00" },
        { name: "HI SMART HD HINDI", price: "83.00" },
        { name: "HI SPORTS ACTION HD SOUTH", price: "63.00" },
        { name: "HI SPORTS ACTION SOUTH", price: "47.00" }
      ]
  },
  {
    id: 5,
    name: "Bennett and Coleman Company Ltd",
    color: "green",
    description: "Times Group media company",
    details: {
      channels: ["Times Now", "ET Now", "Zoom"],
      website: "www.timesgroup.com"
    },

  bouquets : [
  { name: "TIMES SD PACK-02", price: "₹15.00/Month" },
  { name: "TIMES SD PACK-01", price: "₹5.00/Month" },
  { name: "TIMES ALL HD PACK", price: "₹20.00/Month" },
  { name: "OT TIMES SD PACK-01", price: "₹5.00/Month" },
  { name: "OT TIMES SD PACK-02", price: "₹15.00/Month" },
  { name: "TIMES SD PACK-03", price: "₹1.00/Month" },
  { name: "TIMES HD PACK-01", price: "₹28.00/Month" }
]
  },
  {
    id: 6,
    name: "Warner Media India Private Limited",
    color: "indigo",
    description: "Global entertainment leader",
    details: {
      channels: ["HBO", "Cartoon Network", "CNN"],
      website: "www.warnermediaindia.com"
    },
    bouquets: [
      { name: "TURNER KIDS PACK", price: "4.25" },
      { name: "TURNER FAMILY PACK", price: "10.00" },
    ]
  },
  {
    id: 7,
    name: "TV Today Network Ltd",
    color: "teal",
    description: "News and current affairs network",
    details: {
      channels: ["India Today", "Aaj Tak", "Good News Today"],
      website: "www.indiatoday.in"
    },
    bouquets: [
      { name: "TVTN NEWS BOUQUET", price: "1.00" },
      { name: "ENGLISH NEWS INDIA TODAY PACK", price: "1.75" }
    ]
  },
  {
    id: 8,
    name: "Raj Television Network Limited",
    color: "pink",
    description: "South Indian entertainment network",
    details: {
      channels: ["Raj TV", "Raj Digital", "Raj News"],
      website: "www.rajtv.com"
    },
    bouquets: [
      { name: "RAJ pack", price: "6.00" },
    ]
  },
  {
    id: 9,
    name: "Mavis Satcom Ltd",
    color: "yellow",
    description: "Satellite communications provider",
    details: {
      channels: ["Mavis TV", "SatCom News"],
      website: "www.mavissatcom.com"
    },
    bouquets: [
      { name: "JAYA PACK", price: "8.00" },
      { name: "OT JAYA PACK", price: "8.00" }
    ]
  },
  {
    id: 10,
    name: "Silver Star Entertainment India Pvt Ltd",
    color: "rose",
    description: "Entertainment and movie network",
    details: {
      channels: ["Silver Star Movies", "SS Music"],
      website: "www.silverstarentertainment.com"
    },
    bouquets: [
      { name: "MEGA PACK 1", price: "3.60" },
      { name: "OT MEGA PACK 1", price: "3.60" },
    ]
  },
  {
    id: 11,
    name: "New Delhi Television Ltd",
    color: "cyan",
    description: "Premier news broadcasting company",
    details: {
      channels: ["NDTV 24x7", "NDTV India", "NDTV Profit"],
      website: "www.ndtv.com"
    },
    bouquets: [
      { name: "NDTV SOUTH", price: "3.25" },
      { name: "NDTV ULTRA", price: "4.50" },
    ]
  },
  {
  id: 12,
  name: "Eenadu Television Pvt Ltd",
  color: "orange",
  description: "Leading Telugu language news and entertainment broadcaster",
  details: {
    channels: ["ETV Telugu", "ETV Andhra Pradesh", "ETV Telangana", "ETV Plus", "ETV Life"],
    website: "www.etv.co.in"
  },
  bouquets: [
    { name: "ETV FAMILY PACK", price: "31.00" },
    { name: "ETV FAMILY PACK-01", price: "34.00" },
    { name: "ETV HD FAMILY PACK", price: "41.00" }
]
},

{
  id: 13,
  name: "Kalaignar TV Pvt Ltd",
  color: "purple",
  description: "Popular Tamil language general entertainment broadcaster",
  details: {
    channels: ["Kalaignar TV", "Sirippoli TV", "Isaiaruvi", "Kalaignar Seithigal"],
    website: "www.kalaignartv.co.in"
  },
  bouquets: [
    { name: "KALAIGNAR PACK", price: "25.00", period: "Month" },
    { name: "OT KALAIGNAR PACK", price: "25.00", period: "Year" }
  ]
},

{
  id: 14,
  name: "BBC Global News India Pvt Ltd",
  color: "red",
  description: "International news broadcaster providing global coverage",
  details: {
    channels: ["BBC World News"],
    website: "www.bbc.com"
  },
  bouquets: [
        { name: "BBC PACK", price: "3.00" }
  ]
},

{
  id: 15,
  name: "IN10 Media Private Limited",
  color: "blue",
  description: "Indian media network offering infotainment and entertainment channels",
  details: {
    channels: ["Epic TV", "ShowBox", "Filamchi", "Gubbare"],
    website: "www.in10media.com"
  },
  bouquets: [
        { name: "IN10 VALUE PACK", price: "9.00" }
  ]
},

{
  id: 16,
  name: "Discovery Communications India",
  color: "green",
  description: "Major factual entertainment network offering educational and lifestyle channels",
  details: {
    channels: ["Discovery Channel", "Animal Planet", "TLC", "Discovery Kids", "Investigation Discovery"],
    website: "www.discoverychannel.co.in"
  },
  bouquets: [
        { name: "DIS PREMIUM TAMIL PACK-HD", price: "26.00" }
  ]
},

{
  id: 17,
  name: "PRO Media",
  color: "teal",
  description: "Emerging media and broadcasting company",
  details: {
    channels: [],
    website: ""
  },
  bouquets: []
}

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
  sky: { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-700", header: "bg-sky-100" },
  fuchsia: { bg: "bg-fuchsia-50", border: "border-fuchsia-200", text: "text-fuchsia-700", header: "bg-fuchsia-100" }
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
              <div className="space-y-2">
{bouquet.channels?.length > 0 ? (
    bouquet.channels.map((channel, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <span className="text-gray-700">{channel}</span>
      </div>
    ))
) : (
    <p className="text-gray-500">No channels available</p>
)}
              </div>
            </div>

            <div className={`${colors.bg} p-4 rounded-lg border ${colors.border}`}>
              <p className="text-sm text-gray-600">
                <strong>Package:</strong> {bouquet.name}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                This is a premium television package with multiple channels covering entertainment, news, and regional content.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t flex justify-between">
            <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium">
              Close
            </button>
            <button className={`px-6 py-2 rounded-lg font-medium ${colors.text} ${colors.header} hover:opacity-80 transition`}>
              Subscribe Now
            </button>
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
            <Package className="h-5 w-5" /> Available Bouquets
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {broadcaster.bouquets.map((bouquet, idx) => (
              <div 
                key={idx}
                onClick={() => onBouquetClick(bouquet, broadcaster)}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg hover:border-gray-300 transition transform hover:scale-105"
              >
                <h5 className={`font-semibold ${colors.text} mb-2 text-sm`}>{bouquet.name}</h5>
                <p className="text-2xl font-bold text-gray-900">₹{bouquet.price}</p>
                <p className="text-xs text-gray-500 mt-1">/Month</p>
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
          <p className="text-gray-600">Drag to reorder, click the drag bar to expand and view bouquets</p>
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
          Total Broadcasters: {list.length}
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