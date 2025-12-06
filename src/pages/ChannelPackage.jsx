import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

// IMPORT YOUR DATA FILES
import { ftaTable, platformServices } from "./data/ftaTable";
import { payChannels } from "./data/payALaCarte";
import { suggestiveBouquets } from "./data/suggestiveBouquets";
import { header, section } from "framer-motion/client";
import BroadcastersDashboard from "../components/BroadCaster";
import ContactSection from "../components/ContactSection";
import { color } from "framer-motion";
import { Section } from "lucide-react";

// SIMPLE CARD COMPONENT
const Card = ({ children, className = "", isSelected, ...props }) => {
  return (
    <div
      className={`
        bg-white shadow-md border rounded-xl p-5 hover:shadow-lg 
        transition-all duration-300 cursor-pointer
        ${isSelected ? 'transform scale-95 border-2 border-blue-500' : 'hover:scale-105 border-gray-200'}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const ChannelTables = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Define content for each card - Now using imported data
  const content = {
  "FTA A-LA-CARTE": {
    title: "FTA A-LA-CARTE",
    description: "View all free-to-air channels available",

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
          { key: "language", header:"Language" },
          { key: "category", header:"Category" }
        ]
      },
      {
        title: "platformServices",
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
      description: "Individual pay channels with pricing",
      data: payChannels,
      color: "from-green-500 to-green-600",
      columns: [
        { key: "sno", header: "S.No" },
        { key: "name", header: "Service Name" },
        { key: "lcn", header: "LCN" },
        { key: "logo", header: "Logo", isImage: true },
        { key: "drp", header: "DRP" },
        { key: "category", header: "category" },
        { key: "hd" , header:"hd" },
        { key: "language" , header: "language" },
      ]
    },
    "BROADCASTER BOUQUETS": {
      title: "BROADCASTER BOUQUETS",
      
    },
    "TCCL'S SUGGESTIVE BOUQUETS": {
      title: "TCCL'S SUGGESTIVE BOUQUETS",
    }
  };

  const cards = [
    "FTA A-LA-CARTE",
    "PAY CHANNEL A-LA-CARTE", 
    "BROADCASTER BOUQUETS",
    "TCCL'S SUGGESTIVE BOUQUETS"
  ];

  // Function to handle card click
  const handleCardClick = (cardName) => {
    // Toggle selection - if already selected, deselect it
    setSelectedCard(selectedCard === cardName ? null : cardName);
  };

  // Calculate total items across all categories
  // const totalItems = Object.values(content).reduce((sum, category) => sum + category.data.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Channel Packages & Pricing
          </h1>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through {totalItems}+ channels and packages. Click on any card to view details.
          </p> */}
          
          {/* Quick Stats */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
              <span className="text-sm text-gray-600">Total Categories:</span>
              <span className="ml-2 font-bold text-blue-600">{cards.length}</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
              <span className="text-sm text-gray-600">Total Items:</span>
           </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
              <span className="text-sm text-gray-600">Last Updated:</span>
              <span className="ml-2 font-bold text-purple-600">
                {new Date().toLocaleDateString('en-IN', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>

        {/* 4 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((cardName) => {
            const isSelected = selectedCard === cardName;
            const cardData = content[cardName];
            
            return (
              <div key={cardName} className="flex flex-col">
                <Card
                  isSelected={isSelected}
                  onClick={() => handleCardClick(cardName)}
                  className="bg-white text-gray-800 hover:bg-gray-50">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon/Initial */}
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center mb-3
                      ${isSelected 
                        ? 'bg-white bg-opacity-20' 
                        : 'bg-gradient-to-r from-blue-100 to-blue-50'
                      }
                    `}>
                      <span className=
                        'text-xl font-bold text-blue-600'>
                        {cardName.charAt(0)}
                      </span>
                    </div>
                    
                    {/* Card Title */}
                    <h3 className="font-bold text-base mb-1 leading-tight">
                      {cardName}
                    </h3>
                    
                    {/* Item Count */}
                    <div className="mt-2">
                      <span className=
                        "text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                        {/* {cardData.data.length} items */}
                      </span>
                    </div>
                    
                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="mt-3">
                        <span className="text-xs">✓ Selected</span>
                      </div>
                    )}
                  </div>
                </Card>
                
                {/* Card Description (always visible) */}
                <div className="mt-2 px-1">
                  <p className="text-xs text-gray-600 text-center">
                    {cardData.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SELECTION STATUS */}
        <div className="mb-6 text-center">
          {selectedCard ? (
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm text-gray-700">
                Viewing: <span className="font-bold text-blue-600">{selectedCard}</span>
              </span>
              <button
                onClick={() => setSelectedCard(null)}
                className="ml-3 text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition"
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

        {/* TABLE DISPLAY (Only shows when card is selected) */}
        {selectedCard && content[selectedCard] && content[selectedCard].title != "BROADCASTER BOUQUETS" && content[selectedCard].title != "FTA A-LA-CARTE" &&
        content[selectedCard].title != "TCCL'S SUGGESTIVE BOUQUETS" && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className={`bg-gradient-to-r ${content[selectedCard].color} p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {content[selectedCard].title}
                  </h2>
                  <p className="text-white text-opacity-90 mt-1">
                    {content[selectedCard].description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-black bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {content[selectedCard].data.length} items
                  </span>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="text-blue text-opacity-80 hover:text-opacity-100 transition p-1 hover:bg-white hover:bg-opacity-10 rounded-full"
                    title="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>



            {/* Table */}
            <div className="overflow-x-auto max-h-[500px]">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    {content[selectedCard].columns.map((col, i) => (
                      <th 
                        key={i} 
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b"
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
                        hover:bg-gray-50 transition-colors duration-150
                        ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
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
            <div className="bg-gray-50 px-6 py-4 border-t">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    Showing: <span className="font-semibold">{content[selectedCard].data.length}</span> of {content[selectedCard].data.length} items
                  </span>
                  <span className="hidden sm:inline text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {selectedCard}
                  </span>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-xs text-gray-500">
                    Data imported from: {selectedCard.replace(/\s+/g, '').toLowerCase()}.js
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Updated: {new Date().toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        { selectedCard && content[selectedCard].title === "BROADCASTER BOUQUETS" && (
          <div>
            <BroadcastersDashboard />
          </div>
        )}

        {selectedCard &&
  content[selectedCard].title === "FTA A-LA-CARTE" &&
  content[selectedCard].section.slice(0, 2).map((sec, index) => (
    <div key={index}>
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">

        {/* Table Header */}
        <div className={`bg-gradient-to-r ${sec.color} p-6`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {sec.title}
              </h2>
              <p className="text-white text-opacity-90 mt-1">
                {sec.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-black bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {sec.data.length} items
              </span>
              <button
                onClick={() => setSelectedCard(null)}
                className="text-blue text-opacity-80 hover:text-opacity-100 transition p-1 hover:bg-white hover:bg-opacity-10 rounded-full"
                title="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto max-h-[500px]">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                {sec.columns.map((col, i) => (
                  <th 
                    key={i} 
                    className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b"
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
                    hover:bg-gray-50 transition-colors duration-150
                    ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
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
        <div className="bg-gray-50 px-6 py-4 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Showing: <span className="font-semibold">{sec.data.length}</span> of {sec.data.length} items
              </span>
              <span className="hidden sm:inline text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                Section {index + 1}
              </span>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs text-gray-500">
                Data imported from: {selectedCard.replace(/\s+/g, '').toLowerCase()}.js
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Updated: {new Date().toLocaleDateString('en-IN')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  ))
}


                { selectedCard && content[selectedCard].title === "TCCL'S SUGGESTIVE BOUQUETS" && (
          <div>
            {/* <h1 className="flex items-center text-7xl font-bold justify-center px-2">Under Construction</h1> */}
          <img src="/assets/under.jpg" />
          
          </div>
        )}

        {/* INSTRUCTIONS (Only shows when no card is selected) */}
        {!selectedCard && (
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                How to Use This Page
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Click a Card</h4>
                  <p className="text-sm text-gray-600">
                    Select any of the 4 package types to view details
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">View Details</h4>
                  <p className="text-sm text-gray-600">
                    See complete list with pricing and channel information
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Toggle View</h4>
                  <p className="text-sm text-gray-600">
                    Click again or use close button to collapse the table
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

<ContactSection/>

    </div>
  );
};

