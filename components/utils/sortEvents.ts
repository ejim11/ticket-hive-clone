export const sortEvents = (events: any[], sortBy: string) => {
    let sortedArray;

    if (events.length === 0) return;

    if (sortBy === "upcoming-events") {
        sortedArray = events.slice().sort((a, b) => {
            const dateA = new Date(a.eventStartDate);
            const dateB = new Date(b.eventStartDate);
            return dateA.getTime() - dateB.getTime();
        });
    }

    if (
        sortBy === "price-:-(low-to-high)" ||
        sortBy === "price-:-(high-to-low)"
    ) {
        sortedArray = events.slice().sort((a, b) => {
            const eventTicketsA = a.tickets
                .slice()
                .sort((x: any, y: any) => x.price - y.price)[0];

            const eventTicketsB = b.tickets
                .slice()
                .sort((x: any, y: any) => x.price - y.price)[0];

            return sortBy === "price-:-(low-to-high)"
                ? eventTicketsA.price - eventTicketsB.price
                : eventTicketsB.price - eventTicketsA.price;
        });
    }

    return sortedArray;
};
