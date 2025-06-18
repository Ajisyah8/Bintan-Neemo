import React from "react";
import { CheckCircle } from "lucide-react";

const packages = [
    {
        title: "2 Days 1 Night",
        price: "$100",
        unit: "/ Person",
        features: [
            "Boat (Two ways)",
            "Seafood Dinner (Crabs, Prawns, Cuttlefish, Scallops, Clams, Fish, Vegetables)",
            "Breakfast (Fried Noodles, and Fried Rice)",
            "Unlimited Snorkeling, Kayaking, Funfishing",
            "Camera Gopro 7 Black",
            "Underwater Documentation",
            "Unlimited Mineral Water, Coffee and Tea",
        ],
        cardStyle: "bg-white text-[#1F2937] border border-gray-200",
        buttonStyle: "bg-[#0096C7] text-white hover:bg-[#0077A8]",
        iconColor: "text-[#0096C7]",
    },
    {
        title: "Day Trip",
        price: "$45",
        unit: "/ Person",
        features: [
            "Boat (Two ways)",
            "Unlimited Snorkeling, Kayaking, Funfishing",
            "Camera Gopro 7 Black",
            "Underwater Documentation",
            "Welcome Drink",
        ],
        cardStyle: "bg-[#0096C7] text-white border-2 border-white",
        buttonStyle: "bg-white text-[#0096C7] hover:bg-gray-100",
        iconColor: "text-white",
    },
    {
        title: "Day Trip + Lunch",
        price: "$65",
        unit: "/ Person",
        features: [
            "Boat (Two ways)",
            "Unlimited Snorkeling, Kayaking, Funfishing",
            "Camera Gopro 7 Black",
            "Underwater Documentation",
            "Welcome Drink",
            "Seafood Lunch (Crab, Squid, Prawn, Vegetables, Fish, Clams, Rangga, Rice)",
        ],
        cardStyle: "bg-white text-[#1F2937] border border-gray-200",
        buttonStyle: "bg-[#0096C7] text-white hover:bg-[#0077A8]",
        iconColor: "text-[#0096C7]",
    },
];

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="bg-[#FDF6E3] font-[Montserrat] py-20 px-4"
        >
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-[#005A8D] text-lg font-semibold">
                    Our Main Activities
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mt-2 leading-tight">
                    Discover Our Bintan <br /> Tourism Experiences
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.map((pkg, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl shadow-xl p-8 flex flex-col justify-between transition transform hover:scale-[1.02] ${pkg.cardStyle}`}
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-1">
                                {pkg.title}
                            </h2>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold">
                                    {pkg.price}
                                </span>
                                <span className="ml-1 text-sm opacity-70">
                                    {pkg.unit}
                                </span>
                            </div>

                            <ul className="space-y-3 text-sm">
                                {pkg.features.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2"
                                    >
                                        <CheckCircle
                                            size={18}
                                            className={`${pkg.iconColor} shrink-0 mt-0.5`}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className={`mt-8 px-6 py-3 rounded-full font-semibold text-sm transition ${pkg.buttonStyle}`}
                            onClick={() => {
                                window.open(
                                    "https://wa.me/6282283649331?text=Hi%20Bintan%20Neemo!%20I%27m%20interested%20in%20the%20holiday%20package%20you%20offer.%20Could%20you%20please%20provide%20more%20information?",
                                    "_blank"
                                );
                            }}
                        >
                            Choose Package →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
