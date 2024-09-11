import React from "react";

const EventLocation = ({
    venue,
    address,
}: {
    venue: string;
    address: string;
}) => {
    const infos = [
        { title: "Venue", value: venue },
        { title: "Address", value: address },
    ];

    return (
        <div className="flex pt-[1rem] pb-[2rem] font-outfit">
            {infos.map((info: any) => (
                <div key={info.title} className="flex flex-col flex-1">
                    <p className="text-[2rem] font-semibold mb-[1rem] text-[rgba(34,34,34,0.8)]">
                        {info.title}
                    </p>
                    <p className="text-[rgba(41,41,41,0.8)] text-[1.8rem]">
                        {info.value}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default EventLocation;
