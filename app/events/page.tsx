"use client";

import React, { Suspense } from "react";
import Events from "@/components/events/Events";
import { useAppSelector } from "@/hooks/customHook";

export default function Page() {
  const { events } = useAppSelector((state) => state.event);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {events.length && <Events />}
      </Suspense>
    </>
  );
}
