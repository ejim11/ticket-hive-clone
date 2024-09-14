"use client";
import React, { useState } from "react";
import footerImg from "../assets/home/footer-img.png";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "../components/utils/inputValidators";
import InputComponent from "./InputComponent";
import { FallingLines } from "react-loader-spinner";

const SubscribeToNewsLetter = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    type FormData = {
        email: string;
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            email: "",
        },
    });

    const onSubscribeHandler: SubmitHandler<FormData> = () => {};

    return (
        <div className="p-[10rem] 2xl:px-[8rem] xlg:px-[3rem] sm:px-[2rem] flex justify-between border-b border-[rgba(255,255,255,.5)] smd:flex-col">
            <div className="w-[45%] xmd:w-[48%] smd:w-full  md:w-[45%]">
                <Image
                    src={footerImg}
                    alt="footer image"
                    priority
                    width={800}
                    height={800}
                    className="w-full h-full"
                />
            </div>
            <div className="w-[45%] xmd:w-[48%]  md:w-[51%] smd:w-full smd:mt-[3rem]  flex flex-col text-color-white-1">
                <p className="text-[5.8rem] xmd:text-[4rem] sm:text-center sm:text-[3rem]">
                    Subscribe to our newsletter
                </p>
                <p className="text-[rgba(255,255,255,0.6)] sm:text-justify">
                    Subscribe to our newsletter and gain access to exclusive
                    deals, early bird ticket sales, and behind-the-scenes
                    insights. Stay informed with the latest updates and enjoy
                    special promotions tailored just for our subscribers
                </p>
                <form
                    onSubmit={handleSubmit(onSubscribeHandler)}
                    noValidate
                    className="mt-[5rem]"
                >
                    <InputComponent
                        placeholder={"Enter your email here"}
                        type={"email"}
                        register={register}
                        error={errors}
                        name={"email"}
                        inputBg="bg-color-transparent"
                        validation={registrationOption.email}
                        border="border-b"
                        inputRadius="rounded-none"
                        borderColor="border-b-color-white-1"
                    />
                    <button
                        disabled={isLoading}
                        type="submit"
                        className={`mt-[3rem] py-[2rem] flex justify-center uppercase font-medium items-center bg-color-purple-1 text-color-white-1 w-full border border-color-purple-1 rounded-lg transition-all duration-300 ease-in ${
                            isLoading && "opacity-75 "
                        }`}
                    >
                        {isLoading ? (
                            <FallingLines
                                height="25"
                                width="25"
                                color={"white"}
                                visible={true}
                            />
                        ) : (
                            "Subscribe"
                        )}
                    </button>
                </form>
                <p className="text-center mt-[2.4rem] text-[rgba(255,255,255,0.5)]">
                    Zero spam. Unsubscribe at anytime
                </p>
            </div>
        </div>
    );
};

export default SubscribeToNewsLetter;
