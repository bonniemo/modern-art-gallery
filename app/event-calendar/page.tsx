import { getEvents } from "@/actions/actions";
import Footer from "@/components/Footer";
import { Event } from "@/types/types";
import { formatEventDate } from "@/utils/dateFormatting";
import { groupEventsByMonth } from "@/utils/eventGrouping";
import { slugify } from "@/utils/slugify";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

export default async function EventCalendar() {
    const events = (await getEvents()) as Event[];
    const groupedByMonth = groupEventsByMonth(events);

    return (
        <>
            <section className="px-4 pb-28">
                {Object.values(groupedByMonth).map(({ month, events }) => (
                    <section key={month}>
                        <h3 className="text-header-m font-black uppercase mt-16">
                            {month}
                        </h3>

                        {events.map((event, index) => (
                            <div key={`${event.formattedDay}-${index}`}>
                                <h4 className="text-header-s font-black mt-6 uppercase">
                                    {event.formattedDay}
                                </h4>
                                <Link
                                    href={`/event-calendar/${
                                        event.id
                                    }/${slugify(event.title)}`}
                                    className="w-full shadow-xl md:grid md:grid-cols-3 border border-gray-400 hover:border-black mt-6 p-4"
                                >
                                    <div className="relative w-full aspect-[1/1]">
                                        {event.img && (
                                            <Image
                                                src={getCldImageUrl({
                                                    src: event.img,
                                                })}
                                                alt={event.title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="px-2 md:px-6 md:mt-0 md:col-start-2 col-end-4">
                                        <h5 className="text-header-xs md:text-header-s font-black">
                                            {event.title}
                                        </h5>
                                        <p className="text-p-s text-gray font-light">
                                            {formatEventDate(
                                                event.date.seconds
                                            )}
                                        </p>
                                        <p className="text-p-s leading-body-s my-6 overflow-hidden text-ellipsis line-clamp-3">
                                            {event.description}
                                        </p>

                                        <span className="text-p-s text-gray underline hover:text-black block">
                                            Read more
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </section>
                ))}
            </section>
            <Footer bgColor="black" />
        </>
    );
}
