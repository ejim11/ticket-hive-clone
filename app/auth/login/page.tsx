import AuthComp from "@/components/auth/AuthComp";
import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const page = () => {
    return (
        <AuthComp link="/auth/create-account" linkTitle="Sign up">
            <LoginForm />
        </AuthComp>
    );
};

export default page;
