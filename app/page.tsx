import Gallery from "@/app/landing-page/Gallery";
import Hero from "@/app/landing-page/Hero";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Modern Art Gallery | Contemporary Art Museum (Portfolio Mockup)",
    description:
        "Mockup page – Not a real site, for developer portfolio only. Experience modern and contemporary art at Modern Art Gallery. Visit our collections, exhibitions, and discover inspiring artworks from renowned artists.",
    openGraph: {
        title: "Modern Art Gallery | Contemporary Art Museum (Portfolio Mockup)",
        description:
            "Mockup page – Not a real site, for developer portfolio only. Experience modern and contemporary art at Modern Art Gallery",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/landing-page/desktop/image-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Modern Art Gallery Homepage",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Modern Art Gallery | Contemporary Art Museum (Portfolio Mockup)",
        description:
            "Mockup page – Not a real site, for developer portfolio only. Experience modern and contemporary art at Modern Art Gallery",
        images: [
            {
                url: "/landing-page/desktop/image-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Modern Art Gallery Homepage",
            },
        ],
    },
};

const Home = () => {
    return (
        <main role="main" aria-label="Modern Art Gallery home page">
            <Hero />
            <Gallery />
            <Footer bgColor="black" />
        </main>
    );
};

export default Home;
