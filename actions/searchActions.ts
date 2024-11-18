import { sortEvents } from "@/components/utils/sortEvents";
import { searchForEvent } from "@/services/searchService";
import { eventsActions } from "@/slices/eventSlice";

export const searchForEventDispatch =
    (
        eventName?: string,
        category?: string,
        date?: string,
        price?: string,
        attendance?: string,
        sort?: string,
        sortFunc?: Function
    ) =>
    async (dispatch: Function) => {
        dispatch(eventsActions.toggleIsLoading(true));
        try {
            const res = await searchForEvent(
                eventName,
                category,
                date,
                price,
                attendance
            );

            console.log(res);

            const ev = res.data.data.data;

            const events = sort ? sortEvents(ev, sort) : res.data.data.data;

            dispatch(eventsActions.setEvents(events));
            dispatch(eventsActions.toggleIsLoading(false));
        } catch (error) {
            console.log(error);
            dispatch(eventsActions.toggleIsLoading(false));
        }
    };
