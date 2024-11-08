"use client";
import React, { ReactNode, useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { userActions } from "@/slices/userSlice";

const SelectAccountType = () => {
    const [mouseOnBtn, setMouseOnBtn] = useState<any>();
    // const [accountType, setAccountType] = useState<string>("");

    const { details } = useAppSelector((state) => state.user);

    const dispatchFn = useAppDispatch();

    const { accountType } = details;

    type AccountType = {
        icon: ReactNode;
        title: string;
        text: string;
        enum: string;
    };
    const accountTypes: AccountType[] = [
        {
            icon: (
                <LuCalendarDays className="text-color-current w-[3.3rem] h-[3.3rem]" />
            ),
            title: "Event Organiser",
            text: "Create, manage, and promote events effortlessly",
            enum: "eventOrganiser",
        },
        {
            icon: (
                <HiOutlineUserGroup className="text-color-current w-[3.3rem] h-[3.3rem]" />
            ),
            title: "Ticket Purchaser",
            text: "Browse and buy tickets to your favorite events hassle-free",
            enum: "ticketPurchaser",
        },
    ];

    const onSelectAccountType = (accType: AccountType) => {
        if (accountType === accType.title) {
            dispatchFn(
                userActions.setAccountTypeAndRole({
                    accountType: "",
                    role: "",
                })
            );
            return;
        }

        dispatchFn(
            userActions.setAccountTypeAndRole({
                accountType: accType.enum,
                role: accType.enum,
            })
        );
    };

    return (
        <div className="flex flex-col items-center my-[2rem] px-[4rem] xl:px-[2rem] xlg:px-0 sm:mt-[3rem]">
            <h3 className="text-[4rem] font-medium smd:text-[3rem]">
                Select account type
            </h3>
            <p className="text-[#22222299] sm:text-center">
                Are you here to organize events or purchase tickets?
            </p>
            <div className="flex mt-[4rem] sm:flex-col">
                {accountTypes.map((accType: AccountType, i) => (
                    <button
                        key={accType.title}
                        className={`flex flex-col items-center border  flex-1 mr-[3rem] sm:mr-0 sm:mb-[3rem] last:mr-0 p-[3rem] rounded-[0.8rem]  hover:text-color-purple-1 hover:border-color-purple-1 transition-all duration-150 ease-in ${
                            accountType === accType.enum
                                ? "bg-[#F3EDFF] text-color-purple-1 border-color-purple-1"
                                : "bg-color-transparent text-[#E0E1E6] border-[#E0E1E6]"
                        } `}
                        onClick={() => {
                            onSelectAccountType(accType);
                        }}
                        onMouseOver={() => {
                            setMouseOnBtn(i);
                        }}
                        onMouseLeave={() => {
                            setMouseOnBtn(null);
                        }}
                    >
                        {accType.icon}
                        <p
                            className={` mt-[3rem] font-medium text-[2rem] ${
                                mouseOnBtn === i || accountType === accType.enum
                                    ? "text-color-purple-1"
                                    : "text-[#222222CC]"
                            }`}
                        >
                            {accType.title}
                        </p>
                        <p className="text-[#22222299] mb-[3rem]">
                            {accType.text}
                        </p>
                        <div
                            className={`w-[2.4rem] h-[2.4rem] rounded-full mt-auto ${
                                accountType === accType.enum
                                    ? "border-[0.5rem]"
                                    : "border-[0.15rem]"
                            }  border-color-inherit mt-[3rem]`}
                        ></div>
                    </button>
                ))}
            </div>
            <div className="mt-[4rem] flex justify-between self-stretch sm:flex-col">
                <Link
                    href={"/"}
                    type="button"
                    className=" py-[1.5rem] px-[3rem] text-color-purple-1 bg-[#F3EDFF] rounded-[0.6rem] capitalize text-[1.8rem] sm:mb-[2rem] sm:text-center sm:order-2"
                >
                    back
                </Link>
                <Link
                    href="/auth/create-account"
                    type="button"
                    className={`${
                        !accountType ? "bg-[#8342FF4D]" : "bg-color-purple-1 "
                    }  rounded-[0.6rem] py-[1.5rem] px-[3rem] text-color-white-1 disabled:cursor-not-allowed capitalize text-[1.8rem] transition-all duration-150 ease-in sm:text-center sm:mb-[1rem] sm:order-1`}
                >
                    continue
                </Link>
            </div>
        </div>
    );
};

export default SelectAccountType;
