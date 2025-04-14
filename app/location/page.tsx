import BtnGoHome from "@/components/BtnGoHome";
import Footer from "@/components/Footer";

const location = () => {
    return (
        <article>
            <section className="grid grid-cols-24 grid-rows-2">
                <picture className="col-start-1 col-end-25 row-start-1 row-end-3">
                    <source
                        srcSet="/desktop/image-map.png"
                        media="(min-width: 1024px)"
                    />
                    <source
                        srcSet="/tablet/image-map.png"
                        media="(min-width: 768px)"
                    />
                    <img
                        src="/mobile/image-map.png"
                        alt="Modern Art Gallery Hero"
                        className="w-full h-full object-cover"
                    />
                </picture>
                <div className="col-start-1 row-start-1 md:col-start-2 md:col-end-10 lg:col-start-3 lg:col-end-8 lg:flex lg:justify-end">
                    <BtnGoHome />
                </div>
            </section>

            <section className="bg-dark text-light py-12 px-8 md:flex md:justify-between md:px-10 md:py-16 lg:justify-around">
                <h2 className="uppercase">
                    Our <span className="md:block">Location</span>
                </h2>
                <section className="md:w-[25rem] lg:w-2/6 md:flex md:flex-col content-end mt-12 md:mt-0">
                    <h3 className="uppercase text-accent ">99 King Street</h3>
                    <p className="mt-6">
                        <span className="block">Newport</span>{" "}
                        <span className="block">RI 02840</span>
                        United States of America
                    </p>
                    <p className="mt-6">
                        Our newly opened gallery is located near the Edward King
                        House on 99 King Street, the Modern Art Gallery is free
                        to all visitors and open seven days a week from 8am to
                        9pm.
                    </p>
                </section>
            </section>
            <Footer page={"map"} />
        </article>
    );
};

export default location;
