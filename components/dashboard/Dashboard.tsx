"use client";
import React, { useState } from "react";
import DashboardCover from "./DashboardCover";
import SearchAndFilterSection from "./main/SearchAndFilterSection";
import Info from "./main/Info";
import { dashboardMonthsData, eventsDashboardData } from "../utils/data";
import TicketCreatedVsTicketSoldGraph from "./main/TicketCreatedVsTicketSoldGraph";
import TicketInventory from "./main/TicketInventory";

const Dashboard = () => {
    const addTicketsHandler = (e: any) => {};

    const currentMonth = dashboardMonthsData[new Date().getMonth()];

    const [monthFilter, setMonthFilter] = useState<any>(currentMonth.month);

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
                <Info month={monthFilter} />
                <TicketCreatedVsTicketSoldGraph month={monthFilter} />
                <TicketInventory
                    month={monthFilter}
                    title="Ticket Inventory"
                    data={eventsDashboardData}
                    itemsInPage={20}
                />
            </main>
        </DashboardCover>
    );
};

export default Dashboard;
