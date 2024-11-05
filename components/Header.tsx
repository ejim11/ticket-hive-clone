"use client";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { AnimatePresence, motion } from "framer-motion";
import { searchAndFilterModalActions } from "@/slices/searchAndFilterSlice";
import { CgMenuLeft } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { userActions } from "@/slices/userSlice";
import { FaUser } from "react-icons/fa6";
import { userLogout } from "@/actions/authActions";

type NavLinK = {
    title: string;
    link: string;
};

const navLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Find event",
        link: "/events",
    },
    {
        title: "About",
        link: "/about-us",
    },
];

const Header = () => {
    const pathname = usePathname();

    const dispatch = useAppDispatch();

    const hideHeader: boolean =
        pathname.includes("auth") || pathname.includes("dashboard");

    const { details }: any = useAppSelector((state) => state.user);

    const { token } = useAppSelector((state) => state.auth);

    const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

    const [profileModalIsVisible, setProfileModalIsVisible] =
        useState<boolean>(false);

    const { searchModalIsVisible } = useAppSelector(
        (state) => state.searchAndFilter
    );

    const onDisplaySearchModalHandler = () => {
        dispatch(searchAndFilterModalActions.toggleSearchModal(true));
        toggleMenuDisplayHandler();
    };

    const toggleMenuDisplayHandler = () => {
        setMenuIsVisible((prevState) => !prevState);
    };

    const closeMenuDisplayHandler = (e: any) => {
        if (e.target.dataset.close) {
            setMenuIsVisible(false);
            return;
        }
    };

    const toggleProfileModalHandler = (e: any) => {
        setProfileModalIsVisible((prevState) => !prevState);
    };

    const logout = () => {
        setProfileModalIsVisible(false);
        dispatch(userActions.setUserDetails(null));
        dispatch(userLogout());
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const details = JSON.parse(
                window.localStorage.getItem("user") || "{}"
            );

            dispatch(userActions.setUserDetails(details));
        }
    }, [dispatch]);

    return (
        <header
            className={`h-[9rem] items-center px-[5rem] fixed top-0 right-0 left-0 z-[100] xlg:px-[3rem] sm:px-[2rem] bg-color-white-1 shadow-md font-outfit ${
                hideHeader ? "hidden" : " flex "
            }`}
        >
            <Link href={"/"}>
                <Image
                    src={logo}
                    alt="logo image"
                    width={200}
                    height={200}
                    className="w-auto h-auto "
                />
            </Link>
            <div
                className={` ml-[5rem] lg:ml-0 flex-1  lg:fixed lg:top-0 lg:right-0 lg:left-0 lg:h-screen  lg:z-[120] lg:bg-[rgba(0,0,0,0.8)] lg:flex lg:transition-all lg:duration-200 lg:ease-in ${
                    menuIsVisible
                        ? "lg:opacity-100  lg:translate-x-0 "
                        : "lg:opacity-0 lg:-translate-x-[100%]"
                }`}
                data-close="true"
                onClick={closeMenuDisplayHandler}
            >
                <div className="flex  items-center  lg:items-start   lg:flex-col  lg:h-full lg:bg-color-purple-1 lg:w-[50%] xmd:w-[60%] md:w-[65%] smd:w-[70%] sm:w-[75%] ssm:w-[85%]  lg:px-[2.5rem] lg:py-[3rem] ">
                    <nav className="lg:order-2 lg:my-[3rem]">
                        <ul className="flex items-center lg:flex-col lg:items-start ">
                            {navLinks.map((link: NavLinK) => (
                                <li
                                    key={link.title}
                                    className="mr-[2rem] last:mr-0"
                                >
                                    <Link
                                        href={link.link}
                                        className={`text-[1.8rem] hover:text-color-purple-1 transition-all duration-150 ease-in lg:block lg:py-[1rem]  lg:hover:text-color-white-1 ${
                                            pathname === link.link
                                                ? "text-color-purple-1 lg:text-color-black-1"
                                                : "text-[rgba(34,34,34,0.8)] lg:text-color-white-1"
                                        }`}
                                        data-close="true"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        type="button"
                        className="bg-color-grey-3 lg:order-1 flex items-center ml-auto p-[1.5rem] rounded-[4.3rem] text-color-grey-1 w-[30rem] lg:w-full"
                        onClick={onDisplaySearchModalHandler}
                    >
                        <CiSearch className="w-[2.2rem] h-[2.2rem] mr-[0.5rem] " />
                        <p>Search</p>
                    </button>

                    {details && details.firstName ? (
                        <button
                            className="flex items-center bg-color-purple-1 text-color-white-1 px-[2rem] py-[1rem] rounded-[0.6rem] ml-[3rem] lg:hidden"
                            onClick={toggleProfileModalHandler}
                        >
                            <FaUser className="text-color-current w-[2.3rem] h-[2.3rem] mr-[1rem]" />
                            <p>{details.firstName}</p>
                        </button>
                    ) : (
                        <div className={`lg:order-3 flex items-center `}>
                            <Link
                                href={"/auth/login"}
                                className="bg-color-purple-1 lg:bg-color-white-1 lg:ml-0  lg:text-color-purple-1 text-color-white-1 py-[1.5rem] px-[4rem] ml-[4rem] xlg:ml-[2rem] rounded-md "
                                data-close="true"
                            >
                                Login
                            </Link>
                            <Link
                                href={"/auth/select-account-type"}
                                className="bg-color-purple-1  lg:bg-color-white-1   lg:text-color-purple-1 block text-color-white-1 py-[1.5rem] px-[4rem] ml-[2rem] xlg:ml-[2rem] rounded-md xlg:hidden lg:block"
                                data-close="true"
                            >
                                Sign up
                            </Link>
                        </div>
                    )}
                    <AnimatePresence>
                        {profileModalIsVisible && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.15, ease: "easeIn" }}
                                className="absolute right-[5rem] flex flex-col -bottom-[7rem] rounded-[0.6rem] bg-color-white-1 text-color-purple-1 shadow-2xl overflow-hidden"
                            >
                                <button
                                    type="button"
                                    className="px-[2rem] py-[1rem] hover:bg-color-purple-3"
                                >
                                    Profile
                                </button>
                                <button
                                    type="button"
                                    className="px-[2rem] py-[1rem] hover:bg-color-purple-3"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <IoCloseSharp
                    className="hidden  lg:block ml-auto w-[3rem] h-[3rem] text-color-white-1 mt-[2.5rem] mr-[2.5rem] ssm:mr-[2rem] ssm:mt-[2rem]"
                    onClick={toggleMenuDisplayHandler}
                />
            </div>
            {!menuIsVisible && (
                <CgMenuLeft
                    className="hidden lg:block ml-auto w-[3rem] h-[3rem] "
                    onClick={toggleMenuDisplayHandler}
                />
            )}

            <AnimatePresence>
                {searchModalIsVisible && <SearchModal />}
            </AnimatePresence>
        </header>
    );
};

export default Header;
