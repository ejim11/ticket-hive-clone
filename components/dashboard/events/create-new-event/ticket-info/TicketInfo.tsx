"use client";
import React from "react";
import TicketType from "./TicketType";
import { useAppSelector } from "@/hooks/customHook";

const TicketInfo = ({ setFormIndex }: { setFormIndex: Function }) => {
    const { ticketTypes } = useAppSelector(
        (state) => state.createNewEvent.details
    );

    const allTicketPrices = ticketTypes.map((ticket: any) => ticket.price);

    const allTicketQtys = ticketTypes.map((ticket: any) => ticket.quantity);

    const allTicketSummary = ticketTypes.map((ticket: any) => ticket.summary);

    console.log(allTicketSummary);

    const checkIfTicketInfoIsValid =
        ticketTypes.length === 0 ||
        allTicketPrices.includes("") ||
        allTicketQtys.includes("") ||
        allTicketSummary.includes("");

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="p-[2rem] w-full h-full overflow-y-auto ">
                <TicketType />
            </div>
            <div className="w-full p-[2rem] h-[9rem] flex items-center">
                <button
                    type="button"
                    className="bg-color-white-1 border border-[rgba(223,225,228)] text-[0,0,0,0.6] px-[3rem] py-[1rem] rounded-[0.6rem] ml-auto flex mr-[2.5rem]"
                    onClick={() => {
                        setFormIndex(1);
                    }}
                >
                    Back
                </button>
                <button
                    type="button"
                    disabled={checkIfTicketInfoIsValid}
                    className="disabled:bg-color-purple-3 disabled:cursor-not-allowed bg-color-purple-1 text-color-white-1 px-[3rem] py-[1rem] rounded-[0.6rem] flex"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default TicketInfo;
