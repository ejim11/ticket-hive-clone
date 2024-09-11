import React from "react";
import SectionCover from "./SectionCover";
import { whyTicketHive, whyTicketHiveType } from "./utils/data";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyTicketHive = () => {
    return (
        <SectionCover className="py-[12rem] bg-[rgba(247,247,247,1)] flex  flex-col items-center font-outfit">
            <h3 className="text-[4.8rem] font-semibold  text-color-black-1 mb-[1.2rem]">
                WHY TICKETHIVE
            </h3>
            <p className="text-[rgba(41,41,41,0.8)] text-[2rem] mb-[6.4rem]">
                Create your event or secure your ticket with ease and
                excitement.
            </p>
            <div className=" grid grid-cols-3 gap-[3rem]">
                {whyTicketHive.map((item: whyTicketHiveType, i: number) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: "easeIn",
                            delay: i * 0.15,
                        }}
                        key={item.title}
                        className={`${item.bgColor} rounded-[0.8rem] p-[3rem]`}
                    >
                        <Image
                            src={item.image}
                            alt="why ticket hive box image"
                            priority
                            className="mb-[19.5rem]"
                        />
                        <p className="text-color-white-1 text-[2.5rem] mb-[1rem] font-medium">
                            {item.title}
                        </p>
                        <p className="text-color-white-2">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </SectionCover>
    );
};

export default WhyTicketHive;
