import React, { useState } from "react";
import PhysicalLocationForm from "./PhysicalLocationForm";
import VirtualLocationForm from "./VirtualLocationForm";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";

const Location = () => {
    const dispatchFn = useAppDispatch();

    const locationTypes = [
        {
            text: "physical",
            form: <PhysicalLocationForm />,
        },
        {
            text: "virtual",
            form: <VirtualLocationForm />,
        },
    ];

    const { choosenLocationTypes }: { choosenLocationTypes: any } =
        useAppSelector((state) => state.createNewEvent.details);

    const onSelectLocationType = (locationType: string) => {
        if (
            choosenLocationTypes &&
            choosenLocationTypes.length > 0 &&
            choosenLocationTypes.includes(locationType)
        ) {
            const filteredLocationTypes = choosenLocationTypes.filter(
                (location: string) => locationType !== location
            );
            dispatchFn(
                createNewEventActions.setEventDetail({
                    choosenLocationTypes: filteredLocationTypes,
                })
            );
            if (!filteredLocationTypes.includes("physical")) {
                dispatchFn(
                    createNewEventActions.setEventDetail({
                        venue: "",
                        address: "",
                    })
                );
            }
            if (!filteredLocationTypes.includes("virtual")) {
                dispatchFn(
                    createNewEventActions.setEventDetail({
                        virtualLink: "",
                    })
                );
            }
        } else {
            dispatchFn(
                createNewEventActions.setEventDetail({
                    choosenLocationTypes: choosenLocationTypes
                        ? [...choosenLocationTypes, locationType]
                        : [locationType],
                })
            );
        }
    };

    return (
        <div>
            <p className="text-[rgba(34,34,34,0.8)] text-[1.8rem] mb-[1.2rem]">
                Location
            </p>
            <div>
                {locationTypes.map((location: any) => (
                    <div
                        className="flex  flex-col  mb-[1rem]"
                        key={location.text}
                    >
                        <div className="flex items-center">
                            <div
                                className={`${
                                    choosenLocationTypes &&
                                    choosenLocationTypes.includes(location.text)
                                        ? "border-color-purple-1 bg-color-purple-1"
                                        : "border-[rgba(34,34,34,0.8)] bg-color-white-1  "
                                } border w-[2rem] h-[2rem] rounded-full flex items-center justify-center transition-all duration-150 ease-in cursor-pointer`}
                                onClick={() => {
                                    onSelectLocationType(location.text);
                                }}
                            >
                                <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-color-white-1"></div>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    onSelectLocationType(location.text);
                                }}
                                className=" flex capitalize text-[1.8rem] ml-[1rem] "
                            >
                                {location.text}
                            </button>
                        </div>

                        {choosenLocationTypes &&
                            choosenLocationTypes.includes(location.text) && (
                                <div className="ml-[3rem]">{location.form}</div>
                            )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Location;
