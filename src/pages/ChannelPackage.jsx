import React, { useState } from "react";
import { ChevronRight, Play, Grid3X3, Package, Zap, X } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { ftaTable, platformServices } from "./data/ftaTable";
import { payChannels } from "./data/payALaCarte";
import { suggestiveBouquets } from "./data/suggestiveBouquets";
import BroadcastersDashboard from "../components/BroadCaster";
import ContactSection from "../components/ContactSection";
import { Link } from "react-router-dom";

// CORRECTED CARD COMPONENT
const Card = ({ cardName, isSelected, onClick, itemCount, Icon, title, subtitle, color }) => {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl cursor-pointer
        transition-all duration-500 transform h-full
        ${isSelected
          ? 'ring-2 ring-blue-500 scale-105 shadow-2xl'
          : 'hover:scale-105 shadow-lg hover:shadow-2xl'
        }
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      <div className="relative bg-gray-900 p-8 border border-white/10 h-full flex flex-col">
        {/* Top Content */}
        <div className="flex-1">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} p-3 mb-4`}>
            <Icon className="w-full h-full text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            {subtitle}
          </p>
        </div>

        {/* Item Count Badge */}
        <div className="mb-4 inline-block">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            {itemCount || "16"} items
          </span>
        </div>

        {/* Bottom Button */}
        <button
          onClick={onClick}
          className={`
            w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300
            flex items-center justify-center gap-2
            ${isSelected
              ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg'
              : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }
          `}
        >
          {isSelected ? (
            <>
              <span>✓ Viewing</span>
            </>
          ) : (
            <>
              <span>View Details</span>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>

        {isSelected && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-700/5 pointer-events-none rounded-2xl" />
        )}
      </div>
    </div>
  );
};

const StatBox = ({ label, value, icon: Icon }) => (
  <div className="bg-gray-900 rounded-xl p-4 border border-white/10 hover:shadow-blue-500/10 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-2xl font-bold text-blue-500">{value}</p>
      </div>
    </div>
  </div>
);

export const ChannelTables = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Define content for each card - Using EXACT same structure as your first component
  const content = {
    "FTA A-LA-CARTE": {
      title: "FTA A-LA-CARTE",
      subtitle: "View all free-to-air channels available",
      icon: Play,
      color: "from-blue-500 to-blue-700",
      section: [
        {
          title: "FTA Table",
          data: ftaTable,
          columns: [
            { key: "sno", header: "S.No" },
            { key: "name", header: "Service Name" },
            { key: "lcn", header: "LCN" },
            { key: "logo", header: "Logo", isImage: true },
            { key: "drp", header: "DRP" },
            { key: "language", header: "Language" },
            { key: "category", header: "Category" }
          ]
        },
        {
          title: "Platform Services",
          data: platformServices,
          columns: [
            { key: "id", header: "S.No" },
            { key: "serviceName", header: "Service Name" },
            { key: "lcn", header: "LCN" },
            { key: "logo", header: "Logo", isImage: true },
            { key: "price", header: "Price" }
          ]
        }
      ],
    },
    "PAY CHANNEL A-LA-CARTE": {
      title: "PAY CHANNEL A-LA-CARTE",
      subtitle: "Individual pay channels with pricing",
      icon: Zap,
      color: "from-blue-500 to-blue-700",
      data: payChannels,
      columns: [
        { key: "sno", header: "S.No" },
        { key: "name", header: "Service Name" },
        { key: "lcn", header: "LCN" },
        { key: "logo", header: "Logo", isImage: true },
        { key: "drp", header: "DRP" },
        { key: "category", header: "category" },
        { key: "language", header: "language" },
      ]
    },
    "BROADCASTER BOUQUETS": {
      title: "BROADCASTER BOUQUETS",
      subtitle: "Curated packages from broadcasters",
      icon: Package,
      color: "from-blue-500 to-blue-700",
      data: [],
      columns: []
    },
    "TCCL'S SUGGESTIVE BOUQUETS": {
      title: "TCCL'S SUGGESTIVE BOUQUETS",
      subtitle: "Our suggested channel combinations",
      icon: Grid3X3,
      color: "from-blue-500 to-blue-700",
      data: suggestiveBouquets || [],
      columns: []
    }
  };

  // EXACT same cards array as your first component
  const cards = [
    "FTA A-LA-CARTE",
    "PAY CHANNEL A-LA-CARTE",
    "BROADCASTER BOUQUETS",
    "TCCL'S SUGGESTIVE BOUQUETS"
  ];

  const handleCardClick = (cardName) => {
    setSelectedCard(selectedCard === cardName ? null : cardName);
  };

  // Calculate total items across all categories - EXACT same logic
  const totalItems = cards.reduce((sum, cardName) => {
    const cardData = content[cardName];
    if (cardData.section) {
      return sum + cardData.section.reduce((secSum, sec) => secSum + sec.data.length, 0);
    }
    return sum + (cardData.data?.length || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero Section - Updated to match first component */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">Premium Content Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Channel Packages & <span className="text-blue-500">Pricing</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Browse through {totalItems}+ channels and packages. Click on any card to view details.
            </p>
          </div>



          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cards.map((cardName) => {
              const isSelected = selectedCard === cardName;
              const cardData = content[cardName];
              const Icon = cardData.icon;
              const itemCount = cardData.section
                ? cardData.section.reduce((sum, sec) => sum + sec.data.length, 0)
                : (cardData.data?.length || 0);

              return (
                <Card
                  key={cardName}
                  cardName={cardName}
                  isSelected={isSelected}
                  onClick={() => handleCardClick(cardName)}
                  itemCount={itemCount}
                  Icon={Icon}
                  title={cardData.title}
                  subtitle={cardData.subtitle}
                  color={cardData.color}
                />
              );
            })}
          </div>

          {/* SELECTION STATUS - EXACT same as first component */}
          <div className="mb-6 text-center">
            {selectedCard ? (
              <div className="inline-flex items-center bg-gray-900 px-4 py-2 rounded-full shadow-sm border border-white/10">
                <span className="text-sm text-gray-300">
                  Viewing: <span className="font-bold text-blue-500">{selectedCard}</span>
                </span>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="ml-3 text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition text-white"
                >
                  Clear Selection
                </button>
              </div>
            ) : (
              <p className="text-gray-500 italic">
                No package selected. Click a card above to view details.
              </p>
            )}
          </div>

          {/* TABLE DISPLAY for PAY CHANNEL A-LA-CARTE - EXACT same logic as first component */}
          {selectedCard && content[selectedCard] && content[selectedCard].title !== "BROADCASTER BOUQUETS" &&
            content[selectedCard].title !== "FTA A-LA-CARTE" &&
            content[selectedCard].title !== "TCCL'S SUGGESTIVE BOUQUETS" && content[selectedCard].data && (
              <div className="bg-gray-900 rounded-xl shadow-lg border border-white/10 overflow-hidden mb-12">
                {/* Table Header */}
                <div className={`bg-gradient-to-r from-blue-500 to-blue-700 p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {content[selectedCard].title}
                      </h2>
                      <p className="text-white/80">
                        {content[selectedCard].subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-white bg-black/20 px-3 py-1 rounded-full text-sm">
                        {content[selectedCard].data.length} items
                      </span>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto max-h-[500px]">
                  <table className="w-full">
                    <thead className="bg-gray-800 top-0 z-10">
                      <tr>
                        {content[selectedCard].columns.map((col, i) => (
                          <th
                            key={i}
                            className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b border-white/10"
                          >
                            {col.header}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {content[selectedCard].data.map((row, i) => (
                        <tr
                          key={i}
                          className={`
                          hover:bg-white/5 transition-colors duration-150
                          ${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'}
                        `}
                        >
                          {content[selectedCard].columns.map((col, j) => (
                            <td
                              key={j}
                              className="px-6 py-4 text-sm border-b"
                            >
                              {col.isImage && row[col.key] ? (
                                <div className="flex justify-center">
                                  <img
                                    src={row[col.key]}
                                    className="h-8 w-auto max-w-[100px]"
                                    alt={row.serviceName || ''}
                                    onError={(e) => {
                                      e.target.style.display = "none";
                                      e.target.parentNode.innerHTML =
                                        '<span class="text-gray-400 italic text-xs">-</span>';
                                    }}
                                  />
                                </div>
                              ) : (
                                <div className={`
                                ${j === content[selectedCard].columns.length - 1 ? 'font-semibold' : ''}
                                ${(col.key === 'price' || col.key === 'drp') && row[col.key] ? 'text-green-600 font-bold' : ''}
                              `}>
                                  {row[col.key] || <span className="text-gray-400">-</span>}
                                </div>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Table Footer */}
                <div className="bg-gray-900 px-6 py-4 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  </div>
                </div>
              </div>
            )}

          {/* Section Tables for FTA A-LA-CARTE - EXACT same logic as first component */}
          {selectedCard && content[selectedCard].title === "FTA A-LA-CARTE" &&
            content[selectedCard].section.slice(0, 2).map((sec, index) => (
              <div key={index} className="mb-12">
                <div className="bg-gray-900 rounded-xl shadow-lg border border-white/10 overflow-hidden">

                  {/* Table Header */}
                  <div className={`bg-gradient-to-r from-blue-500 to-blue-700 p-6`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          {sec.title}
                        </h2>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-white bg-black/20 px-3 py-1 rounded-full text-sm">
                          {sec.data.length} items
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto max-h-[500px]">
                    <table className="w-full">
                      <thead className="bg-gray-800 top-0 z-10">
                        <tr>
                          {sec.columns.map((col, i) => (
                            <th
                              key={i}
                              className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider border-b border-white/10"
                            >
                              {col.header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {sec.data.map((row, i) => (
                          <tr
                            key={i}
                            className={`
                              hover:bg-white/5 transition-colors duration-150
                              ${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'}
                            `}
                          >
                            {sec.columns.map((col, j) => (
                              <td
                                key={j}
                                className="px-6 py-4 text-sm border-b"
                              >
                                {col.isImage && row[col.key] ? (
                                  <div className="flex justify-center">
                                    <img
                                      src={row[col.key]}
                                      className="h-8 w-auto max-w-[100px]"
                                      alt={row.serviceName || ''}
                                      onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.parentNode.innerHTML =
                                          '<span class="text-gray-400 italic text-xs">-</span>';
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div className={`
                                    ${j === sec.columns.length - 1 ? 'font-semibold' : ''}
                                    ${(col.key === 'price' || col.key === 'drp') && row[col.key] ? 'text-green-600 font-bold' : ''}
                                  `}>
                                    {row[col.key] || <span className="text-gray-400">-</span>}
                                  </div>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Footer */}
                  <div className="bg-gray-900 px-6 py-4 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    </div>
                  </div>

                </div>
              </div>
            ))
          }

          {/* Broadcaster Bouquets - EXACT same as first component */}
          {selectedCard && content[selectedCard].title === "BROADCASTER BOUQUETS" && (
            <div className="mb-12">
              <BroadcastersDashboard />
            </div>
          )}

          {/* TCCL'S SUGGESTIVE BOUQUETS - EXACT same as first component */}
          {selectedCard && content[selectedCard].title === "TCCL'S SUGGESTIVE BOUQUETS" && (
            <Link onClick={() => setSelectedCard(null)}>
              <div className="mb-12">
                <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                  <div className={`bg-gradient-to-r ${content[selectedCard].color} p-8`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {content[selectedCard].title}
                        </h2>
                        <p className="text-white/80">
                          {content[selectedCard].subtitle}
                        </p>
                      </div>

                    </div>
                  </div>
                  <div className="p-8 flex items-center justify-center">
                    <img
                      src="/assets/under.jpg"
                      alt="Under Construction"
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* INSTRUCTIONS (Only shows when no card is selected) - EXACT same as first component */}
          {!selectedCard && (
            <div className="mt-12 bg-gray-900 p-8 rounded-xl shadow-sm border border-white/10">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  How to Use This Page
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-500 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Click a Card</h4>
                    <p className="text-sm text-gray-400">
                      Select any of the 4 package types to view details
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 bg-blue-500/40 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">View Details</h4>
                    <p className="text-sm text-gray-400">
                      See complete list with pricing and channel information
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 bg-blue-500/60 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Toggle View</h4>
                    <p className="text-sm text-gray-400">
                      Click again or use close button to collapse the table
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <ContactSection />
    </div>
  );
};