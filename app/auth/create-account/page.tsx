import AuthComp from "@/components/auth/AuthComp";
import CreateAccountForm from "@/components/auth/CreateAccountForm";
import React from "react";

const page = () => {
    return (
        <AuthComp link="/auth/login" linkTitle="Log in">
            <CreateAccountForm />
        </AuthComp>
    );
};

export default page;
