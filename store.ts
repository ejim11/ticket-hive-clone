import { configureStore } from "@reduxjs/toolkit";
import searchAndFilterSlice from "./slices/searchAndFilterSlice";
import createNewEventSlice from "./slices/createNewEventSlice";
import dashboardHeaderSlice from "./slices/dashboardHeaderSlice";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import eventSlice from "./slices/eventSlice";
import searchSlice from "./slices/searchSlice";
import dashboardSlice from "./slices/dashboardSlice";

const store = configureStore({
    reducer: {
        searchAndFilter: searchAndFilterSlice.reducer,
        createNewEvent: createNewEventSlice.reducer,
        dashboardHeader: dashboardHeaderSlice.reducer,
        user: userSlice.reducer,
        auth: authSlice.reducer,
        event: eventSlice.reducer,
        search: searchSlice.reducer,
        dashboard: dashboardSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
