import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { searchAndFilterModalActions } from "@/slices/searchAndFilterSlice";
import { useRouter } from "next/navigation";
import { searchActions } from "@/slices/searchSlice";

const SearchModal = () => {
    const router = useRouter();

    const dispatch = useAppDispatch();

    const { searchText, recentSearches } = useAppSelector(
        (state) => state.search
    );

    const onSearchInputChangeHandler = (e: any) => {
        if (e.target.value === "") {
            router.replace(`/events`);
        }
        dispatch(searchActions.setSearchText(e.target.value));
    };

    const onHideSearchModalHandler = () => {
        dispatch(searchAndFilterModalActions.toggleSearchModal(false));
        dispatch(searchActions.setRecentSearches(searchText));
        dispatch(searchActions.setSearchText(""));
        router.replace(`/events`);
    };

    const removeRecentlySearchedTextHandler = (text: string) => {
        dispatch(searchActions.removeRecentlySearchedText(text));
    };

    useEffect(() => {
        let timer: any;

        if (searchText) {
            timer = setTimeout(() => {
                const search = searchText
                    .slice()
                    .toLowerCase()
                    .split(" ")
                    .join("-");
                router.replace(`/events?name=${search}`);
            }, 1000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [router, searchText]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.15, ease: "easeIn" }}
            className="absolute w-full top-0 left-0 right-0 z-50 bg-color-white-1  shadow-sort-even font-outfit"
        >
            <div className="h-[9rem] px-[5rem] smd:px-[3rem] sm:px-[2rem] flex items-center  justify-between ">
                <Link href={"/"}>
                    <Image
                        src={logo}
                        alt="logo image"
                        width={200}
                        height={200}
                        className="w-auto h-auto xmd:hidden"
                    />
                </Link>
                <div className="flex  rounded-[5rem] bg-[rgba(244,244,244,1)] items-center px-[1.5rem] w-[50%] xmd:flex-1 xmd:mr-[2rem]">
                    <CiSearch className="w-[2.2rem] h-[2.2rem] mr-[1rem] text-[rgba(34,34,34,0.7)] " />
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
                <button
                    type="button"
                    onClick={onHideSearchModalHandler}
                    className="hover:text-color-purple-1 transition-all duration-150 ease-in"
                >
                    Cancel
                </button>
            </div>
            {recentSearches.length > 0 && (
                <div className="flex items-center justify-center border-t border-t-[rgba(224,225,230,1)] shadow">
                    <div className="w-[40%] xmd:w-[90%]   py-[2rem]">
                        <p className="text-[rgba(16,7,7,0.6)] mb-[1.5rem]">
                            Recent searches
                        </p>
                        <div className="w-full">
                            {recentSearches
                                .slice(-5)
                                .map((searchItem: string) => (
                                    <div
                                        key={searchItem}
                                        className="flex items-center justify-between mb-[1.5rem] last:mb-0 "
                                    >
                                        <p>{searchItem}</p>
                                        <VscClose
                                            className="w-[2.4rem] h-[2.4rem] text-[rgba(122,122,122,1)] cursor-pointer"
                                            onClick={() => {
                                                removeRecentlySearchedTextHandler(
                                                    searchItem
                                                );
                                            }}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default SearchModal;
