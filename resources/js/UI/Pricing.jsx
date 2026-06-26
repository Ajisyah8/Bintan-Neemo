import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const packages = [
    {
        title: "Stay Packages (2 Days 1 Night)",
        pricing: [
            { label: "Adult", value: "SGD $100" },
            { label: "Kid", note: "4-10 years old", value: "SGD $75" },
        ],
        whatsappMessage:
            "Hello, I want to go to Bintan Neemo with the 2 Days 1 Night package (SGD $100). Could you please provide more information?",
        features: [
            "Transfer Boat 2 ways",
            "Welcome Drink",
            "Breakfast",
            "Dinner Seafood Menu (Crab, Prawn, Squid, Fish, Clam, Veggies & Rice)",
            "Unlimited Activity Snorkeling, Kayaking & Fun Fishing",
            "Underwater Documentation (GoPro 13 Black / GoPro 11 / DJI Action Camera)",
            "Unlimited Coffee & Tea",
            "Special Night Snorkeling Experience",
            "Karaoke Night Fun",
        ],
        cardStyle: "bg-white text-[#1F2937] border border-gray-200",
        buttonStyle: "bg-[#0096C7] text-white hover:bg-[#0077A8]",
        iconColor: "text-[#0096C7]",
    },
    {
        title: "Daytrip + Simple Lunch",
        pricing: [
            { label: "Adult", value: "SGD $45" },
            { label: "Kid", note: "4-10 years old", value: "SGD $35" },
        ],
        whatsappMessage:
            "Hello, I want to go to Bintan Neemo with the Daytrip + Simple Lunch package (Adult SGD $45 / Kid SGD $35). Could you please provide more information?",
        features: [
            "Transfer Boat 2 ways",
            "Welcome Drink",
            "Simple Lunch",
            "Unlimited Activity Snorkeling, Kayaking & Fun Fishing",
            "Free Documentation Underwater (GoPro 13 Black / GoPro 11 / DJI Action Camera)",
            "Unlimited Coffee & Tea",
        ],
        optionGroupTitle: "Menu Choose 1:",
        lunchOptions: ["Fried Rice", "Fried Noodle", "Instant Cup Noodle"],
        cardStyle: "bg-[#0096C7] text-white border-2 border-white",
        buttonStyle: "bg-white text-[#0096C7] hover:bg-gray-100",
        iconColor: "text-white",
    },
    {
        title: "Day Trip + Lunch Seafood",
        pricing: [
            { label: "Adult", value: "SGD $65" },
            { label: "Kid", note: "4-10 years old", value: "SGD $55" },
        ],
        whatsappMessage:
            "Hello, I want to go to Bintan Neemo with the Day Trip + Lunch Seafood package (Adult SGD $65 / Kid SGD $55). Could you please provide more information?",
        features: [
            "Transfer Boat 2 ways",
            "Welcome Drink",
            "Seafood Lunch",
            "Unlimited Activity Snorkeling, Kayaking & Fun Fishing",
            "Free Documentation Underwater (GoPro 13 Black / GoPro 11 / DJI Action Camera)",
            "Unlimited Coffee & Tea",
        ],
        optionGroupTitle: "Menu Seafood:",
        menuOptions: [
            "Crab",
            "Prawn",
            "Squid",
            "Clam (Remis, Kerang / Gonggong)",
            "Fish",
            "Vegetables",
            "Rice",
        ],
        cardStyle: "bg-white text-[#1F2937] border border-gray-200",
        buttonStyle: "bg-[#0096C7] text-white hover:bg-[#0077A8]",
        iconColor: "text-[#0096C7]",
    },
];

export default function Pricing() {
    const [selectedLunches, setSelectedLunches] = useState({
        "Daytrip + Simple Lunch": "Fried Rice",
    });

    const getWhatsappMessage = (pkg) => {
        if (pkg.title === "Daytrip + Simple Lunch") {
            const selectedLunch = selectedLunches[pkg.title];

            return `Hello, I want to go to Bintan Neemo with the Daytrip + Simple Lunch package (Adult SGD $45 / Kid SGD $35). My Simple Lunch choice is ${selectedLunch}. Could you please provide more information?`;
        }

        return pkg.whatsappMessage;
    };

    return (
        <section
            id="pricing"
            className="bg-[#FDF6E3] px-4 py-20 font-[Montserrat]"
        >
            <div className="max-w-5xl mx-auto mb-12 text-center">
                <h2 className="text-lg font-semibold text-[#005A8D]">
                    Our Main Activities
                </h2>
                <h1 className="mt-2 text-4xl font-bold leading-tight text-[#1F2937] md:text-5xl">
                    Discover Our Bintan <br /> Tourism Experiences
                </h1>
            </div>

            <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
                {packages.map((pkg, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col justify-between rounded-2xl p-8 shadow-xl transition hover:scale-[1.02] ${pkg.cardStyle}`}
                    >
                        <div>
                            <h2 className="mb-1 text-lg font-semibold md:text-lg">
                                {pkg.title}
                            </h2>
                            <div className="mb-6 space-y-2">
                                {pkg.pricing.map((price, priceIndex) => (
                                    <div
                                        key={priceIndex}
                                        className="flex items-start justify-between gap-4 pb-2 border-b border-current/15 last:border-b-0 last:pb-0"
                                    >
                                        <div
                                            className={`min-w-0 leading-none ${
                                                price.note ? "" : "pt-3"
                                            }`}
                                        >
                                            <span className="block text-sm font-semibold uppercase tracking-[0.2em] opacity-75">
                                                {price.label}
                                            </span>
                                            {price.note ? (
                                                <span className="block pt-0.5 text-xs opacity-70">
                                                    {price.note}
                                                </span>
                                            ) : null}
                                        </div>
                                        <span className="pt-0.5 text-xl font-extrabold leading-none whitespace-nowrap md:text-2xl">
                                            {price.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <ul className="space-y-3 text-sm">
                                {pkg.features.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2"
                                    >
                                        <CheckCircle
                                            size={18}
                                            className={`${pkg.iconColor} mt-0.5 shrink-0`}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {pkg.lunchOptions ? (
                                <div className="mt-5">
                                    <p className="text-sm font-semibold opacity-90">
                                        {pkg.optionGroupTitle}
                                    </p>
                                    <div className="mt-2 space-y-2">
                                        {pkg.lunchOptions.map((option) => (
                                            <label
                                                key={option}
                                                className="flex items-center gap-3 text-sm cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name={`${pkg.title}-lunch`}
                                                    value={option}
                                                    checked={
                                                        selectedLunches[
                                                            pkg.title
                                                        ] === option
                                                    }
                                                    onChange={() =>
                                                        setSelectedLunches(
                                                            (current) => ({
                                                                ...current,
                                                                [pkg.title]:
                                                                    option,
                                                            }),
                                                        )
                                                    }
                                                    className="w-4 h-4 accent-white"
                                                />
                                                <span>{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                            {pkg.menuOptions ? (
                                <div className="mt-5">
                                    <p className="text-sm font-semibold opacity-90">
                                        {pkg.optionGroupTitle}
                                    </p>
                                    <ul className="mt-2 space-y-1 text-sm">
                                        {pkg.menuOptions.map((option) => (
                                            <li
                                                key={option}
                                                className="flex items-start gap-2"
                                            >
                                                <span
                                                    className={`mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full ${
                                                        pkg.title ===
                                                        "Day Trip + Lunch Seafood"
                                                            ? "bg-[#0096C7]"
                                                            : "bg-current"
                                                    }`}
                                                />
                                                <span>{option}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}

                        </div>

                        <button
                            className={`mt-8 rounded-full px-6 py-3 text-sm font-semibold transition ${pkg.buttonStyle}`}
                            onClick={() => {
                                const whatsappUrl =
                                    "https://wa.me/6282283649331?text=" +
                                    encodeURIComponent(
                                        getWhatsappMessage(pkg),
                                    );
                                window.open(whatsappUrl, "_blank");
                            }}
                        >
                            {"Choose Package ->"}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
