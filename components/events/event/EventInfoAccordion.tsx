import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const EventInfoAccordion = ({
    index,
    expanded,
    setExpanded,
    title,
    component,
}: {
    expanded: boolean | number;
    index: number;
    setExpanded: Function;
    title: string;
    component: React.ReactNode;
}) => {
    const isOpen = index === expanded;

    const eventInfoAnimationVariant = {
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.1,
                ease: "linear",
                delay: 0.1,
            },
        },
        collapsed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.1, ease: "linear" },
        },
    };

    const onToggleDisplayEventInfoHandler = () => {
        setExpanded(isOpen ? false : index);
    };
    return (
        <div
            className={`w-full border-t border-[rgba(224,225,230,1)] font-outfit ${
                index === 3 && "border-b"
            }`}
        >
            <button
                type="button"
                onClick={onToggleDisplayEventInfoHandler}
                className="flex justify-between items-center w-full py-[2rem] uppercase "
            >
                <p className="text-[rgba(34,34,34,0.8)] text-[2.2rem] font-semibold">
                    {title}
                </p>
                <IoIosArrowDown
                    className={`text-[rgba(0,0,0,1)] w-[3.2rem] h-[3.2rem] ${
                        isOpen ? "rotate-[180deg]" : "rotate-0"
                    } transition-all duration-150 ease-in`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        layout
                        variants={eventInfoAnimationVariant}
                        className="w-full"
                    >
                        {component}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EventInfoAccordion;
