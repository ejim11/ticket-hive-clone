"use client";
import React, { Suspense, useState } from "react";
import DashboardCover from "./DashboardCover";
import SearchAndFilterSection from "./main/SearchAndFilterSection";
import TicketInventory from "./main/TicketInventory";
import { eventsDashboardData } from "../utils/data";
import { useAppSelector } from "@/hooks/customHook";
import TicketInventorySkeleton from "../skeletons/TicketInventorySkeleton";

const Tickets = ({
  monthFilter,
  setMonthFilter,
}: {
  monthFilter: string;
  setMonthFilter: Function;
}) => {
  const addTicketsHandler = (e: any) => {};

  const { tickets, isLoading } = useAppSelector((state) => state.dashboard);

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
      {isLoading && <TicketInventorySkeleton />}
      <Suspense fallback={<TicketInventorySkeleton />}>
        {tickets.length > 0 && !isLoading && (
          <TicketInventory
            month={monthFilter}
            tickets={tickets}
            itemsInPage={100}
          />
        )}
      </Suspense>
    </DashboardCover>
  );
};

export default Tickets;
