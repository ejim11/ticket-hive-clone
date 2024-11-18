import React, { useEffect, useState } from "react";
import EventDateAndTime from "./EventDateAndTime";
import { formatDate } from "@/components/utils/helper-func";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";
import Location from "./Location";

const DateAndLocation = ({ setFormIndex }: { setFormIndex: Function }) => {
    const dispatchFn = useAppDispatch();

    const {
        eventStartDate: startDate,
        eventEndDate: endDate,
        eventStartFrom,
        eventStartTo,
        eventDuration,
        venue,
        address,
        virtualLink,
    } = useAppSelector((state) => state.createNewEvent.details);

    const setStartDate = (val: any) => {
        dispatchFn(
            createNewEventActions.setEventDetail({ eventStartDate: val })
        );
    };

    const setEndDate = (val: any) => {
        dispatchFn(createNewEventActions.setEventDetail({ eventEndDate: val }));
    };

    const setEventStartFrom = (val: any) => {
        dispatchFn(
            createNewEventActions.setEventDetail({ eventStartFrom: val })
        );
    };

    const setEventStartTo = (val: any) => {
        dispatchFn(createNewEventActions.setEventDetail({ eventStartTo: val }));
    };

    const isBtnDisabled =
        !!startDate &&
        !!eventStartFrom &&
        !!eventStartTo &&
        ((!!venue && !!address) || !!virtualLink);

    return (
        <div className="w-full h-full  flex flex-col justify-between ">
            <div className="p-[2rem] w-full h-full overflow-y-auto">
                <EventDateAndTime
                    start
                    date={startDate}
                    setDate={setStartDate}
                    eventFrom={eventStartFrom}
                    setEventFrom={setEventStartFrom}
                    eventTo={eventStartTo}
                    setEventTo={setEventStartTo}
                />
                {eventDuration === "multiple-day" && (
                    <EventDateAndTime
                        date={endDate}
                        setDate={setEndDate}
                        startDate={startDate}
                    />
                )}
                <Location />
            </div>
            <div className="w-full px-[2rem] h-[9rem] flex items-center  ">
                <button
                    type="button"
                    className="bg-color-white-1 border border-[rgba(223,225,228)] text-[0,0,0,0.6] px-[3rem] py-[1rem] rounded-[0.6rem] ml-auto flex mr-[2.5rem]"
                    onClick={() => {
                        setFormIndex(0);
                    }}
                >
                    Back
                </button>
                <button
                    disabled={!isBtnDisabled}
                    type="button"
                    className="disabled:bg-color-purple-3 disabled:cursor-not-allowed bg-color-purple-1 text-color-white-1 px-[3rem] py-[1rem] rounded-[0.6rem] flex"
                    onClick={() => {
                        setFormIndex(2);
                    }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default DateAndLocation;
