"use client";
import React from "react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { useRouter } from "next/navigation";
import formatAmount from "./utils/formatAmount";
import { motion } from "framer-motion";
import formatDate from "./utils/formatDate";

export type EventListItem = {};

const EventListItem = ({ event, index }: { event: any; index?: number }) => {
    const router = useRouter();

    // console.log(item.title.split(" "));

    const navigateToEventItemdetailHandler = () => {
        router.push(`/events/${event.id}`);
    };

    const eventMinPrice = event.tickets
        .slice()
        .sort((a: any, b: any) => a.price - b.price)[0].price;

    const { dateInNumber, month, year }: any = formatDate(event.eventStartDate);

    const formattedDateStr = `${dateInNumber} ${month}, ${year}`;

    return (
        <motion.button
            className="flex flex-col w-full "
            onClick={navigateToEventItemdetailHandler}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: index ? index * 0.1 : 0,
                ease: "easeIn",
                duration: 0.5,
            }}
        >
            <div className="w-full h-[25rem]">
                <Image
                    src={event.image}
                    alt={`${event.name} image`}
                    priority
                    height={400}
                    width={500}
                    className="rounded-[0.6rem] w-full h-full object-cover"
                />
            </div>

            <div className="p-[1rem] flex flex-col  w-full items-start">
                <p className="text-[rgba(41,41,41,1)] text-[2rem]  uppercase mb-[.5rem] font-medium text-left">
                    {event.name}
                </p>
                <div className="flex items-center text-color-black-2 mb-[0.5rem] z-30 relative">
                    <IoLocationOutline className="text-color-current mr-[0.5rem]" />
                    <p className="text-[1.4rem]">
                        {event.venue}, {event.address}
                    </p>
                </div>
                <div className="flex items-center text-color-black-2 mb-[0.5rem] z-30 relative">
                    <MdAccessTime className="text-color-current mr-[0.5rem] " />
                    <p className="text-[1.4rem]">
                        {formattedDateStr} | {event.eventStartTime}
                    </p>
                </div>
                <p className="text-color-black-2 text-[1.4rem]">
                    {eventMinPrice === 0
                        ? "free"
                        : `₦${formatAmount(String(eventMinPrice))}`}
                </p>
            </div>
        </motion.button>
    );
};

export default EventListItem;
