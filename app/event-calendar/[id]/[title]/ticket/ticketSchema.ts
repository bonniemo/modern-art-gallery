import { z } from "zod";

export const ticketSchema = z.object({
    eventId: z.string(),
    eventTitle: z.string(),
    eventDate: z.string(),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    street: z.string().min(2, {
        message: "Street address must be at least 2 characters.",
    }),
    city: z.string().min(2, {
        message: "City must be at least 2 characters.",
    }),
    postalCode: z.string().min(4, {
        message: "Postal code must be at least 4 characters.",
    }),
    country: z.string().min(2, {
        message: "Country must be at least 2 characters.",
    }),
});
