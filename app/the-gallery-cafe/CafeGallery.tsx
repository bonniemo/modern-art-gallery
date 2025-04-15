const CafeGallery = () => {
    return (
        <div className="mt-28 mb-28 lg:mb-46 md:grid md:grid-cols-2 md:gap-4">
            <picture className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3">
                <source
                    srcSet="/gallery-cafe/desktop/juice-bottles.png"
                    media="(min-width: 1000px)"
                />
                <source
                    srcSet="/gallery-cafe/desktop/juice-bottles.png"
                    media="(min-width: 700px)"
                />
                <img
                    src="/gallery-cafe/desktop/juice-bottles.png"
                    alt="Glass bottles with plant juice, two with green juice, one with orange and one with red juice"
                    className="w-full h-full object-cover"
                />
            </picture>

            <picture className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                <source
                    srcSet="/gallery-cafe/desktop/latte-cake.png"
                    media="(min-width: 1000px)"
                />
                <source
                    srcSet="/gallery-cafe/desktop/latte-cake.png"
                    media="(min-width: 700px)"
                />
                <img
                    src="/gallery-cafe/desktop/latte-cake.png"
                    alt="Latte and cake on table"
                    className="w-full h-full object-cover mt-8 md:mt-0"
                />
            </picture>
            <section className="bg-dark text-light px-6 py-8 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:h-full">
                <h2 className="uppercase mb-6">
                    SAVOR THE <span className="block">MOMENT</span>
                </h2>
                <p className="">
                    Relax with a handcrafted coffee, fresh juices, or something
                    sweet as you take in the atmosphere around you.
                </p>
            </section>
        </div>
    );
};

export default CafeGallery;
