import Footer from "@/components/Footer";
import { getEventById } from "@/actions/eventActions";
import { formatEventDate } from "@/utils/dateFormatting";
import { Metadata } from "next";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import ButtonBackToCalendar from "../../ButtonBackToCalendar";
import TicketModal from "./ticket/TicketModal";

type Props = {
    params: Promise<{ id: string; title: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const event = await getEventById(resolvedParams.id);

    if (!event) {
        return {
            title: "Event Not Found | Modern Art Gallery (Portfolio Mockup)",
            description:
                "Mockup page – Not a real site, for developer portfolio only. The requested event could not be found.",
        };
    }

    const formattedDate = formatEventDate(event.date.seconds);
    const imageUrl = getCldImageUrl({ src: event.img });

    return {
        title: `${event.title} | Modern Art Gallery (Portfolio Mockup)`,
        description: `Mockup page – Not a real site, for developer portfolio only. ${event.heading}. Join us on ${formattedDate} for this exciting event.`,
        openGraph: {
            title: `${event.title} (Portfolio Mockup)`,
            description: `Mockup page – Not a real site, for developer portfolio only. ${event.heading}`,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: event.title,
                },
            ],
            type: "article",
            siteName: "Modern Art Gallery",
        },
        twitter: {
            card: "summary_large_image",
            title: `${event.title} (Portfolio Mockup)`,
            description: `Mockup page – Not a real site, for developer portfolio only. ${event.heading}`,
            images: [imageUrl],
        },
    };
}

export default async function EventPage(props: {
    params: Promise<{ id: string }>;
}) {
    const params = await props.params;
    const event = await getEventById(params.id);

    if (!event) {
        return (
            <div className="p-4 space-y-6">
                <h1 className="text-xl">Event not found</h1>
                <Link
                    href="/event-calendar"
                    className=" px-4 py-2 bg-black text-white rounded"
                >
                    Return to Calendar
                </Link>
            </div>
        );
    }

    const formattedDate = formatEventDate(event.date.seconds);

    return (
        <>
            <main role="main" aria-labelledby="event-title" className="pb-28">
                <section aria-label="Event header image and title">
                    <div className="grid grid-cols-6">
                        <div className="col-start-1 row-start-1 z-50">
                            <ButtonBackToCalendar aria-label="Return to event calendar" />
                        </div>
                        <div
                            className="relative w-full aspect-square md:aspect-[4/2] col-start-1 col-end-7 row-start-1"
                            role="img"
                            aria-label={`Image for ${event.title}`}
                        >
                            <Image
                                src={getCldImageUrl({
                                    src: event.img,
                                })}
                                alt={`Featured image for ${event.title}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div
                            className="row-start-1 col-start-4 col-end-7 z-50 text-light flex flex-col items-end p-2"
                            aria-labelledby="event-title event-date"
                        >
                            <h2
                                id="event-title"
                                className="max-w-max uppercase text-header-tiny md:text-header-s font-bold"
                            >
                                {event.title}
                            </h2>
                            <time
                                id="event-date"
                                dateTime={new Date(
                                    event.date.seconds * 1000
                                ).toISOString()}
                                className="max-w-max text-p-tiny md:text-p-m font-light"
                            >
                                {formattedDate}
                            </time>
                        </div>
                    </div>
                </section>
                <section className="p-4 md:p-8" aria-label="Event details">
                    <h1 className="text-header-s leading-s mt-6 uppercase">
                        {event.heading}
                    </h1>
                    <p className="text-p-s leading-body-s md:text-p-m md:leading-body-m font-light mt-6">
                        {event.description}
                    </p>
                    <div className="mt-8">
                        <TicketModal
                            eventId={event.id}
                            eventTitle={event.title}
                            eventDate={formattedDate}
                        />
                    </div>
                </section>
            </main>
            <Footer bgColor="black" />
        </>
    );
}
