import { EventInterface, MonthGroup } from "@/types/types";

export const groupEventsByMonth = (
    events: EventInterface[]
): Record<string, MonthGroup> => {
    return events.reduce<Record<string, MonthGroup>>((grouped, event) => {
        const eventDate = new Date(event.date.seconds * 1000);

        const monthName = eventDate.toLocaleString("default", {
            month: "long",
        });
        const day = eventDate.toLocaleString("default", { day: "numeric" });
        const formattedDay = `${day}`;
        const formattedTime = eventDate.toLocaleString("default", {
            hour: "2-digit",
            minute: "2-digit",
        });

        if (!grouped[monthName]) {
            grouped[monthName] = {
                month: monthName,
                events: [],
            };
        }

        grouped[monthName].events.push({
            ...event,
            formattedDay,
            formattedTime,
        });

        return grouped;
    }, {});
};
