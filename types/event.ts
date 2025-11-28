export interface EventsInterface {
    title: string;
    events: EventItemInterface[];
}
export interface EventItemInterface {
    dateStart: string;
    dateEnd: string;
    place: string;
    eventName: string;
    eventDesc: string;
    link: string;
}