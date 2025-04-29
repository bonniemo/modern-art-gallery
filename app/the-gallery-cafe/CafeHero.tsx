import Menu from "@/components/Menu";
import { useViewport } from "@/hooks/useViewport";
import girlWithMug from "@/public/gallery-cafe/desktop/girl-with-mug.jpg";
import Image from "next/image";
import ButtonEventCalendar from "./ButtonEventCalendar";

const CafeHero = () => {
    return (
        <section className="relative flex flex-wrap md:flex-nowrap md:gap-10 md:pt-24 md:pb-8 md:px-16">
            <div className=" absolute top-0 right-0">
                <Menu />
            </div>
            <section className="flex flex-col justify-center order-2 md:order-1 mt-10 md:mt-0 px-4 md:px-0 md:mx-auto">
                <h1 className="text-header-l leading-l md:text-header-m md:leading-m xl:text-header-xl xl:leading-xl">
                    THE GALLERY
                    <span className="block md:mt-2">CAFÉ</span>
                </h1>
                <p className="mt-10 leading-body-s text-p-s xl:text-p-m xl:leading-body-m font-light max-w-[28rem]">
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
