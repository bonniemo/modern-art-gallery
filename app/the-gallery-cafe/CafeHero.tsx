import girlWithMug from "@/public/gallery-cafe/desktop/girl-with-mug.jpg";
import Image from "next/image";
import ButtonEventCalendar from "./ButtonEventCalendar";

const CafeHero = () => {
    return (
        <section className="flex flex-wrap md:flex-nowrap md:justify-between md:gap-12 md:pt-24 md:pb-8 md:px-16">
            <section className="my-auto order-2 md:order-1 mt-10 md:mt-0 px-4 md:px-0">
                <h1 className="text-header-l md:text-header-m lg:text-header-xl">
                    THE GALLERY
                    <span className="block mt-4">CAFÉ</span>
                </h1>
                <p className="mt-10 lg:text-p-m">
                    Where community and creativity come together over
                    exceptional coffee.
                </p>
                <div className="mt-10">
                    <ButtonEventCalendar />
                </div>
            </section>
            <div className="relative w-full min-w-[320px] lg:max-w-[41rem] md:max-w-[38rem] h-[413px] order-1 md:order-2">
                <Image
                    src={girlWithMug}
                    alt="Girl holding a coffee mug"
                    fill
                    priority
                    className="object-cover md:rounded-br-[4.5rem] md:rounded-tl-[4.5rem] drop-shadow-lg"
                />
            </div>
        </section>
    );
};

export default CafeHero;
