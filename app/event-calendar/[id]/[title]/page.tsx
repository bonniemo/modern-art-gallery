import { getEventById } from "@/actions/actions";
import { formatEventDate } from "@/utils/dateFormatting";
import { Metadata } from "next";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import ButtonBackToCalendar from "../../ButtonBackToCalendar";
import ButtonTicket from "../../ButtonTicket";

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
            <div className="p-4">
                <h1>Event not found</h1>
                <Link
                    href="/event-cLinklendar"
                    className="mt-4 px-4 py-2 bg-black text-white rounded"
                >
                    Return to Calendar
                </Link>
            </div>
        );
    }

    const formattedDate = formatEventDate(event.date.seconds);

    return (
        <section>
            <section className="grid grid-cols-6">
                <div className="col-start-1 row-start-1 z-50">
                    <ButtonBackToCalendar />
                </div>
                <div className="relative w-full aspect-[4/2] col-start-1 col-end-7 row-start-1">
                    <Image
                        src={getCldImageUrl({
                            src: event.img,
                        })}
                        alt={event.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="row-start-1 col-start-4 col-end-7 z-50 text-light flex flex-col items-end p-2">
                    <h2 className="max-w-max uppercase text-header-tiny md:text-header-s font-bold">
                        {event.title}
                    </h2>
                    <p className="max-w-max text-p-tiny md:text-p-m font-light">
                        {formattedDate}
                    </p>
                </div>
            </section>
            <section className="p-4 md:p-8">
                <h1 className="text-header-s leading-s mt-6 uppercase">
                    {event.heading}
                </h1>
                <p className="text-p-s leading-body-s md:text-p-m md:leading-body-m font-light mt-6">
                    {event.description}
                </p>
                <div className="mt-8">
                    <ButtonTicket />
                </div>
            </section>
        </section>
    );
}
