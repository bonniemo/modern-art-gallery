import Image from "next/image";

import juiceBottles from "@/public/gallery-cafe/desktop/juice-bottles.png";
import latteCake from "@/public/gallery-cafe/desktop/latte-cake.png";

const CafeGallery = () => {
    return (
        <section className="flex flex-col pb-28 md:grid md:grid-cols-2 md:grid-rows-2 gap-4">
            <div className="relative order-1 w-full h-full md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                <Image
                    src={latteCake}
                    alt="Description of the image"
                    priority
                    fill
                    className="object-cover w-full h-auto"
                />
            </div>
            <section className="bg-dark text-light order-3 px-4 py-12 md:px-6 md:py-6 h-full md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
                <h2 className="uppercase">
                    SAVOR THE <span className="block">MOMENT</span>
                </h2>
                <p className="max-w-[31rem] mt-6 text-sm">
                    Relax with a handcrafted coffee, fresh juices, or something
                    sweet as you take in the atmosphere around you.
                </p>
            </section>
            <div className="relative w-full h-full md:col-start-2 md:row-start-1 md:row-end-3 order-2">
                <Image
                    src={juiceBottles}
                    alt="glass bottles with plant juice, two with green juice, one with orange and one with red juice"
                    priority
                    fill
                    className="object-cover w-full h-auto"
                />
            </div>
        </section>
    );
};

export default CafeGallery;
