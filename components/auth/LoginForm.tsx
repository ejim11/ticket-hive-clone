"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "../utils/inputValidators";
import InputComponent from "../InputComponent";
import { FallingLines } from "react-loader-spinner";
import Link from "next/link";
import { motion } from "framer-motion";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);

  type FormData = {
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
      email: "",
      password: "",
    },
  });

  const onSubscribeHandler: SubmitHandler<FormData> = () => {};

  return (
    <div className="font-outfit px-[5rem] 2xl:px-[3rem] sm:px-0 flex flex-cols items-center flex-col my-[2rem]">
      <h3 className="text-[4rem] sm:text-[3rem] font-medium">Login</h3>
      <p className="text-[#22222299] text-center">
        Access your account and continue your journey to unforgettable
        experiences.
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
        <InputComponent
          placeholder={"************"}
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
            "Login"
          )}
        </button>
      </form>
      <div className="mt-[2rem] flex items-center justify-between self-stretch">
        <div>
          <div className="flex items-center me-4">
            <input
              id="logged-in"
              name="logged-in"
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked((prevState) => !prevState);
              }}
              className="hidden focus:ring-0   ring-0 outline-none focus:outline-none"
            />
            <div
              className={`w-[2rem] h-[2rem] border ${
                checked ? "border-color-purple-1" : "border-[#9C9C9C40]"
              }  rounded-[0.4rem] flex  justify-center transition-all duration-100 ease-in  cursor-pointer`}
              onClick={() => {
                setChecked((prevState) => !prevState);
              }}
            >
              <motion.div
                layout
                transition={{ duration: 0.1 }}
                className={` ${
                  checked ? " h-[0.6rem] w-[1.2rem] " : "h-0 w-0"
                }  border-l-[0.2rem] border-b-[0.2rem] mt-[0.5rem] -rotate-[45deg]  transition-all duration-150 ease-in ${
                  checked ? "border-color-purple-1" : "border-color-transparent"
                } `}
              ></motion.div>
            </div>
            <label
              htmlFor="logged-in"
              className=" font-medium text-[#222222CC] ml-[1rem] cursor-pointer "
            >
              Keep me logged in
            </label>
          </div>
        </div>
        <Link
          href={"/auth/forgot-password"}
          className="text-color-purple-2 hover:text-color-purple-1 font-medium transition-all duration-150 ease-in"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
