import { create } from "zustand";

type TicketDetails = {
    ticketId: string | null;
    name: string;
    email: string;
    eventId: string;
    eventTitle: string;
};

type TicketStore = {
    ticket: TicketDetails;
    setTicket: (data: Partial<TicketDetails>) => void;
    resetTicket: () => void;
};

export const useTicketStore = create<TicketStore>((set) => ({
    ticket: {
        ticketId: null,
        name: "",
        email: "",
        eventId: "",
        eventTitle: "",
    },
    setTicket: (data) =>
        set((state) => ({
            ticket: {
                ...state.ticket,
                ...data,
            },
        })),
    resetTicket: () =>
        set(() => ({
            ticket: {
                ticketId: null,
                name: "",
                email: "",
                eventId: "",
                eventTitle: "",
            },
        })),
}));
