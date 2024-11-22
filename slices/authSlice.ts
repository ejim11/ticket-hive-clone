import { retrieveStoredToken } from "@/components/utils/calculateExpirationTime";
import { createSlice } from "@reduxjs/toolkit";

// retrieving the stored token, investor details and expiration time
const tokenData: any = retrieveStoredToken();
let storedToken, storedRefreshToken, storedDuration;
if (tokenData) {
    storedToken = tokenData.token;
    storedRefreshToken = tokenData.refreshToken;
    storedDuration = tokenData.duration;
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: !!storedToken || false,
        token: storedToken || "",
        remainingTime: storedDuration || 0,
        refreshToken: storedRefreshToken || "",
        otp: "",
    },
    reducers: {
        setUserTokens(state: any, action: { payload: any }) {
            state.token = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isLoggedIn = true;
            localStorage.setItem(
                "expirationTime",
                action.payload.expirationTime
            );
            localStorage.setItem("userToken", action.payload.accessToken);
            localStorage.setItem(
                "userRefreshToken",
                action.payload.refreshToken
            );
        },
        // logout handler
        logoutHandler(state: any, action: { payload: any }) {
            state.token = "";
            state.isLoggedIn = false;
            state.refreshToken = "";
            emptyLocalStorage();

            if (action.payload.logoutTimer) {
                clearTimeout(action.payload.logoutTimer);
            }
        },
        autoLogoutHandler(state: any) {
            state.token = "";
            state.isLoggedIn = false;
            state.refreshToken = "";
            emptyLocalStorage();
        },
        setResetOtp(state, action) {
            state.otp = action.payload;
        },
    },
});

function emptyLocalStorage() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRefreshToken");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");
    localStorage.removeItem("dashboardItems");
}

export const authActions = authSlice.actions;
export default authSlice;
