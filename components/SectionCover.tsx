"use client";
import React, { ReactNode } from "react";

const SectionCover: React.FC<{ children: ReactNode; className: string }> = ({
    children,
    className,
}) => {
    return <section className={`${className} px-[8rem]  `}>{children}</section>;
};

export default SectionCover;
