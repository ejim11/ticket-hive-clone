"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import sideHomeImg from "../../assets/home/side-img.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import SectionCover from "../SectionCover";
import EventCategories from "./EventCategories";
import EventSlider from "./EventSlider";
import BringYourVision from "./BringYourVision";
import WhyTicketHive from "../WhyTicketHive";

const HomeComp = () => {
    useEffect(() => {
        window.scrollTo({ top: -90, behavior: "smooth" });
    }, []);
    return (
        <main className="font-outfit transition-all duration-150 ease-in mt-[9rem]">
            <SectionCover className="h-[calc(100vh-9rem)] sh:h-[calc(115vh-9rem)] ssh:h-[calc(135vh-9rem)] bg-home-1 bg-no-repeat bg-center py-[5rem] bg-cover xmd:relative      flex">
                <div className="w-[50%] xlg:w-[60%]  md:w-[80%] smd:w-full flex flex-col justify-end">
                    <h2 className="text-[7rem] sm:text-[5rem] text-[rgba(255,255,255,0.88)] flex flex-col leading-[7rem]">
                        <span> Acquire tickets</span>
                        <span>with ease</span>
                    </h2>
                    <p className="text-[rgba(255,255,255,0.75)] text-[2rem] mt-[2.4rem] mb-[4rem] sm:text-justify">
                        Convenient and stress-free solutions for both attendees
                        and organizers, designed to make your event planning
                        seamless and enjoyable.
                    </p>
                    <div className=" flex sm:flex-col">
                        <button
                            type="button"
                            className="relative bg-color-purple-1 text-color-white-1 blurred-button px-[3.5rem] py-[1.5rem] rounded-[0.6rem] mr-[2rem] sm:mr-0 sm:mb-[2rem] hover:bg-[rgba(243,237,255,1)] hover:text-color-purple-1 transition-all duration-150 ease-in "
                        >
                            <span className="absolute blur-item bottom-0 top-0 left-0 right-0 bg-[rgba(255,255,255,0.2)] z-20 rounded-[0.6rem]"></span>
                            <span className=" z-30 relative">Get ticket</span>
                        </button>
                        <button
                            type="button"
                            className="bg-[rgba(243,237,255,1)] text-color-purple-1 px-[3.5rem] py-[1.5rem] rounded-[0.6rem] hover:bg-color-purple-1 hover:text-color-white-1 transition-all duration-150 ease-in"
                        >
                            Create Event
                        </button>
                    </div>
                </div>
                <div className="p-[1rem] rounded-[1.6rem] self-start ml-auto flex flex-col relative overflow-hidden xmd:w-[32rem] xmd:absolute xmd:right-[3rem] sm:right-[2rem]">
                    <div className="absolute blur-item bottom-0 z-20 top-0 left-0 right-0 bg-[rgba(255,255,255,0.2)] rounded-[1.6rem]"></div>
                    <div className="w-[30rem] xmd:w-full h-[20rem]">
                        <Image
                            src={sideHomeImg}
                            alt="Image of the event"
                            priority
                            width={300}
                            height={200}
                            className="w-full h-full blur-none rounded-[1.6rem] z-30 relative"
                        />
                    </div>

                    <p className="text-color-white-1 my-[0.8rem] uppercase z-30 relative">
                        Ticket Hive
                    </p>
                    <div className="flex items-center text-color-white-1 mb-[0.5rem] z-30 relative">
                        <IoLocationOutline className="text-color-current mr-[0.5rem]" />
                        <p>Balmoral Convention Center Ikeja</p>
                    </div>
                    <div className="flex items-center text-color-white-1 mb-[0.5rem] z-30 relative">
                        <MdAccessTime className="text-color-current mr-[0.5rem] " />
                        <p>Wed, Aug 7 • 8:30 AM</p>
                    </div>
                </div>
            </SectionCover>
            <EventCategories />
            <section className="pb-[10rem]">
                <EventSlider title={"trending events"} />
            </section>
            <BringYourVision />
            <section className="py-[10rem] xmd:py-[6rem] sm:pt-[2rem] sm:pb-[6rem]">
                <EventSlider title={"More events"} />
            </section>
            <WhyTicketHive />
        </main>
    );
};

export default HomeComp;
