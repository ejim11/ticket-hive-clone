"use client";
import React from "react";
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
    return (
        <main className="font-outfit">
            <SectionCover className="h-[calc(100vh-9rem)] bg-home-1 bg-no-repeat bg-center py-[5rem]     flex">
                <div className="w-[50%] flex flex-col justify-end">
                    <h2 className="text-[7rem] text-[rgba(255,255,255,0.88)] flex flex-col leading-[7rem]">
                        <span> Acquire tickets</span>
                        <span>with ease</span>
                    </h2>
                    <p className="text-[rgba(255,255,255,0.75)] text-[2rem] mt-[2.4rem] mb-[4rem]">
                        Convenient and stress-free solutions for both attendees
                        and organizers, designed to make your event planning
                        seamless and enjoyable.
                    </p>
                    <div>
                        <button
                            type="button"
                            className="relative bg-color-purple-1 text-color-white-1 blurred-button px-[3.5rem] py-[1.5rem] rounded-[0.6rem] mr-[2rem] hover:bg-[rgba(243,237,255,1)] hover:text-color-purple-1 transition-all duration-150 ease-in "
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
                <div className="p-[1rem] rounded-[1.6rem] self-start ml-auto flex flex-col relative overflow-hidden">
                    <div className="absolute blur-item bottom-0 z-20 top-0 left-0 right-0 bg-[rgba(255,255,255,0.2)] rounded-[1.6rem]"></div>
                    <Image
                        src={sideHomeImg}
                        alt="Image of the event"
                        priority
                        width={300}
                        height={200}
                        className="w-[30rem] h-[20rem] blur-none rounded-[1.6rem] z-30 relative"
                    />
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
            <section className="py-[10rem]">
                <EventSlider title={"More events"} />
            </section>
            <WhyTicketHive />
        </main>
    );
};

export default HomeComp;
