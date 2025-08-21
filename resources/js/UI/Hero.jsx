import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../css/app.css";
import backgroundImage from "./images/Neemo.webp";
import Logo from "./images/Bintan Neemo.webp";
import Boat from "./images/Boat.webp";
import Tourism from "./images/Tourism.webp";
import Snorkling from "./images/Snorkling.webp";

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const menuItems = ["about", "pricing", "gallery", "faq"];

export default function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="font-[Montserrat] relative">
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            <img
                src={backgroundImage}
                alt="Preload Nemo Background"
                style={{ display: "none" }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
            />
            <section
                id="home"
                className="relative flex flex-col items-center w-full min-h-screen px-4 overflow-hidden text-white bg-center bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,150,199,0.7), rgba(2,62,138,0.7)), url(${backgroundImage})`,
                }}
            >
                {/* Header with Animation */}
                <motion.div
                    className="flex flex-col items-center w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <header className="relative z-10 w-full px-4 py-4 md:px-8">
                        <div className="container flex flex-col items-center mx-auto md:flex-row md:justify-center">
                            {/* Desktop Navigation */}
                            <nav className="items-center hidden space-x-10 md:flex">
                                {["about", "pricing"].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        className="text-white cursor-pointer hover:text-cyan-100"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector(`#${item}`)
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }}
                                    >
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}
                                    </a>
                                ))}

                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="mx-3"
                                    loading="eager"
                                    decoding="async"
                                    style={{ height: "208px" }}
                                />

                                {["gallery", "faq"].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        className="text-white cursor-pointer hover:text-cyan-100"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector(`#${item}`)
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }}
                                    >
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}
                                    </a>
                                ))}
                            </nav>

                            {/* Mobile Toggle */}
                            <div className="relative z-40 flex items-center justify-between w-full px-2 md:hidden">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="h-[80px] md:h-[120px] mt-5"
                                    loading="eager"
                                    decoding="async"
                                />
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="z-40 text-white focus:outline-none"
                                    aria-label="Toggle menu"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d={
                                                menuOpen
                                                    ? "M6 18L18 6M6 6l12 12"
                                                    : "M4 6h16M4 12h16M4 18h16"
                                            }
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div
                            className={`fixed top-0 right-0 h-full w-64 bg-[#0096C7] z-40 transform transition-transform duration-300 ease-in-out ${
                                menuOpen ? "translate-x-0" : "translate-x-full"
                            } md:hidden flex flex-col pt-20 px-6 space-y-6`}
                        >
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="absolute text-white top-4 right-4"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .getElementById(item)
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        setMenuOpen(false);
                                    }}
                                    className="text-lg font-medium text-white cursor-pointer hover:text-cyan-100"
                                >
                                    {item.charAt(0).toUpperCase() +
                                        item.slice(1)}
                                </a>
                            ))}
                        </div>
                    </header>
                </motion.div>

                {/* Hero Content Without Animation on h1 */}
                <div className="flex flex-col items-center justify-center flex-grow px-4 mt-4 lg:mt-10 md:-mt-10 md:px-0">
                    <div className="max-w-2xl text-center">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white text-center [text-wrap:balance]">
                            Discover Nemo & Beyond in Bintan's Hidden Paradise
                        </h1>
                        <p className="text-lg md:text-[20px] mb-8">
                            A unique sea experience to explore Bintan's marine
                            beauty, all from our floating house.
                        </p>
                        <div className="relative z-0 flex flex-wrap justify-center w-full gap-4 mt-8">
                            <a
                                href="https://wa.me/6281364656341?text=Hello%20Bintan%20Neemo%2C%20I%20would%20like%20to%20make%20a%20booking"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#005A8D] hover:bg-slate-500 hover:text-white px-6 py-2 rounded-full font-bold transition"
                            >
                                Booking Now
                            </a>
                            <a
                                href="#pricing"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector("#pricing")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                className="bg-white text-[#005A8D] hover:bg-slate-500 hover:text-white px-6 py-2 rounded-full font-bold transition"
                            >
                                View Package
                            </a>
                        </div>
                    </div>
                </div>

                {/* Desktop Image Section */}
                <div className="relative z-10 justify-center hidden w-full gap-0 md:flex">
                    <motion.img
                        src={Boat}
                        alt="Kayaking"
                        className="w-[361px] h-[480px] rounded-2xl shadow-xl z-0 object-cover mt-40"
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                        initial={{ opacity: 0, y: 50, rotate: -6 }}
                        animate={{ opacity: 1, y: 0, rotate: -6 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    />

                    <motion.img
                        src={Tourism}
                        alt="Fishing"
                        className="w-[361px] h-[480px] rounded-2xl shadow-2xl z-10 relative object-cover object-[30%_center] mt-40"
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    />

                    <motion.img
                        src={Snorkling}
                        alt="Snorkeling"
                        className="w-[361px] h-[480px] rounded-2xl shadow-xl z-0 object-cover mt-40"
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                        initial={{ opacity: 0, y: 50, rotate: 6 }}
                        animate={{ opacity: 1, y: 0, rotate: 6 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    />
                </div>

                {/* Mobile Image Section */}
                <div className="flex flex-col items-center gap-6 px-4 pb-12 mt-12 md:hidden">
                    <motion.div
                        className="w-full h-[250px] rounded-2xl shadow-xl transform -rotate-6 scale-105"
                        initial={{ opacity: 0, y: 10, rotate: -6 }}
                        animate={{ opacity: 1, y: 0, rotate: -6 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={Boat}
                            alt="Kayaking"
                            className="object-cover w-full h-full rounded-2xl"
                            loading="eager"
                            decoding="async"
                            fetchpriority="high"
                        />
                    </motion.div>

                    <motion.img
                        src={Tourism}
                        alt="Fishing"
                        className="w-full h-[250px] object-cover shadow-2xl rounded-2xl"
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    />

                    <motion.div
                        className="w-full h-[250px] rounded-2xl shadow-xl transform rotate-6 scale-105"
                        initial={{ opacity: 0, y: 10, rotate: 6 }}
                        animate={{ opacity: 1, y: 0, rotate: 6 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        <img
                            src={Snorkling}
                            alt="Snorkeling"
                            className="object-cover w-full h-full rounded-2xl"
                            loading="eager"
                            decoding="async"
                            fetchpriority="high"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
