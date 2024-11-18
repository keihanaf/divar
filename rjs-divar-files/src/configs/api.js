import axios from "axios";
import {getCookie, setCookie} from "utils/cookie.js";
import {getNewTokens} from "services/token.js";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use((request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
        request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
}, (error) => {
    return Promise.reject(error);
})

api.interceptors.response.use((response) => {
    return response;
},async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const res = await getNewTokens();
        if (!res?.response) return;
        setCookie(res.response.data)
        return api(originalRequest)
    }
})

export default api;