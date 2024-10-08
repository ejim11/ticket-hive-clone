"use client";
import React, { useState } from "react";
import DashboardCover from "./DashboardCover";
import SearchAndFilterSection from "./main/SearchAndFilterSection";
import EventItem from "./events/EventItem";
import { eventsDashboardData } from "../utils/data";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { getDashboardInfoStats } from "./main/getDashboardInfoStats";
import CreateNewEventModal from "./events/create-new-event/CreateNewEventModal";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";
import { AnimatePresence } from "framer-motion";

const Events = () => {
    const dispatcFn = useAppDispatch();

    const { isCreateEventModalVisible } = useAppSelector(
        (state) => state.createNewEvent
    );

    const createEventHandler = (e: any) => {
        dispatcFn(createNewEventActions.toggleCreateEventModal(true));
    };

    const [monthFilter, setMonthFilter] = useState<any>("");

    const [sideModalIndex, setSideModalIndex] = useState<number | null>(null);

    const { filteredEvents } = getDashboardInfoStats(
        monthFilter,
        eventsDashboardData
    );

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 20;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = [...filteredEvents]
        .reverse()
        .slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredEvents.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset =
            (event.selected * itemsPerPage) % filteredEvents.length;
        setItemOffset(newOffset);
    };

    const paginateNavStyle =
        "block  bg-color-purple-1 py-[0.5rem] px-[1rem] rounded-lg  border border-color-purple-1 text-color-white-1 hover:bg-color-purple-2 transition-all tableData-200 ease-in capitalize ";

    return (
        <DashboardCover
            title="Events"
            btnText="Create event"
            onClickBtn={createEventHandler}
        >
            <SearchAndFilterSection
                monthFilter={monthFilter}
                setMonthFilter={setMonthFilter}
            />
            <div className="px-[4rem] py-[3rem] md:px-[2.5rem] sm:px-[2rem]">
                <div>
                    {currentItems.map((event: any, index: number) => (
                        <EventItem
                            key={index}
                            index={index}
                            setSideModalIndex={setSideModalIndex}
                            sideModalIndex={sideModalIndex}
                            event={event}
                        />
                    ))}
                </div>

                {/* react paginate */}
                <div className="flex mt-[2rem] px-[2rem] pt-[2rem] pb-[3rem]">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={
                            <p className="flex items-center ">
                                <span>next</span>
                                <MdKeyboardArrowRight className="text-color-current ml-[0.5rem] w-[2.2rem] h-[2.2rem]" />
                            </p>
                        }
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel={
                            <p className="flex items-center">
                                <MdKeyboardArrowLeft className="text-color-current mr-[0.5rem] w-[2.2rem] h-[2.2rem]" />
                                <span>previous</span>
                            </p>
                        }
                        renderOnZeroPageCount={null}
                        containerClassName="flex items-center ml-auto sm:ml-0 sm:mr-auto"
                        previousClassName="mr-[1rem]"
                        nextClassName="ml-[1rem]"
                        previousLinkClassName={paginateNavStyle}
                        nextLinkClassName={paginateNavStyle}
                        pageLinkClassName="paginate-page-link"
                        activeLinkClassName="paginate-active-page-link"
                    />
                </div>
            </div>
            <AnimatePresence>
                {isCreateEventModalVisible && <CreateNewEventModal />}
            </AnimatePresence>
        </DashboardCover>
    );
};

export default Events;
