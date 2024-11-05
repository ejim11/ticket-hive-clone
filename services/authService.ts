import { auth } from "@/axios.config";

export const loginUser = async (userData: {
    email: string;
    password: string;
}) => {
    return await auth.post("/sign-in", userData);
};

export const sendRefreshToken = async (refreshToken: string) => {
    return await auth.post("/refresh-tokens", { refreshToken });
};

export const forgotPassword = async (email: string) => {
    return await auth.post("/forgot-password", { email });
};

export const resetPassword = async (data: {
    otp: number;
    password: string;
}) => {
    return await auth.patch("/reset-password", data);
};
