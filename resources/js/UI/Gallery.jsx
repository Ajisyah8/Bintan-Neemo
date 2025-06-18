import React, { useState } from "react";
import LifeatKelong from "./Gallery/lifeatkelong.webp";
import LifeatKelong2 from "./Gallery/lifeatkelong2.webp";
import Islandtour from "./Gallery/islandtour.webp";
import Islandtour2 from "./Gallery/islandtour2.webp";
import Snorkeling from "./Gallery/Snorkeling.webp";
import Islandtour3 from "./Gallery/islandtour3.webp";
import Snorkeling2 from "./Gallery/Snorkeling2.webp";
import LifeatKelong3 from "./Gallery/lifeatkelong3.webp";
import Snorkeling3 from "./Gallery/snorkeling3.webp";
import Snorkeling4 from "./Gallery/snorkeling4.webp";
import Snorkeling5 from "./Gallery/snorkeling5.webp";
import Snorkeling6 from "./Gallery/snorkeling6.webp";
import Snorkeling7 from "./Gallery/snorkeling7.webp";
import Snorkeling8 from "./Gallery/snorkeling8.webp";
import Islandtour4 from "./Gallery/islandtour4.webp";
import LifeatKelong4 from "./Gallery/lifeatkelong4.webp";
import Lifeatkelong5 from "./Gallery/lifeatkelong5.webp";
import Lifeatkelong6 from "./Gallery/lifeatkelong6.webp";
import Lifeatkelong7 from "./Gallery/lifeatkelong7.webp";
import Lifeatkelong8 from "./Gallery/lifeatkelong8.webp";
import Islandtour5 from "./Gallery/islandtour5.webp";
import Islandtour6 from "./Gallery/islandtour6.webp";
import Islandtour7 from "./Gallery/islandtour7.webp";
import Islandtour8 from "./Gallery/islandtour8.webp";

const imageData = [
    { src: LifeatKelong, category: "Life at Kelong" },
    { src: LifeatKelong2, category: "Life at Kelong" },
    { src: Snorkeling3, category: "Underwater" },
    { src: Islandtour, category: "Island Tour" },
    { src: Snorkeling4, category: "Underwater" },
    { src: Islandtour2, category: "Island Tour" },
    { src: Snorkeling, category: "Underwater" },
    { src: Islandtour3, category: "Island Tour" },
    { src: Snorkeling5, category: "Underwater" },
    { src: Snorkeling6, category: "Underwater" },
    { src: Lifeatkelong5, category: "Life at Kelong" },
    { src: Lifeatkelong6, category: "Life at Kelong" },
    { src: Snorkeling2, category: "Underwater" },
    { src: Snorkeling7, category: "Underwater" },
    { src: Snorkeling8, category: "Underwater" },
    { src: Islandtour5, category: "Island Tour" },
    { src: Islandtour6, category: "Island Tour" },
    { src: Islandtour7, category: "Island Tour" },
    { src: Islandtour8, category: "Island Tour" },
    { src: Lifeatkelong7, category: "Life at Kelong" },
    { src: Lifeatkelong8, category: "Life at Kelong" },
    { src: LifeatKelong3, category: "Life at Kelong" },
    { src: Islandtour4, category: "Island Tour" },
    { src: LifeatKelong4, category: "Life at Kelong" },
];

const categories = ["All", "Underwater", "Island Tour", "Life at Kelong"];

export default function Gallery() {
    const [selected, setSelected] = useState("All");
    const [visibleCount, setVisibleCount] = useState(8);

    const filtered =
        selected === "All"
            ? imageData
            : imageData.filter((img) => img.category === selected);

    const visibleImages = filtered.slice(0, visibleCount);
    const hasMore = filtered.length > visibleCount;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    return (
        <section className="bg-[#FDF6E3] font-[Montserrat] py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-[#005B99] text-xl font-semibold mb-2">
                    Experience Highlights
                </h2>

                <h1 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
                    Ocean Moments <br className="md:hidden" /> Captured
                </h1>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelected(cat);
                                setVisibleCount(8); // Reset visible count when changing category
                            }}
                            className={`px-4 py-1.5 rounded-md text-white font-medium transition ${
                                selected === cat
                                    ? "bg-[#0096C7]"
                                    : "bg-[#0096C7]/70 hover:bg-[#0096C7]"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
                    {visibleImages.map((img, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden shadow-md"
                        >
                            <img
                                src={img.src}
                                alt={`Moment ${index}`}
                                className="w-full h-48 md:h-56 object-cover"
                            />
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-[#0096C7] text-white px-6 py-2 rounded-full font-bold hover:bg-[#0096C7]/90 transition-colors duration-200"
                        >
                            More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
