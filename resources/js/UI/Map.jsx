import React from "react";

export default function Map() {
    return (
        <section className="bg-[#FDF6E3] font-montserrat py-16 px-6">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                <h3 className="text-lg font-semibold text-[#005B99] mb-1 leading-tight">
                    Dolphin Beach Bintan Meeting Point
                </h3>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-0 leading-snug">
                    The perfect location to start your adventure with us.
                </h1>

                <p className="text-gray-600 text-base md:text-lg">
                    The meeting point is at{" "}
                    <strong>Dolphin Beach Bintan</strong>, as shown in the map
                    below. Please make your way to the following address:
                    <br />
                    <strong>
                        Tlk. Bakau, Gn. Kijang District, Bintan Regency, Riau
                        Islands
                    </strong>
                </p>

                <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200 mx-auto w-full max-w-4xl aspect-[4/3]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1356937361534!2d104.64917177532931!3d1.059885298929929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d96704eed907f3%3A0x9a922c15df3d772a!2sPantai%20Dolphin%20Bintan!5e0!3m2!1sen!2sid!4v1748718180307!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dolphin Beach Bintan Meeting Point"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
