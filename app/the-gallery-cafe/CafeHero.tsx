import girlWithMug from "@/public/gallery-cafe/desktop/girl-with-mug.jpg";
import Image from "next/image";
import ButtonEventCalendar from "./ButtonEventCalendar";

const CafeHero = () => {
    return (
        <section className="flex justify-between gap-4 md:py-12 px-16">
            <section className="max-w-[22rem] my-auto">
                <h1>THE GALLERY CAFÉ</h1>
                <p className="mt-8">
                    Where community and creativity come together over
                    exceptional coffee.
                </p>
                <div className="mt-8">
                    <ButtonEventCalendar />
                </div>
            </section>
            <div className="relative w-full max-w-[44rem] h-[413px]">
                <Image
                    src={girlWithMug}
                    alt="Girl holding a coffee mug"
                    fill
                    priority
                    className="object-cover rounded-br-[4.5rem] rounded-tl-[4.5rem] drop-shadow-lg"
                />
            </div>
        </section>
    );
};

export default CafeHero;
