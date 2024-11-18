"use client";
import formatDate from "@/components/utils/formatDate";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const EventItem = ({
    index,
    setSideModalIndex,
    sideModalIndex,
    event,
}: {
    index: number;
    setSideModalIndex: Function;
    sideModalIndex: number | null;
    event: any;
}) => {
    const totalTickets = event.tickets.length;
    const soldTickets = event.tickets.filter(
        (ticket: any) => ticket.ticketStatus === "sold"
    );
    const displaySideModal = index === sideModalIndex;

    const viewEvent = () => {};
    const editEvent = () => {};
    const deleteEvent = () => {};

    const sideModalBtns = [
        {
            title: "view",
            onClick: viewEvent,
        },
        {
            title: "edit",
            onClick: editEvent,
        },
        {
            title: "delete",
            onClick: deleteEvent,
        },
    ];

    const toggleSideModalDisplayHandler = () => {
        if (sideModalIndex === index) {
            setSideModalIndex(null);
            return;
        }
        setSideModalIndex(index);
    };

    const { dateInNumber, day, month, year }: any = formatDate(
        event.eventStartDate
    );

    return (
        <div className="flex items-center w-full relative  font-outfit bg-color-white-1 mb-[3rem]">
            <div className="bg-color-grey-1 w-[15rem] h-[10rem] rounded-[0.8rem] mr-[3.2rem] sm:hidden">
                <Image
                    src={event.image}
                    alt={`${event.name}-img`}
                    priority
                    width={100}
                    height={100}
                    className="w-full h-full"
                />
            </div>
            <div className="text-[rgba(34,34,34,0.8)] mr-[1rem]">
                <p className="text-[2rem] font-medium">{event.name}</p>
                <p className="my-[0.5rem] ">
                    {dateInNumber} {day} {month}, {year}
                    {/* {event.createdAt} */}
                </p>
                <p>
                    {soldTickets.length}/{totalTickets} tickets purchased
                </p>
            </div>
            <div className="flex items-center ml-auto">
                {/* <p className="mr-[3.5rem] px-[1rem] py-[0.5rem] bg-[rgba(248,244,255,1)] text-[1.4rem] text-color-purple-1 font-medium rounded-[0.4rem]">
                    Active
                </p> */}
                <button
                    type="button"
                    className="w-[2.4rem] h-[2.4rem] flex items-center justify-center hover:bg-[rgba(247,247,247)] transition-all duration-150 ease-in"
                    onClick={toggleSideModalDisplayHandler}
                >
                    <BsThreeDotsVertical className="text-[rgba(40,48,63,1)] w-[2.2rem] h-[2.2rem] " />
                </button>
            </div>
            <AnimatePresence>
                {displaySideModal && (
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.15, ease: "easeIn" }}
                        className="flex flex-col w-[11rem] rounded-[0.4rem] border border-[rgba(239,240,243,1)] shadow-event-item-side-modal absolute right-[2.5rem] top-[3.5rem] z-[50] bg-color-white-1"
                    >
                        {sideModalBtns.map((btn: any) => (
                            <button
                                type="button"
                                onClick={btn.onClick}
                                key={btn.title}
                                className="py-[1rem]  text-left pl-[1.2rem] capitalize text-[1.4rem] text-[rgba(34,34,34,0.8)] hover:bg-color-purple-3 hover:text-color-purple-1 transition-all duration-150 ease-in"
                            >
                                {btn.title}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EventItem;
