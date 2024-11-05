import { subscriber } from "@/axios.config";

export const subscribeToNewsLetter = async (email: string) => {
    return await subscriber.post("/", { email });
};
