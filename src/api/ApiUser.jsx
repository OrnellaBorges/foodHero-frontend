import axios from "axios";
import { config } from "../config";
//const token = window.localStorage.getItem("b4y-token");

export function createOneUser(datas) {
    return axios
        .post(`${config.api_url}api/v1/user/create`, datas)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}

export function loginUser(datas) {
    return axios
        .post(`${config.api_url}api/v1/user/login`, datas)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}

export function updateProfil(datas, id) {
    return axios
        .put(`${config.api_url}api/v1/user/update/${id}`, datas, {
            headers: { "x-access-token": token },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}

export function checkUserToken() {
    return axios
        .get(`${config.api_url}api/v1/user/checkToken`, {
            headers: { "x-access-token": token },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}
