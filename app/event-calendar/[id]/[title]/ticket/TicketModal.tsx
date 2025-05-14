"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ButtonTicket from "./ButtonTicket";
import TicketForm from "./TicketForm";

type EventProps = {
    event: string;
};

const TicketModal = ({ event }: EventProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
                <ButtonTicket />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Buy ticket for {event}</DialogTitle>
                    <DialogDescription>
                        <span className="block">Date: </span>
                        <span className="mt-4 block"></span>
                    </DialogDescription>
                </DialogHeader>

                {/* Only render the form when the dialog is open */}
                {isOpen && <TicketForm onSuccess={() => setIsOpen(false)} />}
            </DialogContent>
        </Dialog>
    );
};

export default TicketModal;
