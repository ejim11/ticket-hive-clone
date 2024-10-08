import { dashboardMonthsData } from "@/components/utils/data";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchAndFilterSection = ({
    monthFilter,
    setMonthFilter,
}: {
    monthFilter?: string;
    setMonthFilter?: Function;
}) => {
    const [searchText, setSearchText] = useState<string>("");

    const pathname = usePathname();

    const shouldIncludeAllOption: boolean =
        pathname === "/dashboard/tickets" || pathname === "/dashboard/events";

    const onSearchInputChangeHandler = (e: any) => {
        setSearchText(e.target.value);
    };

    const setMonthsFilterHandler = (e: any) => {
        if (setMonthFilter) {
            setMonthFilter(e.target.value);
        }
    };

    return (
        <section className="font-outfit h-[8rem] w-full border-b border-b-[rgba(239,240,243,1)] flex items-center justify-between px-[4rem] md:px-[2.5rem] sm:px-[2rem]">
            <div className="flex  rounded-[0.4rem] border border-[rgba(239,240,243,1)]  items-center px-[1.5rem] w-[40rem]  xmd:flex-1 xmd:mr-[2rem]">
                <CiSearch className="w-[2.2rem] h-[2.2rem] mr-[1rem] text-[rgba(34,34,34,0.7)] flex " />
                <input
                    type="text"
                    name="search-event"
                    id="search-event"
                    placeholder="Search"
                    value={searchText}
                    onChange={onSearchInputChangeHandler}
                    className="bg-color-transparent py-[1rem] outline-none ring-0 flex-1 pr-[1rem]"
                />
            </div>
            <div className="w-[15rem] p-[1rem] border border-[rgba(239,240,243,1)] rounded-[0.4rem]">
                <select
                    name="months"
                    id="months"
                    onChange={setMonthsFilterHandler}
                    value={monthFilter}
                    className="w-full ring-0 outline-none capitalize text-[rgba(34,34,34,0.8)] cursor-pointer"
                >
                    {shouldIncludeAllOption && <option value="all">All</option>}
                    {dashboardMonthsData
                        .slice(0, new Date().getMonth() + 1)
                        .map((month) => (
                            <option key={month.month} value={month.month}>
                                {month.text}
                            </option>
                        ))}
                </select>
            </div>
        </section>
    );
};

export default SearchAndFilterSection;
