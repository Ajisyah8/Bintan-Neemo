import { FaInstagram, FaPhone, FaTiktok, FaEnvelope } from "react-icons/fa";
import logo from "../UI/images/Bintan Neemo.webp";

export default function Footer() {
    return (
        <footer className="bg-[#22242A] text-white font-montserrat text-sm">
            <div className="px-6 py-6 mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 items-start w-full md:flex-row md:items-center">
                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="Bintan Neemo Logo"
                            className="w-[120px]"
                        />
                    </div>

                    <div className="flex flex-col flex-1 gap-4 w-full">
                        <div className="flex flex-col gap-4 w-full md:flex-row md:justify-between md:items-center">
                            <ul className="flex flex-wrap gap-4 text-gray-300 md:gap-6">
                                <li>
                                    <a
                                        href="#home"
                                        className="hover:text-white"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="hover:text-white"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#pricing"
                                        className="hover:text-white"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#gallery"
                                        className="hover:text-white"
                                    >
                                        Gallery
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq" className="hover:text-white">
                                        FAQ
                                    </a>
                                </li>
                            </ul>

                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                                <p className="text-sm font-semibold whitespace-nowrap">
                                    Plan Your Trip with Us
                                </p>
                                <div className="flex gap-4 text-lg text-white">
                                    <a
                                        href="mailto:bintan.neemo@gmail.com"
                                        aria-label="Email"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaEnvelope />
                                    </a>
                                    <a
                                        href="https://wa.me/6281364656341"
                                        aria-label="WhatsApp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaPhone />
                                    </a>
                                    <a
                                        href="https://www.tiktok.com/@bintan.neemo"
                                        aria-label="TikTok"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaTiktok />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/bintan_neemo/"
                                        aria-label="Instagram"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <hr className="border-t border-gray-500" />

                        <div className="flex flex-col gap-2 text-xs text-gray-400 md:flex-row md:justify-between md:items-center">
                            <ul className="flex flex-wrap gap-4 md:gap-6">
                                <li className="cursor-pointer hover:text-white">
                                    <a href="/privacy-policy">Privacy Policy</a>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <a href="/terms-of-use">Terms of Use</a>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <a href="/sales-and-refunds">
                                        Sales and Refunds
                                    </a>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <a href="/legal">Legal</a>
                                </li>
                            </ul>
                            <p className="text-left md:text-right">
                                © 2025 All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}