import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { searchAndFilterModalActions } from "@/slices/searchAndFilterSlice";
import { motion } from "framer-motion";
import React from "react";
import Filters from "./Filters";
import { useMediaQuery } from "react-responsive";

const FilterModal = () => {
    const dispatch = useAppDispatch();

    const { filters } = useAppSelector((state) => state.searchAndFilter);

    const isMobile = useMediaQuery({ maxWidth: 650 });

    const onCloseFilterModalHandler = (e: any) => {
        if (e.target.dataset.close) {
            dispatch(searchAndFilterModalActions.toggleFilterModal(false));
            return;
        }
    };

    const totalFilters =
        filters.length > 0
            ? filters.map((filterItem: any) => filterItem.filters).flat().length
            : 0;

    const initialAnimation = isMobile
        ? { opacity: 0, y: "100%" }
        : { opacity: 0, x: "100%" };

    const animate = isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

    const submitResultHandler = () => {
        dispatch(searchAndFilterModalActions.toggleFilterModal(false));
    };

    return (
        <motion.div
            className="bg-[rgba(0,0,0,0.5)] w-full fixed top-0 right-0 left-0 bottom-0 h-screen flex justify-end z-[180] cursor-pointer "
            data-close="true"
            onClick={onCloseFilterModalHandler}
            initial={initialAnimation}
            animate={animate}
            exit={initialAnimation}
            transition={{ duration: 0.2, ease: "easeIn" }}
        >
            <div className="w-[35%] 2xl:w-[40%] lg:w-[50%] md:w-[60%] smd:w-[65%] sm:w-full sm:h-[80vh] sm:mt-auto sm:rounded-tl-[1.2rem] sm:rounded-tr-[1.2rem] bg-color-white-1 cursor-default flex flex-col font-outfit shadow-sort-event">
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
                        onClick={submitResultHandler}
                    >
                        <p>view results</p>
                        {totalFilters ? (
                            <p className="ml-[0.5rem]">({totalFilters})</p>
                        ) : null}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default FilterModal;
