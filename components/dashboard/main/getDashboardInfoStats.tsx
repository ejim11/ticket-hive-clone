import { dashboardMonthsData } from "@/components/utils/data";

const getThePreviousMonth = (currMonth: string) => {
    const currentMonthIndex = dashboardMonthsData.findIndex(
        (mon) => mon.month === currMonth
    );

    const previousMonthIndex =
        dashboardMonthsData.findIndex((mon) => mon.month === currMonth) - 1;

    if (previousMonthIndex >= 0) {
        return dashboardMonthsData[previousMonthIndex].month;
    } else {
        return dashboardMonthsData[currentMonthIndex].month;
    }
};

const getPercentChange = (prevValue: number, currentValue: number) => {
    if (prevValue === 0) {
        return 100;
    }
    return Math.round(((currentValue - prevValue) / prevValue) * 100);
};

export const getDashboardInfoStats = (month: string, events: any) => {
    if (!month || month === "all" || events.length === 0) {
        return {
            ticketPerMonth: events.map((event: any) => event.tickets).flat(),
            filteredEvents: events,
        };
    }

    const previousMonthEvents = events.filter((event: any) => {
        let monthIndex = new Date(event.createdAt).getMonth();
        if (monthIndex) {
            return (
                dashboardMonthsData[monthIndex].month ===
                getThePreviousMonth(month)
            );
        } else {
            return false;
        }
    });

    const currentMonthEvents = events.filter((event: any) => {
        let monthIndex = new Date(event.createdAt).getMonth();
        if (monthIndex) {
            return dashboardMonthsData[monthIndex].month === month;
        } else {
            return false;
        }
    });

    const monthlyEventsStats = getPercentChange(
        previousMonthEvents.length,
        currentMonthEvents.length
    );

    const previousMonthTickets = events
        .map((ev: any) => ev.tickets)
        .flat()
        .filter((tic: any) => {
            let monthIndex = new Date(tic.createdAt).getMonth();

            if (monthIndex) {
                return (
                    dashboardMonthsData[monthIndex].month ===
                    getThePreviousMonth(month)
                );
            } else {
                return false;
            }
        });

    const currentMonthTickets = events
        .map((ev: any) => ev.tickets)
        .flat()
        .filter((tic: any) => {
            let monthIndex = new Date(tic.createdAt).getMonth();
            if (monthIndex) {
                return dashboardMonthsData[monthIndex].month === month;
            } else {
                return false;
            }
        });

    const monthlyTicketsStats = getPercentChange(
        previousMonthTickets.length,
        currentMonthTickets.length
    );

    const previousMonthTicketsSold = previousMonthTickets.filter(
        (tic: any) => tic.status === "sold"
    );

    const currentMonthTicketsSold = currentMonthTickets.filter(
        (tic: any) => tic.status === "sold"
    );

    const monthlyTicketsSoldStats = getPercentChange(
        previousMonthTicketsSold.length,
        currentMonthTicketsSold.length
    );

    const previousMonthRevenue = previousMonthTicketsSold
        .map((tic: any) => tic.price)
        .reduce((acc: number, cur: number) => cur + acc, 0);

    const currentMonthRevenue = currentMonthTicketsSold
        .map((tic: any) => tic.price)
        .reduce((acc: number, cur: number) => cur + acc, 0);

    const monthlyRevenueStats = getPercentChange(
        previousMonthRevenue,
        currentMonthRevenue
    );

    const filteredEvents = events.filter((event: any) => {
        let monthIndex = new Date(event.createdAt).getMonth();
        if (monthIndex) {
            return dashboardMonthsData[monthIndex].month === month;
        } else {
            return false;
        }
    });

    const ticketPerMonth = events
        .map((ev: any) => ev.tickets)
        .flat()
        .filter((tic: any) => {
            let monthIndex = new Date(tic.createdAt).getMonth();

            console.log(monthIndex);

            if (monthIndex) {
                return dashboardMonthsData[monthIndex].month === month;
            } else {
                return false;
            }
        });

    const ticketSoldPerMonth = ticketPerMonth.filter(
        (tic: any) => tic.ticketStatus === "sold"
    );

    const totalRevenuePerMonth = ticketSoldPerMonth
        .map((tic: any) => tic.price)
        .reduce((acc: number, cur: number) => cur + acc, 0);

    return {
        monthlyEventsStats,
        monthlyTicketsStats,
        monthlyTicketsSoldStats,
        monthlyRevenueStats,
        filteredEvents,
        ticketPerMonth,
        ticketSoldPerMonth,
        totalRevenuePerMonth,
    };
};
