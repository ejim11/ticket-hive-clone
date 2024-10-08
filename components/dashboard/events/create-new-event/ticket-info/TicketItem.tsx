"use client";
import { useAppDispatch } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TicketItem = ({ ticket }: { ticket: any }) => {
    // const numberRegex = /^(?:0|[1-9]\d*)$/;
    console.log(ticket);

    const dispatchFn = useAppDispatch();

    const [isTicketInputsVisible, setIsTicketInputsVisible] =
        useState<boolean>(false);

    const inputContainerClassname = "flex flex-col";

    const labelClassname = "mb-[1rem] text-[rgba(34,34,34,0.8)]";

    const inputClassname =
        "border border-[rgba(223,225,228,1)] px-[1.5rem] py-[1rem] rounded-[0.6rem] outline-none ring-0 focus:ring-0 focus:outline-none";

    const toggleTicketInputsVisibilityHandler = () => {
        setIsTicketInputsVisible((prevState) => !prevState);
    };

    const onChangePriceHandler = (e: any) => {
        if (Number(e.target.value) < 0) {
            return;
        }

        dispatchFn(
            createNewEventActions.onChangeTicketPrice({
                type: ticket.type,
                value: e.target.value,
            })
        );
    };

    const onChangeQuantityHandler = (e: any) => {
        if (Number(e.target.value) < 0) {
            return;
        }

        dispatchFn(
            createNewEventActions.onChangeTicketQty({
                type: ticket.type,
                value: e.target.value,
            })
        );
    };

    const onChangeSummaryHandler = (e: any) => {
        dispatchFn(
            createNewEventActions.onChangeTicketSummary({
                type: ticket.type,
                value: e.target.value,
            })
        );
    };

    return (
        <div className="mb-[2rem] border-color-purple-1 border  px-[1.6rem] py-[1.4rem] rounded-[0.6rem] transition-all duration-150 ease-in">
            <button
                className="flex items-center  text-color-purple-1 justify-between w-full"
                onClick={toggleTicketInputsVisibilityHandler}
            >
                <p className="capitalize font-medium text-[1.8rem]">
                    {ticket.type}
                </p>
                <IoIosArrowDown
                    className={`w-[2.4rem] h-[2.4rem] text-color-current transition-all ease-in duration-150 ${
                        isTicketInputsVisible ? "rotate-[180deg]" : "rotate-0"
                    }`}
                />
            </button>

            {isTicketInputsVisible && (
                <div className="mt-[1.5rem] flex flex-wrap justify-between">
                    <div
                        className={`${inputContainerClassname} w-[48%] mb-[1.5rem]`}
                    >
                        <label
                            htmlFor="ticket-price"
                            className={labelClassname}
                        >
                            Ticket Price
                        </label>
                        <input
                            type="number"
                            name="ticket-price"
                            id="ticket-price"
                            className={inputClassname}
                            placeholder="20000"
                            value={ticket.price}
                            onChange={onChangePriceHandler}
                        />
                    </div>
                    <div
                        className={`${inputContainerClassname} w-[48%] mb-[1.5rem]`}
                    >
                        <label htmlFor="ticket-qty" className={labelClassname}>
                            Ticket Quantity
                        </label>
                        <input
                            type="number"
                            name="tickey-qty"
                            id="ticket-qty"
                            className={inputClassname}
                            placeholder="20000"
                            value={ticket.quantity}
                            onChange={onChangeQuantityHandler}
                        />
                    </div>
                    <div className={`${inputContainerClassname} w-full`}>
                        <label
                            htmlFor="ticket-summary"
                            className={labelClassname}
                        >
                            Ticket Summary
                        </label>
                        <textarea
                            name="ticket-summary"
                            id="ticket-summary"
                            rows={3}
                            className={inputClassname}
                            placeholder="Please provide a short summary of this ticket type."
                            value={ticket.summary}
                            onChange={onChangeSummaryHandler}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TicketItem;
