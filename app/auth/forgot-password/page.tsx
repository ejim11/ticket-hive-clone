"use client";
import AuthComp from "@/components/auth/AuthComp";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import React from "react";

const page = () => {
    return (
        <AuthComp link="/auth/select-account-type" linkTitle="Sign up">
            <ForgotPasswordForm />
        </AuthComp>
    );
};

export default page;
