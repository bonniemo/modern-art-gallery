import Footer from "@/components/Footer";
import CafeGallery from "./CafeGallery";
import CafeHero from "./CafeHero";
import OpeningHours from "./OpeningHours";

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
