"use client";
import qrPlaceholder from "@/public/event-calendar/qr-placeholder.png";
import { useTicketStore } from "@/stores/useTicketStore";
import Image from "next/image";

const TicketDesign = () => {
    const ticketDetails = useTicketStore((state) => state.ticketDetails);
    return (
        <section className="uppercase border border-black mt-8">
            <header className="bg-dark text-light px-4 py-8 flex justify-between items-center">
                <h2 className="text-header-xs">The gallery café</h2>
                <h4>Event ticket</h4>
            </header>
            <section className="flex justify-between px-2 mt-8">
                <ul className="flex flex-col justify-center text-base">
                    <li>
                        <span className="font-bold">Event name: </span>
                        {ticketDetails.eventTitle}
                    </li>
                    <li>
                        <span className="font-bold">Date: </span>
                        {ticketDetails.eventDate}
                    </li>
                    <li>
                        <span className="font-bold">Ticket Id: </span>
                        {ticketDetails.ticketId}
                    </li>
                </ul>
                <Image
                    src={qrPlaceholder}
                    alt="qr-code"
                    width={120}
                    height={64}
                />
            </section>
            <address className="mt-8 text-sm px-2 pb-2">
                99 King Street, Newport, USA
            </address>
        </section>
    );
};

export default TicketDesign;
