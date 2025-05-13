import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { EventInterface } from "@/types/types";
import { formatEventDate } from "@/utils/dateFormatting";
import ButtonTicket from "./ButtonTicket";

type EventProps = {
    event: EventInterface;
};

const TicketModal = ({ event }: EventProps) => {
    const formattedDate = formatEventDate(event.date.seconds);
    return (
        <Dialog>
            <DialogTrigger>
                <ButtonTicket />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Buy ticket for {event.title}</DialogTitle>
                    <DialogDescription>
                        <span className="block">Date: {formattedDate}</span>
                        <span className="mt-4 block">Form</span>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default TicketModal;
