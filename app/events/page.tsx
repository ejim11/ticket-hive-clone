"use client";

import React from "react";
import Events from "@/components/events/Events";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  // Convert searchParams to an object if needed
  const searchParamsObject = {
    name: searchParams.get("name") || undefined,
    category: searchParams.get("category") || undefined,
    date: searchParams.get("date") || undefined,
    price: searchParams.get("price") || undefined,
    attendance: searchParams.get("attendance") || undefined,
    sort: searchParams.get("sort") || undefined,
  };

  return <Events searchParams={searchParamsObject} />;
}
