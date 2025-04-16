import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import creativeWAna from "../../public/event-calendar/creative-w-ana.png";
import openStageThumb from "../../public/event-calendar/open-stage-thumb.png";

const eventsData = [
    {
        month: "April",
        events: [
            {
                day: "8th",
                title: "Get creative with Aná",
                time: "8th of April, 7pm",
                description:
                    "A cozy evening filled with creativity, collage-making, and caffeine. Come hang out and make something beautiful with friends.",
                image: creativeWAna,
            },
            {
                day: "15th",
                title: "Open stage Night",
                time: "15th of April, 6pm",
                description:
                    "Step into the spotlight or cheer from the crowd at our Open Stage Night! Whether you're a musician, poet, comedian, or just want to vibe with the community, this is your space to shine. Bring your talent—or your friends—and enjoy an inspiring evening of raw creativity, good vibes, and great coffee.",
                image: openStageThumb,
            },
        ],
    },
    // Add more months/events here if needed
];

const EventCalendar = () => {
    return (
        <>
            <section className="px-4 pt-16 pb-28">
                {eventsData.map((monthData) => (
                    <section key={monthData.month}>
                        <h3 className="text-header-m font-black uppercase">
                            {monthData.month}
                        </h3>

                        {monthData.events.map((event, index) => (
                            <div key={`${event.day}-${index}`}>
                                <h4 className="text-header-s font-black mt-12 uppercase">
                                    {event.day}
                                </h4>

                                <section className="w-full shadow-xl md:grid md:grid-cols-3 border border-gray-400 mt-6 p-4">
                                    <div className="relative w-full aspect-[1/1]">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="px-2 md:px-6 md:mt-0 md:col-start-2 col-end-4">
                                        <h5 className="text-header-xs md:text-header-s font-black">
                                            {event.title}
                                        </h5>
                                        <p className="text-p-s text-gray font-light">
                                            {event.time}
                                        </p>
                                        <p className="text-p-s leading-body-s my-6 overflow-hidden text-ellipsis line-clamp-3">
                                            {event.description}
                                        </p>
                                        <Link
                                            href="#"
                                            className="text-p-s text-gray underline"
                                        >
                                            Read more
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        ))}
                    </section>
                ))}
            </section>
            <Footer bgColor="black" />
        </>
    );
};

export default EventCalendar;
