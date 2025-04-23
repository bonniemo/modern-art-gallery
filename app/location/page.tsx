import BtnGoHome from "@/components/BtnGoHome";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Location | Modern Art Gallery (Portfolio Mockup)",
    description:
        "Mockup page – Not a real site, for developer portfolio only. Visit Modern Art Gallery at 99 King Street, Newport.",
    openGraph: {
        title: "Visit Modern Art Gallery | Location & Hours (Portfolio Mockup)",
        description:
            "Mockup page – Not a real site, for developer portfolio only. Find us at 99 King Street, Newport.",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/landing-page/desktop/image-map.png",
                width: 1200,
                height: 600,
                alt: "Modern Art Gallery Location Map",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Visit Modern Art Gallery | Location & Hours (Portfolio Mockup)",
        description:
            "Mockup page – Not a real site, for developer portfolio only. Find us at 99 King Street, Newport.",
        images: [
            {
                url: "/landing-page/desktop/image-map.png",
                width: 1200,
                height: 600,
                alt: "Modern Art Gallery Location Map",
            },
        ],
    },
    keywords: [
        "art gallery location",
        "Newport art gallery",
        "modern art museum",
        "99 King Street",
        "free art gallery",
        "Rhode Island art",
    ],
};

const Location = () => {
    return (
        <main role="main" aria-label="Gallery location page">
            <article>
                <section className="grid grid-cols-24 grid-rows-2">
                    <picture className="col-start-1 col-end-25 row-start-1 row-end-3">
                        <source
                            srcSet="/landing-page/desktop/image-map.png"
                            media="(min-width: 1024px)"
                        />
                        <source
                            srcSet="/landing-page/tablet/image-map.png"
                            media="(min-width: 768px)"
                        />
                        <img
                            src="/landing-page/mobile/image-map.png"
                            alt="Modern Art Gallery Hero"
                            className="w-full h-full object-cover"
                        />
                    </picture>
                    <div className="col-start-1 row-start-1 md:col-start-2 md:col-end-10 lg:col-start-3 lg:col-end-8 lg:flex lg:justify-end">
                        <BtnGoHome />
                    </div>
                </section>

                <section className="bg-dark text-light py-12 px-8 md:flex md:justify-between md:px-10 md:py-16 lg:justify-around">
                    <h2 className="uppercase text-header-m leading-m lg:text-header-l lg:leading-l">
                        Our <span className="md:block">Location</span>
                    </h2>
                    <section className="md:w-[25rem] lg:w-2/6 md:flex md:flex-col content-end mt-12 md:mt-0">
                        <h3 className="uppercase text-accent text-header-s leading-s">
                            99 King Street
                        </h3>
                        <p className="mt-6 text-p-s leading-body-s lg:text-p-m lg:leading-body-m font-light">
                            <span className="block">Newport</span>{" "}
                            <span className="block">RI 02840</span>
                            United States of America
                        </p>
                        <p className="mt-6 text-p-s leading-body-s lg:text-p-m lg:leading-body-m font-light">
                            Our newly opened gallery is located near the Edward
                            King House on 99 King Street, the Modern Art Gallery
                            is free to all visitors and open seven days a week
                            from 8am to 9pm.
                        </p>
                    </section>
                </section>
                <Footer bgColor="accent" />
            </article>
        </main>
    );
};

export default Location;
