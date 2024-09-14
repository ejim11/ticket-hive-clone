"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "../utils/inputValidators";
import InputComponent from "../InputComponent";
import { FallingLines } from "react-loader-spinner";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

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

    const onSubscribeHandler: SubmitHandler<FormData> = () => {
        router.push("/auth/forgot-password/otp");
    };

    return (
        <div className="font-outfit px-[5rem] 2xl:px-[3rem] sm:px-0 flex flex-cols items-center flex-col my-[2rem] sm:mt-[3rem]">
            <h3 className="text-[4rem] font-medium sm:text-[3rem]">
                Forgot Password
            </h3>
            <p className="text-[#22222299] text-center">
                No worries, we’ll send you the rest instructions
            </p>
            <form
                onSubmit={handleSubmit(onSubscribeHandler)}
                noValidate
                className="w-full mt-[4rem]"
            >
                <InputComponent
                    name={"email"}
                    type={"email"}
                    placeholder="Adams@example.com"
                    register={register}
                    label="Email"
                    error={errors}
                    validation={registrationOption.email}
                    borderColor="border-[#E0E1E6]"
                />

                <button
                    disabled={isLoading}
                    type="submit"
                    className={`mt-[3.5rem] py-[2rem] flex justify-center hover:shadow-lg  font-medium items-center bg-color-purple-1 text-color-white-1 w-full border border-color-purple-1 hover:bg-color-purple-2 hover:border-color-purple-2 rounded-lg transition-all duration-150 ease-in ${
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
                        "Reset password"
                    )}
                </button>
            </form>
            <Link
                href="/auth/login"
                className="flex items-center mt-[2.4rem] hover:text-color-purple-1 transition-all duration-150 ease-in"
            >
                <IoIosArrowRoundBack className="w-[3rem] h-[3rem] text-color-purple-1 mr-[0.5rem]" />
                <p className="text-color-current">Back to login</p>
            </Link>
        </div>
    );
};

export default ForgotPasswordForm;
