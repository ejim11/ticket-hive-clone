"use client";
import { autoLogin, autoLogout } from "@/actions/authActions";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { eventsActions } from "@/slices/eventSlice";
import React, { useCallback, useEffect } from "react";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const dispatchFn = useAppDispatch();

    const { remainingTime, refreshToken, token, isLoggedIn } = useAppSelector(
        (state) => state.auth
    );

    const autoLogoutHandler = useCallback(() => {
        if (remainingTime) {
            dispatchFn(autoLogin(remainingTime, refreshToken));
            dispatchFn(autoLogout(remainingTime));
        }
    }, [dispatchFn, refreshToken, remainingTime]);

    useEffect(() => {
        autoLogoutHandler();
    }, [autoLogoutHandler, dispatchFn]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedEvents = JSON.parse(
                window.localStorage.getItem("events") || "[]"
            );

            dispatchFn(eventsActions.setEvents(storedEvents));
        }
    }, [dispatchFn]);

    return <div>{children}</div>;
};

export default AppWrapper;
