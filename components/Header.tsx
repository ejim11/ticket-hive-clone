"use client";
import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { AnimatePresence } from "framer-motion";
import { searchAndFilterModalActions } from "@/slices/searchAndFilterSlice";

type NavLinK = {
    title: string;
    link: string;
};

const navLinks = [
    {
        title: "Find event",
        link: "/events",
    },
    {
        title: "Create event",
        link: "/signin",
    },
    {
        title: "About",
        link: "/about-us",
    },
];

const Header = () => {
    const pathname = usePathname();

    const dispatch = useAppDispatch();

    const isAnAuthPage: boolean = pathname.includes("auth");

    const { searchModalIsVisible } = useAppSelector(
        (state) => state.searchAndFilter
    );

    const onDisplaySearchModalHandler = () => {
        dispatch(searchAndFilterModalActions.toggleSearchModal(true));
    };

    return (
        <header
            className={`h-[9rem] items-center px-[5rem] bg-color-white font-outfitn ${
                isAnAuthPage ? "hidden" : " flex "
            }`}
        >
            <Link href={"/"}>
                <Image
                    src={logo}
                    alt="logo image"
                    width={200}
                    height={200}
                    className="w-auto h-auto"
                />
            </Link>
            <div className="flex ml-[5rem] items-center flex-1 ">
                <nav>
                    <ul className="flex items-center">
                        {navLinks.map((link: NavLinK) => (
                            <li
                                key={link.title}
                                className="mr-[2rem] last:mr-0"
                            >
                                <Link
                                    href={link.link}
                                    className="text-[rgba(34,34,34,0.8)] text-[1.8rem] hover:text-color-purple-1 transition-all duration-150 ease-in"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    type="button"
                    className="bg-color-grey-3 flex items-center ml-auto p-[1.5rem] rounded-[4.3rem] text-color-grey-1 w-[30rem]"
                    onClick={onDisplaySearchModalHandler}
                >
                    <CiSearch className="w-[2.2rem] h-[2.2rem] mr-[0.5rem] " />
                    <p>Search</p>
                </button>
                <Link
                    href={"/auth/select-account-type"}
                    className="bg-color-purple-1 block text-color-white-1 py-[1.5rem] px-[4rem] ml-[4rem] rounded-md"
                >
                    Sign up
                </Link>
            </div>
            <AnimatePresence>
                {searchModalIsVisible && <SearchModal />}
            </AnimatePresence>
        </header>
    );
};

export default Header;
