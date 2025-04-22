"use server";

import { adminDb } from "@/firebase/admin-config";
import { Event } from "@/types/types";

export async function getEvents() {
    try {
        const eventsRef = adminDb.collection("event-calendar");
        const snapshot = await eventsRef.get();

        const events = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return events;
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
}

export async function getEventById(id: string): Promise<Event | null> {
    try {
        const eventRef = adminDb.collection("event-calendar").doc(id);
        const eventSnap = await eventRef.get();

        if (!eventSnap.exists) {
            return null;
        }

        const eventData = eventSnap.data();
        return {
            id: eventSnap.id,
            ...eventData,
        } as Event;
    } catch (error) {
        console.error("Error fetching event:", error);
        throw error;
    }
}
