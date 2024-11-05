"use client";
import AuthComp from "@/components/auth/AuthComp";
import ForgotPasswordOTP from "@/components/auth/ForgotPasswordOTP";
import React from "react";

const page = () => {
    return (
        <AuthComp link="/auth/select-account-type" linkTitle="Sign up">
            <ForgotPasswordOTP />
        </AuthComp>
    );
};

export default page;
