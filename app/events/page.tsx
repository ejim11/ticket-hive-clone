"use client";

import React, { Suspense } from "react";
import Events from "@/components/events/Events";
import { useAppSelector } from "@/hooks/customHook";
import WhyTicketHive from "@/components/WhyTicketHive";

export default function Page() {
  const { events } = useAppSelector((state) => state.event);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {events.length > 0 ? (
          <Events />
        ) : (
          <div className="">
            <div className="w-full h-[40rem] flex items-center justify-center">
              <p>No Event Found.</p>
            </div>
            <WhyTicketHive />
          </div>
        )}
      </Suspense>
    </>
  );
}
