import { sortEvents } from "@/components/utils/sortEvents";
import { getAllEvents, payForEvent } from "@/services/eventService";
import { eventsActions } from "@/slices/eventSlice";
import { ReactNode } from "react";

export const getAllEventsDispatch =
    (sort?: string) => async (dispatch: Function) => {
        dispatch(eventsActions.toggleIsLoading(true));
        try {
            const res = await getAllEvents();

            const ev = res.data.data.data;

            const events = sort ? sortEvents(ev, sort) : res.data.data.data;

            dispatch(eventsActions.setEvents(events));
            dispatch(eventsActions.toggleIsLoading(false));
        } catch (error) {
            dispatch(eventsActions.toggleIsLoading(false));
        }
    };

export const payForEventDispatch =
    (
        data: { eventId: number; ticketTypes: any[] },
        token: string,
        setIsLoading: Function,
        toastSuccess: any,
        toastError: any,
        iconSuccess: ReactNode,
        iconError: ReactNode,
        reset: Function
    ) =>
    async () => {
        setIsLoading(true);
        try {
            const res = await payForEvent(data, token);

            if (res.data.data.message === "Authorization URL created") {
                const { authorization_url } = res.data.data.data;
                reset(authorization_url);
            }

            if (res.data.data.message === "Tickets bought successfully") {
                reset(`/events/${data.eventId}/get-ticket?bought=yes`);
            }

            setIsLoading(false);
        } catch (error: any) {
            console.error(error);
            if (
                error.response.data.error &&
                error.response.data.error.includes("no more")
            ) {
                toastError(error.response.data.error, iconError);
                return;
            }
            toastError("Failed to pay for event", iconError);
            setIsLoading(false);
        }
    };
