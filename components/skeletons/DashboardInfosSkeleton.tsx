"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardInfosSkeleton = () => {
    return (
        <div className="grid grid-cols-4 gap-[3rem] w-full  py-[1.5rem]  ">
            {Array.from({ length: 4 }, (v, i) => i).map((i) => (
                <div key={i} className="w-full">
                    <div className="flex  flex-col relative z-20 w-full">
                        <SkeletonTheme
                            baseColor="#f1f3f5"
                            highlightColor="rgba(197,167,255,1)"
                        >
                            <div className="w-full h-[15rem] rounded-md mb-[1rem] ">
                                <Skeleton count={1} className="h-full" />
                            </div>
                        </SkeletonTheme>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardInfosSkeleton;
