"use client";
import React, { lazy, Suspense, useEffect, useState } from "react";
import DashboardCover from "./DashboardCover";
import SearchAndFilterSection from "./main/SearchAndFilterSection";
import { dashboardMonthsData, eventsDashboardData } from "../utils/data";
import TicketCreatedVsTicketSoldGraph from "./main/TicketCreatedVsTicketSoldGraph";
import TicketInventory from "./main/TicketInventory";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { dashboardActions } from "@/slices/dashboardSlice";
import DashboardInfosSkeleton from "../skeletons/DashboardInfosSkeleton";
import {
    getDashboardEventsDispatch,
    getDashboardTicketsDispatch,
} from "@/actions/dashboardActions";
import TicketCreatedVsTicketSoldGraphSkeleton from "../skeletons/TicketCreatedVsTicketSoldGraphSkeleton";
import TicketInventorySkeleton from "../skeletons/TicketInventorySkeleton";
const Info = lazy(() => import("./main/Info"));

const Dashboard = () => {
    const dispatchFn = useAppDispatch();
    const addTicketsHandler = (e: any) => {};

    const { token } = useAppSelector((state) => state.auth);

    const { events, isLoading, tickets } = useAppSelector(
        (state) => state.dashboard
    );

    const currentMonth = dashboardMonthsData[new Date().getMonth()];

    const [monthFilter, setMonthFilter] = useState<any>(currentMonth.month);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedDetails = JSON.parse(
                window.localStorage.getItem("dashboardItems") || "{}"
            );

            if (token) {
                console.log("here");
                dispatchFn(
                    dashboardActions.setDashboardUserDetails(storedDetails)
                );
                dispatchFn(
                    getDashboardEventsDispatch(storedDetails.id, monthFilter)
                );
                dispatchFn(getDashboardTicketsDispatch(token, monthFilter));
            }
        }
    }, [dispatchFn, token, monthFilter]);

    return (
        <DashboardCover
            title="Dashboard"
            btnText="Add tickets"
            onClickBtn={addTicketsHandler}
        >
            <SearchAndFilterSection
                monthFilter={monthFilter}
                setMonthFilter={setMonthFilter}
            />
            <main className="py-[3rem] px-[4rem] md:px-[2.5rem] sm:px-[2rem]">
                {isLoading && <DashboardInfosSkeleton />}
                <Suspense fallback={<DashboardInfosSkeleton />}>
                    {events.length > 0 && (
                        <Info month={monthFilter} events={events} />
                    )}
                </Suspense>
                {isLoading && <TicketCreatedVsTicketSoldGraphSkeleton />}
                <Suspense fallback={<TicketCreatedVsTicketSoldGraphSkeleton />}>
                    {events.length > 0 && (
                        <TicketCreatedVsTicketSoldGraph
                            month={monthFilter}
                            events={events}
                        />
                    )}
                </Suspense>
                {isLoading && <TicketInventorySkeleton />}
                <Suspense fallback={<TicketInventorySkeleton />}>
                    {tickets.length > 0 && (
                        <TicketInventory
                            month={monthFilter}
                            title="Ticket Inventory"
                            itemsInPage={50}
                            tickets={tickets}
                        />
                    )}
                </Suspense>
            </main>
        </DashboardCover>
    );
};

export default Dashboard;
