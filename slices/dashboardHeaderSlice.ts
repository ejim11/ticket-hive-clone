import { createSlice } from "@reduxjs/toolkit";

const dashboardHeaderSlice = createSlice({
    name: "dashboardHeader",
    initialState: {
        isVisible: false,
    },
    reducers: {
        setDashboardVisibility: (state, action: { payload: boolean }) => {
            state.isVisible = action.payload;
        },
    },
});

export const dashboardHeaderActions = dashboardHeaderSlice.actions;

export default dashboardHeaderSlice;
