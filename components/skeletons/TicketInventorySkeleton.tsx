import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TicketInventorySkeleton = () => {
    return (
        <div className="flex flex-col   relative z-20 w-full my-[5rem]">
            <SkeletonTheme
                baseColor="#f1f3f5"
                highlightColor="rgba(197, 167, 255, 1)"
            >
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="flex-1 h-[3rem]  rounded-md mb-[1.5rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
            </SkeletonTheme>
        </div>
    );
};

export default TicketInventorySkeleton;
