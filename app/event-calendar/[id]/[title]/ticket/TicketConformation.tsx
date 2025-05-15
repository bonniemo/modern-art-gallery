"use client";
import { useTicketStore } from "@/stores/useTicketStore";

const TicketConformation = () => {
    const ticketDetails = useTicketStore((state) => state.ticketDetails);
    return (
        <section>
            <p>
                Please bring either a printed copy or show the digital version
                on your phone when you arrive at The Gallery Café. If you have
                any questions or need to make changes to your booking, please
                contact us at events@thegallerycafe.com. See you soon!
            </p>
        </section>
    );
};

export default TicketConformation;
