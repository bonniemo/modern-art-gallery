export interface EventInterface {
    id: string;
    date: { seconds: number };
    title: string;
    description: string;
    heading: string;
    img: string;
}

export interface FormattedEvent extends EventInterface {
    formattedDay: string;
    formattedTime: string;
}

export interface MonthGroup {
    month: string;
    events: FormattedEvent[];
}
