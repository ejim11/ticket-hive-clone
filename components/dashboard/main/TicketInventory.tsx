import React, { useEffect, useRef, useState } from "react";
import { dashboardMonthsData } from "@/components/utils/data";
import TicketTableItem from "./TicketTableItem";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/hooks/customHook";
import formatDate from "@/components/utils/formatDate";
import { motion } from "framer-motion";

const TicketInventory = ({
    month,
    title,
    itemsInPage,
    tickets,
}: {
    month: string;
    title?: string;
    itemsInPage: number;
    tickets?: any;
}) => {
    const sectionRef: any = useRef(null);

    const filteredTickets = tickets.filter((tic: any) => {
        if (month === "all" || month === "") {
            return true;
        }

        let monthIndex = new Date(tic.createdAt).getMonth();

        if (monthIndex) {
            return dashboardMonthsData[monthIndex].month === month;
        } else {
            return false;
        }
    });

    const pathname = usePathname();

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = itemsInPage;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = [...filteredTickets]
        .slice()
        .reverse()
        .slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredTickets.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset =
            (event.selected * itemsPerPage) % filteredTickets.length;
        setItemOffset(newOffset);
    };

    const paginateNavStyle =
        "block  bg-color-purple-1 py-[0.5rem] px-[1rem] rounded-lg  border border-color-purple-1 text-color-white-1 hover:bg-color-purple-2 transition-all tableData-200 ease-in capitalize ";

    const tableHeaders = [
        "Ticket ID",
        "Event Name",
        "buyer email",
        "ticket type",
        // "quantity",
        "request date",
        "status",
    ];

    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: "easeIn",
            }}
            className={`border border-[rgba(239,240,243,1)] rounded-[0.8rem] ${
                pathname.includes("tickets") ? "mt-0" : " mt-[3rem] "
            } flex flex-col  font-outfit`}
            ref={sectionRef}
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
                        {currentItems.length > 0 &&
                            currentItems.map((ticket: any, i: number) => {
                                const { dateInNumber, month, year }: any =
                                    formatDate(ticket.updatedAt);
                                return (
                                    <TicketTableItem
                                        key={i}
                                        ticketId={
                                            `#TH-` +
                                            `${ticket.id}`.padStart(3, "0")
                                        }
                                        eventName={ticket.event.name}
                                        buyerEmail={ticket.owner.email ?? ""}
                                        ticketType={ticket.type.toUpperCase()}
                                        quantity={1}
                                        requestDate={`${dateInNumber} ${month}, ${year}`}
                                        status={ticket.ticketStatus}
                                    />
                                );
                            })}
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
                        onClick={(a) => {
                            console.log(a);
                            scrollToSection();
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default TicketInventory;
