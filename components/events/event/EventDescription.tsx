import React from "react";

const EventDescription = ({ description }: { description: string }) => {
    return (
        <div className="w-full pb-[2rem] pt-[1rem]">
            <p className="text-[rgba(34,34,34,0.8)] text-[2rem] font-semibold mb-[1.5rem]">
                About the event
            </p>
            <p>{description}</p>
        </div>
    );
};

export default EventDescription;
