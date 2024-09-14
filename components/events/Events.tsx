import React, { useEffect, useState } from "react";
import { PiSlidersHorizontal } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import EventListItem from "../EventListItem";
import { eventsList } from "../utils/data";
import WhyTicketHive from "../WhyTicketHive";
import { AnimatePresence, motion } from "framer-motion";
import FilterModal from "./FilterModal";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { searchAndFilterModalActions } from "@/slices/searchAndFilterSlice";

const Events = () => {
    const dispatch = useAppDispatch();

    const [displaySortbyModal, setDisplaySortbyModal] =
        useState<boolean>(false);

    const sorts = [
        "Upcoming events",
        "Featured events",
        "Price : (Low to High)",
        "Price : (High to Low)",
    ];

    const { filterModalIsVisible } = useAppSelector(
        (state) => state.searchAndFilter
    );

    const toggleDisplaySortbyModalHandler = () => {
        setDisplaySortbyModal((prevState) => !prevState);
    };

    const onDisplayFilterModalHandler = () => {
        dispatch(searchAndFilterModalActions.toggleFilterModal(true));
    };

    useEffect(() => {
        window.scrollTo({ top: -90, behavior: "smooth" });
    }, []);

    return (
        <section className="font-outfit mt-[9rem]">
            <div className="flex justify-between smd:flex-col smd:items-start xlg:px-[3rem] sm:px-[2rem] px-[5rem] h-[9.4rem] smd:h-auto smd:py-[1.5rem] bg-[#F8F8F8] items-center  border-b border-t border-[rgba(224,225,230,1)]">
                <p className="text-[rgba(41,41,41,0.8)] text-[3.2rem] smd:text-[2.5rem] font-semibold smd:mb-[1.5rem]">
                    BROWSE EVENTS
                </p>
                <div className="flex items-center text-[rgba(34,34,34,0.6)] text-[1.8rem] smd:w-full">
                    <button
                        className="flex mr-[4rem] items-center hover:text-color-purple-1 transition-all duration-150 ease-in relative"
                        onClick={toggleDisplaySortbyModalHandler}
                    >
                        <p>Sort By</p>
                        <MdKeyboardArrowDown
                            className={`w-[2.4rem] h-[2.4rem] ml-[1rem] sm:ml-[0.5] text-color-current transition-all duration-150 ease-in ${
                                displaySortbyModal
                                    ? "rotate-[180deg]"
                                    : " rotate-0"
                            } `}
                        />
                        <AnimatePresence>
                            {displaySortbyModal && (
                                <motion.div
                                    initial={{ opacity: 0, y: -40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    className="absolute p-[2.4rem] top-[6rem] smd:top-[4rem] right-0 smd:-right-[10rem] flex flex-col w-auto bg-color-grey-2 border-l border-r border-b border-[rgba(224,225,230,1)] shadow-sort-event"
                                >
                                    {sorts.map((sort: string, i: number) => (
                                        <button
                                            key={i}
                                            className="flex w-max text-[rgba(34,34,34,0.6)] mb-[2rem] last:mb-0 hover:text-color-purple-1 transition-all duration-150 ease-in   "
                                        >
                                            {sort}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                    <button
                        className="flex items-center hover:text-color-purple-1 transition-all duration-150 ease-in"
                        onClick={onDisplayFilterModalHandler}
                    >
                        <p>Show Filters</p>
                        <PiSlidersHorizontal className="w-[2.4rem] h-[2.4rem] ml-[1rem] text-color-current" />
                    </button>
                </div>
            </div>
            <div className="grid gap-[3.5rem] grid-cols-3 px-[5rem] sxl:px-[3rem] sm:px-[2rem] py-[8rem] smd:py-[4rem] lg:grid-cols-2 smd:grid-cols-1">
                {eventsList.map((eventItem: any, i: number) => (
                    <EventListItem key={i} item={eventItem} />
                ))}
            </div>
            <WhyTicketHive />
            <AnimatePresence>
                {filterModalIsVisible && <FilterModal />}
            </AnimatePresence>
        </section>
    );
};

export default Events;
