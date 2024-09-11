"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "../utils/inputValidators";
import InputComponent from "../InputComponent";
import { FallingLines } from "react-loader-spinner";
import { IoMdLock } from "react-icons/io";

const CreateAccountForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    const onSubscribeHandler: SubmitHandler<FormData> = () => {};
    return (
        <div className="font-outfit px-[5rem] flex flex-cols items-center flex-col my-[2rem]">
            <h3 className="text-[4rem] font-medium">Create Account</h3>
            <p className="text-[#22222299] text-center">
                Fill in your information below and get ready for unforgettable
                experiences
            </p>
            <form
                onSubmit={handleSubmit(onSubscribeHandler)}
                noValidate
                className="w-full mt-[4rem]"
            >
                <div className="flex justify-between">
                    <InputComponent
                        name={"firstName"}
                        type={"text"}
                        placeholder="Adams"
                        register={register}
                        label="First Name"
                        error={errors}
                        containerWidth="w-[48%]"
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
                        containerWidth="w-[48%]"
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
