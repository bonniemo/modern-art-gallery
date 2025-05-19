"use server";
import { adminDb } from "@/firebase/admin-config";
import { sendTicketEmail } from "@/services/emailService";
import { z } from "zod";
import { ticketSchema } from "../app/event-calendar/[id]/[title]/ticket/ticketSchema";

export type TicketFormData = z.infer<typeof ticketSchema>;

export async function createTicket(data: TicketFormData) {
    console.log("Server received ticket data:", data);

    try {
        const validatedData = ticketSchema.parse(data);

        const ticket = {
            ...validatedData,
            purchaseDate: new Date(),
        };

        console.log("Attempting to save ticket to database:", ticket);
        const docRef = await adminDb.collection("tickets").add(ticket);
        console.log("Ticket saved with ID:", docRef.id);

        const emailResult = await sendTicketEmail({
            userEmail: validatedData.email,
            eventTitle: validatedData.eventTitle,
            eventDate: validatedData.eventDate,
            ticketId: docRef.id,
        });

        if (!emailResult.success) {
            console.warn(
                "Ticket created but email failed to send:",
                emailResult.error
            );
        }

        return {
            success: true,
            ticketId: docRef.id,
        };
    } catch (error) {
        console.error("Failed to create ticket:", error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.errors,
            };
        }

        return {
            success: false,
            message: "Failed to create ticket. Please try again.",
        };
    }
}
