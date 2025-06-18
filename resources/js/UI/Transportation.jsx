import { FaCar, FaWhatsapp } from "react-icons/fa";
import { MdDirectionsBoat, MdLocationOn } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import Transport1 from "./images/transport-1.png";
import Majortly from "./images/Majorly.png";
import Residence from "./images/Residence.png";
export default function Transportation() {
    const items = [
        {
            price: "SGD $60",
            icon: <MdDirectionsBoat className="text-blue-500 w-6 h-6" />,
            detail: "Ferry Terminal (Bandar Bintan Telani / Sri Bintan Pura) ↔ Jetty Bintan Nemo",
            note: "Lagoi Area and Bintan Resorts",
            capacity: 4,
            image: Transport1,
        },
        {
            price: "SGD $10",
            icon: <FaCar className="text-green-500 w-6 h-6" />,
            detail: "Trikora Beach Area ↔ Jetty Bintan Nemo",
            note: "One of a Kind Hotel, Ten Rooms, Bintan Spa Villa, Bintan Agro, River Kawal, Marjoly, Halo Bintan",
            capacity: 5,
            image: Majortly,
        },
        {
            price: "SGD $25",
            icon: <FaCar className="text-yellow-500 w-6 h-6" />,
            detail: "The Residence Bintan ↔ Jetty Bintan Nemo",
            note: "The Residence Bintan and Lola Resort",
            capacity: 4,
            image: Residence,
        },
    ];

    return (
        <section className="bg-[#FDF6E3] font-montserrat py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-[#005B99] text-lg font-semibold mb-2">
                        Convenient Transport Options
                    </h2>
                    <p className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-12">
                        Easy, affordable round-trip rides to Bintan Nemo Jetty
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {items.map((i, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
                        >
                            <div className="relative">
                                <img
                                    src={i.image}
                                    alt={i.detail}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="absolute top-3 left-3 bg-white rounded-full p-2 shadow text-xl">
                                    {i.icon}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-3 flex-1">
                                <h3 className="text-xl font-bold text-[#1a3a54]">
                                    {i.price}
                                    <span className="text-sm font-medium text-gray-500 ml-2 flex items-center gap-1">
                                        <PiUsersThreeBold className="inline w-4 h-4" />
                                        {i.capacity} pax
                                    </span>
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {i.detail}
                                </p>
                                <p className="text-sm text-gray-600 flex items-start gap-2">
                                    <MdLocationOn className="text-red-500 w-4 h-4 shrink-0" />
                                    <span>{i.note}</span>
                                </p>
                            </div>
                            <div className="p-4">
                                <a
                                    href="https://wa.me/6282283649331?text=Hi%2C%20I'm%20interested%20in%20your%20transport%20service%20to%20Bintan%20Nemo%20Jetty"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 hover:bg-green-600 hover:scale-105 transition-transform duration-200 text-white font-semibold text-sm px-4 py-3 rounded-lg w-full flex justify-center items-center gap-2 shadow"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
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
