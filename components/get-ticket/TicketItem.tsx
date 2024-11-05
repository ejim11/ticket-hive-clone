"use client";
import React, { useState } from "react";
import formatAmount from "../utils/formatAmount";

const TicketItem = ({
  ticket,
  ticketTypes,
  setTicketTypes,
}: {
  ticket: any;
  ticketTypes: any;
  setTicketTypes: Function;
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const setTicketTypeHandler = (e: any, ticket: any) => {
    if (e.target.dataset.body) {
      return;
    }

    const existingSelectedTicketIndex = ticketTypes.findIndex(
      (item: any) => item.ticket.type === ticket.type
    );
    if (existingSelectedTicketIndex >= 0) {
      const existingSelectedTicket = ticketTypes[existingSelectedTicketIndex];

      console.log(existingSelectedTicket);

      const otherTickets = ticketTypes.filter(
        (item: any) => item.ticket.type !== existingSelectedTicket.ticket.type
      );

      setTicketTypes([...otherTickets]);
      setQuantity(1);
      return;
    }
    setTicketTypes([...ticketTypes, { ticket, quantity }]);
  };

  const checkTicket = (ticketType: string) => {
    return (
      ticketTypes.filter((item: any) => item.ticket.type === ticketType)
        .length > 0
    );
  };

  const onSetQuantityHandler = (e: any) => {
    setQuantity(e.target.value);

    const existingSelectedTicketIndex = ticketTypes.findIndex(
      (item: any) => item.ticket.type === ticket.type
    );
    if (existingSelectedTicketIndex >= 0) {
      const existingSelectedTicket = ticketTypes[existingSelectedTicketIndex];

      ticketTypes[existingSelectedTicketIndex].quantity = +e.target.value;

      setTicketTypes([...ticketTypes]);

      return;
    }
  };

  return (
    <button
      type="button"
      className={`flex w-[45%] xlg:w-full mb-[2rem] px-[2.4rem] py-[2.2rem] items-center mr-[3.2rem] xlg:mr-0 last:mr-0 border rounded-[0.8rem] transition-all ease-in duration-150 hover:text-color-purple-1 hover:bg-[#F8F4FF] hover:border-color-purple-1 flex-wrap  ${
        checkTicket(ticket.type)
          ? "border-color-purple-1 bg-[#F8F4FF] text-color-purple-1"
          : "border-[#EFF0F3] bg-color-white-1 text-[#222222]"
      }`}
      onClick={(e: any) => {
        setTicketTypeHandler(e, ticket);
      }}
    >
      <div className="flex flex-col items-start mr-[5rem] flex-1 text-left">
        <p className="mb-[2rem] capitalize text-[2.4rem]">
          {ticket.type} ticket
        </p>
        <p
          className={` ${
            checkTicket(ticket.type) ? "text-color-purple-1" : "text-[#7A7A7A]"
          } `}
        >
          {ticket.summary}
        </p>
      </div>
      <p
        className={` text-[2rem]  ${
          checkTicket(ticket.type) ? "text-color-purple-1" : "text-[#7A7A7A]"
        } `}
      >
        {ticket.price === 0
          ? "Free"
          : ` ₦${formatAmount(String(ticket.price))}`}
      </p>
      {checkTicket(ticket.type) && (
        <div className="w-full flex flex-col items-start mt-[2rem]">
          <label
            htmlFor="quantity"
            className="text-[1.6rem] mb-[1rem] text-color-purple-1"
          >
            Quantity
          </label>
          <input
            data-body="true"
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            min={1}
            onChange={onSetQuantityHandler}
            placeholder="Quantity"
            className="bg-color-white-1 rounded-[0.6rem] px-[2rem] py-[1rem] outline-none ring-0 focus:ring-0 focus:outline-none w-full text-color-purple-1 pla"
          />
          <small className="text-color-purple-1 mt-[0.5rem]">
            max: 10 tickets
          </small>
        </div>
      )}
    </button>
  );
};

export default TicketItem;
