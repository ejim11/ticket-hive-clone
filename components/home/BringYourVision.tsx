/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

const BringYourVision = () => {
    return (
        <section className="bg-bring-vision bg-center bg-no-repeat bg-cover px-[3rem] sm:px-[2rem] h-[89rem] py-[10rem] bg-fixed flex flex-col xmd:bg-scroll  justify-end items-center">
            <p className="text-color-white-1 text-[7rem] smd:text-[6rem] font-medium text-center">
                Bring your vision
            </p>
            <p className="text-[rgba(255,255,255,0.8)] text-[1.8rem] text-center">
                Whether it's a concert, conference, festival, or workshop, our
                platform makes it effortless to create and manage your event. 
            </p>
            <button
                type="button"
                className="bg-[rgba(255,255,255,0.3)] text-color-white-1 py-[1rem] px-[2rem] rounded-[0.6rem] mt-[4rem]"
            >
                Create Event
            </button>
        </section>
    );
};

export default BringYourVision;
