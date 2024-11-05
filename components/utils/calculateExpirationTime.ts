const calculateExpirationTime = (expirationTime: any) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingTime = adjExpirationTime - currentTime;
    console.log(remainingTime);
    return remainingTime;
};

// retrieves the stored token and re-calculates the expiration time..
export const retrieveStoredToken = () => {
    if (typeof window !== "undefined") {
        const storedToken = localStorage.getItem("userToken");
        const storedRefreshToken = localStorage.getItem("userRefreshToken");
        const storedExpirationTime = localStorage.getItem("expirationTime");

        const remainingTime = calculateExpirationTime(storedExpirationTime);

        if (remainingTime <= 6000) {
            localStorage.removeItem("userToken");
            localStorage.removeItem("userRefreshToken");
            localStorage.removeItem("expirationTime");
            localStorage.removeItem("user");
            return null;
        }

        return {
            token: storedToken,
            refreshToken: storedRefreshToken,
            duration: remainingTime,
        };
    }
};

export default calculateExpirationTime;
