"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import { MdOutlineDashboard } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { LuTicket } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { dashboardHeaderActions } from "@/slices/dashboardHeaderSlice";
import { getUpcomingEventsDispatch } from "@/actions/dashboardActions";

type HeaderNavLink = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

const DashboardHeader = () => {
  const dispatchFn = useAppDispatch();

  const pathname = usePathname();

  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const { isVisible: dashboardIsVisible } = useAppSelector(
    (state) => state.dashboardHeader
  );

  const iconClassName = "text-color-current w-[2.4rem] h-[2.4rem] mr-[1rem]";

  const headerNavLinks: HeaderNavLink[] = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdOutlineDashboard className={iconClassName} />,
    },
    {
      title: "Event",
      path: "/dashboard/events",
      icon: <BsStack className={iconClassName} />,
    },
    {
      title: "Tickets",
      path: "/dashboard/tickets",
      icon: <LuTicket className={iconClassName} />,
    },
    {
      title: "Help & Support",
      path: "/dashboard/support",
      icon: <IoIosHelpCircleOutline className={iconClassName} />,
    },
  ];

  const closeDashboardHeaderModalHandler = () => {
    dispatchFn(dashboardHeaderActions.setDashboardVisibility(false));
  };

  useEffect(() => {
    dispatchFn(getUpcomingEventsDispatch(setUpcomingEvents));
  }, [dispatchFn]);

  return (
    <header
      className={` xlg:fixed xlg:top-0 xlg:left-0 xlg:bottom-0 bg-[rgba(247,247,247,1)] w-[30rem] border-r border-r-[rgba(239,240,243,1)] flex flex-col font-outfit z-[60] xlg:w-full xlg:bg-color-black-2 ${
        dashboardIsVisible
          ? "xlg:opacity-100 xlg:translate-x-0 xlg:visible"
          : "xlg:opacity-0 xlg:invisible xlg:-translate-x-[100%]"
      } transition-all duration-150 ease-in xlg:shadow-xl`}
      onClick={closeDashboardHeaderModalHandler}
    >
      <div className="px-[2rem] h-[9rem] flex items-center border-b border-b-[rgba(239,240,243,1)] xlg:hidden">
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
      </div>
      <div className="flex flex-col w-full bg-[rgba(247,247,247,1)] xlg:w-[70%] h-full">
        <nav className="px-[2rem] mt-[3rem]">
          <p className="text-[rgba(34,34,34,.6)] text-[1.8rem] xlg:hidden">
            Menu
          </p>
          <ul className="mt-[1.5rem]">
            {headerNavLinks.map((navLink: HeaderNavLink) => (
              <li key={navLink.title} className="mb-[1rem]">
                <Link
                  href={navLink.path}
                  className={`flex items-center p-[1.5rem] rounded-[1.6rem] transition-all duration-150 ease-in ${
                    pathname === navLink.path
                      ? "bg-color-purple-1 text-color-white-1"
                      : "bg-color-transparent text-[rgba(34,34,34,0.8)] hover:text-color-purple-1 hover:bg-color-purple-3"
                  } `}
                >
                  {navLink.icon}
                  <p>{navLink.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-[2rem] mt-[2rem]">
          <p className="text-[rgba(34,34,34,0.6)]">Upcoming events</p>
          <div className="text-[rgba(34,34,34,0.8)] mt-[1.5rem]">
            {upcomingEvents.map((ev: any, i) => (
              <p className="mb-[1rem] capitalize text-color-black-2" key={i}>
                {ev}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-auto p-[2rem] border-t border-t-[rgba(239,240,243,1)] w-full ">
          <button
            type="button"
            className="flex items-center hover:bg-color-purple-3 rounded-[1.6rem] w-full px-[2rem] py-[1rem]"
          >
            <CiLogout className="text-[rgba(144,144,144,1)] w-[2.4rem] h-[2.4rem] mr-[1rem]" />
            <p className="text-[rgba(34,34,34,0.8)]">Logout</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
