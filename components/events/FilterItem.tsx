import React from "react";
import { FilterObj } from "./Filters";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { searchAndFilterModalActions } from "@/slices/searchAndFilterSlice";

const FilterItem = ({
    filterObj,
    expanded,
    setExpanded,
    index,
}: {
    filterObj: FilterObj;
    expanded: boolean | number;
    setExpanded: Function;
    index: number;
}) => {
    const dispatch = useAppDispatch();

    const { filters } = useAppSelector((state) => state.searchAndFilter);

    const isOpen = index === expanded;

    const onToggleDisplayFiltersHandler = () => {
        setExpanded(isOpen ? false : index);
    };

    const filterAnimationVariant = {
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.1,
                ease: "linear",
                delay: 0.1,
            },
        },
        collapsed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.1, ease: "linear" },
        },
    };

    const filterItem: any = filters.find(
        (filterItem: any) => filterItem.title === filterObj.title
    );

    return (
        <div
            key={filterObj.title}
            className="border-b border-b-[rgba(224,225,230,1)] pb-[1.5rem] bg-color-white-1"
        >
            <button
                className="flex items-center p-[2rem]  justify-between w-full bg-color-white-1"
                onClick={onToggleDisplayFiltersHandler}
            >
                <div className="flex items-center text-[rgba(34,34,34,0.8)] text-[1.8rem] capitalize">
                    <p>{filterObj.title}</p>
                    {filterItem && filterItem.filters.length > 0 ? (
                        <p className="ml-[0.5rem]">
                            ({filterItem.filters.length})
                        </p>
                    ) : null}
                </div>

                {!isOpen ? (
                    <GoPlus className="w-[2.4rem] h-[2.4rem] text-[rgba(122,122,122,1)]" />
                ) : (
                    <HiOutlineMinus className="w-[2.4rem] h-[2.4rem] text-[rgba(122,122,122,1)]" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        layout
                        variants={filterAnimationVariant}
                        className="px-[2rem] w-full "
                    >
                        {filterObj.filters.map((filter: string) => (
                            <div className="flex items-center" key={filter}>
                                {filterItem &&
                                filterItem.filters.includes(filter) ? (
                                    <div className="w-[0.5rem] h-[0.5rem] bg-color-purple-1 rounded-full mr-[1rem]"></div>
                                ) : null}
                                <button
                                    type="button"
                                    className={`w-full py-[1rem] capitalize ${
                                        filterItem &&
                                        filterItem.filters.includes(filter)
                                            ? "text-color-purple-1"
                                            : "text-[rgba(34,34,34,0.5)]"
                                    }  cursor-pointer hover:text-color-purple-1 transition-all duration-150 ease-in text-left`}
                                    onClick={() => {
                                        dispatch(
                                            searchAndFilterModalActions.modifyFilters(
                                                {
                                                    title: filterObj.title,
                                                    filter: filter,
                                                }
                                            )
                                        );
                                    }}
                                >
                                    {filter}
                                </button>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FilterItem;
