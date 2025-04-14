import BtnLocation from "./BtnLocation";

const Hero = () => {
    return (
        <article className="md:grid md:grid-cols-12 md:grid-rows-4">
            <section className="lg:bg-dark lg:w-full lg:h-full col-start-1 col-end-5 row-start-1 row-end-5"></section>
            <section className="w-full lg:col-start-5 lg:col-end-9 md:col-start-1 md:col-end-7 row-start-1 row-end-5">
                <picture>
                    <source
                        srcSet="/desktop/image-hero.jpg"
                        media="(min-width: 1024px)"
                    />
                    <source
                        srcSet="/tablet/image-hero.jpg"
                        media="(min-width: 768px)"
                    />
                    <img
                        src="/mobile/image-hero.jpg"
                        alt="Modern Art Gallery Hero"
                        className="w-full h-full object-cover"
                    />
                </picture>
            </section>
            <section className="w-full md:col-start-6 md:col-end-13 lg:col-start-2 lg:col-end-12 row-start-2 row-end-4 lg:flex md:flex-col lg:flex-row lg:justify-between md:px-6 lg:px-0 lg:p-0">
                <h1 className="mt-8 lg:mt-0 lg:text-light lg:mix-blend-difference mb-8 uppercase">
                    <span className="block">Modern</span> Art Gallery
                </h1>
                <section className="lg:mr-18">
                    <p className="mb-8 text-dark lg:max-w-[22rem]">
                        The arts in the collection of the Modern Art Gallery all
                        started from a spark of inspiration. Will these pieces
                        inspire you? Visit us and find out.
                    </p>
                    <BtnLocation />
                </section>
            </section>
        </article>
    );
};

export default Hero;
