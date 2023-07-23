import axios from "axios";
import { API_URL } from "../common/constants";

import jsCookie from 'js-cookie';

export const addTask = (params) => {
    const token = jsCookie.get("token");
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.post(`${API_URL}/add-task`, params, axiosConfig);
};

export const getTaskList = (params) => {
    const token = jsCookie.get("token");
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const data = axios.get(`${API_URL}/tasks`, {
        ...axiosConfig,
        params
    });

    return data
};


export const updateTask = (params) => {
    const token = jsCookie.get("token");
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.patch(`${API_URL}/update-task`, params, axiosConfig);
};


export const deleteTask = (params) => {
    const token = jsCookie.get('token');
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.delete(`${API_URL}/delete-task`, {
        ...axiosConfig,
        data: params
    }
    );
};

export const logoutUser = () => {
    const token = jsCookie.get('token');
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.delete(`${API_URL}/logout`, {
        ...axiosConfig,
    }
    );
};



