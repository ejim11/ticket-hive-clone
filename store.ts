import { configureStore } from "@reduxjs/toolkit";
import searchAndFilterSlice from "./slices/searchAndFilterSlice";
import createNewEventSlice from "./slices/createNewEventSlice";
import dashboardHeaderSlice from "./slices/dashboardHeaderSlice";

const store = configureStore({
    reducer: {
        searchAndFilter: searchAndFilterSlice.reducer,
        createNewEvent: createNewEventSlice.reducer,
        dashboardHeader: dashboardHeaderSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
