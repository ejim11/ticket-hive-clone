"use client";
import AuthComp from "@/components/auth/AuthComp";
import CreateAccountForm from "@/components/auth/CreateAccountForm";
const page = () => {
    return (
        <AuthComp link="/auth/login" linkTitle="Log in">
            <CreateAccountForm />
        </AuthComp>
    );
};

export default page;
