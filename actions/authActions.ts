import calculateExpirationTime from "@/components/utils/calculateExpirationTime";
import {
    forgotPassword,
    loginUser,
    resetPassword,
    sendRefreshToken,
} from "@/services/authService";
import { authActions } from "@/slices/authSlice";
import { userActions } from "@/slices/userSlice";
import { ReactNode } from "react";

let logoutTimer: any;

export const userLoginDispatch =
    (
        userData: { email: string; password: string },
        setIsLoading: Function,
        toastSuccess: any,
        toastError: any,
        iconSucess: ReactNode,
        iconError: ReactNode,
        reset: Function,
        nav1: Function,
        nav2: Function
    ) =>
    async (dispatch: Function) => {
        setIsLoading(true);
        try {
            const res = await loginUser(userData);

            const { accessToken, refreshToken, user } = res.data.data;

            dispatch(userActions.setUserDetails(user));

            // login expires an hour
            const expirationTime = new Date(new Date().getTime() + 3600 * 1000);

            console.log(new Date());

            // calculating the remaining time
            const remainingTime = calculateExpirationTime(
                expirationTime.toISOString()
            );

            // setting a logout timer as soon as one logs in
            logoutTimer = setTimeout(async () => {
                // if (document.visibilityState === "visible") {
                //     // User is still active
                //     const res = await sendRefreshToken(refreshToken);

                //     const {
                //         accessToken: newToken,
                //         refreshToken: newRefrehToken,
                //     } = res.data.data;

                //     dispatch(
                //         authActions.setUserTokens({
                //             accessToken: newToken,
                //             refreshToken: newRefrehToken,
                //             expirationTime: expirationTime.toISOString(),
                //         })
                //     );
                // } else {
                dispatch(authActions.autoLogoutHandler());
                // }
            }, remainingTime);

            dispatch(
                authActions.setUserTokens({
                    accessToken,
                    refreshToken,
                    expirationTime: expirationTime.toISOString(),
                })
            );

            setIsLoading(false);
            toastSuccess("Login successful", iconSucess);

            reset();
            if (user.role === "ticketPurchaser") {
                nav1();
            } else {
                nav2();
            }
        } catch (error: any) {
            setIsLoading(false);
            toastError(error.response.data.message, iconError);
        }
    };

export const userLogout = () => {
    return (dispatch: any) => {
        dispatch(authActions.logoutHandler({ logoutTimer }));
    };
};

// autologout when page is refreshed
export const autoLogout = (tokenDuration: any) => {
    console.log("auto", tokenDuration);
    return (dispatch: any) => {
        logoutTimer = setTimeout(async () => {
            dispatch(authActions.autoLogoutHandler());
        }, tokenDuration);
    };
};

export const autoLogin =
    (tokenDuration: any, refreshToken: string) =>
    async (dispatch: Function) => {
        if (tokenDuration > 6000 && tokenDuration <= 60000) {
            const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
            // User is still active
            const res = await sendRefreshToken(refreshToken);

            const { accessToken: newToken, refreshToken: newRefreshToken } =
                res.data.data;

            dispatch(
                authActions.setUserTokens({
                    accessToken: newToken,
                    refreshToken: newRefreshToken,
                    expirationTime: expirationTime.toISOString(),
                })
            );
        }
    };

export const forgotPasswordDispatch =
    (
        email: string,
        setIsLoading: Function,
        toastSuccess: any,
        toastError: any,
        iconSucess: ReactNode,
        iconError: ReactNode,
        reset: Function
    ) =>
    async (dispatch: Function) => {
        setIsLoading(true);
        try {
            const res = await forgotPassword(email);
            console.log(res);
            toastSuccess("Email sent successfully", iconSucess);
            reset();
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
            toastError(error.response.data.message, iconError);
        }
    };

export const resetPasswordDispatch =
    (
        data: { otp: number; password: string },
        setIsLoading: Function,
        toastSuccess: any,
        toastError: any,
        iconSucess: ReactNode,
        iconError: ReactNode,
        reset: Function
    ) =>
    async (dispatch: Function) => {
        setIsLoading(true);
        try {
            const res = await resetPassword(data);
            console.log(res);
            toastSuccess("Password reset successful", iconSucess);
            reset();
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
            toastError(error.response.data.message, iconError);
        }
    };
