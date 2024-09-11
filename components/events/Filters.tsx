import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import FilterItem from "./FilterItem";
import { useAppSelector } from "@/hooks/customHook";

export type FilterObj = {
    title: string;
    filters: string[];
};

const filtersData: FilterObj[] = [
    {
        title: "event category",
        filters: [
            "music",
            "conference",
            "festivals",
            "parties",
            "exhibition",
            "theater",
            "classes",
            "sports",
        ],
    },
    {
        title: "date",
        filters: [
            "today",
            "tomorrow",
            "this weekend",
            "next 7 days",
            "next 30 days",
        ],
    },
    {
        title: "price",
        filters: ["free events", "paid events"],
    },
    {
        title: "attendance mode",
        filters: ["in-person", "online"],
    },
];

const Filters = () => {
    const [expanded, setExpanded] = useState<false | number>(false);
    return (
        <div>
            {filtersData.map((filterObj: FilterObj, index: number) => (
                <FilterItem
                    key={filterObj.title}
                    filterObj={filterObj}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    index={index}
                />
            ))}
        </div>
    );
};

export default Filters;
