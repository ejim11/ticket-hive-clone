"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "../utils/inputValidators";
import InputComponent from "../InputComponent";
import { FallingLines } from "react-loader-spinner";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createUserDispatch } from "@/actions/userActions";
import { toastError, toastSuccess } from "../utils/helper-func";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { useRouter } from "next/navigation";

const CreateAccountForm = () => {
    const router = useRouter();
    const dispatchFn = useAppDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { details } = useAppSelector((state) => state.user);
    const { accountType, role } = details;

    type FormData = {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    const resetForm = () => {
        reset({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
        router.replace("/auth/login");
    };

    const onSubscribeHandler: SubmitHandler<FormData> = (data) => {
        const userData = { ...data, accountType, role };
        dispatchFn(
            createUserDispatch(
                userData,
                setIsLoading,
                toastSuccess,
                toastError,
                <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
                <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
                resetForm
            )
        );
    };
    return (
        <div className="font-outfit px-[5rem] 4xl:px-[3rem] 2xl:px-[1rem] sm:px-0 sm:mt-[3rem] flex flex-cols items-center flex-col my-[2rem]">
            <h3 className="text-[4rem] font-medium sm:text-[3rem]">
                Create Account
            </h3>
            <p className="text-[#22222299] text-center">
                Fill in your information below and get ready for unforgettable
                experiences
            </p>
            <form
                onSubmit={handleSubmit(onSubscribeHandler)}
                noValidate
                className="w-full mt-[4rem]"
            >
                <div className="flex justify-between sm:flex-col">
                    <InputComponent
                        name={"firstName"}
                        type={"text"}
                        placeholder="Adams"
                        register={register}
                        label="First Name"
                        error={errors}
                        containerWidth="w-[48%] sm:w-full"
                        borderColor="border-[#E0E1E6]"
                        validation={registrationOption.firstname}
                    />
                    <InputComponent
                        name={"lastName"}
                        type={"text"}
                        placeholder="Smith"
                        register={register}
                        label="Last Name"
                        error={errors}
                        containerWidth="w-[48%] sm:w-full"
                        borderColor="border-[#E0E1E6]"
                        validation={registrationOption.lastname}
                    />
                </div>
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
                <InputComponent
                    placeholder={"Password"}
                    type={"password"}
                    register={register}
                    error={errors}
                    name={"password"}
                    validation={registrationOption.password}
                    label="Password"
                    borderColor="border-[#E0E1E6]"
                />
                <button
                    disabled={isLoading}
                    type="submit"
                    className={`mt-[3.5rem] py-[2rem] flex justify-center  font-medium items-center bg-color-purple-1 text-color-white-1 w-full hover:shadow-lg border border-color-purple-1 rounded-lg transition-all duration-300 ease-in ${
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
                        "Create account"
                    )}
                </button>
            </form>
        </div>
    );
};

export default CreateAccountForm;
