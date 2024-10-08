"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";
import React from "react";

const PhysicalLocationForm = () => {
    const dispatchFn = useAppDispatch();

    const { venue, address } = useAppSelector(
        (state) => state.createNewEvent.details
    );

    const containerClassName = "flex flex-col w-full mb-[2rem]";

    const labelClassName =
        "text-[1.65rem] mb-[1rem] text-[rgba(34,34,34,0.8)] capitalize";

    const inputClassName =
        "border border-[rgba(223,225,228,1)] px-[1.6rem] py-[1.4rem] rounded-[0.6rem] outline-none ring-0 focus:ring-0 focus:outline-none";

    const onChangeVenueHandler = (e: any) => {
        dispatchFn(
            createNewEventActions.setEventDetail({ venue: e.target.value })
        );
    };

    const onChangeAddressHandler = (e: any) => {
        dispatchFn(
            createNewEventActions.setEventDetail({ address: e.target.value })
        );
    };

    return (
        <div className="mt-[1rem]">
            <div className={containerClassName}>
                <label htmlFor="venue" className={labelClassName}>
                    venue
                </label>
                <input
                    type="text"
                    placeholder="Provide the name of the event venue"
                    className={inputClassName}
                    value={venue}
                    onChange={onChangeVenueHandler}
                />
            </div>
            <div className={containerClassName}>
                <label htmlFor="venue" className={labelClassName}>
                    Address
                </label>
                <input
                    type="text"
                    placeholder="Provide the full address of the event venue"
                    className={inputClassName}
                    value={address}
                    onChange={onChangeAddressHandler}
                />
            </div>
        </div>
    );
};

export default PhysicalLocationForm;
