"use client";
import React, { useRef, useState } from "react";
import { LuClock } from "react-icons/lu";
import TimePicker from "./TimePicker";
import { formatDate } from "@/components/utils/helper-func";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";

const EventDateAndTime = ({
    start,
    date,
    setDate,
    startDate,

    eventFrom,
    setEventFrom,
    eventTo,
    setEventTo,
}: {
    start?: boolean;
    date: string;
    setDate: Function;
    startDate?: any;

    eventFrom: string;
    setEventFrom: Function;
    eventTo: string;
    setEventTo: Function;
}) => {
    const dispatchFn = useAppDispatch();

    const { eventDuration } = useAppSelector(
        (state) => state.createNewEvent.details
    );

    const setDateHandler = (e: any) => {
        setDate(e.target.value);
    };

    const onChangeEventDuration = (e: any) => {
        dispatchFn(
            createNewEventActions.setEventDetail({
                eventDuration: e.target.value,
            })
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, ease: "easeIn" }}
            className="font-outfit mb-[3rem]"
        >
            <div className="flex justify-between items-center mb-[1.6rem]">
                <div className="flex items-center">
                    <p className="text-[rgba(34,34,34,0.8)] text-[1.8rem]  ">
                        Event{" "}
                        {eventDuration === "single-day"
                            ? ""
                            : start
                            ? "start"
                            : "end"}{" "}
                        date and time
                    </p>
                </div>

                {start && (
                    <div className="border px-[1rem] py-[0.5rem] w-[15rem] rounded-[0.6rem] border-[rgba(223,225,228,1)] bg-color-white-1 ">
                        <select
                            name="day-type"
                            id="day-type"
                            className="ring-0 outline-none focus:ring-0 focus::outline-none w-full cursor-pointer"
                            value={eventDuration}
                            onChange={onChangeEventDuration}
                        >
                            <option value="single-day">Single day</option>
                            <option value="multiple-day">Multiple day</option>
                        </select>
                    </div>
                )}
            </div>

            <div className="flex justify-between relative">
                {/* <label htmlFor="event-date">pick</label> */}
                <div>
                    <input
                        type="date"
                        name="event-date"
                        id="event-date"
                        className="w-[16rem] border border-[rgba(223,225,228,1)] px-[1rem] py-[0.5rem] rounded-[0.6rem] right-0 outline-none focus:ring-0 focus:outline-none"
                        value={date}
                        onChange={setDateHandler}
                        min={
                            start
                                ? new Date().toISOString().split("T")[0]
                                : new Date(startDate)
                                      .toISOString()
                                      .split("T")[0]
                        }
                    />
                    <input
                        type="text"
                        name="event-date"
                        id="event-date"
                        className="w-[12rem] absolute top-1 bottom-1 left-1   px-[1rem] py-[0.5rem] rounded-[0.6rem] right-0 outline-none focus:ring-0 focus:outline-none"
                        value={formatDate(new Date(date).toDateString())}
                        onChange={() => {
                            return;
                        }}
                    />
                </div>

                <p className="self-center text-[rgba(34,34,34,0.8)]">from</p>
                <TimePicker time={eventFrom} setTime={setEventFrom} />
                <p className="self-center text-[rgba(34,34,34,0.8)]">to</p>
                <TimePicker
                    time={eventTo}
                    setTime={setEventTo}
                    eventFrom={eventFrom}
                />
            </div>
        </motion.div>
    );
};

export default EventDateAndTime;
