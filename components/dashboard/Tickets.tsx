"use client";
import React, { useState } from "react";
import DashboardCover from "./DashboardCover";
import SearchAndFilterSection from "./main/SearchAndFilterSection";
import TicketInventory from "./main/TicketInventory";
import { eventsDashboardData } from "../utils/data";

const Tickets = () => {
  const addTicketsHandler = (e: any) => {};

  const [monthFilter, setMonthFilter] = useState<any>("");

  return (
    <DashboardCover
      title="Tickets"
      btnText="Add tickets"
      onClickBtn={addTicketsHandler}
    >
      <SearchAndFilterSection
        monthFilter={monthFilter}
        setMonthFilter={setMonthFilter}
      />
      <TicketInventory
        month={monthFilter}
        // data={eventsDashboardData}
        itemsInPage={100}
      />
    </DashboardCover>
  );
};

export default Tickets;
