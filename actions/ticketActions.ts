"use server";
import { adminDb } from "@/firebase/admin-config";
import { sendTicketEmail } from "@/services/emailService";
import { z } from "zod";
import { ticketSchema } from "../app/event-calendar/[id]/[title]/ticket/ticketSchema";

export type TicketFormData = z.infer<typeof ticketSchema>;

export async function createTicket(data: TicketFormData) {
    try {
        const validatedData = ticketSchema.parse(data);

        const ticket = {
            ...validatedData,
            purchaseDate: new Date().toISOString(),
        };

        const docRef = await adminDb.collection("tickets").add(ticket);

        const emailResult = await sendTicketEmail({
            userEmail: validatedData.email,
            eventTitle: validatedData.eventTitle,
            eventDate: validatedData.eventDate,
            ticketId: docRef.id,
        });

        return {
            success: true,
            ticketId: docRef.id,
            emailSent: emailResult.success,
            timestamp: new Date().toISOString(),
        };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.errors.map((e) => ({
                    path: e.path.join("."),
                    message: e.message,
                })),
            };
        }

        return {
            success: false,
            message: "Failed to create ticket. Please try again.",
        };
    }
}
