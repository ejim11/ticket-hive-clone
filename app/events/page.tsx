"use client";

import React from "react";
import Events from "@/components/events/Events";

const page = ({
  searchParams,
}: {
  searchParams: {
    name?: string;
    category?: string;
    date?: string;
    price?: string;
    attendance?: string;
    sort?: string;
  };
}) => {
  console.log("starting");
  console.log(searchParams);
  return <Events searchParams={searchParams} />;
};

export default page;
