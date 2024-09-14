"use client";
import React from "react";
import Image from "next/image";
import logo2 from "../assets/logo-2.svg";
import { footerLinks } from "./utils/data";
import Link from "next/link";

const SecondFooterSec = () => {
    return (
        <div className="p-[10rem] 2xl:px-[8rem] xlg:px-[3rem] sm:px-[2rem] flex justify-between smd:flex-col">
            <div className="w-[50%] smd:w-full sm:flex sm:flex-col sm:items-center">
                <Link href={"/"}>
                    <Image
                        src={logo2}
                        alt="ticket hive logo"
                        priority
                        width={200}
                        height={100}
                        className="w-auto h-auto"
                    />
                </Link>
                <p className="text-[rgba(255,255,255,0.6)] mt-[1.5rem] sm:text-center">
                    TicketHive is your go-to event ticketing platform to
                    discover unforgettable experiences. Craft live or virtual
                    events, sell tickets, and create lasting memories—one ticket
                    at a time.
                </p>
            </div>
            <div className="flex smd:w-full smd:mt-[3rem] sm:flex-col sm:items-center">
                {footerLinks.map((item: any) => (
                    <div
                        key={item.title}
                        className="flex flex-col mr-[4rem] sm:mr-0 sm:mb-[4rem] last:mr-0 text-[1.8rem] uppercase sm:text-center"
                    >
                        <p className="text-color-white-1">{item.title}</p>
                        <div className="flex flex-col mt-[2rem] text-[rgba(255,255,255,0.7)] text-[1.6rem] capitalize">
                            {item.links.map((link: any, i: number) => (
                                <Link
                                    href={link.link}
                                    key={link.title}
                                    className="block mb-[1rem] last:mb-0 hover:text-color-purple-2 duration-150 ease-in transition-all"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondFooterSec;
