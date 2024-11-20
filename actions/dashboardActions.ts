import {
  createEvent,
  getDashboardEvents,
  getDashboardTickets,
  getUpcomingEvents,
} from "@/services/dashboardServices";
import { dashboardActions } from "@/slices/dashboardSlice";

export const getDashboardTicketsDispatch =
  (accessToken: string, month?: string) => async (dispatch: Function) => {
    dispatch(dashboardActions.setIsLoading(true));
    try {
      const res: any = await getDashboardTickets(accessToken, month);

      // console.log(res);

      dispatch(dashboardActions.setDashboardTickets(res.data.data.data));
      dispatch(dashboardActions.setIsLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(dashboardActions.setIsLoading(false));
    }
  };

export const getDashboardEventsDispatch =
  (id: number, month?: string) => async (dispatch: Function) => {
    dispatch(dashboardActions.setIsLoading(true));
    try {
      const res: any = await getDashboardEvents(id, month);

      console.log(res);

      dispatch(dashboardActions.setDashboardEvents(res.data.data.data));
      dispatch(dashboardActions.setIsLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(dashboardActions.setIsLoading(false));
    }
  };

export const createEventDispatch =
  (
    token: string,
    data: any,
    setIsLoading: Function,
    toastSuccess: any,
    toastError: any,
    iconSuccess: any,
    iconError: any,
    closeModal: Function
  ) =>
  async (dispatch: Function) => {
    setIsLoading(true);
    try {
      const res = await createEvent(token, data);

      const { event } = res.data.data;
      dispatch(dashboardActions.addEvent(event));
      toastSuccess("Successfully created", iconSuccess);
      setIsLoading(false);
      closeModal();
    } catch (error) {
      console.log(error);
      toastError("Failed to create event, try again!", iconError);
      setIsLoading(false);
    }
  };

export const getUpcomingEventsDispatch =
  (setUpcomingEvents: Function) => async () => {
    try {
      const res = await getUpcomingEvents();
      const events = res.data.data.data;
      const eventsNames =
        events.length > 0 ? events.map((event: any) => event.name) : [];
      setUpcomingEvents(eventsNames);
      console.log(eventsNames);
    } catch (error) {
      console.log(error);
    }
  };
