import { events, paystack } from "@/axios.config";

export const getAllEvents = async () => {
    return await events.get("");
};

export const payForEvent = async (
    data: {
        eventId: number;
        ticketTypes: any[];
    },
    token: string
) => {
    return await paystack.post("/initialize-payment", data, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};
