import { events, tickets } from "@/axios.config";

export const getDashboardTickets = async (token: string, month?: string) => {
    let str = month
        ? `/get-creator-tickets?month=${month}`
        : `/get-creator-tickets`;
    return await tickets.get(str, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};

export const getDashboardEvents = async (id: number, month?: string) => {
    let str = month ? `?owner=${id}&month=${month}` : `?owner=${id}`;
    return await events.get(str);
};

export const createEvent = async (token: string, data: any) => {
    const formData = new FormData();

    formData.append("name", data.name.toLowerCase());
    formData.append("attendanceMode", data.attendanceMode);
    formData.append("category", data.category);
    formData.append("description", data.description);
    data.eventEndDate && formData.append("eventEndDate", data.eventEndDate);
    formData.append("eventEndTime", data.eventEndTime);
    formData.append("eventStartDate", data.eventStartDate);
    formData.append("eventStartTime", data.eventStartTime);
    formData.append("file", data.imageObj);
    formData.append("priceType", data.priceType);
    formData.append("venue", data.venue);
    formData.append("address", data.address);
    formData.append("virtualLink", data.virtualLink);

    data.tickets.forEach((ticket: any, index: number) => {
        Object.keys(ticket).forEach((key) => {
            formData.append(`tickets[${index}][${key}]`, ticket[key]);
        });
    });

    return await events.post("/", formData, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};
