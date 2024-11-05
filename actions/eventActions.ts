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
            console.log(res);
            const { authorization_url } = res.data.data.data;
            reset(authorization_url);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            toastError("Failed to pay for event", iconError);
            setIsLoading(false);
        }
    };
