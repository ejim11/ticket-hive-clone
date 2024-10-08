import React from "react";

const TicketInfo = ({
    index,
    title,
    summary,
    body,
}: {
    index: number;
    title: string;
    summary: string;
    body: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col font-outfit mb-[5rem]">
            <div className="flex items-center">
                <p className="px-[1.4rem] bg-[#222222] rounded-[0.6rem] text-color-white-1 mr-[1.1rem] text-[2rem]">
                    {index}
                </p>
                <p className="text-[3.5rem] xlg:text-[3rem] font-medium text-[#222222]">
                    {title}
                </p>
            </div>
            <p className="text-[#222222] text-[1.8rem]">{summary}</p>
            <div className="flex mt-[4rem]">{body}</div>
        </div>
    );
};

export default TicketInfo;
