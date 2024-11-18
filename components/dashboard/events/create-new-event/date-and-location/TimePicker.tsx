"use client";
import { toastError } from "@/components/utils/helper-func";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { LuBadgeAlert, LuClock } from "react-icons/lu";

const times = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));

const TimePicker = ({
    time,
    setTime,
    eventFrom,
}: {
    time?: string;
    setTime?: Function;
    eventFrom?: string;
}) => {
    const [isTimesModalVisible, setIsTimesModalVisible] = useState(false);

    const onFocusHandler = (e: any) => {
        e.preventDefault();
        setIsTimesModalVisible(true);
    };

    const onBlurHandler = (e: any) => {
        e.preventDefault();
        setIsTimesModalVisible(false);
        if (!e.target.value) {
            return;
        }
        const timeRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;

        if (!timeRegex.test(e.target.value)) {
            toastError(
                "Invalid time format",
                <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] text-color-red" />
            );
        }
    };

    const toggleTimesModal = () => {
        setIsTimesModalVisible((prevState) => !prevState);
    };

    const onChangeHandler = (e: any) => {
        setIsTimesModalVisible(false);
        if (setTime) setTime(e.target.value);
    };

    const checkTimeDiff = (chosenTime: any) => {
        if (!eventFrom) {
            return false;
        }
        if (
            +chosenTime.slice().split(":")[0] === 0 &&
            +eventFrom.slice().split(":")[0] !== 0
        ) {
            return false;
        }
        if (
            +eventFrom.slice().split(":")[0] === 0 &&
            +chosenTime.slice().split(":")[0] === 0
        ) {
            return true;
        }
        return (
            +eventFrom.slice().split(":")[0] >=
            +chosenTime.slice().split(":")[0]
        );
    };

    return (
        <div
            className={`flex   border border-[rgba(223,225,228,1)] px-[1rem] py-[0.5rem] rounded-[0.6rem] relative`}
        >
            <input
                name="datalist-start-times"
                id="datalist-start-times"
                type="text"
                className="w-[5.5rem] ring-0 outline-none focus:ring-0 focus:outline-none"
                placeholder="00:00"
                pattern="^([01][0-9]|2[0-3]):[0-5][0-9]$"
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                value={time}
                onChange={onChangeHandler}
            />
            <LuClock
                className="w-[2.5rem] h-[2.5rem] cursor-pointer text-[rgba(34,34,34,0.8)]"
                onClick={toggleTimesModal}
            />
            <AnimatePresence>
                {isTimesModalVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15, ease: "easeIn" }}
                        className="absolute -bottom-[21.5rem] right-0 w-[25rem] bg-color-white-1 border border-color-purple-1 px-[1rem] pt-[1rem]  rounded-[0.6rem] justify-between flex  flex-wrap z-[50] "
                    >
                        {times.map((time) => (
                            <button
                                disabled={checkTimeDiff(time)}
                                key={time}
                                className="w-[23%] text-[1.4rem] border border-color-purple-1  text-color-purple-1 bg-color-white-1 rounded-[0.6rem] mb-[1rem] hover:bg-color-purple-1 hover:text-color-white-1 transition-all ease-in duration-150 disabled:text-color-purple-3 disabled:border-color-purple-3"
                                onClick={() => {
                                    if (setTime) setTime(time + ":00");
                                    setIsTimesModalVisible(false);
                                }}
                            >
                                {time + ":00"}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TimePicker;
