"use client";
import React from "react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import testImg from "../assets/home/event-cat-2.png";
import { EventItem } from "./utils/data";
import { useRouter } from "next/navigation";

export type EventListItem = {};

const EventListItem = ({ item }: { item: any }) => {
    const router = useRouter();

    // console.log(item.title.split(" "));

    const navigateToEventItemdetailHandler = () => {
        router.push(`/events/${item.id}`);
    };

    return (
        <button
            className="flex flex-col "
            onClick={navigateToEventItemdetailHandler}
        >
            <div className="w-full h-[25rem]">
                <Image
                    src={item.image}
                    alt={`${item.title} image`}
                    priority
                    height={400}
                    width={500}
                    className="rounded-[0.6rem] w-full h-full object-cover"
                />
            </div>

            <div className="p-[1rem] flex flex-col  w-full items-start">
                <p className="text-[rgba(41,41,41,1)]  uppercase mb-[.5rem] font-medium">
                    {item.title}
                </p>
                <div className="flex items-center text-color-black-2 mb-[0.5rem] z-30 relative">
                    <IoLocationOutline className="text-color-current mr-[0.5rem]" />
                    <p className="text-[1.4rem]">{item.location.venue}</p>
                </div>
                <div className="flex items-center text-color-black-2 mb-[0.5rem] z-30 relative">
                    <MdAccessTime className="text-color-current mr-[0.5rem] " />
                    <p className="text-[1.4rem]">{item.dateAndTime.date}</p>
                </div>
                <p className="text-color-black-2 text-[1.4rem]">
                    {item.price === 0 ? "free" : `${item.price}`}
                </p>
            </div>
        </button>
    );
};

export default EventListItem;
