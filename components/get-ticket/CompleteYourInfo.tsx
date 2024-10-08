import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "../utils/inputValidators";
import InputComponent from "../InputComponent";
import { FallingLines } from "react-loader-spinner";
import formatAmount from "../utils/formatAmount";
import CongratulationsModal from "./CongratulationsModal";

const CompleteYourInfo = ({
    ticketType,
    setDisplayCongratsModal,
}: {
    ticketType: any;
    setDisplayCongratsModal: Function;
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    type FormData = {
        firstName: string;
        lastName: string;
        email: string;
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
        },
    });

    const onSubmitCompleteInfo: SubmitHandler<FormData> = () => {
        setDisplayCongratsModal(true);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmitCompleteInfo)}
            noValidate
            className="w-full "
        >
            <div className="flex justify-between sm:flex-wrap">
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

            <button
                disabled={isLoading}
                type="submit"
                className={`mt-[3.5rem] py-[1.5rem] px-[10rem] xmd:w-full uppercase flex justify-center  font-medium items-center bg-color-purple-1 text-color-white-1  hover:shadow-lg border border-color-purple-1 rounded-lg transition-all duration-300 ease-in text-[1.8rem] ${
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
                    `get your ticket ${
                        ticketType
                            ? ticketType.price === 0
                                ? " - Free"
                                : `- ₦${formatAmount(String(ticketType.price))}`
                            : ""
                    } `
                )}
            </button>
        </form>
    );
};

export default CompleteYourInfo;
