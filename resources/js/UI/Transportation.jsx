import { FaCar, FaWhatsapp } from "react-icons/fa";
import { MdDirectionsBoat, MdLocationOn } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import Transport1 from "./images/transport-1.png";
import Majortly from "./images/Majorly.png";
import Residence from "./images/Residence.png";

export default function Transportation() {
    const items = [
        {
            title: "Trikora Area",
            price: "Free Transportation",
            priceStyle: "text-green-600",
            badge: "Free",
            icon: <FaCar className="h-6 w-6 text-green-500" />,
            detail: "Trikora Beach Area <-> Jetty Bintan Nemo",
            note: "One of a Kind Hotel, Kawaland Glamping, Ten Rooms, Bintan Spa Villa, Bintan Agro, River Kawal, Marjoly, Halo Bintan",
            capacity: 5,
            image: Majortly,
        },
        {
            title: "Resident Area",
            price: "SGD $35",
            priceStyle: "text-[#1a3a54]",
            icon: <FaCar className="h-6 w-6 text-yellow-500" />,
            detail: "The Residence Bintan <-> Jetty Bintan Nemo",
            note: "The Residence Bintan and Lola Resort",
            capacity: 4,
            image: Residence,
        },
        {
            title: "Ferry Terminal / BBT",
            price: "SGD $45",
            priceStyle: "text-[#1a3a54]",
            icon: <MdDirectionsBoat className="h-6 w-6 text-blue-500" />,
            detail: "Ferry Terminal (Bandar Bintan Telani / Sri Bintan Pura) <-> Jetty Bintan Nemo",
            note: "Lagoi Area and Bintan Resorts",
            capacity: 4,
            image: Transport1,
        },
    ];

    return (
        <section
            id="transportation"
            className="bg-[#FDF6E3] px-6 py-20 font-montserrat"
        >
            <div className="mx-auto max-w-6xl space-y-16">
                <div className="mx-auto max-w-2xl space-y-4 text-center">
                    <h2 className="mb-2 text-lg font-semibold text-[#005B99]">
                        Convenient Transport Options
                    </h2>
                    <p className="mb-12 text-3xl font-bold text-[#1F2937] md:text-4xl">
                        Easy, affordable round-trip rides to Bintan Nemo Jetty
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {items.map((i, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col overflow-hidden rounded-xl bg-white shadow-xl"
                        >
                            <div className="relative">
                                <img
                                    src={i.image}
                                    alt={i.detail}
                                    className="h-40 w-full object-cover"
                                />
                                <div className="absolute left-3 top-3 rounded-full bg-white p-2 text-xl shadow">
                                    {i.icon}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-3 p-6">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                                            {i.title}
                                        </p>
                                        <h3
                                            className={`text-xl font-bold ${i.priceStyle}`}
                                        >
                                            {i.price}
                                        </h3>
                                    </div>
                                    {i.badge ? (
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                                            {i.badge}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                                    <PiUsersThreeBold className="inline h-4 w-4" />
                                    {i.capacity} pax
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    {i.detail}
                                </p>
                                <p className="flex items-start gap-2 text-sm text-gray-600">
                                    <MdLocationOn className="h-4 w-4 shrink-0 text-red-500" />
                                    <span>{i.note}</span>
                                </p>
                            </div>
                            <div className="p-4">
                                <a
                                    href="https://wa.me/6282283649331?text=Hi%2C%20I'm%20interested%20in%20your%20transport%20service%20to%20Bintan%20Nemo%20Jetty"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow transition-transform duration-200 hover:scale-105 hover:bg-green-600"
                                >
                                    <FaWhatsapp className="h-5 w-5" />
                                    Book via WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
