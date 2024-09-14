import AuthComp from "@/components/auth/AuthComp";
import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const page = () => {
    return (
        <AuthComp link="/auth/select-account-type" linkTitle="Sign up">
            <LoginForm />
        </AuthComp>
    );
};

export default page;
