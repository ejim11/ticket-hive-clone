import React from "react";
import EventSkeleton from "./skeletons/EventSkeleton";

const EventSkeletonList = () => {
    return (
        <div className="grid grid-cols-event-cat-grid gap-[3rem] w-full px-[3rem] py-[1.5rem] ">
            <div className="w-full ">
                <EventSkeleton />
            </div>
            <div className="w-full ">
                <EventSkeleton />
            </div>
            <div className="w-full ">
                <EventSkeleton />
            </div>
        </div>
    );
};

export default EventSkeletonList;
