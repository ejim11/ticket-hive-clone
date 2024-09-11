"use client";
import EventDetail from "@/components/event-detail/EventDetail";
import React from "react";

const page = ({ params }: { params: { eventId: string } }) => {
    return <EventDetail param={params.eventId} />;
};

export default page;
