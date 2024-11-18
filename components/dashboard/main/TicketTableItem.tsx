import React from "react";

type TicketInfo = {
    ticketId: string;
    eventName: string;
    buyerEmail: string;
    ticketType: string;
    quantity: number;
    requestDate: string;
    status: string;
};

const TicketTableItem = ({
    ticketId,
    eventName,
    buyerEmail,
    ticketType,
    quantity,
    requestDate,
    status,
}: TicketInfo) => {
    const ticketInfo = [
        {
            title: "ticket id",
            value: ticketId,
        },
        {
            title: "event name",
            value: eventName,
        },
        {
            title: "buyer email",
            value: buyerEmail,
        },
        {
            title: "ticket type",
            value: ticketType,
        },
        // {
        //     title: "quantity",
        //     value: quantity,
        // },
        {
            title: "request date",
            value: requestDate,
        },
        {
            title: "status",
            value: status,
        },
    ];

    return (
        <tr className="border-b border-b-[rgba(239,240,243,1)]">
            {ticketInfo.map((info: any) => (
                <td
                    key={info.title}
                    className="text-center p-[1rem] font-normal font-outfit"
                >
                    {info.value}
                </td>
            ))}
        </tr>
    );
};

export default TicketTableItem;
