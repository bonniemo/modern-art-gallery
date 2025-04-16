import Image from "next/image";
import Link from "next/link";
import creativeWAna from "../../public/event-calendar/creative-w-ana.png";

const EventCalendar = () => {
    return (
        <section className="px-4">
            {/* section for month */}
            <section>
                <h3 className="text-header-m font-black uppercase">April</h3>
                <h4 className="text-header-s font-black mt-12 uppercase">
                    8th
                </h4>

                {/* event card */}
                <section className="w-full shadow-xl md:grid md:grid-cols-3 border border-gray-400 mt-6 p-4">
                    <div className="relative w-full aspect-[1/1]">
                        <Image
                            src={creativeWAna}
                            alt="Creative with Ana"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="px-2 md:px-6 md:mt-0 md:col-start-2 col-end-4">
                        <h5 className="text-header-xs md:text-header-s font-black">
                            Get creative with Aná
                        </h5>
                        <p className="text-p-s text-gray font-light">
                            8th of april, 7pm
                        </p>
                        <p className="text-p-s leading-body-s my-6 overflow-hidden text-ellipsis line-clamp-3">
                            Where community and creativity come together over
                            exceptional coffee. Where community and creativity
                            come together over exceptional coffee. Where
                            community and creativity come together over
                            exceptional coffee. Where community and creativity
                            come together over exceptional coffee.
                        </p>
                        <Link href="#" className="text-p-s text-gray underline">
                            Read more
                        </Link>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default EventCalendar;
