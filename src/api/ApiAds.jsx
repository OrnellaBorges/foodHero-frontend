import axios from "axios";
import { config } from "../../config";

//ICI C'est un fichier spécifique qui regroupe uniquement des fonctions qui permettent de faire des requetes axios
//on pourra faire appel de ses fonctions dans les useEffect plus tard dans les composants

//besoin de recup et stocker le token via la commande window.localStorage.getItem pour ...
//const token = window.localStorage.getItem('b4y-token')

//POUR LA PAGE HOME DE TOUTES LES ANNONCES
export function allAds() {
    return axios
        .get(`${config.api_url}api/v1/ads/getAllAds`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}

//fonction quoi permet de recup toutes les annonces d'un utilisateur
export function allUserAds() {
    return axios
        .get(`${config.api_url}api/v1/ads/getAllAds`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}

// OBTENIR LE DETAIL D'UNE ANNONCE
export function oneAd(adId) {
    return axios
        .get(`${config.api_url}api/v1/ads/getOneAd/${adId}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
}

//CREER et SAUVEGARDER UNE ANNONCE
export function createOneAd(datas) {
    return axios
        .post(`${config.api_url}api/v1/ads/createOneAd`, datas, {
            headers: { "x-access-token": token },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}

//MODIFIER UNE ANNONCE
export function editOneAd(datas, id) {
    return axios
        .put(`${config.api_url}api/v1/ads/updateOneAd/${id}`, datas, {
            headers: { "x-access-token": token },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}

// SUPPRIMER UNE ANNONCE
export function deleteOneAd(id) {
    return axios
        .delete(`${config.api_url}api/v1/ads/deleteOneAd/${id}`, {
            headers: { "x-access-token": token },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}
