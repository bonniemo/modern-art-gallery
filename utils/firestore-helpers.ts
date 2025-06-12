import { FirestoreTimestamp } from "@/types/types";

export const convertTimestamps = (data: any) => {
    const converted = { ...data };

    for (const [key, value] of Object.entries(data)) {
        if (value && typeof value === "object" && "_seconds" in value) {
            const timestamp = value as FirestoreTimestamp;
            converted[key] = new Date(timestamp._seconds * 1000).toISOString();
        }
    }
    return converted;
};
