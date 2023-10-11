/* import axios from 'axios'
import {config} from '../config'
const token = window.localStorage.getItem('b4y-token')



//POUR LA PAGE HOME DE TOUTES LES ANNONCES 
export function allAds(){
    return axios.get(`${config.api_url}/api/v1/ads/getAllAds`)
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function takeOneBeer(id){
    return axios.get(`${config.api_url}/api/v1/ads/getOneAd/${id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function addOneBeer(datas){
    return axios.post(`${config.api_url}/api/v1/beer/save`, datas, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function updateOneBeer(datas, id){
    return axios.put(`${config.api_url}/api/v1/beer/update/${id}`, datas, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
}

export function deleteOneBeer(id){
    return axios.delete(`${config.api_url}/api/v1/beer/delete/${id}`, {headers: {"x-access-token": token}})
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        return err
    })
} */
