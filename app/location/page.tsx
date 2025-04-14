import BtnGoHome from "@/components/BtnGoHome";
import Footer from "@/components/Footer";

const location = () => {
    return (
        <article>
            <section className="grid grid-cols-12 grid-rows-2">
                <picture className="col-start-1 col-end-13 row-start-1 row-end-3">
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
                <div className="col-start-1 row-start-1 m:col-start-2 m:col-end-6 l:col-start-2 l:col-end-4 l:flex l:justify-end">
                    <BtnGoHome />
                </div>
            </section>

            <section className="bg-colorDark text-colorLight px-3 py-8 ls:flex m:justify-between ls:px-10 ls:py-16 l:justify-around">
                <h2 className="uppercase">
                    Our <span className="ls:block">Location</span>
                </h2>
                <section className="m:w-3/6 l:w-2/6 ls:flex ls:flex-col content-end">
                    <h3 className="uppercase text-colorAccent ">
                        99 King Street
                    </h3>
                    <p>
                        <span className="block">Newport</span>{" "}
                        <span className="block">RI 02840</span>
                        United States of America
                    </p>
                    <p className="mt-5">
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
