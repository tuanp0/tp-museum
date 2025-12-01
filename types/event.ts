export interface EventsInterface {
    title: string;
    images: EventImageInterface[];
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

export interface EventImageInterface {
    src: string;
    alt: string;
    width: number,
    height: number,
    author: string;
}