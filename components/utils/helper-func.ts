import { toast, Bounce } from "react-toastify";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { ReactNode } from "react";

export const fileHandler = (file: any) => {
    if (file) return URL.createObjectURL(file);
};

export const toastError = (msg: string, icon: any) => {
    toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: { color: "red" },
        progressStyle: { background: "red" },
        icon: icon,
    });
};

export const toastSuccess = (msg: string, icon: any) => {
    toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: { color: "rgba(67, 104, 80)" },
        progressStyle: { background: "rgba(67, 104, 80)" },
        icon: icon,
    });
};
export const isImage = (url: string) => {
    const imageExtensions = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i;
    return imageExtensions.test(url);
};

export const dateDiffInDays = (date1: number, date2: number) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffInMilliseconds = Math.abs(date2 - date1);
    return Math.round(diffInMilliseconds / oneDay);
};

export const futureMonth = (val: number) => {
    const today = new Date();

    // Add 4 months to today's date
    const futureDate = new Date();
    futureDate.setMonth(today.getMonth() + val);
    return futureDate;
};

export const checkImageDimensionsAndSize = (
    file: any,
    errorIcon: ReactNode,
    setImage: Function
) => {
    console.log(file);

    // Check image size
    if (file.size > 10 * 1024 * 1024) {
        toastError("Image size is above 10Mb", errorIcon);
        return;
    }

    // Read the image file and check its resolution
    const reader = new FileReader();

    reader.onload = (event: any) => {
        const img: any = new Image();
        img.src = event.target.result;

        img.onload = () => {
            const width = img.width;
            const height = img.height;

            // Check if the image resolution meets the requirement
            if (width >= 1920 && height >= 1005) {
                setImage(file);
            } else {
                toastError(
                    "Image resolution is too low! Minimum required: 1920x1005",
                    errorIcon
                );
            }
        };
    };

    reader.readAsDataURL(file);
};

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

export const formatDate = (date: string) => {
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear();

    return `${months[month]} ${day}, ${year}`;
};
