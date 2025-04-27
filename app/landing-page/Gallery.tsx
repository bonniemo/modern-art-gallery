const Gallery = () => {
    return (
        <div
            className="p-4 md:p-6 mt-28 mb-28 lg:mb-46 grid md:grid-cols-12 grid-rows-[auto] gap-4 max-w-6xl m-auto"
            role="region"
            aria-label="Gallery highlights"
        >
            <picture className="row-start-1 row-end-2 md:col-start-6 md:col-end-13 md:row-start-1 md:row-end-2">
                <source
                    srcSet="/landing-page/desktop/image-grid-1.jpg"
                    media="(min-width: 1000px)"
                />
                <source
                    srcSet="/landing-page/tablet/image-grid-1.jpg"
                    media="(min-width: 700px)"
                />
                <img
                    src="/landing-page/mobile/image-grid-1.jpg"
                    alt="Art gallery interior with white walls and polished dark floors. Several abstract artworks in earth tones are mounted on the walls. In the foreground, an orange and white sculptural piece sits on a black platform. Track lighting illuminates the space from exposed ceiling beams."
                    className="w-full h-full object-cover"
                />
            </picture>

            <section className="row-start-2 row-end-3 mt-2 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-2">
                <h2 className="uppercase mb-6 text-header-m leading-m lg:max-w-[21rem] md:max-w-[14rem]">
                    <span className="block md:inline">Your day </span>at the
                    gallery
                </h2>
                <p className="md:max-w-xs mt-6 text-p-s leading-body-s lg:text-p-m lg:leading-body-m font-light">
                    Wander through our distinct collections and find new
                    insights about our artists. Dive into the details of their
                    creative process.
                </p>
            </section>

            <picture className="row-start-3 row-end-4 md:col-start-1 md:col-end-8 md:row-start-2 md:row-end-4">
                <source
                    srcSet="/landing-page/desktop/image-grid-2.jpg"
                    media="(min-width: 1000px)"
                />
                <source
                    srcSet="/landing-page/tablet/image-grid-2.jpg"
                    media="(min-width: 700px)"
                />
                <img
                    src="/landing-page/mobile/image-grid-2.jpg"
                    alt="Minimalist gallery space with a single black and white abstract photograph centered on a white wall. A long wooden bench sits on grey tiled flooring beneath the artwork. The space features clean lines and fluorescent lighting in a dropped ceiling, creating a stark, modern exhibition environment."
                    className=" w-full h-full object-cover md:mt-0"
                />
            </picture>

            <picture className="row-start-4 row-end-5 md:col-start-8 md:col-end-13 md:row-start-2 md:row-end-3">
                <source
                    srcSet="/landing-page/desktop/image-grid-3.jpg"
                    media="(min-width: 1000px)"
                />
                <source
                    srcSet="/landing-page/tablet/image-grid-3.jpg"
                    media="(min-width: 700px)"
                />
                <img
                    src="/landing-page/mobile/image-grid-3.jpg"
                    alt="Bright modern art gallery interior with high coffered ceilings and recessed lighting. Several framed artworks hang on pristine white walls. The space features warm wooden flooring, and visitors can be seen viewing the exhibition. The perspective creates a sweeping view down the length of the gallery."
                    className="mb-4 w-full h-full object-cover"
                />
            </picture>

            <section className="row-start-5 row-end-6 bg-dark text-light px-6 py-8 md:col-start-8 md:col-end-13 md:row-start-3 md:row-end-4 md:h-full">
                <h2 className="uppercase mb-6 text-header-m leading-m">
                    Come &amp; be <span className="block">inspired</span>
                </h2>
                <p className=" text-p-s leading-body-s lg:text-p-m lg:leading-body-m font-light">
                    We’re excited to welcome you to our gallery and see how our
                    collections influence you.
                </p>
            </section>
        </div>
    );
};

export default Gallery;
