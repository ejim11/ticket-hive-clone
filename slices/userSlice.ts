import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        details: {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            accountType: "",
            role: "",
        },
    },
    reducers: {
        setAccountTypeAndRole(
            state,
            action: { payload: { accountType: string; role: string } }
        ) {
            state.details.accountType = action.payload.accountType;
            state.details.role = action.payload.role;
        },
        setUserDetails(state: any, action: { payload: any }) {
            if (!action.payload) {
                state.details.id = "";
                state.details.firstName = "";
                state.details.lastName = "";
                state.details.email = "";
                state.details.accountType = "";
                state.details.role = "";
                return;
            }

            state.details.id = action.payload.id;
            state.details.firstName = action.payload.firstName;
            state.details.lastName = action.payload.lastName;
            state.details.email = action.payload.email;
            state.details.accountType = action.payload.accountType;
            state.details.role = action.payload.role;

            localStorage.setItem("user", JSON.stringify(action.payload));
        },
    },
});

export const userActions = userSlice.actions;
export default userSlice;
