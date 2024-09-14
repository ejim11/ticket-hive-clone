"use client";
import React, { ReactNode } from "react";

const SectionCover: React.FC<{ children: ReactNode; className: string }> = ({
    children,
    className,
}) => {
    return (
        <section
            className={`${className} px-[8rem] 2xl:px-[5rem] xlg:px-[3rem] sm:px-[2rem]  `}
        >
            {children}
        </section>
    );
};

export default SectionCover;
