import React from "react";
import NeemoKel from "./images/NeemoKel.webp";
import Rompi from "./images/Rompi.webp";

export default function About() {
    return (
        <section
            id="about"
            className="bg-[#FDF6E3] min-h-screen py-20 px-4 font-montserrat"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center my-20">
                <div className="w-full md:w-auto aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                    <img
                        src={NeemoKel}
                        alt="Bintan Neemo Sign"
                        className="w-full h-full object-cover object-[70%_center]"
                    />
                </div>

                <div className="w-full md:w-80 aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                    <img
                        src={Rompi}
                        alt="Life Vests"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="md:-ml-10 px-2 md:px-0">
                    <h2 className="text-[#005B99] text-lg md:text-xl font-semibold mb-2">
                        Who We Are
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Get to <br className="hidden md:block" /> Know Us
                    </h1>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Bintan Neemo is a floating sea house (kelong) offering
                        unique ocean experiences. From snorkeling with Nemo in
                        our natural anemone field to relaxing on calm waters, we
                        bring you the best of Bintan’s sea adventure. Just 45
                        minutes from Singapore via Lagoi Port, you’ll reach a
                        quiet escape filled with blue waters, coral reefs, and
                        fresh seafood.
                    </p>
                </div>
            </div>
        </section>
    );
}
