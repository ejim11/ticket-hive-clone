"use client";
import AuthComp from "@/components/auth/AuthComp";
import SetNewPasswordForm from "@/components/auth/SetNewPasswordForm";
import React from "react";

const page = () => {
    return (
        <AuthComp link="/auth/create-account" linkTitle="Sign up">
            <SetNewPasswordForm />
        </AuthComp>
    );
};

export default page;
