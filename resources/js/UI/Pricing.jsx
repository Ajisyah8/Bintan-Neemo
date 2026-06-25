import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const packages = [
    {
        title: "2 Days 1 Night",
        pricing: [{ label: "Adult", value: "SGD $100" }],
        whatsappMessage:
            "Hello, I want to go to Bintan Neemo with the 2 Days 1 Night package (SGD $100). Could you please provide more information?",
        features: [
            "Boat (Two ways)",
            "Seafood Dinner (Crabs, Prawns, Cuttlefish, Scallops, Clams, Fish, Vegetables)",
            "Breakfast (Fried Noodles, and Fried Rice)",
            "Unlimited Snorkeling, Kayaking, Funfishing",
            "Night Snorkeling Experience",
            "Underwater Photo & Video Documentation (GoPro 13 Black / GoPro 11 / DJI Action Camera)",
            "Unlimited Mineral Water, Coffee & Tea",
        ],
        cardStyle: "bg-white text-[#1F2937] border border-gray-200",
        buttonStyle: "bg-[#0096C7] text-white hover:bg-[#0077A8]",
        iconColor: "text-[#0096C7]",
    },
    {
        title: "Day Trip",
        pricing: [
            { label: "Adult", value: "SGD $45" },
            { label: "Kid", note: "4-10 years", value: "SGD $35" },
        ],
        features: [
            "Boat (Two ways)",
            "Unlimited Snorkeling, Kayaking, Funfishing",
            "Simple Lunch included",
            "Underwater Photo & Video Documentation (GoPro 13 Black / GoPro 11 / DJI Action Camera)",
            "Welcome Drink",
            "Unlimited Mineral Water, Coffee & Tea",
        ],
        lunchOptions: [
            "Fried Rice",
            "Fried Noodle",
            "Instant Noodle Cup",
        ],
        cardStyle: "bg-[#0096C7] text-white border-2 border-white",
        buttonStyle: "bg-white text-[#0096C7] hover:bg-gray-100",
        iconColor: "text-white",
    },
    {
        title: "Day Trip + Lunch",
        pricing: [
            { label: "Adult", value: "SGD $65" },
            { label: "Kid", note: "4-10 years", value: "SGD $55" },
        ],
        whatsappMessage:
            "Hello, I want to go to Bintan Neemo with the Day Trip + Lunch package (Adult SGD $65 / Kid SGD $55). Could you please provide more information?",
        features: [
            "Boat (Two ways)",
            "Unlimited Snorkeling, Kayaking, Funfishing",
            "Underwater Photo & Video Documentation (GoPro 13 Black / GoPro 11 / DJI Action Camera)",
            "Welcome Drink",
            "Seafood Lunch (Crab, Squid, Prawn, Vegetables, Fish, Clams, Rice)",
            "Unlimited Mineral Water, Coffee & Tea",
        ],
        cardStyle: "bg-white text-[#1F2937] border border-gray-200",
        buttonStyle: "bg-[#0096C7] text-white hover:bg-[#0077A8]",
        iconColor: "text-[#0096C7]",
    },
];

export default function Pricing() {
    const [selectedLunches, setSelectedLunches] = useState({
        "Day Trip": "Fried Rice",
    });

    const getWhatsappMessage = (pkg) => {
        if (pkg.title === "Day Trip") {
            const selectedLunch = selectedLunches[pkg.title];

            return `Hello, I want to go to Bintan Neemo with the Day Trip package (Adult SGD $45 / Kid SGD $35). My Simple Lunch choice is ${selectedLunch}. Could you please provide more information?`;
        }

        return pkg.whatsappMessage;
    };

    return (
        <section
            id="pricing"
            className="bg-[#FDF6E3] px-4 py-20 font-[Montserrat]"
        >
            <div className="mx-auto mb-12 max-w-5xl text-center">
                <h2 className="text-lg font-semibold text-[#005A8D]">
                    Our Main Activities
                </h2>
                <h1 className="mt-2 text-4xl font-bold leading-tight text-[#1F2937] md:text-5xl">
                    Discover Our Bintan <br /> Tourism Experiences
                </h1>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                {packages.map((pkg, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col justify-between rounded-2xl p-8 shadow-xl transition hover:scale-[1.02] ${pkg.cardStyle}`}
                    >
                        <div>
                            <h2 className="mb-1 text-2xl font-bold">
                                {pkg.title}
                            </h2>
                            <div className="mb-6 space-y-2">
                                {pkg.pricing.map((price, priceIndex) => (
                                    <div
                                        key={priceIndex}
                                        className="flex items-baseline justify-between gap-4 border-b border-current/15 pb-2 last:border-b-0 last:pb-0"
                                    >
                                        <div className="min-w-0">
                                            <span className="block text-sm font-semibold uppercase tracking-[0.2em] opacity-75">
                                                {price.label}
                                            </span>
                                            {price.note ? (
                                                <span className="block text-xs opacity-70">
                                                    {price.note}
                                                </span>
                                            ) : null}
                                        </div>
                                        <span className="whitespace-nowrap text-3xl font-extrabold">
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
                                        Simple Lunch - Choose 1:
                                    </p>
                                    <div className="mt-2 space-y-2">
                                        {pkg.lunchOptions.map((option) => (
                                            <label
                                                key={option}
                                                className="flex cursor-pointer items-center gap-3 text-sm"
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
                                                    className="h-4 w-4 accent-white"
                                                />
                                                <span>{option}</span>
                                            </label>
                                        ))}
                                    </div>
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
