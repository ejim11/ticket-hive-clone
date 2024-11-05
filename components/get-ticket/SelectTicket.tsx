"use client";
import React, { useEffect, useState } from "react";
import formatAmount from "../utils/formatAmount";
import TicketItem from "./TicketItem";
import { FallingLines } from "react-loader-spinner";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { payForEventDispatch } from "@/actions/eventActions";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { toastError, toastSuccess } from "../utils/helper-func";
import { useRouter } from "next/navigation";

const SelectTicket = ({ tickets }: { tickets: any[] }) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const pathname = usePathname();

  const { token } = useAppSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [ticketTypes, setTicketTypes] = useState([]);

  // Use a Set to track unique types
  let uniqueTickets = Array.from(
    new Map(tickets.map((ticket) => [ticket.type, ticket])).values()
  ).sort((a, b) => a.price - b.price);

  const navigate = (url: string) => {
    router.push(url);
  };

  const buyTicketsHandler = () => {
    const eventData: { eventId: number; ticketTypes: any[] } = {
      eventId: +pathname.slice().split("/")[2],
      ticketTypes,
    };

    dispatch(
      payForEventDispatch(
        eventData,
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        navigate
      )
    );
  };

  const totalAmount = ticketTypes
    .map((item: any) => {
      return item.ticket.price * item.quantity;
    })
    .reduce((acc: any, cur: any) => acc + cur, 0);

  const checkTicketQuantities = () => {
    return ticketTypes
      .map((ticket: any) => ticket.quantity)
      .some((quantity: any) => quantity === 0 || quantity > 10);
  };

  checkTicketQuantities();

  return (
    <div className=" w-full flex flex-col">
      <div className="flex font-outfit flex-wrap xlg:grid xlg:grid-cols-2 sm:grid-cols-1 xlg:gap-[2rem] w-full">
        {uniqueTickets.map((ticket: any, i: number) => (
          <TicketItem
            key={i}
            ticket={ticket}
            ticketTypes={ticketTypes}
            setTicketTypes={setTicketTypes}
          />
        ))}
      </div>
      {token ? (
        <button
          disabled={
            isLoading || ticketTypes.length === 0 || checkTicketQuantities()
          }
          type="submit"
          className={`mt-[3.5rem] py-[1.5rem] px-[10rem] xmd:w-full uppercase flex justify-center  font-medium items-center bg-color-purple-1 text-color-white-1  hover:shadow-lg border border-color-purple-1 rounded-lg transition-all duration-300 ease-in text-[1.8rem] self-start disabled:bg-color-purple-3 disabled:border-color-purple-3 disabled:cursor-not-allowed  ${
            isLoading && "opacity-75 "
          }`}
          onClick={buyTicketsHandler}
        >
          {isLoading ? (
            <FallingLines
              height="25"
              width="25"
              color={"white"}
              visible={true}
            />
          ) : (
            `get your ticket - ₦${formatAmount(String(totalAmount))}`
          )}
        </button>
      ) : (
        <p className="font-semibold text-[1.8rem] text-color-purple-1">
          Please login to get tickets.
        </p>
      )}
    </div>
  );
};

export default SelectTicket;
