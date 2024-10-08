"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";
import React from "react";

const VirtualLocationForm = () => {
    const dispatchFn = useAppDispatch();

    const { virtualLink } = useAppSelector(
        (state) => state.createNewEvent.details
    );

    const containerClassName =
        "flex w-full mb-[2rem]  p-[0.4rem] rounded-[0.6rem] border border-[rgba(223,225,228,1)]";

    const inputClassName =
        "  rounded-[0.6rem] outline-none ring-0 focus:ring-0 focus:outline-none flex-1 px-[1.4rem]";

    const onChangeVirtualLinkHandler = (e: any) => {
        dispatchFn(
            createNewEventActions.setEventDetail({
                virtualLink: e.target.value,
            })
        );
    };

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            dispatchFn(
                createNewEventActions.setEventDetail({
                    virtualLink: text,
                })
            );
        } catch (err) {
            console.error("Failed to read clipboard contents: ", err);
        }
    };

    return (
        <div className="mt-[1rem]">
            <div className={containerClassName}>
                <input
                    type="text"
                    placeholder="Link to the event"
                    className={inputClassName}
                    value={virtualLink}
                    onChange={onChangeVirtualLinkHandler}
                />
                <button
                    type="button"
                    onClick={handlePaste}
                    className="bg-color-purple-1 text-color-white-1 px-[1.5rem] py-[1rem] rounded-[0.6rem]"
                >
                    Paste
                </button>
            </div>
        </div>
    );
};

export default VirtualLocationForm;
