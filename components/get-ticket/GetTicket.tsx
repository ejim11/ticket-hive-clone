import { usePathname, useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import SelectTicket from "./SelectTicket";
import CompleteYourInfo from "./CompleteYourInfo";
import TicketInfo from "./TicketInfo";
import CongratulationsModal from "./CongratulationsModal";
import { AnimatePresence } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";
import { useAppSelector } from "@/hooks/customHook";

const GetTicket = ({ bought }: { bought?: string }) => {
    const pathname = usePathname();

    const router = useRouter();

    const { events } = useAppSelector((state) => state.event);

    const eventId = pathname.split("/")[2];

    const [displayCongratsModal, setDisplayCongratsModal] =
        useState<boolean>(false);

    const [ticketTitleVisible, setTicketTitleVisible] =
        useState<boolean>(false);

    const event: any = events.find(
        (eventItem: any) => eventItem.id === Number(eventId)
    );

    const navigateBackToEventDetail = () => {
        router.push(`/events/${eventId}`);
        setTicketTitleVisible(false);
    };

    useEffect(() => {
        window.scrollTo({ top: -90, behavior: "smooth" });
    }, []);

    useEffect(() => {
        // if(window)
        if (bought) {
            setDisplayCongratsModal(true);
        }
    }, [bought]);

    const ticketInfos = event
        ? [
              {
                  title: "Select your ticket type",
                  summary:
                      "Choose the ticket type that best suits your event experience",
                  body: (
                      <SelectTicket
                          //   setTicketTypes={setTicketTypes}
                          //   ticketTypes={ticketTypes}
                          tickets={event.tickets}
                      />
                  ),
              },
              //   {
              //       title: "Complete your information",
              //       summary:
              //           "To complete your ticket purchase and secure your spot at the event, please provide the following details",
              //       body: (
              //           <CompleteYourInfo
              //               ticket={ticketType}
              //               setDisplayCongratsModal={setDisplayCongratsModal}
              //           />
              //       ),
              //   },
          ]
        : [];

    const toggleTitleVisibleHandler = (e: any) => {
        e.stopPropagation();
        if (e.target.dataset.open) {
            setTicketTitleVisible(true);
        } else {
            setTicketTitleVisible(false);
        }
        // setTicketTitleVisible((prevState) => !prevState);
    };

    return (
        <Suspense fallback={<></>}>
            {event && (
                <div className="w-full  min-h-screen mt-[9rem] flex font-outfit bg-color-white-1">
                    <div
                        className={`w-[35rem] xlg:w-[30rem] bg-[#F8F9F9] p-[2rem] lg:fixed lg:top-[9rem] lg:bottom-0 lg:left-0 lg:z-[40] transition-all duration-150 ease-in  
                            ${
                                ticketTitleVisible
                                    ? "lg:opacity-100 lg:visible lg:translate-x-0"
                                    : "lg:opacity-0 lg:invisible lg:-translate-x-[100%]"
                            } 
                        
                        `}
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
                                {event.name}
                            </p>
                            <p className="text-[#292929CC] ">{event.venue}</p>
                        </div>
                    </div>
                    <div
                        className="flex-1 p-[9.4rem] xl:p-[5rem] xlg:p-[3rem] sm:p-[2rem] flex flex-col "
                        onClick={toggleTitleVisibleHandler}
                    >
                        <div
                            className="w-[3.5rem] h-[3.5rem] rounded-[0.6rem] border border-[#EFF0F3] lg:flex items-center justify-center mb-[2rem] hidden"
                            data-open="true"
                        >
                            <MdOutlineChevronRight
                                className="w-[2.8rem] h-[2.8rem]"
                                data-open="true"
                            />
                        </div>
                        <div>
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
                    </div>
                    <AnimatePresence>
                        {displayCongratsModal && (
                            <CongratulationsModal
                                eventTitle={event.name}
                                setDisplayCongratsModal={
                                    setDisplayCongratsModal
                                }
                            />
                        )}
                    </AnimatePresence>
                </div>
            )}
        </Suspense>
    );
};

export default GetTicket;
