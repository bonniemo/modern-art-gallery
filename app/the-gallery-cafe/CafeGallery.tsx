import Image from "next/image";

import juiceBottles from "@/public/gallery-cafe/desktop/juice-bottles.png";
import latteCake from "@/public/gallery-cafe/desktop/latte-cake.png";

const CafeGallery = () => {
    return (
        <section className="grid grid-cols-2 grid-rows-2 gap-4 pb-28 max-h-[750px]">
            <div className="relative w-full h-full col-start-1 col-end-2 row-start-1 row-end-2">
                <Image
                    src={latteCake}
                    alt="Description of the image"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <section className="col-start-1 col-end-2 row-start-2 row-end-3 bg-dark text-light px-10 py-8 h-full">
                <h2 className="uppercase">
                    SAVOR THE <span className="block">MOMENT</span>
                </h2>
                <p className="max-w-[26rem] mt-6 text-sm">
                    Relax with a handcrafted coffee, fresh juices, or something
                    sweet as you take in the atmosphere around you.
                </p>
            </section>
            <div className="relative w-full h-full  col-start-2 row-start-1 row-end-3">
                <Image
                    src={juiceBottles}
                    alt="glass bottles with plant juice, two with green juice, one with orange and one with red juice"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default CafeGallery;
