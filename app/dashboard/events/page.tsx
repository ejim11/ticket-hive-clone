"use client";
import { getDashboardEventsDispatch } from "@/actions/dashboardActions";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { dashboardActions } from "@/slices/dashboardSlice";
import React, { Suspense, useEffect, useState } from "react";
import Events from "@/components/dashboard/Events";

const Page = () => {
    const dispatchFn = useAppDispatch();

    const [monthFilter, setMonthFilter] = useState<any>("");
    const { token } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedDetails = JSON.parse(
                window.localStorage.getItem("dashboardItems") || "{}"
            );

            dispatchFn(dashboardActions.setDashboardUserDetails(storedDetails));

            if (token) {
                if (monthFilter === "all" || monthFilter === "") {
                    dispatchFn(getDashboardEventsDispatch(storedDetails.id));
                } else {
                    dispatchFn(
                        getDashboardEventsDispatch(
                            storedDetails.id,
                            monthFilter
                        )
                    );
                }
            }
        }
    }, [dispatchFn, monthFilter, token]);

    return (
        <Suspense>
            <Events monthFilter={monthFilter} setMonthFilter={setMonthFilter} />
        </Suspense>
    );
};

export default Page;
