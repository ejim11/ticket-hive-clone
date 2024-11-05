import { user } from "@/axios.config";
import { User } from "@/types/user.type";

const config = {
    headers: {
        "content-type": "multipart/form-data",
    },
};

export const createUser = async (userData: User) => {
    return await user.post("/", userData);
};
