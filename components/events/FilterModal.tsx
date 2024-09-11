import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { searchAndFilterModalActions } from "@/slices/searchAndFilterSlice";
import { motion } from "framer-motion";
import React from "react";
import Filters from "./Filters";

const FilterModal = () => {
    const dispatch = useAppDispatch();

    const { filters } = useAppSelector((state) => state.searchAndFilter);

    const onCloseFilterModalHandler = (e: any) => {
        if (e.target.dataset.close) {
            dispatch(searchAndFilterModalActions.toggleFilterModal(false));
        }
        console.log(e.target.dataset.close);
    };

    const totalFilters =
        filters.length > 0
            ? filters.map((filterItem: any) => filterItem.filters).flat().length
            : 0;

    return (
        <motion.div
            className="bg-[rgba(0,0,0,0.5)] w-full fixed top-0 right-0 left-0 bottom-0 h-screen flex justify-end z-[80] cursor-pointer "
            data-close="true"
            onClick={onCloseFilterModalHandler}
        >
            <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="w-[35%] bg-color-white-1 cursor-default flex flex-col font-outfit shadow-sort-event"
            >
                <p className="w-full  p-[2rem] border-b border-b-[rgba(224,225,230,1)] text-[2.8rem] font-medium">
                    Filters
                </p>
                <div className="flex-1 overflow-y-auto filter-scroll">
                    <Filters />
                </div>
                <div className="w-full bg-color-grey-2 flex px-[2rem] py-[2.5rem]">
                    <button
                        type="button"
                        className="bg-color-purple-1 text-color-white-1 w-full text-[1.8rem] font-medium uppercase py-[2.4rem] rounded-[0.6rem] flex items-center justify-center"
                    >
                        <p>view results</p>
                        {totalFilters ? (
                            <p className="ml-[0.5rem]">({totalFilters})</p>
                        ) : null}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FilterModal;
