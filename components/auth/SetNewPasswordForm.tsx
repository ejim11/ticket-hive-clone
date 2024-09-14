"use client";
import React, { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SetNewPasswordForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [passwordErrText, setPasswordErrText] = useState<string>("");
    const [confirmPasswordErrText, setConfirmPasswordErrText] =
        useState<string>("");

    const onPasswordChangeHandler = (e: any) => {
        setPassword(e.target.value);
        if (e.target.value.length >= 8) {
            setPasswordErrText("");
        }
    };

    const onConfirmPasswordChangeHandler = (e: any) => {
        setConfirmPassword(e.target.value);

        if (e.target.value !== password) {
            setConfirmPasswordErrText("Passwords do not match");
        } else {
            setConfirmPasswordErrText("");
        }
    };

    const togglePasswordVisibleHandler = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    const onSubscribeHandler = (e: any) => {
        e.preventDefault();
        if (password.length < 8) {
            setPasswordErrText("Password must be at least 8 characters");
            return;
        }
    };

    return (
        <div className="font-outfit px-[5rem]  2xl:px-[3rem] sm:px-0  sm:mt-[3rem] flex flex-cols items-center flex-col my-[2rem]">
            <h3 className="text-[4rem] font-medium">Set new password</h3>
            <p className="text-[#22222299] text-center">
                Must be at least 8 characters
            </p>
            <form
                onSubmit={onSubscribeHandler}
                noValidate
                className="w-full mt-[4rem]"
            >
                <div className="flex flex-col mb-[2rem]">
                    <label htmlFor="password" className="mb-[1rem]">
                        Password
                    </label>
                    <div className="w-full relative">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            name="password"
                            id="password"
                            className="rounded-[0.6rem] border border-[#E0E1E6] px-[2rem] py-[1.5rem] w-full outline-none ring-0 focus:outline-none focus:right-0 focus:border-color-purple-1"
                            placeholder={"************"}
                            value={password}
                            onChange={onPasswordChangeHandler}
                            min={8}
                            max={200}
                        />
                        {!isPasswordVisible ? (
                            <FaEye
                                className="absolute w-[2.2rem] h-[2.2rem] top-[1.7rem] right-[1.5rem] text-[#B8B8B8] cursor-pointer"
                                onClick={togglePasswordVisibleHandler}
                            />
                        ) : (
                            <FaEyeSlash
                                className="absolute w-[2.2rem] h-[2.2rem] top-[1.7rem] right-[1.5rem] text-[#B8B8B8] cursor-pointer"
                                onClick={togglePasswordVisibleHandler}
                            />
                        )}
                        {passwordErrText && (
                            <small className="mt-[.5rem] text-color-red">
                                {passwordErrText}
                            </small>
                        )}
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="confirm-password" className="mb-[1rem]">
                        Confirm Password
                    </label>
                    <div className="w-full relative">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            name="confirm-password"
                            id="confirm-password"
                            className="rounded-[0.6rem] border border-[#E0E1E6] px-[2rem] py-[1.5rem] w-full outline-none ring-0 focus:outline-none focus:right-0 focus:border-color-purple-1"
                            placeholder={"************"}
                            value={confirmPassword}
                            onChange={onConfirmPasswordChangeHandler}
                        />
                        {!isPasswordVisible ? (
                            <FaEye
                                className="absolute w-[2.2rem] h-[2.2rem] top-[1.7rem] right-[1.5rem] text-[#B8B8B8] cursor-pointer"
                                onClick={togglePasswordVisibleHandler}
                            />
                        ) : (
                            <FaEyeSlash
                                className="absolute w-[2.2rem] h-[2.2rem] top-[1.7rem] right-[1.5rem] text-[#B8B8B8] cursor-pointer"
                                onClick={togglePasswordVisibleHandler}
                            />
                        )}
                        {confirmPasswordErrText && (
                            <small className="text-color-red mt-[0.5rem]">
                                {confirmPasswordErrText}
                            </small>
                        )}
                    </div>
                </div>
                <button
                    disabled={isLoading}
                    type="submit"
                    className={`mt-[3.5rem] py-[2rem] flex justify-center  font-medium items-center bg-color-purple-1 text-color-white-1 w-full border border-color-purple-1 rounded-lg transition-all duration-300 ease-in ${
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
                className="flex mt-[2.4rem] items-center  hover:text-color-purple-1 transition-all duration-150 ease-in"
            >
                <IoIosArrowRoundBack className="w-[3rem] h-[3rem] text-color-purple-1 mr-[0.5rem]" />
                <p className="text-color-current">Back to login</p>
            </Link>
        </div>
    );
};

export default SetNewPasswordForm;
