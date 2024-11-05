"use client";
import GetTicket from "@/components/get-ticket/GetTicket";
import React from "react";

const page = ({ searchParams }: { searchParams: { bought?: string } }) => {
    const bought = searchParams.bought;
    return <GetTicket bought = {bought} />;
};

export default page;
