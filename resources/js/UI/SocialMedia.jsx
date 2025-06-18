import { useEffect } from "react";

export default function SocialMedia() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="bg-[#FDF6E3] font-montserrat py-14 px-4">
            <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-9">
                <h2 className="text-lg md:text-2xl font-semibold text-[#005B99] leading-none">
                    Social Media Adventures Await
                </h2>

                <h1 className="text-2xl md:text-4xl font-bold text-[#1F2937] leading-snug">
                    Catch the excitement on Instagram & TikTok, straight from
                    the location!
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
                    {/* Instagram Embed */}
                    <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-md mx-auto flex flex-col h-[450px] md:h-[550px]">
                        <iframe
                            src="https://www.instagram.com/bintan_neemo/embed"
                            className="w-full h-full rounded-md border flex-grow"
                            frameBorder="0"
                            loading="lazy"
                            title="Feed Instagram Bintan Neemo"
                        ></iframe>
                    </div>

                    {/* TikTok Embed */}
                    <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-md mx-auto flex flex-col h-[450px] md:h-[550px]">
                        <blockquote
                            className="tiktok-embed w-full h-full flex-grow"
                            cite="https://www.tiktok.com/@bintan.neemo"
                            data-unique-id="bintan.neemo"
                            title="Tiktok Bintan Neemo"
                            data-embed-type="creator"
                            style={{ maxWidth: "100%", height: "100%" }}
                        >
                            <section>
                                <a
                                    target="_blank"
                                    href="https://www.tiktok.com/@bintan.neemo?refer=creator_embed"
                                    rel="noopener noreferrer"
                                >
                                    @bintan.neemo
                                </a>
                            </section>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
