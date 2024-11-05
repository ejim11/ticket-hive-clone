"use client";
import React, { useEffect, useMemo, useState } from "react";
import { PiSlidersHorizontal } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import EventListItem from "../EventListItem";
import { eventsList } from "../utils/data";
import WhyTicketHive from "../WhyTicketHive";
import { AnimatePresence, motion } from "framer-motion";
import FilterModal from "./FilterModal";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { searchAndFilterModalActions } from "@/slices/searchAndFilterSlice";
import EventSkeleton from "../skeletons/EventSkeleton";
import { getAllEventsDispatch } from "@/actions/eventActions";
import { searchForEventDispatch } from "@/actions/searchActions";
import { sortEvents } from "../utils/sortEvents";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { eventsActions } from "@/slices/eventSlice";

const Events = () => {
  const searchParams = useSearchParams();

  // Convert searchParams to an object if needed
  const searchParamsObject = useMemo(
    () => ({
      name: searchParams.get("name") || undefined,
      category: searchParams.get("category") || undefined,
      date: searchParams.get("date") || undefined,
      price: searchParams.get("price") || undefined,
      attendance: searchParams.get("attendance") || undefined,
      sort: searchParams.get("sort") || undefined,
    }),
    [searchParams]
  );
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { events, isLoading } = useAppSelector((state) => state.event);

  const [displaySortbyModal, setDisplaySortbyModal] = useState<boolean>(false);

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

  console.log("is ite even here");

  useEffect(() => {
    console.log(searchParams);
    console.log("searching for params");
    const { name, category, date, price, attendance, sort } =
      searchParamsObject;

    if (name || category || date || price || attendance) {
      console.log(`Searchin`);
      dispatch(
        searchForEventDispatch(
          name ?? "",
          category ?? "",
          date ?? "",
          price ?? "",
          attendance ?? "",
          sort
        )
      );
    } else {
      dispatch(getAllEventsDispatch(sort));
    }
  }, [dispatch, searchParamsObject]);

  const sortEventsHandler = (sort: string) => {
    const { category, price, date, attendance } = searchParamsObject;

    const filteredQuery = [
      category && `category=${category}`,
      date && `date=${date}`,
      price && `price=${price}`,
      attendance && `attendance=${attendance}`,
    ]
      .filter((item) => !!item)
      .join("&");

    router.replace(
      `/events${
        filteredQuery
          ? `?${filteredQuery}&sort=${sort
              .slice()
              .split(" ")
              .join("-")
              .toLowerCase()}`
          : `?sort=${sort.slice().split(" ").join("-").toLowerCase()}`
      }`
    );
  };

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
                displaySortbyModal ? "rotate-[180deg]" : " rotate-0"
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
                      onClick={() => {
                        if (sort === "Featured events") return;
                        sortEventsHandler(sort);
                      }}
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
      {isLoading ? (
        <div className="px-[5rem] grid grid-cols-event-cat-grid gap-[3rem] my-[5rem]">
          <div className="w-full ">
            <EventSkeleton />
          </div>
          <div className="w-full ">
            <EventSkeleton />
          </div>
          <div className="w-full ">
            <EventSkeleton />
          </div>
        </div>
      ) : events.length === 0 ? (
        <div className="w-full h-[20rem] flex items-center justify-center">
          <p>No Event Found.</p>
        </div>
      ) : (
        <div className="grid gap-[3.5rem] grid-cols-3 px-[5rem] sxl:px-[3rem] sm:px-[2rem] py-[8rem] smd:py-[4rem] lg:grid-cols-2 smd:grid-cols-1">
          {events.map((eventItem: any, i: number) => (
            <EventListItem key={i} event={eventItem} index={i + 1} />
          ))}
        </div>
      )}

      <WhyTicketHive />
      <AnimatePresence>
        {filterModalIsVisible && <FilterModal />}
      </AnimatePresence>
    </section>
  );
};

export default Events;
