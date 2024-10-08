"use client";
import React, { FC, MouseEventHandler, ReactNode } from "react";
import { useAppDispatch } from "@/hooks/customHook";
import { dashboardHeaderActions } from "@/slices/dashboardHeaderSlice";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import { CgMenuLeft } from "react-icons/cg";

const DashboardCover: FC<{
    children: ReactNode;
    title: string;
    btnText: string;
    onClickBtn: MouseEventHandler<HTMLButtonElement>;
}> = ({ title, btnText, onClickBtn, children }) => {
    const dispatchFn = useAppDispatch();

    const openDashboardHeaderModalHandler = (e: any) => {
        e.stopPropagation;
        dispatchFn(dashboardHeaderActions.setDashboardVisibility(true));
    };

    return (
        <div className="flex-1 font-outfit h-screen overflow-y-auto">
            <div className="hidden xlg:flex items-center justify-between h-[8rem] bg-color-white-1 w-full px-[4rem] md:px-[2.5rem] sm:px-[2rem] border-b border-[rgba(0,0,0,0.1)]">
                <Link href={"/"}>
                    <Image
                        src={logoImg}
                        alt="logo image"
                        width={200}
                        height={200}
                        priority
                        className="w-auto h-auto "
                    />
                </Link>
                <button
                    type="button"
                    className="w-[6rem] h-[5rem] border-none flex items-center justify-end"
                    data-open="true"
                    onClick={openDashboardHeaderModalHandler}
                >
                    <CgMenuLeft
                        className="w-[3.5rem] h-[3.5rem]"
                        data-open="true"
                    />
                </button>
            </div>
            <div className="px-[4rem] md:px-[2.5rem] sm:px-[2rem] h-[9rem] flex items-center border-b border-b-[rgba(239,240,243,1)] justify-between">
                <p className="text-[rgba(34,34,34,1)] text-[3.2rem] xlg:text-[3rem] sm:text-[2.5rem]">
                    {title}
                </p>
                <button
                    type="button"
                    onClick={onClickBtn}
                    className="bg-color-purple-1 text-color-white-1 rounded-[0.4rem] py-[1rem] px-[2rem]"
                >
                    {btnText}
                </button>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default DashboardCover;
