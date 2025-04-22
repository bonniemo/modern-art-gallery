export interface Event {
    id: string;
    date: { seconds: number };
    title: string;
    description: string;
    heading: string;
    img: string;
}

export interface FormattedEvent extends Event {
    formattedDay: string;
    formattedTime: string;
}

export interface MonthGroup {
    month: string;
    events: FormattedEvent[];
}
