import { createSlice } from "@reduxjs/toolkit";

const searchAndFilterSlice = createSlice({
    name: "searchAndFilter",
    initialState: {
        searchModalIsVisible: false,
        filterModalIsVisible: false,
        filters: [],
    },
    reducers: {
        toggleSearchModal: (state, action) => {
            state.searchModalIsVisible = action.payload;
        },
        toggleFilterModal: (state, action) => {
            state.filterModalIsVisible = action.payload;
        },
        modifyFilters: (state: any, action: { payload: any }) => {
            // obj to be used as a filter
            const item = action.payload;

            // check if a filter item in obj has been selected, if it has, find the index
            const existingItemIndex = state.filters.findIndex(
                (filterItem: any) => filterItem.title === item.title
            );

            // get the filter obj
            const existingItem = state.filters[existingItemIndex];

            if (existingItem) {
                // if the filter obj exists, then check whether the filter item is selected
                const existingFilterItemIndex = state.filters[
                    existingItemIndex
                ].filters.findIndex((filter: any) => filter === item.filter);

                const existingFilterItem =
                    state.filters[existingItemIndex].filters[
                        existingFilterItemIndex
                    ];

                if (existingFilterItem) {
                    // if the filter item is selected,  filter it out
                    const filteredFilterItems = state.filters[
                        existingItemIndex
                    ].filters.filter(
                        (ftItem: string) => ftItem !== item.filter
                    );

                    // if all the filter items have been filtered out then remove the filter obj
                    if (filteredFilterItems.length <= 0) {
                        state.filters = state.filters.filter(
                            (filterObj: any) => filterObj.title !== item.title
                        );
                    } else {
                        // else add the filtered items back to its filter obj
                        state.filters[existingItemIndex].filters =
                            filteredFilterItems;
                    }
                } else {
                    // add the the filter item to the filter obj if it does not exist
                    state.filters[existingItemIndex] = {
                        title: state.filters[existingItemIndex].title,
                        filters: [
                            ...state.filters[existingItemIndex].filters,
                            item.filter,
                        ],
                    };
                }
            } else {
                // if filter obj does not exist, add it
                state.filters = [
                    ...state.filters,
                    { title: item.title, filters: [item.filter] },
                ];
            }
        },
    },
});

export const searchAndFilterModalActions = searchAndFilterSlice.actions;

export default searchAndFilterSlice;
