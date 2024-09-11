"use client";
import React from "react";
import SectionCover from "../SectionCover";
import { eventCategories, EventCategory } from "../utils/data";
import Image from "next/image";

const EventCategories = () => {
    return (
        <SectionCover className="py-[10rem] font-outfit bg-color-white-1">
            <h3 className="text-[3rem] font-semibold uppercase mb-[3rem]">
                Event Categories
            </h3>
            <div className="w-full grid grid-cols-event-cat-grid gap-[3rem]">
                {eventCategories.map((category: EventCategory) => (
                    <div
                        key={category.title}
                        className="flex flex-col items-center"
                    >
                        <Image
                            src={category.image}
                            alt={`${category.title} event category image`}
                            priority
                            width={800}
                            height={800}
                            className="rounded-[0.6rem]"
                        />
                        <p className="mt-[1rem] uppercase">{category.title}</p>
                    </div>
                ))}
            </div>
        </SectionCover>
    );
};

export default EventCategories;
