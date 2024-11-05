"use client";
import { autoLogin, autoLogout } from "@/actions/authActions";
import { getAllEventsDispatch } from "@/actions/eventActions";
import { searchForEventDispatch } from "@/actions/searchActions";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { eventsActions } from "@/slices/eventSlice";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useMemo } from "react";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatchFn = useAppDispatch();

  const { remainingTime, refreshToken, token, isLoggedIn } = useAppSelector(
    (state) => state.auth
  );

  // const searchParams = useSearchParams();

  // // Convert searchParams to an object if needed
  // const searchParamsObject = useMemo(
  //   () => ({
  //     name: searchParams.get("name") || undefined,
  //     category: searchParams.get("category") || undefined,
  //     date: searchParams.get("date") || undefined,
  //     price: searchParams.get("price") || undefined,
  //     attendance: searchParams.get("attendance") || undefined,
  //     sort: searchParams.get("sort") || undefined,
  //   }),
  //   [searchParams]
  // );

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

  // useEffect(() => {
  //   const { name, category, date, price, attendance, sort } =
  //     searchParamsObject;

  //   if (name || category || date || price || attendance) {
  //     console.log(`Searchin`);
  //     dispatchFn(
  //       searchForEventDispatch(
  //         name ?? "",
  //         category ?? "",
  //         date ?? "",
  //         price ?? "",
  //         attendance ?? "",
  //         sort
  //       )
  //     );
  //   } else {
  //     dispatchFn(getAllEventsDispatch(sort));
  //   }
  // }, [dispatchFn, searchParamsObject]);

  return <div>{children}</div>;
};

export default AppWrapper;
