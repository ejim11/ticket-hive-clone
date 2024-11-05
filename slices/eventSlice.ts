import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "event",
    initialState: {
        events: [],
        isLoading: false,
    },
    reducers: {
        setEvents(state: any, action) {
            state.events = [...action.payload];

            localStorage.setItem("events", JSON.stringify(action.payload));
        },
        toggleIsLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const eventsActions = eventSlice.actions;
export default eventSlice;
