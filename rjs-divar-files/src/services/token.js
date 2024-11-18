import {getCookie} from "utils/cookie.js";
import api from "configs/api.js";

const getNewTokens = async () => {
    const refreshToken = getCookie("refreshToken");
    if (!refreshToken) return;
    try {
        const response = await api.post("/auth/check-refresh-token", {
            refreshToken,
        })
        return {response}
    } catch (error) {
        return {error}
    }
}

export {getNewTokens}