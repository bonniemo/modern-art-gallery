"use server";

import { EventInterface } from "@/types/types";

export async function getEvents(): Promise<EventInterface[]> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch events");
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
}

export async function getEventById(id: string): Promise<EventInterface | null> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/events?id=${id}`
        );

        if (response.status === 404) {
            return null;
        }

        if (!response.ok) {
            throw new Error("Failed to fetch event");
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching event:", error);
        throw error;
    }
}
