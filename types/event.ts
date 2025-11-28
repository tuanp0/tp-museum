export interface EventBlockInterface {
    title: string;
    events: EventsInterface[]
}
export interface EventsInterface {
    dateStart: string;
    dateEnd: string;
    place: string;
    eventName: string;
    eventDesc: string;
    link: string;
}