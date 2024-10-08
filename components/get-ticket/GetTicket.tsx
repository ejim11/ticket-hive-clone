import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { eventsList } from "../utils/data";
import SelectTicket from "./SelectTicket";
import CompleteYourInfo from "./CompleteYourInfo";
import TicketInfo from "./TicketInfo";
import CongratulationsModal from "./CongratulationsModal";
import { AnimatePresence } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";

const GetTicket = () => {
    const pathname = usePathname();

    const router = useRouter();

    const eventId = pathname.split("/")[2];

    const [ticketType, setTicketType] = useState(null);
    const [displayCongratsModal, setDisplayCongratsModal] =
        useState<boolean>(false);
    const [ticketTitleVisible, setTicketTitleVisible] =
        useState<boolean>(false);

    const event: any = eventsList.find(
        (eventItem: any) => eventItem.id === Number(eventId)
    );

    useEffect(() => {
        window.scrollTo({ top: -90, behavior: "smooth" });
    }, []);

    const navigateBackToEventDetail = () => {
        router.push(`/events/${eventId}`);
        setTicketTitleVisible(false);
    };

    const ticketInfos = [
        {
            title: "Select your ticket type",
            summary:
                "Choose the ticket type that best suits your event experience",
            body: (
                <SelectTicket
                    setTicketType={setTicketType}
                    ticketType={ticketType}
                    tickets={event.tickets}
                />
            ),
        },
        {
            title: "Complete your information",
            summary:
                "To complete your ticket purchase and secure your spot at the event, please provide the following details",
            body: (
                <CompleteYourInfo
                    ticketType={ticketType}
                    setDisplayCongratsModal={setDisplayCongratsModal}
                />
            ),
        },
    ];

    const toggleTitleVisibleHandler = (e: any) => {
        e.stopPropagation();
        console.log(e.target.dataset.open);
        if (e.target.dataset.open) {
            setTicketTitleVisible(true);
        } else {
            setTicketTitleVisible(false);
        }
        // setTicketTitleVisible((prevState) => !prevState);
    };

    return (
        <div className="w-full  min-h-screen mt-[9rem] flex font-outfit bg-color-white-1">
            <div
                className={`w-[35rem] xlg:w-[30rem] bg-[#F8F9F9] p-[2rem] lg:fixed lg:top-[9rem] lg:bottom-0 lg:left-0 lg:z-[40] transition-all duration-150 ease-in  ${
                    ticketTitleVisible
                        ? "lg:opacity-100 lg:visible lg:translate-x-0"
                        : "lg:opacity-0 lg:invisible lg:-translate-x-[100%]"
                } `}
            >
                <button
                    className={`flex items-center uppercase text-[#222222CC] hover:text-color-purple-1 transition-all duration-150 ease-in mb-[10rem]`}
                    onClick={navigateBackToEventDetail}
                >
                    <IoIosArrowRoundBack className="mr-[1rem] w-[2.4rem] h-[2.4rem] text-color-current" />
                    <p className="text-[1.8rem] ">go back</p>
                </button>
                <div className="border-b-[#DADADA] border-b pb-[2rem]">
                    <p className="text-[#222222] text-[4rem] xlg:text-[3rem]">
                        {event.title}
                    </p>
                    <p className="text-[#292929CC] ">{event.location.venue}</p>
                </div>
            </div>
            <div
                className="flex-1 p-[9.4rem] xl:p-[5rem] xlg:p-[3rem] sm:p-[2rem] flex flex-col "
                onClick={toggleTitleVisibleHandler}
            >
                <div
                    className="w-[3.5rem] h-[3.5rem] rounded-[0.6rem] border border-[#EFF0F3] flex items-center justify-center mb-[2rem]"
                    data-open="true"
                >
                    <MdOutlineChevronRight
                        className="w-[2.8rem] h-[2.8rem]"
                        data-open="true"
                    />
                </div>
                {ticketInfos.map((ticketInfo: any, i: number) => (
                    <TicketInfo
                        key={i}
                        index={i + 1}
                        title={ticketInfo.title}
                        summary={ticketInfo.summary}
                        body={ticketInfo.body}
                    />
                ))}
            </div>
            <AnimatePresence>
                {displayCongratsModal && (
                    <CongratulationsModal
                        eventTitle={event.title}
                        setDisplayCongratsModal={setDisplayCongratsModal}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default GetTicket;
