import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { getEvents } from "@/actions/eventActions";
import { EventInterface } from "@/types/types";
import { groupEventsByMonth } from "@/utils/eventGrouping";
import EventCard from "./EventCard";

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
                url: "/event-calendar/open-stage-desktop.png",
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
                url: "/event-calendar/open-stage-desktop.png",
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
    const events = (await getEvents()) as EventInterface[];
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
                                <EventCard event={event} />
                            </div>
                        ))}
                    </section>
                ))}
            </section>
            <Footer bgColor="black" />
        </>
    );
}
