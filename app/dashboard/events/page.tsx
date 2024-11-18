"use client";
import { getDashboardEventsDispatch } from "@/actions/dashboardActions";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { dashboardActions } from "@/slices/dashboardSlice";
import React, { useEffect } from "react";
import Events from "@/components/dashboard/Events";

const Page = () => {
    const dispatchFn = useAppDispatch();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedDetails = JSON.parse(
                window.localStorage.getItem("dashboardItems") || "{}"
            );

            dispatchFn(dashboardActions.setDashboardDetails(storedDetails));
            dispatchFn(getDashboardEventsDispatch(storedDetails.id));
        }
    }, [dispatchFn]);

    return <Events />;
};

export default Page;
