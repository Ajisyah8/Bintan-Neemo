import React from "react";
import { GiFishCooked } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
    return (
        <div className="flex fixed right-6 bottom-6 z-50 flex-col space-y-4">
            <div className="relative group">
                <a
                    href="https://wa.me/6282283649331?text=Hi%2C%20I%27d%20like%20to%20book%20a%20trip%20to%20Bintan.%20Can%20you%20help%20me%3F"
                    target="_blank"
                    aria-label="Book Trip Bintan Neemo"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-14 h-14 text-2xl text-white bg-blue-600 rounded-full shadow-lg transition hover:bg-blue-700"
                >
                    <GiFishCooked />
                </a>
                <span className="absolute right-16 top-1/2 px-3 py-1 w-max text-sm text-center text-white bg-blue-600 rounded-md opacity-0 transition-all duration-300 scale-95 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-100">
                    Book
                    <br />a Trip
                </span>
            </div>

            <div className="relative group">
                <a
                    href="https://wa.me/6281364656341"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Bintan Neemo"
                    className="flex justify-center items-center w-14 h-14 text-2xl text-white bg-green-500 rounded-full shadow-lg transition hover:bg-green-600"
                >
                    <FaPhone />
                </a>
                <span className="absolute right-16 top-1/2 px-3 py-1 text-sm text-white bg-green-500 rounded-md opacity-0 transition-all duration-300 scale-95 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-100">
                    Call via WhatsApp
                </span>
            </div>
        </div>
    );
}
