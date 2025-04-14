import Gallery from "@/app/landing-page/Gallery";
import Hero from "@/app/landing-page/Hero";
import Footer from "@/components/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <Gallery />
            <Footer page={"landingPage"} />
        </>
    );
};

export default Home;
