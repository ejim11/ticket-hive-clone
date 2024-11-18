import React from "react";

const EventLocation = ({
    venue,
    address,
    virtualLink,
}: {
    venue?: string;
    address?: string;
    virtualLink?: string;
}) => {
    const infos = [
        { title: "Venue", value: venue },
        { title: "Address", value: address },
        { title: "Virtual Link", value: virtualLink },
    ];

    return (
        <div className="flex pt-[1rem] pb-[2rem] font-outfit sm:flex-col">
            {infos.map((info: any) => {
                return (
                    info.value && (
                        <div
                            key={info.title}
                            className="flex flex-col flex-1 sm:mb-[2rem]"
                        >
                            <p className="text-[2rem] font-semibold mb-[1rem] text-[rgba(34,34,34,0.8)]">
                                {info.title}
                            </p>
                            <p className="text-[rgba(41,41,41,0.8)] text-[1.8rem]">
                                {info.value}
                            </p>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default EventLocation;
