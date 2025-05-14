"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import ButtonTicket from "./ButtonTicket";
import TicketForm from "./TicketForm";

type EventProps = {
    eventId: string;
    eventTitle: string;
};

const TicketModal = ({ eventId, eventTitle }: EventProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
                {isOpen && <TicketForm eventId={eventId} />}
            </DialogContent>
        </Dialog>
    );
};

export default TicketModal;
