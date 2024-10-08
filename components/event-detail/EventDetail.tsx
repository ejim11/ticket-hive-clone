import React, { useEffect, useState } from "react";
import { eventsList } from "../utils/data";
import Image from "next/image";
import formatAmount from "../utils/formatAmount";
import EventLocation from "../events/event/EventLocation";
import EventDateAndTime from "../events/event/EventDateAndTime";
import EventDescription from "../events/event/EventDescription";
import EventImages from "../events/event/EventImages";
import EventInfoAccordion from "../events/event/EventInfoAccordion";
import { useRouter } from "next/navigation";

const EventDetail = ({ param }: { param: string }) => {
    const router = useRouter();

    const event: any = eventsList.find(
        (eventItem: any) => eventItem.id === Number(param)
    );

    const [expanded, setExpanded] = useState<false | number>(false);

    const eventInfo: { title: string; component: React.ReactNode }[] = [
        {
            title: "The Location",
            component: (
                <EventLocation
                    venue={event.location.venue}
                    address={event.location.address}
                />
            ),
        },
        {
            title: "DATE & TIME",
            component: (
                <EventDateAndTime
                    date={event.dateAndTime.date}
                    time={event.dateAndTime.time}
                />
            ),
        },

        {
            title: "DESCRIPTION",
            component: <EventDescription description={event.description} />,
        },
        {
            title: "MORE IMAGES",
            component: (
                <EventImages images={event.moreImages} title={event.title} />
            ),
        },
    ];

    const navigateToGetTicketPage = () => {
        router.push(`/events/${param}/get-ticket`);
    };

    useEffect(() => {
        window.scrollTo({ top: -90, behavior: "smooth" });
    }, []);

    return (
        <section className="font-outfit mt-[9rem]">
            <div className=" py-[3rem] w-full h-[80rem] xmd:h-auto px-[5rem] xlg:p-[3rem] sm:px-[2rem] xmd:pt-[2rem] xmd:pb-0 ">
                {event && (
                    <Image
                        src={event.image}
                        alt={`${event?.title} image`}
                        priority
                        width={2000}
                        height={2000}
                        className="w-full h-full rounded-[0.6rem] "
                    />
                )}
            </div>
            <div className="flex justify-between my-[5rem] smd:my-[3rem] sm:my-[2rem] px-[5rem] xlg:px-[3rem] sm:px-[2rem] xmd:flex-col ">
                <div className="w-[60%] xmd:w-full ">
                    <p className="text-[6.4rem] xmd:text-[4rem] sm:text-[3.5rem] font-medium text-[rgba(41,41,41,1)]">
                        {event?.title}
                    </p>
                    <p className="text-[2rem] font-normal ">{event?.summary}</p>
                </div>
                <div className="border xmd:mt-[3rem] xmd:p-0 rounded-[0.8rem] border-[rgba(224,225,230,1)] p-[2rem] flex flex-col justify-between items-center self-start xmd:border-none xmd:w-full">
                    <p className="text-[2.4rem] text-[rgba(34,34,34,1)] mb-[2rem]">
                        {event.tickets[0].price === 0
                            ? "Free"
                            : `₦ ${formatAmount(
                                  String(event.tickets[0].price)
                              )}`}
                    </p>
                    <button
                        type="button"
                        className="px-[10rem] xmd:w-full  py-[1.5rem] bg-color-purple-1 text-color-white-1 rounded-[0.4rem] text-[2rem]"
                        onClick={navigateToGetTicketPage}
                    >
                        Get ticket
                    </button>
                </div>
            </div>
            <div className="w-full my-[8rem] xmd:mt-[5rem] px-[5rem] xlg:px-[3rem] sm:px-[2rem]">
                {eventInfo.map((info: any, i: number) => (
                    <EventInfoAccordion
                        key={info.title}
                        expanded={expanded}
                        index={i}
                        setExpanded={setExpanded}
                        title={info.title}
                        component={info.component}
                    />
                ))}
            </div>
        </section>
    );
};

export default EventDetail;
