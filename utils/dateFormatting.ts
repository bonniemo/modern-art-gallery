export function formatEventDate(seconds: number): string {
    const date = new Date(seconds * 1000);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const time = date.toLocaleString("default", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const suffix = getDaySuffix(day);

    return `${day}${suffix} of ${month}, ${time}`;
}

function getDaySuffix(day: number): string {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
