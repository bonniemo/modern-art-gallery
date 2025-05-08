import Menu from "@/components/Menu";
import BtnLocation from "../../components/BtnLocation";

const Hero = () => {
    return (
        <article
            className="relative md:grid md:grid-cols-12 md:grid-rows-4"
            role="banner"
            aria-label="Gallery welcome section"
        >
            <div className=" absolute top-0 right-0">
                <Menu />
            </div>
            <section className="lg:bg-dark lg:w-full lg:h-full col-start-1 col-end-5 row-start-1 row-end-5"></section>
            <section className="w-full lg:col-start-5 lg:col-end-9 md:col-start-1 md:col-end-7 row-start-1 row-end-5">
                <picture>
                    <source
                        srcSet="/landing-page/desktop/image-hero.jpg"
                        media="(min-width: 1024px)"
                    />
                    <source
                        srcSet="/landing-page/tablet/image-hero.jpg"
                        media="(min-width: 768px)"
                    />
                    <img
                        src="/landing-page/mobile/image-hero.jpg"
                        alt="Large-scale black and white portrait artwork featuring detailed glasses and facial features drawn in pencil or charcoal on a white wall. Two gallery visitors in casual attire are viewing the artwork, standing against the clean white gallery space. The minimalist setting emphasizes the dramatic scale of the portrait."
                        className="w-full h-full object-cover"
                    />
                </picture>
            </section>
            <div className="md:col-start-6 md:col-end-13 lg:col-start-2 lg:col-end-7 lg:flex lg:justify-center row-start-2 row-end-3 px-2 md:px-0">
                <h1 className="mt-8 lg:mt-0 lg:text-light text-header-l leading-l xl:text-header-xl xl:leading-xl lg:mix-blend-difference uppercase">
                    <span className="block">Modern</span> Art Gallery
                </h1>
            </div>
            <section className="mt-8 md:mt-4 lg:mt-0 md:col-start-6 md:col-end-11 lg:col-start-8 lg:col-end-12 md:row-start-3 md:row-end-4 lg:row-start-2 lg:row-end-4 px-2 md:px-0">
                <p className=" text-dark text-p-s leading-body-s xl:text-p-m xl:leading-body-m lg:max-w-[22rem] font-light">
                    The arts in the collection of the Modern Art Gallery all
                    started from a spark of inspiration. Will these pieces
                    inspire you? Visit us and find out.
                </p>
                <div className="mt-8">
                    <BtnLocation />
                </div>
            </section>
        </article>
    );
};

export default Hero;
