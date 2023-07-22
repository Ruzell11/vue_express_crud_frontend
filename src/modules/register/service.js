import axios from "axios";
import { API_URL } from "../common/constants";

export const useToRegisterUser = (params) => {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    return axios.post(`${API_URL}/create-user`, params, axiosConfig);
};
