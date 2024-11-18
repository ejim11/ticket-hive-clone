"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TicketCreatedVsTicketSoldGraphSkeleton = () => {
    return (
        <div className="flex   relative z-20 w-full my-[5rem]">
            <SkeletonTheme
                baseColor="#f1f3f5"
                highlightColor="rgba(197, 167, 255, 1)"
            >
                <div>
                    <div className="w-[20rem] h-[10rem] rounded-md mb-[1rem]">
                        <Skeleton count={1} className="h-full" />
                    </div>
                    <div className="w-[20rem] h-[10rem] rounded-md mb-[1rem]">
                        <Skeleton count={1} className="h-full" />
                    </div>
                </div>
                <div className="flex-1 h-[30rem] ml-[5rem] rounded-md mb-[1rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
            </SkeletonTheme>
        </div>
    );
};

export default TicketCreatedVsTicketSoldGraphSkeleton;
