"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EventSkeleton = () => {
    return (
        <div className="flex  flex-col relative z-20 w-full">
            <SkeletonTheme
                baseColor="#f1f3f5"
                highlightColor="rgba(197, 167, 255, 1)"
            >
                <div className="w-full h-[25rem] rounded-md mb-[1rem]">
                    <Skeleton count={1} className="h-full" />
                </div>

                <div className="flex-1 h-[1.5rem] mx-[1rem]">
                    <Skeleton count={3} className="h-full" />
                </div>

                <div className="w-[8rem] h-[2.5rem] mx-[1rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
            </SkeletonTheme>
        </div>
    );
};

export default EventSkeleton;
