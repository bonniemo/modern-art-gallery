import { formatEventDate } from "@/utils/dateFormatting";
import { slugify } from "@/utils/slugify";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { EventInterface } from "../../types/types";

type EventCardProp = {
    event: EventInterface;
};

const EventCard = ({ event }: EventCardProp) => {
    return (
        <section className="w-full shadow-xl md:grid md:grid-cols-3 border border-gray-400 hover:border-black mt-6 p-4">
            <Link
                href={`/event-calendar/${event.id}/${slugify(event.title)}`}
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
                        {formatEventDate(event.date.seconds)}
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
    );
};

export default EventCard;
