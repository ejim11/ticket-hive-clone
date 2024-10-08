"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";
import React, { useState } from "react";

const AddTicketTypeInput = ({
    setIsInputVisible,
}: {
    setIsInputVisible: Function;
}) => {
    const dispatchFn = useAppDispatch();

    const [newTicketType, setNewTicketType] = useState<string>("");
    const [errText, setErrText] = useState<string>("");

    const { ticketTypeList } = useAppSelector((state) => state.createNewEvent);

    const onChangeAddTicketTypeHandler = (e: any) => {
        if (checkIfTicketTypeList(e.target.value)) {
            setErrText("Ticket type already exists!");
        } else {
            setErrText("");
        }
        setNewTicketType(e.target.value);
    };

    const checkIfTicketTypeList = (ticketType: string) => {
        const ticket = ticketTypeList.find(
            (tic: any) => tic.toLowerCase() === ticketType.toLowerCase()
        );

        return !!ticket;
    };

    const addTicketType = () => {
        if (!newTicketType) {
            setErrText("Ticket type is required");
            return;
        }
        if (checkIfTicketTypeList(newTicketType)) {
            setErrText("Ticket type already exists!");
            return;
        }
        setErrText("");
        dispatchFn(createNewEventActions.addTicketType(newTicketType));

        setIsInputVisible(false);
        setNewTicketType("");
    };

    return (
        <div className="my-[1.5rem] px-[1.6rem] w-full bg-color-white-1 ">
            <input
                type="text"
                name="ticket-type"
                id="ticket-type"
                placeholder="VVIP"
                value={newTicketType}
                onChange={onChangeAddTicketTypeHandler}
                className="border rounded-[0.6rem] border-[rgba(223,225,228,0.8)] px-[1.5rem] py-[1rem] ring:0 outline-none focus:ring-0 focus:outline-none w-full"
            />
            {errText && (
                <small className="text-color-red mt-[0.5rem] block">
                    {errText}
                </small>
            )}
            <div className="mt-[1.5rem] flex ">
                <button
                    type="button"
                    className="py-[0.5rem] bg-color-purple-1 px-[1rem] rounded-[0.6rem] mr-[1.5rem] text-color-white-1"
                    onClick={addTicketType}
                >
                    Add
                </button>
                <button
                    type="button"
                    className="border border-color-purple-1 rounded-[0.6rem] text-color-purple-1 px-[1rem] py-[0.5rem]"
                    onClick={() => {
                        setIsInputVisible(false);
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AddTicketTypeInput;
