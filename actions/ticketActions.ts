"use server";

import { z } from "zod";
import { ticketSchema } from "../app/event-calendar/[id]/[title]/ticket/ticketSchema";

export type TicketFormData = z.infer<typeof ticketSchema>;

export async function createTicket(data: TicketFormData) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/tickets`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            return {
                success: false,
                message: errorData.message || "Failed to create ticket",
                errors: errorData.errors,
            };
        }

        return response.json();
    } catch (error) {
        console.error("Ticket creation error:", error);
        return {
            success: false,
            message: "An unexpected error occurred",
        };
    }
}
