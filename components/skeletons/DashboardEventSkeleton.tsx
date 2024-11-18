import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardEventSkeleton = () => {
    return (
        <div className="flex  relative z-20 w-full mb-[3rem] items-center">
            <SkeletonTheme
                baseColor="#f1f3f5"
                highlightColor="rgba(197, 167, 255, 1)"
            >
                <div className="w-[15rem] h-[10rem] rounded-md mb-[1rem] mr-[3.2rem]">
                    <Skeleton count={1} className="h-full" />
                </div>
                <div className="">
                    <div className="w-[20rem] h-[1rem] rounded-md mb-[1rem]">
                        <Skeleton count={1} className="h-full" />
                    </div>
                    <div className="w-[20rem] h-[1rem] rounded-md mb-[1rem]">
                        <Skeleton count={1} className="h-full" />
                    </div>
                    <div className="w-[20rem] h-[1rem] rounded-md mb-[1rem]">
                        <Skeleton count={1} className="h-full" />
                    </div>
                </div>
                <div className="w-[2.4rem] h-[2.4rem] rounded-md ml-auto">
                    <Skeleton count={1} className="h-full" />
                </div>
            </SkeletonTheme>
        </div>
    );
};

export default DashboardEventSkeleton;
