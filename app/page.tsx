"use client";

import { lazy } from "react";
const HomeComp = lazy(() => import("@/components/home/HomeComp"));

export default function Home() {
    return <HomeComp />;
}
