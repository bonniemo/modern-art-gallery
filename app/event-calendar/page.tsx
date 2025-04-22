import { getEvents } from "@/actions/actions";
import Footer from "@/components/Footer";
import { slugify } from "@/utils/slugify";
import { getCldImageUrl } from "next-cloudinary";
import Link from "next/link";
import Image from "next/image";

export default async function EventCalendar() {
    interface Event {
        id: string;
        date: { seconds: number };
        title: string;
        description: string;
        imageId?: string; // Update interface to include imageId
        image?: string;
    }

    interface FormattedEvent extends Event {
        formattedDay: string;
        formattedTime: string;
    }

    interface MonthGroup {
        month: string;
        events: FormattedEvent[];
    }

    const events = (await getEvents()) as Event[];

    // Group events by month with readable timestamps
    const groupedByMonth = events.reduce<Record<string, MonthGroup>>(
        (grouped, event) => {
            const eventDate = new Date(event.date.seconds * 1000);

            const monthName = eventDate.toLocaleString("default", {
                month: "long",
            });
            const day = eventDate.toLocaleString("default", { day: "numeric" });
            const formattedDay = `${day}`;
            const formattedTime = eventDate.toLocaleString("default", {
                hour: "2-digit",
                minute: "2-digit",
            });

            if (!grouped[monthName]) {
                grouped[monthName] = {
                    month: monthName,
                    events: [],
                };
            }

            grouped[monthName].events.push({
                ...event,
                formattedDay,
                formattedTime,
            });

            return grouped;
        },
        {}
    );

    return (
        <>
            <section className="px-4 pt-16 pb-28">
                {Object.values(groupedByMonth).map(({ month, events }) => (
                    <section key={month}>
                        <h3 className="text-header-m font-black uppercase">
                            {month}
                        </h3>

                        {events.map((event, index) => (
                            <div key={`${event.formattedDay}-${index}`}>
                                <h4 className="text-header-s font-black mt-12 uppercase">
                                    {event.formattedDay}
                                </h4>

                                <section className="w-full shadow-xl md:grid md:grid-cols-3 border border-gray-400 mt-6 p-4">
                                    <div className="relative w-full aspect-[1/1]">
                                        {event.imageId && (
                                            <Image
                                                src={getCldImageUrl({
                                                    width: 400,
                                                    height: 400,
                                                    src: event.imageId,
                                                })}
                                                alt={event.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        )}
                                    </div>
                                    <div className="px-2 md:px-6 md:mt-0 md:col-start-2 col-end-4">
                                        <h5 className="text-header-xs md:text-header-s font-black">
                                            {event.title}
                                        </h5>
                                        <p className="text-p-s text-gray font-light">
                                            {event.formattedTime}
                                        </p>
                                        <p className="text-p-s leading-body-s my-6 overflow-hidden text-ellipsis line-clamp-3">
                                            {event.description}
                                        </p>
                                        <Link
                                            href={`/event-calendar/${
                                                event.id
                                            }/${slugify(event.title)}`}
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
}
