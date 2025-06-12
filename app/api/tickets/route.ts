import { ticketSchema } from "@/app/event-calendar/[id]/[title]/ticket/ticketSchema";
import { adminDb } from "@/firebase/admin-config";
import { sendTicketEmail } from "@/services/emailService";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = ticketSchema.parse(body);

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

        return NextResponse.json(
            {
                success: true,
                ticketId: docRef.id,
                emailSent: emailResult.success,
            },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    errors: error.errors,
                },
                { status: 400 }
            );
        }

        console.error("Ticket creation error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to create ticket. Please try again.",
            },
            { status: 500 }
        );
    }
}
