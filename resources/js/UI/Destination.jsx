import React from "react";
import Busung from "./Destinations/PasirPutih.webp";
import BlueLake from "./Destinations/danaubiru.webp";
import Mangrove from "./Destinations/Mangrove.webp";

const wisataBintan = [
    {
        title: "Mangrove",
        img: Mangrove,
        description: "Explore lush mangrove forests by boat with local guides.",
        waText: "Hi, I'd love to take the Mangrove Tour. Please let me know the details.",
    },
    {
        title: "Blue Lake",
        img: BlueLake,
        description: "A striking blue lake surrounded by white sand hills.",
        waText: "Hi! I want to book a trip to Blue Lake Bintan. Please assist!",
    },
    {
        title: "Busung",
        img: Busung,
        description: "Golden sand hills resembling a desert, great for photos.",
        waText: "Hi, I want to explore Busung Sand Dunes in Bintan. Could you assist?",
    },
];

export default function Destination() {
    return (
        <div
            id="destination"
            className="min-h-screen bg-[#FDF6E3] py-12 font-montserrat"
        >
            <div className="mx-auto max-w-7xl px-4">
                <h1 className="mb-2 text-center text-lg font-semibold text-[#005B99]">
                    Explore Bintan Island
                </h1>
                <p className="mx-auto mb-12 max-w-xl text-center text-3xl font-bold text-[#1F2937] md:text-4xl">
                    Discover Bintan's charm through our currently available destinations.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {wisataBintan.map((wisata, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={wisata.img}
                                alt={wisata.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h2 className="mb-2 text-lg font-bold text-gray-800">
                                    {wisata.title}
                                </h2>
                                <p className="mb-4 text-sm text-gray-600">
                                    {wisata.description}
                                </p>
                                <a
                                    href={`https://api.whatsapp.com/send?phone=6282283649331&text=${encodeURIComponent(wisata.waText)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded-md bg-[#0096C7] px-4 py-2 text-sm text-white transition hover:bg-blue-700"
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
