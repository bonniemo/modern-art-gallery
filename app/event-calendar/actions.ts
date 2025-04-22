"use server";

import { adminDb } from "@/firebase/admin-config";

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
