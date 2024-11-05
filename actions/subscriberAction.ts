import { subscribeToNewsLetter } from "@/services/subscriberService";
import { ReactNode } from "react";

export const subscribeToNewsLetterDispatch =
    (
        email: string,
        setIsLoading: Function,
        toastSuccess: any,
        toastError: any,
        iconSucess: ReactNode,
        iconError: ReactNode,
        reset: Function
    ) =>
    async (dispatchFn: Function) => {
        setIsLoading(true);
        try {
            const res = await subscribeToNewsLetter(email);
            console.log(res);
            toastSuccess("Subscribed successfully", iconSucess);
            setIsLoading(false);
            reset();
        } catch (error: any) {
            setIsLoading(false);
            console.error(error);
            toastError(error.response.data.detail, iconError);
        }
    };
