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
};

const TicketModal = ({ eventId, eventTitle }: EventProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { ticket, resetTicket } = useTicketStore();
    const ticketId = ticket.ticketId;

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        if (!open) {
            resetTicket();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger>
                <ButtonTicket />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Buy ticket for {eventTitle}</DialogTitle>
                    <DialogDescription>
                        <span className="block">Date: </span>
                        <span className="mt-4 block"></span>
                    </DialogDescription>
                </DialogHeader>

                {/* Only render the form when the dialog is open */}
                {isOpen && ticketId === null ? (
                    <TicketForm eventId={eventId} />
                ) : (
                    <TicketConformation />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default TicketModal;
