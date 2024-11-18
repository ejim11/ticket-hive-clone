const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function formatDate(date: string) {
    if (!date) {
        return;
    }
    const currentDate = new Date(date);
    const dateInNumber = new Date(currentDate.setDate(currentDate.getDate()))
        .getDate()
        .toString()
        .padStart(2, "0");
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return {
        dateInNumber,
        day,
        month,
        year,
    };
}

export default formatDate;
