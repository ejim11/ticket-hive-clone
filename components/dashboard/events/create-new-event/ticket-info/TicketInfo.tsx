"use client";
import React, { useState } from "react";
import TicketType from "./TicketType";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createGunzip } from "zlib";
import { FallingLines } from "react-loader-spinner";
import { createEventDispatch } from "@/actions/dashboardActions";
import { toastError, toastSuccess } from "@/components/utils/helper-func";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";

const TicketInfo = ({
    setFormIndex,
    imageObj,
    closeModal,
}: {
    setFormIndex: Function;
    imageObj?: any;
    closeModal: Function;
}) => {
    const dispatch = useAppDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const details = useAppSelector((state) => state.createNewEvent.details);

    const { token } = useAppSelector((state) => state.auth);

    const allTicketPrices = details.ticketTypes.map(
        (ticket: any) => ticket.price
    );

    const allTicketQtys = details.ticketTypes.map(
        (ticket: any) => ticket.quantity
    );

    const allTicketSummary = details.ticketTypes.map(
        (ticket: any) => ticket.summary
    );

    console.log(details);

    const checkIfTicketInfoIsValid =
        details.ticketTypes.length === 0 ||
        allTicketPrices.includes("") ||
        allTicketQtys.includes("") ||
        allTicketSummary.includes("");

    const onSubmitCreateEventHandler = () => {
        const freeTickets = details.ticketTypes.filter(
            (ticket: any) => +ticket.price === 0
        );

        const tickets = details.ticketTypes.map((ticket: any) => {
            return Array.from({ length: ticket.quantity }, (_, i) => ({
                price: ticket.price,
                summary: ticket.summary,
                type: ticket.type,
            }));
        });

        const formattedData = {
            name: details.name,
            category: details.category,
            priceType: freeTickets.length > 0 ? "free" : "paid",
            attendanceMode: details.address ? "in-person" : "online",
            description: details.description,
            venue: details.venue,
            address: details.address,
            eventStartDate: details.eventStartDate,
            eventEndDate: details.eventEndDate,
            eventStartTime: details.eventStartFrom,
            eventEndTime: details.eventStartTo,
            virtualLink: details.virtualLink,
            imageObj: imageObj,

            tickets: tickets.flat(),
        };

        dispatch(
            createEventDispatch(
                token,
                formattedData,
                setIsLoading,
                toastSuccess,
                toastError,
                <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
                <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
                closeModal
            )
        );
    };

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
                    onClick={onSubmitCreateEventHandler}
                    type="button"
                    disabled={checkIfTicketInfoIsValid}
                    className="disabled:bg-color-purple-3 disabled:cursor-not-allowed bg-color-purple-1 text-color-white-1 px-[3rem] py-[1rem] rounded-[0.6rem] flex"
                >
                    {isLoading ? (
                        <FallingLines
                            height="25"
                            width="25"
                            color={"white"}
                            visible={true}
                        />
                    ) : (
                        "Submit"
                    )}
                </button>
            </div>
        </div>
    );
};

export default TicketInfo;
