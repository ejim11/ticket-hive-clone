import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        isLoading: true,
        firstname: "",
        lastname: "",
        id: "",
        email: "",
        events: [],
        tickets: [],
    },
    reducers: {
        setDashboardUserDetails(state, action) {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.id = action.payload.id;
            state.email = action.payload.email;
            localStorage.setItem(
                "dashboardItems",
                JSON.stringify(action.payload)
            );
        },
        setDashboardEvents(state, action) {
            state.events = action.payload;
        },
        setDashboardTickets(state, action) {
            state.tickets = action.payload;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        addEvent(state: any, action: { payload: any }) {
            state.events = [action.payload, ...state.events];
        },
    },
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;
