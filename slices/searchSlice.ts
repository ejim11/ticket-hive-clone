import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchText: "",
        recentSearches: [],
    },
    reducers: {
        setSearchText(state, action) {
            state.searchText = action.payload;
        },
        setRecentSearches(state: any, action) {
            if (
                state.recentSearches.includes(action.payload) ||
                !action.payload
            ) {
                return;
            }

            state.recentSearches = [...state.recentSearches, action.payload];
        },
        removeRecentlySearchedText(state, action) {
            state.recentSearches = state.recentSearches.filter(
                (text) => text !== action.payload
            );
        },
    },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
