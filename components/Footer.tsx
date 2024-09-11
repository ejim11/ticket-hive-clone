"use client";
import React from "react";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter";
import SecondFooterSec from "./SecondFooterSec";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    const isAnAuthPage: boolean = pathname.includes("auth");
    return (
        <footer
            className={`bg-[rgba(15,12,28,1)] flex-col ${
                isAnAuthPage ? "hidden" : " flex "
            }`}
        >
            <SubscribeToNewsLetter />
            <SecondFooterSec />
        </footer>
    );
};

export default Footer;
