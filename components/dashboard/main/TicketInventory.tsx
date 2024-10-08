import React, { useState } from "react";
import { getDashboardInfoStats } from "./getDashboardInfoStats";
import { eventsDashboardData } from "@/components/utils/data";
import TicketTableItem from "./TicketTableItem";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";

const TicketInventory = ({
    month,
    title,
    data,
    itemsInPage,
}: {
    month: string;
    title?: string;
    data: any;
    itemsInPage: number;
}) => {
    const { ticketPerMonth } = getDashboardInfoStats(month, data);

    const pathname = usePathname();

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = itemsInPage;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = [...ticketPerMonth]
        .reverse()
        .slice(itemOffset, endOffset);
    const pageCount = Math.ceil(ticketPerMonth.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset =
            (event.selected * itemsPerPage) % ticketPerMonth.length;
        setItemOffset(newOffset);
    };

    const paginateNavStyle =
        "block  bg-color-purple-1 py-[0.5rem] px-[1rem] rounded-lg  border border-color-purple-1 text-color-white-1 hover:bg-color-purple-2 transition-all tableData-200 ease-in capitalize ";

    const tableHeaders = [
        "Ticket ID",
        "Event Name",
        "buyer email",
        "ticket type",
        "quantity",
        "request date",
        "status",
    ];

    return (
        <div
            className={`border border-[rgba(239,240,243,1)] rounded-[0.8rem] ${
                pathname.includes("tickets") ? "mt-0" : " mt-[3rem] "
            } flex flex-col  font-outfit`}
        >
            {title && (
                <div className="px-[2rem] py-[2.5rem] w-full">
                    <p className="text-[2.4rem] text-[rgba(34,34,34,1)] font-medium">
                        {title}
                    </p>
                </div>
            )}
            <div className="w-full md:overflow-x-auto">
                <table className="w-full md:min-w-max">
                    <thead>
                        <tr className="bg-[rgba(247,247,247,1)] ">
                            {tableHeaders.map((text: string) => (
                                <th
                                    key={text}
                                    className="capitalize py-[1.5rem] text-[1.4rem] text-[rgba(34,34,34,0.8)] font-normal px-[2rem] w-auto"
                                >
                                    {text}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((ticket: any, i: number) => (
                            <TicketTableItem
                                key={i}
                                ticketId={`#TH-` + `${i + 1}`.padStart(3, "0")}
                                eventName={`Lagos Island ${i + 1}`}
                                buyerEmail={"ejim@gmail.com"}
                                ticketType={`${
                                    i % 2 === 0 ? "VIP" : "General"
                                }`}
                                quantity={1}
                                requestDate={"02/07/2024. 01:46"}
                                status={ticket.status}
                            />
                        ))}
                    </tbody>
                </table>
                {/* react paginate */}
                <div className="flex mt-[2rem] px-[2rem] pt-[2rem] pb-[3rem]">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={
                            <p className="flex items-center ">
                                <span>next</span>
                                <MdKeyboardArrowRight className="text-color-current ml-[0.5rem] w-[2.2rem] h-[2.2rem]" />
                            </p>
                        }
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel={
                            <p className="flex items-center">
                                <MdKeyboardArrowLeft className="text-color-current mr-[0.5rem] w-[2.2rem] h-[2.2rem]" />
                                <span>previous</span>
                            </p>
                        }
                        renderOnZeroPageCount={null}
                        containerClassName="flex items-center ml-auto sm:ml-0 sm:mr-auto"
                        previousClassName="mr-[1rem]"
                        nextClassName="ml-[1rem]"
                        previousLinkClassName={paginateNavStyle}
                        nextLinkClassName={paginateNavStyle}
                        pageLinkClassName="paginate-page-link"
                        activeLinkClassName="paginate-active-page-link"
                    />
                </div>
            </div>
        </div>
    );
};

export default TicketInventory;
