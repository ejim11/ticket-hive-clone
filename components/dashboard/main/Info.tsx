"use client";
import {
    dashboardMonthsData,
    eventsDashboardData,
} from "@/components/utils/data";
import formatAmount from "@/components/utils/formatAmount";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";
import { getDashboardInfoStats } from "./getDashboardInfoStats";
import { useAppSelector } from "@/hooks/customHook";
import { motion } from "framer-motion";

const Info = ({ month, events }: { month: string; events: any[] }) => {
    const {
        monthlyEventsStats,
        monthlyTicketsStats,
        monthlyTicketsSoldStats,
        monthlyRevenueStats,
        filteredEvents,
        ticketPerMonth,
        ticketSoldPerMonth,
        totalRevenuePerMonth,
    } = getDashboardInfoStats(month, events);

    const { isLoading } = useAppSelector((state) => state.dashboard);

    const infoList = [
        {
            title: "events created",
            value: filteredEvents.length,
            stats: monthlyEventsStats,
        },
        {
            title: "tickets created",
            value: ticketPerMonth.length,
            stats: monthlyTicketsStats,
        },
        {
            title: "tickets sold",
            value: ticketSoldPerMonth.length,
            stats: monthlyTicketsSoldStats,
        },
        {
            title: "revenue generated",
            value: `N ${formatAmount(String(totalRevenuePerMonth))}`,
            stats: monthlyRevenueStats,
        },
    ];
    return (
        <section className="font-outfit">
            <div className="grid grid-cols-4 sxl:grid-cols-2 sm:grid-cols-1 gap-[1.6rem]">
                {infoList.length > 0 &&
                    !isLoading &&
                    infoList.map((info, i) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeIn",
                                delay: i * 0.1,
                            }}
                            key={info.title}
                            className="w-full border border-[rgba(239,240,243,1)] rounded-[0.8rem] p-[2rem] 2xl:p-[1rem] flex flex-col text-[rgba(34,34,34,0.8)]"
                        >
                            <p className=" text-[2rem] font-normal capitalize pb-[1rem]">
                                {info.title}
                            </p>
                            <p className="text-[3rem] mb-[1rem]">
                                {info.value}
                            </p>
                            <div className="flex 5xl:flex-wrap 5xl:justify-between sxl:justify-normal  items-center text-[1.3rem] mt-auto">
                                <div
                                    className={`p-[0.5rem] ${
                                        info.stats && info.stats >= 0
                                            ? "bg-[rgba(238,255,240,1)]  text-[rgba(68,145,77,1)]"
                                            : "bg-[rgba(255,237,237,1)]  text-[rgba(228,58,58,1)]"
                                    }  font-medium mr-[1rem] flex  items-center rounded-[0.4rem] mb-[0.5rem]`}
                                >
                                    <p className="">{info.stats} %</p>
                                    {info.stats && info.stats >= 0 ? (
                                        <FiArrowUpRight className="w-[1.6rem] h-[1.6rem] ml-[0.3rem] text-colour-current" />
                                    ) : (
                                        <FiArrowDownLeft className="w-[1.6rem] h-[1.6rem] ml-[0.3rem] text-color-current" />
                                    )}
                                </div>
                                <p className=" text-[1rem]  5xl:ml-0 mb-[0.5rem]">
                                    Compared to last month
                                </p>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </section>
    );
};

export default Info;
