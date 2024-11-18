"use client";
import { useAppDispatch } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";
import { motion } from "framer-motion";
import React, { useState } from "react";
// import { useMediaQuery } from "react-responsive";
import EventDetails from "./event-details/EventDetails";
import DateAndLocation from "./date-and-location/DateAndLocation";
import TicketInfo from "./ticket-info/TicketInfo";
import { formatDate } from "@/components/utils/helper-func";
import { MdClose } from "react-icons/md";

const CreateNewEventModal = () => {
    const dispatchFn = useAppDispatch();

    // const isMobile = useMediaQuery({ maxWidth: 650 });

    const [formIndex, setFormIndex] = useState<number>(0);
    const [imageObj, setImageObj] = useState();
    const [image, setImage] = useState();

    const initialAnimation = { opacity: 0, x: "100%" };

    const animate = { opacity: 1, x: 0 };

    const closeCreateNewEventModalHandler = () => {
        dispatchFn(createNewEventActions.toggleCreateEventModal(false));
        dispatchFn(
            createNewEventActions.setEventDetail({
                name: "",
                category: "",
                description: "",
                eventStartDate: formatDate(new Date().toDateString()),
                eventEndDate: "",
                eventDuration: "single-day",
                eventStartFrom: "",
                eventStartTo: "",
                venue: "",
                address: "",
                virtualLink: "",
                choosenLocationTypes: [],
            })
        );
    };

    const onCloseCreateNewEventModalHandler = (e: any) => {
        e.stopPropagation();
        if (e.target.dataset.close) {
            closeCreateNewEventModalHandler();
            return;
        }
    };

    const createNewEventForms = [
        {
            title: "Event Details",
            component: (
                <EventDetails
                    setFormIndex={setFormIndex}
                    imageObj={imageObj}
                    setImageObj={setImageObj}
                    image={image}
                    setImg={setImage}
                />
            ),
        },
        {
            title: "Date and Location",
            component: <DateAndLocation setFormIndex={setFormIndex} />,
        },
        {
            title: "Ticket Info",
            component: (
                <TicketInfo
                    setFormIndex={setFormIndex}
                    imageObj={imageObj}
                    closeModal={closeCreateNewEventModalHandler}
                />
            ),
        },
    ];

    return (
        <motion.div
            className="bg-[rgba(0,0,0,0.5)] w-full fixed top-0 right-0 left-0 bottom-0 h-screen flex justify-end z-[180] cursor-pointer "
            data-close="true"
            onClick={onCloseCreateNewEventModalHandler}
            initial={initialAnimation}
            animate={animate}
            exit={initialAnimation}
            transition={{ duration: 0.2, ease: "easeIn" }}
        >
            <div className="w-[40%] xlg:w-[50%] xmd:w-[60%] md:w-[65%] smd:w-full  bg-color-white-1 cursor-default flex flex-col font-outfit shadow-sort-event ">
                <div className="h-[7rem] flex items-center px-[2rem] border-b border-b-[rgba(224,225,230,1)] justify-between">
                    <p className="w-full     text-[2.8rem] font-medium">
                        Create New Event
                    </p>
                    <button
                        type="button"
                        className="border-none"
                        onClick={closeCreateNewEventModalHandler}
                    >
                        <MdClose className="w-[2.8rem] h-[2.8rem]" />
                    </button>
                </div>
                <div className="grid grid-cols-3 p-[2rem] gap-[1.6rem]">
                    {createNewEventForms.map((form: any, index: number) => (
                        <div key={index} className="w-full">
                            <div
                                className={`h-[0.4rem] w-full rounded-[2rem] mb-[1.2rem] transition-all duration-150 ease-in ${
                                    formIndex === index
                                        ? "bg-color-purple-1"
                                        : "bg-[rgba(204,204,204)]"
                                } `}
                            ></div>
                            <p
                                className={`transition-all duration-150 ease-in ${
                                    formIndex === index
                                        ? "text-color-purple-1"
                                        : "text-[rgba(204,204,204)]"
                                } `}
                            >
                                {form.title}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex-1 overflow-y-auto filter-scroll ">
                    {createNewEventForms[formIndex].component}
                </div>
            </div>
        </motion.div>
    );
};

export default CreateNewEventModal;
