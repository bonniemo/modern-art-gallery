"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useTicketStore } from "@/stores/useTicketStore";
import { useState } from "react";
import ButtonTicket from "./ButtonTicket";
import TicketConformation from "./TicketConformation";
import TicketForm from "./TicketForm";

type EventProps = {
    eventId: string;
    eventTitle: string;
    eventDate: string;
};

const TicketModal = ({ eventId, eventTitle, eventDate }: EventProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const ticketId = useTicketStore((state) => state.ticketDetails.ticketId);
    const resetTicketDetails = useTicketStore(
        (state) => state.resetTicketDetails
    );
    const setTicketDetails = useTicketStore((state) => state.setTicketDetails);
    const ticketDetails = useTicketStore((state) => state.ticketDetails);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        setTicketDetails({
            eventId: eventId,
            eventTitle: eventTitle,
            eventDate: eventDate,
        });
        if (!open) {
            resetTicketDetails();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger>
                <ButtonTicket />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {ticketId === null ? (
                            <>
                                <span className="block mt-6 text-header-xs">
                                    Tickets for {eventTitle}
                                </span>
                                <span className="block mt-1 text-gray text-sm font-outfit font-medium">
                                    Date: {eventDate}
                                </span>
                            </>
                        ) : (
                            <span className="block mt-6 text-header-xs">
                                Thank You for Your Purchase!
                            </span>
                        )}
                    </DialogTitle>
                    <DialogDescription>
                        {ticketId === null ? (
                            <span>
                                Fill out the form below to reserve your ticket
                                for this event. Payment instructions will be
                                included in your confirmation email.
                            </span>
                        ) : (
                            <span>
                                Your ticket has been successfully reserved. A
                                confirmation email with payment details has been
                                sent to {ticketDetails.email}.
                            </span>
                        )}
                    </DialogDescription>
                </DialogHeader>

                {ticketId === null ? <TicketForm /> : <TicketConformation />}
            </DialogContent>
        </Dialog>
    );
};

export default TicketModal;
