import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

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
