"use client";
import { getDashboardTicketsDispatch } from "@/actions/dashboardActions";
import Tickets from "@/components/dashboard/Tickets";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { dashboardActions } from "@/slices/dashboardSlice";
import React, { Suspense, useEffect, useState } from "react";

const Page = () => {
  const dispatchFn = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);

  const [monthFilter, setMonthFilter] = useState<any>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDetails = JSON.parse(
        window.localStorage.getItem("dashboardItems") || "{}"
      );

      dispatchFn(dashboardActions.setDashboardDetails(storedDetails));

      if (monthFilter === "all" || monthFilter === "") {
        dispatchFn(getDashboardTicketsDispatch(token));
      } else {
        dispatchFn(getDashboardTicketsDispatch(token, monthFilter));
      }
    }
  }, [dispatchFn, monthFilter, token]);

  return (
    <Suspense>
      <Tickets monthFilter={monthFilter} setMonthFilter={setMonthFilter} />
    </Suspense>
  );
};

export default Page;
