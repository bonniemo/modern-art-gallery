import Footer from "@/components/Footer";
import CafeGallery from "./CafeGallery";
import CafeHero from "./CafeHero";
import OpeningHours from "./OpeningHours";

export const metadata = {
    title: "The Gallery Café | Modern Art Gallery (Portfolio Mockup)",
    description:
        "Mockup page – Not a real site, for developer portfolio only. Visit our café where community and creativity come together over exceptional coffee. Open daily from 7am to 3pm.",
    openGraph: {
        title: "The Gallery Café | Modern Art Gallery (Portfolio Mockup)",
        description:
            "Mockup page – Not a real site, for developer portfolio only. Where community and creativity come together over exceptional coffee.",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/gallery-cafe/desktop/girl-with-mug.jpg",
                width: 1200,
                height: 630,
                alt: "Girl holding a coffee mug at The Gallery Café",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "The Gallery Café | Modern Art Gallery (Portfolio Mockup)",
        description:
            "Mockup page – Not a real site, for developer portfolio only. Where community and creativity come together over exceptional coffee.",
        images: [
            {
                url: "/gallery-cafe/desktop/girl-with-mug.jpg",
                width: 1200,
                height: 630,
                alt: "Girl holding a coffee mug at The Gallery Café",
            },
        ],
    },
    keywords: [
        "art gallery cafe",
        "coffee shop",
        "creative space",
        "gallery cafe",
        "art cafe",
        "community space",
    ],
};

const GalleryCafePage = () => {
    return (
        <>
            <CafeHero />
            <OpeningHours />
            <CafeGallery />
            <Footer bgColor="black" />
        </>
    );
};

export default GalleryCafePage;
