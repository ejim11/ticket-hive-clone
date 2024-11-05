"use client";
import React from "react";
import SectionCover from "../SectionCover";
import { eventCategories, EventCategory } from "../utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const EventCategories = () => {
    const router = useRouter();
    return (
        <SectionCover className="py-[10rem] font-outfit bg-color-white-1 smd:py-[8rem] sm:py-[6rem]">
            <h3 className="text-[3rem] font-semibold uppercase mb-[3rem] sm:text-center">
                Event Categories
            </h3>
            <div className="w-full grid grid-cols-event-cat-grid gap-[3rem]">
                {eventCategories.map((category: EventCategory, i: number) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: "easeIn",
                            delay: i * 0.1,
                        }}
                        key={category.title}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => {
                            router.replace(
                                `/events?category=${category.title.toLowerCase()}`
                            );
                        }}
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
                    </motion.div>
                ))}
            </div>
        </SectionCover>
    );
};

export default EventCategories;
