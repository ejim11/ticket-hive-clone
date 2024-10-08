"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck, FaPlus } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";
import AddTicketTypeInput from "./AddTicketTypeInput";
import TicketItem from "./TicketItem";

const ticketTypesArr = [
    "general",
    "early bird",
    "VIP",
    "student ticket",
    "group ticket",
];

const TicketType = () => {
    const dispatchFn = useAppDispatch();

    const [isTicketTypesVisible, setIsTicketTypesVisible] =
        useState<boolean>(false);

    const [isAddTicketTypeInputVisible, setIsAddTicketTypeInputVisible] =
        useState<boolean>(false);

    const { ticketTypes }: { ticketTypes: any } = useAppSelector(
        (state) => state.createNewEvent.details
    );

    const { ticketTypeList } = useAppSelector((state) => state.createNewEvent);

    const toggleTicketTypeVisibilityHandler = () => {
        setIsTicketTypesVisible((prevState) => !prevState);
    };

    const checkIfTicketTypeIsSelected = (ticketType: string) => {
        const ticket = ticketTypes.find((tic: any) => tic.type === ticketType);
        return !!ticket;
    };

    const selectTicketTypeHandler = (ticketType: string) => {
        if (
            ticketTypes &&
            ticketTypes.length > 0 &&
            checkIfTicketTypeIsSelected(ticketType)
        ) {
            // filter out the ticketType
            const filteredTicketTypes = ticketTypes.filter(
                (ticket: any) => ticketType !== ticket.type
            );
            dispatchFn(
                createNewEventActions.setEventDetail({
                    ticketTypes: filteredTicketTypes,
                })
            );
            return;
        }
        // add the ticketType to the array of ticket types
        dispatchFn(
            createNewEventActions.setEventDetail({
                ticketTypes: [
                    ...ticketTypes,
                    {
                        type: ticketType,
                        price: "",
                        quantity: "",
                        summary: "",
                    },
                ],
            })
        );
    };

    return (
        <div className="font-outfit">
            <p className="mb-[1.6rem] text-[1.8rem] text-[rgba(34,34,34,0.8)] font-medium">
                Ticket type
            </p>
            <div className="relative">
                <div
                    className="flex items-center border border-[rgba(223,225,228,1)] px-[1.6rem] py-[1.4rem] rounded-[0.6rem] text-[rgba(34,34,34,0.8)] cursor-pointer hover:border-color-purple-1 transition-all duration-150 ease-in"
                    onClick={toggleTicketTypeVisibilityHandler}
                >
                    <p className="">Ticket type</p>
                    <div className="ml-auto flex items-center">
                        {ticketTypes && ticketTypes.length > 0 && (
                            <div className="w-[3.2rem] h-[3.2rem] bg-color-purple-1 rounded-full flex items-center justify-center text-color-white-1 font-medium  mr-[1rem]">
                                <p>{ticketTypes.length}</p>
                            </div>
                        )}
                        <IoIosArrowDown
                            className={`w-[2.4rem] h-[2.4rem] text-color-current transition-all ease-in duration-150 ${
                                isTicketTypesVisible
                                    ? "rotate-[180deg]"
                                    : "rotate-0"
                            }`}
                        />
                    </div>
                </div>
                <AnimatePresence>
                    {isTicketTypesVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.15, ease: "easeIn" }}
                            className="flex flex-col bg-color-white-1 border rounded-[0.6rem] border-[rgba(223,225,228,0.5)] absolute top-[7.5rem] left-0 right-0 pt-[1rem] shadow-select-ticket-type z-[60]"
                        >
                            {ticketTypeList.map(
                                (ticketType: string, index: number) => (
                                    <div
                                        key={ticketType + `-${index}`}
                                        className="flex items-center py-[0.5rem] px-[1.5rem] w-full mb-[1.5rem] last:mb-0 hover:bg-color-grey-2 transition-all duration-150 ease-in cursor-pointer"
                                        onClick={() => {
                                            selectTicketTypeHandler(ticketType);
                                        }}
                                    >
                                        <div
                                            className={`w-[1.8rem] h-[1.8rem] rounded-[0.4rem] border  mr-[1rem] flex items-center justify-center transition-all duration-150 ease-in ${
                                                checkIfTicketTypeIsSelected(
                                                    ticketType
                                                )
                                                    ? "bg-color-purple-1 border-color-purple-1"
                                                    : "bg-color-white-1 border-[rgba(0,0,0,1)]"
                                            }`}
                                        >
                                            <FaCheck className="text-color-white-1 w-[1.  2rem] h-[1.2rem]" />
                                        </div>
                                        <p className="capitalize">
                                            {ticketType}
                                        </p>
                                    </div>
                                )
                            )}
                            {!isAddTicketTypeInputVisible && (
                                <button
                                    className="px-[1.6rem] flex items-center capitalize text-color-purple-1 w-full mt-[1.5rem] hover:bg-color-grey-2 transition-all duration-150 ease-in py-[1rem]"
                                    onClick={() => {
                                        setIsAddTicketTypeInputVisible(true);
                                    }}
                                >
                                    <FaPlus className="w-[2.4rem] h-[2.4rem] mr-[1rem]" />
                                    <p>Add ticket type</p>
                                </button>
                            )}
                            {isAddTicketTypeInputVisible && (
                                <AddTicketTypeInput
                                    setIsInputVisible={
                                        setIsAddTicketTypeInputVisible
                                    }
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="mt-[2rem]">
                {ticketTypes.map((ticketType: any) => (
                    <TicketItem key={ticketType.type} ticket={ticketType} />
                ))}
            </div>
        </div>
    );
};

export default TicketType;
