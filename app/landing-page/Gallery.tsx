const Gallery = () => {
    return (
        <div className="p-4 md:p-6 mt-28 mb-28 lg:mb-46 md:grid md:grid-cols-12 md:gap-4 max-w-6xl m-auto">
            <picture className="md:col-start-6 md:col-end-13 md:row-start-1 md:row-end-2">
                <source
                    srcSet="/desktop/image-grid-1.jpg"
                    media="(min-width: 1000px)"
                />
                <source
                    srcSet="/tablet/image-grid-1.jpg"
                    media="(min-width: 700px)"
                />
                <img
                    src="/mobile/image-grid-1.jpg"
                    alt="Gallery Grid 1"
                    className="w-full h-full object-cover"
                />
            </picture>

            <section className="mt-6 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-2">
                {/* correct block for larger screens */}
                <h2 className="uppercase mb-6">
                    <span className="block lsinline">Your day </span>at the
                    gallery
                </h2>
                <p className="md:max-w-xs mt-6">
                    Wander through our distinct collections and find new
                    insights about our artists. Dive into the details of their
                    creative process.
                </p>
            </section>

            <picture className="md:col-start-1 md:col-end-8 md:row-start-2 md:row-end-4 ">
                <source
                    srcSet="/desktop/image-grid-2.jpg"
                    media="(min-width: 1000px)"
                />
                <source
                    srcSet="/tablet/image-grid-2.jpg"
                    media="(min-width: 700px)"
                />
                <img
                    src="/mobile/image-grid-2.jpg"
                    alt="Gallery Grid 2"
                    className=" w-full h-full object-cover mt-8 md:mt-0"
                />
            </picture>

            <picture className="md:col-start-8 md:col-end-13 md:row-start-2 md:row-end-3">
                <source
                    srcSet="/desktop/image-grid-3.jpg"
                    media="(min-width: 1000px)"
                />
                <source
                    srcSet="/tablet/image-grid-3.jpg"
                    media="(min-width: 700px)"
                />
                <img
                    src="/mobile/image-grid-3.jpg"
                    alt="Gallery Grid 3"
                    className="mb-4 w-full h-full object-cover"
                />
            </picture>

            <section className="bg-dark text-light px-6 py-8 md:col-start-8 md:col-end-13 md:row-start-3 md:row-end-4 md:h-full">
                <h2 className="uppercase mb-6">
                    Come &amp; be <span className="block">inspired</span>
                </h2>
                <p className="">
                    We’re excited to welcome you to our gallery and see how our
                    collections influence you.
                </p>
            </section>
        </div>
    );
};

export default Gallery;
