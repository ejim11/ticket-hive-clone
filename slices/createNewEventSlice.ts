// import { formatDate } from "@/components/utils/helper-func";
import { createSlice } from "@reduxjs/toolkit";

function formatDate(date: any) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const createNewEventSlice = createSlice({
    name: "createNewEvent",
    initialState: {
        isCreateEventModalVisible: false,
        ticketTypeList: [
            "general",
            "early bird",
            "VIP",
            "student ticket",
            "group ticket",
        ],
        details: {
            name: "",
            category: "",
            description: "",
            eventStartDate: formatDate(new Date().toDateString()),
            eventEndDate: "",
            eventDuration: "single-day",
            eventStartFrom: "",
            eventStartTo: "",
            eventEndFrom: "",
            eventEndTo: "",
            venue: "",
            address: "",
            virtualLink: "",
            choosenLocationTypes: [],
            ticketTypes: [],
        },
    },
    reducers: {
        toggleCreateEventModal: (state: any, action) => {
            state.isCreateEventModalVisible = action.payload;
        },
        addTicketType: (state: any, action) => {
            state.ticketTypeList = [...state.ticketTypeList, action.payload];
        },
        setEventDetail: (state: any, action) => {
            // {name: ""}
            state.details = { ...state.details, ...action.payload };
        },
        onChangeTicketPrice: (
            state: any,
            action: { payload: { type: string; value: number | string } }
        ) => {
            const { type, value } = action.payload;
            // find ticket
            const ticketIndex = state.details.ticketTypes.findIndex(
                (ticket: any) => ticket.type === type
            );

            const ticket = state.details.ticketTypes[ticketIndex];

            // change the value of the price of ticket
            state.details.ticketTypes[ticketIndex] = {
                ...ticket,
                price: value,
            };
        },
        onChangeTicketQty: (
            state: any,
            action: { payload: { type: string; value: number | string } }
        ) => {
            const { type, value } = action.payload;
            // find ticket
            const ticketIndex = state.details.ticketTypes.findIndex(
                (ticket: any) => ticket.type === type
            );

            const ticket = state.details.ticketTypes[ticketIndex];

            // change the value of the price of ticket
            state.details.ticketTypes[ticketIndex] = {
                ...ticket,
                quantity: value,
            };
        },
        onChangeTicketSummary: (
            state: any,
            action: { payload: { type: string; value: string } }
        ) => {
            const { type, value } = action.payload;
            // find ticket
            const ticketIndex = state.details.ticketTypes.findIndex(
                (ticket: any) => ticket.type === type
            );

            const ticket = state.details.ticketTypes[ticketIndex];

            // change the value of the price of ticket
            state.details.ticketTypes[ticketIndex] = {
                ...ticket,
                summary: value,
            };
        },
    },
});

export const createNewEventActions = createNewEventSlice.actions;

export default createNewEventSlice;
