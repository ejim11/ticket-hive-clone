import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FallingLines } from "react-loader-spinner";
// import OtpInput from "react-otp-input";
import OtpInput from "react18-input-otp";

const ForgotPasswordOTP = () => {
    const [otp, setOtp] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    return (
        <div className="font-outfit px-[5rem] flex flex-cols items-center flex-col my-[2rem]">
            <h3 className="text-[4rem] font-medium">Forgot Password</h3>
            <p className="text-[#22222299] text-center">
                We sent a code to{" "}
                <span className="text-[#222222]">johndoe@gmail.com</span>
            </p>
            <div className="self-stretch flex flex-col items-center mt-[4rem]">
                <OtpInput
                    value={otp}
                    onChange={(enteredOtp: any) => {
                        setOtp(enteredOtp);
                    }}
                    numInputs={4}
                    isInputNum={true}
                    successStyle={"!border-color-purple-1"}
                    inputStyle="!border-[0.2rem] !border-color-purple-1 ring-0 outline-none focus:ring-0  focus:outline-0  !rounded-[0.8rem] !text-color-black-1 !active:border-color-purple-1 !:outline-color-purple   !w-[9.4rem] !h-[9.4rem] !text-[4rem] !font-outfit otp"
                    separator={<span className="w-[2rem]"></span>}
                />
                <button
                    disabled={isLoading}
                    type="submit"
                    className={`mt-[3.5rem] py-[2rem] flex justify-center hover:shadow-lg  font-medium items-center bg-color-purple-1 text-color-white-1 w-full border border-color-purple-1 hover:bg-color-purple-2 hover:border-color-purple-2  rounded-lg transition-all duration-150 ease-in ${
                        isLoading && "opacity-75 "
                    }`}
                    onClick={() => {
                        router.push("/auth/reset-password");
                    }}
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
            </div>
            <div className="flex flex-col items-center mt-[2.4rem]">
                <div className="flex items-center">
                    <p className="text-[#222222CC]">
                        Didn’t receive the email?{" "}
                    </p>
                    <button
                        type="button"
                        className="text-color-purple-2 hover:text-color-purple-1 transition-all duration-150 ease-in ml-[0.5rem]"
                    >
                        Click to resend
                    </button>
                </div>
                <Link
                    href="/auth/login"
                    className="flex mt-[1rem] items-center  hover:text-color-purple-1 transition-all duration-150 ease-in"
                >
                    <IoIosArrowRoundBack className="w-[3rem] h-[3rem] text-color-purple-1 mr-[0.5rem]" />
                    <p className="text-color-current">Back to login</p>
                </Link>
            </div>
        </div>
    );
};

export default ForgotPasswordOTP;
