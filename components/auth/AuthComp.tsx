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
      <div className="w-[50%] xlg:w-[60%] xmd:w-full flex flex-col justify-between sm:justify-start p-[3.8rem] sm:p-[3rem] ssm:p-[2rem] h-screen overflow-y-auto">
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

          <div className="flex items-center sm:hidden">
            <p className="text-[#22222299] mr-[0.5rem]">
              {linkTitle === "Sign up"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link href={link} className="text-[#8342FF]">
              {linkTitle}
            </Link>
          </div>
        </div>
        <div>{children}</div>
        <div className="items-center hidden sm:flex justify-center mb-[2rem]">
          <p className="text-[#22222299] mr-[0.5rem]">
            {linkTitle === "Sign up"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link href={link} className="text-[#8342FF]">
            {linkTitle}
          </Link>
        </div>
        <p className="text-[#222222CC] sm:mt-auto">© 2024 TicketHive</p>
      </div>
      <div className="w-[50%] xlg:w-[40%] xmd:hidden ">
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
