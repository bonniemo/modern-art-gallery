export interface EventInterface {
    id: string;
    date: string;
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

export interface FirestoreTimestamp {
    _seconds: number;
    _nanoseconds: number;
}
