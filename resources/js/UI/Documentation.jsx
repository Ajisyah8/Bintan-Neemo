import React, { useState } from "react";
import Beauty from "./Documentation/Beauty.webp";
import Nemo from "./Documentation/Nemo.webp";
import Snorkeling from "./Documentation/Snorkeling.webp";
import Sunset from "./Documentation/Sunset.webp";
import Jetski from "./Documentation/Jetski.webp";

const images = [Beauty, Nemo, Snorkeling, Sunset, Jetski];

export default function Documentation() {
    const [start, setStart] = useState(0);
    const [direction, setDirection] = useState("");
    const [transitioning, setTransitioning] = useState(false);

    const handlePrev = () => {
        if (transitioning) return;
        setDirection("left");
        setTransitioning(true);
        setTimeout(() => {
            setStart((prev) => (prev - 1 + images.length) % images.length);
            setTransitioning(false);
        }, 300);
    };

    const handleNext = () => {
        if (transitioning) return;
        setDirection("right");
        setTransitioning(true);
        setTimeout(() => {
            setStart((prev) => (prev + 1) % images.length);
            setTransitioning(false);
        }, 300);
    };

    const visibleImages = [
        images[start % images.length],
        images[(start + 1) % images.length],
        images[(start + 2) % images.length],
    ];

    return (
        <section
            id="gallery"
            className="bg-[#FDF6E3] font-[Montserrat] py-20 px-4"
        >
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-[#005B99] text-lg md:text-xl font-semibold mb-2">
                    We Capture Your Best Moments
                </h2>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2937] mb-8 leading-snug">
                    Every trip includes photo and video{" "}
                    <br className="hidden md:block" />
                    documentation, so you never miss a moment.
                </h1>
            </div>

            <div className="relative w-full max-w-screen-xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-8 gap-2 sm:gap-4">
                <button
                    onClick={handlePrev}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0096C7] text-white hover:opacity-80 transition flex items-center justify-center z-10"
                >
                    ‹
                </button>

                <div className="relative flex-1 h-[220px] sm:h-[260px] md:h-[280px] overflow-hidden flex items-center justify-center">
                    <div
                        className={`flex gap-4 sm:gap-8 absolute transition-transform duration-300 ${
                            direction === "left"
                                ? "-translate-x-12"
                                : direction === "right"
                                ? "translate-x-12"
                                : ""
                        }`}
                        onTransitionEnd={() => setDirection("")}
                    >
                        {visibleImages.map((src, index) => {
                            const isCenter = index === 1;
                            return (
                                <div
                                    key={`${start}-${index}`}
                                    className={`transition-all duration-500 transform rounded-xl sm:rounded-2xl overflow-hidden shadow-lg ${
                                        isCenter
                                            ? "w-64 sm:w-80 md:w-96 h-44 sm:h-56 md:h-64 scale-105 sm:scale-110 z-20"
                                            : "w-52 sm:w-72 md:w-80 h-40 sm:h-52 md:h-56 scale-100 z-10"
                                    }`}
                                >
                                    <img
                                        src={src}
                                        alt={`Captured ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0096C7] text-white hover:opacity-80 transition flex items-center justify-center z-10"
                >
                    ›
                </button>
            </div>

            <p className="text-center mt-6 text-sm text-[#0096C7] font-bold">
                Captured By Bintan Neemo – March 2025
            </p>
        </section>
    );
}
