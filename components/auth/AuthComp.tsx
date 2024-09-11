"use client";
import React from "react";
import Image from "next/image";
import authImg from "../../assets/autthImg.png";
import logo from "../../assets/logo.svg";
import Link from "next/link";

const AuthComp: React.FC<{
    children: React.ReactNode;
    link: string;
    linkTitle: string;
}> = ({ children, link, linkTitle }) => {
    return (
        <section className="flex h-screen font-outfit">
            <div className="w-[50%] flex flex-col justify-between p-[3.8rem] h-screen overflow-y-auto">
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <Image
                            src={logo}
                            alt="logo image"
                            priority
                            width={200}
                            height={200}
                            className="w-auto h-auto"
                        />
                    </Link>

                    <div className="flex items-center">
                        <p className="text-[#22222299]">
                            Already have an account? {" "}
                        </p>
                        <Link href={link} className="text-[#8342FF]">
                            {linkTitle}
                        </Link>
                    </div>
                </div>
                <div>{children}</div>
                <p className="text-[#222222CC]">© 2024 TicketHive</p>
            </div>
            <div className="w-[50%] ">
                <Image
                    src={authImg}
                    alt={"auth pages image"}
                    priority
                    width={600}
                    height={600}
                    className="w-full h-full"
                />
            </div>
        </section>
    );
};

export default AuthComp;
