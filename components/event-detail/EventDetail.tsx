import React, { useState } from "react";
import { eventsList } from "../utils/data";
import Image from "next/image";
import formatAmount from "../utils/formatAmount";
import EventLocation from "../events/event/EventLocation";
import EventDateAndTime from "../events/event/EventDateAndTime";
import EventDescription from "../events/event/EventDescription";
import EventImages from "../events/event/EventImages";
import EventInfoAccordion from "../events/event/EventInfoAccordion";

const EventDetail = ({ param }: { param: string }) => {
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

    return (
        <section className="font-outfit">
            <div className=" py-[3rem] w-full h-[80rem] px-[5rem] ">
                {event && (
                    <Image
                        src={event.image}
                        alt={`${event?.title} image`}
                        priority
                        width={2000}
                        height={2000}
                        className="w-full h-full object-cover "
                    />
                )}
            </div>
            <div className="flex justify-between my-[5rem] px-[5rem] ">
                <div className="w-[60%]">
                    <p className="text-[6.4rem] font-medium text-[rgba(41,41,41,1)]">
                        {event?.title}
                    </p>
                    <p className="text-[2rem] font-normal ">{event?.summary}</p>
                </div>
                <div className="border rounded-[0.8rem] border-[rgba(224,225,230,1)] p-[2rem] flex flex-col justify-between items-center self-start">
                    {/* <p className="text-[2.4rem] text-[rgba(34,34,34,1)]">
                        {event?.price === 0
                            ? "Free"
                            : `₦ ${formatAmount(String(event?.price))}`}
                    </p> */}
                    <button
                        type="button"
                        className="px-[10rem] py-[1.5rem] bg-color-purple-1 text-color-white-1 rounded-[0.4rem] text-[2rem]"
                    >
                        Get ticket
                    </button>
                </div>
            </div>
            <div className="w-full my-[8rem] px-[5rem]">
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
