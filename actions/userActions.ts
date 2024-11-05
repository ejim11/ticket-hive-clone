import { userActions } from "@/slices/userSlice";
import { createUser } from "@/services/userService";
import { User } from "@/types/user.type";
import { ReactNode } from "react";

/**
 * function for creating a user
 * @param userData
 * @param setIsLoading
 * @param toastSuccess
 * @param toastError
 * @param iconSucess
 * @param iconError
 * @param reset
 * @returns null
 */
export const createUserDispatch =
    (
        userData: User,
        setIsLoading: Function,
        toastSuccess: any,
        toastError: any,
        iconSucess: ReactNode,
        iconError: ReactNode,
        reset: Function
    ) =>
    async () => {
        setIsLoading(true);
        try {
            await createUser(userData);

            setIsLoading(false);
            toastSuccess("Created successfully", iconSucess);
            reset();
        } catch (error: any) {
            setIsLoading(false);
            toastError(error.response.data.message, iconError);
        }
    };
