import { create } from "zustand";

type TicketDetails = {
    ticketId: string | null;
    name: string;
    email: string;
    eventId: string;
    eventTitle: string;
    eventDate: string;
};

type TicketStore = {
    ticketDetails: TicketDetails;
    setTicketDetails: (data: Partial<TicketDetails>) => void;
    resetTicketDetails: () => void;
};

export const useTicketStore = create<TicketStore>((set) => ({
    ticketDetails: {
        ticketId: null,
        name: "",
        email: "",
        eventId: "",
        eventTitle: "",
        eventDate: "",
    },
    setTicketDetails: (data) =>
        set((state) => ({
            ticketDetails: {
                ...state.ticketDetails,
                ...data,
            },
        })),
    resetTicketDetails: () =>
        set(() => ({
            ticketDetails: {
                ticketId: null,
                name: "",
                email: "",
                eventId: "",
                eventTitle: "",
                eventDate: "",
            },
        })),
}));
