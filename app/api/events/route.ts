import { adminDb } from "@/firebase/admin-config";
import { convertTimestamps } from "@/utils/firestore-helpers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (id) {
            const eventRef = adminDb.collection("event-calendar").doc(id);
            const eventSnap = await eventRef.get();

            if (!eventSnap.exists) {
                return NextResponse.json(
                    { error: "Event not found" },
                    { status: 404 }
                );
            }

            const eventData = eventSnap.data();
            return NextResponse.json({
                id: eventSnap.id,
                ...convertTimestamps(eventData),
            });
        }

        const eventsRef = adminDb.collection("event-calendar");
        const snapshot = await eventsRef.get();
        const events = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...convertTimestamps(doc.data()),
        }));

        return NextResponse.json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        return NextResponse.json(
            { error: "Failed to fetch events" },
            { status: 500 }
        );
    }
}
