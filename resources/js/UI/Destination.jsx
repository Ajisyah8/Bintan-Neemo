import React from "react";
import Lagoi from "./Destinations/Lagoi.webp";
import Treasure from "./Destinations/TreasureBay.webp";
import Busung from "./Destinations/PasirPutih.webp";
import Trikora from "./Destinations/Trikora.webp";
import Crystal from "./Destinations/CrystalLagoon.webp";
import Avalokitesvara from "./Destinations/ViharaAvalokitesvara.webp";
import LagoiSafari from "./Destinations/SafariLagoi.webp";
import BlueLake from "./Destinations/danaubiru.webp";
import Desa from "./Destinations/Desa.webp";
import Penyengat from "./Destinations/Penyengat.webp";
import Mangrove from "./Destinations/Mangrove.webp";
import BanyanTree from "./Destinations/BanyanTree.webp";

const wisataBintan = [
  {
    title: "Lagoi Bay",
    img: Lagoi,
    description: "A beautiful white sand beach perfect for relaxing and sunsets.",
    waText: "Hi! I want to book a trip to Lagoi Bay in Bintan. Can you help me?"
  },
  {
    title: "Treasure Bay",
    img: Treasure,
    description: "Home to Southeast Asia's largest saltwater lagoon.",
    waText: "Hello, I'm interested in visiting Treasure Bay Bintan. Please provide details!"
  },
  {
    title: "Busung Sand Dunes",
    img: Busung,
    description: "Golden sand hills resembling a desert, great for photos.",
    waText: "Hi, I want to explore Busung Sand Dunes in Bintan. Could you assist?"
  },
  {
    title: "Trikora Beach",
    img: Trikora,
    description: "A scenic beach with turquoise waters and coral reefs.",
    waText: "Hi, I'd love to plan a visit to Trikora Beach. Please send more info."
  },
  {
    title: "Crystal Lagoon",
    img: Crystal,
    description: "A massive man-made lagoon for swimming and water sports.",
    waText: "Hi, I'm planning to swim at Crystal Lagoon Bintan. Could you help me book it?"
  },
  {
    title: "Avalokitesvara Temple",
    img: Avalokitesvara,
    description: "One of Southeast Asia's largest Buddhist temples.",
    waText: "Hi, I want to book a trip to Avalokitesvara Temple. Can I get more info?"
  },
  {
    title: "Lagoi Safari",
    img: LagoiSafari,
    description: "A family-friendly zoo with exotic animals and fun activities.",
    waText: "Hello! I'm interested in a visit to Lagoi Safari. Could you share more?"
  },
  {
    title: "Blue Lake",
    img: BlueLake,
    description: "A striking blue lake surrounded by white sand hills.",
    waText: "Hi! I want to book a trip to Blue Lake Bintan. Please assist!"
  },
  {
    title: "Senggarang Village",
    img: Desa,
    description: "Offering a glimpse into Bintan’s multicultural heritage.",
    waText: "Hello, I'd like to visit Senggarang Village. Can you arrange a trip for me?"
  },
  {
    title: "Penyengat Island",
    img: Penyengat,
    description: "An island rich in history and home to the Sultan's Mosque.",
    waText: "Hi! Please help me book a visit to Penyengat Island. I'm interested in the culture."
  },
  {
    title: "Mangrove Tour",
    img: Mangrove,
    description: "Explore lush mangrove forests by boat with local guides.",
    waText: "Hi, I'd love to take the Mangrove Tour. Please let me know the details."
  },
  {
    title: "Banyan Tree Temple",
    img: BanyanTree,
    description: "A mystical temple surrounded by giant banyan trees.",
    waText: "Hi, I'd like to visit Banyan Tree Temple. Can I get help with booking?"
  },
];

export default function Destination() {
  return (
    <div className="min-h-screen bg-[#FDF6E3] font-montserrat py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-[#005B99] text-lg text-center font-semibold mb-2">
          Explore Bintan Island
        </h1>
        <p className="text-center text-3xl md:text-4xl font-bold text-[#1F2937] mb-12 max-w-xl mx-auto">
          Discover Bintan’s charm — from serene beaches to scenic landmarks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wisataBintan.map((wisata, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img
                src={wisata.img}
                alt={wisata.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {wisata.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {wisata.description}
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=6282283649331&text=${encodeURIComponent(wisata.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#0096C7] text-white text-sm rounded-md hover:bg-blue-700 transition"
                >
                  Booking Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}