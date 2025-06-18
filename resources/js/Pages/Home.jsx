import React from "react";
import Hero from "../UI/Hero";
import About from "../UI/About";
import Pricing from "../UI/Pricing";
import Documentation from "../UI/Documentation";
import Gallery from "../UI/Gallery";
import Testimonial from "../UI/Testimonial";
import FAQ from "../UI/FAQ";
import Layout from "../Layout";
import SocialMedia from "../UI/SocialMedia";
import FloatingButtons from "../Component/FloatingButtons";
import Destination from "../UI/Destination";
import Map from "../UI/Map";
import { Head } from "@inertiajs/react";
import Transportation from "../UI/Transportation";

const Home = () => {
    return (
        <>
            <Head>
                <title>Bintan Neemo - Explore Beautiful Bintan Island</title>
                <meta
                    name="description"
                    content="Explore the beauty of Bintan Island with Bintan Neemo — offering travel packages, beach resorts, cultural tours, snorkeling, and more."
                />
                <meta
                    name="keywords"
                    content="
    Bintan Neemo, Bintan Nemo, Neemo Bintan, Nemo Bintan,
    Bintan Neemo tour, Bintan Nemo vacation, Bintan snorkeling,
    Bintan floating house, Bintan sea adventure, Bintan island experience,
    Bintan marine tourism, Bintan travel, Bintan holiday package,
    Bintan island tours, Bintan cultural tours, Bintan beach holiday,
    Bintan diving trips, Bintan family vacation, Bintan romantic getaway,
    Bintan water activities, Bintan fishing tours, Bintan eco-tourism,
    Bintan resort stay, Bintan boat tours, Bintan snorkeling tours,
    Bintan marine life exploration, Bintan nature trips, Bintan sea tours,
    Bintan island hopping, Bintan vacation rental, Bintan holiday deals,
    Neemo floating house Bintan, Nemo floating house Bintan,
    Bintan underwater adventure, Bintan coral reef tours, Bintan travel guide,
    Bintan tourist attractions, Bintan Indonesia travel, Bintan getaway,
    Bintan luxury tours, Bintan holiday destination, Bintan water sports
  "
                />

                <meta name="author" content="Bintan Neemo" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />
                <meta name="language" content="en" />
                <link rel="canonical" href="https://bintanneemo.id/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bintanneemo.id/" />
                <meta
                    property="og:title"
                    content="Bintan Neemo - Explore Beautiful Bintan Island"
                />
                <meta
                    property="og:description"
                    content="Discover exciting travel packages and unforgettable experiences with Bintan Neemo on Bintan Island. Book now!"
                />
                <meta
                    property="og:image"
                    content="https://bintanneemo.id/images/NeemoKel.jpg"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <Hero />
                <About />
                <Pricing />
                <Documentation />
                <Gallery />
                <Destination />
                <Transportation />
                <Testimonial />
                <SocialMedia />
                <FAQ />
                <Map />
            </Layout>

            <FloatingButtons />
        </>
    );
};

export default Home;
