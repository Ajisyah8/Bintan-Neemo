import React from "react";
import { GiFishCooked } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
            <div className="relative group">
                <a
                    href="https://wa.me/6282283649331?text=Hi%2C%20I%27d%20like%20to%20book%20a%20trip%20to%20Bintan.%20Can%20you%20help%20me%3F"
                    target="_blank"
                    aria-label="Book Trip Bintan Neemo"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition text-2xl"
                >
                    <GiFishCooked />
                </a>
                <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 text-center w-max">
                    Book
                    <br />a Trip
                </span>
            </div>

            <div className="relative group">
                <a
                    href="https://wa.me/6285356282470"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Bintan Neemo"
                    className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition text-2xl"
                >
                    <FaPhone />
                </a>
                <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-green-500 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300">
                    Call via WhatsApp
                </span>
            </div>
        </div>
    );
}
