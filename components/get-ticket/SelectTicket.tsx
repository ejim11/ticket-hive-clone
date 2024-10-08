import React from "react";
import formatAmount from "../utils/formatAmount";

const SelectTicket = ({
    setTicketType,
    ticketType,
    tickets,
}: {
    setTicketType: Function;
    ticketType: any;
    tickets: any[];
}) => {
    const setTicketTypeHandler = (ticketType: any) => {
        setTicketType(ticketType);
    };

    return (
        <div className="flex font-outfit flex-wrap xlg:grid xlg:grid-cols-2 sm:grid-cols-1 xlg:gap-[2rem] w-full">
            {tickets.map((ticket: any, i: number) => (
                <button
                    type="button"
                    key={i}
                    className={`flex w-[45%] xlg:w-full mb-[2rem] px-[2.4rem] py-[2.2rem] items-center mr-[3.2rem] last:mr-0 border rounded-[0.8rem] transition-all ease-in duration-150 hover:text-color-purple-1 hover:bg-[#F8F4FF] hover:border-color-purple-1   ${
                        ticketType && ticketType.title === ticket.title
                            ? "border-color-purple-1 bg-[#F8F4FF] text-color-purple-1"
                            : "border-[#EFF0F3] bg-color-white-1 text-[#222222]"
                    }`}
                    onClick={() => {
                        setTicketTypeHandler(ticket);
                    }}
                >
                    <div className="flex flex-col items-start mr-[5rem] flex-1 text-left">
                        <p className="mb-[2rem] capitalize text-[2.4rem]">
                            {ticket.title} ticket
                        </p>
                        <p
                            className={` ${
                                ticketType && ticketType.title === ticket.title
                                    ? "text-color-purple-1"
                                    : "text-[#7A7A7A]"
                            } `}
                        >
                            {ticket.summary}
                        </p>
                    </div>
                    <p
                        className={` text-[2rem]  ${
                            ticketType && ticketType.title === ticket.title
                                ? "text-color-purple-1"
                                : "text-[#7A7A7A]"
                        } `}
                    >
                        {ticket.price === 0
                            ? "Free"
                            : ` ₦${formatAmount(String(ticket.price))}`}
                    </p>
                </button>
            ))}
        </div>
    );
};

export default SelectTicket;
