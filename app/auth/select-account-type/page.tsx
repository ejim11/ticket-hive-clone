"use client";
import AuthComp from "@/components/auth/AuthComp";
import SelectAccountType from "@/components/auth/SelectAccountType";
import React from "react";

const page = () => {
    return (
        <AuthComp link="/auth/login" linkTitle="Log in">
            <SelectAccountType />
        </AuthComp>
    );
};

export default page;
