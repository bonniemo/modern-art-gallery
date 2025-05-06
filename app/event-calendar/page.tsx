import { getEvents } from "@/actions/actions";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Event } from "@/types/types";
import { formatEventDate } from "@/utils/dateFormatting";
import { groupEventsByMonth } from "@/utils/eventGrouping";
import { slugify } from "@/utils/slugify";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Events | Modern Art Gallery (Portfolio Mockup)",
    description:
        "Mockup page – Not a real site, for developer portfolio only. Discover upcoming exhibitions, workshops, and cultural events at Modern Art Gallery.",
    openGraph: {
        title: "Events Calendar | Modern Art Gallery (Portfolio Mockup)",
        description:
            "Mockup page – Not a real site, for developer portfolio only. Discover upcoming exhibitions, workshops, and cultural events at Modern Art Gallery",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/open-stage.jpg", // Update the image path accordingly
                width: 1200,
                height: 630,
                alt: "Singer performing at Modern Art Gallery open stage event",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Events Calendar | Modern Art Gallery (Portfolio Mockup)",
        description:
            "Mockup page – Not a real site, for developer portfolio only. Discover upcoming exhibitions, workshops, and cultural events at Modern Art Gallery",
        images: [
            {
                url: "/open-stage.jpg", // Update the image path accordingly
                width: 1200,
                height: 630,
                alt: "Singer performing at Modern Art Gallery open stage event",
            },
        ],
    },
    keywords: [
        "art events",
        "gallery exhibitions",
        "art workshops",
        "cultural events",
        "modern art",
        "art gallery events",
    ],
    robots: {
        index: true,
        follow: true,
    },
};

export default async function EventCalendar() {
    const events = (await getEvents()) as Event[];
    const groupedByMonth = groupEventsByMonth(events);

    return (
        <>
            <div className="flex justify-end">
                <Menu />
            </div>
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
                                <section className="w-full shadow-xl md:grid md:grid-cols-3 border border-gray-400 hover:border-black mt-6 p-4">
                                    <Link
                                        href={`/event-calendar/${
                                            event.id
                                        }/${slugify(event.title)}`}
                                        className="md:contents"
                                    >
                                        <div className="relative w-full aspect-[1/1] md:col-start-1 md:col-end-2 md:row-start-1">
                                            {event.img && (
                                                <Image
                                                    src={getCldImageUrl({
                                                        src: event.img,
                                                    })}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                            )}
                                        </div>
                                        <div className="px-2 md:px-6 md:mt-0 md:col-start-2 md:col-end-4 md:row-start-1">
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
