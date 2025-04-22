"use client";
import { useViewport } from "@/hooks/useViewport";
import Image from "next/image";
import { useParams } from "next/navigation";
import openStageMobile from "../../../../public/event-calendar/open-stage-mobile.png";
import ButtonBackToCalendar from "../../ButtonBackToCalendar";
import ButtonTicket from "../../ButtonTicket";

const EventPage = () => {
    const params = useParams();
    const eventId = params.id;
    const eventSlug = params.title;

    console.log("Event ID:", eventId, "Event slug:", eventSlug);
    let buttonTitle: string = "Back";

    const { width } = useViewport();
    if (width && width > 768) {
        buttonTitle = "Back to calendar";
    }
    return (
        <section>
            <section className="grid grid-cols-6">
                <div className="col-start-1  row-start-1 z-50">
                    <ButtonBackToCalendar title={buttonTitle} />
                </div>
                <div className="relative w-full aspect-[1/1] col-start-1 col-end-7 row-start-1">
                    <Image
                        src={openStageMobile}
                        alt="girl singing"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="row-start-1 col-start-4 col-end-7 z-50 text-light flex flex-col items-end p-2">
                    <h2 className="max-w-max uppercase text-header-tiny md:text-header-s font-bold">
                        Open stage night
                    </h2>
                    <p className="max-w-max text-p-tiny md:text-p-m font-light">
                        12th of April, 8pm
                    </p>
                </div>
            </section>
            <section className="p-4 md:p-8">
                <h1 className="text-header-s leading-s mt-6 uppercase">
                    Sing, dance or Hang back and enjoy
                </h1>
                <p className="text-p-s leading-body-s md:text-p-m md:leading-body-m font-light mt-6">
                    Out highly appreciated open stage night is always a joy.
                    Where community and creativity come together over
                    exceptional coffee. Where community and creativity come
                    together over exceptional coffee. Where community and
                    creativity come together over exceptional coffee. Where
                    community and creativity come together over exceptional
                    coffee.
                </p>
                <div className="mt-8">
                    <ButtonTicket />
                </div>
            </section>
        </section>
    );
};

export default EventPage;
