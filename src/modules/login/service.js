import axios from "axios";
import { API_URL } from "../common/constants";

export const useToLoginUser = (params) => {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    return axios.post(`${API_URL}/login-user`, params, axiosConfig);
};
