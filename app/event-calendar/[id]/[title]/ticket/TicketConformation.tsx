"use client";
import { useTicketStore } from "@/stores/useTicketStore";

const TicketConformation = () => {
    const { ticket } = useTicketStore();
    return (
        <section>
            <h2>Thank You for Your Purchase!</h2>
            <p>
                We're looking forward to seeing you at {ticket.eventTitle} on
                [Event Date] at [Event Time]. Your ticket has been confirmed and
                a copy has been sent to your email. Please bring either a
                printed copy or show the digital version on your phone when you
                arrive at The Gallery Café. If you have any questions or need to
                make changes to your booking, please contact us at
                events@thegallerycafe.com. See you soon!
            </p>
            <p>Ticket id: {ticket.ticketId}</p>
        </section>
    );
};

export default TicketConformation;
