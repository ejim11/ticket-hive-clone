"use client";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { getDashboardInfoStats } from "./getDashboardInfoStats";
import { eventsDashboardData } from "@/components/utils/data";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "@/hooks/customHook";
import TicketCreatedVsTicketSoldGraphSkeleton from "@/components/skeletons/TicketCreatedVsTicketSoldGraphSkeleton";
import { motion } from "framer-motion";

const TicketCreatedVsTicketSoldGraph = ({
    month,
    events,
}: {
    month: string;
    events: any;
}) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 650px)",
    });

    const { isLoading } = useAppSelector((state) => state.dashboard);

    const { filteredEvents, ticketPerMonth, ticketSoldPerMonth } =
        getDashboardInfoStats(month, events);

    const graphData = filteredEvents.map((event: any, i: number) => {
        const totalTickets = event.tickets.length;
        const soldTickets = event.tickets.filter(
            (ticket: any) => ticket.ticketStatus === "sold"
        );
        return {
            name: `${event.name}`,
            "unsold tickets": totalTickets - soldTickets.length,
            "sold tickets": soldTickets.length,
        };
    });

    const ticketsStats = [
        {
            title: "Total Tickets Created",
            val: ticketPerMonth.length,
            color: "bg-[rgba(189,162,246,1)]",
        },
        {
            title: "Total Tickets Sold",
            val: ticketSoldPerMonth.length,
            color: "bg-color-purple-1",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="border border-[rgba(239,240,243,1)] rounded-[0.8rem] h-[52rem] smd:h-auto mt-[3rem] p-[2rem] font-outfit flex flex-col justify-between"
        >
            <p className="text-[2.4rem] font-medium  text-[rgba(34,34,34,0.8)]">
                Ticket created vs Ticket sales
            </p>

            {!isLoading && (
                <div className="flex smd:flex-col ">
                    <div className="pr-[2.5rem] border-r border-r-[rgba(0,0,0,0.15)] smd:flex smd:border-r-0 smd:my-[2rem] smd:pr-0">
                        {ticketsStats.map((tic: any) => (
                            <div
                                key={tic.title}
                                className="flex flex-col mb-[5rem] last:mb-0 smd:mr-[2.5rem] smd:last:mr-0"
                            >
                                <div className="flex items-center">
                                    <div
                                        className={`w-[1rem] h-[1rem] ${tic.color} rounded-[0.2rem] mr-[0.5rem] `}
                                    ></div>
                                    <p>{tic.title}</p>
                                </div>
                                <p className="text-[3.2rem] font-medium">
                                    {tic.val}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 h-[40rem] smd:flex-[100%] smd:h-[100rem]   ">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                // width={500}
                                // height={300}
                                data={graphData}
                                margin={{
                                    top: 0,
                                    right: 0,
                                    left: isMobile ? -35 : 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3"
                                    vertical={false}
                                    // fill="rgba(0,0,0,0.2)"
                                />
                                <XAxis dataKey="name" />
                                <YAxis axisLine={false} />
                                <Tooltip />
                                {/* <Legend /> */}
                                <Bar
                                    dataKey="sold tickets"
                                    stackId="a"
                                    fill="rgba(105,99,181,1)"
                                    // radius={[10, 10, 0, 0]}
                                />
                                <Bar
                                    dataKey="unsold tickets"
                                    stackId="a"
                                    fill="rgba(189,162,246,1)"
                                    radius={[10, 10, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default TicketCreatedVsTicketSoldGraph;
